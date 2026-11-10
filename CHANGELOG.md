# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Integrated Phosphor Duotone icons (`@phosphor-icons/web/duotone`) across all navigation items, service cards, value propositions, metric cards, and interactive controls.
- Added smooth responsive animations, glassmorphic navigation header (`glass-nav`), floating ambient glow (`ambient-glow`), and interactive team carousel with pause-on-hover.
- Implemented declarative Kite routes (`routes.html`), models (`team.model.html`), and views (`home.view.html`, `about.view.html`).
- Added Vite compile-time `<kite-include>` resolver plugin in `vite.config.ts` for zero-overhead HTML templating and instant HMR.

### Changed

- Modularized `index.html` to load views and models via `<kite-include>`, eliminating 1,500 lines of duplicated markup.
- Replaced legacy TanStack Start / React 19 stack with Kite declarative MVCR runtime via CDN (`https://esm.sh/@kitelet/core`).
- Configured Vite 8 with Tailwind CSS v4 (`@tailwindcss/vite`).
- Streamlined `package.json` to minimal required dependencies, reducing build bundle size and dependencies.

### Removed

- Removed 254 unused legacy packages including `@tanstack/*`, `@radix-ui/*`, `react`, `react-dom`, and `nitro`.
- Removed legacy React route components (`src/routes/`), shadcn UI primitives (`src/components/ui/`), and SSR error wrappers (`src/server.ts`, `src/start.ts`, `src/lib/`).
- Removed obsolete `.tanstack/` and `components.json` configuration files.
- Purged all leftover React JSX artifacts (`className`, `{" "}`) in favor of native HTML semantics.
- Removed duplicate asset directories (`assets/`, `src/assets/`) and obsolete Bun configuration (`bun.lock`, `bunfig.toml`).
