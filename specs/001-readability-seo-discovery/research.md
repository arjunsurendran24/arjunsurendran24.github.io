# Research: Readability, SEO, Discovery

## Decisions

### Static semantic HTML approach
- Decision: Maintain semantic HTML and CSS-only layout improvements.
- Rationale: Preserves SEO and fast rendering while meeting readability targets.
- Alternatives considered: Client-side rendering or heavy JS frameworks (rejected
  for SEO, performance, and reliability risks).

### Discovery artifact governance
- Decision: Treat `sitemap.xml`, `robots.txt`, `llms.txt`, and `llms-full.txt`
  as authoritative discovery artifacts and update them for any URL change.
- Rationale: Aligns with the constitution and ensures agentic discovery.
- Alternatives considered: Relying solely on implicit crawling.

### Readability constraints
- Decision: Use a clear type hierarchy, base font >= 16px, and line length
  between ~60-90 characters across viewports.
- Rationale: Improves comfort for long-form reading on all screen sizes.
- Alternatives considered: Dense layouts to maximize on-screen content.
