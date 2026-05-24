'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar, Building2, Sparkles, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'

export default function Experience() {
  const { t } = useLanguage()
  const [showGallery, setShowGallery] = useState(false)

  const pklPhotos = [
    '/images/pkl1.jpg',
    '/images/pkl2.jpg',
    '/images/pkl3.jpg',
    '/images/pkl4.jpg',
  ]

  const experiences = [
    {
      type: 'education',
      title: t('experience.eduTitle'),
      company: t('experience.eduSchool'),
      location: t('experience.eduLocation'),
      period: t('experience.eduPeriod'),
      description: t('experience.eduDescription'),
      skills: [t('experience.eduSkill1'), t('experience.eduSkill2'), t('experience.eduSkill3'), t('experience.eduSkill4')],
      color: '#7DD3FC',
    },
    {
      type: 'work',
      title: t('experience.workTitle'),
      company: t('experience.workCompany'),
      location: t('experience.workLocation'),
      period: t('experience.workPeriod'),
      description: t('experience.workDescription'),
      skills: [t('experience.workSkill1'), t('experience.workSkill2'), t('experience.workSkill3'), t('experience.workSkill4')],
      color: '#F0097A',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,15,17,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Left Abstract Blob - Light Blue - Bottom Left */}
        <div className="absolute -left-32 bottom-0 w-[300px] h-[400px] opacity-20">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            <defs>
              <pattern id="dots-left" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="2" fill="#ffffff" opacity="0.3"/>
              </pattern>
            </defs>
            <path d="M0,200 L0,400 A150,150 0 0,0 300,400 L300,200 A150,150 0 0,0 0,200 Z" 
                  fill="#7dd3fc"/>
            <path d="M0,200 L0,400 A150,150 0 0,0 300,400 L300,200 A150,150 0 0,0 0,200 Z" 
                  fill="url(#dots-left)"/>
          </svg>
        </div>

        {/* Right Abstract Blob - Light Pink - Right End */}
        <div className="absolute -right-32 top-0 w-[300px] h-[400px] opacity-20">
          <svg viewBox="0 0 300 400" className="w-full h-full">
            <defs>
              <pattern id="dots-right" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="2" fill="#ffffff" opacity="0.3"/>
              </pattern>
            </defs>
            <path d="M300,200 L300,0 A150,150 0 0,0 0,0 L0,200 A150,150 0 0,0 300,200 Z" 
                  fill="#ff4fa3"/>
            <path d="M300,200 L300,0 A150,150 0 0,0 0,0 L0,200 A150,150 0 0,0 300,200 Z" 
                  fill="url(#dots-right)"/>
          </svg>
        </div>

        {/* 5-pointed stars */}
        <div className="absolute top-10 left-10 opacity-20">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#7dd3fc">
            <path d="M10 0 L12.5 7.5 L20 10 L12.5 12.5 L10 20 L7.5 12.5 L0 10 L7.5 7.5 Z"/>
          </svg>
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#ff4fa3">
            <path d="M10 0 L12.5 7.5 L20 10 L12.5 12.5 L10 20 L7.5 12.5 L0 10 L7.5 7.5 Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="#7dd3fc">
            <path d="M10 0 L12.5 7.5 L20 10 L12.5 12.5 L10 20 L7.5 12.5 L0 10 L7.5 7.5 Z"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="#ff4fa3">
            <path d="M10 0 L12.5 7.5 L20 10 L12.5 12.5 L10 20 L7.5 12.5 L0 10 L7.5 7.5 Z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-baby-blue text-sm font-medium border border-white/10 mb-4">
            <Sparkles size={14} />
            {t('experience.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" dangerouslySetInnerHTML={{ __html: t('experience.title') }}>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-baby-blue via-neon-pink to-transparent z-10"></div>

            <div className="ml-12 md:ml-20 grid grid-cols-1 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-8 md:-left-14 top-6 w-4 h-4 rounded-full border-2 border-white z-30" style={{ backgroundColor: exp.color, borderColor: exp.color }}>
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: exp.color }} />
                  </div>

                  <div className={`bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-500 hover:shadow-lg group relative`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{
                      backgroundColor: `${exp.color}15`,
                      color: exp.color,
                      border: `1px solid ${exp.color}30`
                    }}>
                      {exp.type === 'work' ? (
                        <>
                          <Briefcase size={14} />
                          {t('experience.internship')}
                        </>
                      ) : (
                        <>
                          <GraduationCap size={14} />
                          {t('experience.education')}
                        </>
                      )}
                    </div>

                    <h3 className="text-white font-bold text-lg mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Building2 size={14} />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-300 group-hover:border-baby-blue/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {exp.type === 'work' && (
                      <motion.button
                        onClick={() => setShowGallery(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute bottom-5 right-5 w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <ArrowUpRight size={16} className="text-white" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
        </div>

        {/* PKL Photos Modal */}
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center p-4 pt-24"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-0 right-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:text-neon-pink transition-colors z-10"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mt-12">
                {pklPhotos.map((photo, index) => (
                  <div key={index} className="aspect-square bg-white/10 rounded-xl overflow-hidden max-w-[200px] mx-auto">
                    <img
                      src={photo}
                      alt={`PKL Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23333"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23666" font-size="12"%3EPhoto not found%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-baby-blue/10 via-white/5 to-neon-pink/10 border border-white/10 rounded-xl px-6 py-3">
            <span className="text-baby-blue text-xs">✦</span>
            <span className="text-white/70 text-xs">{t('experience.cta')}</span>
            <span className="text-neon-pink text-xs">✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
