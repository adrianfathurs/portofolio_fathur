import { motion } from 'framer-motion'

const About = () => {

  const specializations = [
    { name: 'React', level: 95, color: '#306D29' },
    { name: 'Next.js', level: 90, color: '#0D530E' },
    { name: 'TypeScript', level: 85, color: '#306D29' },
    { name: 'Redux', level: 88, color: '#0D530E' },
    { name: 'Highcharts', level: 92, color: '#306D29' },
    { name: 'amCharts', level: 90, color: '#0D530E' },
    { name: 'Enterprise Dashboard', level: 94, color: '#306D29' },
    { name: 'Mining Analytics', level: 91, color: '#0D530E' },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-satoshi font-satoshi-semibold mb-12 text-center text-text">About Me</h2>

            <div className="bg-surface bg-opacity-50 backdrop-blur-glass p-8 rounded-card border border-surface shadow-sm">
              <p className="text-text text-lg leading-body mb-6 font-inter">
                I am a <span className="text-primary font-satoshi font-satoshi-medium">Senior Frontend Engineer</span> specializing in
                building <span className="text-accent font-satoshi font-satoshi-medium">enterprise dashboards</span>,
                <span className="text-primary font-satoshi font-satoshi-medium"> industrial analytics</span>, and
                <span className="text-accent font-satoshi font-satoshi-medium"> scalable web applications</span>.
              </p>
              <p className="text-text text-lg leading-body mb-6 font-inter">
                With expertise in modern web technologies, I focus on creating data-intensive applications
                that transform complex information into actionable insights through intuitive visualizations.
              </p>
              <p className="text-text text-lg leading-body font-inter">
                Based in <span className="text-primary font-satoshi font-satoshi-medium">Indonesia</span>, I'm passionate about
                engineering clean, maintainable solutions that drive business value.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:fatursetiawan80@gmail.com" className="hover:text-primary transition-colors">
                    fatursetiawan80@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-satoshi font-satoshi-semibold mb-6 text-text text-center">Technical Specializations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ translateY: -8 }}
                  className="bg-surface bg-opacity-50 backdrop-blur-glass p-4 rounded-card border border-surface cursor-pointer transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-card-title font-satoshi font-satoshi-medium text-text mb-2">{spec.name}</div>
                    <div className="w-full bg-background rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${spec.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: spec.color }}
                      />
                    </div>
                    <div className="text-xs text-muted">{spec.level}%</div>
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

export default About