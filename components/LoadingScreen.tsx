'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function LoadingScreen() {
  const { t } = useLanguage()
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a1a]">
      <div className="relative">
        {/* Main Spinner */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 rounded-full bg-gradient-to-r from-neon-pink via-baby-blue to-soft-purple"
        />
        
        {/* Inner Heart */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Heart size={40} className="text-white fill-white" />
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink via-baby-blue to-soft-purple blur-2xl"
        />

        {/* Floating Stars */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-8 -right-8"
        >
          <Star size={24} className="text-baby-blue fill-baby-blue" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -bottom-8 -left-8"
        >
          <Star size={24} className="text-neon-pink fill-neon-pink" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="absolute top-1/2 -right-12"
        >
          <Sparkles size={24} className="text-soft-purple" />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-32 text-white text-xl font-light tracking-widest"
      >
        {t('loading.text')}
      </motion.p>
    </div>
  )
}
