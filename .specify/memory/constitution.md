<!-- Sync Impact Report:
- Version change: N/A (template) -> 1.0.0
- Modified principles: template placeholders -> Content Source of Truth; SEO & Agentic Discoverability; Readability & Accessibility; Performance & Static Reliability; Link Integrity & Change Safety
- Added sections: Operational Standards; Development Workflow
- Removed sections: None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
  - ⚠ .specify/templates/commands/ (missing directory; no files to update)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): original ratification date unknown
-->
# web-resume Constitution

## Core Principles

### I. Content Source of Truth
Resume content MUST remain consistent between `resume/index.html` and
`resume/resume.json`. If one changes, the other MUST be updated in the same
change set, and any JSON-LD structured data MUST match the canonical content.
Rationale: prevents drift between human-visible content and machine-readable
profiles.

### II. SEO & Agentic Discoverability
All public pages MUST use semantic HTML, canonical links, and accurate metadata.
When adding, removing, or moving pages, update `sitemap.xml`, `robots.txt`,
`llms.txt`, and `llms-full.txt` in the same change. Structured data for the
person/resume MUST validate and remain accurate. Rationale: ensures reliable
indexing by search engines and agentic tools.

### III. Readability & Accessibility for Text-Heavy UI
Content presentation MUST prioritize long-form readability and WCAG AA
accessibility: base font size >= 16px, line length ~60-90 characters, clear
heading hierarchy, visible focus states, sufficient contrast, and meaningful alt
text for non-text content. Rationale: text-heavy pages succeed only when they are
comfortable to read and accessible.

### IV. Performance & Static Reliability
Core content MUST render without JavaScript and without client-side frameworks.
Keep CSS/JS minimal and optimized, and maintain Lighthouse performance scores >=
90 for `index.html` and `resume/index.html`. Rationale: fast static delivery
improves SEO, accessibility, and reliability.

### V. Link Integrity & Change Safety
Changes MUST NOT introduce broken internal links, anchors, or canonical URLs.
Any URL change MUST include redirects or 404 updates and a sitemap refresh.
Rationale: broken links degrade trust and search visibility.

## Operational Standards

- Every new page includes JSON-LD (when relevant), canonical URL, and metadata
  aligned with the content source of truth.
- `llms.txt` and `llms-full.txt` list new pages or resources intended for agentic
  discovery.
- Print and resume views remain visually consistent with the primary reading
  experience and do not omit required content.

## Development Workflow

- For any content change, review `index.html` and `resume/index.html` in a
  browser to confirm layout and readability.
- Validate internal links and anchors after structural changes.
- Run an accessibility pass (contrast, headings, focus) on text-heavy pages.
- Update all discovery artifacts (`sitemap.xml`, `robots.txt`, `llms.txt`,
  `llms-full.txt`) as part of the same change when URLs or content coverage
  change.

## Governance

- This constitution supersedes all other project guidance.
- Amendments require a documented rationale, a semantic version bump, and
  explicit review approval by the project owner.
- Versioning policy: MAJOR for removals or redefinitions, MINOR for new
  principles or material expansions, PATCH for clarifications or typos.
- Compliance review is required in specs, plans, tasks, and code reviews to
  verify adherence to SEO/discoverability, accessibility, performance, and source
  of truth rules.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date unknown | **Last Amended**: 2026-02-09
