# PPD Portfolio

A modern, full-stack portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring a beautiful Apple × Clay-inspired design system.

## 🚀 Project Overview

This portfolio showcases Personal Professional Development (PPD) journey with a clean, minimal design featuring glassmorphism effects, smooth animations, and a fully responsive layout.

## ✨ Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Latest version with custom design system
- **Glassmorphism UI** - Beautiful frosted glass effects
- **Dark Mode Ready** - CSS variables configured for dark theme
- **Fully Responsive** - Mobile-first design approach
- **SEO Optimized** - Metadata and semantic HTML

## 📁 Project Structure

```
src/
├── app/(site)/              # App routes with layout group
│   ├── layout.tsx          # Global layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── assignments/        # Assignment pages
│   │   ├── self-scan/
│   │   ├── pdp/
│   │   ├── midterm-pdp/
│   │   ├── critical-incidents/
│   │   ├── ai-usage/
│   │   └── personal-branding/
│   ├── logbook/            # Weekly logbook
│   │   └── week/[id]/      # Dynamic week pages
│   ├── blog/               # Blog posts
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Layout components
│   │   ├── Header.tsx      # Navigation header with mobile menu
│   │   ├── Footer.tsx      # Site footer
│   │   ├── PageWrapper.tsx # Page container
│   │   └── Section.tsx     # Content sections
│   ├── ui/                 # Reusable UI components
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Tabs.tsx
│   │   └── Modal.tsx
│   └── media/              # Media components
│       ├── VideoPlayer.tsx
│       └── PdfViewer.tsx
├── data/                   # Data models and content
│   ├── assignments.ts
│   ├── logbook.ts
│   ├── brandingContent.ts
│   └── blog.ts
├── styles/                 # Global styles
│   ├── globals.css         # Main styles with design system
│   └── variables.css       # CSS custom properties
└── router/
    └── AppRouter.tsx       # Route definitions
```

## 🎨 Design System

The design system features:

- **Colors**: Custom accent colors (#345cff), glassmorphism backgrounds
- **Typography**: Inter font family with smooth rendering
- **Shadows**: Clay-inspired layered shadows
- **Animations**: Fade-in, slide-up, and glow effects
- **Glass Effects**: Backdrop blur with semi-transparent backgrounds

### Custom CSS Utilities

- `.glass-card` - Glassmorphism card effect
- `.smooth-transition` - Consistent transitions
- `.text-gradient` - Gradient text effects
- `.glow` / `.glow-subtle` - Glow effects
- `.focus-ring` - Accessible focus states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ppd-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` and set `NEXT_PUBLIC_BASE_URL` to your local or production URL.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # or your production URL
```

For production deployment, set this to your deployed domain (e.g., `https://your-portfolio.vercel.app`).

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment to Vercel

### Prerequisites
- Vercel account
- GitHub/GitLab/Bitbucket repository

### Steps

1. **Push your code to a Git repository**

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Configure project:
     - **Framework Preset**: Next.js
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`

3. **Add Environment Variables**:
   - In Vercel project settings → Environment Variables
   - Add: `NEXT_PUBLIC_BASE_URL` = `https://your-deployed-domain.vercel.app`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Post-Deployment

- Test all routes and API endpoints
- Verify contact form submission logging
- Check PDF download tracking
- Validate SEO metadata (Open Graph preview)

## 🛣️ Routes

### Pages
- `/` - Homepage with hero and CTAs
- `/about` - About page with profile and narrative
- `/contact` - Contact form with CV preview
- `/assignments` - Assignments overview grid
- `/logbook` - Timeline of 20 weeks
- `/blog/from-lost-to-less-lost` - Blog post with pull quotes
- `/404` - Custom not found page

### Assignment Pages
- `/assignments/self-scan` - Self-scan with STARR framework
- `/assignments/pdp` - Personal Development Plan
- `/assignments/midterm-pdp` - Midterm PDP Review
- `/assignments/critical-incidents` - 3 critical incidents with theory
- `/assignments/ai-usage` - Responsible AI usage (3 tabs)
- `/assignments/personal-branding` - Personal branding with blog preview

### Dynamic Routes
- `/logbook/week/[id]` - Week detail pages (1-20)

### API Routes
- `POST /api/contact` - Contact form submission with validation
- `POST /api/download` - File download tracking

## 🔧 Tech Stack

- **Framework**: Next.js 16.0.6 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (PostCSS)
- **Font**: Inter (Google Fonts)
- **Linting**: ESLint
- **Deployment**: Vercel (recommended)

## 🎯 API Routes

### Contact Form (`/api/contact`)

**Method**: POST

**Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to get in touch..."
}
```

**Validation**:
- Name: 2-100 characters
- Email: Valid email format
- Message: 10-2000 characters

**Response**:
```json
{
  "success": true,
  "message": "Message received. Thank you!"
}
```

### Download Tracking (`/api/download`)

**Method**: POST

**Body**:
```json
{
  "file": "/cv.pdf"
}
```

**Response**:
```json
{
  "success": true
}
```

## 📦 Features Complete

- ✅ Full Next.js 16 setup with App Router and Turbopack
- ✅ Complete folder structure with all pages
- ✅ Global layout with Header and Footer
- ✅ Glassmorphism design system with custom utilities
- ✅ All assignment pages with STARR content
- ✅ Logbook timeline with 20 weeks
- ✅ Dynamic week detail pages
- ✅ Blog post with pull quotes
- ✅ About page with profile
- ✅ Contact page with form backend
- ✅ API routes for contact and downloads
- ✅ PDF viewer with download tracking
- ✅ Video player component
- ✅ Custom 404 page
- ✅ SEO metadata with Open Graph
- ✅ Accessibility (ARIA labels, semantic HTML)
- ✅ Production build verified
- ✅ Ready for Vercel deployment

## 📄 License

This project is part of a Personal Professional Development portfolio.

---

Built with ❤️ using Next.js 16 and Tailwind CSS v4
