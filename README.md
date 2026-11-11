<p align="center">
  <img src="https://oopsdev.vercel.app/oops-logo.svg" alt="Oops Rescue Hero" width="120" height="120" />
</p>

# Oops[.]dev &mdash; Digital Rescue Crew

> **"Rescue. Digitalize. Keep."**  
> Business process rescue, document digitalization, and custom systems modernizing Philippine MSMEs and local government offices without losing legacy records.

[![Deployment Status](https://img.shields.io/badge/Deployment-Live-2A9D8F?style=flat&logo=vercel)](https://oopsdev.vercel.app/)
[![Program](<https://img.shields.io/badge/Academic%20Program-Associate%20in%20Information%20Systems%20(AIS)-1D3557?style=flat>)](#academic-scope--technopreneurship-context)
[![License](https://img.shields.io/badge/License-Proprietary%20%7C%20All%20Rights%20Reserved-E63946?style=flat)](LICENSE.md)

---

## Overview

**Oops[.]dev** is an academic Technopreneurship venture founded by students in the **Associate in Information Systems (AIS)** program in the Philippines.

Many businesses and local offices never intended to get trapped in paper chaos&mdash;it simply accumulated over decades. Fear of losing irreplaceable historical records keeps owners tethered to fragile physical logbooks and ledgers. Oops[.]dev provides customized business process rescue, scanning and encoding physical archives, and deploying accessible custom systems with zero data loss.

- **Live Deployment:** [https://oopsdev.vercel.app/](https://oopsdev.vercel.app/)
- **Repository:** [https://github.com/EldrexDelosReyesBula/oopsdev](https://github.com/EldrexDelosReyesBula/oopsdev)

---

## Core Capabilities & Services

| Service                       | Capability & Purpose                                                      | Impact                                                                  |
| ----------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Business Process Rescue**   | Comprehensive workflow audit and bottleneck elimination                   | Replaces days of manual paperwork with modern, validated workflows      |
| **Document Digitalization**   | Scanning, optical organization, and structured encoding of paper logbooks | Converts towering physical archives into searchable digital records     |
| **Custom System Development** | Tailored inventory, sales tracking, HR, and reporting systems             | Lightweight, responsive tools customized for specific client operations |
| **Data Preservation**         | Redundant historical data backup and secure legacy storage                | Guarantees that decades of institutional memory are never lost          |
| **Training & Support**        | Plain-language onboarding for staff and administrators                    | Eliminates technical barriers for non-tech-savvy operators              |

---

## Architecture & Tech Stack

This project is built following the **Human-Craft** engineering philosophy with a clean, zero-boilerplate MVCR architecture:

- **Frontend Runtime:** [Kite](https://esm.sh/@kitelet/core) via CDN (`@kitelet/core`) &mdash; zero-eval reactive MVCR runtime with native HTML routing.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) configured with custom OKLCH design tokens.
- **Iconography:** [Phosphor Duotone Icons](https://phosphoricons.com) (`@phosphor-icons/web/duotone`).
- **Build System:** Vite 8 with an in-tree compile-time `<kite-include>` resolver plugin for modular zero-waterfall production bundles.
- **Deployment:** Vercel SPA build with automated CI/CD from the `main` branch.

### Design Tokens (OKLCH Palette)

| Token        | Semantic Purpose                                                       | Palette Value            |
| ------------ | ---------------------------------------------------------------------- | ------------------------ |
| `primary`    | Rescue Red &mdash; primary CTAs, active highlights, accents            | OKLCH `0.58 0.22 25.5`   |
| `secondary`  | Digital Teal &mdash; icons, indicators, secondary actions              | OKLCH `0.65 0.11 188.0`  |
| `foreground` | Trust Navy &mdash; headings, primary text, high-contrast dark surfaces | OKLCH `0.28 0.07 245.0`  |
| `background` | Paper White &mdash; base canvas, warm light surfaces                   | OKLCH `0.98 0.015 130.0` |
| `sand`       | Warm Sand &mdash; decorative accents, badges                           | OKLCH `0.78 0.12 65.0`   |

---

## Repository Structure

```
.
├── index.html                  # Main entry shell with Kite configuration, models, routes, outlet
├── app/
│   ├── routes/                 # Declarative hash routes (routes.html)
│   ├── models/                 # Reactive state models (team.model.html)
│   └── views/                  # Screen view templates (home, about, story)
├── src/
│   └── styles.css              # Global design tokens, Tailwind v4 theme, and button utilities
├── public/                     # Static production assets (logos, team photos, illustrations)
├── vite.config.ts              # Vite 8 configuration with Tailwind v4 & Kite include plugin
├── vercel.json                 # Vercel SPA deployment configuration
├── AGENTS.md                   # Enterprise Architecture operating contract
├── Skills.md                   # Capability declarations, domain entities, and skill boundaries
├── CHANGELOG.md                # Keep a Changelog (SemVer 2.0.0)
└── LICENSE.md                  # Proprietary academic copyright notice
```

---

## Local Development

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` `v9.0.0` or higher

### Commands

```sh
# Install dependencies
npm install

# Start local development server (HMR enabled)
npm run dev

# Build optimized production bundle to dist/
npm run build

# Preview production build locally
npm run preview

# Run ESLint validation
npm run lint

# Format code with Prettier
npm run format
```

---

## Academic Scope & Technopreneurship Context

This application represents an original student venture engineered for the **Technopreneurship** curriculum within the **Associate in Information Systems (AIS)** program in the Philippines.

- **Project Lead & Founder:** Eldrex Delos Reyes Bula
- **Academic Focus:** Technopreneurship & Applied Information Systems
- **Target Audience:** Philippine MSMEs, cooperatives, and local government units transitioning from manual logbooks to digital systems.

---

## Intellectual Property & Proprietary License

**Copyright &copy; 2026 Eldrex Delos Reyes Bula & Oops[.]dev Team. All Rights Reserved.**

> [!IMPORTANT]
> **THIS REPOSITORY, CODEBASE, AND BUSINESS CONCEPT ARE PROPRIETARY AND NOT OPEN SOURCE.**
>
> All concepts, branding, workflows, slogans (_"We Fix Your Oops"_, _"Rescue. Digitalize. Keep."_), and system designs are original intellectual property. Third parties and commercial startups are **strictly prohibited** from copying, forking, reproducing, or commercializing this concept, software, or methodology without prior express written and signed permission from the Authors.
>
> Refer to [LICENSE.md](LICENSE.md) for full terms and conditions.

---

## Third-Party Attributions

- **Origin Story Illustration:** Illustrated by [David](https://ph.pinterest.com/get_stuff000/), originally published via [Barron's](https://www.barrons.com/articles/here-are-5-tax-moves-to-consider-for-an-unusual-year-51606496167). Sourced and referenced for academic, non-commercial demonstration with attribution.
- **Icons:** [Phosphor Duotone Icons](https://phosphoricons.com) (MIT License).
- **Framework:** [Kite](https://esm.sh/@kitelet/core) (MIT License).
