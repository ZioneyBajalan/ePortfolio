// No parallax effect - hero section stays static

// Throttle function for better scroll performance
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Cache DOM elements
let sections = [];
let navLinks = [];

// Initialize caches on page load
document.addEventListener('DOMContentLoaded', function() {
    sections = Array.from(document.querySelectorAll('main > section'));
    navLinks = Array.from(document.querySelectorAll('.nav-link'));
});

// Optimized navigation highlight based on scroll position
const updateActiveNav = throttle(() => {
    let current = 'home';
    
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id') || 'home';
        }
    }

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}, 100); // Update at most every 100ms

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Stop observing once animation is done
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in animation on load with efficient scheduling
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.content-card, .project-card, .section-title, .skill, .stat-card, .contact-card, .btn');
    
    // Use requestAnimationFrame for efficient batch DOM updates
    requestAnimationFrame(() => {
        elementsToAnimate.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s`;
            observer.observe(el);
        });
    });
});

// Form validation and handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (validateForm(name, email, message)) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = 'Message sent successfully! Thank you for reaching out.';
            successMsg.style.cssText = `
                background: rgba(107, 168, 118, 0.3);
                border: 1px solid rgba(107, 168, 118, 0.6);
                color: #9ecb8e;
                padding: 15px;
                border-radius: 6px;
                margin-bottom: 20px;
                animation: fadeInUp 0.4s ease-out;
            `;
            
            contactForm.parentNode.insertBefore(successMsg, contactForm);
            
            // Clear form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        }
    });
}

function validateForm(name, email, message) {
    let isValid = true;
    
    // Clear existing errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // Name validation
    if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Message validation
    if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, errorMsg) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = errorMsg;
    
    field.parentNode.appendChild(errorDiv);
    
    // Highlight input field
    field.style.borderColor = 'rgba(255, 107, 107, 0.6)';
    field.style.backgroundColor = 'rgba(255, 107, 107, 0.08)';
    
    field.addEventListener('focus', () => {
        field.style.borderColor = 'rgba(107, 168, 118, 0.6)';
        field.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
        errorDiv.remove();
    });
    
    // Auto-remove error message after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Add smooth transition when page loads
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});