import './style.css';

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optimized parallax with RAF
let ticking = false;
const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
  if (!ticking && parallaxElements.length) {
    window.requestAnimationFrame(() => {
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax);
        el.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// Navigation highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}, { passive: true });

// Scroll background effect
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 0);
}, { passive: true });

// Create falling leaves
function createLeaves() {
  const container = document.body;
  for (let i = 0; i < 10; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = (Math.random() * 100) + '%';
    leaf.style.animationDuration = (6 + Math.random() * 4) + 's';
    leaf.style.animationDelay = (Math.random() * 3) + 's';
    container.appendChild(leaf);
  }
}

// Create floating particles
function createParticles() {
  const container = document.body;
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = (Math.random() * 100) + '%';
    particle.style.top = (Math.random() * 100) + '%';
    particle.style.width = (2 + Math.random() * 3) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (10 + Math.random() * 6) + 's';
    particle.style.animationDelay = (Math.random() * 3) + 's';
    container.appendChild(particle);
  }
}

createLeaves();
createParticles();