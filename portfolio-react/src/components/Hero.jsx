import { useParallax } from '../hooks/useParallax';
import { VineCorner } from './VineCorner';

export const Hero = () => {
  const parallaxRef = useParallax(0.3);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      <div ref={parallaxRef} className="content-wrapper">
        <div className="glass-card p-12 md:p-16 max-w-2xl mx-auto relative">
          <VineCorner corner="tl" />
          <VineCorner corner="tr" />
          <VineCorner corner="bl" />
          <VineCorner corner="br" />

          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="w-32 h-32 rounded-full border-4 border-forest-400 bg-forest-500/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="AgroFair.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight">
                Hello, I'm Zioney Jayce A. Bajalan
              </h1>
              <p className="text-xl md:text-2xl text-forest-300 mt-4 font-light">
                3rd Year Computer Science Student
              </p>
            </div>

            <div className="flex justify-center gap-6 pt-6">
              <a 
                href="https://github.com/ZioneyBajalan" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-forest"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a 
                href="mailto:jayce.zioney@gmail.com"
                className="btn-forest-secondary"
              >
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
