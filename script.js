function toggleLegendDetails(buttonElement) {
    const card = buttonElement.closest('.legend-card'); 
    const details = card.querySelector('.hidden-details');
    
    details.classList.toggle('show');
    
    if (details.classList.contains('show')) {
        buttonElement.textContent = 'Schovať Detaily';
    } else {
        buttonElement.textContent = 'Zobraziť Viac';
    }
}


function toggleDetailSection() {
    const toggleInfoBtn = document.getElementById('toggleInfoBtn');
    const detailSection = document.getElementById('detailSection');

    if (detailSection) {
        detailSection.classList.toggle('hidden');
        
        if (detailSection.classList.contains('hidden')) {
            toggleInfoBtn.textContent = 'Zobraziť podrobnosti';
        } else {
            toggleInfoBtn.textContent = 'Schovať podrobnosti';
        }
    }
}


function toggleVideo(button) {
    const container = button.nextElementSibling;
    container.classList.toggle("hidden");
    button.textContent = container.classList.contains("hidden") ? "Pozrieť video" : "Skryť video";
}


function applyDarkMode(isDark) {
    const body = document.body;
    const toggleBtn = document.getElementById('darkModeToggle');

    if (isDark) {
        body.classList.add('dark-mode');
        if (toggleBtn) {
            toggleBtn.textContent = '☀️'; 
        }
    } else {
        body.classList.remove('dark-mode');
        if (toggleBtn) {
            toggleBtn.textContent = '🌙'; 
        }
    }
}


function toggleDarkMode() {
    const body = document.body;
    const isCurrentlyDark = body.classList.contains('dark-mode');
    
    
    const newDarkModeState = !isCurrentlyDark;
    applyDarkMode(newDarkModeState);
    
    
    localStorage.setItem('darkMode', newDarkModeState);
}


document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        applyDarkMode(savedDarkMode);
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    const contactForm = document.getElementById('contactForm');
    const formDataDisplay = document.getElementById('formDataDisplay');

    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault(); 
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            document.getElementById('display-name').textContent = name;
            document.getElementById('display-email').textContent = email;
            document.getElementById('display-message').textContent = message;
            
            formDataDisplay.style.display = 'block';
            contactForm.reset();
        };
    }

    const searchInput = document.getElementById('searchInput');
    const momentsList = document.getElementById('momentsList');
    const noResults = document.getElementById('noResults');
    const momentItems = momentsList ? momentsList.querySelectorAll('.moment-card') : [];

    if (searchInput) {
        searchInput.onkeyup = function() {
            const searchTerm = this.value.toLowerCase().trim();
            let resultsFound = 0;

            momentItems.forEach(item => {
                const tags = item.getAttribute('data-tags').toLowerCase();
                if (tags.includes(searchTerm)) {
                    item.style.display = 'block';
                    resultsFound++;
                } else {
                    item.style.display = 'none';
                }
            });

            noResults.style.display = resultsFound === 0 ? 'block' : 'none';
        };
    }
    
});