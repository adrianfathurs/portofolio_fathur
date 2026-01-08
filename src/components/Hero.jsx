const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg opacity-50"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <p className="text-neon-blue text-lg mb-4 tracking-widest">HELLO, I'M</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Adrian Fathur Setyawan
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            Software Engineer / Front End Developer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Building interactive, scalable, and maintainable web applications
            with passion for learning new technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-neon-blue text-neon-blue rounded-full font-semibold hover:bg-neon-blue/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-16">
          <a
            href="mailto:fatursetiawan80@gmail.com"
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="http://www.linkedin.com/in/adrian-fathur-setyawan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
