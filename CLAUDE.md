# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` - Launches Vite dev server with hot reload
- **Build for production**: `npm run build` - TypeScript compilation followed by Vite build
- **Lint code**: `npm run lint` - Runs ESLint on the entire codebase
- **Preview production build**: `npm run preview` - Serves the production build locally

## Architecture Overview

This is a personal portfolio website built with React + TypeScript + Vite, using modern frontend technologies:

### Tech Stack
- **Frontend**: React 19 with TypeScript
- **Routing**: React Router DOM v7 for client-side navigation
- **Styling**: Tailwind CSS v4 with custom CSS classes
- **Animation**: Framer Motion for smooth transitions
- **Icons**: React Icons (Font Awesome icons)
- **Build Tool**: Vite with React plugin
- **Fonts**: DM Sans and Fira Code via Fontsource

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation with mobile responsive menu
│   ├── Footer.tsx      # Site footer
│   ├── ProjectCard.tsx # Portfolio project display component
│   └── BlogPostPreview.tsx # Blog post preview component
├── pages/              # Route-based page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── About.tsx       # About page
│   ├── Portfolio.tsx   # Projects showcase
│   ├── Blog.tsx        # Blog listing
│   └── Resume.tsx      # Resume display/download
├── App.tsx             # Main app with routing configuration
└── main.tsx            # React entry point
```

### Key Design Patterns
- Uses React Router's `BrowserRouter` for SPA navigation
- Responsive design with Tailwind's mobile-first approach
- Custom CSS classes for animations (`.css-typing`, `.text-link`, `.color-primary`)
- Consistent layout structure with Navbar, main content area, and Footer
- Static assets stored in `public/` directory including resume PDF and images

### Development Notes
- TypeScript configuration uses project references (`tsconfig.app.json`, `tsconfig.node.json`)
- ESLint configured with React-specific rules and TypeScript support
- No testing framework currently configured
- Images stored in `public/images/` directory
- Resume PDF available at `public/resume.pdf`

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom CSS classes defined in `src/index.css` and `src/App.css`
- Responsive navigation with hamburger menu for mobile devices
- Custom color scheme and typography using CSS custom properties