# web-resume Development Guidelines

Last updated: 2026-02-21

## Active Technologies

- HTML5, CSS3, JavaScript (ES2015+) - Static site architecture
- PWA (Service Worker)

## Project Structure

```text
/ (Root)
├── css/ (Stylesheets)
├── js/ (Scripts)
├── resume/ (Resume page)
├── assets/ (Images and icons)
└── specs/ (Feature specifications)
```

## Maintenance

- Ensure all pages are listed in `sitemap.xml`, `llms.txt`, and `llms-full.txt`.
- Keep JSON-LD structured data in sync with content.
- Verify color contrast for accessibility (WCAG AA).
- Maintain service worker cache versioning.

## UI Principles

- Modern, professional, and accessible.
- Glassmorphism and subtle gradients.
- Bento-style layout for sections.
- Responsive across all devices.

## Agent Discoverability

- robots.txt: Standard and AI crawler instructions.
- sitemap.xml: All public pages and primary assets.
- llms.txt / llms-full.txt: Context for LLM-based assistants.
- resume.json: Machine-readable resume data (JSON Resume schema).
