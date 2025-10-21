import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      color: 'text-neonGreen',
      borderColor: 'border-neonGreen',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'Redux', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: FaServer,
      color: 'text-neonCyan',
      borderColor: 'border-neonCyan',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring Security', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Database',
      icon: FaDatabase,
      color: 'text-neonPurple',
      borderColor: 'border-neonPurple',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Elasticsearch', level: 70 },
        { name: 'SQL', level: 95 },
        { name: 'Database Design', level: 85 },
        { name: 'Query Optimization', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      color: 'text-yellow-400',
      borderColor: 'border-yellow-400',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Jenkins', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Terraform', level: 70 }
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
            <span className="text-neonGreen">Technical</span>
            <span className="text-white"> Skills</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-darkGray border border-lightGray rounded-lg p-6 hover:border-neonGreen transition-all duration-300 hover-effect"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-darkGray border-2 ${category.borderColor} mr-4`}>
                  <category.icon className={`text-2xl ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className={`text-sm ${category.color}`}>{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-darkGray rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color.replace('text-', 'from-')} to-transparent`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        style={{
                          boxShadow: `0 0 10px ${category.color.replace('text-', '#')}`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-neonGreen mb-8">
            Additional Skills & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'GitHub', 'Jira', 'Slack', 'VS Code', 'IntelliJ IDEA', 'Postman',
              'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Blender', 'Unity'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                className="skill-chip text-center hover-effect"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-darkGray border border-neonGreen/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-neonGreen mb-4">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Machine Learning', 'Blockchain', 'Web3', 'Microservices', 'GraphQL', 'Rust'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-neonGreen/10 border border-neonGreen/30 text-neonGreen rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Always exploring new technologies and expanding my skill set
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
