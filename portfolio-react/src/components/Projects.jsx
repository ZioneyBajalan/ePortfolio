import { useParallax } from '../hooks/useParallax';
import { VineCorner } from './VineCorner';

export const Projects = () => {
  const parallaxRef = useParallax(0.35);

  const projects = [
    {
      title: 'Tetris (CAO Project)',
      description: 'Created a tetris program using assembly',
      tech: ['Assembly'],
      link: 'https://github.com/ZioneyBajalan/Tetris_CAO_Project.git',
      image: 'TetrisAssembly.jpg'
    },
    {
      title: 'Laravel Project',
      description: 'Practiced using laravel API changes and pushing to Github',
      tech: ['PHP', 'Blade', 'JavaScript'],
      link: 'https://github.com/ZioneyBajalan/Laravel_Project.git',
      image: 'Laravel.jpg'
    },
    {
      title: 'BantAI',
      description: 'Created a program that scans emotion from facial recognition and gives healthy advices (with health monitoring such as heart rate)',
      tech: ['Python', 'PyQT5', 'MySQL', 'Google AI Studio'],
      link: 'https://github.com/ccxrl/BantAI.git',
      image: 'BantAI.jpg'
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      <div ref={parallaxRef} className="content-wrapper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 bg-gradient-to-r from-forest-400 to-forest-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="parallax-card p-0 overflow-hidden group relative depth-1"
              >
                <VineCorner corner="tl" />
                <VineCorner corner="br" />

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-forest-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-forest-50 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-forest-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-forest-500/20 border border-forest-500/40 rounded-full text-forest-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-forest w-full justify-center"
                  >
                    <i className="fas fa-external-link-alt"></i> GitHub Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
