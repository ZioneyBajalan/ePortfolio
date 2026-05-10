// Minimal client-side behavior: navigation highlighting, smooth scroll, reveal animations, and form validation

// Throttle helper
function throttle(fn, wait = 100) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('main > section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const elementsToAnimate = document.querySelectorAll('.content-card, .project-card, .section-title, .skill, .stat-card, .contact-card, .btn');

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Reveal animations (IntersectionObserver)
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -80px 0px' });

  elementsToAnimate.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease-out ${i * 0.04}s, transform 0.6s ease-out ${i * 0.04}s`;
    observer.observe(el);
  });

  // Highlight active nav item
  const updateActiveNav = throttle(() => {
    const scrollY = window.pageYOffset;
    let current = sections[0]?.id || '';
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  }, 120);

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // Contact form (client-side validation only)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // simple validation
      const name = (contactForm.querySelector('#name') || {}).value?.trim() || '';
      const email = (contactForm.querySelector('#email') || {}).value?.trim() || '';
      const message = (contactForm.querySelector('#message') || {}).value?.trim() || '';
      contactForm.querySelectorAll('.error-message').forEach(n => n.remove());
      let ok = true;
      if (name.length < 2) { showError('name', 'Name must be at least 2 characters long'); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('email', 'Please enter a valid email'); ok = false; }
      if (message.length < 10) { showError('message', 'Message must be at least 10 characters long'); ok = false; }
      if (!ok) return;
      const success = document.createElement('div');
      success.className = 'success-message';
      success.textContent = 'Message sent (demo). Thank you!';
      contactForm.parentNode.insertBefore(success, contactForm);
      contactForm.reset();
      setTimeout(() => success.remove(), 4500);
    });
  }

  function showError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const err = document.createElement('div');
    err.className = 'error-message';
    err.textContent = msg;
    field.parentNode.appendChild(err);
    field.style.borderColor = 'rgba(255,107,107,0.6)';
    field.style.backgroundColor = 'rgba(255,107,107,0.06)';
    field.addEventListener('focus', () => {
      err.remove();
      field.style.borderColor = '';
      field.style.backgroundColor = '';
    }, { once: true });
  }
});

// Make page visible after load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});