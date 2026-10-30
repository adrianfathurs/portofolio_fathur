import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      school: 'Praxis Academy',
      degree: 'Coding School',
      period: '2021 – Now',
      type: 'course'
    },
    {
      school: 'UPN "Veteran" Yogyakarta',
      degree: 'Informatics Engineering',
      period: '2017 – 2022',
      type: 'university'
    },
    {
      school: 'SMA Negeri 2 Yogyakarta',
      degree: 'Science Major',
      period: '2014 – 2017',
      type: 'highschool'
    }
  ]

  const achievements = [
    'Prodia Scholarship Award (2014, 2017)',
    'BPJS Ketenagakerjaan Scholarship (2014)',
    '2nd Winner – Javanese Speech Contest (2016)',
    '3rd Winner – Long Jump Competition (2016)'
  ]

  const certifications = [
    'Vue JS Basic – Udemy',
    'System Analyst – BNSP'
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-satoshi font-satoshi-semibold mb-12 text-center text-text">Education & Achievements</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-satoshi font-satoshi-semibold mb-6 text-text flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.school}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ translateY: -4 }}
                      className="bg-surface bg-opacity-50 backdrop-blur-glass p-5 rounded-card border border-surface transition-all duration-300 hover:shadow-sm"
                    >
                      <h4 className="text-lg font-satoshi font-satoshi-medium text-text">{edu.school}</h4>
                      <p className="text-muted font-inter">{edu.degree}</p>
                      <p className="text-sm text-muted mt-2 font-inter">{edu.period}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Achievements & Certifications */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-satoshi font-satoshi-semibold mb-6 text-text flex items-center gap-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Achievements
                  </h3>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => {
                      const achievementId = `achievement-${index}`
                      return (
                      <motion.div
                        key={achievementId}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ translateY: -2 }}
                        className="flex items-start gap-3 p-4 bg-surface bg-opacity-30 backdrop-blur-glass rounded-card border border-surface transition-all duration-300 hover:shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <p className="text-text">{achievement}</p>
                      </motion.div>
                      )
                    })}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-satoshi font-satoshi-semibold mb-6 text-text flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => {
                      const certId = `cert-${index}`
                      return (
                      <motion.div
                        key={certId}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ translateY: -2 }}
                        className="flex items-start gap-3 p-4 bg-surface bg-opacity-30 backdrop-blur-glass rounded-card border border-surface transition-all duration-300 hover:shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-text">{cert}</p>
                      </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education