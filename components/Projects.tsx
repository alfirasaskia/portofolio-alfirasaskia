'use client'

import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Star, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({})
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null)

  const filters = ['All', 'Full Stack']

  const projects = [
    {
      title: 'Digital Archive Information System',
      description:
        'A live digital archive system for Bapperida Kota Bogor. Manages document archiving, automatic retention, and structured document disposal.',
      category: 'Full Stack',
      year: '2026',
      color: 'from-neon-pink to-rose-500',
      tags: ['Laravel', 'Tailwind CSS', 'PHP', 'MySQL'],
      icon: ExternalLink,
      featured: true,
      images: [
        '/images/Screenshot (2144).png',
        '/images/Screenshot (2150).png',
      ],
      liveUrl: 'https://sikearsipan.emdns.biz.id/',
    },
    {
      title: 'Bogor Innovation Award',
      description:
        'UI redesign and feature development for the Bogor Innovation Award website.',
      category: 'Full Stack',
      year: '2025',
      color: 'from-baby-blue to-sky-500',
      tags: ['Laravel', 'Tailwind CSS', 'PHP', 'MySQL'],
      icon: Github,
      featured: true,
      images: [
        '/images/Screenshot (2145).png',
        '/images/Screenshot (2146).png',
      ],
    },
    {
      title: 'SMK Gallery',
      description:
        'A school gallery website to showcase activities, achievements, and documentation.',
      category: 'Full Stack',
      year: '2025',
      color: 'from-[#ff4fa3] to-[#ff4fa3]',
      tags: ['Laravel', 'Tailwind CSS', 'PHP', 'MySQL'],
      icon: ExternalLink,
      featured: true,
      images: [
        '/images/Screenshot (2141).png',
        '/images/Screenshot (2143).png',
      ],
    },
    {
      title: 'Student Attendance System',
      description:
        'A web-based attendance management app for recording and reporting student presence efficiently.',
      category: 'Full Stack',
      year: '2024',
      color: 'from-neon-pink to-rose-500',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      icon: Github,
      featured: false,
      images: [
        '/images/Screenshot (2149).png',
        '/images/Screenshot (2151).png',
      ],
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing projects, skills, and experience.',
      category: 'Full Stack',
      year: '2024',
      color: 'from-baby-blue to-sky-500',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      icon: ExternalLink,
      featured: false,
      images: [
        '/images/Screenshot (2152).png',
        '/images/Screenshot (2153).png',
      ],
    },
  ]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

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
              Selected Works
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              My <span className="text-baby-blue">Projects</span>
            </h2>

            <p className="text-base text-gray-400">
              Work that speaks for itself.
            </p>
          </div>

          {/* Filter */}
          <div className="flex gap-3 md:mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-pink-500 text-black'
                    : 'border border-white/10 text-gray-300'
                }`}
              >
                {filter}
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
              className="relative max-w-5xl w-full"
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
                className="w-full rounded-lg"
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