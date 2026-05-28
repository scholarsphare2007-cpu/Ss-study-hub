let currentLimit = 6;
let filteredData = [];
let activeLightMode = 'off'; // Track internal interactive night lights

// 🌌 CORE IMMERSIVE REAL-TIME ENVIRONMENT ENGINE
function universeEnvironmentEngine() {
    const now = new Date();
    
    // 1. Sync Live Clock Widget
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; hours = hours ? hours : 12;
    document.getElementById('liveClock').innerText = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

    // 2. ORBITAL CELESTIAL MATHEMATICS (Suraj aur Chand ka 180° Safar)
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const totalMinutesInDay = (currentHour * 60) + currentMin;

    let celestialX = 0;
    let celestialY = 100; // Screen bottom border baseline percentage
    const bodyNode = document.getElementById('skyBody');
    const root = document.documentElement;

    // Calculate position angle based on day/night arc cycles
    if (militaryCheckBetween(currentHour, 5, 19)) {
        // DAY CYCLE ARC (6:00 AM to 7:00 PM) - Suraj Chalega!
        const startDayMin = 5 * 60;
        const endDayMin = 19 * 60;
        const ratio = (totalMinutesInDay - startDayMin) / (endDayMin - startDayMin);
        
        celestialX = ratio * 100; // Left to Right 0% - 100%
        celestialY = 80 - (Math.sin(ratio * Math.PI) * 65); // Dynamic Quad Curve Height Arc
        
        bodyNode.style.background = '#f59e0b'; // Sun Gold Tone
        bodyNode.style.boxShadow = '0 0 50px #f59e0b, 0 0 100px #f59e0b';
        document.getElementById('nightPanel').style.display = 'none'; // Hide manual utility switches
        clearSurvivalLights();
    } else {
        // NIGHT CYCLE ARC (7:00 PM to 5:00 AM) - Chand Chalega!
        let ratio = 0;
        if (currentHour >= 19) {
            ratio = ((currentHour - 19) * 60 + currentMin) / (10 * 60); // 7 PM to Midnight fraction
        } else {
            ratio = ((currentHour + 5) * 60 + currentMin) / (10 * 60); // Midnight to 5 AM fraction
        }
        
        celestialX = ratio * 100;
        celestialY = 80 - (Math.sin(ratio * Math.PI) * 65);
        
        bodyNode.style.background = '#f8fafc'; // Moon Pearl Glow
        bodyNode.style.boxShadow = '0 0 30px #cbd5e1, 0 0 60px #94a3b8';
        document.getElementById('nightPanel').style.display = 'flex'; // Trigger night control station
    }

    root.style.setProperty('--sun-moon-x', `${celestialX}%`);
    root.style.setProperty('--sun-moon-y', `${celestialY}px`);

    // 3. SKY COLORS & JUNGLE DEPTH DYNAMIC CONFIG
    if (currentHour >= 5 && currentHour < 8) { // Sunrise
        root.style.setProperty('--sky-top', '#fdba74'); root.style.setProperty('--sky-bottom', '#f472b6');
        root.style.setProperty('--jungle-darkness', 'brightness(0.5) contrast(1.1)');
        root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.55)');
        root.style.setProperty('--text-color', '#1e293b');
    } else if (currentHour >= 8 && currentHour < 16) { // Midday Brightness
        root.style.setProperty('--sky-top', '#38bdf8'); root.style.setProperty('--sky-bottom', '#bae6fd');
        root.style.setProperty('--jungle-darkness', 'brightness(0.95) saturate(1.2)');
        root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.75)');
        root.style.setProperty('--text-color', '#0f172a');
    } else if (currentHour >= 16 && currentHour < 19) { // Sunset
        root.style.setProperty('--sky-top', '#f97316'); root.style.setProperty('--sky-bottom', '#6b21a8');
        root.style.setProperty('--jungle-darkness', 'brightness(0.4) saturate(1.5)');
        root.style.setProperty('--card-glass', 'rgba(255, 255, 255, 0.2)');
        root.style.setProperty('--text-color', '#ffffff');
    } else { // Deep Dark Night
        root.style.setProperty('--sky-top', '#020617'); root.style.setProperty('--sky-bottom', '#0f172a');
        root.style.setProperty('--jungle-darkness', 'brightness(0.15) contrast(1.2)');
        root.style.setProperty('--card-glass', 'rgba(15, 23, 42, 0.65)');
        root.style.setProperty('--text-color', '#f8fafc');
    }
}

