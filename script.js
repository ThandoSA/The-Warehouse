/* ═══════════════════════════════════════════════════════
   THE WAREHOUSE — A Social Justice Hub
   Scripts: main.js
   Usage: <script src="main.js"></script>
═══════════════════════════════════════════════════════ */

// Nav scroll shadow
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el,i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  obs.observe(el);
});

// Form submit
function handleSubmit() {
  const btn = document.querySelector('.btn-submit');
  btn.textContent = 'Message Sent';
  btn.style.background = '#2d7a50';
  setTimeout(() => { btn.textContent = 'Send Enquiry'; btn.style.background = ''; }, 3000);
}