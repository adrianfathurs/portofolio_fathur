const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto section-fade">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">About Me</h2>

          <div className="bg-dark-bg p-8 rounded-2xl card-glow border border-gray-800">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a developer who focuses on <span className="text-neon-blue font-semibold">software</span> and
              <span className="text-neon-purple font-semibold"> front-end development</span>. I have strong enthusiasm
              for learning new technologies and building interactive, scalable, and maintainable web applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Based in <span className="text-neon-pink font-semibold">Indonesia</span>, I'm passionate about creating
              seamless user experiences and solving complex problems through elegant code solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:fatursetiawan80@gmail.com" className="hover:text-neon-blue transition-colors">
                  fatursetiawan80@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
