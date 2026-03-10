/* Hero slideshow */
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.hero-dot');

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  goSlide((currentSlide + 1) % slides.length);
}

// Auto-advance every 5 seconds
let slideTimer = setInterval(nextSlide, 5000);

// Reset timer on manual click
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 5000);
  });
});

/* ═══════════════════════════════════════════════════════
   THE WAREHOUSE — A Social Justice Hub
   main.js
════════════════════════════════════════════════════════ */

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  obs.observe(el);
});

// Form submit feedback
function handleSubmit() {
  const btn = document.querySelector('.btn-submit');
  btn.textContent = 'Message Sent';
  btn.style.background = '#2d7a50';
  setTimeout(() => {
    btn.textContent = 'Send Enquiry';
    btn.style.background = '';
  }, 3000);
}