// Helper time evaluation logic
function militaryCheckBetween(target, min, max) {
    return target >= min && target < max;
}

// 🏮 INTERACTIVE NIGHT LIGHT SURVIVAL SYSTEM
function triggerSurvivalLight(type) {
    const root = document.documentElement;
    const btnC = document.getElementById('btnCandle');
    const btnL = document.getElementById('btnLantern');

    if (activeLightMode === type) {
        clearSurvivalLights();
        return;
    }

    activeLightMode = type;
    btnC.classList.remove('active');
    btnL.classList.remove('active');

    if (type === 'candle') {
        btnC.classList.add('active');
        // Gentle soft yellow candlelight focus center flicker
        root.style.setProperty('--lantern-glow', 'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.35) 0%, transparent 45%)');
        root.style.setProperty('--card-glass', 'rgba(45, 31, 15, 0.7)');
        root.style.setProperty('--card-border', 'rgba(251, 191, 36, 0.3)');
    } else if (type === 'lantern') {
        btnL.classList.add('active');
        // High intensity radiant orange lantern workspace flare coverage
        root.style.setProperty('--lantern-glow', 'radial-gradient(circle at 50% 40%, rgba(249,115,22,0.5) 0%, rgba(249,115,22,0.1) 50%, transparent 80%)');
        root.style.setProperty('--card-glass', 'rgba(30, 41, 59, 0.8)');
        root.style.setProperty('--card-border', 'rgba(249, 115, 22, 0.4)');
    }
}

function clearSurvivalLights() {
    activeLightMode = 'off';
    document.getElementById('btnCandle').classList.remove('active');
    document.getElementById('btnLantern').classList.remove('active');
    document.documentElement.style.setProperty('--lantern-glow', 'radial-gradient(circle, transparent 100%, transparent 100%)');
    // Revert structural definitions back to normal values
    universeEnvironmentEngine();
}

// Core standard content sorting
function filterResources() {
    const courseValue = document.getElementById('courseFilter').value;
    const semValue = document.getElementById('semFilter').value;
    const typeValue = document.getElementById('typeFilter').value;
    const grid = document.getElementById('resourcesGrid');
    const noResults = document.getElementById('noResults');
    
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card => card.remove());
    
    currentLimit = 6; filteredData = [];

    resourcesData.forEach(item => {
        const matchCourse = (courseValue === 'all' || item.course === courseValue);
        const matchSem = (semValue === 'all' || item.semester === semValue);
        const matchType = (typeValue === 'all' || item.type === typeValue);
        if (matchCourse && matchSem && matchType) filteredData.push(item);
    });

    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        document.getElementById('loadMoreContainer').style.display = 'none';
        return;
    } else { noResults.style.display = 'none'; }

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
        if (item.type === 'Papers') tagClass = 'tag-papers';

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
    loadMoreCount.innerText = `Showing ${Math.min(currentLimit, filteredData.length)} of ${filteredData.length} items`;
    loadMoreContainer.style.display = filteredData.length > currentLimit ? 'block' : 'none';
}

function loadMoreCards() { currentLimit += 6; renderCards(); }

window.onload = () => {
    filterResources();
    universeEnvironmentEngine();
    setInterval(universeEnvironmentEngine, 1000); // Pulse master timing loops
};
