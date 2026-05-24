'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import emailjs from 'emailjs-com'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsButtonClicked(true)

    try {
      await emailjs.send(
        'service_zvxmj3g',
        'template_71uktt7',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'bovoRFebRN_z37OhR'
      )
      alert(t('contact.success'))
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
      setIsButtonClicked(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'alfiraa710@gmail.com',
      href: 'mailto:alfiraa710@gmail.com',
      color: 'from-neon-pink to-rose-500',
    },
    {
      icon: Phone,
      label: t('contact.whatsapp'),
      value: '+62-838-9916-6268',
      href: 'https://wa.me/6283899166268',
      color: 'from-baby-blue to-sky-500',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Bogor, West Java, Indonesia',
      href: 'https://www.google.com/maps/search/?api=1&query=Jl.+Muara+No.+116,+Sindangrasa,+Bogor+Timur,+Kota+Bogor,+Jawa+Barat,+Indonesia,+16145',
      color: 'from-neon-pink to-rose-500',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/alfiraa',
      label: 'GitHub',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Decorative Stars on Edges */}
        {/* Top Edge Stars */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`top-${i}`}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: '10px',
              backgroundColor: i % 2 === 0 ? '#7DD3FC' : '#F0097A'
            }}
          />
        ))}
        {/* Bottom Edge Stars */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bottom-${i}`}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              bottom: '10px',
              backgroundColor: i % 2 === 0 ? '#F0097A' : '#7DD3FC'
            }}
          />
        ))}
        {/* Left Edge Stars */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`left-${i}`}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: '10px',
              top: `${30 + i * 40}%`,
              backgroundColor: '#7DD3FC'
            }}
          />
        ))}
        {/* Right Edge Stars */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`right-${i}`}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              right: '10px',
              top: `${30 + i * 40}%`,
              backgroundColor: '#F0097A'
            }}
          />
        ))}
        
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Subtle Decorative Orbs */}
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-neon-pink/5 to-transparent blur-2xl rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-56 h-56 bg-gradient-to-br from-baby-blue/5 to-transparent blur-2xl rounded-full"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-baby-blue text-sm font-medium border border-white/10 mb-4">
            <Mail size={14} />
            {t('contact.info')}
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white" dangerouslySetInnerHTML={{ __html: t('contact.title') }}>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl text-center mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <info.icon size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-6 space-y-5 border border-white/10">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-3">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-baby-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-baby-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-baby-blue transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-full font-black shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 bg-baby-blue text-black"
              >
                {isSubmitting ? (
                  t('contact.sending')
                ) : (
                  <>
                    {t('contact.send')}
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
