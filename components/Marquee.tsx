'use client'

import { motion } from 'framer-motion'

export default function Marquee() {
  const text = "AVAILABLE FOR WORK ✦ OPEN TO COLLABORATE ✦ FRONTEND DEVELOPER ✦ UI/UX DESIGN ✦ CREATIVE WEBSITE ✦ "
  const repeatedText = text.repeat(4)

  return (
    <div className="relative w-full py-4 bg-[#7dd3fc]/10 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-2 left-10 w-2 h-2 rounded-full bg-baby-blue/40" />
      <div className="absolute top-2 right-10 w-2 h-2 rounded-full bg-neon-pink/40" />
      <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 rounded-full bg-soft-purple/40" />
      <div className="absolute bottom-2 right-1/4 w-1.5 h-1.5 rounded-full bg-baby-blue/40" />

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
        >
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#ff4fa3]">
            {repeatedText}
          </span>
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#ff4fa3]">
            {repeatedText}
          </span>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-baby-blue/5 to-transparent pointer-events-none" />
    </div>
  )
}
