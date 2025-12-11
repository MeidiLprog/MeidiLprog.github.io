// --- Thème ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  themeBtn.textContent = theme === 'light' ? '☀️' : '🌙';
});

// Charger le thème
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeBtn.textContent = '☀️';
}

// --- Langue ---
const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
  const currentLang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
  switchLang(currentLang);
});

function switchLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  langBtn.textContent = lang === 'fr' ? '🇫🇷' : '🇬🇧';
  localStorage.setItem('lang', lang);
}

// Charger la langue sauvegardée
const savedLang = localStorage.getItem('lang');
if (savedLang) switchLang(savedLang);
