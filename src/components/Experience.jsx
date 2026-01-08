const Experience = () => {
  const experiences = [
    {
      company: 'Port Digitalisasi',
      role: 'Front End Developer',
      period: 'September 2023 – Now',
      description: [
        'Building monitoring dashboards for hauling and barging activities',
        'Displaying data using charts and tables',
        'API integration and data visualization',
        'Export features for reports'
      ],
      tech: ['React JS'],
      highlight: true
    },
    {
      company: 'Be-Well Admin',
      role: 'Front End Developer',
      period: 'March 2023 – Now',
      description: [
        'Admin dashboard for doctor-patient scheduling',
        'Treatment packages & invoice printing',
        'Real-time notification using push notification',
        'Bug fixing and feature enhancements'
      ],
      tech: ['Vue JS', 'Laravel', 'Pusher'],
      highlight: false
    },
    {
      company: 'ExcelFixer (Malaysia)',
      role: 'Front End Developer',
      period: 'Previous',
      description: [
        'Worked on multiple production-grade applications',
        'Focused on UI integration and real-time features'
      ],
      tech: [],
      highlight: false
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto section-fade">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 border-l-2 ${
                  exp.highlight ? 'border-neon-blue' : 'border-gray-700'
                } hover:border-neon-purple transition-all duration-300 group`}
              >
                <div
                  className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                    exp.highlight ? 'bg-neon-blue animate-glow' : 'bg-gray-700 group-hover:bg-neon-purple'
                  } transition-all duration-300`}
                ></div>

                <div className="bg-dark-bg p-6 rounded-xl card-glow border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
                      <p className={`text-lg ${exp.highlight ? 'text-neon-blue' : 'text-gray-400'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 bg-dark-card px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <svg className="w-5 h-5 text-neon-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue text-sm rounded-full border border-neon-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
