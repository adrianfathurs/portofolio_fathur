const Projects = () => {
  const projects = [
    {
      title: 'Yamaha Crack Detection Dashboard',
      badge: 'Best Project',
      description: [
        'Real-time dashboard using WebSocket',
        'Barcode scanning & image capture',
        'Responsive UI for industrial use'
      ],
      tech: ['React JS', 'WebSocket'],
      gradient: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Matador Tracker',
      badge: null,
      description: [
        'Vehicle marketplace & rental system',
        'Real-time tracking & map visualization',
        'Cart system & Midtrans payment'
      ],
      tech: ['Vue JS'],
      gradient: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'Folderlink',
      badge: null,
      description: [
        'File storage & internal sharing platform',
        'Bug fixing and UI integration'
      ],
      tech: ['React JS'],
      gradient: 'from-neon-pink to-neon-blue'
    },
    {
      title: 'Creativer',
      badge: null,
      description: [
        'Freelancer marketplace with real-time chat',
        'Paid features & vendor booking'
      ],
      tech: ['Vue JS', 'Pusher'],
      gradient: 'from-neon-blue to-neon-pink'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto section-fade">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-dark-card rounded-2xl overflow-hidden card-glow border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple text-xs font-bold rounded-full text-white animate-glow">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.description.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <svg className="w-5 h-5 text-neon-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dark-bg text-neon-blue text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
