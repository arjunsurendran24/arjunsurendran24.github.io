---

description: "Task list template for feature implementation"
---

# Tasks: Readability, SEO, Discovery

**Input**: Design documents from `/specs/001-readability-seo-discovery/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

**Constitution**: Include tasks for SEO/discoverability updates, accessibility,
performance, and link integrity when relevant to the feature.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create baseline backup copies of `index.html`, `resume/index.html`, and `404.html` in `/tmp/web-resume-backups/` for diff review
- [x] T002 [P] Inventory existing metadata and canonical tags in `index.html`, `resume/index.html`, and `404.html`
- [x] T003 [P] Inventory discovery artifacts in `sitemap.xml`, `robots.txt`, `llms.txt`, and `llms-full.txt`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Define readability standards (type scale, line length, spacing) in `css/custom.css`
- [x] T005 Define accessibility baseline rules (focus, contrast, keyboard) in `css/custom.css`
- [x] T006 Define shared metadata and canonical conventions in `index.html` and `resume/index.html`
- [x] T007 Define shared navigation cues and anchors used across pages in `index.html` and `resume/index.html`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Read Text With Ease (Priority: P1) 🎯 MVP

**Goal**: Ensure reading comfort and clear hierarchy across all public pages and screen sizes

**Independent Test**: A reader can locate key sections quickly and read comfortably across desktop, tablet, and mobile

### Implementation for User Story 1

- [x] T008 [P] [US1] Update typography scale and spacing in `css/custom.css` to support long-form readability
- [x] T009 [P] [US1] Adjust layout widths and line length constraints in `css/custom.css`
- [x] T010 [US1] Apply updated hierarchy and spacing to `index.html`
- [x] T011 [US1] Apply updated hierarchy and spacing to `resume/index.html`
- [x] T012 [US1] Apply updated hierarchy and spacing to `404.html`
- [x] T013 [US1] Ensure print styles remain legible in `css/print.css`

**Checkpoint**: User Story 1 should be fully functional and readable across screen sizes

---

## Phase 4: User Story 2 - Discoverable By Search And Agents (Priority: P2)

**Goal**: Ensure metadata and discovery artifacts accurately represent all public pages

**Independent Test**: A crawler can enumerate all public pages and extract consistent metadata and structured data

### Implementation for User Story 2

- [x] T014 [P] [US2] Update metadata and canonical tags in `index.html` and `resume/index.html`
- [x] T015 [P] [US2] Update metadata for `404.html` to align with public page scope
- [x] T016 [US2] Validate JSON-LD and structured data alignment in `index.html` and `resume/index.html`
- [x] T017 [US2] Update `sitemap.xml` for current public pages
- [x] T018 [US2] Update `robots.txt` for current public pages
- [x] T019 [US2] Update `llms.txt` and `llms-full.txt` with current public pages

**Checkpoint**: Discovery artifacts and metadata are consistent and complete

---

## Phase 5: User Story 3 - Owner Confirms Quality (Priority: P3)

**Goal**: Enable a clear validation pass for readability, accessibility, and discovery updates

**Independent Test**: Owner can follow a checklist to validate updates without specialized tooling

### Implementation for User Story 3

- [x] T020 [P] [US3] Document manual readability checks in `specs/001-readability-seo-discovery/quickstart.md`
- [x] T021 [P] [US3] Document accessibility checks in `specs/001-readability-seo-discovery/quickstart.md`
- [x] T022 [P] [US3] Document discovery artifact checks in `specs/001-readability-seo-discovery/quickstart.md`

**Checkpoint**: Owner validation steps are documented and usable

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T023 [P] Documentation updates in `README.md`
- [x] T024 Code cleanup and refactoring in `css/custom.css` and `styles.css`
- [x] T025 Performance optimization across all stories (audit and trim unused styles in `css/custom.css` and `styles.css`)
- [x] T026 [P] SEO/discoverability updates (metadata, canonical, sitemap, robots, `llms.txt`, `llms-full.txt`)
- [x] T027 [P] Accessibility and readability pass (contrast, headings, focus, line length)
- [x] T028 [P] Link integrity check (internal links and anchors)
- [x] T029 Run quickstart validation in `specs/001-readability-seo-discovery/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Can start after Foundational (Phase 2)
- **User Story 3 (P3)**: Can start after Foundational (Phase 2)

### Parallel Opportunities

- Tasks T002 and T003 can run in parallel during Setup
- Tasks T008 and T009 can run in parallel during User Story 1
- Tasks T014 and T015 can run in parallel during User Story 2
- Tasks T020, T021, and T022 can run in parallel during User Story 3
- Polish tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
Task: "Update typography scale and spacing in css/custom.css"
Task: "Adjust layout widths and line length constraints in css/custom.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Verify readability across desktop, tablet, and mobile
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Validate independently → Deploy/Demo (MVP)
3. Add User Story 2 → Validate independently → Deploy/Demo
4. Add User Story 3 → Validate independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
