import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import 'aos/dist/aos.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio - Modern Developer',
  description: 'A modern premium portfolio website built with Next.js, React, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
