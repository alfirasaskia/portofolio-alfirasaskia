'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Code2, Palette, Cpu, Layers, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    t('hero.phrases.graduate'),

  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )
      setTypingSpeed(isDeleting ? 50 : 100)
      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      }
    }
    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases, language])

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: '#0a0a0a', padding: '80px 0' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(240,9,122,0.05)' }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-20 w-56 h-56 rounded-full blur-3xl"
          style={{ background: 'rgba(125,211,252,0.05)' }}
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#7DD3FC' : '#F0097A'
            }}
          />
        ))}
      </div>

      {/* Main content — generous horizontal padding */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sky-400 text-sm font-medium border"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(125,211,252,0.3)' }}
            >
              <Sparkles size={16} />
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-black leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              <span className="block text-xs sm:text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">{t('hero.greeting')}</span>
              <span className="text-white">Alfira </span>
              <span style={{ WebkitTextStroke: '2px #7DD3FC', color: 'transparent' }}>Saskia</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl font-light text-gray-400 h-10"
            >
              <span style={{ background: 'linear-gradient(90deg, #7DD3FC, #F0097A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{text}</span>
              <span className="animate-pulse text-sky-400">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-gray-400 max-w-md leading-relaxed"
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-4 rounded-full font-black text-black transition-all duration-300"
                style={{ background: '#7DD3FC', boxShadow: '0 0 30px rgba(125,211,252,0.4)' }}
              >
                {t('hero.viewWork')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full font-black text-white border transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                {t('hero.letsTalk')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — Photo + Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center w-full lg:w-1/2"
            style={{ minHeight: '380px' }}
          >
            {/* Orbit rings — sized to never overflow on mobile */}
            {[
              { size: 340, color: 'rgba(255,79,163,0.5)', dur: 25, dir: 1 },
              { size: 300, color: 'rgba(125,211,252,0.6)', dur: 20, dir: -1 },
              { size: 260, color: 'rgba(167,139,250,0.5)', dur: 15, dir: 1 },
            ].map((ring, i) => (
              <motion.div
                key={i}
                animate={{ rotate: ring.dir * 360 }}
                transition={{ duration: ring.dur, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full border-2"
                style={{
                  width: ring.size,
                  height: ring.size,
                  borderColor: ring.color,
                  boxShadow: `0 0 40px ${ring.color}`,
                }}
              />
            ))}

            {/* Orbit particles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute"
              style={{ width: 340, height: 340 }}
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: '50%', top: '50%',
                    transform: `rotate(${i * 36}deg) translateX(170px)`,
                    background: '#7DD3FC',
                    boxShadow: '0 0 8px rgba(125,211,252,0.8)'
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.div>

            {/* Floating top badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-2xl border text-xs font-black text-sky-400"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(125,211,252,0.4)', boxShadow: '0 0 20px rgba(125,211,252,0.2)', whiteSpace: 'nowrap' }}
            >
              {t('hero.projectsCompleted')}
            </motion.div>

            {/* Floating bottom badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-2xl border text-xs font-black text-pink-400"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,79,163,0.4)', boxShadow: '0 0 20px rgba(255,79,163,0.2)', whiteSpace: 'nowrap' }}
            >
              {t('hero.internship')}
            </motion.div>

            {/* Floating icon — top right */}
            <motion.div animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 right-0 z-20 p-3 rounded-2xl border"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(125,211,252,0.4)', boxShadow: '0 0 30px rgba(125,211,252,0.3)' }}>
              <Code2 className="w-6 h-6 text-sky-300" />
            </motion.div>

            {/* Floating icon — bottom left */}
            <motion.div animate={{ y: [0, 18, 0], rotate: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 left-0 z-20 p-3 rounded-2xl border"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,79,163,0.4)', boxShadow: '0 0 30px rgba(255,79,163,0.3)' }}>
              <Palette className="w-6 h-6 text-pink-400" />
            </motion.div>

            {/* Floating icon — top left */}
            <motion.div animate={{ y: [0, -22, 0], rotate: [0, 12, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-8 left-0 z-20 p-3 rounded-2xl border"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,79,163,0.4)', boxShadow: '0 0 30px rgba(255,79,163,0.3)' }}>
              <Layers className="w-6 h-6 text-pink-400" />
            </motion.div>

            {/* Floating icon — bottom right */}
            <motion.div animate={{ y: [0, 22, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 right-0 z-20 p-3 rounded-2xl border"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(125,211,252,0.4)', boxShadow: '0 0 30px rgba(125,211,252,0.3)' }}>
              <Cpu className="w-6 h-6 text-sky-300" />
            </motion.div>

            {/* Floating icon — right middle */}
            <motion.div animate={{ y: [0, 16, 0], rotate: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute top-1/2 -translate-y-1/2 right-0 z-20 p-3 rounded-2xl border"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(167,139,250,0.4)', boxShadow: '0 0 30px rgba(167,139,250,0.3)' }}>
              <Globe className="w-6 h-6 text-purple-400" />
            </motion.div>

            {/* Profile card */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 rounded-[40px] overflow-hidden border"
              style={{
                width: 280, height: 280,
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.2)',
                boxShadow: '0 0 80px rgba(125,211,252,0.3)'
              }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,79,163,0.2), transparent, rgba(125,211,252,0.2))' }} />
              <motion.div
                animate={{ x: ['-100%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-full h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #7DD3FC, transparent)' }}
              />
              <motion.div
                animate={{ x: ['100%', '-100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-0 left-0 w-full h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #F0097A, transparent)' }}
              />
              <img
                src="/images/Desain tanpa judul (2).png"
                alt="Profile"
                className="w-full h-full object-cover relative z-10"
              />
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full border text-xs font-bold text-sky-300"
                style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                {t('hero.creative')}
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-3 left-3 z-20 px-3 py-1 rounded-full border text-xs font-bold text-sky-300"
                style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                {t('hero.innovative')}
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-500">
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
