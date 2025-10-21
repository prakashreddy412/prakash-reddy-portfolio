import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaYoutube, FaPaperPlane, FaExternalLinkAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'prakashreddy412@gmail.com',
          reply_to: formData.email
        },
        publicKey
      )
      
      console.log('SUCCESS!', result.status, result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.log('FAILED...', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'prakashreddy412@gmail.com',
      link: 'mailto:prakashreddy412@gmail.com',
      color: 'text-neonGreen'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9876543210',
      link: 'tel:+919876543210',
      color: 'text-neonCyan'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Hyderabad, India',
      link: 'https://maps.google.com/?q=Hyderabad,India',
      color: 'text-neonPurple'
    }
  ]

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
            <span className="text-neonGreen">Get In</span>
            <span className="text-white"> Touch</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-neonGreen mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-darkGray border border-lightGray rounded-lg hover:border-neonGreen transition-all duration-300 hover-effect group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className={`p-3 rounded-lg bg-darkGray border-2 border-neonGreen/30 group-hover:border-neonGreen transition-colors`}>
                    <info.icon className={`text-xl ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-neonGreen mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-darkGray border border-lightGray rounded-lg text-gray-400 transition-all duration-300 hover-effect ${social.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-darkGray border border-lightGray rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neonGreen mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-lightGray rounded-lg text-white placeholder-gray-500 focus:border-neonGreen focus:outline-none transition-colors"
                  placeholder="> Enter your name..."
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-lightGray rounded-lg text-white placeholder-gray-500 focus:border-neonGreen focus:outline-none transition-colors"
                  placeholder="> Enter your email..."
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-lightGray rounded-lg text-white placeholder-gray-500 focus:border-neonGreen focus:outline-none transition-colors"
                  placeholder="> Enter subject..."
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-lightGray rounded-lg text-white placeholder-gray-500 focus:border-neonGreen focus:outline-none transition-colors resize-none"
                  placeholder="> Enter your message..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-neonGreen text-black font-bold rounded-lg hover:bg-neonCyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-effect"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  className={`p-4 rounded-lg text-center ${
                    submitStatus === 'success'
                      ? 'bg-neonGreen/20 text-neonGreen border border-neonGreen/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === 'success'
                    ? 'Message sent successfully! I\'ll get back to you soon.'
                    : 'Failed to send message. Please try again or contact me directly.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Interactive Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-darkGray border border-neonGreen/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neonGreen mb-6 text-center flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              System Location
            </h3>
            
            {/* Hacking-themed Map Interface */}
            <div className="bg-black border border-neonCyan/30 rounded-lg p-4 font-mono">
              <div className="text-neonCyan mb-4">
                <span className="text-neonGreen">$</span> locate --user=prakash --coordinates
              </div>
              <div className="text-gray-300 mb-2">Searching GPS coordinates...</div>
              <div className="text-neonGreen mb-4">Found: Hyderabad, India (17.3850° N, 78.4867° E)</div>
              
              {/* Interactive Map with Hacking Theme */}
              <div className="relative bg-gradient-to-br from-neonGreen/10 to-neonCyan/10 rounded border border-neonGreen/30 p-4 mb-4">
                <div className="text-center text-neonGreen font-mono text-sm mb-4">
                  [INTERACTIVE MAP - HACKING THEME]
                </div>
                
                {/* Grid-based Map Visualization */}
                <div className="grid grid-cols-12 gap-1 mb-4">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-3 rounded ${
                        Math.random() > 0.8 ? 'bg-neonGreen' : 
                        Math.random() > 0.6 ? 'bg-neonCyan' : 
                        Math.random() > 0.4 ? 'bg-neonPurple' : 'bg-gray-600'
                      }`}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                    />
                  ))}
                </div>
                
                {/* Location Marker */}
                <div className="text-center">
                  <motion.div
                    className="inline-block text-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    🎯
                  </motion.div>
                  <div className="text-neonGreen text-sm mt-2">Target: Hyderabad, India</div>
                </div>
              </div>
              
              {/* Map Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="https://maps.google.com/?q=Hyderabad,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-neonGreen text-black font-bold rounded-lg hover:bg-neonCyan transition-all duration-300 hover-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  <span>Open in Google Maps</span>
                </motion.a>
                
                <motion.button
                  onClick={() => navigator.clipboard.writeText('17.3850, 78.4867')}
                  className="flex items-center justify-center space-x-2 px-4 py-2 border-2 border-neonCyan text-neonCyan font-bold rounded-lg hover:bg-neonCyan hover:text-black transition-all duration-300 hover-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Copy Coordinates</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal-style Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-black border border-neonGreen/30 rounded-lg p-6 font-mono">
            <div className="text-neonGreen mb-2">
              <span className="text-neonCyan">$</span> echo "Thank you for visiting my portfolio!"
            </div>
            <div className="text-gray-300">
              Thank you for visiting my portfolio!
            </div>
            <div className="text-neonGreen mt-2">
              <span className="text-neonCyan">$</span> status --ready-for-collaboration
            </div>
            <div className="text-gray-300">
              Status: Ready for new opportunities and collaborations
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
