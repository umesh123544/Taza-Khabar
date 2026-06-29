// ===========================
// NEPAL SAMACHAR - SCRIPT.JS
// ===========================

// ---- DATETIME ----
function updateDateTime() {
  const el = document.getElementById('datetime');
  if (!el) return;
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  el.textContent = now.toLocaleDateString('ne-NP', options);
}
updateDateTime();
setInterval(updateDateTime, 60000);

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// ---- LANGUAGE SWITCHER ----
let currentLang = localStorage.getItem('lang') || 'ne';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-ne][data-en]').forEach(el => {
    el.textContent = lang === 'ne' ? el.dataset.ne : el.dataset.en;
  });
}
// Apply saved language on load
setLang(currentLang);

// ---- SEARCH ----
function doSearch() {
  const query = document.getElementById('search-input')?.value.trim();
  if (query) {
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

// ---- NEWSLETTER ----
function subscribeNewsletter(e) {
  e.preventDefault();
  const msg = document.getElementById('newsletter-msg');
  if (msg) {
    msg.style.display = 'block';
    e.target.reset();
    setTimeout(() => { msg.style.display = 'none'; }, 5000);
  }
}
