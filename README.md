# web-resume

Static portfolio and resume site for Arjun Surendran.

## Structure
- `/index.html`: homepage and profile overview.
- `/resume/index.html`: full resume page (content source of truth).
- `/404.html`: custom not-found page.
- `/css/custom.css`: shared design system and responsive styles.
- `/css/print.css`: print-only resume styles.
- `/js/theme-toggle.js`: theme persistence + service worker registration.
- `/resume/resume.json`: machine-readable resume data.
- `/llms.txt` and `/llms-full.txt`: LLM/agent discovery resources.

## SEO and Discoverability
- JSON-LD structured data on homepage and resume pages.
- `sitemap.xml`, `robots.txt`, and canonical links.
- PWA manifest and service worker for caching core resources.
- Readability and accessibility tuned for text-heavy content across screen sizes.

## Local Preview
Serve the directory with any static server (for example, `python3 -m http.server`).
