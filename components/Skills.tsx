'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Main Tech Stack',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      title: 'Development',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Git & GitHub', level: 75 },
        { name: 'Google Workspace', level: 90 },
        { name: 'Canva', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Detail-oriented', level: 95 },
        { name: 'Team collaboration', level: 95 },
        { name: 'Time management', level: 90 },
        { name: 'Fast learner', level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="glass-card rounded-2xl p-6 glow-hover"
            >
              <h3 className="text-2xl font-bold mb-8 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.3 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl text-gray-400 mb-8">Technologies I work with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Laravel', 'PHP', 'Tailwind CSS', 'HTML & CSS', 'JavaScript', 'MySQL', 'Git & GitHub', 'Google Workspace', 'Canva'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-3 rounded-full glass text-gray-300 text-sm font-medium glow-hover cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
