# Skills.md — Digital Rescue Crew

## 1. Languages & Frameworks (with versions)

- HTML5 / CSS3 / ES2022
- Kite (`@kitelet/core@1.0.0`) — lightweight MVCR toolkit for declarative, zero-build or low-overhead web apps
- Tailwind CSS (`tailwindcss@^4.2.1` with `@tailwindcss/vite`) — utility-first design system engine
- Vite (`vite@8.1.5`) — frontend dev server and production bundler
- Node.js (v18+)

## 2. Libraries & Tools (and why each exists)

- `@kitelet/core` — Local reference, schemas, types, and documentation for Kite declarative MVCR runtime
- `@phosphor-icons/web` — Phosphor Duotone icon font assets and CSS utilities
- `@tailwindcss/vite` — Integrates Tailwind CSS v4 directly into Vite compilation pipeline
- `tw-animate-css` — CSS animation utilities for interactive micro-interactions

## 3. Domain

- **Entities**: `RescueInquiry`, `ClientStory`, `ServiceOffering`, `TeamMember`, `RescueValue`
- **Business Rules**:
  - Legacy records must be preserved with zero data loss ("Rescue. Digitalize. Keep.")
  - Systems must be simple and accessible for non-technical users
  - All client data handled with confidentiality and care
- **Glossary**:
  - **MSME**: Micro, Small, and Medium Enterprises in the Philippines
  - **LGU**: Local Government Unit
  - **AIS**: Associate in Information Systems

## 4. Skills to Apply

- **HCI / UX**: Clear visual hierarchy, accessible contrast, responsive layout across mobile and desktop
- **Design System Fidelity**: Exact preservation of Oops[.]dev palette (Rescue Red, Digital Teal, Trust Navy, Paper White, Warm Sand)
- **Zero-eval Expression Safety**: Using Kite's safe expression engine for data binding and event handlers
- **Performance**: Sub-second dev start and production builds under 350ms

## 5. Skills Explicitly Out of Scope

- No heavy client runtime frameworks (React, Angular, Vue)
- No server-side relational databases or complex backend microservices at this stage
