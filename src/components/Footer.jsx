const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-surface">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted font-inter leading-body">
            © 2025 Adrian Fathur Setyawan. Built with{' '}
            <span className="text-accent">❤</span> using{' '}
            <span className="text-primary font-satoshi font-satoshi-medium">React</span> &{' '}
            <span className="text-accent font-satoshi font-satoshi-medium">Tailwind CSS</span>
          </p>
          <p className="text-muted text-sm mt-2 italic font-inter leading-body">
            "Code is not just about functionality, it's about experience."
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer