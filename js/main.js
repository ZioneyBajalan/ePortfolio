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

  // Initialize procedural starfield canvas
  (function () {
    const STARFIELD_CONFIG = {
      maxStars: 300,
      minStars: 60,
      densityFactor: 90000, // higher = fewer stars
      fps: 30,
      twinkleSpeedMin: 0.00035,
      twinkleSpeedMax: 0.0010,
      radiusMin: 0.35,
      radiusMax: 1.4,
      colorChance: 0.06,
      driftMax: 0.6
    };

    function initStarfield() {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const canvas = document.getElementById('starfield-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let dpr = Math.max(1, window.devicePixelRatio || 1);
      let width = 0, height = 0;
      let stars = [];
      let running = true;

      function makeStars() {
        stars = [];
        const area = width * height;
        const count = Math.max(STARFIELD_CONFIG.minStars, Math.min(STARFIELD_CONFIG.maxStars, Math.round(area / STARFIELD_CONFIG.densityFactor)));
        for (let i = 0; i < count; i++) {
          const r = STARFIELD_CONFIG.radiusMin + Math.random() * (STARFIELD_CONFIG.radiusMax - STARFIELD_CONFIG.radiusMin);
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r,
            baseAlpha: 0.25 + Math.random() * 0.6,
            twinkleSpeed: STARFIELD_CONFIG.twinkleSpeedMin + Math.random() * (STARFIELD_CONFIG.twinkleSpeedMax - STARFIELD_CONFIG.twinkleSpeedMin),
            phase: Math.random() * Math.PI * 2,
            driftAmp: Math.random() * STARFIELD_CONFIG.driftMax,
            color: Math.random() < STARFIELD_CONFIG.colorChance ? [170, 200, 255] : [255, 255, 255]
          });
        }
      }

      function resize() {
        const rect = canvas.getBoundingClientRect();
        width = Math.max(1, Math.floor(rect.width));
        height = Math.max(1, Math.floor(rect.height));
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        makeStars();
      }

      let lastTime = 0;
      const FPS_INTERVAL = 1000 / STARFIELD_CONFIG.fps;

      function draw(now) {
        requestAnimationFrame(draw);
        if (!running) return;
        if (!lastTime) lastTime = now;
        const elapsed = now - lastTime;
        if (elapsed < FPS_INTERVAL) return;
        lastTime = now;
        ctx.clearRect(0, 0, width, height);
        for (const s of stars) {
          const tw = (Math.sin(now * s.twinkleSpeed + s.phase) * 0.5 + 0.5);
          const alpha = Math.max(0, Math.min(1, s.baseAlpha * (0.7 + tw * 0.8)));
          const dx = Math.sin(now * 0.00008 + s.phase) * s.driftAmp;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${s.color[0]},${s.color[1]},${s.color[2]},${alpha})`;
          ctx.arc(s.x + dx, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // pause when hidden to save CPU
      document.addEventListener('visibilitychange', () => {
        running = !document.hidden;
        if (running) { lastTime = performance.now(); requestAnimationFrame(draw); }
      });

      window.addEventListener('resize', throttle(resize, 200));
      resize();
      requestAnimationFrame(draw);

      // expose a quick runtime adjuster for tweaking from console
      window.adjustStarfield = function (cfg) {
        Object.assign(STARFIELD_CONFIG, cfg || {});
        resize();
      };
    }

    // start starfield after DOM ready
    initStarfield();
  })();
});

// Make page visible after load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});