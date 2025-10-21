import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaCalendarAlt, FaCode } from 'react-icons/fa'

const About = () => {
  const info = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Hyderabad, India',
      color: 'text-neonGreen'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'prakashreddy412@gmail.com',
      color: 'text-neonCyan'
    },
    {
      icon: FaCalendarAlt,
      label: 'Experience',
      value: '3+ Years',
      color: 'text-neonPurple'
    },
    {
      icon: FaCode,
      label: 'Specialization',
      value: 'Full Stack Development',
      color: 'text-yellow-400'
    }
  ]

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neonGreen">About</span>
            <span className="text-white"> Me</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-neonGreen via-neonCyan to-neonPurple rounded-full animate-pulse-neon blur-sm"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neonGreen/30 bg-darkGray">
                <div className="w-full h-full bg-gradient-to-br from-neonGreen/20 to-neonCyan/20 flex items-center justify-center">
                  <div className="text-6xl text-neonGreen font-bold">
                    CP
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-neonGreen rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-neonCyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-neonPurple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neonGreen mb-4">
                Hello, I'm Chukka Prakash Reddy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A passionate Full Stack Developer with over 3 years of experience in building 
                scalable web applications. I specialize in Spring Boot, React, and cloud technologies, 
                with a strong focus on creating efficient, maintainable, and user-friendly solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through my YouTube channel "BrainBox Challenge". 
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {info.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-darkGray border border-lightGray rounded-lg p-4 hover:border-neonGreen transition-all duration-300 hover-effect"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={`text-xl ${item.color}`} />
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="/prakash-reddy-portfolio/contact"
                className="neon-btn hover-effect inline-block"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: '50+', label: 'Projects Completed', icon: '🚀' },
            { number: '3+', label: 'Years Experience', icon: '💻' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-darkGray border border-lightGray rounded-lg hover:border-neonGreen transition-all duration-300 hover-effect"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-neonGreen mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
