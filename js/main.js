// ===== Language Switching =====
function setLanguage(lang) {
    currentLang = lang;

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18nData[lang] && i18nData[lang][key]) {
            el.textContent = i18nData[lang][key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Re-render apps if on home page
    const appsGrid = document.getElementById('appsGrid');
    if (appsGrid) {
        renderApps();
    }

    // Save preference to localStorage
    localStorage.setItem('lang', lang);
}

// Initialize language from localStorage or browser setting
function initLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && i18nData[savedLang]) {
        setLanguage(savedLang);
    } else {
        const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
        setLanguage(browserLang);
    }
}

// ===== Render Apps =====
function renderApps() {
    const appsGrid = document.getElementById('appsGrid');
    if (!appsGrid) return;

    appsGrid.innerHTML = appsData.map((app, index) => {
        const name = currentLang === 'zh' ? app.name : app.nameEn;
        const description = currentLang === 'zh' ? app.description : app.descriptionEn;
        const tags = currentLang === 'zh' ? app.tags : app.tagsEn;
        const viewDetailsText = i18nData[currentLang]['app.viewDetails'];

        return `
            <div class="app-card" style="animation-delay: ${index * 0.1}s" onclick="window.location.href='${app.page}'">
                <div class="app-card-icon" style="background: linear-gradient(135deg, ${app.color} 0%, ${app.color}dd 100%)">
                    ${app.icon}
                </div>
                <h3 class="app-card-title">${name}</h3>
                <p class="app-card-description">${description}</p>
                <div class="app-card-tags">
                    ${tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
                </div>
                <span class="app-card-link">${viewDetailsText}</span>
            </div>
        `;
    }).join('');
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initLanguage();

    // Language switch buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // Render apps
    renderApps();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
