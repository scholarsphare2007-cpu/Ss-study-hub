let currentLimit = 6; 
let filteredData = []; 
let customLightState = 'off'; // Master custom light status tracking

// 🌌 REAL-TIME AMBIENT ENVIRONMENT ENGINE (Clock + Day/Night Sync)
function runLiveUniverseEngine() {
    const now = new Date();
    
    // ==========================================
    // ⏰ LIVE DIGITAL CLOCK ACCURATE RE-RENDER
    // ==========================================
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const formattedTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    
    const clockElement = document.getElementById('liveClock');
    if (clockElement) {
        clockElement.innerText = formattedTime;
    }

    // ==========================================
    // ☀️ DYNAMIC ORBITAL TRIGO TRACKING
    // ==========================================
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const totalMinutesInDay = (currentHour * 60) + currentMin;

    let celestialX = 0;
    let celestialY = 100;
    const bodyNode = document.getElementById('skyBody');
    const root = document.documentElement;

    if (currentHour >= 5 && currentHour < 19) {
        const startDayMin = 5 * 60;
        const endDayMin = 19 * 60;
        const ratio = (totalMinutesInDay - startDayMin) / (endDayMin - startDayMin);
        
        celestialX = ratio * 100; 
        celestialY = 85 - (Math.sin(ratio * Math.PI) * 70); 
        
        if (bodyNode) {
            bodyNode.style.background = '#f59e0b'; 
            bodyNode.style.boxShadow = '0 0 40px #f59e0b, 0 0 80px #eab308, 0 0 150px rgba(245,158,11,0.6)';
        }
        
        const nightPanel = document.getElementById('nightPanel');
        if (nightPanel) nightPanel.style.display = 'none';
        clearSurvivalLights();
    } else {
        let ratio = 0;
        if (currentHour >= 19) {
            ratio = ((currentHour - 19) * 60 + currentMin) / (10 * 60);
        } else {
            ratio = ((currentHour + 5) * 60 + currentMin) / (10 * 60);
        }
        
        celestialX = ratio * 100;
        celestialY = 85 - (Math.sin(ratio * Math.PI) * 70);
        
        if (bodyNode) {
            bodyNode.style.background = '#f8fafc'; 
            bodyNode.style.boxShadow = '0 0 30px #cbd5e1, 0 0 60px #94a3b8';
        }
        
        const nightPanel = document.getElementById('nightPanel');
        if (nightPanel) nightPanel.style.display = 'flex';
    }

    root.style.setProperty('--sun-moon-x', `${celestialX}%`);
    root.style.setProperty('--sun-moon-y', `${celestialY}%`);

    // ==========================================
    // 🌲 AUTOMATED MAUSAM DYNAMIC SHIFT ENGINE
    // ==========================================
    if (customLightState === 'off') {
        if (currentHour >= 5 && currentHour < 8) { 
            root.style.setProperty('--sky-top', '#ff7e5f'); root.style.setProperty('--sky-bottom', '#feb47b');
            root.style.setProperty('--jungle-darkness', 'brightness(0.55) contrast(1.1)');
            root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.45)');
            root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.25)');
            root.style.setProperty('--text-color', '#1e293b'); root.style.setProperty('--text-muted', '#475569');
        } else if (currentHour >= 8 && currentHour < 16) { 
            root.style.setProperty('--sky-top', '#bae6fd'); root.style.setProperty('--sky-bottom', '#0284c7');
            root.style.setProperty('--jungle-darkness', 'brightness(1) saturate(1.2)');
            root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.85)');
            root.style.setProperty('--card-border', 'rgba(0, 0, 0, 0.08)');
            root.style.setProperty('--text-color', '#0f172a'); root.style.setProperty('--text-muted', '#475569');
        } else if (currentHour >= 16 && currentHour < 19) { 
            root.style.setProperty('--sky-top', '#f97316'); root.style.setProperty('--sky-bottom', '#4c1d95');
            root.style.setProperty('--jungle-darkness', 'brightness(0.4) saturate(1.4)');
            root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.15)');
            root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.2)');
            root.style.setProperty('--text-color', '#ffffff'); root.style.setProperty('--text-muted', '#cbd5e1');
        } else { 
            root.style.setProperty('--sky-top', '#020617'); root.style.setProperty('--sky-bottom', '#0f172a');
            root.style.setProperty('--jungle-darkness', 'brightness(0.15) contrast(1.2)');
            root.style.setProperty('--card-glass', 'rgba(15, 23, 42, 0.65)');
            root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.08)');
            root.style.setProperty('--text-color', '#f8fafc'); root.style.setProperty('--text-muted', '#94a3b8');
        }
    }
}

// 💡 NEW SINGLE STABLE AMBIENT LIGHT TOGGLE MASTER
function toggleAmbientMasterLight() {
    const root = document.documentElement;
    const panel = document.getElementById('nightPanel');

    if (customLightState === 'on') {
        customLightState = 'off';
        if (panel) panel.classList.remove('active');
        root.style.setProperty('--lantern-glow', 'radial-gradient(circle, transparent 100%, transparent 100%)');
        runLiveUniverseEngine();
    } else {
        customLightState = 'on';
        if (panel) panel.classList.add('active');
        root.style.setProperty('--lantern-glow', 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.45) 0%, transparent 60%)');
        root.style.setProperty('--card-glass', 'rgba(38, 26, 12, 0.85)');
        root.style.setProperty('--card-border', 'rgba(251, 191, 36, 0.35)');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--text-muted', '#fde68a');
    }
}

function clearSurvivalLights() {
    customLightState = 'off';
    const panel = document.getElementById('nightPanel');
    if (panel) panel.classList.remove('active');
    document.documentElement.style.setProperty('--lantern-glow', 'radial-gradient(circle, transparent 100%, transparent 100%)');
}

// ==========================================
// 📄 RENDER MECHANICS
// ==========================================
function filterResources() {
    const courseValue = document.getElementById('courseFilter').value;
    const semValue = document.getElementById('semFilter').value;
    const typeValue = document.getElementById('typeFilter').value;
    const searchValue = document.getElementById('materialSearch') ? document.getElementById('materialSearch').value.toLowerCase().trim() : '';
    
    const grid = document.getElementById('resourcesGrid');
    const noResults = document.getElementById('noResults');
    
    // Safety check for resourcesData
    const dataSrc = typeof resourcesData !== 'undefined' ? resourcesData : [];
    
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card => card.remove());
    
    currentLimit = 6;
    filteredData = [];

    dataSrc.forEach(item => {
        const matchCourse = (courseValue === 'all' || item.course === courseValue);
        const matchSem = (semValue === 'all' || item.semester === semValue);
        const matchType = (typeValue === 'all' || item.type === typeValue);
        
        const matchSearch = searchValue === '' || 
                            (item.title && item.title.toLowerCase().includes(searchValue)) ||
                            (item.subject && item.subject.toLowerCase().includes(searchValue)) ||
                            (item.course && item.course.toLowerCase().includes(searchValue));
        
        if (matchCourse && matchSem && matchType && matchSearch) {
            filteredData.push(item);
        }
    });

    if (filteredData.length === 0) {
        if(noResults) noResults.style.display = 'block';
        document.getElementById('loadMoreContainer').style.display = 'none';
        return;
    } else {
        if(noResults) noResults.style.display = 'none';
    }

    renderCards();
}

function renderCards() {
    const grid = document.getElementById('resourcesGrid');
    const dataToRender = filteredData.slice(0, currentLimit);

    const oldCards = grid.querySelectorAll('.card');
    oldCards.forEach(card => card.remove());

    dataToRender.forEach((item, index) => {
        let tagClass = 'tag-notes';
        if (item.type === 'Practical-Files' || item.type === 'Practical File') tagClass = 'tag-file';
        if (item.type === 'PYQ') tagClass = 'tag-pyq';
        if (item.type === 'Syllabus') tagClass = 'tag-syllabus';
        if (item.type === 'Assignment') tagClass = 'tag-assignment';
        if (item.type === 'Important-Topics') tagClass = 'tag-topics';
        if (item.type === 'Paper') tagClass = 'tag-paper';

        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${(index % 6) * 0.05}s`;
        
        let rawLink = item.link || '';
        let originalDriveLink = rawLink.trim();
        let directDownloadLink = '';

        // 🚨 CRITICAL CHECK: Agar link '#' hai, khali hai, ya undefined hai
        let isLinkValid = originalDriveLink !== '' && originalDriveLink !== '#';

        if (isLinkValid && originalDriveLink.includes('drive.google.com')) {
            if (originalDriveLink.includes('/file/d/')) {
                const parts = originalDriveLink.split('/file/d/');
                if (parts[1]) {
                    const fileId = parts[1].split('/')[0];
                    directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
                }
            } else if (originalDriveLink.includes('id=')) {
                try {
                    const urlParams = new URLSearchParams(originalDriveLink.split('?')[1]);
                    const fileId = urlParams.get('id');
                    if (fileId) {
                        directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
                    }
                } catch(e) {
                    directDownloadLink = originalDriveLink;
                }
            }
        }

        // Setup Attributes based on validity (No more blank pages for '#')
        let linkAttrView = isLinkValid ? `href="${originalDriveLink}" target="_blank"` : `href="javascript:void(0);" onclick="alert('Bhai, Govind ne abhi iska PDF upload nahi kiya hai! Stay tuned.')"`;
        let linkAttrDownload = isLinkValid ? `href="${directDownloadLink || originalDriveLink}" target="_blank"` : `href="javascript:void(0);" onclick="alert('Bhai, jab file hi nahi hai toh download kya karega! Pehle link aane de.')"`;

        card.innerHTML = `
            <div>
                <span class="card-tag ${tagClass}">${item.type}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-meta"><strong>${item.course}</strong> — ${item.semester}</p>
            </div>
            <div class="card-actions">
                <a ${linkAttrView} class="action-btn btn-view">View PDF</a>
                <a ${linkAttrDownload} class="action-btn btn-download">Download</a>
            </div>
        `;
        grid.appendChild(card);
    });

    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const loadMoreCount = document.getElementById('loadMoreCount');

    if(loadMoreCount) {
        loadMoreCount.innerText = `Showing ${Math.min(currentLimit, filteredData.length)} of ${filteredData.length} items`;
    }

    if (filteredData.length > currentLimit) {
        if(loadMoreContainer) loadMoreContainer.style.display = 'block';
    } else {
        if(loadMoreContainer) loadMoreContainer.style.display = 'none';
    }
}

function loadMoreCards() {
    currentLimit += 6;
    renderCards();
}

// 📱 MOBILE NATIVE BOTTOM NAVBAR TRACKING DECOUPLER ARCHITECTURE
window.addEventListener('scroll', () => {
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const devSection = document.getElementById('aboutDeveloper');
    
    if (bottomNavItems.length >= 3 && devSection) {
        const rect = devSection.getBoundingClientRect();
        // Check if Developer Spec is visible inside viewport
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 200) {
            bottomNavItems[0].classList.remove('active');
            bottomNavItems[2].classList.add('active');
        } else {
            bottomNavItems[2].classList.remove('active');
            bottomNavItems[0].classList.add('active');
        }
    }
});

window.onload = () => {
    filterResources();
    setInterval(runLiveUniverseEngine, 500); 
};
