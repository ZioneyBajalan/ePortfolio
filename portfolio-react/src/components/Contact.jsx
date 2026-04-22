import { useState } from 'react';
import { useParallax } from '../hooks/useParallax';
import { VineCorner } from './VineCorner';

export const Contact = () => {
  const parallaxRef = useParallax(0.3);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will submit to formspree
    e.target.submit();
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      <div ref={parallaxRef} className="content-wrapper">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 bg-gradient-to-r from-forest-400 to-forest-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="glass-card p-8 relative depth-1">
              <VineCorner corner="tl" />
              <div className="text-center">
                <div className="text-3xl text-forest-400 mb-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-lg font-medium text-forest-50 mb-2">Email</h3>
                <p className="text-forest-300">jayce.zioney@gmail.com</p>
              </div>
            </div>

            <div className="glass-card p-8 relative depth-1">
              <VineCorner corner="tr" />
              <div className="text-center">
                <div className="text-3xl text-forest-400 mb-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-lg font-medium text-forest-50 mb-2">Location</h3>
                <p className="text-forest-300">Cagayan de Oro, Mindanao</p>
              </div>
            </div>

            <div className="glass-card p-8 relative depth-1">
              <VineCorner corner="bl" />
              <div className="text-center">
                <div className="text-3xl text-forest-400 mb-3">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="text-lg font-medium text-forest-50 mb-2">Connect</h3>
                <p className="text-forest-300">Via social links</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-12 mt-8 relative depth-2">
            <VineCorner corner="tl" />
            <VineCorner corner="br" />

            <form 
              action="https://formspree.io/f/mrbgnrzv" 
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-forest-50 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-forest-50/10 border border-forest-50/20 rounded-lg text-forest-50 placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:bg-forest-50/15 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-forest-50 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-forest-50/10 border border-forest-50/20 rounded-lg text-forest-50 placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:bg-forest-50/15 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-forest-50 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-forest-50/10 border border-forest-50/20 rounded-lg text-forest-50 placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:bg-forest-50/15 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-forest w-full justify-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
