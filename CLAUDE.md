# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **pnpm install** - Install dependencies
- **pnpm run build** - Build static site for production
- **pnpm run lint** - Run ESLint with auto-fix

## Architecture Overview

This is a Next.js 15 static site with crypto trading theme. The app uses modern React patterns with HeroUI component library.

### Key Files & Structure

- **`app/layout.tsx`** - Root layout with theme configuration and metadata
- **`app/page.tsx`** - Simple hero-only landing page with background image
- **`config/`** - Font configurations and site metadata
- **`components/`** - Reusable UI components (navbar, theme switch, icons)
- **`styles/`** - Global styles and font files
- **`public/`** - Static assets (background.webp, logo.webp)

### Styling System

- **TailwindCSS 4** with HeroUI theme plugin
- **Font configuration**: Inter (Google) + Orbitron (local crypto font)
- **Dark/Light theme** support via `next-themes`
- **CSS-in-JS** with Tailwind utility classes

### Build Configuration

- **Static export** with `output: 'export'` in `next.config.js`
- **Unoptimized images** for static site compatibility
- **Turbopack** for faster development
- **ESLint** with extensive TypeScript and React rules

### Component Patterns

- **HeroUI components** for consistent design system
- **TypeScript strict mode** with full type safety
- **clsx** for conditional className utilities
- **NextLink** for client-side navigation

### Key Dependencies

- **Next.js 15** - React framework
- **HeroUI** - UI component library
- **Framer Motion** - Animation library
- **Next Themes** - Dark mode support
- **TailwindCSS 4** - Utility-first CSS

### Static Deployment

- Built for **GitHub Pages** deployment
- Output goes to `/out` directory
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Automatic deployment on push to main/master branches