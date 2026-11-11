# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added dedicated `story-view` (`app/views/story.view.html`) routed to `#/story` and `#/stories`, featuring the Municipal Office and Electronics Shop encounters, Three Undeniable Truths, and the dark navy Rescue Manifesto card.
- Added Origin Story banner card in `app/views/about.view.html` with direct call-to-action link to `#/story`.
- Added `.carousel-dot` and `.carousel-dot.active` design token utilities to `src/styles.css` for resilient, unpurged indicator dot rendering.
- Integrated Phosphor Duotone icons (`@phosphor-icons/web/duotone`) across all navigation items, service cards, value propositions, metric cards, and interactive controls.
- Added smooth responsive animations, glassmorphic navigation header (`glass-nav`), floating ambient glow (`ambient-glow`), and interactive team carousel with pause-on-hover.
- Implemented declarative Kite routes (`routes.html`), models (`team.model.html`), and views (`home.view.html`, `about.view.html`, `story.view.html`).
- Added Vite compile-time `<kite-include>` resolver plugin in `vite.config.ts` for zero-overhead HTML templating and instant HMR.

### Changed

- Updated student curriculum information across all views and models to **Associate in Information Systems (AIS)**.
- Established proprietary copyright license (`LICENSE`, `package.json`), explicitly declaring original academic intellectual property and prohibiting unauthorized startup or commercial use without written permission.
- Added academic Technopreneurship disclosures across site footers, `README.md`, `AGENTS.md`, and `LICENSE`.
- Added image attribution to [David](https://ph.pinterest.com/get_stuff000/) via [Barron's](https://www.barrons.com/articles/here-are-5-tax-moves-to-consider-for-an-unusual-year-51606496167) for the story illustration in `home.view.html`, `story.view.html`, and `README.md`.
- Transformed `#stories` section on home page into a single high-impact card structure featuring `60384c907ba3b44d940082be69926ee1.jpg` and a centered "Read Story" CTA button, matching wireframe specifications.
- Added featured illustration to origin story view (`story.view.html`) for visual narrative cohesion.
- Updated navigation headers, mobile drawers, and footers across `home.view.html`, `about.view.html`, and `story.view.html` to link to `#/story`.
- Safeguarded `app/models/team.model.html` against automatic line wrapping in `.prettierignore`, preventing string syntax errors in browser JS evaluation.
- Bound fallback values directly to carousel markup (`/eldrexbula.png`, member name, role) to eliminate blank layout states during reactive bootstrap.
- Modularized `index.html` to load views and models via `<kite-include>`, eliminating 1,500 lines of duplicated markup.
- Replaced legacy TanStack Start / React 19 stack with Kite declarative MVCR runtime via CDN (`https://esm.sh/@kitelet/core`).
- Configured Vite 8 with Tailwind CSS v4 (`@tailwindcss/vite`).
- Streamlined `package.json` to minimal required dependencies, reducing build bundle size and dependencies.

### Fixed

- Fixed team carousel rendering blank cards and single dot indicator on `#/about` by resolving JSON string literal line-break syntax errors, hardening `getMember()` bounds checks, and defining explicit indicator dot styling.

### Removed

- Removed legacy 130-line "Our Story" section from `app/views/about.view.html` in favor of dedicated `#/story` view.
- Purged duplicate team photo assets (`team-1.jpg` through `team-8.jpg`) from `public/` and `dist/`, establishing `public/eldrexbula.png` as single source of truth.
- Removed 254 unused legacy packages including `@tanstack/*`, `@radix-ui/*`, `react`, `react-dom`, and `nitro`.
- Removed legacy React route components (`src/routes/`), shadcn UI primitives (`src/components/ui/`), and SSR error wrappers (`src/server.ts`, `src/start.ts`, `src/lib/`).
- Removed obsolete `.tanstack/` and `components.json` configuration files.
- Purged all leftover React JSX artifacts (`className`, `{" "}`) in favor of native HTML semantics.
- Removed duplicate asset directories (`assets/`, `src/assets/`) and obsolete Bun configuration (`bun.lock`, `bunfig.toml`).
