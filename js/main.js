// Parallax effect for hero section
window.addEventListener('mousemove', function(e) {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && window.pageYOffset < window.innerHeight) {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        heroContent.style.transform = `perspective(1000px) rotateX(${mouseY * 0.5}deg) rotateY(${mouseX * 0.5}deg)`;
    }
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
        }
    });
}, observerOptions);

// Add fade-in animation to elements on page load
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.about-grid, .project-grid, .contact-grid, .section-title, .about-text, .stats-container, .project-card, .skill, .stat-card, .contact-card, .contact-info');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});\n\n// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!validateForm(name, email, message)) {
        return;
    }
    
    // If validation passes, submit the form
    this.submit();
});

function validateForm(name, email, message) {
    let isValid = true;
    
    // Name validation
    if (name.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Message validation
    if (message.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Remove any existing error messages
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    field.parentNode.appendChild(errorDiv);
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

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