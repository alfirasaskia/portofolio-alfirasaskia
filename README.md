# Modern Premium Portfolio Website

A stunning, modern portfolio website built with Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, and AOS animations.

## 🚀 Features

- **Modern Dark Mode Design** - Beautiful dark aesthetic with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion and AOS
- **Responsive Design** - Fully responsive on mobile and desktop
- **Interactive Components** - Hover effects, typing animation, smooth scrolling
- **Professional Sections**:
  - Hero section with typing animation
  - About section with stats
  - Skills section with progress bars
  - Projects showcase with cards
  - Experience timeline
  - Contact form
  - Modern footer with scroll-to-top

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, AOS
- **Icons**: Lucide React
- **Font**: Poppins (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx          # Navigation with blur effect
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Projects.tsx        # Project showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with scroll-to-top
│   └── LoadingScreen.tsx  # Loading animation
├── public/
│   └── images/             # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 📦 Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Personal Information

Edit the following files to customize your portfolio:

- **Hero.tsx** - Update name, typing phrases, and description
- **About.tsx** - Update bio, stats, and features
- **Skills.tsx** - Update skill categories and levels
- **Projects.tsx** - Add your projects with images and links
- **Experience.tsx** - Add your work experience and education
- **Contact.tsx** - Update contact information and social links
- **Footer.tsx** - Update social links and copyright

### Customize Colors

Edit `tailwind.config.ts` to customize the color scheme and animations.

### Add Images

Place your images in the `public/images/` directory and reference them in your components.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform that supports Next.js

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Implemented

### Glassmorphism Effects
- `.glass` - Basic glass effect with blur
- `.glass-card` - Enhanced glass effect for cards

### Animations
- `gradient` - Animated gradient background
- `float` - Floating animation
- `pulse-glow` - Pulsing glow effect
- Typing animation in Hero section
- Scroll-triggered animations with AOS
- Framer Motion animations throughout

### Interactive Elements
- Hover effects with glow and scale
- Smooth scrolling navigation
- Active section highlighting in navbar
- Mobile responsive menu
- Scroll-to-top button
- Form validation

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop screens (1024px+)
- Large screens (1280px+)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📧 Contact

For questions or support, please reach out through the contact form on the portfolio or via email.

---

Built with ❤️ using Next.js and modern web technologies
