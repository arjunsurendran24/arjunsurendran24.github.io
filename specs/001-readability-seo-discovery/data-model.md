# Data Model: Readability, SEO, Discovery

## Entities

### Page
- **Fields**: title, headings, body content, metadata, canonical URL
- **Relationships**: Each Page may reference navigation and shared metadata

### Resume
- **Fields**: sections, roles, dates, highlights, skills
- **Source of truth**: `resume/resume.json` and `resume/index.html` must remain
  synchronized, including JSON-LD representations.

## Validation Rules

- Canonical URL must be present for each page.
- Metadata must match visible content and structured data.
- Navigation links must point to valid internal anchors or pages.
