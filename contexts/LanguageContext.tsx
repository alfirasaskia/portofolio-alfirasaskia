'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.hireMe': 'Hire Me',
    
    // Hero
    'hero.badge': 'Available for work',
    'hero.greeting': "Hi, I'm",
    'hero.tagline': 'I believe great work is not only about getting tasks done — but about delivering them efficiently, neatly, and with real value.',
    'hero.viewWork': 'View My Work',
    'hero.letsTalk': "Let's Talk",
    'hero.projectsCompleted': '4 Projects Completed',
    'hero.internship': '4 Mo Internship Experience',
    'hero.creative': '✨ Creative',
    'hero.innovative': '🚀 Innovative',
    'hero.phrases.laravel': 'Laravel Developer',
    'hero.phrases.web': 'Web Developer',
    'hero.phrases.graduate': 'Fresh Graduate',
    'hero.phrases.collaborate': 'Open to Collaborate',
    
    // About
    'about.badge': 'Get to know me',
    'about.title': 'About <span style="color: #ff4fa3">Me</span>',
    'about.subtitle': 'Crafting digital experiences with passion and precision',
    'about.journey': 'My Journey',
    'about.bio1': "Hi! I'm Alfira Saskia Ramadani, a graduate of Software and Game Development (PPLG) from SMK Negeri 4 Kota Bogor with a strong interest in web development, administration, and data entry.",
    'about.bio2': 'I enjoy learning new things, working in teams, and constantly improving my skills while giving my best in every opportunity.',
    'about.bio3': 'I have internship experience at Bapperida Kota Bogor where I contributed to building the Digital Archive Information System and handled administrative tasks.',
    'about.bio4': 'I was also actively involved in ROHIS as a member of the Publication & Documentation Division for two years.',
    'about.bio5': 'I am currently open to work and looking for opportunities to contribute and grow in a professional environment.',
    'about.funFacts': 'Fun Facts',
    'about.fact1': 'Runs on matcha & good vibes',
    'about.fact2': 'Early bird — productive before sunrise',
    'about.fact3': 'Works best with music on repeat',
    'about.fact4': 'Always learning, never stopping',
    
    // Skills
    'skills.badge': 'My Skills',
    'skills.title': 'Technologies I Work With',
    'skills.subtitle': 'Built from curiosity, sharpened through experience',
    'skills.development': 'Development',
    'skills.design': 'Design & Content',
    'skills.tools': 'Tools & More',
    'skills.familiar': 'Also familiar with',
    
    // Projects
    'projects.badge': 'Selected Works',
    'projects.title': 'My <span style="color: #ff4fa3">Projects</span>',
    'projects.subtitle': 'Work that speaks for itself.',
    'projects.filter.all': 'All',
    'projects.filter.fullstack': 'Full Stack',
    'projects.archive.title': 'Digital Archive Information System',
    'projects.archive.description': 'A live digital archive system for Bapperida Kota Bogor. Manages document archiving, automatic retention, and structured document disposal.',
    'projects.archive.tag1': 'Laravel',
    'projects.archive.tag2': 'Tailwind CSS',
    'projects.archive.tag3': 'PHP',
    'projects.archive.tag4': 'MySQL',
    'projects.award.title': 'Bogor Innovation Award',
    'projects.award.description': 'UI redesign and feature development for the Bogor Innovation Award website.',
    'projects.award.tag1': 'Laravel',
    'projects.award.tag2': 'Tailwind CSS',
    'projects.award.tag3': 'PHP',
    'projects.award.tag4': 'MySQL',
    'projects.gallery.title': 'SMK Gallery',
    'projects.gallery.description': 'A school gallery website to showcase activities, achievements, and documentation.',
    'projects.gallery.tag1': 'Laravel',
    'projects.gallery.tag2': 'Tailwind CSS',
    'projects.gallery.tag3': 'PHP',
    'projects.gallery.tag4': 'MySQL',
    'projects.attendance.title': 'Student Attendance System',
    'projects.attendance.description': 'A web-based attendance management app for recording and reporting student presence efficiently.',
    'projects.attendance.tag1': 'PHP',
    'projects.attendance.tag2': 'MySQL',
    'projects.attendance.tag3': 'HTML',
    'projects.attendance.tag4': 'CSS',
    'projects.business.title': 'My Small Business — Loaf Bear',
    'projects.business.description': 'A small business focused on selling tote bags, beaded bracelets, and handmade accessories through Instagram and WhatsApp platforms.',
    'projects.business.tag1': 'Instagram',
    'projects.business.tag2': 'WhatsApp',
    'projects.business.tag3': 'Business',
    'projects.business.tag4': 'E-commerce',
    'projects.certificate.title': 'Digital Copywriting — DEA Komdigi (Digital Talent Scholarship)',
    'projects.certificate.description': 'Learned the fundamentals of digital copywriting, content creation, and effective marketing communication for digital platforms.',
    'projects.certificate.tag1': 'Copywriting',
    'projects.certificate.tag2': 'Digital Marketing',
    'projects.certificate.tag3': 'Certificate',
    
    // Experience
    'experience.badge': 'My Journey',
    'experience.title': 'My <span style="color: #ff4fa3">Experience</span>',
    'experience.subtitle': 'Learning, growing, and building along the way',
    'experience.internship': 'Internship',
    'experience.education': 'Education',
    'experience.cta': 'Eager to take on new challenges and opportunities',
    'experience.eduTitle': 'Software & Game Development (PPLG)',
    'experience.eduSchool': 'SMK Negeri 4 Kota Bogor',
    'experience.eduLocation': 'Bogor, Indonesia',
    'experience.eduPeriod': '2023 — 2026',
    'experience.eduDescription': 'Studied web development (Frontend & Backend), algorithms, and application development using modern technologies.',
    'experience.eduSkill1': 'HTML/CSS',
    'experience.eduSkill2': 'JavaScript',
    'experience.eduSkill3': 'PHP',
    'experience.eduSkill4': 'Laravel',
    'experience.workTitle': 'Intern — Research & Regional Innovation Division',
    'experience.workCompany': 'Bapperida Kota Bogor',
    'experience.workLocation': 'Bogor, Indonesia',
    'experience.workPeriod': 'Jan 2026 — Apr 2026',
    'experience.workDescription': 'Developed the Digital Archive Information System, managed administrative data, and coordinated with government teams.',
    'experience.workSkill1': 'Laravel',
    'experience.workSkill2': 'Tailwind',
    'experience.workSkill3': 'Administration',
    'experience.workSkill4': 'Data Entry',
    
    // Contact
    'contact.title': 'Get In <span style="color: #ff4fa3">Touch</span>',
    'contact.subtitle': "Let's build something great.",
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Location',
    'contact.name': 'Your Name',
    'contact.emailLabel': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    
    // Footer
    'footer.brand': 'AS.',
    'footer.description': 'Building exceptional digital experiences with modern technologies and creative solutions. Let\'s create something amazing together.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.connectText': 'Have a job opportunity or collaboration in mind? I\'d love to hear from you and make it happen.',
    'footer.madeWith': 'by',
    'footer.rights': 'All rights reserved',
    'footer.marquee': 'AVAILABLE FOR WORK ✦ OPEN TO COLLABORATE ✦ FRONTEND DEVELOPER ✦ UI/UX DESIGN ✦ CREATIVE WEBSITE ✦',
    
    // Loading
    'loading.text': 'Loading...',
  },
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.contact': 'Kontak',
    'nav.hireMe': 'Perekrutan',
    
    // Hero
    'hero.badge': 'Tersedia untuk bekerja',
    'hero.greeting': 'Hai, saya',
    'hero.tagline': 'Saya percaya kerja yang hebat bukan hanya tentang menyelesaikan tugas — tapi tentang menyelesaikannya dengan efisien, rapi, dan bernilai nyata.',
    'hero.viewWork': 'Lihat Karya Saya',
    'hero.letsTalk': 'Mari Berbicara',
    'hero.projectsCompleted': '4 Proyek Selesai',
    'hero.internship': '4 Bulan Pengalaman Magang',
    'hero.creative': '✨ Kreatif',
    'hero.innovative': '🚀 Inovatif',
    'hero.phrases.laravel': 'Laravel Developer',
    'hero.phrases.web': 'Web Developer',
    'hero.phrases.graduate': 'Fresh Graduate',
    'hero.phrases.collaborate': 'Terbuka untuk Kolaborasi',
    
    // About
    'about.badge': 'Kenali saya',
    'about.title': 'Tentang <span style="color: #ff4fa3">Saya</span>',
    'about.subtitle': 'Menciptakan pengalaman digital dengan passion dan presisi',
    'about.journey': 'Perjalanan Saya',
    'about.bio1': 'Hai! Saya Alfira Saskia Ramadani, lulusan Software and Game Development (PPLG) dari SMK Negeri 4 Kota Bogor dengan minat kuat di pengembangan web, administrasi, dan data entry.',
    'about.bio2': 'Saya menikmati belajar hal baru, bekerja dalam tim, dan terus meningkatkan keahlian sambil memberikan yang terbaik di setiap kesempatan.',
    'about.bio3': 'Saya memiliki pengalaman magang di Bapperida Kota Bogor di mana saya berkontribusi membangun Sistem Informasi Arsip Digital dan menangani tugas administratif.',
    'about.bio4': 'Saya juga aktif di ROHIS sebagai anggota Divisi Publikasi & Dokumentasi selama dua tahun.',
    'about.bio5': 'Saya saat ini terbuka untuk bekerja dan mencari kesempatan untuk berkontribusi dan berkembang di lingkungan profesional.',
    'about.funFacts': 'Fakta Menarik',
    'about.fact1': 'Berjalan dengan matcha & vibes positif',
    'about.fact2': 'Early bird — produktif sebelum matahari terbit',
    'about.fact3': 'Bekerja paling baik dengan musik on repeat',
    'about.fact4': 'Selalu belajar, tidak pernah berhenti',
    
    // Skills
    'skills.badge': 'Keahlian Saya',
    'skills.title': 'Teknologi yang Saya Gunakan',
    'skills.subtitle': 'Dibangun dari rasa ingin tahu, diasah melalui pengalaman',
    'skills.development': 'Pengembangan',
    'skills.design': 'Desain & Konten',
    'skills.tools': 'Alat & Lainnya',
    'skills.familiar': 'Juga familiar dengan',
    
    // Projects
    'projects.badge': 'Karya Terpilih',
    'projects.title': 'Proyek <span style="color: #ff4fa3">Saya</span>',
    'projects.subtitle': 'Karya yang berbicara sendiri.',
    'projects.filter.all': 'Semua',
    'projects.filter.fullstack': 'Full Stack',
    'projects.archive.title': 'Sistem Informasi Arsip Digital',
    'projects.archive.description': 'Sistem arsip digital aktif untuk Bapperida Kota Bogor. Mengelola pengarsipan dokumen, retensi otomatis, dan pembuangan dokumen terstruktur.',
    'projects.archive.tag1': 'Laravel',
    'projects.archive.tag2': 'Tailwind CSS',
    'projects.archive.tag3': 'PHP',
    'projects.archive.tag4': 'MySQL',
    'projects.award.title': 'Bogor Innovation Award',
    'projects.award.description': 'Redesain UI dan pengembangan fitur untuk website Bogor Innovation Award.',
    'projects.award.tag1': 'Laravel',
    'projects.award.tag2': 'Tailwind CSS',
    'projects.award.tag3': 'PHP',
    'projects.award.tag4': 'MySQL',
    'projects.gallery.title': 'Galeri SMK',
    'projects.gallery.description': 'Website galeri sekolah untuk menampilkan kegiatan, prestasi, dan dokumentasi.',
    'projects.gallery.tag1': 'Laravel',
    'projects.gallery.tag2': 'Tailwind CSS',
    'projects.gallery.tag3': 'PHP',
    'projects.gallery.tag4': 'MySQL',
    'projects.attendance.title': 'Sistem Absensi Siswa',
    'projects.attendance.description': 'Aplikasi manajemen absensi berbasis web untuk mencatat dan melaporkan kehadiran siswa secara efisien.',
    'projects.attendance.tag1': 'PHP',
    'projects.attendance.tag2': 'MySQL',
    'projects.attendance.tag3': 'HTML',
    'projects.attendance.tag4': 'CSS',
    'projects.business.title': 'Usaha Kecil Saya — Loaf Bear',
    'projects.business.description': 'Usaha kecil yang berfokus pada penjualan tote bag, gelang manik-manik, dan aksesoris buatan tangan melalui platform Instagram dan WhatsApp.',
    'projects.business.tag1': 'Instagram',
    'projects.business.tag2': 'WhatsApp',
    'projects.business.tag3': 'Bisnis',
    'projects.business.tag4': 'E-commerce',
    'projects.certificate.title': 'Digital Copywriting — DEA Komdigi (Digital Talent Scholarship)',
    'projects.certificate.description': 'Mempelajari dasar-dasar copywriting digital, teknik penulisan konten pemasaran, serta strategi komunikasi yang efektif untuk media digital.',
    'projects.certificate.tag1': 'Copywriting',
    'projects.certificate.tag2': 'Digital Marketing',
    'projects.certificate.tag3': 'Sertifikat',
    
    // Experience
    'experience.badge': 'Perjalanan Saya',
    'experience.title': 'Pengalaman <span style="color: #ff4fa3">Saya</span>',
    'experience.subtitle': 'Belajar, tumbuh, dan membangun di sepanjang jalan',
    'experience.internship': 'Magang',
    'experience.education': 'Pendidikan',
    'experience.cta': 'Bersemangat untuk mengambil tantangan dan kesempatan baru',
    'experience.eduTitle': 'Software & Game Development (PPLG)',
    'experience.eduSchool': 'SMK Negeri 4 Kota Bogor',
    'experience.eduLocation': 'Bogor, Indonesia',
    'experience.eduPeriod': '2023 — 2026',
    'experience.eduDescription': 'Mempelajari pengembangan web (Frontend & Backend), algoritma, dan pengembangan aplikasi menggunakan teknologi modern.',
    'experience.eduSkill1': 'HTML/CSS',
    'experience.eduSkill2': 'JavaScript',
    'experience.eduSkill3': 'PHP',
    'experience.eduSkill4': 'Laravel',
    'experience.workTitle': 'Magang — Divisi Riset & Inovasi Daerah',
    'experience.workCompany': 'Bapperida Kota Bogor',
    'experience.workLocation': 'Bogor, Indonesia',
    'experience.workPeriod': 'Jan 2026 — Apr 2026',
    'experience.workDescription': 'Mengembangkan Sistem Informasi Arsip Digital, mengelola data administratif, dan berkoordinasi dengan tim pemerintahan.',
    'experience.workSkill1': 'Laravel',
    'experience.workSkill2': 'Tailwind',
    'experience.workSkill3': 'Administrasi',
    'experience.workSkill4': 'Data Entry',
    
    // Contact
    'contact.title': 'Hubungi <span style="color: #ff4fa3">Saya</span>',
    'contact.subtitle': 'Mari bangun sesuatu yang hebat.',
    'contact.info': 'Informasi Kontak',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Lokasi',
    'contact.name': 'Nama Anda',
    'contact.emailLabel': 'Email Anda',
    'contact.message': 'Pesan Anda',
    'contact.send': 'Kirim Pesan',
    'contact.sending': 'Mengirim...',
    'contact.success': 'Pesan berhasil dikirim!',
    
    // Footer
    'footer.brand': 'AS.',
    'footer.description': 'Mari kita bangun sesuatu yang menakjubkan.',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.connect': 'Terhubung',
    'footer.connectText': 'Punya peluang kerja atau kolaborasi? Saya ingin mendengar dari Anda dan mewujudkannya.',
    'footer.madeWith': 'oleh',
    'footer.rights': 'Hak cipta dilindungi',
    'footer.marquee': 'TERSEDIA UNTUK BEKERJA ✦ TERBUKA UNTUK KOLABORASI ✦ FRONTEND DEVELOPER ✦ UI/UX DESIGN ✦ WEBSITE KREATIF ✦',
    
    // Loading
    'loading.text': 'Memuat...',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
