'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Star } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isHireMeClicked, setIsHireMeClicked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'projects', 'experience', 'contact']
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/5 py-4' 
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black text-white"
          >
            <span className="gradient-text">JD.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="relative text-sm font-bold transition-colors group"
              >
                <span className={`${
                  activeSection === item.href.slice(1)
                    ? 'text-baby-blue'
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-baby-blue to-soft-purple transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-full' : 'w-0'
                  }`}
                />
              </motion.a>
            ))}
          </div>

          {/* Hire Me Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(125,211,252,0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsHireMeClicked(!isHireMeClicked)}
            className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm shadow-[0_0_30px_rgba(125,211,252,0.4)] hover:shadow-[0_0_50px_rgba(125,211,252,0.6)] transition-all duration-300 ${
              isHireMeClicked ? 'bg-neon-pink text-white' : 'bg-baby-blue text-black'
            }`}
          >
            Hire Me
            <Star size={14} fill={isHireMeClicked ? 'white' : 'black'} />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
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
              className="md:hidden mt-4 glass backdrop-blur-2xl bg-white/5 rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-bold transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'text-baby-blue'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsHireMeClicked(!isHireMeClicked)}
                  className={`mt-4 px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 ${
                    isHireMeClicked ? 'bg-neon-pink text-white' : 'bg-baby-blue text-black'
                  }`}
                >
                  Hire Me
                  <Star size={14} fill={isHireMeClicked ? 'white' : 'black'} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
