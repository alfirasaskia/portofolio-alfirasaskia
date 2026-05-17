'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles, Code2, Palette, Zap, Cpu, Layers, Globe, Rocket } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    'Laravel Developer',
    'Web Developer',
    'Fresh Graduate',
    'Open to Collaborate',
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
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative px-6 py-20 overflow-hidden bg-[#0a0a0a]">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Minimal Decorative Orbs */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-neon-pink/5 to-transparent blur-xl rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-56 h-56 bg-gradient-to-br from-baby-blue/5 to-transparent blur-xl rounded-full"
        />

        {/* Minimal Stars - Reduced from 50 to 15 */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#7DD3FC' : '#F0097A'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass backdrop-blur-xl text-baby-blue text-sm font-medium border border-baby-blue/30"
            >
              <Sparkles size={16} />
              Fresh Graduate · Available for work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-soft-cream uppercase mb-4 block">Hi, I'm</span>
              <span className="text-white">Alfira</span>{' '}
              <span className="neon-outline">Saskia</span>{' '}
              <span className="text-white">Ramadani</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-gray-400 h-12"
            >
              <span className="gradient-text">{text}</span>
              <span className="animate-pulse text-baby-blue">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              I believe great work is not only about getting tasks done — but about delivering them efficiently, neatly, and with real value.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(125,211,252,0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-4 rounded-full bg-baby-blue text-black font-black shadow-[0_0_30px_rgba(125,211,252,0.4)] hover:shadow-[0_0_50px_rgba(125,211,252,0.6)] transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(125,211,252,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full glass backdrop-blur-xl text-white font-black border border-white/20 hover:border-baby-blue transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Unique Futuristic Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Particle Orbit Effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-baby-blue rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 30}deg) translateX(175px)`,
                    boxShadow: '0 0 10px rgba(125,211,252,0.8)'
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>

            {/* Gradient Neon Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full border-2 border-neon-pink/50"
              style={{
                boxShadow: '0 0 80px rgba(255,79,163,0.5), inset 0 0 80px rgba(255,79,163,0.2)'
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[310px] h-[310px] md:w-[420px] md:h-[420px] rounded-full border-2 border-baby-blue/60"
              style={{
                boxShadow: '0 0 70px rgba(125,211,252,0.6), inset 0 0 70px rgba(125,211,252,0.2)'
              }}
            />
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[270px] h-[270px] md:w-[380px] md:h-[380px] rounded-full border-2 border-soft-purple/50"
              style={{
                boxShadow: '0 0 60px rgba(167,139,250,0.5), inset 0 0 60px rgba(167,139,250,0.2)'
              }}
            />


            {/* Unique Floating Tech Icons with Enhanced Design - Positioned outside card */}
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 glass backdrop-blur-2xl rounded-3xl p-4 shadow-[0_0_50px_rgba(125,211,252,0.4)] border border-baby-blue/40 group z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-baby-blue/10 to-transparent rounded-3xl" />
              <Code2 className="w-7 h-7 text-baby-blue relative z-10" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass backdrop-blur-2xl rounded-3xl p-4 shadow-[0_0_50px_rgba(255,79,163,0.4)] border border-neon-pink/40 group z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent rounded-3xl" />
              <Palette className="w-7 h-7 text-neon-pink relative z-10" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 right-8 md:-bottom-10 md:right-16 glass backdrop-blur-2xl rounded-3xl p-4 shadow-[0_0_50px_rgba(125,211,252,0.4)] border border-baby-blue/40 group z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-baby-blue/10 to-transparent rounded-3xl" />
              <Cpu className="w-7 h-7 text-baby-blue relative z-10" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-8 left-8 md:-top-10 md:left-16 glass backdrop-blur-2xl rounded-3xl p-4 shadow-[0_0_50px_rgba(255,79,163,0.4)] border border-neon-pink/40 group z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent rounded-3xl" />
              <Layers className="w-7 h-7 text-neon-pink relative z-10" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 22, 0], rotate: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-1/3 -right-8 md:-right-16 glass backdrop-blur-2xl rounded-3xl p-4 shadow-[0_0_50px_rgba(167,139,250,0.4)] border border-soft-purple/40 group z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-soft-purple/10 to-transparent rounded-3xl" />
              <Globe className="w-7 h-7 text-soft-purple relative z-10" />
            </motion.div>

            {/* Enhanced Floating Mini Statistic Cards - Positioned outside card */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.8, 1, 0.8],
                y: [0, -8, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 glass backdrop-blur-2xl px-4 py-2 rounded-2xl border border-baby-blue/40 shadow-[0_0_30px_rgba(125,211,252,0.3)] z-20"
            >
              <span className="text-xs font-black text-baby-blue">4 Projects Completed</span>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.8, 1, 0.8],
                y: [0, 8, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 glass backdrop-blur-2xl px-4 py-2 rounded-2xl border border-neon-pink/40 shadow-[0_0_30px_rgba(255,79,163,0.3)] z-20"
            >
              <span className="text-xs font-black text-neon-pink">4 Mo Internship Experience</span>
            </motion.div>

            {/* Glass Profile Card with Unique Design */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-[50px] glass backdrop-blur-3xl border border-white/20 shadow-[0_0_100px_rgba(125,211,252,0.4)] overflow-hidden group"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-baby-blue/20" />
              
              {/* Animated Decorative Lines */}
              <motion.div
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-baby-blue to-transparent"
              />
              <motion.div
                animate={{ 
                  x: ['100%', '-100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent"
              />

              {/* Profile Content */}
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="relative w-full h-full">
                  <img 
                    src="/images/Desain tanpa judul (2).png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Mini Cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass backdrop-blur-xl border border-white/20 text-xs font-bold text-baby-blue"
              >
                ✨ Creative
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full glass backdrop-blur-xl border border-white/20 text-xs font-bold text-baby-blue"
              >
                🚀 Innovative
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

