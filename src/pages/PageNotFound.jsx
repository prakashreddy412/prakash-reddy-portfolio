import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-darkBg relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Glitch Effect 404 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-4">
            <span className="glitch" data-text="404">404</span>
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neonGreen mb-4">
            🚫 Access Denied - Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            The requested page has been compromised or doesn't exist in the system.
          </p>
          <p className="text-gray-400">
            Even the best hackers sometimes hit a dead end.
          </p>
        </motion.div>

        {/* Terminal-style Error Details */}
        <motion.div
          className="bg-black border border-neonGreen/30 rounded-lg p-6 mb-8 font-mono text-left max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-neonGreen mb-4">
            <span className="text-neonCyan">$</span> curl -I https://prakashreddy.com{window.location.pathname}
          </div>
          <div className="text-red-400 mb-2">
            HTTP/1.1 404 Not Found
          </div>
          <div className="text-gray-300 mb-2">
            Content-Type: text/html; charset=utf-8
          </div>
          <div className="text-gray-300 mb-4">
            Server: nginx/1.18.0
          </div>
          <div className="text-neonGreen">
            <span className="text-neonCyan">$</span> echo "Page not found in system directories"
          </div>
          <div className="text-gray-300">
            Page not found in system directories
          </div>
        </motion.div>

        {/* Location with Hacking Theme Map */}
        <motion.div
          className="bg-darkGray border border-neonGreen/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-neonGreen mb-4 flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" />
            System Location
          </h3>
          <div className="bg-black border border-neonCyan/30 rounded p-4 font-mono text-sm">
            <div className="text-neonCyan mb-2">$> locate --user=prakash</div>
            <div className="text-gray-300 mb-2">Searching GPS coordinates...</div>
            <div className="text-neonGreen mb-2">Found: Hyderabad, India</div>
            <div className="text-gray-400 mb-4">Coordinates: 17.3850° N, 78.4867° E</div>
            
            {/* Interactive Map Placeholder with Hacking Theme */}
            <div className="relative bg-gradient-to-br from-neonGreen/20 to-neonCyan/20 rounded border border-neonGreen/30 p-4">
              <div className="text-center text-neonGreen font-mono text-xs mb-2">
                [INTERACTIVE MAP - HACKING THEME]
              </div>
              <div className="grid grid-cols-8 gap-1 text-xs">
                {Array.from({ length: 64 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-2 rounded ${
                      Math.random() > 0.7 ? 'bg-neonGreen' : 
                      Math.random() > 0.5 ? 'bg-neonCyan' : 'bg-gray-600'
                    }`}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              <div className="text-center text-neonGreen text-xs mt-2">
                🎯 Target Location: Hyderabad, India
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/home"
              className="flex items-center space-x-2 px-6 py-3 bg-neonGreen text-black font-bold rounded-lg hover:bg-neonCyan transition-all duration-300 hover-effect"
            >
              <FaHome />
              <span>Return Home</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center space-x-2 px-6 py-3 border-2 border-neonCyan text-neonCyan font-bold rounded-lg hover:bg-neonCyan hover:text-black transition-all duration-300 hover-effect"
            >
              <FaMapMarkerAlt />
              <span>Contact Me</span>
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 px-6 py-3 border-2 border-neonPurple text-neonPurple font-bold rounded-lg hover:bg-neonPurple hover:text-black transition-all duration-300 hover-effect"
            >
              <FaArrowLeft />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { icon: '🔍', title: 'Search Failed', desc: 'Page not found in database' },
            { icon: '🛡️', title: 'Security Alert', desc: 'Unauthorized access attempt' },
            { icon: '⚡', title: 'System Status', desc: 'All other pages operational' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-darkGray border border-lightGray rounded-lg p-4 text-center hover:border-neonGreen transition-all duration-300 hover-effect"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-neonGreen font-bold mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Matrix-style Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neonGreen rounded-full opacity-20"
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
      </div>
    </section>
  )
}

export default PageNotFound
