const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto section-fade">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Get In Touch</h2>

          <div className="bg-dark-card p-8 rounded-2xl card-glow border border-gray-800 text-center">
            <p className="text-xl text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:fatursetiawan80@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Send Email</span>
              </a>

              <a
                href="http://www.linkedin.com/in/adrian-fathur-setyawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border-2 border-neon-blue text-neon-blue rounded-full font-semibold hover:bg-neon-blue/10 transition-all duration-300 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:fatursetiawan80@gmail.com"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="http://www.linkedin.com/in/adrian-fathur-setyawan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
