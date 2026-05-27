// Function to render resources based on filters
function filterResources() {
    const courseValue = document.getElementById('courseFilter').value;
    const semValue = document.getElementById('semFilter').value;
    const typeValue = document.getElementById('typeFilter').value;
    
    const grid = document.getElementById('resourcesGrid');
    const noResults = document.getElementById('noResults');
    
    // Clear old dynamic cards (keeping the noResults div)
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card => card.remove());
    
    let visibleCount = 0;

    resourcesData.forEach(item => {
        // Checking match conditions
        const matchCourse = (courseValue === 'all' || item.course === courseValue);
        const matchSem = (semValue === 'all' || item.semester === semValue);
        const matchType = (typeValue === 'all' || item.type === typeValue);
        
        if (matchCourse && matchSem && matchType) {
            visibleCount++;
            
            // Determine badge style class
            let tagClass = 'tag-notes';
            if(item.type === 'Practical File') tagClass = 'tag-file';
            if(item.type === 'PYQ') tagClass = 'tag-pyq';

            // Create Card HTML
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div>
                    <span class="card-tag ${tagClass}">${item.type}</span>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-meta"><strong>${item.course}</strong> — ${item.semester} | ${item.subject}</p>
                </div>
                <a href="${item.link}" class="download-btn" target="_blank">Download PDF</a>
            `;
            grid.appendChild(card);
        }
    });

    // Toggle No Results Message
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

// Initial Call to load all products on page start
window.onload = filterResources;