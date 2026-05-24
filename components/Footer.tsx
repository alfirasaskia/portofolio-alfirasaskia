'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp, Instagram, Twitter, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#fullstack' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/alfira-saskia-ramadani-64b026291/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:alfiraa710@gmail.com',
      label: 'Email',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
  ]

  return (
    <footer className="py-16 px-6 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto max-w-6xl">

        {/* Main Content - 3 columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Col 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-black mb-4">
              <span className="text-neon-pink">AS</span>
              <span className="text-neon-pink">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}{' '}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-neon-pink hover:text-white hover:border-neon-pink transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 - Navigation 2 sub-columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
              {t('footer.quickLinks')}
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="text-gray-400 hover:text-neon-pink transition-colors text-sm font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 3 - Let's Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              {t('footer.connect')}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Let's build something amazing.
            </p>
            <motion.a
              href="mailto:alfiraa710@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-sm font-bold px-5 py-3 rounded-xl text-white hover:opacity-85 transition-opacity duration-200"
              style={{ background: '#F0097A' }}
            >
              alfiraa710@gmail.com ↗
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <Heart size={14} className="text-neon-pink fill-neon-pink" />
            {t('footer.madeWith')}{' '}
            <span className="font-black bg-gradient-to-r from-neon-pink to-baby-blue bg-clip-text text-transparent">
              Alfira Saskia
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            {currentYear} {t('footer.rights')}
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-baby-blue text-black font-black shadow-[0_0_30px_rgba(125,211,252,0.4)] hover:shadow-[0_0_50px_rgba(125,211,252,0.6)] transition-all duration-300 z-50 flex items-center justify-center"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  )
}
