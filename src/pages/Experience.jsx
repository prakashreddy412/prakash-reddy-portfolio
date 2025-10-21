import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Hyderabad, India',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using Spring Boot and React. Mentoring junior developers and implementing best practices for code quality and performance.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      achievements: [
        'Improved application performance by 40% through optimization',
        'Led a team of 5 developers on critical projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'InnovateTech',
      location: 'Bangalore, India',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Redis', 'Git'],
      achievements: [
        'Delivered 15+ projects on time and within budget',
        'Reduced bug reports by 50% through improved testing',
        'Contributed to open-source projects with 100+ stars'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'StartupXYZ',
      location: 'Hyderabad, India',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Started my professional journey building web applications and learning industry best practices. Worked on various projects from concept to deployment.',
      technologies: ['Java', 'Spring', 'JavaScript', 'HTML/CSS', 'MySQL'],
      achievements: [
        'Built first production application from scratch',
        'Learned agile development methodologies',
        'Contributed to team knowledge sharing sessions'
      ]
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
            <span className="text-neonGreen">Work</span>
            <span className="text-white"> Experience</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in the world of software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonGreen via-neonCyan to-neonPurple transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-neonGreen rounded-full border-4 border-darkBg transform md:-translate-x-2 z-10">
                  <div className="w-full h-full bg-neonGreen rounded-full animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="bg-darkGray border border-lightGray rounded-lg p-6 hover:border-neonGreen transition-all duration-300 hover-effect"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-neonGreen mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-neonCyan font-medium mb-2">
                          <FaBriefcase className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <FaMapMarkerAlt className="mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <FaCalendarAlt className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-neonGreen/20 text-neonGreen text-xs font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-neonGreen mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-darkGray border border-neonGreen/30 text-neonGreen text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-medium text-neonGreen mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-neonGreen mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Interested in working together? Let's discuss how I can contribute to your team.
          </p>
          <a
            href="/prakash-reddy-portfolio/contact"
            className="neon-btn hover-effect inline-block"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
