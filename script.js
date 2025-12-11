// --- Intro typing effect ---
const text = "Je suis Meidi Lefki, Data Scientist & ML Engineer.";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typed").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}
window.onload = typing;

// --- Lang switch ---
const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
  const lang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  langBtn.textContent = lang === 'fr' ? '🇫🇷' : '🇬🇧';
});

// --- Theme switch ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// --- Scroll reveal animation ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.remove('hidden');
  });
});
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
