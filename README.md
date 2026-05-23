# Portfolio - Avishkar Jaiswal

Personal portfolio website featuring a Spline 3D hero, scroll-hijacked project showcase, vertical timeline, and an HTML5 Canvas neural network background - built with React 18, TypeScript, and Framer Motion.

![React 18](https://img.shields.io/badge/React-18-blue?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square) ![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=flat-square) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-teal?style=flat-square) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34-pink?style=flat-square) ![GSAP](https://img.shields.io/badge/GSAP-3.14-green?style=flat-square) ![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square) ![License MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

> The site's architecture operates as a snap-scrolling single-page application with section-level scroll hijacking, anchored by a fixed HTML5 Canvas neural network rendered at `z-index: -50`. All content elements, including projects, experience timelines, and academic papers, are sourced dynamically from centralized TypeScript configurations within `src/data/`. The initial load sequence orchestrates an `AnimatePresence` multilingual preloader before mounting a lazy-loaded Spline 3D robot, with the final build deployed directly to Vercel at `https://avishkar-jaiswal.vercel.app`.

## Sections & Architecture

Section | Component | Key Libraries | Notable Implementation
---|---|---|---
Preloader | `Preloader.tsx` | `framer-motion` `AnimatePresence` | Multilingual greeting sequence, exit animation before Hero mount
Hero | `Hero.tsx` | `@splinetool/react-spline`, `SkillsMarquee` | Spline 3D robot scene, `StarButton`, infinite skills marquee
Projects | `Projects.tsx` | `gsap`, `framer-motion` | Scroll-hijacked split-screen layout, image slideshow per project, `ProjectModal`
Journey | `Journey.tsx` | `framer-motion` | Vertical timeline, glassmorphic cards, `ExperienceDetailsModal`
Papers & Patents | `Papers.tsx` | `GlowingEffect` | Grid layout, category badges, glow border effect
Background | `ShaderBackground.tsx` | HTML5 Canvas | Fixed neural network particle system, moving grey nodes with connecting lines, gradient vignette overlays, `z-index: -50`

## Design System

**Glassmorphism Layer**
The elevated UI architecture utilizes a consistent glass card system constructed with `bg-white/5`, `backdrop-blur-md`, and `border-[var(--glass-border)]`. By enforcing this pattern across all floating surfaces rather than relying on opaque backgrounds, the background neural network canvas remains perpetually visible through the application layers.

**CSS Variables & Accent System**
The aesthetic is controlled via centralized CSS custom properties, primarily `--accent-primary`, `--accent-glow`, and `--glass-border`. The hidden scrollbar behavior and the custom snap-scrolling physics are implemented natively via CSS on the root scroll container, avoiding external library overhead.

## Tech Stack

Library | Version | Role
---|---|---
`react` | `18.3.1` | UI Library
`typescript` | `5.8.3` | Static Typing
`vite` | `5.4.19` | Build Tool
`tailwindcss` | `3.4.17` | Utility-First Styling
Shadcn UI | N/A | Component Primitives
`framer-motion` | `12.34.0` | Animation Engine
`gsap` | `3.14.2` | Scroll-Triggered Animations
`@splinetool/react-spline` | `4.1.0` | 3D Scene Rendering
`lucide-react` | `0.462.0` | Iconography
`react-router-dom` | `6.30.1` | Client-Side Routing

## Project Structure

```text
src/
├── components/
│   ├── portfolio/     # Section components: HomeSection, CinematicProjects, JourneySection, PapersPatentsSection
│   └── ui/            # Reusable primitives: star-button, glowing-effect, project-modal, ExperienceDetailsModal
├── data/              # Centralized content: projects.ts, experience.ts, papers.ts
├── types/             # TypeScript interface definitions
├── App.tsx            # Router, section orchestration, snap-scroll container
└── main.tsx           # Entry point
```

## Running Locally

1. Clone the repository and navigate into it:
```bash
git clone https://github.com/Avishkar-byte/Portfolio.git && cd Portfolio
```

2. Install dependencies (the `.npmrc` sets `legacy-peer-deps=true` to resolve Shadcn peer dependency conflicts):
```bash
npm install
```

3. Start the development server (runs at `http://localhost:5173`):
```bash
npm run dev
```

4. Build the application for production:
```bash
npm run build
```

5. Preview the production build locally:
```bash
npm run preview
```

## Deployment

The application is deployed on Vercel via direct Git integration. No custom build configuration is required beyond specifying the Vite framework preset. The live environment is accessible at `https://avishkar-jaiswal.vercel.app`. The integrated Spline 3D scene loads directly from the Spline CDN, negating the need to self-host the asset payload.

## Performance Notes

- The Spline 3D scene is lazy-loaded to prevent thread blocking during the initial preloader exit animation.
- The HTML5 Canvas neural network render loop is synchronized with `requestAnimationFrame` and automatically paused via an `IntersectionObserver` when off-screen.
- `framer-motion` variants apply `will-change: transform` sparingly to mitigate compositing layer bloat on mobile browsers.
- Specific CSS optimizations address Android Chrome rendering bottlenecks (implemented in `perf: fix Android Chrome lag + navbar spacing`).

## Contact
[Avishkar-byte](https://github.com/Avishkar-byte)

`avishkarjaiswal.456@gmail.com`

## License
MIT License. See [LICENSE](LICENSE) for details.
