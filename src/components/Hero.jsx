import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei'

function FloatingCard({ position, color }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <mesh>
        <boxGeometry args={[1.5, 0.9, 0.08]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
      {/* Decorative elements */}
      <mesh position={[0, 0.15, 0.05]}>
        <boxGeometry args={[1, 0.08, 0.05]} />
        <meshStandardMaterial color="#306D29" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, -0.15, 0.05]}>
        <boxGeometry args={[0.8, 0.08, 0.05]} />
        <meshStandardMaterial color="#0D530E" transparent opacity={0.8} />
      </mesh>
    </Float>
  )
}

function DataVisualization({ position }) {
  const bars = [
    { id: 1, x: -0.6, height: 1.2 },
    { id: 2, x: -0.3, height: 0.8 },
    { id: 3, x: 0, height: 1.5 },
    { id: 4, x: 0.3, height: 1.0 },
    { id: 5, x: 0.6, height: 0.6 },
  ]

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3} position={position}>
      <group>
        {bars.map((bar) => (
          <mesh key={bar.id} position={[bar.x, bar.height / 2 - 0.5, 0]}>
            <boxGeometry args={[0.15, bar.height, 0.15]} />
            <meshStandardMaterial
              color="#306D29"
              transparent
              opacity={0.9}
              metalness={0.2}
              roughness={0.3}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function DashboardElement({ position, type }) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4} position={position}>
      <mesh>
        {type === 'sphere' ? (
          <sphereGeometry args={[0.3, 32, 32]} />
        ) : type === 'torus' ? (
          <torusGeometry args={[0.25, 0.08, 16, 32]} />
        ) : (
          <octahedronGeometry args={[0.28]} />
        )}
        <meshStandardMaterial
          color="#E7E1B1"
          transparent
          opacity={0.7}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#306D29" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#E7E1B1"
      />

      {/* Floating KPI Cards */}
      <FloatingCard position={[-4, 2, -2]} color="#FBF5DD" />
      <FloatingCard position={[4, 1.5, -3]} color="#E7E1B1" />
      <FloatingCard position={[-3, -1.5, -1]} color="#FBF5DD" />

      {/* Dashboard Elements */}
      <DashboardElement position={[2, 2, -2]} type="sphere" />
      <DashboardElement position={[-2, -2, -2]} type="torus" />
      <DashboardElement position={[3, -1, -3]} type="octahedron" />

      {/* Data Visualization */}
      <DataVisualization position={[0, -2, -2]} />

      {/* Grid helper for depth */}
      <gridHelper args={[20, 20, '#306D29', '#E7E1B1']} position={[0, -3, -5]} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-background">
      {/* 3D Scene Container */}
      <div className="absolute inset-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 text-center relative z-10 h-screen flex flex-col justify-center items-center">
        <div className="animate-slide-up">
          <p className="text-primary text-lg mb-4 tracking-widest font-inter font-inter-medium">
            HELLO, I'M
          </p>
          <h1 className="text-hero-title font-satoshi font-satoshi-bold tracking-hero-title mb-6 text-text">
            Adrian Fathur Setyawan
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted mb-8 font-satoshi font-satoshi-semibold">
            Senior Frontend Engineer
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-12 text-lg leading-body font-inter">
            Building enterprise dashboards,
            <br />
            industrial analytics,
            <br />
            and scalable web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-card font-inter font-inter-medium hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-card font-inter font-inter-medium hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-16">
          <a
            href="mailto:fatursetiawan80@gmail.com"
            className="text-muted hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-fathur-setyawan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors duration-300"
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
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero