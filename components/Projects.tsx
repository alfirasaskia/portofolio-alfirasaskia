'use client'

import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Star, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({})
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null)

  const filters = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'fullstack', label: t('projects.filter.fullstack') },
  ]

  const projects = [
    {
      title: t('projects.archive.title'),
      description: t('projects.archive.description'),
      category: 'Full Stack',
      year: '2026',
      color: 'from-neon-pink to-rose-500',
      tags: [t('projects.archive.tag1'), t('projects.archive.tag2'), t('projects.archive.tag3'), t('projects.archive.tag4')],
      icon: ExternalLink,
      featured: true,
      images: [
        '/images/Screenshot (2144).png',
        '/images/Screenshot (2150).png',
      ],
      liveUrl: 'https://sikearsipan.emdns.biz.id/',
    },
    {
      title: t('projects.award.title'),
      description: t('projects.award.description'),
      category: 'Full Stack',
      year: '2025',
      color: 'from-baby-blue to-sky-500',
      tags: [t('projects.award.tag1'), t('projects.award.tag2'), t('projects.award.tag3'), t('projects.award.tag4')],
      icon: Github,
      featured: true,
      images: [
        '/images/Screenshot (2145).png',
        '/images/Screenshot (2146).png',
      ],
    },
    {
      title: t('projects.gallery.title'),
      description: t('projects.gallery.description'),
      category: 'Full Stack',
      year: '2025',
      color: 'from-[#ff4fa3] to-[#ff4fa3]',
      tags: [t('projects.gallery.tag1'), t('projects.gallery.tag2'), t('projects.gallery.tag3'), t('projects.gallery.tag4')],
      icon: ExternalLink,
      featured: true,
      images: [
        '/images/Screenshot (2141).png',
        '/images/Screenshot (2143).png',
      ],
    },
    {
      title: t('projects.attendance.title'),
      description: t('projects.attendance.description'),
      category: 'Full Stack',
      year: '2024',
      color: 'from-neon-pink to-rose-500',
      tags: [t('projects.attendance.tag1'), t('projects.attendance.tag2'), t('projects.attendance.tag3'), t('projects.attendance.tag4')],
      icon: Github,
      featured: false,
      images: [
        '/images/Screenshot (2149).png',
        '/images/Screenshot (2151).png',
      ],
    },
    {
      title: t('projects.business.title'),
      description: t('projects.business.description'),
      category: 'Full Stack',
      year: '2025',
      color: 'from-neon-pink to-rose-500',
      tags: [t('projects.business.tag1'), t('projects.business.tag2'), t('projects.business.tag3'), t('projects.business.tag4')],
      icon: ExternalLink,
      featured: false,
      images: [
        '/images/iPhone-11-PRO-MAX-www.instagram.com (1).png',
        '/images/WhatsApp Image 2026-05-20 at 20.46.34.jpeg',
      ],
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === 'Full Stack')

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-baby-blue/30 text-baby-blue text-sm font-bold mb-6">
              <Sparkles size={16} />
              {t('projects.badge')}
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white" dangerouslySetInnerHTML={{ __html: t('projects.title') }}>
            </h2>

            <p className="text-base text-gray-400">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Filter */}
          <div className="flex gap-3 md:mt-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                  activeFilter === filter.key
                    ? 'bg-pink-500 text-black'
                    : 'border border-white/10 text-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-pointer"
            >
              <div className="relative h-full bg-black border border-white/10 rounded-2xl overflow-hidden">
                {/* Year */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 rounded-xl bg-white/10 text-xs text-white">
                    {project.year}
                  </div>
                </div>

                {/* Images */}
                {project.images && project.images.length > 0 ? (
                  <div className="relative rounded-t-2xl overflow-hidden">
                    <motion.div
                      className="relative h-64 overflow-hidden"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }: PanInfo) => {
                        const currentIndex =
                          carouselIndexes[project.title] || 0

                        if (offset.x < -50 || velocity.x < -500) {
                          setCarouselIndexes((prev) => ({
                            ...prev,
                            [project.title]: Math.min(
                              project.images.length - 1,
                              currentIndex + 1
                            ),
                          }))
                        } else if (offset.x > 50 || velocity.x > 500) {
                          setCarouselIndexes((prev) => ({
                            ...prev,
                            [project.title]: Math.max(
                              0,
                              currentIndex - 1
                            ),
                          }))
                        }
                      }}
                    >
                      {project.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={project.title}
                          className={`w-full h-64 object-contain absolute top-0 left-0 transition-opacity duration-300 ${
                            idx ===
                            (carouselIndexes[project.title] || 0)
                              ? 'opacity-100'
                              : 'opacity-0'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImage(img)
                            setCurrentImageIndex(idx)
                            setLightboxImages(project.images)
                          }}
                        />
                      ))}

                      {/* Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, idx) => (
                          <div
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation()
                              setCarouselIndexes((prev) => ({
                                ...prev,
                                [project.title]: idx,
                              }))
                            }}
                            className={`w-2 h-2 rounded-full cursor-pointer ${
                              idx ===
                              (carouselIndexes[project.title] || 0)
                                ? 'bg-white'
                                : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div
                    className={`h-64 bg-gradient-to-br ${project.color}`}
                  />
                )}

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-white">
                      {project.title}
                    </h3>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()

                        if (project.liveUrl) {
                          window.open(project.liveUrl, '_blank')
                        }
                      }}
                      className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"
                    >
                      <ArrowUpRight
                        size={16}
                        className="text-white"
                      />
                    </button>
                  </div>
                </div>

                {/* Featured */}
                {project.featured && (
                  <div className="absolute top-2 left-2">
                    <Star
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black rounded-2xl p-8 max-w-2xl w-full border border-white/10"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-black text-white">
                  {selectedProject.title}
                </h3>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-white/10 text-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
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
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xs w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white"
              >
                ✕
              </button>

              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto max-h-[200px] object-contain rounded-lg"
              />

              {lightboxImages && lightboxImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()

                      const newIndex = Math.max(
                        0,
                        currentImageIndex - 1
                      )

                      setCurrentImageIndex(newIndex)
                      setSelectedImage(lightboxImages[newIndex])
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl"
                  >
                    ←
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()

                      const newIndex = Math.min(
                        lightboxImages.length - 1,
                        currentImageIndex + 1
                      )

                      setCurrentImageIndex(newIndex)
                      setSelectedImage(lightboxImages[newIndex])
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl"
                  >
                    →
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}