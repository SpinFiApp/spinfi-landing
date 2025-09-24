# SpinFi Landing Page

A modern landing page for SpinFi, a crypto trading platform built with Next.js, TailwindCSS, and HeroUI.

## Features

- 🚀 **Modern Design**: Clean, responsive landing page with crypto theme
- 🎨 **HeroUI Integration**: Professional UI components with dark theme support
- 🎯 **Orbitron Font**: Futuristic font perfect for crypto/tech branding
- 📱 **Responsive Design**: Works perfectly on all devices
- 🌌 **Background Support**: Full-screen background with overlay
- 🚀 **GitHub Pages Ready**: Static export optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 15 with static export
- **Styling**: TailwindCSS 4 with HeroUI theme
- **Components**: HeroUI component library
- **Fonts**: Orbitron (local) + Inter (Google)
- **Deployment**: GitHub Pages Actions

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start
```

## Deployment

This project is configured for static site deployment on GitHub Pages:

1. Push your code to a `main` or `master` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The site will be available at `https://your-username.github.io/your-repo`

### Manual Deployment

```bash
# Build the static site
pnpm run build

# The static files will be in the `/out` directory
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   ├── background.webp   # Background image
│   └── logo.webp        # Logo image
├── styles/              # Styles directory
│   └── Orbitron-VariableFont_wght.ttf
├── config/              # Configuration files
│   └── fonts.ts         # Font configurations
└── .github/             # GitHub Actions
    └── workflows/
        └── deploy.yml   # Deployment workflow
```

## Customization

### Branding

- Update the app name in `app/layout.tsx`
- Modify colors in `tailwind.config.js`
- Replace images in `public/` directory

### Content

- Edit `app/page.tsx` to modify the landing page content
- Update hero text, features, and branding messaging

### Fonts

- Font configurations are in `config/fonts.ts`
- Add new fonts by updating the font configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.
