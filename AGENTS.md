# Agent Guidelines — Digital Rescue Crew

This project is a **Kite MVCR** web application for [Oops.dev](https://oops.dev),
a business-process rescue and digitalization service for Philippine MSMEs and local offices.

## Engineering Standards

This workspace enforces the **Human-Craft** engineering philosophy.
Directives, conventions, and schemas are referenced from `@kitelet/core`.

### Core Rules

- Build real functionality. No mock APIs, hollow button handlers, or Hollywood Code.
- One source of truth per concern: never duplicate state between components or models.
- Names must mirror the domain: `rescueInquiry`, `clientRecord`, `serviceCard` — not `data`, `item`, `obj`.
- Comments explain **why**, not **what**. Syntax-paraphrasing comments are forbidden.
- Preserve existing casing, folder structure, and architectural idioms.
- Visual design layer remains strictly preserved as designed.

## Architecture Overview

```
index.html        Main entry shell with Kite configuration, models, routes, outlet
app/
  routes/         Route declarations (routes.html)
  models/         State models (e.g. team.model.html)
  views/          Screen view templates (home.view.html, about.view.html)
src/
  styles.css      Global design tokens, Tailwind v4 theme, and button utilities
public/           Static assets served directly (logos, team photos, favicon)
vite.config.ts    Vite 8 build configuration with Tailwind CSS v4 & Kite include plugin
```

## Stack

- **Framework**: Kite via CDN (`https://esm.sh/@kitelet/core`)
- **Reference & Tooling**: `@kitelet/core` (npm package for documentation, CLI, and schemas)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom OKLCH design tokens
- **Build Tool**: Vite 8 (builds HTML + CSS client bundles to `dist/`)

## Design System

Defined in `src/styles.css`. Never add inline styles or ad-hoc color values. Use design tokens:

| Token             | Usage                                   |
| ----------------- | --------------------------------------- |
| `primary`         | Rescue Red — CTA buttons, logo, accents |
| `secondary`       | Digital Teal — icons, secondary actions |
| `foreground`      | Trust Navy — headings, dark sections    |
| `background`      | Paper White — page background           |
| `accent` / `sand` | Warm Sand — badges, decorative accents  |

## Routing

Kite uses **declarative hash-based routing** in native HTML:

| Path     | View Target  | Description           |
| -------- | ------------ | --------------------- |
| `/`      | `home-view`  | Home page             |
| `/about` | `about-view` | About Us page         |
| `/story` | `story-view` | Our Story origin page |

## Local Development

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
```

## Deployment

Target URL: [https://oopsdev.vercel.app/](https://oopsdev.vercel.app/)

- **Vercel**: Configured via `vercel.json` (Framework: Vite, output: `dist/`).
- **GitHub**: Initialized on `main` branch. Push to GitHub triggers automated Vercel deployment.
