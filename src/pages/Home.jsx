import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Typewriter from '../components/Typewriter'

const Home = () => {
  const navigate = useNavigate()
  const roles = [
    'Full Stack Developer',
    'Spring Boot + React Expert',
    'Cloud Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ]

  const scrollToAbout = () => {
    navigate('/about')
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      {/* Main Hero Content */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Welcome Message */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-neonGreen">Access Granted.</span>
          <br />
          <span className="text-white">Welcome to Prakash's</span>
          <br />
          <span className="text-neonCyan">Digital Space</span>
          <span className="text-2xl md:text-4xl ml-2">👾</span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          className="text-xl md:text-3xl mb-8 min-h-[2rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-gray-300">I am a </span>
          <Typewriter
            texts={roles}
            speed={100}
            delay={2000}
            className="text-neonGreen font-bold"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Passionate about building scalable web applications and solving complex problems 
          with cutting-edge technologies. Let's create something amazing together!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="neon-btn hover-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore my System
          </motion.button>
          
          <motion.a
            href="/prakash-reddy-portfolio/contact"
            className="px-6 py-3 border-2 border-neonCyan text-neonCyan font-bold uppercase tracking-wider transition-all duration-300 hover:bg-neonCyan hover:text-black hover-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center text-neonGreen"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-neonGreen rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-neonGreen rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neonGreen rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
