let currentLimit = 6; // Ek baar me kitne cards dikhane hain
let filteredData = []; // Filtered data ka global array
let activeLightMode = 'off'; // Night utility light tracker

// 🌌 REAL-TIME AMBIENT ENVIRONMENT ENGINE (Clock + Day/Night Sync)
function runLiveUniverseEngine() {
    const now = new Date();
    
    // ==========================================
    // ⏰ 1. LIVE DIGITAL CLOCK LOGIC (No Freeze, Continuous Loop)
    // ==========================================
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 ko 12 banayega
    
    const formattedTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    
    // UI par time push karo
    const clockElement = document.getElementById('liveClock');
    if (clockElement) {
        clockElement.innerText = formattedTime;
    }

    // ==========================================
    // ☀️ 2. DYNAMIC CELESTIAL ORBIT MATHEMATICS (Sun/Moon Movement)
    // ==========================================
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const totalMinutesInDay = (currentHour * 60) + currentMin;

    let celestialX = 0;
    let celestialY = 100;
    const bodyNode = document.getElementById('skyBody');
    const root = document.documentElement;

    // Perfect Day-Night Time Slots Check (5 AM to 7 PM Day)
    if (currentHour >= 5 && currentHour < 19) {
        // DAY CYCLE ARC - Suraj Left se Right smoothly move karega
        const startDayMin = 5 * 60;
        const endDayMin = 19 * 60;
        const ratio = (totalMinutesInDay - startDayMin) / (endDayMin - startDayMin);
        
        celestialX = ratio * 100; // 0% to 100% across screen
        celestialY = 85 - (Math.sin(ratio * Math.PI) * 70); // Smooth upward mathematical curve arc
        
        if (bodyNode) {
            bodyNode.style.background = '#f59e0b'; // Sun Gold Color
            bodyNode.style.boxShadow = '0 0 40px #f59e0b, 0 0 80px #eab308, 0 0 150px rgba(245,158,11,0.6)';
        }
        
        // Hide manual night utility switches during day
        const nightPanel = document.getElementById('nightPanel');
        if (nightPanel) nightPanel.style.display = 'none';
        clearSurvivalLights();
    } else {
        // NIGHT CYCLE ARC - Chand chalega
        let ratio = 0;
        if (currentHour >= 19) {
            ratio = ((currentHour - 19) * 60 + currentMin) / (10 * 60);
        } else {
            ratio = ((currentHour + 5) * 60 + currentMin) / (10 * 60);
        }
        
        celestialX = ratio * 100;
        celestialY = 85 - (Math.sin(ratio * Math.PI) * 70);
        
        if (bodyNode) {
            bodyNode.style.background = '#f8fafc'; // Moon Silver Pearl White
            bodyNode.style.boxShadow = '0 0 30px #cbd5e1, 0 0 60px #94a3b8';
        }
        
        // Show manual night utility control switches
        const nightPanel = document.getElementById('nightPanel');
        if (nightPanel) nightPanel.style.display = 'flex';
    }

    // CSS variables me coordinates send karo
    root.style.setProperty('--sun-moon-x', `${celestialX}%`);
    root.style.setProperty('--sun-moon-y', `${celestialY}%`);

    // ==========================================
    // 🌲 3. REAL TIME WEATHER & GLASS WALLPAPER ENGINE
    // ==========================================
    if (currentHour >= 5 && currentHour < 8) { 
        // 🌅 Sunrise Look
        root.style.setProperty('--sky-top', '#ff7e5f');
        root.style.setProperty('--sky-bottom', '#feb47b');
        root.style.setProperty('--jungle-darkness', 'brightness(0.55) contrast(1.1)');
        root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.45)');
        root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.25)');
        root.style.setProperty('--text-color', '#1e293b');
        root.style.setProperty('--text-muted', '#475569');
    } else if (currentHour >= 8 && currentHour < 16) { 
        // ☀️ Bright Daylight Look
        root.style.setProperty('--sky-top', '#bae6fd');
        root.style.setProperty('--sky-bottom', '#0284c7');
        root.style.setProperty('--jungle-darkness', 'brightness(1) saturate(1.2)');
        root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.85)');
        root.style.setProperty('--card-border', 'rgba(0, 0, 0, 0.08)');
        root.style.setProperty('--text-color', '#0f172a');
        root.style.setProperty('--text-muted', '#475569');
    } else if (currentHour >= 16 && currentHour < 19) { 
        // 🌇 Golden Sunset Look
        root.style.setProperty('--sky-top', '#f97316');
        root.style.setProperty('--sky-bottom', '#4c1d95');
        root.style.setProperty('--jungle-darkness', 'brightness(0.4) saturate(1.4)');
        root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.15)');
        root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.2)');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--text-muted', '#cbd5e1');
    } else { 
        // 🌌 Mystical Deep Midnight Study Look
        if (activeLightMode === 'off') {
            root.style.setProperty('--sky-top', '#020617');
            root.style.setProperty('--sky-bottom', '#0f172a');
            root.style.setProperty('--jungle-darkness', 'brightness(0.15) contrast(1.2)');
            root.style.setProperty('--card-glass', 'rgba(15, 23, 42, 0.65)');
            root.style.setProperty('--card-border', 'rgba(255, 255, 255, 0.08)');
            root.style.setProperty('--text-color', '#f8fafc');
            root.style.setProperty('--text-muted', '#94a3b8');
        }
    }
}

// 🏮 FIX: Function name explicitly matches the HTML triggers
function engageNightLighting(type) {
    const root = document.documentElement;
    const btnC = document.getElementById('btnCandle');
    const btnL = document.getElementById('btnLantern');

    // FIX: Checked using 'type' logic instead of crashed 'mode' fallback
    if (activeLightMode === type) { clearSurvivalLights(); return; }

    activeLightMode = type;
    if(btnC) btnC.classList.remove('active');
    if(btnL) btnL.classList.remove('active');

    if (type === 'candle') {
        if(btnC) btnC.classList.add('active');
        root.style.setProperty('--lantern-glow', 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.5) 0%, transparent 60%)');
        root.style.setProperty('--card-glass', 'rgba(38, 26, 12, 0.85)');
        root.style.setProperty('--card-border', 'rgba(251, 191, 36, 0.4)');
    } else if (type === 'lantern') {
        if(btnL) btnL.classList.add('active');
        root.style.setProperty('--lantern-glow', 'radial-gradient(circle at 50% 40%, rgba(34,211,238,0.45) 0%, rgba(34,211,238,0.12) 50%, transparent 80%)');
        root.style.setProperty('--card-glass', 'rgba(15, 22, 36, 0.85)');
        root.style.setProperty('--card-border', 'rgba(34, 211, 238, 0.45)');
    }
}

function clearSurvivalLights() {
    activeLightMode = 'off';
    const btnC = document.getElementById('btnCandle');
    const btnL = document.getElementById('btnLantern');
    if(btnC) btnC.classList.remove('active');
    if(btnL) btnL.classList.remove('active');
    document.documentElement.style.setProperty('--lantern-glow', 'radial-gradient(circle, transparent 100%, transparent 100%)');
    runLiveUniverseEngine();
}

// ==========================================
// 📄 4. DATABASE & RENDER LOGIC (Cards Filtering & Load More)
// ==========================================
function filterResources() {
    const courseValue = document.getElementById('courseFilter').value;
    const semValue = document.getElementById('semFilter').value;
    const typeValue = document.getElementById('typeFilter').value;
    
    const grid = document.getElementById('resourcesGrid');
    const noResults = document.getElementById('noResults');
    
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card => card.remove());
    
    currentLimit = 6;
    filteredData = [];

    resourcesData.forEach(item => {
        const matchCourse = (courseValue === 'all' || item.course === courseValue);
        const matchSem = (semValue === 'all' || item.semester === semValue);
        const matchType = (typeValue === 'all' || item.type === typeValue);
        
        if (matchCourse && matchSem && matchType) {
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
        
        card.innerHTML = `
            <div>
                <span class="card-tag ${tagClass}">${item.type}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-meta"><strong>${item.course}</strong> — ${item.semester} | ${item.subject}</p>
            </div>
            <a href="${item.link}" class="download-btn" target="_blank">Download PDF</a>
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

// Master Engine Execution Trigger on Startup
window.onload = () => {
    filterResources();
    setInterval(runLiveUniverseEngine, 500); 
};
