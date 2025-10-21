import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaYoutube, FaHeart, FaBolt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/prakashreddy412',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/chukka-prakash-reddy',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://www.youtube.com/@BrainBoxChallenge',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <motion.footer
      className="bg-darkGray border-t border-lightGray/30 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            className="text-gray-400 text-sm crt-flicker"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © {currentYear} Chukka Prakash Reddy | Crafted with{' '}
            <FaHeart className="inline text-red-500 mx-1" />
            and{' '}
            <FaBolt className="inline text-yellow-500 mx-1" />
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-300 hover-effect ${social.color}`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Terminal-style bottom border */}
        <motion.div
          className="mt-6 pt-4 border-t border-neonGreen/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-xs text-gray-500 font-mono">
            <span className="text-neonGreen">$</span> System Status: Online | 
            <span className="text-neonCyan ml-2">●</span> Ready for new connections
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
