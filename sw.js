// 📦 CODENAME: RESOURCE-HUB-CACHE-V2
const CACHE_NAME = 'resource-hub-cache-v2';

// 📄 Saari core files jinhe offline chalane ke liye save karna hai
const ASSETS_TO_CACHE = [
    '/',
    './index.html',
    './script.js',
    './data.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    './my-pic.jpeg',
    './screenshot-desktop.png'
];

// 1. 📥 INSTALL EVENT: Saare assets ko phone memory (Cache) mein daalo
self.addEventListener('install', (e) => {
    console.log('Bhai, Service Worker: Installing and Caching Assets...');
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => {
            return self.skipWaiting();
        })
    );
});

// 2. ⚡ ACTIVATE EVENT: Purana cache delete karo taaki naya domain code load ho sake
self.addEventListener('activate', (e) => {
    console.log('Bhai, Service Worker: Activating and Clearing Old Caches...');
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Bhai, Service Worker: Clearing Old Cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// 3. 🔄 FETCH EVENT: Data flow controller (Offline engine trigger)
self.addEventListener('fetch', (e) => {
    // Google Drive ke links ko cache nahi karna hai
    if (e.request.url.includes('drive.google.com') || e.request.url.includes('uc?export=')) {
        return; // Drive links ko seedhe internet se chalne do
    }

    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            // Agar file cache mein mil gayi toh offline hi de do
            if (cachedResponse) {
                return cachedResponse;
            }
            
            // Agar cache mein nahi hai toh internet se fetch karo
            return fetch(e.request).catch(() => {
                // Offline fallback
                if (e.request.mode === 'navigate') {
                    return caches.match('/') || caches.match('./index.html');
                }
            });
        })
    );
});
