'use client'

import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Fullstack from '../components/Fullstack'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen'
import StarBackground from '../components/StarBackground'
import AOS from 'aos'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-[#0a0a1a] overflow-x-hidden">
      <StarBackground />

      <Navbar />
      <Hero />
      <div className="border-t border-white/10"></div>
      <About />
      <div className="border-t border-white/10"></div>
      <Fullstack />
      <div className="border-t border-white/10"></div>
      <Projects />
      <div className="border-t border-white/10"></div>
      <Experience />
      <div className="border-t border-white/10"></div>
      <Contact />
      <div className="border-t border-white/10"></div>
      <Marquee />
      <Footer />
    </main>
  )
}
