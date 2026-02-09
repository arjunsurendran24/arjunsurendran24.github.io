# Implementation Plan: Readability, SEO, Discovery

**Branch**: `001-readability-seo-discovery` | **Date**: 2026-02-09 | **Spec**: /Users/arjunsurendran/code/web-resume/specs/001-readability-seo-discovery/spec.md
**Input**: Feature specification from `/specs/001-readability-seo-discovery/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command.

## Summary

Improve readability and SEO/discovery across all public pages by tightening
typography, navigation cues, and metadata/discovery artifacts while keeping the
site fully static and accessible on all screen sizes.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript (ES2015+)  
**Primary Dependencies**: None (static site assets only)  
**Storage**: Static files, including `resume/resume.json`  
**Testing**: Manual QA (visual review, accessibility checks, link validation)  
**Target Platform**: Modern desktop and mobile browsers  
**Project Type**: Web (static)  
**Performance Goals**: Above-the-fold content usable within 1 second; Lighthouse
>= 90 on core pages  
**Constraints**: No JS required for core content; WCAG AA; maintain SEO and
agentic discovery artifacts; preserve canonical URLs  
**Scale/Scope**: Small static site (index, resume, 404) with a few shared assets

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Content source of truth verified (`resume/index.html` and
      `resume/resume.json` in sync when applicable)
- [x] SEO & agentic discovery artifacts updated (canonical, metadata,
      `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`)
- [x] Readability & accessibility pass planned (WCAG AA, headings, focus, line
      length)
- [x] Performance/static guarantees maintained (core content without JS, minimal
      assets, Lighthouse >= 90)
- [x] Link integrity validated for any URL or anchor changes

## Project Structure

### Documentation (this feature)

```text
specs/001-readability-seo-discovery/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
index.html
404.html
resume/
└── index.html
resume/resume.json
css/
├── custom.css
└── print.css
js/
└── theme-toggle.js
assets/
llms.txt
llms-full.txt
robots.txt
sitemap.xml
manifest.json
styles.css
sw.js
```

**Structure Decision**: Static site with content and assets at repository root;
no backend or build system changes required.

## Phase 0: Research

- Decision: Keep static, semantic HTML with CSS-only layout updates.
  Rationale: Preserves performance and SEO while meeting readability goals.
  Alternatives considered: Client-side rendering or complex theming (rejected for
  SEO and reliability).

- Decision: Use explicit discovery artifacts (`sitemap.xml`, `robots.txt`,
  `llms.txt`, `llms-full.txt`) as the authoritative index list.
  Rationale: Aligns with constitution and agentic discovery requirements.
  Alternatives considered: Relying solely on implicit crawling.

- Decision: Standardize readability targets (line length ~60-90 chars, base font
  >= 16px, consistent hierarchy).
  Rationale: Best practice for text-heavy reading across screen sizes.
  Alternatives considered: Dense layouts for more content per screen.

## Phase 1: Design

### Data Model

The site is content-driven with minimal structured data. Primary entities are:
- Page: index, resume, 404 (title, headings, body, metadata).
- Resume data: JSON source mirrored in `resume/index.html` and JSON-LD.

### Contracts

No external APIs or programmatic endpoints are introduced by this feature.
Discovery artifacts are static files.

### Quickstart

- Run a static server from repo root (e.g., `python3 -m http.server`).
- Review `index.html`, `resume/index.html`, and `404.html` at desktop and mobile
  breakpoints.
- Validate metadata, canonical URLs, and discovery artifacts.

## Constitution Re-check (Post-Design)

- [x] Content source of truth preserved between `resume/index.html` and
      `resume/resume.json`
- [x] Discovery artifacts kept current and consistent
- [x] Readability and accessibility targets aligned with WCAG AA
- [x] Static performance and no-JS rendering preserved
- [x] Link integrity maintained across navigation and anchors

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
