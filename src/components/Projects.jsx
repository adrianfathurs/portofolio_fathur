import { motion } from 'framer-motion'

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
      highlight: true
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
      highlight: false
    },
    {
      title: 'Folderlink',
      badge: null,
      description: [
        'File storage & internal sharing platform',
        'Bug fixing and UI integration'
      ],
      tech: ['React JS'],
      highlight: false
    },
    {
      title: 'Creativer',
      badge: null,
      description: [
        'Freelancer marketplace with real-time chat',
        'Paid features & vendor booking'
      ],
      tech: ['Vue JS', 'Pusher'],
      highlight: false
    },
    {
      title: 'Coretax Bukpot Automation',
      badge: 'Tool',
      description: [
        'Chrome extension for bulk download bukti potong from Coretax',
        'Automates manual download process for hundreds of documents',
        'Real-time progress tracking and activity logs',
        'Configurable delays and auto-scroll features'
      ],
      tech: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
      highlight: false,
      link: '/downloads/coretax-bukpot-automation.zip',
      linkLabel: 'Download Extension'
    },
    {
      title: 'Coretax Bukpot PDF to Excel',
      badge: 'Tool',
      description: [
        'Web-based tool to convert tax deduction proofs from PDF to Excel',
        'Solves manual data entry problem for large volumes',
        'Simple upload and download process',
        'Saves hours of manual Excel entry work'
      ],
      tech: ['JavaScript', 'PDF Processing'],
      highlight: false,
      link: 'https://adrianfathurs.github.io/coretax_bukpot_pdf_to_excel/',
      linkLabel: 'Try Demo'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-surface bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-satoshi font-satoshi-semibold mb-4 text-center text-text">Featured Projects</h2>
            <p className="text-center text-muted mb-12 max-w-2xl mx-auto font-inter leading-body">
              Enterprise applications, data visualization tools, and automation solutions
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ translateY: -8 }}
                  className={`group relative bg-background bg-opacity-70 backdrop-blur-glass rounded-card border border-surface transition-all duration-300 hover:shadow-md ${
                    project.highlight ? 'ring-2 ring-primary ring-opacity-50' : ''
                  }`}
                >
                  <div className="relative p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-card-title font-satoshi font-satoshi-medium text-text group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                          project.badge === 'Best Project'
                            ? 'bg-gradient-to-r from-primary to-accent'
                            : 'bg-primary bg-opacity-80'
                        }`}>
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {project.description.map((item, i) => {
                        const itemId = `${project.title}-${i}`
                        return (
                        <li key={itemId} className="text-text flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                        )
                      })}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface text-primary text-sm rounded-full border border-primary border-opacity-20 font-geist-mono font-geist-mono-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target={project.link.startsWith('http') ? '_blank' : undefined}
                        rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {project.linkLabel}
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects