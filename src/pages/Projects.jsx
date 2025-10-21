import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Spring Boot and React. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      features: [
        'User Authentication & Authorization',
        'Product Catalog & Search',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Admin Dashboard',
        'Real-time Notifications'
      ],
      github: 'https://github.com/prakashreddy412/ecommerce-platform',
      demo: 'https://ecommerce-demo.prakashreddy.com',
      status: 'Completed',
      category: 'Full Stack'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'JWT', 'AWS'],
      features: [
        'Real-time Collaboration',
        'Project & Task Management',
        'Team Member Assignment',
        'Progress Tracking',
        'File Attachments',
        'Notification System'
      ],
      github: 'https://github.com/prakashreddy412/task-manager',
      demo: 'https://taskmanager-demo.prakashreddy.com',
      status: 'In Progress',
      category: 'Full Stack'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A data visualization dashboard that displays weather analytics with interactive charts, historical data, and predictive insights.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Chart.js', 'Docker'],
      features: [
        'Real-time Weather Data',
        'Interactive Charts & Graphs',
        'Historical Data Analysis',
        'Predictive Analytics',
        'Location-based Insights',
        'Export Functionality'
      ],
      github: 'https://github.com/prakashreddy412/weather-dashboard',
      demo: 'https://weather-demo.prakashreddy.com',
      status: 'Completed',
      category: 'Data Visualization'
    },
    {
      title: 'Social Media API',
      description: 'A RESTful API for a social media platform with features like posts, comments, likes, user profiles, and real-time messaging.',
      image: '/api/placeholder/400/250',
      technologies: ['Spring Boot', 'PostgreSQL', 'Redis', 'JWT', 'WebSocket', 'AWS'],
      features: [
        'User Registration & Authentication',
        'Post Creation & Management',
        'Comment & Like System',
        'Real-time Messaging',
        'User Profiles & Follow System',
        'Content Moderation'
      ],
      github: 'https://github.com/prakashreddy412/social-media-api',
      demo: 'https://social-api-demo.prakashreddy.com',
      status: 'Completed',
      category: 'Backend API'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with cyberpunk theme, featuring smooth animations, interactive elements, and contact form integration.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      features: [
        'Responsive Design',
        'Smooth Animations',
        'Interactive UI Elements',
        'Contact Form Integration',
        'Dark Theme',
        'SEO Optimized'
      ],
      github: 'https://github.com/prakashreddy412/portfolio',
      demo: 'https://prakashreddy412.github.io/my-portfolio/',
      status: 'Completed',
      category: 'Frontend'
    },
    {
      title: 'Microservices Architecture',
      description: 'A distributed system built with microservices architecture, featuring service discovery, API gateway, and distributed tracing.',
      image: '/api/placeholder/400/250',
      technologies: ['Spring Cloud', 'Docker', 'Kubernetes', 'Consul', 'Zipkin', 'AWS'],
      features: [
        'Service Discovery',
        'API Gateway',
        'Load Balancing',
        'Distributed Tracing',
        'Circuit Breaker Pattern',
        'Centralized Configuration'
      ],
      github: 'https://github.com/prakashreddy412/microservices-demo',
      demo: 'https://microservices-demo.prakashreddy.com',
      status: 'In Progress',
      category: 'DevOps'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-neonGreen border-neonGreen'
      case 'In Progress':
        return 'text-yellow-400 border-yellow-400'
      case 'Planned':
        return 'text-neonCyan border-neonCyan'
      default:
        return 'text-gray-400 border-gray-400'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack':
        return FaCode
      case 'Backend API':
        return FaServer
      case 'Data Visualization':
        return FaDatabase
      case 'Frontend':
        return FaCode
      case 'DevOps':
        return FaServer
      default:
        return FaCode
    }
  }

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
            <span className="text-neonGreen">Featured</span>
            <span className="text-white"> Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            return (
              <motion.div
                key={project.title}
                className="project-card group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-neonGreen/20 to-neonCyan/20 flex items-center justify-center">
                    <CategoryIcon className="text-6xl text-neonGreen/50" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-darkGray/80 text-neonCyan text-xs font-medium rounded-full border border-neonCyan/30">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neonGreen group-hover:text-neonCyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-neonGreen mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-darkGray border border-neonGreen/30 text-neonGreen text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-medium text-neonGreen mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-neonGreen mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-darkGray border border-neonGreen text-neonGreen rounded-lg hover:bg-neonGreen hover:text-black transition-all duration-300 hover-effect"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-neonGreen text-black rounded-lg hover:bg-neonCyan transition-all duration-300 hover-effect"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-darkGray border border-neonGreen/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-neonGreen mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out more projects on my GitHub or let's discuss how I can help with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/prakashreddy412"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.a>
              <motion.a
                href="/prakash-reddy-portfolio/contact"
                className="px-6 py-3 border-2 border-neonCyan text-neonCyan font-bold uppercase tracking-wider transition-all duration-300 hover:bg-neonCyan hover:text-black hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
