import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Expertise',
      skills: ['Front End Development', 'Web Development', 'Project Management'],
      icon: '🎯',
      color: 'primary'
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'C++', 'HTML & CSS'],
      icon: '💻',
      color: 'accent'
    },
    {
      title: 'Frontend Frameworks',
      skills: ['React JS', 'Next.js', 'Vue JS', 'Redux'],
      icon: '⚛️',
      color: 'primary'
    },
    {
      title: 'Backend & Tools',
      skills: ['Laravel', 'CodeIgniter', 'Node.js', 'Git'],
      icon: '🔧',
      color: 'accent'
    },
    {
      title: 'UI Libraries',
      skills: ['Tailwind CSS', 'Bootstrap', 'Vuetify', 'jQuery'],
      icon: '🎨',
      color: 'primary'
    },
    {
      title: 'Data Visualization',
      skills: ['Highcharts', 'amCharts', 'Chart.js', 'D3.js'],
      icon: '📊',
      color: 'accent'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-satoshi font-satoshi-semibold mb-4 text-center text-text">Skills & Expertise</h2>
            <p className="text-center text-muted mb-12 max-w-2xl mx-auto font-inter leading-body">
              Specialized in building enterprise dashboards and data visualization applications
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ translateY: -8 }}
                  className="bg-surface bg-opacity-50 backdrop-blur-glass p-6 rounded-card border border-surface transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-card-title font-satoshi font-satoshi-medium text-text">{category.title}</h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 p-2 rounded-lg bg-background/50 hover:bg-background transition-all duration-200"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                        <span className="text-text font-inter leading-body">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specialized Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 bg-primary bg-opacity-10 backdrop-blur-glass p-8 rounded-card border border-primary border-opacity-30"
            >
              <h3 className="text-2xl font-satoshi font-satoshi-semibold mb-6 text-text text-center">Specialized In</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Enterprise Dashboard', 'Mining Analytics', 'Data Visualization', 'Real-time Systems'].map((item) => (
                  <div
                    key={item}
                    className="text-center p-4 bg-background rounded-lg border border-primary border-opacity-20"
                  >
                    <div className="text-text font-satoshi font-satoshi-medium">{item}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills