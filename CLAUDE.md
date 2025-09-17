the primary goal of this project is to create a beautiful and modern landing page. 

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Renaissance-themed marketing website built with:
- **Vite** - Build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Styling framework
- **React Router** - Client-side routing
- **Tanstack Query** - Server state management

## Commands

```bash
# Development server (port 8080)
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Routing Structure
- Single-page application with React Router
- Main entry: `src/App.tsx` - Sets up providers (QueryClient, Tooltip, Toast, Router)
- Routes defined in App.tsx with catch-all for 404
- Primary route `/` renders `src/pages/Index.tsx`

### Component Organization
- **Pages**: `src/pages/` - Route-level components
- **Components**: `src/components/` - Reusable UI components
  - Section components: HeroSection, AboutSection, ServicesSection, ContactSection
  - Layout components: Navigation, Footer
  - UI primitives: `src/components/ui/` - shadcn components (Button, Card, Dialog, etc.)
- **Utilities**: `src/lib/utils.ts` - Contains `cn()` function for className merging
- **Hooks**: `src/hooks/` - Custom React hooks

### Styling System
- Tailwind CSS with custom theme configuration
- CSS variables defined in `src/index.css` for theming
- Custom fonts: Inter (sans), Playfair Display (display)
- Custom animations: fade-up, scale-in, float, pulse-glow
- Path aliases: `@/` maps to `./src/`

### Build Configuration
- Vite config uses SWC for React transformation
- TypeScript configured with relaxed settings (no implicit any, unused params allowed)
- Development mode includes Lovable component tagging
- Server configured to listen on all interfaces (::) on port 8080

## Development Notes
- Uses modular component architecture with separate files for each major section
- All components use TypeScript with explicit exports
- UI components from shadcn are pre-configured in `src/components/ui/`
- Toast notifications available via both Toaster and Sonner