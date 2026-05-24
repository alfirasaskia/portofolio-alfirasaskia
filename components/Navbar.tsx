'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Star, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isHireMeClicked, setIsHireMeClicked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#fullstack' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled ? 'rgba(10,10,10,0.9)' : 'rgba(10,10,10,0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '12px 0' : '16px 0',
      }}
    >
      {/* max-width container — same as hero */}
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            style={{ textDecoration: 'none' }}
          >
            <span style={{ fontSize: '22px', fontWeight: 900, fontFamily: 'sans-serif', color: '#7DD3FC' }}>
              AS<span style={{ color: '#7DD3FC' }}>.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 md:gap-9">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: isActive ? '#7DD3FC' : '#d1d5db',
                    transition: 'color 0.2s',
                    paddingBottom: '6px',
                    fontFamily: 'sans-serif',
                  }}
                >
                  {item.name}
                  {/* Active underline */}
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#7DD3FC',
                      borderRadius: '999px',
                      display: isActive ? 'block' : 'none',
                    }}
                  />
                </motion.a>
              )
            })}
          </div>

          {/* Hire Me Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200,241,58,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:flex items-center gap-2"
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              fontWeight: 900,
              fontSize: '12px',
              cursor: 'pointer',
              border: 'none',
              background: '#7DD3FC',
              color: '#000',
              boxShadow: '0 0 20px rgba(125,211,252,0.35)',
              transition: 'all 0.3s',
              fontFamily: 'sans-serif',
            }}
          >
            {t('nav.hireMe')}
            <Star size={11} fill="black" />
          </motion.button>

          {/* Language Toggle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="hidden md:flex items-center gap-2 cursor-pointer"
            style={{
              color: '#fff',
              fontSize: '12px',
              fontWeight: 600,
              transition: 'all 0.3s',
              fontFamily: 'sans-serif',
            }}
          >
            <Globe size={14} />
            {language === 'en' ? 'EN' : 'ID'}
          </motion.div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: isActive ? '#7DD3FC' : '#d1d5db',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {item.name}
                    </a>
                  )
                })}
                <button
                  onClick={() => setIsHireMeClicked(!isHireMeClicked)}
                  style={{
                    marginTop: '8px',
                    padding: '12px 24px',
                    borderRadius: '999px',
                    fontWeight: 900,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    background: isHireMeClicked ? '#F0097A' : '#7DD3FC',
                    color: isHireMeClicked ? '#fff' : '#000',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'sans-serif',
                  }}
                >
                  {t('nav.hireMe')}
                  <Star size={13} fill={isHireMeClicked ? 'white' : 'black'} />
                </button>
                <div
                  onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                  className="flex items-center gap-2 cursor-pointer mt-4"
                  style={{
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 600,
                    transition: 'all 0.3s',
                    fontFamily: 'sans-serif',
                  }}
                >
                  <Globe size={14} />
                  {language === 'en' ? 'EN' : 'ID'}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
