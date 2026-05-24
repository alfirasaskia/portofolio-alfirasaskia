'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Users, Coffee, Heart, Star, Rocket, Target, Sparkles, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const techStack = [
    { name: 'Laravel', icon: Code2, color: 'from-baby-blue to-sky-500' },
    { name: 'PHP', icon: Zap, color: 'from-neon-pink to-rose-500' },
    { name: 'Tailwind', icon: Palette, color: 'from-soft-purple to-violet-500' },
    { name: 'HTML', icon: Star, color: 'from-baby-blue to-cyan-500' },
  ]

  const funFacts = [
    { icon: Coffee, text: t('about.fact1'), emoji: '🍵' },
    { icon: Star, text: t('about.fact2'), emoji: '🌅' },
    { icon: Heart, text: t('about.fact3'), emoji: '🎵' },
    { icon: Zap, text: t('about.fact4'), emoji: '⚡' },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-4 text-neon-pink text-lg"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-4 text-baby-blue text-lg"
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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
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
            {t('about.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" dangerouslySetInnerHTML={{ __html: t('about.title') }}>
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 relative"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Rocket size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('about.journey')}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4 flex-grow">
                {t('about.bio1')}
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                {t('about.bio2')}
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                {t('about.bio3')}
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                {t('about.bio4')}
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t('about.bio5')}
              </p>
            </div>
          </motion.div>

          {/* Fun Facts Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 relative"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Star size={24} className="text-white" />
                {t('about.funFacts')}
              </h3>
              <div className="space-y-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-baby-blue/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl hover:bg-baby-blue/20 transition-colors">
                      {fact.emoji}
                    </div>
                    <span className="font-bold text-white/80 text-sm md:text-base">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
