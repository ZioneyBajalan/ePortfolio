import { useState } from 'react';
import { useEffect } from 'react';

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-code' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-forest-950/95 backdrop-blur-md border-b border-forest-50/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-light">
          <span className="bg-gradient-to-r from-forest-400 to-forest-500 bg-clip-text text-transparent">
            ePortfolio
          </span>
        </div>

        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 relative group ${
                  activeLink === link.id ? 'text-forest-400' : 'text-forest-300 hover:text-forest-400'
                }`}
              >
                <i className={link.icon}></i>
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-forest-400 transition-all duration-300 ${activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-forest-400">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </nav>
    </header>
  );
};
