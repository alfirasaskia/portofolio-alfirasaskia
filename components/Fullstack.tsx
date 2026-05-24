'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Fullstack() {
  const skills = {
    Development: [
      { name: 'Tailwind CSS', emoji: '💨', color: 'from-cyan-400 to-blue-500' },
      { name: 'PHP', emoji: '🐘', color: 'from-indigo-400 to-purple-500' },
      { name: 'JavaScript', emoji: '💛', color: 'from-yellow-400 to-orange-500' },
      { name: 'HTML & CSS', emoji: '🌐', color: 'from-orange-400 to-red-500' },
      { name: 'MySQL', emoji: '🗄️', color: 'from-blue-400 to-indigo-500' },
    ],
    'Design & Content': [
      { name: 'Canva', emoji: '🖌️', color: 'from-pink-400 to-rose-500' },
      { name: 'Social Media', emoji: '📱', color: 'from-purple-400 to-pink-500' },
    ],
    'Tools & More': [
      { name: 'VS Code', emoji: '💻', color: 'from-blue-500 to-cyan-500' },
      { name: 'Microsoft Office', emoji: '📊', color: 'from-green-400 to-emerald-500' },
      { name: 'Google Workspace', emoji: '🔧', color: 'from-red-400 to-orange-500' },
    ],
  }

  return (
    <section id="fullstack" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Corner Loading Stars */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 right-8 text-baby-blue text-2xl"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 left-8 text-neon-pink text-2xl"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 left-8 text-soft-purple text-xl"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 right-8 text-baby-blue text-xl"
        >
          ✦
        </motion.div>
        
        {/* Soft Glow */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 bg-baby-blue/5 blur-xl rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-56 h-56 bg-neon-pink/5 blur-xl rounded-full"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-baby-blue text-sm font-medium border border-white/10 mb-4">
            <Sparkles size={14} />
            My Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technologies <span className="text-neon-pink">I Work With</span>
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Built from curiosity, sharpened through experience
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Row 1: Design & Content + Tools & More */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Design & Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                Design & Content
                <span className="flex-grow h-px bg-gradient-to-r from-white/20 to-transparent"></span>
              </h3>
              <div className="flex gap-3">
                {skills['Design & Content'].map((skill, skillIndex) => (
                  <div key={skill.name} style={{ width: '160px', flexShrink: 0 }}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="bg-white/10 border border-white/20 rounded-xl px-2 py-3 hover:border-white/40 transition-all duration-300 relative group flex items-center gap-2 cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                      <div className="relative z-10 flex items-center gap-2">
                        <span className="text-lg flex-shrink-0">{skill.emoji}</span>
                        <span className="text-xs font-bold text-white leading-tight">{skill.name}</span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & More */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                Tools & More
                <span className="flex-grow h-px bg-gradient-to-r from-white/20 to-transparent"></span>
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {skills['Tools & More'].map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white/10 border border-white/20 rounded-xl px-2 py-3 hover:border-white/40 transition-all duration-300 relative group flex items-center gap-2 cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="text-lg flex-shrink-0">{skill.emoji}</span>
                      <span className="text-xs font-bold text-white leading-tight">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Row 2: Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              Development
              <span className="flex-grow h-px bg-gradient-to-r from-white/20 to-transparent"></span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {skills.Development.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/10 border border-white/20 rounded-xl px-2 py-3 hover:border-white/40 transition-all duration-300 relative group flex items-center gap-2 cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-lg flex-shrink-0">{skill.emoji}</span>
                    <span className="text-xs font-bold text-white leading-tight">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Also Familiar With */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-xs font-medium text-gray-400 mb-4">Also familiar with</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Data Entry', 'Administration'].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
