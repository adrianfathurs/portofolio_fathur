import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title font-satoshi font-satoshi-semibold mb-12 text-center text-text">Get In Touch</h2>

            <div className="bg-background bg-opacity-70 backdrop-blur-glass p-8 rounded-card border border-surface text-center">
              <p className="text-xl text-text mb-8 font-inter leading-body">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <motion.a
                  href="mailto:fatursetiawan80@gmail.com"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-card font-inter font-inter-medium hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>Send Email</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/adrian-fathur-setyawan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary rounded-card font-semibold hover:bg-primary hover:text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </motion.a>
              </div>

              <div className="border-t border-surface pt-8">
                <p className="text-muted mb-4">Connect with me</p>
                <div className="flex justify-center gap-6">
                  <motion.a
                    href="mailto:fatursetiawan80@gmail.com"
                    className="text-muted hover:text-primary transition-colors duration-300 transform hover:scale-110"
                    aria-label="Email"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/adrian-fathur-setyawan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact