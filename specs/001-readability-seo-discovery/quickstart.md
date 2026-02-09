# Quickstart: Readability, SEO, Discovery

## Preview

1. Run a static server from the repo root, for example:
   `python3 -m http.server`
2. Open:
   - `/index.html`
   - `/resume/index.html`
   - `/404.html`
3. Verify readability across mobile, tablet, and desktop viewports.

## Checks

### Readability

- Headings form a clear hierarchy (H1 → H2 → H3).
- Paragraph line length stays between ~60-90 characters on desktop.
- Text remains comfortable on mobile without zooming.

### Accessibility

- Focus states are clearly visible for all interactive elements.
- Keyboard navigation reaches all links and buttons in order.
- Contrast meets WCAG AA for text-heavy content.

### SEO & Discovery

- Canonical URLs and metadata are correct on all pages.
- `sitemap.xml`, `robots.txt`, `llms.txt`, and `llms-full.txt` list all public pages.
- JSON-LD matches visible content on index and resume pages.

### Resilience

- Core content remains readable with JavaScript disabled.
