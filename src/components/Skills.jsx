const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Skills',
      skills: ['Front End Development', 'Web Development', 'Project Management'],
      color: 'neon-blue'
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'PHP', 'C++', 'HTML & CSS'],
      color: 'neon-purple'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React JS', 'Vue JS', 'CodeIgniter', 'Laravel', 'Bootstrap', 'Vuetify', 'jQuery'],
      color: 'neon-pink'
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto section-fade">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-card p-6 rounded-2xl card-glow border border-gray-800 hover:border-${category.color}/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-100 group-hover:text-gradient transition-all">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-dark-bg/50 hover:bg-dark-bg transition-all duration-300 group/item"
                    >
                      <div className={`w-2 h-2 rounded-full bg-${category.color} animate-glow`}></div>
                      <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
