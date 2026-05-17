'use client'

import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Star, Sparkles } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({})
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null)

  const filters = ['All', 'Full Stack']

  const projects = [
    {
      title: 'Digital Archive Information System',
      description: 'A live digital archive system for Bapperida Kota Bogor. Manages document archiving, automatic retention, and structured document disposal.',
      category: 'Full Stack',
      year: '2026',
      color: 'from-neon-pink to-rose-500',
      tags: ['Laravel', 'Tailwind CSS', 'PHP', 'MySQL'],
      icon: ExternalLink,
      featured: true,
      images: ['/images/Screenshot (2144).png', '/images/Screenshot (2150).png'],
      liveUrl: 'https://sikearsipan.emdns.biz.id/',
    },
    {
      title: 'Bogor Innovation Award',
      description: 'UI redesign and feature development for the Bogor Innovation Award website (Bapperida Kota Bogor). Built during internship and presented to supervisor.',
      category: 'Full Stack',
      year: '2025',
      color: 'from-baby-blue to-sky-500',
      tags: ['Laravel', 'Tailwind CSS', 'PHP', 'MySQL'],
      icon: Github,
      featured: true,
      images: ['/images/Screenshot (2145).png', '/images/Screenshot (2146).png'],
    },
    {
      title: 'SMK Gallery',
      description: 'A school gallery website to showcase activities, achievements, and documentation of SMK Negeri 4 Kota Bogor.',
      category: 'Full Stack',
      year: '2025',
      color: 'from-[#ff4fa3] to-[#ff4fa3]',
      tags: ['Laravel', 'Tailwind CSS', 'PHP', 'MySQL'],
      icon: ExternalLink,
      featured: true,
      images: ['/images/Screenshot (2141).png', '/images/Screenshot (2143).png'],
    },
    {
      title: 'Student Attendance System',
      description: 'A web-based attendance management app for recording and reporting student presence efficiently.',
      category: 'Full Stack',
      year: '2024',
      color: 'from-neon-pink to-rose-500',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      icon: Github,
      featured: false,
      images: ['/images/Screenshot (2149).png', '/Screenshot (2151).png'],
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and experience with modern design and animations.',
      category: 'Full Stack',
      year: '2024',
      color: 'from-baby-blue to-sky-500',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      icon: ExternalLink,
      featured: false,
      images: ['/images/Screenshot (2152).png', '/images/Screenshot (2153).png'],
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Vertical Lines on Left Side */}
        <div className="absolute top-20 left-8 h-32 w-px bg-gradient-to-b from-transparent via-baby-blue/40 to-transparent" />
        <div className="absolute top-1/3 left-12 h-40 w-px bg-gradient-to-b from-transparent via-neon-pink/40 to-transparent" />
        <div className="absolute bottom-20 left-8 h-32 w-px bg-gradient-to-b from-transparent via-soft-purple/40 to-transparent" />
        
        {/* Grid Dot Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating Blur Orbs */}
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-baby-blue/10 to-transparent blur-3xl rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-56 h-56 bg-gradient-to-br from-neon-pink/10 to-transparent blur-3xl rounded-full"
        />
        
        {/* Additional Decorative Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
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
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#7DD3FC' : '#F0097A'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern Heading with Filter Buttons on Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass backdrop-blur-xl text-baby-blue text-sm font-bold border border-baby-blue/30 mb-6">
              <Sparkles size={16} />
              Selected Works
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              My <span className="text-baby-blue">Projects</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl">
              Work that speaks for itself.
            </p>
          </div>

          {/* Compact Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 md:mt-8"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-neon-pink text-black shadow-[0_0_25px_rgba(255,79,163,0.5)]'
                    : 'glass backdrop-blur-xl text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-full bg-black border border-white/10 rounded-2xl overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Year Badge Above Image */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1.5 rounded-xl glass backdrop-blur-xl bg-white/10 border border-white/20 text-xs font-bold text-gray-300">
                    {project.year}
                  </div>
                </div>

                {/* Project Image(s) */}
                {project.images && project.images.length > 0 ? (
                  <div className="relative rounded-t-2xl overflow-hidden">
                    <motion.div
                      className="relative h-64 overflow-hidden cursor-pointer"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }: PanInfo) => {
                        const currentIndex = carouselIndexes[project.title] || 0
                        if (offset.x < -50 || velocity.x < -500) {
                          // Swipe left - go to next
                          setCarouselIndexes(prev => ({
                            ...prev,
                            [project.title]: Math.min(project.images.length - 1, currentIndex + 1)
                          }))
                        } else if (offset.x > 50 || velocity.x > 500) {
                          // Swipe right - go to previous
                          setCarouselIndexes(prev => ({
                            ...prev,
                            [project.title]: Math.max(0, currentIndex - 1)
                          }))
                        }
                      }}
                    >
                      {project.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${project.title} ${idx + 1}`}
                          className={`w-full h-64 object-contain absolute top-0 left-0 transition-opacity duration-300 ${
                            idx === (carouselIndexes[project.title] || 0) ? 'opacity-100' : 'opacity-0'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImage(img)
                            setCurrentImageIndex(idx)
                            setLightboxImages(project.images || null)
                          }}
                        />
                      ))}
                      {/* Carousel Indicators */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {project.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1 h-1 rounded-full cursor-pointer ${
                              idx === (carouselIndexes[project.title] || 0) ? 'bg-white' : 'bg-white/50'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation()
                              setCarouselIndexes(prev => ({ ...prev, [project.title]: idx }))
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : project.image ? (
                  <div className="relative rounded-t-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-contain cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(project.image)
                      }}
                    />
                  </div>
                ) : (
                  <div className={`relative bg-gradient-to-br ${project.color} h-64 rounded-t-2xl`} />
                )}

                {/* Separator Line */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Content */}
                <div className="relative z-10 px-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-white group-hover:text-baby-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (project.liveUrl) {
                          window.open(project.liveUrl, '_blank')
                        } else {
                          setSelectedProject(project)
                        }
                      }}
                      className="w-8 h-8 rounded-xl glass backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      <ArrowUpRight size={16} className="text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Featured Indicator */}
                {project.featured && (
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-2 right-2"
                  >
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black rounded-2xl p-8 max-w-2xl w-full border border-white/10 relative"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-black text-white">{selectedProject.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm">{selectedProject.year}</span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full glass backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl glass backdrop-blur-xl bg-white/5 border border-white/10 text-sm font-bold text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedImage(null)
              setCurrentImageIndex(0)
              setLightboxImages(null)
            }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => {
                  setSelectedImage(null)
                  setCurrentImageIndex(0)
                }}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Full size view"
                className="w-full h-auto rounded-lg"
              />
              {/* Lightbox Navigation */}
              {lightboxImages && lightboxImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      const newIndex = Math.max(0, currentImageIndex - 1)
                      setCurrentImageIndex(newIndex)
                      setSelectedImage(lightboxImages[newIndex])
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      const newIndex = Math.min(lightboxImages.length - 1, currentImageIndex + 1)
                      setCurrentImageIndex(newIndex)
                      setSelectedImage(lightboxImages[newIndex])
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    →
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {lightboxImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full cursor-pointer ${
                          idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(idx)
                          setSelectedImage(lightboxImages[idx])
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
