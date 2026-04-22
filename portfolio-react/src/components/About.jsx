import { useParallax } from '../hooks/useParallax';
import { VineCorner } from './VineCorner';

export const About = () => {
  const parallaxRef = useParallax(0.4);

  const skills = [
    'HTML', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL'
  ];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '8+', label: 'Projects Completed' },
    { number: '100%', label: 'Eager to Learn' }
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      <div ref={parallaxRef} className="content-wrapper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 bg-gradient-to-r from-forest-400 to-forest-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* About Text */}
            <div className="glass-card p-8 md:p-10 relative depth-2">
              <VineCorner corner="tl" />
              <VineCorner corner="br" />

              <p className="text-forest-200 text-lg leading-relaxed mb-8">
                Hi, I'm Zioney Jayce A. Bajalan, a passionate Computer Science student eager to explore and innovate in the world of technology and design.
              </p>

              <div>
                <h3 className="text-2xl font-medium text-forest-50 mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-forest-500/20 border border-forest-500/40 rounded-full text-forest-100 text-sm font-medium hover:bg-forest-500/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 md:p-8 relative depth-1 hover:depth-2 transition-all duration-300"
                >
                  <VineCorner corner={index === 0 ? 'tr' : 'tl'} />
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-light bg-gradient-to-r from-forest-400 to-forest-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <p className="text-forest-300 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
