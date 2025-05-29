# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a static website portfolio/resume for Arjun Surendran hosted on GitHub Pages. The site consists of:

- **Main homepage** (`index.html`): Simple landing page with navigation to resume
- **Resume page** (`resume/index.html`): Detailed professional resume with structured data
- **Styling**: Separate CSS files for each page (`styles.css` and `resume/styles.css`)
- **Service Worker** (`sw.js`): Provides offline caching functionality
- **Assets**: Contains profile photo (`assets/images/photo.jpg`)

## Key Features

- **Modern Glassmorphism Design**: Both pages feature glassmorphism effects with backdrop filters and translucent cards
- **Dark/Light Theme Toggle**: Both pages include JavaScript for theme switching with localStorage persistence
- **SEO Optimized**: Resume page includes extensive structured data (JSON-LD), Open Graph tags, and semantic HTML
- **Progressive Web App**: Service worker caches resources for offline access
- **Responsive Design**: Mobile-friendly layouts using CSS Grid and Flexbox with modern animations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Animated Background**: Floating gradient orbs and subtle animations enhance visual appeal
- **Interactive Elements**: Hover effects, smooth transitions, and micro-animations throughout

## Content Structure

The resume page (`resume/index.html`) contains:
- Professional experience with structured data markup
- Skills organized by category (Programming Languages, ML Frameworks & Tools)
- Education section with schema.org markup
- FAQ section for SEO purposes
- Contact information with social links

## Styling Approach

- **Modern CSS Variables**: Comprehensive theming system with gradient backgrounds and glassmorphism effects
- **Dual Theme Support**: Enhanced light/dark themes using `[data-theme="dark"]` selectors with smooth transitions
- **Typography**: Montserrat (homepage), Poppins (resume) with improved font weights and sizing
- **Glassmorphism**: Backdrop filters, translucent cards, and layered visual depth
- **Timeline Design**: Experience section features an interactive timeline with hover animations
- **Gradient Accents**: Linear gradients for headers, buttons, and accent elements
- **Micro-interactions**: Hover states, transforms, and smooth transitions throughout
- **Responsive Grid**: CSS Grid and Flexbox for modern, adaptive layouts

## Development Notes

- No build process or package management - pure HTML/CSS/JS
- Static hosting optimized for GitHub Pages
- Service worker handles caching of fonts, stylesheets, and pages
- Canonical URLs point to `arjunsurendran24.github.io/web-resume/`