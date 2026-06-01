// 📦 CODENAME: RESOURCE-HUB-CACHE-V1
const CACHE_NAME = 'resource-hub-cache-v1';

// 📄 Saari core files jinhe offline chalane ke liye save karna hai
const ASSETS_TO_CACHE = [
    './',
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

// 2. ⚡ ACTIVATE EVENT: Agar purana cache ho toh delete karo taaki naya code load ho sake
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
    // Google Drive ke links ko cache nahi karna hai (kyunki PDFs bina internet ke load nahi ho sakte)
    if (e.request.url.includes('drive.google.com') || e.request.url.includes('uc?export=')) {
        return; // Drive links ko seedhe internet se chalne do
    }

    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            // Agar file cache mein mil gayi toh offline hi de do (Super-fast load)
            if (cachedResponse) {
                return cachedResponse;
            }
            
            // Agar cache mein nahi hai toh internet (Network) se fetch karo
            return fetch(e.request).catch(() => {
                // Agar internet bhi nahi hai aur file bhi nahi mili, toh safe-side index.html khol do
                if (e.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
