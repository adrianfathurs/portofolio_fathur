import { motion } from 'framer-motion'

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
    <section id="experience" className="py-20 bg-surface bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-satoshi font-satoshi-semibold mb-12 text-center text-text">Work Experience</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const expId = `${exp.company}-${index}`
                  return (
                  <motion.div
                    key={expId}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-6 top-6 w-5 h-5 rounded-full border-4 ${
                        exp.highlight
                          ? 'bg-primary border-accent'
                          : 'bg-surface border-primary'
                      } transition-all duration-300`}
                    ></div>

                    {/* Experience card */}
                    <div className="bg-background bg-opacity-70 backdrop-blur-glass p-6 rounded-card border border-surface transition-all duration-300 hover:translate-y-[-8px] hover:shadow-md">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-card-title font-satoshi font-satoshi-medium text-text">{exp.role}</h3>
                          <p className={`text-lg ${exp.highlight ? 'text-primary font-satoshi font-satoshi-medium' : 'text-muted'} font-inter`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-muted bg-surface px-4 py-1.5 rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => {
                          const itemId = `${exp.company}-${i}`
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

                      {exp.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm rounded-full border border-primary border-opacity-30 font-geist-mono font-geist-mono-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience