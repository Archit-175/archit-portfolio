# Archit Career Intelligence Report

> Built from deep code-level analysis of 36 GitHub repositories (actual source, commit history, and manifests via `git` clone + `gh` API), not READMEs alone. Role attribution is derived from `git shortlog` across all branches, so it reflects true authorship rather than repo ownership. Generated 2026-07-06. See **Section 5** for the per-repo analyzed-commit ledger and the exact steps to refresh this report later.

**Legend:** PUBLIC / PRIVATE = repo visibility (PRIVATE repos are not publicly linkable on a resume). "copilot-swe-agent[bot]" commits are AI-assisted work by Archit, not a human collaborator.


## SECTION 1: PROJECT DEEP DIVES

### 1. career-passport-v4  `Archit-175/career-passport-v4`  — PUBLIC
- **Repo:** https://github.com/Archit-175/career-passport-v4
- **Context:** Paid **freelance** work for the **CareerPassport startup** (a join-the-waitlist product site). The family evolved `careerpassport` (first draft) → `cpv2` (dark) → `cpv3` (3D experiment) → **`career-passport-v4`** (final rebuild, 4 pages). This v4 is the deliverable flagship.
- **Description:** A premium, animation-heavy marketing/waitlist website for "Career Passport" — a product that gives professionals a verified, portable "passport" of their real work and gives companies trustworthy hiring signal. It is a multi-page Next.js App Router site with two audience funnels (`/candidates`, `/companies`), plus `/blog`, `/trips`, and a waitlist email capture CTA on every page.
- **Problem it solves:** Communicates a hiring/credentialing product to two distinct audiences and converts visitors into a waitlist — the front-of-funnel for a talent-verification startup. The engineering problem it actually tackles is building a highly-polished, magazine-grade editorial landing experience with custom WebGL/3D and physics-y interactions rather than generic template sections.
- **Tech Stack:** TypeScript 6, Next.js 16 (App Router, React Server Components), React 19 / React DOM 19, Tailwind CSS v4 (CSS-first `@theme` config via `@tailwindcss/postcss`, no `tailwind.config.ts`), PostCSS + autoprefixer, Framer Motion v12, GSAP v3 (`gsap` + `@gsap/react` `useGSAP` + `SplitText` plugin), Three.js v0.184 (custom WebGL scenes), `modern-screenshot` (DOM→canvas capture, chosen over html2canvas for Tailwind v4 oklab support), `slot-text` (character-roller button labels), Lucide React icons, `clsx` + `tailwind-merge` (`cn()` helper), `@fontsource` + `next/font/google` (Playfair Display, Inter, IBM Plex Mono). Natural Earth 110m GeoJSON as static data. No test framework, no backend runtime.
- **My Role:** **Lead / primary author — 21 of 23 commits (~91%)** as "Archit Savaliya" (architsavaliya175@gmail.com / Archit-175). Ramanuj Om contributed 2 commits. This is the current flagship CareerPassport build; Archit authored essentially all of the source. AI-assisted (per project conventions), but the git history clearly attributes the work to him.
- **Architecture:** Frontend-only monolith — no backend, no database, no API layer, no auth, no CMS. Next.js App Router with React Server Components by default; `"use client"` is added only where hooks/WebGL/event listeners are needed (heroes, WebGL sections, loader, CTAs). Root layout wraps the app in a single `LoaderProvider` (a client-side `"initial" | "transition" | "idle"` phase state machine that gates the branded splash on hero-image decode and handles cross-route scroll reset under an overlay). Pages are composed from per-section components under `src/components/{candidates,companies,blog,trips,layout,loader}`. Styling mixes Tailwind utilities with co-located `.css` files for token-heavy glass/CTA components. `/` redirects to `/candidates`.
- **Key Features Built:**
  - **Custom Three.js wireframe globe** (`WireframeGlobe.tsx`, ~660 lines): hand-built graticule, batched GeoJSON country-border line geometry, an opaque occluder sphere to hide the far hemisphere, auto-rotation + pointer drag with inertia, quaternion-based focus tweens, ray-cast pointer picking → inverse lat/lon → point-in-polygon country hover highlight, additive-blended glow-sprite markers, and careful WebGL lifecycle (deferred one-rAF init to survive React StrictMode double-mount, full dispose + `forceContextLoss`).
  - **Full-screen WebGL blog gallery** (`BlogGallery.tsx`, ~890 lines): an infinitely-wrapping toroidal grid of canvas-textured cards that bends flat→sphere while dragging (per-card `lerp`/`slerp` between flat and sphere pose) with a "zoom-out into a globe" feel, aspect-aware FOV to keep horizontal density constant, raycast card open → GSAP zoom into an accessible article dialog, and `sr-only` keyboard/crawlable fallback list.
  - **Interactive 8-dimension SVG radar chart** (`YourPassportMeasured.tsx`) with whole-chart "Voronoi-by-angle" hover mapping (cursor → nearest dimension by angle) and a fixed-height, absolutely-positioned detail card that tweens content in place (deliberately not remounted per node to avoid `AnimatePresence mode="wait"` stutter).
  - **3D "TileOverlay" hero effect** (`TileOverlay.tsx`): captures a DOM section via `modern-screenshot`, slices it into a Three.js grid of textured tiles that lift toward the cursor with spring-lerp physics.
  - **Loader / page-transition state machine** (`LoaderProvider.tsx`) with hero-decode gating, min-display floor + safety timeout, scroll-restoration=manual, body scroll-lock, and `prefers-reduced-motion` handling.
  - **GSAP `SplitText` masked-line hero/CTA entrance animations**, Framer Motion scroll-reveal sections, and a `slot-text` character-roller on CTA buttons; fully fluid `clamp()`-based responsive type/spacing across all breakpoints.
  - **Waitlist email-capture CTAs** on every page (client state + Framer Motion toast) — submit handler is currently a `console.log` placeholder pending a backend.
- **ML/AI Details:** Not applicable. No models, datasets, notebooks, or inference code. The product markets a scoring/verification concept, but the site ships only static illustrative data (e.g. hard-coded radar scores); no ML is implemented here.
- **APIs / Integrations:** None (no third-party runtime SDKs). Google Fonts via `next/font`. Static `countries.geo.json` (Natural Earth) is fetched client-side from `/public`. No auth, payment, analytics, email, or LLM APIs.
- **Database / Storage:** None. Content (blog posts, radar dimensions, copy) is hard-coded in TypeScript modules (e.g. `blogData.ts`); static assets live in `/public`. No ORM, DB, or persistence layer.
- **Complexity Level:** Medium — standard frontend site scope (no backend/DB/auth), but pushed above a typical landing page by two substantial hand-written Three.js/WebGL scenes, a lifecycle-aware loader state machine, and non-trivial interaction/animation engineering.
- **Commits & Activity:** 23 commits total across `main`; 2 contributors (Archit lead at 21, Ramanuj Om 2). Concentrated, intense build window around mid-June 2026 (~Jun 16–18 2026 in git dates). Described as the current/flagship "v4" CareerPassport build.
- **Resume Bullet:** Led development (21/23 commits) of Career Passport's flagship marketing site in Next.js 16 / React 19 / TypeScript, hand-building two custom Three.js/WebGL experiences — an interactive wireframe globe (batched GeoJSON borders, ray-cast country picking, quaternion focus tweens) and an infinitely-wrapping flat-to-sphere blog gallery — plus a hero-decode-gated loader state machine and GSAP/Framer Motion editorial animations, all fully responsive and `prefers-reduced-motion`-aware.
- **Potential Interview Questions:**
  1. In `WireframeGlobe.tsx` you defer real WebGL init by one `requestAnimationFrame` and pair `renderer.dispose()` with `renderer.forceContextLoss()`. Walk me through the React StrictMode double-mount context-loss problem this solves and why `dispose()` alone isn't enough.
  2. The globe does country hover-picking by ray-casting to a sphere, inverting the globe quaternion to get local lat/lon, then running a ray-casting point-in-polygon over GeoJSON rings. Why do it in geo space instead of GPU picking/raycasting the border meshes, and what are the accuracy/performance trade-offs (e.g. the antimeridian seam guard, throttling hover to ~20fps)?
  3. In the blog gallery you lerp each card between a flat grid pose and a sphere pose and wrap positions toroidally so the grid is "infinite." How does `wrap()` guarantee no duplicate card is ever visible at once, and how did you size `COLS/ROWS` vs the FOV to ensure that?
  4. The radar chart deliberately keeps a stable `key="detail"` under `AnimatePresence mode="wait"` instead of keying by dimension id. Explain the remount-vs-update trade-off and how the "Voronoi-by-angle" hover mapping avoids dead zones between the 8 points.
  5. `LoaderProvider` gates the splash on the hero image's `onLoad` with a `MIN_DISPLAY_MS` floor and `SAFETY_TIMEOUT_MS` ceiling, and resets scroll under the overlay via `useLayoutEffect`. Why `useLayoutEffect` rather than `useEffect` there, and how do you keep the state machine correct when a user toggles Candidates↔Companies mid-load (stale hero handling)?

### 2. careerpassport  `Archit-175/careerpassport`  — PRIVATE
- **Repo:** https://github.com/Archit-175/careerpassport
- **Description:** A single-page, dual-audience marketing/landing site for "Career Passport" — a (pre-launch) product that lets candidates document, prove, and own verifiable proof-of-work instead of relying on resume claims. One route renders two distinct experiences (a "Candidates" narrative and a "Companies" narrative) toggled by a header switch, with a waitlist email capture as the conversion goal.
- **Problem it solves:** Job-seeker credibility inflation — the site's entire narrative satirizes "all bio, no GitHub" LinkedIn self-promotion and positions Career Passport as verified proof-of-work. As a build, it solves the marketing problem: a high-craft, scroll-driven brand story to drive early-access waitlist signups for both sides of a two-sided marketplace.
- **Tech Stack:** TypeScript 5.6, Next.js 16 (App Router), React 19, React DOM 19; Framer Motion 12 (toast + section animation), GSAP 3 (looping-word effect); native IntersectionObserver + ResizeObserver; hand-authored SVG (paths, `textPath`, `feTurbulence`/`feDisplacementMap` distress filters), HTML5 `<video>` backgrounds; plain per-section CSS with a `:root` design-token system (no CSS Modules, no Tailwind); Geist Sans / Playfair Display / JetBrains Mono via `next/font`. No backend, no build tooling beyond `next`.
- **My Role:** Sole author — 56/56 commits (`architsavaliya175@gmail.com` / "Archit Savaliya" / "Archit-175"). Includes AI-assisted commits merged via `copilot-swe-agent[bot]` PRs, which are Archit's own AI-assisted work. Solely designed, built, and did the responsive pass on every section.
- **Architecture:** Pure client-side monolith — a single Next.js App Router route (`src/app/page.tsx`) marked `"use client"`. `page.tsx` holds one `audience` state (`"candidates" | "companies"`) and conditionally renders 6 candidate sections or 4 company sections into a CSS scroll-snap container. No backend, no API routes, no server actions, no data layer — all content is static mock data in `src/candidate/data/mock-data.ts` (typed via `src/types/index.ts`). Structure is feature-foldered: `candidate/`, `company/`, `shared/`, `hooks/`, `styles/` (candidate/company/shared subtrees), with a `@/` → `src/` path alias.
- **Key Features Built:**
  - Dual-audience single-route architecture with a header toggle that swaps entire section sets and resets scroll on switch.
  - `useReveal` custom hook — a generic, typed IntersectionObserver wrapper (configurable threshold, optional replay) that adds an `.in` class to drive CSS reveal transitions; self-unobserves when not replaying.
  - Scroll-snap page with a JS-driven "veil" dim between sections: a rAF-throttled scroll handler computes a triangle-wave opacity from `scrollTop % viewportHeight` and writes it to a `--veil` CSS custom property.
  - Bridge section's dynamic SVG connector: `useLayoutEffect` + `ResizeObserver` measure `getBoundingClientRect` of a video anchor and three proof-cards, then compute a trunk-plus-branches cubic-Bézier connector recalculated on every resize (falls back to a static SVG below 768px).
  - Hand-built SVG "passport stamp" components with circular `textPath` lettering and an `feTurbulence`/`feDisplacementMap` distress filter.
  - Waitlist email-capture form with regex validation and an animated Framer Motion success/error toast (auto-dismiss via timeout) — currently a front-end-only stub (`console.log`, no network call).
  - A comprehensive responsive system: fluid `clamp()` type tokens redefined per breakpoint, `svh` units, `pointer: coarse` touch targets, safe-area insets, and `prefers-reduced-motion` fallbacks on every animation (documented in a detailed `CLAUDE.md`).
- **ML/AI Details:** Not applicable. The proof-cards reference a "RAG system," "fine-tuning," and metrics ("drop-off 61%→38%", "2,200 sessions") but these are marketing copy strings, not implemented ML. No model, dataset, training, or inference code exists in the repo.
- **APIs / Integrations:** None (no third-party APIs, auth, payments, analytics, or LLM calls). The only external dependency is Google Fonts via `next/font`. The waitlist form does not POST anywhere.
- **Database / Storage:** None. No ORM, schema, or connection; all content is hard-coded TypeScript mock data. Section 3's "sea of generic profiles" is procedurally generated in `mock-data.ts` by permuting fixed arrays over a computed grid.
- **Complexity Level:** Medium — Low as a system (static, no backend/data/auth), but the front-end craft is genuinely non-trivial: measurement-driven dynamic SVG geometry via ResizeObserver, a hand-rolled reveal-observer hook, procedural layout data generation, and a deep multi-breakpoint responsive system.
- **Commits & Activity:** Very active but short burst — 56 commits by a single contributor (Archit) between Jun 2 and Jun 8, 2026 (~1 week). Iterative history shows initial build followed by repeated responsive-polish passes per section (several via AI-assisted `copilot-swe-agent[bot]` PRs). ~4,120 lines of TS/TSX plus extensive CSS; ~231MB repo driven by vendored video/image assets in `public/`.
- **Resume Bullet:** Solo-designed and built a dual-audience marketing site in Next.js 16 / React 19 / TypeScript, engineering a measurement-driven SVG connector system (ResizeObserver + cubic Béziers), a custom IntersectionObserver reveal hook, and a full fluid-responsive design-token system with reduced-motion and safe-area support across 10 scroll-snap sections.
- **Potential Interview Questions:**
  1. In `BridgeSection`, the SVG connector is computed from `getBoundingClientRect` inside `useLayoutEffect` with a `ResizeObserver`. Why `useLayoutEffect` over `useEffect` here, and what breaks visually if you use the wrong one? How do you avoid layout thrash when the observer fires repeatedly?
  2. `useReveal` unobserves the element after the first intersection unless `replay` is set. Walk through the trade-offs of one-shot vs. replaying reveals, and how you'd prevent observer leaks when sections mount/unmount on audience switch.
  3. The scroll "veil" writes a `--veil` custom property on every scroll frame using `requestAnimationFrame` throttling. Why drive this through a CSS variable instead of React state, and what's the performance cost of the alternative?
  4. The whole page is one `"use client"` route with no server rendering of dynamic data. Given it's Next.js 16 App Router, what did you give up by not using Server Components here, and how would you restructure if the waitlist form needed to actually persist emails?
  5. Your responsive strategy redefines `clamp()`-based type tokens at each breakpoint and prefers `svh` over `vh`. Explain the mobile `100vh` browser-chrome trap and one concrete section where `svh` changed the layout outcome.

### 3. cpv2  `Archit-175/cpv2`  — PRIVATE
- **Repo:** https://github.com/Archit-175/cpv2
- **Description:** "Career Passport" (v2) — a polished, animation-heavy marketing landing page for a product that lets people document, prove, and own their career journey. It is a single-route Next.js app that serves two audiences (job candidates and hiring companies) from one page, toggled by a header switch, with fully bespoke scroll-snap sections, hand-drawn SVG artwork, and background video.
- **Problem it solves:** Pre-launch top-of-funnel marketing and waitlist capture for the Career Passport product. It pitches the product's core idea — replacing the traditional resume with verified, evidence-backed proof of what a candidate built/learnt/shipped — and gives companies a parallel pitch for how they'd receive that signal. It is the public storefront, not the product itself.
- **Tech Stack:** TypeScript 5.6 (strict mode), Next.js 16 (App Router, React Server Components layout + client components), React 19, Framer Motion 12 (toast + section animations), GSAP 3 (looping-word text animation), `next/font/google` (Fraunces, Inter, Space Mono), Geist (dep, unused in src). Plain hand-written CSS with OKLCH design tokens (no Tailwind, no CSS Modules); native IntersectionObserver + ResizeObserver + rAF. `@/` path alias to `src/`. No test/lint tooling configured.
- **My Role:** Sole author — 58/58 commits, single git identity (architsavaliya175@gmail.com / "Archit Savaliya" / "Archit-175"). He built the entire codebase; several merge commits reference his own AI-assisted (`claude/*`) branches, which count as his AI-assisted work, not a human teammate.
- **Architecture:** Frontend-only monolithic SPA-style landing page, no backend and no data layer. `src/app/page.tsx` holds a single `audience` state (`"candidates" | "companies"`) and conditionally renders one of two section sets — 6 candidate sections (`src/candidate/sections/`) and 4 company sections (`src/company/sections/`). The page body is a CSS scroll-snap container; a scroll listener throttled through `requestAnimationFrame` computes a `--veil` CSS custom property to dim between sections. Styling is centralized: every component has a matching plain `.css` file, all imported through `src/styles/globals.css`, with design tokens (colors/type scale/radii) as `:root` custom properties in `variables.css`. Shared UI lives in `src/shared/`, animation logic in the `useReveal` hook, mock content in `src/candidate/data/mock-data.ts`, types in `src/types/index.ts`.
- **Key Features Built:**
  - Dual-audience single-page toggle: one `audience` state swaps between two entirely different section trees, resetting scroll and re-binding the scroll listener on switch.
  - `useReveal` IntersectionObserver hook (`src/hooks/useReveal.ts`) — configurable threshold + optional replay, adds an `.in` class to trigger CSS reveal transitions and self-unobserves when non-replaying.
  - Bridge section with a dynamically computed SVG connector: uses `useLayoutEffect` + `ResizeObserver` and `getBoundingClientRect` to measure the video edge and each proof card, then draws a trunk-and-branch Bézier "signal" that recalculates on resize and highlights on card hover.
  - Hand-authored SVG "passport stamp" graphics with circular `textPath` labels and an `feTurbulence` + `feDisplacementMap` distress filter for a rubber-stamp look.
  - Scroll-snap + rAF-driven cross-section dimming veil (`--veil` custom property) for intentional section-to-section transitions.
  - `LoopingWord` GSAP component that cycles words with a rise-and-fade swap while reserving layout width via an invisible longest-word placeholder.
  - Client-side waitlist form with regex email validation and an animated Framer Motion success/error toast (auto-dismiss); on success it only `console.log`s (no network call).
  - Responsive header with audience switch, desktop nav, and a slide-out mobile menu; a large documented responsive system (fluid OKLCH type scale, `svh` units, `prefers-reduced-motion`, safe-area insets) across all 10 sections.
- **ML/AI Details:** Not applicable. AI/RAG language appears only as marketing copy inside the Bridge proof cards ("Built a RAG system…", "fine-tuning, evaluation frameworks"); there is no model, dataset, or ML code in the repo.
- **APIs / Integrations:** None. A grep for fetch/axios/API routes/env vars/SDKs (Stripe, Firebase, Supabase, OpenAI, etc.) returns nothing. The only external "services" are Google Fonts via `next/font` and locally served `.mp4`/`.png`/`.svg` assets under `public/`.
- **Database / Storage:** None. All content is static mock data in `src/candidate/data/mock-data.ts` (145 lines of typed arrays) plus in-file constants; no ORM, schema, or persistence of any kind. The waitlist email is never stored or transmitted.
- **Complexity Level:** Medium — no backend, DB, auth, or real-time layer keeps it below High, but the bespoke measured-SVG geometry, dual-audience state architecture, custom animation hooks, and an unusually thorough responsive/design-token system push it above a trivial static page.
- **Commits & Activity:** Solo project, very active in a short burst — 58 commits by a single author, all dated in the Jun 2026 window (CareerPassport v2). History shows iterative redesign and a heavy responsive-polish pass (many "responsive", "fix", "redesign" commits) plus several self-authored AI-assisted feature branches merged via PR.
- **Resume Bullet:** Solely designed and built a dual-audience Career Passport marketing site (100% of 58 commits) in Next.js 16 / React 19 / TypeScript, featuring a single-state audience toggle across 10 bespoke scroll-snap sections, IntersectionObserver reveal animations, GSAP/Framer Motion motion, and dynamically measured SVG connectors — with a full OKLCH design-token system and responsive pass down to iPhone SE.
- **Potential Interview Questions:**
  1. In `BridgeSection`, you compute the connector SVG in a `useLayoutEffect` using `getBoundingClientRect` and a `ResizeObserver`, and bail out below 768px. Why `useLayoutEffect` over `useEffect` here, and what visual bug would appear if you used the latter or dropped the ResizeObserver?
  2. Your scroll `--veil` handler in `page.tsx` reads `container.scrollTop` inside a `requestAnimationFrame` callback and registers the listener as `{ passive: true }`. Walk through why the rAF throttle and passive flag matter for scroll performance, and what `[audience]` in the effect deps is guarding against.
  3. The whole site is dual-audience via one `useState` in `page.tsx` that conditionally renders two different section trees. What are the trade-offs of this conditional-render approach versus two routes (`/candidates`, `/companies`), especially for SEO, deep-linking, and code-splitting in the App Router?
  4. You use `next/font/google` to load Fraunces, Inter, and Space Mono as CSS variables with `display: "swap"`. Explain how that avoids layout shift and external font requests, and what CLS or FOUT risk remains for your variable display headings.
  5. The waitlist form validates email with a regex and then only `console.log`s the value — no persistence. If you had to make it real, how would you wire it up in this App Router codebase (route handler vs. server action), and how would you handle validation, spam, and storage without leaking the email client-side?

### 4. cpv3  `Archit-175/cpv3`  — PRIVATE
- **Repo:** https://github.com/Archit-175/cpv3
- **Description:** Marketing / landing website for "Career Passport," an AI-career-intelligence product concept aimed at two audiences (student candidates and hiring companies). Built as a cinematic, dark-themed Next.js site whose standout work is heavy front-end 3D/WebGL and canvas animation — a landing "selector" with two 3D-tilt cards that each portal a procedurally-modelled Three.js character, and a scroll-scrubbed 169-frame hero animation on the candidate page.
- **Problem it solves:** A premium top-of-funnel / waitlist site to explain and pitch the Career Passport product ("turn your journey into proof" — verified evidence of skills instead of keyword resumes) and split visitors into candidate vs. company journeys. It's the brand/landing layer, not the product itself.
- **Tech Stack:** TypeScript, React 19, Next.js 16 (App Router), Tailwind CSS v4 (`@tailwindcss/postcss`), Three.js (`three` ^0.184), React Three Fiber (`@react-three/fiber` v9), Drei (`@react-three/drei` v10), GSAP (declared dep), HTML5 Canvas 2D API, `next/font` (Geist / Geist Mono), `next/dynamic` (ssr:false), `next/image`, ESLint 9. No backend/runtime services.
- **My Role:** Sole author — 6/6 commits (100%), all by Archit Savaliya (architsavaliya175@gmail.com). Single-contributor build over ~2 days (Jun 11–12), AI-assisted (Claude Code / Copilot workflow evident from CLAUDE.md and AGENTS.md).
- **Architecture:** Front-end-only Next.js App Router monolith — no API routes, no server actions, no database. Pages under `app/` (`page.tsx` landing, `candidate/`, plus `companies/`, `about/`, `waitlist-confirmed/` which are still empty stubs). UI split into `components/` and `components/sections/`. All WebGL/canvas components are `'use client'` and dynamically imported with `{ ssr: false }`. A single shared `<Canvas>` (`CharacterCanvas`) uses Drei's `View.Port` pattern so multiple per-card `View` viewports render into one WebGL context. `skills/` and `website_components/` hold design-rule and copy spec text files (prompt artifacts), not runtime code.
- **Key Features Built:**
  - `Character3D.tsx`: two fully procedural chibi characters (student, company) modelled entirely from Three.js primitives (spheres, capsules, RoundedBox, torus) — faces, hair, glasses, suit/jacket, backpack straps, resume/tablet props — with per-frame mouse-parallax via module-level global mouse tracking + `useFrame` lerp, `Float` idle bob, and shared lighting.
  - Shared-canvas `View.Port` rendering: one WebGL context portalled into multiple card viewports to sidestep the browser's dual-context limit.
  - `CandidateHero.tsx`: scroll-scrub cinematic hero — fetches frame count from `hero-frames/manifest.json`, preloads all 169 JPG frames, maps scroll progress to frame index, and decouples scroll from paint via a continuous `requestAnimationFrame` loop that lerps toward the target frame (snap for small diffs, 25%/tick catch-up for fast scroll); DPR capped at 1.5, cover-fit `drawImage`, manual scroll-restoration reset, and a click-to-play 4500ms auto-scroll.
  - `LandingSelector.tsx`: hand-rolled 3D-tilt/parallax cards (perspective rotateX/rotateY from pointer position, mouse-follow glow, layered z-stack "break-out" frame illusion), responsive card-dimension scaling hook, touch-device detection to disable tilt, and inline SVG character fallbacks.
  - `ToggleNav.tsx`: context-aware global navbar using `usePathname()` to swap the CTA ("Join Waitlist" vs "Get Early Access").
  - Design system encoded as rules (dark #070b14 base, dusty-rose accent, Geist fonts) in CLAUDE.md / `skills/premium_ui_architect.mmd` / `website_components/`.
- **ML/AI Details:** Not applicable. "AI-powered" is product marketing copy only — there is no model, dataset, or inference code in the repo. (The build process itself was AI-assisted via Claude Code, but that's tooling, not a shipped ML feature.)
- **APIs / Integrations:** None. No third-party SDKs, auth, payment, analytics, or LLM APIs are imported. The only network calls are same-origin `fetch` of a static `manifest.json` and image assets. `WaitlistForm.tsx` is a stub with no submit backend.
- **Database / Storage:** None. No ORM, schema, or DB connection. Persistence is limited to static assets in `public/` (169 hero JPG frames + manifest, an MP4 source video, SVGs, PNGs).
- **Complexity Level:** Medium — no backend/DB/auth, but non-trivial front-end engineering: real-time WebGL scene graph, shared-context `View.Port` rendering, and a performance-tuned scroll-scrub canvas animation with a decoupled rAF/lerp loop and DPR management.
- **Commits & Activity:** Low volume, short burst — 6 commits, single contributor (Archit, sole author), active window ~2 days (Jun 11–12). Commit messages track incremental UI work ("update landing page and candidate page", "animation start's on cliking", "solved error in npm run build"). Project is early/in-progress: several pages and the waitlist form are still empty stubs.
- **Resume Bullet:** Built a cinematic Next.js 16 / React 19 marketing site for an AI career-intelligence product, engineering a shared-context React Three Fiber scene (two procedurally-modelled 3D characters via Drei `View.Port`) and a performance-tuned 169-frame scroll-scrub canvas hero with a decoupled requestAnimationFrame lerp loop and DPR-capped rendering.
- **Potential Interview Questions:**
  1. In `Character3D.tsx` you render multiple per-card `View` viewports through one shared `CharacterCanvas` using Drei's `View.Port`. Why one Canvas instead of one per card, and what browser limitation does that avoid?
  2. Your scroll animation in `CandidateHero.tsx` doesn't draw inside the scroll handler — the scroll listener only writes `lastFrameRef` and a separate `requestAnimationFrame` loop lerps toward it (snap when `|diff| ≤ 2`, else `+= diff * 0.25`). Walk me through why you decoupled input from rendering and what that fixes on fast trackpad scrolls.
  3. You preload all 169 frames up front and cap DPR at `Math.min(devicePixelRatio, 1.5)` with a cover-fit `drawImage`. What are the memory/perf trade-offs of full-preload, and how would you scale this to a much longer sequence?
  4. Global mouse state lives at module level (`_mouse`) with a single window listener, and characters lerp toward it in `useFrame`. Why put the listener outside the component, and what would go wrong if you registered it inside each character instead?
  5. Several pages (`companies`, `about`, `waitlist-confirmed`) and `WaitlistForm` are stubs, and all 3D components are `'use client'` + `dynamic({ ssr: false })`. Why can't these render on the server, and how does that choice affect SEO, initial paint, and hydration for a marketing landing page?

### 5. Kore  `Archit-175/Kore`  — PRIVATE
- **Repo:** https://github.com/Archit-175/Kore
- **Description:** A $0-budget, online-only collaborative team workspace for a single team of under 10 people — combining Google Keep-style notes, Notion-style nested docs, Notion-style databases (table + Kanban), Excalidraw whiteboards, and WhatsApp-style team chat, all under shared projects in one mobile-responsive Next.js app.
- **Problem it solves:** Small teams juggle several paid SaaS tools (Notion, Keep, Miro, Slack) for notes, docs, boards, whiteboards, and chat. Kore folds all of them into a single self-hostable app running entirely on free tiers (Vercel Hobby + Supabase free), with real-time multi-user collaboration and live cursors, so a sub-10-person team gets an integrated workspace at zero cost.
- **Tech Stack:** TypeScript, Next.js 16 (App Router, Turbopack, React 19, Server Components + Server Actions, `proxy.ts` middleware), Tailwind CSS v4, Supabase (Postgres, Auth email/password + Google OAuth, Realtime, Storage), BlockNote (rich-text doc editor), @excalidraw/excalidraw (whiteboards), Yjs + y-protocols (CRDT / awareness) with lib0, custom Yjs provider over Supabase Realtime broadcast, PostCSS, ESLint 9, Playwright (E2E). Deployed on Vercel; Supabase CLI migrations.
- **My Role:** Sole author — 16 of 16 commits, all under his own identity (architsavaliya175@gmail.com / "Archit Savaliya"). Built the entire application solo across six sequential build phases (foundation → notes → docs → databases → whiteboards → chat/glue) over ~10 days in June 2026. This is the most sophisticated and most recent repo in the CP-family.
- **Architecture:** Monolithic Next.js App Router application, no separate backend service. Server Actions in `lib/actions/*` are the real write path and authorization boundary; a Data Access Layer (`lib/dal.ts`) enforces auth + active-membership on every render (proxy.ts middleware does only optimistic session redirects because Server Actions bypass the matcher). Supabase Postgres is the datastore with Row-Level Security on every table plus SECURITY DEFINER helper functions to avoid RLS recursion. Two distinct real-time models: (1) collaborative doc/whiteboard bodies use a hand-rolled Yjs CRDT provider (`lib/yjs/provider.ts`) over Supabase Realtime private broadcast channels — with state-vector handshake, chunking for >100KB payloads, debounced snapshotting to a `yjs_documents` bytea column, and a periodic reconcile loop to recover dropped broadcasts; (2) structured data (notes, databases, chat, comments, activity) syncs via Supabase Postgres Changes. Realtime channels are membership-authorized via RLS policies on `realtime.messages`.
- **Key Features Built:**
  - Custom Yjs-over-Supabase-Realtime CRDT provider with presence + live cursors (awareness), payload chunking, snapshot persistence (LWW), and a reconcile timer for missed-broadcast recovery.
  - Invite-gated multi-tenant auth: email-keyed pending memberships auto-activated by a Postgres signup trigger, owner/editor roles, per-team rosters, and a bootstrap RPC that solves the RLS chicken-and-egg for the first workspace.
  - Notion-style databases with flexible JSONB per-row properties (title, text, status, single/multi-select, date, person→member), multiple saved Table + Board (Kanban) views, and targeted `jsonb_set` RPCs (`db_set_cell`, `db_set_row_group`, `db_set_view_order`) so concurrent cell edits merge instead of clobbering.
  - BlockNote nested docs with slash commands, drag-reorder, `@`-mentions + backlinks, page icons, and inline embeds of databases and whiteboards inside pages.
  - Team chat: quote-replies, emoji reactions, `@member` mentions, presence, infinite scroll, edit/delete, unread badges, plus a cross-module ⌘K global search (`global_search` RPC, ILIKE across six sources, membership-gated, no extensions).
  - Google Keep-style notes board (colors, labels, pin, checklists, image attachments, archive/trash, grid/list) and a per-project activity feed + comments on pages and note cards.
- **ML/AI Details:** Not applicable — no ML/AI models or pipelines. (Development was AI-assisted per the CLAUDE.md/AGENTS.md build guides, but the product itself ships no ML.)
- **APIs / Integrations:** Supabase (Auth, Postgres, Realtime broadcast/presence, Storage buckets for attachments), Google OAuth as an auth provider, Vercel (hosting). No payment, LLM, or third-party product APIs.
- **Database / Storage:** Supabase Postgres — 26 tables across 10 migrations (profiles, workspaces, teams, memberships, team_members, projects, favorites, recents, yjs_documents, pages, page_links, notes, note_checklist_items, labels, note_labels, attachments, whiteboards, databases, database_properties, database_views, database_rows, messages, message_reactions, message_reads, comments, activity_log). RLS on every table with SECURITY DEFINER helpers and channel-authorization policies on `realtime.messages`; JSONB for flexible database cell data; bytea for Yjs snapshots; Supabase Storage (private `note-attachments` bucket) for images. High schema complexity.
- **Complexity Level:** High — multi-tenant RLS security model, two coexisting real-time systems, a bespoke CRDT sync provider, and a 26-table normalized + JSONB schema go well beyond standard CRUD.
- **Commits & Activity:** 16 commits, single contributor (Archit, sole author), active window ~June 20–30 2026. Highly structured, phase-by-phase delivery (init → 6 build phases → polish), with one merged feature-branch PR (#1, databases).
- **Resume Bullet:** Solo-built a zero-cost, real-time collaborative team workspace (Notion + Keep + Excalidraw + chat) in Next.js 16 / TypeScript / Supabase, engineering a custom Yjs-CRDT provider over Supabase Realtime broadcast (presence, live cursors, chunking, snapshot persistence) and a 26-table Postgres schema fully secured with Row-Level Security across six shipped build phases.
- **Potential Interview Questions:**
  1. Your Yjs provider (`lib/yjs/provider.ts`) buffers live updates during initial load, applies the snapshot, then flushes and issues a state-vector handshake — walk through why that ordering is necessary and what breaks if you apply live updates before the snapshot.
  2. You persist Yjs docs as a single last-writer-wins bytea snapshot (`save_yjs_snapshot`) rather than an append-only update log. What are the durability/conflict trade-offs, and how does the reconcile timer + peer state-reply protect against a client that snapshotted stale state?
  3. Database cells live in one JSONB `data` blob per row, yet you route single-cell edits through `db_set_cell` / `db_set_row_group` RPCs. Why not a plain `update ... set data = ...`, and how does that choice affect concurrent edits from two members on the same row?
  4. You state proxy.ts is "optimistic only" and the DAL is the real authz boundary because Server Actions bypass the middleware matcher. Explain the attack you'd have if you trusted the middleware, and how `requireMember` + RLS give you defense in depth.
  5. Your RLS uses SECURITY DEFINER helper functions (`is_workspace_member`, etc.) specifically to avoid policy recursion, and you gate Realtime broadcast/presence channels via policies on `realtime.messages` keyed off `split_part(realtime.topic(), ':', 2)`. Walk through how a malicious member is prevented from subscribing to another workspace's doc channel.

### 6. EEG-Emotion-Recognition-RL  `Archit-175/EEG-Emotion-Recognition-RL`  — PUBLIC
- **Repo:** https://github.com/Archit-175/EEG-Emotion-Recognition-RL
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A research codebase (NeuroRL) that recognizes human emotions from raw EEG brain signals by framing classification as a reinforcement-learning problem. An agent observes EEG-derived features as "states," predicts emotions as "actions," and is trained with a time-dependent reward under a Double Dueling Deep Q-Network (D3QN), layered with domain-adaptation and a hierarchical adaptive-RL extension to work across people without per-user calibration.
- **Problem it solves:** Most EEG emotion-recognition/BCI systems need subject-specific calibration before they work on a new person, which blocks real-world deployment. This project targets **calibration-free, subject-independent** emotion recognition — a model that generalizes across unseen subjects and even across datasets, so a brain-computer interface could be used out-of-the-box.
- **Tech Stack:** Python 3.10, PyTorch (nn, autograd custom `Function`, Adam/AdamW, CosineAnnealingLR, TransformerEncoder), NumPy, SciPy (`scipy.signal` Butterworth bandpass + `filtfilt`, `scipy.linalg`, `scipy.io.loadmat`), scikit-learn (`StratifiedKFold`, `accuracy_score`), Matplotlib. No package manifest/requirements file, Dockerfile, or DB — scripts are structured as Kaggle/GPU notebook cells. Datasets: DEAP (`.dat` pickles) and SEED-IV (`.mat` DE features).
- **My Role:** Sole human author — **8 of 9 commits** across all branches (`architsavaliya175@gmail.com` / "Archit Savaliya" / "Archit-175"). The remaining 1 commit is `copilot-swe-agent[bot]` (his own AI-assisted repo reorganization), not a human teammate. README credits three people (Divya Jaisansariya, Shashank Maurya, Archit Savaliya) as academic authors, but in git history Archit is the only committer. Not a fork/mirror — original repo.
- **Architecture:** Research-style monorepo organized into 4 experimental **phases**, each a self-contained PyTorch pipeline: signal preprocessing → feature extraction (CNN or GCN+Transformer) → RL agent → training/eval loop, with results plotted per phase. Phase 1: subject-dependent DEAP validation. Phase 2: LOSO baseline (the `loso_baseline.py` file is committed but **empty/placeholder — 0 bytes**). Phase 2-refined: multi-technique domain adaptation. Phase 3: SEED-IV with the HARL extension. No frontend, no backend, no database — pure offline ML research code plus a paper (`paper/research_paper.pdf`) and result images.
- **Key Features Built:**
  - **BiFRCNN feature extractor** — a bi-hemispheric, frontal-region CNN with 4 parallel `StreamEncoder`s (left/right hemisphere + left/right frontal, split by DEAP 10-20 electrode indices), custom `ResidualBlock`s with dual skip connections, adaptive pooling, then fused into left/right representations.
  - **Double Dueling DQN (D3QN/FLD3QN) agent** — dueling value/advantage heads (`Q = V + A - mean(A)`), Double-DQN target (online net selects action, target net evaluates), experience `ReplayBuffer` (100k–200k), ε-greedy action selection, gradient clipping, periodic hard target-net sync, checkpoint save/resume.
  - **RL-as-classification MDP** — state = EEG window/DE features, action = emotion label, reward `+1` if correct else `-1 - λ/t` (λ=0.1) with episode termination on first mistake, γ=0.75.
  - **Multi-level domain adaptation** (phase 2-refined) — Euclidean Alignment via `R^{-1/2}` eigendecomposition of mean covariance; **CORAL loss** (Frobenius norm of source/target covariance gap); **DANN** with a custom `GradientReversal` autograd function + subject-classifier head; **Squeeze-and-Excitation** channel attention; subject-balanced batch sampler; multi-task dual valence/arousal heads.
  - **Differential Entropy feature engineering** — Butterworth bandpass across 5 EEG bands (delta/theta/alpha/beta/gamma), `0.5*log(2πe·var)` per channel/band.
  - **HARL (phase 3, SEED-IV)** — hybrid **Spatial GCN** (KNN electrode adjacency, symmetric-normalized Laplacian) + **Band-Transformer** encoder, plus a **PPO actor** (`RLSampleWeightPolicy`, Normal policy over per-sample CE weights) that dynamically scales DANN/CORAL strength; `DomainGapEstimator` producing a cosine-space gap signal; separate supervised/RL optimizers; PPO clipped surrogate with entropy bonus; leakage-safe target centroid from a label-free calibration split.
- **ML/AI Details:** Deep RL for EEG emotion classification. **Models:** BiFRCNN + D3QN (DEAP), GCN+Transformer + PPO-driven HARL (SEED-IV). **Datasets:** DEAP (32 subjects, 32ch @128Hz, 1-sec windows, valence/arousal binarized at rating>5) and SEED-IV (62ch DE features, 3 sessions, 4 classes: neutral/happy/fear/sad). **Hyperparameters:** lr 2.5e-4 (DQN) / 3e-4 sup + 3e-5 RL (HARL), γ=0.75, ε=0.1–0.15, batch 32–128, PPO clip 0.2, entropy coef 0.01, reward penalty λ=0.1, HARL reward `-CE + 0.2(1-gap)`. **Metrics (corroborated by committed training logs):** Phase 1 subject-dependent ~88%; Phase 2 LOSO Valence 54.52% / Arousal 56.03%; Phase 2-refined Valence 56.22% / Arousal 58.78%; Phase 3 SEED-IV 4-class 36.03% (vs 25% chance). **Training:** 10-fold StratifiedKFold (phase 1), Leave-One-Subject-Out (phases 2–3), reproducibility seed 42, GPU.
- **APIs / Integrations:** None — no third-party web APIs, auth, cloud, or LLM services. Runs standalone on Kaggle-style GPU notebooks against local dataset files.
- **Database / Storage:** None — no DB/ORM. Data comes from DEAP `.dat` pickles and SEED-IV `.mat` files; artifacts are PyTorch `.pth` checkpoints and PNG/JPG result plots on the local/Kaggle filesystem.
- **Complexity Level:** High — custom RL agents (Double-Dueling DQN and PPO), a multi-stream CNN and a GCN+Transformer backbone, three stacked domain-adaptation techniques with a custom gradient-reversal autograd op, DSP feature engineering, and rigorous LOSO cross-subject evaluation. (Caveat: it's offline research code, not a deployed service, and one phase file is an empty placeholder.)
- **Commits & Activity:** Low-volume, short burst — 9 total commits, sole human contributor (Archit), authored around April–May 2026; activity is a focused research push (initial commit → paper upload → repo reorganization → README polish) rather than sustained ongoing development.
- **Resume Bullet:** Built NeuroRL, a calibration-free subject-independent EEG emotion-recognition framework in PyTorch, implementing a Double Dueling DQN over a bi-hemispheric CNN plus a PPO-driven hierarchical adaptive-RL variant with Euclidean-Alignment/CORAL/DANN domain adaptation, evaluated LOSO on DEAP and SEED-IV (up to ~88% subject-dependent; 56–59% cross-subject valence/arousal).
- **Potential Interview Questions:**
  1. You frame emotion classification as an RL problem with reward `+1`/`-1-λ/t` and terminate the episode on the first wrong prediction — why use D3QN here instead of plain supervised cross-entropy, and what does the discount factor γ=0.75 actually buy you when "next state" is just the next EEG window?
  2. Walk through your Double-Dueling DQN in `BiFRCNN.forward`: how does splitting value and advantage streams (`Q = V + A - A.mean()`) help, and why does the Double-DQN target (online net selects, target net evaluates) reduce overestimation?
  3. In phase 2-refined you stack Euclidean Alignment, CORAL, and DANN — what distribution shift does each one address, and how did you implement the `GradientReversal` autograd `Function` and weight the DANN/CORAL losses (λ=0.1) against the TD loss?
  4. Phase 3's HARL uses a PPO actor to output a per-sample CE weight and then scales λ_dann/λ_coral by the batch's mean weight — what's the intuition, and how does FIX-1 (evaluating the OLD action under the NEW policy) and the entropy bonus keep the PPO update correct and stable?
  5. Cross-subject accuracy (54–59% on DEAP, 36% on SEED-IV) is far below the ~88% subject-dependent baseline in your logs — how much of the gap is fundamental to calibration-free EEG, how did your leakage-safe calibration-split centroid (FIX-4) and LOSO protocol prevent inflating results, and what would you try next to close it?

### 7. KidneyTumorSegmentation-ARUGD  `Archit-175/KidneyTumorSegmentation-ARUGD`  — PUBLIC
- **Repo:** https://github.com/Archit-175/KidneyTumorSegmentation-ARUGD
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A deep-learning pipeline for multi-class kidney CT segmentation with built-in uncertainty quantification. It trains an Attention Residual U-Net with Guided Decoder (ARU-GD) on the KiTS23 dataset to segment each CT slice into background / kidney / tumor / cyst, then uses Monte Carlo Dropout at inference to produce both the segmentation mask and a per-pixel predictive-entropy uncertainty map.
- **Problem it solves:** Automated delineation of kidney, tumor, and cyst regions from CT scans to assist radiologists in diagnosis, surgical planning, and tumor characterization. Crucially, it adds calibrated uncertainty maps so clinicians can see *where* the model is unsure (e.g. ambiguous tumor boundaries), which is essential for safe use of AI in medical imaging.
- **Tech Stack:** Python, TensorFlow / Keras (functional API), NumPy, h5py (HDF5 datasets), Matplotlib. Model built from raw Keras layers (Conv2D, Conv2DTranspose, BatchNorm, LeakyReLU, attention gates); trained with the Adam optimizer, ImageDataGenerator augmentation, and a `tf.data` input pipeline. Targets an NVIDIA H100 NVL GPU with explicit logical-device memory capping. No repo-level pinned versions (requirements.txt lists only the 4 top-level packages, unversioned).
- **My Role:** Sole human author — 3 of 5 commits (`architsavaliya175@gmail.com` / "Archit Savaliya"). The other 2 commits are from `copilot-swe-agent[bot]`, an AI assistant that restructured the repo and added configurable paths/docs (Archit's own AI-assisted work, merged via PR #1), not a human teammate. Archit authored the core `train.py` and `predict.py` and the model design; the bot only refactored file layout and CLI/env-var path handling.
- **Architecture:** Single-purpose ML research pipeline, not a web app. Two entry-point scripts: `train.py` (data loading + model definition + training) and `predict.py` (MC-Dropout inference + metrics + visualization). Data is stored as pre-processed HDF5 shards (`train_data.h5` / `valid_data.h5` / `test_data.h5`) loaded fully into RAM, then fed through `tf.data` with on-the-fly augmentation. The model is a 4-level encoder–decoder: a residual encoder (64→128→256→512 filters with dilated convs and a 1024-filter bottleneck), and a decoder with attention gates at each skip connection plus a **guided decoder** producing 4 softmax outputs (`final_output`, `out_3`, `out_2`, `out_1`) that are deep-supervised. Paths are configurable via CLI flags / env vars; a research paper (`paper.pdf`) and an architecture SVG accompany the code.
- **Key Features Built:**
  - Attention Residual U-Net with Guided Decoder (ARU-GD): residual blocks with L2-regularized dilated convolutions, 2D attention gates on every skip connection, and deep supervision via 3 auxiliary softmax heads (loss-weighted 0.25 each vs. 1.0 for the main head).
  - Monte Carlo Dropout for uncertainty estimation: custom `MonteCarloDropout` layer that stays active at inference; `predict.py` runs T=50 stochastic forward passes, averages the softmax, and computes normalized predictive entropy as a per-pixel uncertainty map (green→yellow→red visualization).
  - Class-imbalance-aware composite loss: `gen_dice_loss` = weighted Dice loss + weighted categorical log loss, using a class-weight vector `[0.5, 1.0, 3.0, 2.0]` that up-weights the small/hard tumor and cyst classes.
  - `tf.data` training pipeline with seed-synchronized image/mask augmentation (rotation, flips, shifts, shear, zoom) via `tf.py_function`-wrapped Keras `ImageDataGenerator`, plus multi-output label broadcasting for the 4 supervised heads.
  - Full evaluation + reporting: per-class Dice, IoU, and pixel accuracy in NumPy, timestamped text summaries, and 4-panel qualitative figures (input / ground truth / predicted overlay / uncertainty) saved per sample.
  - Hardware-aware GPU memory management: computes a logical-device memory cap from a shard-count-to-total-GPU-memory ratio for an H100 NVL (94 GB) to fit shard allocation.
- **ML/AI Details:** Model = ARU-GD (Attention Residual U-Net with Guided Decoder) + Monte Carlo Dropout. Dataset = KiTS23 (Kidney Tumor Segmentation Challenge 2023), 4 classes (background, kidney, tumor, cyst), input 256×320×1 grayscale slices, one-hot targets. Training: Adam @ lr=1e-4, batch size 16, 100 epochs, dropout 0.2, best-model checkpointing on val loss. Reported test metrics (from README): Kidney Dice 0.837 / IoU 0.776, Tumor Dice 0.691 / IoU 0.665, Cyst Dice 0.824 / IoU 0.813; mean foreground Dice ≈ 0.831, mean foreground IoU ≈ 0.813.
- **APIs / Integrations:** None. No external web services, cloud SDKs, or third-party APIs — purely local TensorFlow training and inference on HDF5 files.
- **Database / Storage:** No database. Storage is file-based: HDF5 (`.h5`) datasets read via h5py, a saved Keras model (`.h5`), and outputs written as `.jpg` figures and `.txt` evaluation summaries. Effectively zero schema complexity.
- **Complexity Level:** High — a non-trivial custom segmentation architecture (attention gates + residual blocks + guided/deep supervision), Bayesian-style uncertainty via MC Dropout, a bespoke class-weighted composite loss, and a hand-built `tf.data` augmentation pipeline for medical imaging.
- **Commits & Activity:** Low-volume, bursty. 5 commits total in a single active window (May 2026); 1 human contributor (Archit) plus 1 AI-assistant bot. Appears to be a compact research/paper artifact (accompanied by `paper.pdf`) rather than an actively maintained product.
- **Resume Bullet:** Built an Attention Residual U-Net with Guided Decoder (ARU-GD) in TensorFlow/Keras for multi-class kidney CT segmentation on KiTS23, adding Monte Carlo Dropout uncertainty maps and a class-weighted Dice + log-loss objective to reach ~0.83 mean foreground Dice across kidney, tumor, and cyst classes.
- **Potential Interview Questions:**
  1. Your `attention_block2d` gates each encoder skip connection using the coarser decoder feature map as the gating signal — walk me through the theta/phi/psi convolutions and how the resulting sigmoid attention map is upsampled and multiplied back onto the skip features. Why attention gates over plain concatenation?
  2. The model emits four softmax outputs (`final_output`, `out_1/2/3`) with loss weights 1.0 / 0.25 / 0.25 / 0.25. What is the "guided decoder" / deep supervision doing here, and how would training dynamics and final accuracy change if you dropped the auxiliary heads?
  3. Your `gen_dice_loss` combines a weighted Dice loss with a weighted categorical log loss and a class-weight vector `[0.5, 1.0, 3.0, 2.0]`. How did you choose those weights, and how do the Dice and log-loss terms interact for the heavily imbalanced tumor/cyst classes?
  4. In `predict.py` you run T=50 forward passes with dropout forced on, then use normalized predictive entropy as the uncertainty signal. Why entropy of the mean rather than, say, mutual information (epistemic vs. aleatoric), and how would you validate that these uncertainty maps are actually calibrated?
  5. `train.py` loads the entire KiTS23 HDF5 set into RAM and caps GPU memory via a shard-count ratio for an H100 NVL. What are the scaling limits of full-in-memory loading, and how would you re-architect the input pipeline (and move toward the README's stated 3D extension) without blowing past memory?

### 8. Financial-Sentiment-Analysis-  `Archit-175/Financial-Sentiment-Analysis-`  — PUBLIC
- **Repo:** https://github.com/Archit-175/Financial-Sentiment-Analysis-
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A stock-market analysis project that fuses financial news sentiment with technical indicators to predict a stock's next-day return. A Colab/Jupyter notebook builds the dataset (pulling price data via yfinance and news headlines via RSS/feedparser, scoring sentiment with a HuggingFace transformer) and engineers technical features; a trained XGBoost regressor is then served through a Streamlit web app where a user enters RSI/ROC/Volume and gets a predicted next-day return plus a Plotly price-trajectory chart.
- **Problem it solves:** Traders/analysts want a quick, quantitative read on whether a stock is likely to move up or down the next day, combining "hard" momentum signals (RSI, ROC, moving averages) with "soft" market sentiment from news headlines — instead of eyeballing charts and reading articles manually.
- **Tech Stack:** Python; Jupyter/Google Colab; pandas, NumPy; scikit-learn (`IterativeImputer`/`enable_iterative_imputer`, `train_test_split`, metrics); XGBoost (`XGBRegressor`, persisted as `stock_model.pkl` / `model.pkl` via pickle); HuggingFace `transformers` + PyTorch (`torch`) for news sentiment; `yfinance` for OHLCV price data; `feedparser` for news RSS ingestion; matplotlib, seaborn, Plotly (`plotly.graph_objects`) for visualization; Streamlit for the web UI. Data stored as CSV. No README, requirements.txt, or Dockerfile present.
- **My Role:** Co-author on a 2-person team. Archit Savaliya = 8 of 19 commits (~42%); Vanishka Karkera = 11. Active window Jan 17 – Feb 9 2025. Archit's commits include the dataset uploads and the folder reorganizations (`old/`, `new/`, `newnew/`); the notebook itself hard-codes "User: Archit-175" in the Streamlit analysis annotations. Genuine co-author, not sole builder.
- **Architecture:** Two loosely-coupled layers, no backend server or database. (1) Offline ML pipeline in `CEV1.ipynb`: ingest prices (yfinance) + news (feedparser) → transformer sentiment scoring → feature engineering (RSI, ROC, EMA, Moving_Avg, Rolling_Std_Dev, Daily_Return, Sentiment_Score/Numeric) → multivariate `IterativeImputer` to fill missing indicators → correlation analysis (Pearson/Spearman) → XGBoost training → pickle. (2) A Streamlit presentation layer that loads the pickled model (`utils/model_utils.py`: `load_model`/`prepare_features`/`make_prediction`, cached with `@st.cache_resource`) and renders an interactive analysis page. The repo shows clear iteration: `old/` (multi-page app: home/overview/analysis with sidebar nav), then `newnew/` (refactored two-column layout with input validation and richer Plotly charts). Model handoff between notebook and app is via a pickle file, not a live API.
- **Key Features Built:**
  - News-sentiment feature pipeline: HuggingFace transformer scores headlines pulled via `feedparser`, producing `Sentiment_Score` / `Sentiment_Numeric` columns merged with price data.
  - Technical-indicator feature engineering from OHLCV: RSI, ROC, EMA, moving average, rolling std-dev, daily return.
  - Multivariate imputation of missing indicators using scikit-learn `IterativeImputer` (MICE-style, `max_iter=10`, `random_state=42`).
  - Feature-target correlation analysis (Pearson + Spearman) with bar-chart visualization to vet predictors against `Next_Day_Return`.
  - XGBoost regression model predicting next-day return, serialized to `stock_model.pkl`.
  - Streamlit interactive app: date/RSI/ROC/Volume inputs, input validation and error handling, session-state persistence, and a Plotly current-vs-predicted price trajectory chart projecting the return forward 10 days.
- **ML/AI Details:** Two AI components. (a) Sentiment: pretrained HuggingFace transformer (via `transformers`+`torch`) applied to financial news headlines. (b) Prediction: XGBoost `XGBRegressor` (confirmed by inspecting the pickle's class references — `xgboost.sklearn`/`XGBRegressor`) doing regression on `Next_Day_Return`. Dataset ~501 rows, TSLA-centric (`updated_stock_sentiment_analysis_123.csv`), 14 numeric features. The served app feeds only 3 features (RSI, ROC, Volume) to the model. No accuracy/RMSE/R² is recorded in the notebook — it ends at the imputation step, and the recorded feature-target correlations are all weak (Pearson ≤ 0.07, Spearman ≤ 0.09), a real signal that next-day return is hard to predict from these features.
- **APIs / Integrations:** Yahoo Finance via `yfinance` (price data); news RSS feeds via `feedparser`; HuggingFace model hub via `transformers`. No auth, payment, or cloud provider APIs.
- **Database / Storage:** No database. Storage is flat files: CSV datasets (raw + imputed) and a pickled model artifact (`.pkl`). Trivial schema complexity.
- **Complexity Level:** Medium — a real end-to-end NLP-plus-ML pipeline (news sentiment + technical indicators + imputation + XGBoost) with a Streamlit front end, but single-machine, no backend/DB/auth, small dataset, and no evaluation or retraining loop.
- **Commits & Activity:** 19 commits, 2 contributors (Archit 8, Vanishka 11), short burst Jan 17 – Feb 9 2025. Development style is upload-and-rename heavy ("Add files via upload", folder shuffles `old`→`new`→`newnew`) rather than incremental code diffs, typical of notebook/Colab-driven work.
- **Resume Bullet:** Co-built a financial next-day-return predictor combining HuggingFace transformer news-sentiment scoring with engineered technical indicators (RSI, ROC, EMA), applied scikit-learn multivariate imputation, trained an XGBoost regressor, and shipped an interactive Streamlit + Plotly app for live what-if predictions (2-person team, ~42% of commits).
- **Potential Interview Questions:**
  1. Your notebook engineers ~14 features but the deployed Streamlit app only passes RSI, ROC, and Volume to the XGBoost model — how did you decide which features the served model actually uses, and does that mismatch risk the app feeding the model a different feature schema than it was trained on?
  2. The Pearson/Spearman correlations between every feature and `Next_Day_Return` are all below ~0.09. Given signals that weak, how would you validate that the XGBoost regressor is doing better than a naive baseline, and what evaluation metrics (RMSE, directional accuracy) would you have added?
  3. You used `IterativeImputer` (MICE) to fill Moving_Avg/RSI/ROC before training. Why multivariate imputation over forward-fill or dropping rows for time-series stock data, and how did you avoid leakage of future information into past rows during imputation?
  4. The transformer-based sentiment scoring happens offline in the notebook, but the Streamlit app takes manual numeric inputs and never re-runs sentiment. How would you re-architect this so a user could enter a ticker and get a live prediction with fresh news sentiment end to end?
  5. The model is shipped as a pickle loaded at app startup and the dataset is a single ~501-row TSLA-heavy CSV. What are the risks of pickle-based model serving and single-stock training data, and how would you productionize this (model registry, per-ticker generalization, retraining) for real use?

### 9. pneumonia-detection  `Archit-175/pneumonia-detection`  — PUBLIC
- **Repo:** https://github.com/Archit-175/pneumonia-detection
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A notebook-based deep learning project that classifies chest X-ray images as **Pneumonia** or **Normal** using a custom convolutional neural network (CNN). Ships an end-to-end Colab notebook, a trained model checkpoint (`best_model.keras`), and a written project report.
- **Problem it solves:** Automated triage/screening aid for pneumonia detection from chest radiographs — a binary medical-imaging classification task meant to demonstrate CV/deep-learning on a real clinical dataset (explicitly educational, not for clinical diagnosis per the README disclaimer).
- **Tech Stack:** Python, Jupyter/Google Colab, TensorFlow/Keras (Sequential CNN API), OpenCV (`cv2`) for image loading/resizing, NumPy, pandas, scikit-learn (metrics + `train_test_split`), Matplotlib, Seaborn. Data pulled from Google Drive (`google.colab.drive`). Model persisted in `.keras` format.
- **My Role:** Co-author / leading contributor on a small team. Archit has the most human commits: **4 of 10** total (git shortlog: Archit 4, copilot-swe-agent[bot] 3 = his AI-assisted README work, Diya5772 1, Harshvardhan 1, Hitarth 1). His commits include the file uploads and the README/overview work; core model-training code was committed by Harshvardhan Gupta and Diya5772. Note: `Archit-175/pneumonia-detection` is a **fork of `Diya5772/pneumonia-detection`** (identical content).
- **Architecture:** Single-notebook ML pipeline (no frontend/backend/service layer). Flow: mount Google Drive → unzip `chest_xray.zip` → load grayscale images with OpenCV and resize to 150x150 → normalize to [0,1] and reshape to `(N,150,150,1)` → `ImageDataGenerator` augmentation → train custom 5-block CNN → checkpoint best model → evaluate on held-out test set with plots and metrics.
- **Key Features Built:**
  - Image ingestion pipeline reading PNEUMONIA/NORMAL folders via OpenCV, skipping invalid files (e.g. `.DS_Store`), returning NumPy arrays.
  - Preprocessing: grayscale, resize to 150x150, pixel normalization, channel-dim reshape for CNN input.
  - Data augmentation with `ImageDataGenerator` (rotation 20, width/height shift 0.2, shear 0.2, zoom 0.2, horizontal flip, `fill_mode='nearest'`).
  - Custom CNN: 5 Conv2D blocks (32→64→128→256→512) each with BatchNormalization + MaxPooling, Dropout (0.2, 0.3), Flatten → Dense(256) → Dense(1, sigmoid); ~4.85M params.
  - Training with RMSprop + binary cross-entropy, batch size 16, 25 epochs, and callbacks: `ReduceLROnPlateau` (monitor val_accuracy), `ModelCheckpoint` (save best), `EarlyStopping` (monitor loss, restore best weights).
  - Full evaluation suite: accuracy, precision, recall, F1, ROC-AUC, confusion matrix, and train/val accuracy & loss learning curves; class-balance countplot (dataset is pneumonia-skewed).
- **ML/AI Details:** Custom 5-block CNN (~4.85M params) on the Kaggle Chest X-Ray Pneumonia dataset (train 5,216 / test 624 / val 640 images; note the notebook concatenates the test set into val). Input 150x150x1 grayscale, RMSprop + binary cross-entropy. **Reported test results: accuracy 93.11%, precision 0.917, recall 0.897, F1 0.907, ROC-AUC 0.972, confusion matrix [[371,19],[24,210]].** Best epoch (21) restored via EarlyStopping.
- **APIs / Integrations:** None (external SaaS/paid APIs). Only Google Colab/Google Drive for runtime and data storage.
- **Database / Storage:** No database. Storage is filesystem/Google Drive: a zipped image dataset (`chest_xray.zip`) and a serialized Keras model (`best_model.keras`).
- **Complexity Level:** Medium — a complete, working CNN training/evaluation pipeline with augmentation, callbacks and full metrics, but a single-notebook learning/portfolio project with no serving layer, API, database, or app around it.
- **Commits & Activity:** Small team of 4 humans + AI assistant; 10 commits total. Active window roughly **Mar 2025 → May 2026** (model code Apr 2025, uploads May 2025, code tweaks Sep 2025, README/polish May 2026). Low-volume, bursty activity typical of a coursework/mini-project.
- **Resume Bullet:** Co-built a chest X-ray pneumonia classifier training a custom 5-block CNN (~4.85M params, TensorFlow/Keras) on ~6,500 radiographs with OpenCV preprocessing and data augmentation, reaching **93% test accuracy and 0.97 ROC-AUC**, with checkpointing, LR scheduling and early stopping.
- **Potential Interview Questions:**
  1. Your notebook does `val = np.concatenate((val, test))`, so the test set is also inside validation — how does that leak evaluation data into model selection (ModelCheckpoint/ReduceLROnPlateau monitor val_accuracy), and how would you fix the split?
  2. The dataset is heavily skewed toward PNEUMONIA (your countplot shows this). Why is raw accuracy misleading here, and how would you handle class imbalance (class weights, resampling, threshold tuning) given recall matters for a medical screen?
  3. Val accuracy swings wildly early on (e.g. val_loss ~62 in epoch 1, drops to ~50% at epoch 12) while train accuracy stays high — what causes this instability with RMSprop + BatchNorm, and would Adam or a lower initial LR help?
  4. You classify at a fixed 0.5 threshold (`y_pred > 0.5`). For pneumonia screening, how would you choose the operating point using the ROC/precision-recall curve to trade off false negatives vs false positives?
  5. Walk through why you chose grayscale 150x150 input and a from-scratch CNN instead of transfer learning (e.g. ResNet/DenseNet pretrained on ImageNet) — what are the trade-offs in data efficiency and final accuracy?

### 10. Convolve  `Archit-175/Convolve`  — PUBLIC
- **Repo:** https://github.com/Archit-175/Convolve
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A behaviour-scoring (credit-risk) ML project built for the Convolve 3.0 Pan-IIT AI/ML Hackathon by team "deepdblm" (Deep Das, Nilang Bhuva, Archit Savaliya, SVNIT). It predicts the probability that an existing credit-card customer will default (`bad_flag`) from anonymised, high-dimensional financial behaviour data, using a 1D-convolutional deep neural network.
- **Problem it solves:** Behavioural credit scoring for a lender — flag high-risk cardholders before they default so the institution can act on risk management. The scoring threshold is deliberately lowered to 0.4 (from the usual 0.5) to bias toward catching defaulters (higher recall on the minority class).
- **Tech Stack:** Python (Jupyter notebooks), TensorFlow / Keras (Sequential API, Conv1D, Dense, Dropout, BatchNormalization, Flatten, Adam, EarlyStopping, custom `f1_m` Keras-backend metric), scikit-learn (SimpleImputer, StandardScaler, train_test_split, KMeans, classification_report/f1_score/accuracy_score), imbalanced-learn (SMOTETomek), pandas, numpy, matplotlib, seaborn, joblib (persisting scaler/imputer as .pkl and model as .h5). Large datasets tracked via Git LFS. No web/app framework — this is a pure data-science / notebook repo.
- **My Role:** Minor contributor (3 of 17 commits ≈ 18%). This is a fork of the upstream `Nilangbhuva/Convolve`; Nilang Bhuva is the lead (~14 commits across two identities). Archit's authored commits are the detailed project README and two "Add files via upload" commits — i.e. documentation and asset/data uploads rather than the core model code. Genuine team member on a 3-person hackathon squad; the modelling was largely driven by the lead per git history.
- **Architecture:** Single-repo, notebook-driven ML pipeline (no services, no backend). Flow: load ~96.8k-row dev CSV → drop `account_number` and columns with >80% missing → `SimpleImputer(mean)` → `SMOTETomek(sampling_strategy=0.5)` to rebalance the default class → `StandardScaler` → reshape to `(features, 1)` for Conv1D → train Keras model with EarlyStopping → persist model + scaler + imputer via joblib → reload and score the 41.8k-row validation set, writing `Validation_results.csv` with per-account probability and thresholded `bad_flag`. A second, separate analysis track runs KMeans (k=4) customer segmentation plus ~15 hand-engineered behavioural indices (spending elasticity, financial-stress score, credit-overextension risk, inquiry-load risk zones, etc.) for EDA insights. Two notebooks: `Convolve.ipynb` (early EDA) and `convolveNew.ipynb` (the real model + scoring + segmentation).
- **Key Features Built:**
  - Preprocessing pipeline for ~1,200 anonymised features (48 on-us, 664 transaction, 452 bureau tradeline, 50 bureau-enquiry attributes): high-missingness column drop + mean imputation + standardization.
  - Class-imbalance handling with SMOTETomek (combined over/under-sampling) targeting a 0.5 minority ratio.
  - Custom 1D-CNN classifier: two `Conv1D(64, kernel=3, relu)` blocks each with BatchNorm + Dropout(0.5), Flatten, dense stack 64→32→16 (Dropout 0.4), sigmoid output; Adam (lr 0.0005 in code) + binary crossentropy + custom Keras F1 metric + EarlyStopping(patience=10, restore_best_weights).
  - Risk-tuned inference: reloads saved `.h5` model + `.pkl` scaler/imputer, aligns validation columns via `reindex`, and classifies at a conservative 0.4 probability threshold, exporting account-level scores.
  - EDA / segmentation layer: KMeans customer clustering and a battery of engineered financial-behaviour risk metrics with matplotlib/seaborn visualisations.
- **ML/AI Details:** 1D Convolutional Neural Network (Keras Sequential) for binary default classification. Dataset: proprietary hackathon credit dataset — 96,806 dev records / 41,792 validation records, ~1,214 features across on-us, transaction, bureau-tradeline and bureau-enquiry groups; target `bad_flag`. Training: SMOTETomek-balanced, standardized, 80/20 split, up to 100 epochs with early stopping. Best run in the notebook outputs reports accuracy ≈ 0.96, weighted F1 ≈ 0.96, macro recall ≈ 0.94 on the ~28.6k held-out balanced test set (README cites defaulter recall ≈ 0.90). Note the repo also contains earlier/failed runs (one collapsed to 0.33 accuracy with zero loss), showing iteration. Inference threshold 0.4 to prioritise catching defaulters.
- **APIs / Integrations:** None. No third-party APIs, auth, or cloud SDKs — purely local Python ML libraries. (Git LFS used only for large-file storage of the CSVs.)
- **Database / Storage:** No database. Storage is flat CSV files (dev/validation data, ~293 MB and ~126 MB via Git LFS) plus serialized artifacts — Keras `.h5` model and joblib `.pkl` scaler/imputer, and a `Validation_results.csv` output. No schema / ORM.
- **Complexity Level:** Medium — a genuine end-to-end ML pipeline (imbalanced-data handling, a custom CNN on ~1,200 features, threshold tuning, model persistence + scoring), but a single-notebook data-science project with no service architecture, DB, auth, or deployment, and Archit's own commits are documentation/uploads rather than model code.
- **Commits & Activity:** ~17 commits, 3 contributors (Nilang Bhuva lead ~14; Archit Savaliya 3; plus one bot/AI-assisted). Fork of upstream `Nilangbhuva/Convolve`. Short, bursty hackathon-style activity window (WhatsApp image assets dated Jan 2025 point to the event timeframe). Archit's commits: the README write-up and two data/asset uploads.
- **Resume Bullet:** Contributed to a hackathon credit-risk behaviour-scoring model (team of 3, Convolve 3.0) that trained a Keras 1D-CNN on ~97k customers and ~1,200 financial features — using SMOTETomek to fix class imbalance and a risk-tuned 0.4 decision threshold — reaching ~0.96 accuracy / ~0.96 F1, and authored the project's technical documentation and data pipeline uploads.
- **Potential Interview Questions:**
  1. This is a tabular credit dataset, yet you used `Conv1D` layers over reshaped `(features, 1)` inputs — what local structure does a 1D convolution assume, and why would (or wouldn't) that be appropriate here versus a plain MLP or gradient-boosted trees (XGBoost/LightGBM)?
  2. You balanced the classes with `SMOTETomek(sampling_strategy=0.5)` before the train/test split in the code. What are the risks of resampling before splitting (data leakage into the test set), and how would you restructure the pipeline so evaluation reflects the real, imbalanced production distribution?
  3. The README states a learning rate of 0.001 but the model code compiles Adam with `learning_rate=0.0005`, and it reports 0.96 accuracy on the SMOTETomek-balanced test set — how would you defend the headline metric to a risk team, and which metric (recall on defaulters, AUC-ROC, KS statistic) actually matters for credit scoring?
  4. You chose a 0.4 classification threshold instead of 0.5 to catch more defaulters. Walk me through the precision/recall and business-cost trade-off of lowering that threshold, and how you'd pick it principally (e.g. from a precision-recall curve or expected-cost minimization) rather than by hand.
  5. One of the training runs in the notebook collapsed to ~0.33 accuracy with a loss of exactly 0.0 across all epochs — what does a zero loss with stuck accuracy usually indicate (e.g. label/target mismatch, NaNs, all-one-class predictions), and how would you have debugged it?

### 11. archit-portfolio  `Archit-175/archit-portfolio`  — PUBLIC
- **Repo:** https://github.com/Archit-175/archit-portfolio
- **Description:** A single-page, cinematic personal portfolio website for Archit Savaliya. It presents a hero section, an about/identity section, a grid of projects, a horizontally-scrolling "live demo" gallery that embeds deployed projects in fake browser frames, a leadership/positions-of-responsibility section, and a contact footer — all heavily animated with scroll-driven parallax and motion.
- **Problem it solves:** Personal branding and job/internship self-marketing. It packages an AI undergraduate's projects, publications, and leadership roles into a polished, memorable web presence with resume download and direct contact links (email/phone/GitHub/LinkedIn/Instagram).
- **Tech Stack:** TypeScript, React 19, Next.js 16 (App Router, `next/font` for Inter + Oswald Google Fonts, `next/image` optimization), Tailwind CSS v4 (via `@tailwindcss/postcss`, `@theme` inline design tokens), Framer Motion 12 (`useScroll`/`useTransform` scroll parallax, `AnimatePresence`), lucide-react + react-icons (Fa/Si) for icons, clsx + tailwind-merge utilities, ESLint 9 (eslint-config-next). Static assets include SVGs and MP4 background video. Deployed on Vercel.
- **My Role:** Sole author — 10/10 commits (100%), all under `architsavaliya175@gmail.com` / "Archit Savaliya". Built solo in May 2026. (`copilot-swe-agent[bot]` entries, if any, are his own AI-assisted work, not a teammate.)
- **Architecture:** Frontend-only static/SSR site. No backend, API routes, or database. Next.js App Router with a single route: `app/layout.tsx` (fonts + metadata) wraps `app/page.tsx`, which composes seven client components from `components/` — Navbar, HeroSection, AboutSection, ProjectCardsSection, LiveDemoSection, LeadershipSection, Footer. Each section is a self-contained `"use client"` component managing its own scroll refs and motion transforms. Global theme/tokens live in `app/globals.css`.
- **Key Features Built:**
  - Scroll-driven parallax hero with sticky pinned background, layered typography reveal (width mask + scan line), a floating silhouette that stays attached to the next section via `-mt-[100vh]` overlap trick, and animated crimson auras.
  - Horizontal-scroll "Live Demo" gallery (desktop) that maps vertical scroll progress to an `x` transform, embedding live deployed sites inside sandboxed `<iframe>` "browser frames" with traffic-light chrome, reload, and open-in-new-tab controls; responsive fallback to a vertical stack on mobile.
  - Projects grid with staggered per-card parallax (`useTransform` per index), 3D hover tilt (rotateX/rotateY), hover glow, and conditional GitHub/paper action links.
  - Infinite marquee ticker and floating tech-icon "atmosphere" (Python, TensorFlow, PyTorch, React, Node, MongoDB, etc.) as ambient background motion.
  - Responsive Navbar with animated mobile dropdown (`AnimatePresence`), smooth-scroll anchor nav, and resume download link.
  - Leadership section with featured and secondary positions-of-responsibility cards; video-background contact footer with social links.
- **ML/AI Details:** Not applicable to this repo. It only *references/links out* to Archit's ML projects (EEG Emotion Recognition via RL, kidney tumor segmentation, pneumonia CNN, credit-risk model) hosted in other repositories and Google Drive papers; no models, datasets, or training code live here.
- **APIs / Integrations:** No backend APIs. External integrations are static links only: embedded live-demo iframes (e.g. a Vercel-hosted site), Google Drive links for resume and research papers, and `mailto:`/`tel:` plus GitHub/LinkedIn/Instagram social links. Google Fonts loaded via `next/font`.
- **Database / Storage:** None. All content is hard-coded in component arrays/JSX; assets served from `public/`. No DB, ORM, or persistence.
- **Complexity Level:** Low–Medium — technically a static single-page site with no backend/data layer, but the scroll-choreography and Framer Motion orchestration (sticky/overlap layering, scroll-to-horizontal mapping, per-element parallax) show non-trivial frontend/animation engineering.
- **Commits & Activity:** 10 commits, single contributor (Archit, sole author), short burst of activity around May 2026. Small, actively-iterated personal project (commit messages show incremental UI/responsive/footer refinements).
- **Resume Bullet:** Designed and built a cinematic single-page portfolio in Next.js 16 / React 19 / TypeScript with Tailwind v4 and Framer Motion, engineering scroll-driven parallax, a scroll-to-horizontal live-demo gallery embedding deployed apps in sandboxed iframes, and fully responsive layouts — shipped solo (100% of commits) and deployed on Vercel.
- **Potential Interview Questions:**
  1. In HeroSection you pin a sticky background and pull the foreground figure up with `-mt-[100vh]` so it "attaches" to the About section — walk me through how the sticky layer, the negative-margin overlap, and the z-index stack interact to produce that effect.
  2. The Live Demo gallery converts vertical scroll into horizontal movement using `useScroll` + `useTransform` to an `x` of `-66.66%` across a `w-[300vw]` track. How did you derive that percentage, and how would it break if you added a fourth demo?
  3. You embed third-party deployed sites in iframes with `sandbox="allow-scripts allow-same-origin allow-forms allow-popups"`. What are the security implications of `allow-scripts` together with `allow-same-origin`, and what happens if an embedded site sends `X-Frame-Options: DENY`?
  4. ProjectCardsSection defines seven separate `useTransform` parallax values and indexes into them by card position. What are the trade-offs of that hard-coded approach versus generating transforms in a loop, given React's rules of hooks?
  5. Every section is a `"use client"` component, so almost nothing is server-rendered as an RSC. Given this is a static content site, what did you gain or lose by that choice, and how would you restructure to keep the animations while shipping more as server components?

### 12. archit-sl  `Archit-175/archit-sl`  — PRIVATE
- **Repo:** https://github.com/Archit-175/archit-sl
- **Description:** "ScrollnLearn" (a.k.a. "Branch") — an AI-native, TikTok-style micro-learning PWA. A user names a topic (by typing, speaking, or snapping a photo), and the app streams back a swipeable deck of AI-generated learning cards. Highlighting any phrase spawns a deeper "explainer" card, and a "Want to learn more?" CTA recursively generates follow-up cards, so a deck branches infinitely from a single seed.
- **Problem it solves:** Turns passive doom-scrolling into on-demand, bite-sized learning. Instead of pre-authored courses, it generates personalized, level-adjusted explanations on any subject in seconds and lets the learner drill down exactly where curiosity strikes — lowering the friction of "I want to understand X right now."
- **Tech Stack:** TypeScript, Next.js 15 (App Router, React 19 server + client components), Tailwind CSS 3, Supabase (Postgres + Auth + SSR via `@supabase/ssr`, Edge Functions on Deno), OpenAI SDK v6 (`gpt-4o-mini`/`gpt-4.1` chat, `gpt-4o-transcribe` + Whisper STT, GPT-4o vision, Realtime transcription API), Zod v4 (schema validation), PostHog (product analytics), next-pwa (installable PWA + manifest), Mermaid (diagram rendering), Sonner (toasts), Playwright (browser checks), Node test runner. Package manager: pnpm.
- **My Role:** Minor branch contributor / fork owner — **NOT the project lead**. This is Archit's fork (`Archit-175/archit-sl`) of `Omramanuj/archit-sl`. On `main`, authorship is 32/32 commits by **Ramanuj Om**; Archit has **0 commits on main**. Archit authored ~7 commits, all on the `archit-dev` side branch (May 30–31, 2026), plus merge/lockfile commits. His actual code touched: a `learning-events` API route + `lib/analytics/learning-events.ts` ("learning events infrastructure for adaptive learning"), a `010_add_learning_events` migration, Supabase/Google-OAuth configuration, and wiring a Gemini API key into `lib/ai/gemini.ts`/`generate.ts` (the Gemini path was later deprecated in favor of OpenAI). Be honest in interviews: Archit was a peripheral contributor exploring an adaptive-learning telemetry layer, not the author of the core generation engine.
- **Architecture:** Full-stack serverless monolith on Next.js App Router. Frontend = React client components (onboarding with mic/photo/text input, swipeable deck reader, bottom-nav PWA shell). Backend = Next.js Route Handlers (`app/api/*`) running on the Node runtime, plus a Supabase Deno Edge Function (`generate-deck`) that mirrors the AI pipeline server-side. AI logic is centralized in `lib/ai/*` (client factory, prompt templates per mode, JSON sanitization/parsing, HTML snippet sanitizer). Deck generation streams cards to the browser via Server-Sent Events (`text/event-stream`) while continuing generation in the background after the client disconnects; realtime delivery of remaining cards rides on Supabase. Auth/session is enforced in Next middleware via `@supabase/ssr` cookie refresh, with Row-Level-Security policies on every table.
- **Key Features Built:**
  - Multi-modal topic capture: typed input, voice (Whisper + OpenAI Realtime transcription with server VAD), and image (GPT-4o vision extracts a topic from a photo).
  - Streaming SSE deck generation — a 3-card "opener" streams immediately, generation continues server-side after disconnect, and cards persist to Postgres as they are produced.
  - Recursive/branching learning: highlight-to-explain cards and follow-up card generation, with a `source` enum (`opener`/`deepening`/`explainer`/`followup`) tracking provenance.
  - Tiered model routing (`FAST_MODEL` = gpt-4o-mini for openers/explainers, `DEEP_MODEL` = gpt-4.1 for deep dives) with JSON-mode structured output and defensive normalization/HTML sanitization.
  - Postgres-enforced product rules: daily deck-generation limit (3/day) via a trigger, RLS on all tables, per-user deck progress tracking, engagement/feedback/testimonial capture.
  - Archit-specific: an adaptive-learning "learning events" telemetry layer (API route + analytics module + migration) and Supabase Google-OAuth setup.
- **ML/AI Details:** No custom-trained model or dataset — this is applied LLM engineering. It consumes OpenAI hosted models: `gpt-4o-mini` and `gpt-4.1` for card generation (JSON response format, temperature 0.6–0.7), `gpt-4o-transcribe`/`whisper-1` for speech-to-text, GPT-4o vision for image-to-topic, and the OpenAI Realtime API for low-latency streaming transcription (24 kHz PCM, server-side VAD, near-field noise reduction). Prompt engineering is the core "model" work; no accuracy metrics apply.
- **APIs / Integrations:** OpenAI (Chat Completions, Whisper/transcribe, Vision, Realtime client-secret minting), Supabase (Postgres, Auth incl. Google OAuth, Edge Functions), PostHog (analytics), and a deprecated Google Gemini integration (Archit's branch added the key; the code path now throws and defers to OpenAI).
- **Database / Storage:** Supabase Postgres. Moderate-to-high schema complexity: ~9 migrations defining `decks` (JSONB cards + level/depth CHECK constraints), `deck_cards`, `saved_decks`, `user_deck_progress`, `generation_jobs`, `user_engagement_state`, `deck_completion_events`, `user_feedback_submissions`, plus Archit's `learning_events`. Extensive use of Row-Level Security policies, `SECURITY DEFINER` RPC functions, triggers (updated-at, daily-limit enforcement), and purposeful indexing.
- **Complexity Level:** High — streaming SSE + background generation, multi-modal (voice/vision/realtime) input, tiered LLM routing, recursive content branching, a non-trivial RLS-secured Postgres schema, and a Deno edge-function mirror of the pipeline.
- **Commits & Activity:** 2 contributors (Ramanuj Om — lead, 32 commits; Archit Savaliya — 7 commits on `archit-dev`). Active window Jan 22 – May 31, 2026; the bulk of the engine was built by Ramanuj, with Archit's branch activity concentrated in a two-day burst at the end of May 2026.
- **Resume Bullet:** Contributed to an AI-native micro-learning PWA (Next.js 15 + Supabase + OpenAI) by branch-developing an adaptive "learning events" telemetry layer (API route, analytics module, Postgres migration) and configuring Supabase/Google OAuth and multi-provider LLM key management — honestly framed as a side-branch contributor on a project led by another engineer.
- **Potential Interview Questions:**
  1. The `quick-generate` route streams a 3-card opener over SSE and then closes the stream while "generation continues in the background" — how do the remaining cards reach the client after the HTTP response ends, and what role does Supabase realtime play versus the SSE channel?
  2. The learning-events / analytics infrastructure you added on `archit-dev` was framed as "adaptive learning" — what events did you capture, what schema did the `010_add_learning_events` migration define, and how would that data actually drive adaptation of card difficulty or ordering?
  3. `lib/ai/gemini.ts` now throws "Gemini generation is no longer supported" and everything routes through OpenAI — why was the Gemini path deprecated, and how was the code structured so that swapping providers didn't ripple through the app?
  4. Every table enables RLS and there's a trigger enforcing a 3-decks-per-day limit; why enforce that limit in a Postgres trigger rather than in the Next.js route handler, and what attack does that defend against?
  5. Generated cards are LLM HTML that gets `sanitizeHtmlSnippet`-ed before render — walk through the injection risks of rendering model-produced HTML, and how the normalization/sanitization pipeline in `lib/ai/generate.ts` mitigates them.

### 13. bright-bird  `Archit-175/bright-bird`  — PRIVATE
- **Repo:** https://github.com/Archit-175/bright-bird
- **Status:** On hold / incomplete — paused for now (as of 2026-07).
- **Description:** An AI-powered "scroll-and-learn" PWA (internal name "branch"/ScrollnLearn) that turns any topic — typed, spoken, or captured from a photo — into short, TikTok-style educational card decks. Users generate a deck, swipe through auto-generated HTML cards, tap text to get on-the-fly explainers, and pull follow-up cards to go deeper.
- **Problem it solves:** Makes structured self-learning feel like scrolling social media. Instead of long articles, it delivers bite-sized, level-appropriate (Beginner→Expert) learning cards on demand, with voice and camera input so a learner can point at a page or speak a topic and immediately get a digestible lesson.
- **Tech Stack:** TypeScript, Next.js 15 (App Router, React 19), Tailwind CSS 3, Supabase (Postgres + Auth + Edge Functions on Deno), `@supabase/ssr`, OpenAI SDK (GPT-4o-mini / GPT-4.1, Whisper-1, GPT-4o Realtime transcription, Vision), Google Gemini (`@google/genai`, gemini-2.5-flash), Zod validation, PostHog analytics, `next-pwa` (service worker/offline), Mermaid (diagram rendering), Sonner (toasts), Playwright (browser checks), pnpm, ESLint.
- **My Role:** Minor contributor — 4 of 36 commits (~11%); the other 32 are by Ramanuj Om, who authored the bulk of the app. This repo is a continuation/fork of the earlier `archit-sl` codebase. Archit's authored work is narrow but real: he added the learning-events (adaptive-learning) infrastructure, swapped deck generation onto the Google Gemini API, and reworked the Supabase/Google-auth wiring — plus lockfile regeneration.
- **Architecture:** Full-stack Next.js monolith on the App Router. Server-side API route handlers under `app/api/*` (deck generation, explainer, follow-up, vision, STT, realtime-token minting, learning-events) call an `lib/ai` layer that fans out to OpenAI and Gemini. Deck generation streams cards to the client over Server-Sent Events and persists them to Supabase; a Supabase Edge Function (`generate-deck`, Deno) mirrors the generation logic server-side. Auth uses Supabase SSR with a Next.js middleware `updateSession` guard and a Google OAuth callback route. Data lives in Postgres with Row-Level Security on every table. Client is a PWA (installable, offline caching via runtime-caching rules).
- **Key Features Built:**
  - AI deck generation: 3-card "opener" then recursive "deepening"/follow-up cards, streamed to the browser via SSE while persisting to Postgres.
  - Multimodal input: photo→topic extraction via OpenAI Vision, speech→text via Whisper (`/api/stt`) and a live GPT-4o Realtime transcription session (`/api/realtime/token` mints ephemeral client secrets with server-VAD turn detection).
  - Adaptive-learning event pipeline (Archit): `learning_events` table + `/api/learning-events` route + client logger capturing `card_viewed`, `explanation_requested`, `followup_requested`, `deck_completed`, `session_started/ended` for downstream personalization.
  - Gemini integration (Archit): moved opener generation to `gemini-2.5-flash` with JSON response-mime enforcement, alongside a `/api/test-gemini` health-check route.
  - Tap-to-explain: selection toolbar sends highlighted text + surrounding context to an explainer model that returns a sanitized HTML card.
  - HTML-card sanitization pipeline and Zod-typed card schema (`text|code|analogy|visual|table`) with Mermaid diagram support.
  - Supabase Auth (Google OAuth) with SSR middleware session refresh and per-user daily deck limits; PWA install prompt and offline support.
- **ML/AI Details:** No trained/custom model — it consumes hosted LLMs. Generation: Google `gemini-2.5-flash` (openers, temp 0.7, JSON mode) and OpenAI `gpt-4o-mini` (fast: explainer, follow-up, vision) / `gpt-4.1` (deep deepening, temp 0.7). Transcription: Whisper-1 plus a `gpt-4o-transcribe` Realtime streaming session (PCM 24 kHz, server-VAD). Vision: `gpt-4o-mini` image→topic extraction. No datasets, training, or accuracy metrics apply.
- **APIs / Integrations:** OpenAI (Chat Completions, Whisper, Realtime, Vision), Google Gemini (`@google/genai`), Supabase (Postgres, Auth, Edge Functions, Google OAuth provider), PostHog (product analytics). Google user-avatar images allow-listed via `next.config`.
- **Database / Storage:** Supabase Postgres, moderately complex: ~7+ tables across 10 migrations — `decks`, `deck_cards` (self-referential via `parent_card_id`, typed + sourced), `saved_decks`, `user_deck_progress`, `generation_jobs`, `learning_events`, plus engagement/feedback and save-count columns. Extensive Row-Level Security policies per table, composite indexes, CHECK constraints, and a `SECURITY DEFINER` function `get_deck_with_save_status`. Cards also stored denormalized as JSONB on `decks`.
- **Complexity Level:** High — multi-provider LLM orchestration, SSE streaming, realtime voice transcription, vision input, a Deno edge function, PWA/offline, and an RLS-secured multi-table schema with adaptive-learning telemetry.
- **Commits & Activity:** 36 commits total across all branches, active Jan–May 2026. Two contributors: Ramanuj Om (32, primary author) and Archit Savaliya (4, minor). AI-assisted work also present (copilot-swe-agent). Archit's contributions cluster in late May 2026.
- **Resume Bullet:** Contributed adaptive-learning telemetry and a second LLM provider to a Next.js 15 + Supabase AI learning PWA — built the `learning_events` capture pipeline (RLS-secured Postgres table, API route, and client logger across six event types) and integrated Google Gemini 2.5 Flash for deck generation alongside the existing OpenAI stack.
- **Potential Interview Questions:**
  1. Deck generation streams cards over Server-Sent Events and the `quick-generate` route closes the stream immediately while generation continues server-side — how does the client reliably receive later cards, and what role does Supabase realtime vs. the SSE channel play here?
  2. Your `learning_events` table stores six event types with a JSONB `metadata` column and RLS restricting rows to `auth.uid() = user_id` — how would you turn this raw event stream into an actual adaptivity signal (e.g. deciding a learner is struggling with a concept)?
  3. You run two LLM providers — Gemini 2.5 Flash for openers and OpenAI (gpt-4o-mini / gpt-4.1) for deepening/explainer/follow-up. What drove that split, and how do you keep card output consistent when the JSON comes from different models?
  4. The `/api/realtime/token` route mints an ephemeral OpenAI Realtime client secret with server-VAD turn detection. Why mint a short-lived token server-side instead of using the main API key on the client, and how do you handle token expiry mid-session?
  5. Generated card HTML is passed through `sanitizeHtmlSnippet` before rendering — what injection risks does rendering model-produced HTML create, and is regex/string sanitization sufficient versus a DOM-based sanitizer?

### 14. plantree_server  `Archit-175/plantree_server`  — PUBLIC
- **Repo:** https://github.com/Archit-175/plantree_server
- **Part of:** The **Crawlers** project (#16, along with `job`/`jobApplication`) — this is Crawlers' donation / email-sending backend (templated donation emails), not a standalone project.
- **Description:** A tiny Node/Express backend for a "Crawlers" tree-planting donation campaign. It serves a single-page donation form (`plantree.html`), accepts a POST from that form, sums up the donor's chosen tree quantities into a dollar total, emails the donor a branded HTML "Thank You for Your Donation" receipt via Gmail, and redirects them back to the main marketing site.
- **Problem it solves:** Gives a static, no-database NGO/campaign website a lightweight way to capture tree-planting donation pledges and instantly confirm them by email, without standing up a full CMS, payment processor, or database backend.
- **Tech Stack:** Node.js, Express 4, body-parser (urlencoded), Nodemailer 6 (Gmail SMTP over port 465/SSL), `express.static` for asset serving, vanilla HTML/CSS/JavaScript frontend (Google Fonts, MSO/email-client-compatible table layout for the receipt), Vercel serverless deployment (`@vercel/node` via `vercel.json`).
- **My Role:** Sole author — 30/30 commits (`architsavaliya175@gmail.com` / "Archit-175" / "Archit Savaliya"), Aug–Oct 2024. Built the entire server, form, and email template end to end. This is an early-stage/learning-grade project.
- **Architecture:** Single-file Express monolith (`server.js`, ~471 lines, most of which is an inlined HTML email template). One serverless entrypoint routed through Vercel: all traffic (`/(.*)`) is funneled to `server.js`. `GET /` serves `plantree.html`; `POST /submit` parses form fields, computes the total, and fires an email via a module-level Nodemailer transporter. Frontend does client-side total calculation and basic validation (required-field + email regex) in inline JS. No database, no auth, no service layer — request handling, business logic (pricing), and the email view are all in one handler.
- **Key Features Built:**
  - `POST /submit` endpoint that reads donor details (name, email, phone, country, message) plus per-species tree quantities from urlencoded form data.
  - Server-side donation pricing logic: `total = oak*10 + maple*15 + pine*12`.
  - Transactional HTML email receipt via Nodemailer + Gmail SMTP, with the donor's name and computed total interpolated into a responsive, email-client-safe (MSO/VML) template.
  - Post-submit redirect flow: success redirects to the main Vercel site, errors return HTTP 500.
  - Static hosting of the donation form and client-side UX: live total calculation on input, required-field highlighting, and email-format validation before submit.
  - Vercel serverless configuration so the Express app runs as a single Node function.
- **ML/AI Details:** Not applicable — no ML/AI components.
- **APIs / Integrations:** Gmail SMTP via Nodemailer (transactional email). Links out to sibling Vercel-hosted sites (main "crawlers" site, gallery, a job-application app). Google Fonts + CDN-hosted images in the email template. No payment gateway (donations are pledges, not charged).
- **Database / Storage:** None. Submissions are not persisted anywhere — each request only triggers an email; there is no DB, no file store, and no record kept server-side.
- **Complexity Level:** Low — single-endpoint stateless Express app, no DB/auth/tests, mostly an inlined email template; standard "form → email" pattern.
- **Commits & Activity:** 30 commits total, 100% by Archit (sole contributor), active window Aug 14 – Oct 29 2024. Iterative "Update plantree.html / server.js" commits, one branch (`main`), no CI/tests.
- **Resume Bullet:** Built and deployed a serverless Node/Express donation backend on Vercel that captures tree-planting pledges, computes per-species donation totals, and sends branded transactional confirmation emails via Nodemailer/Gmail SMTP.
- **Potential Interview Questions:**
  1. Your Gmail user and app password are hardcoded directly in `server.js` (lines 17–18). What's the security risk, and how would you move these to environment variables / a secrets manager on Vercel?
  2. `POST /submit` computes `total` from `plant_quantity_oak/maple/pine` with no validation — what happens if a user submits negative, non-numeric, or missing quantities, and how would you harden this against tampering since prices are also trusted from... where?
  3. There's no database and submissions are never persisted — how would you add durable storage of donations, and what schema/store would you pick for this workload?
  4. `total` is assigned without `let/const` (an implicit global) and the transporter is shared across requests — what concurrency or state-leakage bugs could that cause under load on a serverless platform, and how does Vercel's function model affect it?
  5. The client-side validation can be bypassed (JS disabled, direct POST). How would you enforce required fields and a valid email server-side, and how would you protect `/submit` from spam/abuse (rate limiting, CAPTCHA, honeypot)?

### 15. Consultancy-Project-  `Archit-175/Consultancy-Project-`  — PRIVATE
- **Repo:** https://github.com/Archit-175/Consultancy-Project-
- **Description:** A web app that digitizes the paperwork workflow for SVNIT Surat's consultancy-project administration (built for "Nexus", the CSE/AI departmental cell). Faculty (Principal Investigators) file consultancy consent/registration forms and work orders online; HODs and Deans review/approve them; an Admin manages users. The app also generates official institutional PDF documents (bill of supply/GST invoices, payment receipts, cheque deposit forms, work orders, completion reports, final letters) from form data.
- **Problem it solves:** Replaces the manual, paper-based approval chain for university consultancy projects (PI → HOD → Dean, plus accounts/billing documents) with a role-based digital form-and-approval system, and auto-generates the formatted government/institute PDFs that would otherwise be typed by hand.
- **Tech Stack:** JavaScript (React 18, JSX — no TypeScript), Vite 5 build tooling, Tailwind CSS 3 (+ tailwind-merge, tailwindcss-animate, class-variance-authority, clsx), react-router-dom v6 (data router / `createBrowserRouter`), `pdf-lib` for client-side PDF generation (plus `jspdf` + `jspdf-autotable` used in the Bill-of-Supply component), FontAwesome + lucide-react + react-icons for iconography, ESLint 9. Talks to a separate REST backend (on the `backend`/`main` branches — not in this `frontend` branch) via `fetch` against `VITE_API_LINK` (`http://localhost:3000`).
- **My Role:** Minor contributor (team project). Archit authored **1 of 22 commits** across all branches (amanraz2802 = 16, lead; Kanishk Pandey = 5). His single commit adds `frontend/src/components/BillofSupply.jsx` (594 lines) — a standalone GST "Bill of Supply" invoice form with a large controlled form-state object, live client-side validation (incl. a regex for GSTIN format), dynamic multi-product line items, and CGST/SGST/IGST tax fields, wired for jsPDF export. Note: this `Archit-175` repo is a **fork of `ttanishh/Consultancy-Project-`**; Archit's contribution here is real but small relative to the team.
- **Architecture:** Client-side SPA (frontend-only in this branch). `App.jsx` defines a `createBrowserRouter` with ~20 routes and role-gated dashboards (`/user/dashboard`, `/admin/dashboard`, `/admin/view/:role`, form/status routes). Pages are composed from a shared `Header`/`Navbar`/`Footer` shell. State/auth is client-side: a JWT + user object are stored in `localStorage` on login and sent as `Authorization: Bearer` headers on every `fetch`; role (`PI`/`HOD`/`Dean`/`Admin`) is read from `localStorage` to branch UI and API calls. A `UserContext` provider exists for shared user state. All persistence/business logic lives behind the external REST API (`/user/*`, `/admin/*` endpoints); this repo is the presentation + PDF-generation layer only.
- **Key Features Built:**
  - Role-based routing and dashboards for PI / HOD / Dean / Admin users
  - JWT auth flow: login posts to `/user/login`, stores token + role in `localStorage`, redirects by role
  - Multi-step consultancy consent/registration form with draft-save (`/user/form/consentForm/draft`) and submit
  - Application listing/status views split by state (pending / processed / accepted) for consent and work forms
  - Admin user management (create/edit/delete users, list by role)
  - Client-side PDF generation of institutional documents via `pdf-lib` (payment receipt, cheque deposit, final letter, completion report, work order) embedding the SVNIT logo
  - **(Archit's file)** GST Bill-of-Supply / invoice generator: controlled form with bill-to/ship-to parties, dynamic product rows, GSTIN regex validation, CGST/SGST/IGST computation, jsPDF export
- **ML/AI Details:** Not applicable — no machine learning or AI models in the codebase.
- **APIs / Integrations:** Custom in-house REST backend (base URL via `VITE_API_LINK`) for auth, forms, and admin. A `/user/send-mail` endpoint implies server-side email dispatch. No third-party SaaS/cloud/payment/LLM SDKs are imported in the frontend.
- **Database / Storage:** No database in this frontend repo — persistence is delegated to the external backend service (on another branch). Client-side, `localStorage` holds the auth token, user email, and role. Inferred domain model from the API surface (users with roles, consent forms, work forms with draft/pending/processed/accepted states) suggests a modest relational/document schema, but the schema itself is not present here.
- **Complexity Level:** Medium — real role-based auth, ~20 routed views, multi-step stateful forms, and non-trivial client-side PDF generation, but it is a standard SPA CRUD/forms frontend with no real-time, ML, or distributed-systems concerns, and the backend/DB live elsewhere.
- **Commits & Activity:** Small team of 3 humans (amanraz2802 lead with 16 commits, Kanishk Pandey 5, Archit 1), 22 commits total across branches; active window ~Aug 25 2024 → Oct 28 2024. Repo is a fork of `ttanishh/Consultancy-Project-`. Archit's activity is a single feature commit near the end of the window.
- **Resume Bullet:** Contributed a GST Bill-of-Supply / invoice component (594 lines) to a React + Vite consultancy-project management portal for SVNIT, implementing a validated multi-field, dynamic-line-item tax form (CGST/SGST/IGST) with regex-based GSTIN validation and jsPDF export within a role-based (PI/HOD/Dean/Admin) approval workflow app.
- **Potential Interview Questions:**
  1. In `BillofSupply.jsx` you keep the entire invoice (parties, product line items, tax fields) in one `useState` object and re-validate in a `useEffect` on every change — how did you handle immutable updates for nested arrays like `products[]`, and would you refactor this to `useReducer` or React Hook Form at scale?
  2. Your GSTIN regex `^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$` — walk through what each group enforces, and how you'd surface partial-vs-complete validation errors to the user.
  3. The app stores the JWT and user role in `localStorage` and reads role client-side to gate `/admin/*` routes — what are the security risks of trusting a client-side role, and how must the backend enforce authorization independently?
  4. This branch generates PDFs two different ways — `pdf-lib` in the shared document components vs `jspdf`/`jspdf-autotable` in your Bill-of-Supply file. Why might a team end up with both, and how would you consolidate on one to reduce bundle size and inconsistency?
  5. Routing is defined with `createBrowserRouter` but there's no route guard component — an unauthenticated user hitting `/admin/dashboard` directly just renders it. How would you add protected routes / loaders that redirect to `/user/login` when the token is missing or expired?

### 16. Crawlers  `Archit-175/Crawlers`  — PUBLIC
- **Repo:** https://github.com/Archit-175/Crawlers
- **Related repos:** `job` (#23) and `jobApplicatoin` (#24) are the job-board / application module of this project (the "apply for conservation jobs" CTA) — count them as part of Crawlers, not separate projects.
- **Description:** An interactive, multi-page educational website about the world's forests. A clickable SVG world map links to detail pages for 7 countries (India, USA, Canada, Russia, China, Australia, Brazil) and 18 named forests, wrapped in animation-heavy landing pages, a photo gallery, and a forestry quiz. "Crawlers" is the team/project name (it won first place in the "Web Wonders" competition) — despite the name, this is NOT a web-scraping/crawler tool.
- **Problem it solves:** Environmental-awareness edutainment — makes forestry, biodiversity, and deforestation facts engaging through a "virtual world tour," a knowledge quiz, and calls to action (donate/plant-a-tree, apply for conservation jobs, contribute blog posts).
- **Tech Stack:** HTML5, CSS3 (per-page hand-written stylesheets), vanilla JavaScript, jQuery (gallery slider), GSAP + ScrollTrigger/ScrollSmoother (parallax hero), Font Awesome & Boxicons (CDN icons), OpenWeatherMap REST API (live climate widget), inline SVG world map. Deployed on Vercel as a static site. (README also lists NodeMailer/MongoDB, but those power separate externally-linked microservices — see APIs below — not this repo.)
- **My Role:** Co-author and top individual contributor — 94/250 commits (~38%), committing as both `Archit-175` (53) and `Archit Savaliya` (41). Self-described team leader in the README. Other major contributors: Suhanii (~70), Nilang (~72), Dev Shrut (10). One `copilot-swe-agent[bot]` commit (AI-assisted README). Genuine, heavily-authored contribution.
- **Architecture:** Pure client-side static multi-page site (no backend in this repo). Root `index.html` is the hub; `Country/<name> Forest/` folders hold country + per-forest pages each with their own CSS; standalone modules live in `Gallary/`, `Quiz/`, and `parallex/`. Navigation between pages is via hardcoded relative links and a JS file-path lookup table. Dynamic features (blog, job applications, tree-planting) are delegated to three SEPARATE Vercel-hosted microservices linked from the navbar, keeping this repo a thin presentation layer.
- **Key Features Built:**
  - Interactive SVG world map (`map.js`) with hover highlighting and per-country `<a>` hotspots that deep-link into forest pages
  - Client-side search box (`search-box.js`) with live filtering, arrow-key navigation, and keyboard/click selection over a 35-entry country/forest URL map
  - Live weather widget (`Country/weather.js`) calling OpenWeatherMap by lat/lon for each forest, auto-refreshing every 5 minutes
  - Interactive quiz module (`Quiz/`) with scoring, correct/wrong answer highlighting, animated circular-progress result, and background audio control
  - GSAP-driven parallax hero section and CSS scroll animations across landing/loading screens
  - jQuery image-gallery slider (`Gallary/`) and 7 country + 18 forest content pages with individually styled layouts
- **ML/AI Details:** Not applicable. (An early `Zomato.ipynb`/Colab notebook was committed then deleted in commit `35f1a29` — no ML remains in the tree.)
- **APIs / Integrations:** OpenWeatherMap API (live weather, client-side fetch — API key is hardcoded/exposed in `Country/weather.js`). External sibling microservices linked from the nav: `plantree-server.vercel.app` (tree-planting/donate), `job-applicatoin.vercel.app` / `forestry-jobs.vercel.app` (careers), `crawlers-blogs.vercel.app` (blog) — these are where the README's NodeMailer + MongoDB live, not this repo. Font Awesome, Boxicons, and various remote image hosts via CDN.
- **Database / Storage:** None in this repository — fully static, no DB, no server-side persistence. Blog/job/plant-tree data is stored by the external services (MongoDB, per README), which are out of scope here.
- **Complexity Level:** Medium — large multi-page static build with real interactivity (SVG map, search, quiz, live API, GSAP/jQuery) and a multi-repo microservice split, but no backend, auth, data modeling, or algorithms in this repo.
- **Commits & Activity:** Active collaborative project, 250 commits across 4 human contributors (+1 AI-assist) on `main`/`country`/`copilot` branches, spanning Aug 2024 – May 2026. Archit is the single largest contributor at ~38%.
- **Resume Bullet:** Co-led and top-contributed (~38% of 250 commits) a competition-winning ("Web Wonders" 1st place) interactive forestry-education website — built an SVG-map country navigator, keyboard-navigable search, a scored quiz engine, GSAP parallax UI, and a live OpenWeatherMap widget across 25+ hand-crafted pages.
- **Potential Interview Questions:**
  1. Your `search-box.js` filters a hardcoded 35-entry `fileMapping` object client-side. How would this scale to hundreds of forests, and what would you change (indexing, fuzzy matching, a search API)?
  2. In `Country/weather.js` the OpenWeatherMap API key is hardcoded in a public client-side file. What are the security/abuse risks, and how would you keep the key secret while still fetching weather in a static site?
  3. The interactive map is one giant inline SVG with per-country `<a>` hotspots in `index.html`. What are the accessibility and maintainability trade-offs versus a mapping library (Leaflet/D3), and how would you make the hotspots keyboard- and screen-reader-friendly?
  4. Blog, careers, and tree-planting are split into separate Vercel apps rather than living in this repo. Why might a team make that split, and what are the downsides (shared styling, auth, cross-origin, deployment coordination)?
  5. You loaded both GSAP (parallax) and jQuery (gallery slider) plus multiple icon CDNs. How would you audit and reduce this dependency/render-blocking footprint to improve load performance on a static site?

### 17. Deep-Learning  `Archit-175/Deep-Learning`  — PUBLIC
- **Repo:** https://github.com/Archit-175/Deep-Learning
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A semester-6 Deep Learning lab coursework repository containing a progression of hands-on assignments (Labs 01–05) plus a capstone mini-project. It spans neural-network fundamentals through CNN architecture comparison, imbalanced-data classification, recurrent sequence models, and a medical-imaging transfer-learning study — implemented as ~4,400 lines of Python scripts alongside Jupyter/Colab notebooks.
- **Problem it solves:** An academic learning artifact demonstrating end-to-end deep-learning skills: building networks from scratch (perceptrons, MLPs, CNNs, RNNs), diagnosing training pathologies (vanishing gradients, overfitting, class imbalance), and applying modern techniques (transfer learning, focal loss, Grad-CAM) to a real-world clinical problem — classifying gastrointestinal diseases from Wireless Capsule Endoscopy (WCE) images.
- **Tech Stack:** Python; PyTorch + torchvision (primary framework); TensorFlow/Keras (Lab01 linear algebra, Lab02 MNIST); NumPy, Pandas, scikit-learn, Matplotlib, Seaborn, Pillow, OpenCV, tqdm; Jupyter/Google Colab; LaTeX (mini-project report). Models: perceptron, MLP, custom CNN, LeNet-5/AlexNet/VGG/ResNet/DenseNet/EfficientNet/MobileNet/Inception, RNN/LSTM/GRU/BiLSTM/ConvLSTM.
- **My Role:** Sole human author (AI-assisted). Archit = 24 of ~51 commits; the remaining 27 are from `copilot-swe-agent[bot]` (GitHub Copilot coding agent working under Archit's direction via PR branches). No other human contributors — this is Archit's individual coursework driven through Copilot-assisted PRs that he merged.
- **Architecture:** Not a deployed application — a modular coursework monorepo. One folder per lab (`Lab01`…`Lab10`, of which 06–10 are empty placeholder templates) plus a `mini-project/`. Each lab pairs a self-contained runnable Python script (e.g. `cnn_imbalanced_classification.py`, `rnn_sequence_models.py`) with a notebook and a per-lab README documenting objectives, architectures, and observations. Scripts use argparse CLIs with `--demo`/`--offline`/`--quick` modes and FakeData fallbacks so experiments run without dataset downloads; results (confusion matrices, t-SNE/PCA/Grad-CAM plots, training curves) are committed as PNGs.
- **Key Features Built:**
  - From-scratch perceptron for AND/OR gates and a 2→4→1 PyTorch net proving XOR needs hidden layers, plus a house-price regression net with StandardScaler and MSE/RMSE/MAE/R² evaluation (Lab01).
  - Systematic MNIST ablation study on CNN/MLP: activation functions (Sigmoid/Tanh/ReLU), optimizers (SGD/Momentum/Adam), and regularization (BatchNorm + Dropout 0.1/0.25) with comparison plots and confusion matrices (Lab02).
  - Comparative CNN analysis on CIFAR-10 across LeNet/AlexNet/VGG/ResNet, pairing loss functions (BCE, Focal, ArcFace) with optimizers and t-SNE feature visualization (Lab03).
  - Full imbalanced-classification pipeline on a synthetically long-tailed CIFAR-10 (≈100:1): custom `ImbalancedCIFAR10` Dataset, inverse-frequency class weighting, `WeightedRandomSampler` oversampling, hand-implemented `FocalLoss` and `LabelSmoothingCELoss`, CustomCNN vs ResNet18 vs DenseNet121, transfer learning, and Grad-CAM/t-SNE/PCA interpretability (Lab04, 996-line script).
  - Recurrent sequence models treating MNIST rows/columns as 28-step sequences: RNN/LSTM/GRU/BiLSTM plus two CNN+LSTM hybrids and a hand-built `ConvLSTMCell` (gate chunking into i/f/g/o), with gradient-norm logging and LSTM gate-activation extraction (Lab05, 621-line script).
  - Mini-project: WCE gastrointestinal-disease classification addressing class imbalance via random under-sampling + minority-only augmentation, transfer learning with EfficientNet-B0 / MobileNetV3-Small / ResNet101, `ReduceLROnPlateau` scheduling, and comparative macro Precision/Recall/F1 evaluation across three imbalance settings; accompanied by a LaTeX report.
- **ML/AI Details:** Multiple models/datasets. Datasets: MNIST, CIFAR-10 (native and synthetically long-tailed), a house-price CSV, and Kvasir-Capsule-style WCE images. Techniques: from-scratch perceptron/MLP, CNNs (custom + torchvision ResNet18/DenseNet121/EfficientNet-B0/MobileNetV3/ResNet101), RNN/LSTM/GRU/BiLSTM/ConvLSTM; losses include CE, weighted-CE, Focal (γ∈{0.5,1,2,5}), Label Smoothing (ε=0.1), ArcFace; interpretability via Grad-CAM, t-SNE, PCA. Reported/expected metrics: 100% perceptron accuracy on AND/OR, >95% XOR, ~98–99% MNIST test accuracy; imbalanced/WCE tasks tracked via macro-F1, macro-recall, and per-class confusion matrices rather than a single headline accuracy. Custom CNN ≈3.4M params, ResNet18 ≈11.2M, DenseNet121 ≈7.0M.
- **APIs / Integrations:** None (no external/third-party service APIs). Only ML library "APIs": PyTorch/torchvision (incl. ImageNet-pretrained weights), TensorFlow/Keras, scikit-learn; datasets pulled from `torchvision.datasets` / `tf.keras.datasets`; developed on Google Colab (T4 GPU).
- **Database / Storage:** None. Data is file-based: CSV for regression, image folders (`ImageFolder`-style) for WCE, framework-downloaded MNIST/CIFAR-10, and PNG/CSV result artifacts committed to the repo.
- **Complexity Level:** Medium — individually the labs are standard coursework, but the breadth (fundamentals → CNNs → RNNs → medical transfer learning) and the genuine engineering in Lab04/Lab05 (custom Datasets, hand-written Focal/Label-Smoothing losses, a from-scratch ConvLSTM cell, Grad-CAM hooks, robust offline/CLI modes) push it above trivial learning code; it is not production/multi-service infrastructure.
- **Commits & Activity:** ~51 commits total over ~3 months (2026-01-09 → 2026-04-10). Two identities: Archit (24 human commits, sole author) and copilot-swe-agent bot (27, AI-assisted PRs merged by Archit). Work delivered through per-assignment Copilot branches (`copilot/complete-lab04-assignment`, etc.). Active early-2026 during the semester; Labs 06–10 remain unstarted placeholders.
- **Resume Bullet:** Built a comprehensive PyTorch/TensorFlow deep-learning portfolio (~4,400 LOC across 6 assignments) spanning perceptrons to CNNs/RNNs, engineering an imbalanced-classification pipeline (long-tailed CIFAR-10 with focal loss, weighted sampling, Grad-CAM) and a WCE medical-imaging transfer-learning study (EfficientNet-B0/MobileNetV3/ResNet101) that lifted macro-F1 on minority disease classes via under-sampling + targeted augmentation.
- **Potential Interview Questions:**
  1. In Lab04 you handle a ~100:1 long-tailed CIFAR-10 three ways — inverse-frequency class weighting, a `WeightedRandomSampler`, and augmentation. How do these differ mechanically, and why does balanced accuracy (not raw accuracy) matter for evaluating them?
  2. You hand-implemented `FocalLoss` and `LabelSmoothingCELoss` instead of using stock cross-entropy. Walk through the focal-loss formula, the role of γ, and what you observed choosing γ=2 over higher values on the imbalanced split.
  3. In Lab05 you wrote a `ConvLSTMCell` from scratch that chunks the conv output into input/forget/cell/output gates. Explain the gate equations and how a ConvLSTM differs from feeding flattened rows into a vanilla LSTM.
  4. Your RNN lab logs gradient magnitudes to study vanishing/exploding gradients. Concretely, how do LSTM/GRU gating and your gradient clipping mitigate that versus a vanilla RNN over 28 time-steps?
  5. In the WCE mini-project you fine-tune EfficientNet-B0, MobileNetV3-Small, and ResNet101 with `ReduceLROnPlateau`. How did you decide which layers to freeze vs train, why report macro Precision/Recall/F1 and confusion matrices instead of accuracy for medical imbalance, and what are the clinical risks of optimizing the wrong metric?

### 18. NLP-LAB  `Archit-175/NLP-LAB`  — PUBLIC
- **Repo:** https://github.com/Archit-175/NLP-LAB
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A coursework lab of 10 classical NLP assignments implementing the core statistical-NLP pipeline from scratch in pure Python/Jupyter — tokenization, morphology (FSTs/tries), n-gram language models with every major smoothing technique, subword tokenization (BPE/WordPiece), and a Viterbi HMM POS tagger. Deliberately avoids high-level libraries (NLTK/spaCy) for the core algorithms so the underlying math is coded by hand.
- **Problem it solves:** Demonstrates first-principles understanding of how NLP systems actually work under the hood — how text is tokenized (including for low-resource Indic languages), how words are stemmed and pluralized, how language models estimate and smooth probabilities, how modern subword tokenizers (BPE/WordPiece) build their vocabularies, and how sequence labeling (POS tagging) is solved with dynamic programming. This is the foundational layer beneath every downstream NLP/LLM application.
- **Tech Stack:** Python 3, Jupyter Notebook (Google Colab), regular expressions (`re`), `collections` (defaultdict/deque/Counter), `pandas`, `numpy`, `matplotlib`, `heapq`, `math`, Hugging Face `datasets` (`load_dataset`) + Hugging Face `datasets-server` REST API. Dataset: `ai4bharat/IndicCorpV2` (Gujarati & Hindi subsets); Brown Corpus nouns.
- **My Role:** Sole author — 6/6 commits (100%) under architsavaliya175@gmail.com. All notebooks and scripts authored by Archit; not a fork.
- **Architecture:** Not a deployed application — a monorepo of self-contained per-assignment scripts/notebooks (`Assignment_1` … `Assignment_10`). Each assignment is a standalone experiment: `.ipynb` notebooks for the Colab-run tasks (A1–A3) and plain `.py` scripts for the streaming/model-heavy tasks (A4–A6, A9, A10). A shared data flow ties them together: A1 tokenizes IndicCorpV2 into a word/sentence corpus that later n-gram assignments stream token-by-token (via a generator + `deque` sliding window) to build counts without loading everything into memory.
- **Key Features Built:**
  - Custom regex-based sentence + word tokenizers for Gujarati (`઀-૿`) and Hindi (`ऀ-ॿ`) handling URLs, emails, dates, decimals and punctuation; computes corpus statistics (avg sentence/word length, Type-Token Ratio) over IndicCorpV2 streamed in chunks (A1).
  - DFA acceptor for valid lowercase English words and a Finite State Transducer for noun morphology generating plurals via e-insertion / y→ies / +s rules with `+N+PL`/`+N+SG` feature tags over 202k Brown-Corpus nouns (A2).
  - Prefix and suffix tries (with per-node frequency) for unsupervised stem/suffix segmentation, plus a hand-rolled frequency-distribution counter and threshold-based stop-word removal with matplotlib plots (A3).
  - N-gram language models (unigram→quadgram) with MLE conditional probabilities, Add-One (Laplace) and Add-K smoothing, a custom token-type score, and per-sentence log-probability + perplexity scoring with `<s>`/`</s>` markers (A4).
  - Reproducible train/val/test split (seed=42) and advanced smoothing: Good-Turing discounting (Nc counts, c* re-estimation, unseen-mass distribution) and deleted (linear) interpolation with a grid search over λ1–λ4 to maximize held-out log-likelihood (A5).
  - Katz backoff and recursive Kneser-Ney smoothing (with continuation counts and back-off weights) for the quadgram model, plus greedy and beam-search text generation (beam size 20) over the learned model (A6).
  - Byte-Pair Encoding trained from scratch — iterative most-frequent-pair merging with vocab-size limit (A9) — and WordPiece tokenization using a PMI/likelihood-gain scoring function to choose merges (A10).
  - Viterbi decoder for an HMM POS tagger with add-one smoothed transition/emission log-probabilities, `<UNK>` handling, K-fold cross-validation (K=4) and micro-F1 evaluation (A10).
- **ML/AI Details:** Statistical/classical NLP rather than neural. Models implemented by hand: n-gram language models (n=1..4) with MLE, Laplace/Add-K, Good-Turing, deleted interpolation, Katz backoff, and Kneser-Ney smoothing; evaluated via log-probability and perplexity. Sequence model: first-order HMM POS tagger decoded with the Viterbi algorithm, add-one smoothed, evaluated with 4-fold cross-validation and micro-F1 (toy 8-sentence tagged corpus for demonstration). Subword vocab learning: BPE and WordPiece. No trained accuracy figures reported beyond the demo POS tagger's micro-F1 and n-gram perplexities; datasets are IndicCorpV2 (Gujarati/Hindi) and Brown-Corpus nouns (202,793 nouns).
- **APIs / Integrations:** Hugging Face `datasets` library (`load_dataset("ai4bharat/IndicCorpV2", streaming=True)`) and the Hugging Face `datasets-server` first-rows REST endpoint; Google Colab / Google Drive mounting for storage. No auth, payment, or cloud service integrations.
- **Database / Storage:** None — flat text files (`.txt`/`.tsv`) on disk / Google Drive as intermediate corpus and model-output storage. No database or ORM.
- **Complexity Level:** Medium — algorithmically rich (from-scratch implementations of tries, FSTs, Viterbi, multiple smoothing schemes, BPE/WordPiece, beam search) but no application layer, services, auth, or deployment; single-author coursework.
- **Commits & Activity:** 6 commits, single contributor (Archit Savaliya, sole author), 2025. Low commit volume but each commit lands large, complete assignment deliverables (one bulk upload adds ~2,400 lines of the A4–A10 scripts).
- **Resume Bullet:** Implemented a 10-part classical NLP toolkit from scratch in Python — custom Indic-language tokenizers over Hugging Face IndicCorpV2, finite-state morphology and trie-based stemming over 200k+ Brown-Corpus nouns, n-gram language models with MLE/Laplace/Add-K/Good-Turing/Kneser-Ney/Katz-backoff smoothing plus beam-search generation, BPE/WordPiece subword tokenizers, and a Viterbi HMM POS tagger evaluated with k-fold cross-validation.
- **Potential Interview Questions:**
  1. In Assignment 4 you stream tokens through a `deque(maxlen=MAX_N-1)` to build unigram→quadgram counts in one pass — walk me through how the sliding window forms each n-gram and why you stream instead of loading the whole corpus into memory.
  2. Your Assignment 5 Good-Turing implementation re-estimates counts as `c* = (c+1)·N(c+1)/N(c)`. What happens when `N(c+1)` is zero for higher counts, how did you handle it in code, and why is that a known weakness of raw Good-Turing?
  3. In deleted interpolation (Assignment 5) you grid-search λ1–λ4 in 0.1 steps to maximize held-out log-likelihood. What are the failure modes of a coarse grid search here, and how would EM (the standard deleted-interpolation algorithm) estimate the λs differently?
  4. Assignment 6 implements both Katz backoff and Kneser-Ney. Explain why Kneser-Ney uses continuation counts (how many distinct contexts a word completes) for its lower-order distribution instead of raw unigram frequency, and what problem that specifically fixes.
  5. Your Viterbi POS tagger (Assignment 10) uses add-one smoothing with a `<UNK>` emission and log-probabilities. Why work in log space, how does the back-pointer table recover the best tag sequence, and what would break if you evaluated micro-F1 on the tiny 8-sentence corpus for a real-world tagger?

### 19. Odoo  `Archit-175/Odoo`  — PUBLIC
- **Repo:** https://github.com/Archit-175/Odoo
- **Description:** ReWear – a community clothing-exchange web platform where users list unused garments and acquire others via direct swaps or a point-based redemption system. Built as a hackathon submission (Team "Crawlers", Odoo x SVNIT). The repo is a fork of `jaindevshrut/Odoo` and contains two independent codebases: a React SPA (`rewear-new/`) and an Express/MongoDB REST API (`Backend/`).
- **Problem it solves:** Reduces textile waste and promotes sustainable fashion by giving wearable clothing a second life — letting people swap items directly or redeem them with earned points instead of buying new or discarding.
- **Tech Stack:** JavaScript (ES modules). Frontend: React 19, React Router v7, React-Bootstrap / Bootstrap 5, Bootstrap Icons, react-icons, axios (dependency present, not wired), Create React App (react-scripts). Backend: Node.js, Express 4, Mongoose 8 (MongoDB), JWT (jsonwebtoken), bcrypt, Multer (file uploads), Cloudinary SDK (image/video hosting), cookie-parser, cors, dotenv, mongoose-aggregate-paginate-v2. Tooling: nodemon, prettier.
- **My Role:** Co-author / documentation-only contributor. Archit is the top committer by count (5/14 commits) but ALL five of his commits are README edits (`Create readme.md` … `Update README with project details and features`). Git blame shows he authored zero application code — backend built by `jaindevshrut`, frontend by `Nilangbhuva` and `aayush4jha`. Honest framing: he was a hackathon teammate who owned project documentation/write-up, not the implementation.
- **Architecture:** Decoupled two-tier, but the tiers are NOT integrated in this repo. (1) Backend is a clean layered Express monolith: `routes → controllers → models`, with `middlewares` (JWT auth + Multer), `utils` (ApiError/ApiResponse/asyncHandler wrappers, Cloudinary helpers), and a Mongoose data layer. REST API namespaced under `/api/v1/{users,products,comments,admin,healthcheck}`. (2) Frontend is a standalone React SPA (Router with 8 routes: landing, login, register, dashboard, browse, item detail, add-item, admin) that renders on local/mock data — there is no axios call or API base URL wiring it to the backend yet.
- **Key Features Built:**
  - JWT auth with access + refresh tokens, bcrypt password hashing (pre-save hook), and cookie/Bearer token support via `verifyJWT` middleware
  - Role-based access: `isAdmin` guard keyed on `acctype`, plus a full admin controller (CRUD over users, orders, comments)
  - Product/item listing CRUD with ownership checks (only `listedBy` can update/delete/toggle availability)
  - Image + video upload pipeline: Multer disk storage → Cloudinary upload → URL persisted, with rollback/cleanup on failure and delete-from-Cloudinary on update/delete
  - Paginated, searchable product feed via MongoDB aggregation ($match regex search, $lookup to join owner, $project, $sort, $skip/$limit) plus a "latest products" endpoint
  - Points balance on the User model and a comment/rating model for item reviews
  - React SPA with protected-looking routes for dashboard, browse, item detail, add-item, and an admin panel
- **ML/AI Details:** Not applicable. No ML/AI components. (Note: the `copilot-swe-agent[bot]` in history is AI-assisted coding, not a product ML feature.)
- **APIs / Integrations:** Cloudinary (media storage/CDN for item images and videos). JWT for auth tokens. No payment, LLM, or third-party auth providers.
- **Database / Storage:** MongoDB via Mongoose. Modest schema: 4 models — User (auth, points, address/phone, admin flag), Product (images/video, price, category, size, condition, status, listedBy ref), Order (orderedBy/listedBy user refs), Comment (product + owner refs, content, rating). Media offloaded to Cloudinary. Aggregate pagination plugin on Product.
- **Complexity Level:** Medium — real JWT/refresh-token auth, role-based admin layer, Cloudinary media pipeline, and aggregation-based search lift it above basic CRUD, but it's a small 4-model domain with the frontend and backend not yet integrated.
- **Commits & Activity:** Short, intense hackathon burst. 5 contributors (Archit 5, aayush 4, Nilang 3, jaindevshrut/Dev Shrut 2), 14 commits total. Core code landed 2025-07-12; Archit's last README polish was 2026-05-17. Single `main` branch (backend merged via PR #3). Low overall volume, typical of a hackathon prototype.
- **Resume Bullet:** Contributed to ReWear, a sustainable-fashion clothing-swap platform (React 19 SPA + Express/MongoDB API with JWT auth, role-based admin, and a Cloudinary media pipeline) as a 4-person hackathon team, owning the project documentation and problem write-up.
- **Potential Interview Questions:**
  1. The React frontend has `axios` as a dependency but no API calls or base URL configured — how would you wire the SPA to the `/api/v1` Express backend, and how would you handle auth token storage (cookie vs. header) given the backend supports both?
  2. In `verifyJWT` you accept tokens from either a cookie or the Authorization header, and `generateAccessAndRefreshToken` saves a refresh token to the user — walk me through the full refresh-token rotation flow and where it could be exploited.
  3. `addAProduct` uploads images to Cloudinary in a sequential `for` loop and rolls back on video-upload failure — how would you make this atomic and parallel, and what happens to already-uploaded images if the DB `Product.create` throws?
  4. `getAllProducts` builds a MongoDB aggregation with a `$regex` search on title/description — what are the performance and injection concerns of regex search at scale, and how would you index or replace it (e.g. text index / Atlas Search)?
  5. The domain models a swap/points economy but the `Order` schema only stores `orderedBy`/`listedBy` arrays with no status, points-delta, or item reference — how would you redesign the schema to correctly represent a swap or a point-redemption transaction?

### 20. Puzzle-Tracker-  `Archit-175/Puzzle-Tracker-`  — PUBLIC
- **Repo:** https://github.com/Archit-175/Puzzle-Tracker-
- **Description:** A single-page web app for tracking study progress on a curated list of ~90 GeeksforGeeks interview brain-teasers (grouped by category and by company that has asked them). The owner ticks puzzles as solved, writes per-puzzle notes, and gets a personal analytics dashboard — progress ring, cumulative-solves timeline, a GitHub-style activity heatmap, per-category breakdown, and daily-puzzle picks.
- **Problem it solves:** Interview prep for logical/aptitude puzzles is scattered across dozens of GFG pages with no way to track what you've done. This app centralizes the list, remembers your solves and notes locally, gives a motivational progress view, and can be published as a static "showcase" page (view-only for visitors, PIN-unlocked for the owner) — with optional cross-browser sync via a personal GitHub Gist.
- **Tech Stack:** Vanilla JavaScript (ES6+, no framework, no build step), HTML5, CSS3 (heavy use of OKLCH colors, CSS custom properties, embedded base64 woff2 fonts), inline hand-built SVG charts, Web Crypto API (`crypto.subtle` — SHA-256, PBKDF2, AES-GCM), `localStorage`/`sessionStorage`, GitHub REST API (Gists), `window.open` + print for PDF export. Dev server is `python3 -m http.server` (per `.claude/launch.json`). ~2,470 LOC across `app.js` (1,485), `styles.css` (747), `index.html` (211).
- **My Role:** Sole author — 15/15 commits (100%) under architsavaliya175@gmail.com, all authored Jun–Jul 2026. No other human contributors; not a fork.
- **Architecture:** Pure client-side monolith / static SPA. No backend. `index.html` defines two "pages" (puzzle list + profile/analytics) toggled by a tiny hash router (`#profile`). `progress.js` is a committed "published snapshot" (`window.PUBLISHED_PROGRESS`) that seeds baseline state on the public site; `app.js` holds the puzzle dataset, state layer (localStorage over the published baseline), rendering, search/filter, analytics, an edit-lock system, and an optional GitHub-Gist cloud-sync module. State shape: `{v, solved{url}, collapsed{cat}, notes{url}, solvedAt{url:YYYY-MM-DD}}`.
- **Key Features Built:**
  - Category-grouped puzzle list with per-puzzle solve ticks, debounced auto-saving notes, live search with `<mark>` highlighting, and All/Solved/Unsolved segmented filters
  - View-only vs. edit mode gated by a PIN: only a SHA-256 hash of the PIN is stored (`crypto.subtle.digest`), and edits are blocked / storage writes suppressed until unlock
  - Analytics dashboard rendered as hand-coded inline SVG: cumulative-progress area+line chart and a 27-week GitHub-style contribution heatmap, plus current-streak / best-day / active-days stat cards computed from `solvedAt`
  - Deterministic "Today's Puzzles": a Mulberry32 seeded PRNG seeded by the date string drives a Fisher–Yates shuffle, so every browser shows the same 3 unsolved picks each day with no coordination
  - Optional cross-browser cloud sync backed by a private GitHub Gist (create/find/GET/PATCH via REST), with union-merge of remote state and a debounced push scheduler
  - PIN-encrypted sync token: the GitHub PAT is encrypted with PBKDF2 (250k iters) + AES-GCM using the owner's PIN and committed as ciphertext in `progress.js`, so any browser can auto-connect after entering the PIN — plaintext token never committed
  - Data management: JSON export/import (union-merge), "Save snapshot" that downloads a regenerated `progress.js` to publish, PIN/code-gated reset, and a print-to-PDF notes export that builds a styled document in a new window
- **ML/AI Details:** Not applicable — no ML/AI. (The one bot committer, copilot-swe-agent, is AI-assisted tooling, not a model in the product.)
- **APIs / Integrations:** GitHub REST API v3 — `/user` (token validation), `/gists` (list/create), `/gists/{id}` (GET/PATCH) using a user-supplied personal access token as `Authorization: token …`. No other third-party services.
- **Database / Storage:** No server DB. Client persistence via browser `localStorage` (progress, notes, collapsed state, cloud config) and `sessionStorage` (edit-mode flag). Optional remote store = a single private GitHub Gist holding one JSON file. Puzzle catalog is a hardcoded JS array (~90 objects). "Schema" is a handful of flat URL-keyed maps — low complexity.
- **Complexity Level:** Medium — trivial as CRUD, but elevated by real Web-Crypto usage (PIN hashing + PBKDF2/AES-GCM token encryption), a Gist-based sync/merge layer, seeded deterministic daily picks, and from-scratch SVG data-viz, all in dependency-free vanilla JS.
- **Commits & Activity:** 15 commits, single author (Archit Savaliya), active window Jun 18 – Jul 1 2026 (bulk on Jun 18, follow-up bug fixes Jul 1: daily-puzzle fix, graph fix, duplicate/empty question cleanup). Small, focused, recently maintained solo project.
- **Resume Bullet:** Built a dependency-free vanilla-JS single-page interview-puzzle tracker (~2.5k LOC) with a PIN-gated edit lock (SHA-256), PBKDF2+AES-GCM-encrypted GitHub-Gist cross-browser sync, hand-coded SVG analytics (cumulative timeline + contribution heatmap), and a seeded-PRNG deterministic daily-puzzle feature — publishable as a static, view-only showcase page.
- **Potential Interview Questions:**
  1. You gate editing behind a client-side PIN whose SHA-256 hash sits in `app.js`, and you note it's a "soft lock." What can and can't this actually protect on a public static site, and how would you make it real security?
  2. Walk through the token-encryption flow: PBKDF2 (250k iters) → AES-GCM, salt/iv generation, and committing the ciphertext in `progress.js`. What's the threat model, and why is a short numeric PIN the weak link?
  3. `getDailyPicks()` uses a Mulberry32 PRNG seeded from the date string plus a Fisher–Yates shuffle. Why is determinism important here, and what happens to "today's picks" when the solved set changes mid-day?
  4. Cloud sync does a union `mergeRemote()` then pushes. What conflict/merge anomalies can arise across two browsers (e.g. a note edited in both, or an unsolve on one side), and how would you move toward last-write-wins or CRDT semantics?
  5. State is layered: `PUBLISHED_PROGRESS` baseline in `progress.js`, overridden by `localStorage`, optionally merged with a Gist. Trace how these three sources reconcile on load in `loadState()`, and where a stale published snapshot could surprise a returning owner.

### 21. SQL-TRACKER  `Archit-175/SQL-TRACKER`  — PUBLIC
- **Repo:** https://github.com/Archit-175/SQL-TRACKER
- **Description:** A zero-dependency, static single-page web app for tracking practice of LeetCode Database (SQL) problems. It ships with 105 seeded problems, per-question status/notes/SQL-solution tracking, a "Daily 5" daily challenge with a speed timer, and an analytics dashboard (activity heatmap, solved-over-time, breakdowns). All state lives in the browser's `localStorage` with optional cross-device sync through a private GitHub Gist. Deployed live on Vercel (sql-tracker-steel.vercel.app).
- **Problem it solves:** Gives someone grinding SQL interview problems a lightweight, self-hosted progress tracker that persists offline, works from `file://`, and — unusually for a static site with no backend — syncs the same progress across multiple devices without a server or database, purely via the user's own GitHub Gist.
- **Tech Stack:** Vanilla JavaScript (ES6, no framework, no build step), HTML5, CSS3 (custom dark theme with CSS variables, `@font-face` self-hosted Comic Shanns / Comic Shanns Mono fonts), inline hand-authored SVG for all charts, Web Crypto API (`crypto.subtle`: SHA-256, PBKDF2, AES-GCM), `localStorage` / `sessionStorage`, Fetch API against the GitHub REST/Gist API. Hosted on Vercel. No package.json, no dependencies, no bundler.
- **My Role:** Sole author — 18/18 commits (100%), architsavaliya175@gmail.com / "Archit Savaliya". Built the entire app from the initial static-app commit through Gist sync, the Daily 5 feature, the pause/resume timer, and the favicon. This is his most recent repo (commits Jul 2–5, 2026).
- **Architecture:** Client-only monolith with no backend, cleanly split into cooperating global-object modules loaded in dependency order: `questions.js` (seed `QUESTIONS` array + `SOLVED_DATES`) → `progress.js` (committed `PUBLISHED_PROGRESS` baseline snapshot, also carrying the PIN-encrypted sync token) → `storage.js` (`Store`: layered persistence + union-merge) → `analytics.js` (`Analytics`: stats + SVG rendering) → `sync.js` (`Cloud`: Gist sync + crypto) → `app.js` (view/state/wiring). Data flows through a three-layer resolution in `Store.get`: seed defaults < committed published snapshot < local `localStorage` working copy. Cross-device state is reconciled by a union merge (`mergeRemote`) that never clobbers a stronger local value (e.g. an existing "Solved" or non-empty note).
- **Key Features Built:**
  - Layered persistence engine (`storage.js`): effective record = seed default < `PUBLISHED_PROGRESS` baseline < local edits, keyed by stable question `id` so notes/status/solutions survive when questions are added or reordered.
  - Serverless cross-device sync via a single private GitHub Gist auto-resolved by filename (`sql-tracker-progress.json`) — no Gist ID is ever entered; the same token/account converges to the same gist on every device, with debounced auto-push and pull-then-merge on connect.
  - Client-side crypto: SHA-256 PIN gate (only the hash is committed), and the GitHub token encrypted with the PIN via PBKDF2 (250k iterations) + AES-GCM before being committed inside `progress.js`, so any new device unlocks-with-PIN and auto-connects — no token re-entry.
  - "Daily 5" challenge: 5 currently-untouched (Todo) problems chosen once per day via a deterministic date-seeded PRNG (mulberry32 + FNV-1a hash), then frozen and synced through the gist so every device shows the identical set.
  - Daily 5 speed timer with Start / Pause / Resume / Stop, accumulating only active time (`accumulatedMs + runningSince` model), auto-start on first solve and auto-finish when all 5 are done, with sessions merged across devices.
  - Analytics dashboard rendered entirely as hand-drawn inline SVG: GitHub-style contribution heatmap, solved-per-day line/area chart, Daily-5 speed bar chart, and difficulty/topic breakdown bars, plus current-streak computation.
  - List UX: group by difficulty or topic with collapsible sections and solved/total counts, search by id/title, difficulty/topic/status filters, per-row expandable notes + monospace SQL editor, and a "Random practice" jump that scrolls-to and flashes an unsolved problem.
- **ML/AI Details:** Not applicable — no machine learning in the codebase.
- **APIs / Integrations:** GitHub REST / Gist API (`api.github.com` — `/user`, `/gists`, PATCH gist) using a classic PAT with `gist` scope, sent in the `Authorization` header via Fetch. Browser Web Crypto API. Vercel for static hosting. LeetCode links are outbound `href`s only. No payment/auth-provider/LLM SDKs.
- **Database / Storage:** No server database. Client storage only: `localStorage` (progress map, cloud config, per-date timer sessions, per-date frozen Daily 5 sets) and `sessionStorage` (unlock flag). The "cloud" store is a single JSON blob in a private GitHub Gist. Schema is a flat, id-keyed JSON snapshot (`status`, `notes`, `solution`, `solvedAt`, `timers`, `dailySets`) — simple structurally, but the merge/conflict-resolution logic across it is non-trivial.
- **Complexity Level:** Medium — a static, dependency-free SPA (which caps it below High), but well above a toy: it implements genuine distributed-state concerns (serverless multi-device sync, union merge/conflict resolution, PBKDF2/AES-GCM token encryption, deterministic seeded selection, a pause/resume time-accounting model, and from-scratch SVG charting).
- **Commits & Activity:** 18 commits, single contributor (Archit, 100%), active over a short focused burst Jul 2–5 2026 — his most recent project. History shows clear iterative product evolution (static app → Gist sync → Daily 5 → freeze/sync the set → speed timer → pause/resume → favicon).
- **Resume Bullet:** Built a zero-dependency vanilla-JS SQL-practice tracker (105 problems, ~2,300 LOC) with serverless cross-device sync over a private GitHub Gist, PIN-gated editing and PBKDF2 + AES-GCM client-side token encryption, a deterministic daily-challenge engine with a pause/resume speed timer, and a full analytics dashboard rendered in hand-authored inline SVG; deployed on Vercel.
- **Potential Interview Questions:**
  1. In `Store.get`, effective state resolves as seed default < committed `PUBLISHED_PROGRESS` < local `localStorage`, and `mergeRemote` refuses to overwrite a local "Solved" status or a non-empty note. Walk through a concrete conflict — two devices editing the same problem — and explain why this union-merge (rather than last-write-wins) was the right call and where it can still lose data.
  2. You encrypt the GitHub token with PBKDF2 (250k iterations) + AES-GCM keyed on a 4-digit PIN (`6612`) and commit the ciphertext into `progress.js` in a public repo. Given the PIN's tiny keyspace, how brute-forceable is that blob, what does the iteration count actually buy you, and how would you harden this without a backend?
  3. `getDailySetIds` uses a mulberry32 PRNG seeded from an FNV-1a hash of the date so the "Daily 5" is deterministic per day, then freezes the picked ids into the synced store. Why seed-then-freeze instead of just recomputing from the seed on each device — what breaks if you rely on the seed alone once someone starts solving?
  4. The pause/resume timer models active time as `accumulatedMs + (runningSince ? now - runningSince : 0)` and merges sessions across devices preferring a finished session, else the earliest start. What are the failure modes across device clocks, timezones, and a date rollover mid-session, and how would you make elapsed time authoritative?
  5. The whole app is global-object modules (`Store`, `Cloud`, `Analytics`) loaded via ordered `<script>` tags with no bundler, and every chart is a hand-built SVG string. What concretely pushed you away from a framework/build step here, and at what feature or scale would that decision start costing you?

### 22. GoogleColab  `Archit-175/GoogleColab`  — PUBLIC
- **Repo:** https://github.com/Archit-175/GoogleColab
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A personal learning repository of ~19 Google Colab notebooks spanning classical machine learning, clustering, automated exploratory data analysis (EDA), and NLP preprocessing, plus a standalone AI-assisted Python encrypted-chat mini-project (Diffie-Hellman + AES-GCM). Built as vacation self-study following the Krish Naik ML/NLP curriculum.
- **Problem it solves:** Serves as a hands-on portfolio demonstrating end-to-end ML fundamentals — model training, hyperparameter tuning, pruning, cluster-count selection, and rapid data profiling — plus a practical demonstration of secure symmetric-key messaging over TCP. Not a production product; it is a skills-building and reference codebase.
- **Tech Stack:** Python 3.10, Jupyter/Google Colab notebooks; scikit-learn (LogisticRegression, DecisionTreeClassifier/Regressor, KMeans, DBSCAN, AgglomerativeClustering, LinearRegression, Ridge, GridSearchCV, cross_val_score, StandardScaler, PCA, make_blobs/make_moons); pandas, NumPy; Matplotlib, Seaborn; NLTK (sent/word/wordpunct/Treebank tokenizers, Porter/Lancaster/Regexp/Snowball stemmers, WordNetLemmatizer); automated-EDA libraries AutoViz, D-Tale, ydata-profiling (pandas-profiling), SweetViz; `kneed` (KneeLocator); the `cryptography` library (hazmat: dh, HKDF-SHA256, AESGCM) with Python `socket`/`threading` for the chat app.
- **My Role:** Sole author — 24/28 human commits are Archit's (architsavaliya175@gmail.com / "Archit Savaliya"). The remaining 4 commits are from copilot-swe-agent[bot], i.e. his own AI-assisted work (the DH/AES-GCM chat feature on the `copilot/add-diffie-hellman-chat` branch, merged via PR #1). No human co-authors. Active window Dec 2024 – Nov 2025.
- **Architecture:** Not a single application — a flat collection of self-contained notebooks loosely grouped by topic into folders (`EDA/`, `ML/`, `NLP/`) with several notebooks at the repo root. Each notebook is an independent load-data → preprocess → train/analyze → evaluate pipeline. The only non-notebook code is a two-file client/server chat program (`chat_server.py` + `chat_client.py`), each a class (`EncryptedChatServer`/`EncryptedChatClient`) using a length-prefixed TCP framing protocol, background receive thread, and shared crypto helpers.
- **Key Features Built:**
  - Supervised ML notebooks: Logistic Regression on Iris (binary versicolor-vs-virginica) tuned with `GridSearchCV` over penalty/C/max_iter (best CV 0.973, test accuracy 0.92); Decision Tree classification with pre-pruning (`max_depth`) and cost-complexity post-pruning (test accuracy 0.98); Linear/Ridge regression on the Boston housing dataset with 10-fold CV and R² scoring; Decision Tree Regression with GridSearchCV.
  - Unsupervised clustering: K-Means with Elbow method + `KneeLocator` + silhouette-score selection on `make_blobs`; DBSCAN on `make_moons` with StandardScaler; Hierarchical/Agglomerative clustering on Iris with PCA dimensionality reduction.
  - Automated EDA: four notebooks each showcasing a different profiling tool — AutoViz, D-Tale, ydata-profiling, SweetViz — on tips/titanic/diamonds datasets.
  - Manual EDA + feature engineering: Zomato restaurant dataset and Kaggle Black Friday train/test (label encoding, StandardScaler).
  - NLP preprocessing: tokenization (sentence/word/wordpunct/Treebank) and Stemming vs Lemmatization comparison (Porter/Lancaster/Regexp/Snowball vs WordNetLemmatizer) with an NLP roadmap note.
  - Encrypted chat app: DH parameter generation (2048-bit MODP, generator 2), public-key exchange over TCP, HKDF-SHA256 derivation of a 256-bit AES key, AES-GCM encrypt/decrypt with random 12-byte nonces, and length-prefixed message framing across two terminals.
- **ML/AI Details:** Multiple small models, all on toy/standard datasets. Iris LogisticRegression: GridSearchCV best `{C:1, max_iter:100, penalty:'l2'}`, CV accuracy 0.973, held-out test accuracy 0.92. Iris DecisionTree with post/pre-pruning: test accuracy 0.98. Boston regression: LinearRegression + Ridge tuned via GridSearchCV, evaluated with neg-MSE cross_val_score and R². K-Means: k=3 confirmed by Elbow/KneeLocator and silhouette (~0.81 at k=3). DBSCAN and Agglomerative used for density/hierarchical clustering demos. No deep learning; NLP is preprocessing only (no trained language model).
- **APIs / Integrations:** None (no external/hosted APIs). Datasets are loaded from Seaborn built-ins, scikit-learn generators/loaders, a public CMU Boston URL, and local CSVs (Zomato, Kaggle Black Friday). The chat app is pure-Python sockets with no third-party service.
- **Database / Storage:** None. Data lives in in-memory DataFrames/arrays and local CSV files; no database, ORM, or persistent store.
- **Complexity Level:** Low–Medium — mostly standard tutorial-grade ML/EDA notebooks (Low), lifted slightly by the self-contained DH + AES-GCM encrypted TCP chat implementation (Medium) and the breadth of techniques covered.
- **Commits & Activity:** Lightly but steadily active; sole contributor (Archit, 24/28 human commits) plus 4 AI-assisted (copilot) commits. Active Dec 2024 – Nov 2025. Growth is incremental "Created using Colab" uploads plus one feature branch (encrypted chat) merged via PR #1, including a follow-up security bump of `cryptography` to >=42.0.4.
- **Resume Bullet:** Built a 19-notebook applied-ML learning portfolio implementing supervised models (logistic/linear/ridge regression, decision trees with pre/post-pruning up to 0.98 accuracy), unsupervised clustering (K-Means, DBSCAN, hierarchical) with Elbow/silhouette model selection, automated EDA across four profiling tools, and NLP tokenization/stemming — plus an AI-assisted Diffie-Hellman + AES-GCM encrypted TCP chat client/server in Python.
- **Potential Interview Questions:**
  1. In the Iris LogisticRegression notebook, your GridSearchCV reported 330/495 fits failing (lbfgs rejecting l1/elasticnet penalties) — how would you fix the parameter grid so every candidate is valid, and why did the default solver reject those penalties?
  2. Across your K-Means notebook you used three methods to pick k (Elbow/WCSS, KneeLocator, and silhouette score) — how do these differ, and what would you trust when they disagree? Why did silhouette peak at k=3 rather than k=2?
  3. In your regression and decision-tree notebooks you call `r2_score(y_pred, y_test)` and `accuracy_score(y_pred, y_test)` with predictions as the first argument — does argument order matter for these metrics, and which ones would break if swapped?
  4. Walk through the Diffie-Hellman key exchange in `chat_server.py`/`chat_client.py`: what exactly is derived via HKDF-SHA256, why send the DH parameters over the wire, and what man-in-the-middle weakness does this design still have (as your own README admits)?
  5. Your chat protocol uses a 4-byte big-endian length prefix and a random 12-byte nonce per AES-GCM message — why is per-message nonce uniqueness critical for GCM, and what happens to confidentiality/integrity if a nonce is ever reused under the same derived key?

### 23. job  `Archit-175/job`  — PUBLIC
- **Repo:** https://github.com/Archit-175/job
- **Part of:** Component of the **Crawlers** forestry project (#16) — the "apply for forestry jobs" job-board / application module, not a standalone project (its search box redirects to the Crawlers sibling site).
- **Description:** A forestry-themed job board web app ("Forestry Jobs") that lists forestry roles (Forestry Technician, Forester, Logger, Amenity Horticulturist, Forest Ranger) with images and descriptions, lets users apply via a modal form, and persists submitted applications to a MongoDB database through a small Express backend. It also ships a header with an animated flickering SVG logo and a country/forest autocomplete search box that redirects to an external companion site.
- **Problem it solves:** Provides a simple careers/apply portal for a forestry/conservation site — visitors can browse open roles and submit an application (name, email, phone, country, job title, message, CV field) that is stored server-side for later review.
- **Tech Stack:** HTML5, CSS3 (custom animations/keyframes, flexbox, responsive media queries), vanilla JavaScript (DOM, modal logic, keyboard-navigable autocomplete); Node.js + Express 4 backend; Mongoose 8 / MongoDB Atlas; body-parser, dotenv, hbs (declared but unused), nodemon (dev); Font Awesome (v4 + v6 via CDN); Vercel (`@vercel/node`) for serverless deployment.
- **My Role:** Sole author — 1/1 commits (single "Add files via upload" commit, Aug 2024) under architsavaliya175@gmail.com / "Archit Savaliya". This is an early/learning-stage full-page upload rather than an incrementally developed project; the whole codebase was committed at once.
- **Architecture:** Small monolith. A static frontend (`index.html` + `header.css` + inline `<style>` + `search-box.js`) is served by an Express server (`app.js`) that also exposes a JSON/urlencoded API. The server connects to MongoDB Atlas via Mongoose, defines a single `Register` schema/model, and handles `POST /submit` to save an application and redirect home. `vercel.json` routes all traffic to `app.js` as a serverless function. The search box is a pure client-side lookup table mapping country/forest names to URLs on an external `crawlers-one.vercel.app` site.
- **Key Features Built:**
  - Job listing UI with alternating left/right image layout (`:nth-child(even)`), hover scale, and slide/fade CSS keyframe animations.
  - Modal-based "Apply" form that pre-selects the clicked job title, with client-side `required` validation and a CV file-upload input (`.pdf,.doc,.docx`).
  - Express `POST /submit` route that destructures the form body and persists it to MongoDB via a Mongoose `Register` model, with try/catch error handling and redirect-on-success.
  - Keyboard-navigable autocomplete search box (arrow-up/down selection, Enter to go, click-to-select) filtering ~35 country/forest keywords and redirecting to the matching page.
  - Animated multi-layer SVG "flicker" logo cycling four SVG frames via staggered `@keyframes` opacity animations.
  - Responsive design with a hamburger (checkbox-toggle) mobile menu and mobile-first layout reflow.
- **ML/AI Details:** Not applicable — no ML/AI components.
- **APIs / Integrations:** MongoDB Atlas (cloud database) via Mongoose connection string; Font Awesome icon CDNs (cdnjs + stackpath); external image host (im.ge) for job photos; hardcoded links to a companion `crawlers-one.vercel.app` forest-content site. No third-party auth/payment/LLM APIs.
- **Database / Storage:** MongoDB Atlas. Very low schema complexity — a single collection/model (`Register`) with 6 fields (name, email, number, country, jobTitle, message). No relations, indexes, or migrations.
- **Complexity Level:** Low — standard static frontend plus a single-route Express/Mongo CRUD "create" endpoint; no auth, no real-time, no data modeling beyond one flat document, committed as one upload.
- **Commits & Activity:** Minimal — 1 commit total, single contributor (Archit, sole author), active window essentially one day in Aug 2024. No ongoing development history.
- **Resume Bullet:** Built a full-stack forestry job-board web app with a responsive vanilla-JS/CSS frontend (modal apply form, animated SVG logo, keyboard-navigable autocomplete) and a Node.js/Express + MongoDB (Mongoose) backend that persists job applications, deployed as a Vercel serverless function.
- **Potential Interview Questions:**
  1. In `app.js` the MongoDB Atlas connection string (with username/password) is hardcoded on line 13 even though `dotenv` is imported — why is that a serious security risk, and how would you move it to an environment variable and rotate the exposed credentials?
  2. The apply form posts to `POST /submit` and includes a `<input type="file" name="cv">`, but the Express route only reads text fields from `req.body` — what's missing (e.g. multipart parsing with multer) and where would the uploaded CV actually be stored?
  3. Your Mongoose schema types `number` (phone) as `Number` — what breaks for phone numbers with leading zeros, `+` country codes, or spaces, and how would you fix the type/validation?
  4. There's both a `GET /submit` (serving a nonexistent `submit.html`) and a `POST /submit` route — walk me through the actual request/response flow when a user submits the form, and what the browser sees after `res.redirect('/')`.
  5. The country/forest search in `search-box.js` is a hardcoded client-side object mapping ~35 names to external URLs — how would you make this scale (server-side search, fuzzy matching, or a real API) and handle the trailing-whitespace/relative-vs-absolute URL inconsistencies present in that map?

### 24. jobApplicatoin  `Archit-175/jobApplicatoin`  — PUBLIC
- **Repo:** https://github.com/Archit-175/jobApplicatoin
- **Part of:** Component of the **Crawlers** forestry project (#16) — the "apply for forestry jobs" job-board / application module, not a standalone project (its search box redirects to the Crawlers sibling site).
- **Description:** A themed "Forestry Jobs" web app: a dark, forest-green landing page listing forestry roles (Forestry Technician, Forester, Logger, Amenity Horticulturist, Forest Ranger), each with an "Apply" button that opens a modal application form. The form collects name/email/phone/country/job title, a free-text message, and a CV file upload. A separate Express + MongoDB backend receives the submission, stores the CV to disk, and persists the applicant record to MongoDB. A header search box with autocomplete lets users jump to per-country/per-forest info pages hosted on a sibling Vercel site.
- **Problem it solves:** A lightweight careers/job-application portal for a forestry/conservation theme — lets visitors browse open roles and submit applications (with resume upload) without a third-party ATS.
- **Tech Stack:** HTML5, CSS3 (custom, CSS animations/keyframes, responsive media queries), vanilla JavaScript (DOM, autocomplete with keyboard nav). Backend: Node.js, Express 4, Mongoose 8 (MongoDB Atlas), Multer (file uploads), body-parser, dotenv, hbs (declared but unused), nodemon (dev). Font Awesome (CDN) for icons; inline SVG logo with a 4-frame CSS "flicker" glow animation. Deployment: Vercel (`@vercel/node`, `vercel.json`). External image hosting via im.ge.
- **My Role:** Minor contributor — 4 of 14 commits (team of 3: Dev Shrut Jain 6, Suhanii 4, Archit 4). Archit's authored work is the Vercel deployment config (`Create vercel.json` / `Update vercel.json`) plus two small `index.html` edits — adding the Font Awesome CDN `<link>` tags and fixing the logo anchor `href` / trimming whitespace. He set up the deploy pipeline and made small frontend fixes; the Express/Mongoose backend and the search-box feature were authored by teammates (Dev Shrut Jain and Suhanii respectively).
- **Architecture:** Simple two-tier monolith. Static frontend (`index.html` + `header.css` + inline `<style>` + `search-box.js`) served by a single Express server (`app.js`) that also exposes `POST /submit`. On submit, Multer writes the uploaded CV to a local `./uploads` dir (created on demand) and a Mongoose model (`Register` collection) saves the applicant metadata to MongoDB Atlas, then redirects home. No separate API layer, no auth, single schema.
- **Key Features Built:**
  - Job listings grid with hover/scale animations and alternating left/right image layout (`nth-child(even)`), responsive down to mobile.
  - Modal application form (open/close on click and outside-click) that pre-selects the job title based on which "Apply" button was pressed.
  - CV file upload restricted to `.pdf/.doc/.docx`, stored to disk via Multer with a timestamped filename.
  - Express `POST /submit` route persisting applications to MongoDB via a Mongoose schema (name, email, number, country, jobTitle, message, cv path).
  - Header autocomplete search (`search-box.js`): filters ~37 country/forest keywords, supports ArrowUp/ArrowDown/Enter keyboard navigation, and redirects to the matching external info page.
  - Animated flicker SVG logo built from 4 layered SVGs cycling opacity via staggered `@keyframes`.
  - Vercel serverless deployment config routing all traffic to the Node app (Archit's contribution).
- **ML/AI Details:** Not applicable — no ML/AI. ("copilot-swe-agent[bot]" does not appear as a contributor in this repo.)
- **APIs / Integrations:** MongoDB Atlas (cloud MongoDB, connected via a hardcoded connection string in `app.js`). Font Awesome via CDN. External info pages hosted on a sibling Vercel app (`crawlers-one.vercel.app`). Images hosted on im.ge. No auth/payment/LLM integrations.
- **Database / Storage:** MongoDB Atlas via Mongoose — a single collection/model (`Register`) with one flat schema (name, email, number, country, jobTitle, message, cv path). Uploaded CV files stored on the local `./uploads` filesystem (ephemeral on serverless). Very low schema complexity (1 model).
- **Complexity Level:** Low — a small static multi-page site plus a single-route Express/Mongoose CRUD-write backend; no auth, one data model, no real-time or ML.
- **Commits & Activity:** Short burst — all 14 commits on 2024-08-20 (a one-day collaborative build, likely a hackathon/college project). 3 human contributors. Not actively maintained since.
- **Resume Bullet:** Contributed to a 3-person forestry job-application web app (HTML/CSS/JS front end + Express/MongoDB backend with Multer CV uploads); set up the Vercel serverless deployment (`vercel.json`) and made front-end fixes (Font Awesome integration, logo/navigation cleanup).
- **Potential Interview Questions:**
  1. The MongoDB Atlas connection string and credentials are hardcoded directly in `app.js` instead of using the `dotenv`/`process.env` that's already imported — why is that a problem and how would you fix it (and rotate the exposed secret)?
  2. Multer stores uploaded CVs to a local `./uploads` directory, but the app is deployed to Vercel serverless (`@vercel/node`). Why would disk-persisted uploads be lost there, and what storage would you use instead (e.g., S3/GridFS/object storage)?
  3. The form posts to `POST /submit`, but there's also an `app.get('/submit')` that serves a `submit.html` that isn't in the repo. Walk me through the actual request flow and what happens if `req.file` is undefined on submit.
  4. In `search-box.js`, the autocomplete keeps a `selectedIndex` and mutates `innerHTML` on each keystroke to rebuild the results list. What are the correctness/XSS/performance concerns of rebuilding `innerHTML` from user input this way, and how would you make it safer?
  5. Your commits were the `vercel.json` config and adding two Font Awesome CDN links — what does the `vercel.json` `builds`/`routes` config do here, and why load Font Awesome from a CDN versus bundling it? What are the trade-offs (offline, versioning, CSP)?

### 25. sampark-backend  `jeet0407/sampark-backend`  — PRIVATE  _(earlier version of #27 — see SMPRK)_
- **Repo:** https://github.com/jeet0407/sampark-backend
- **Description:** The earlier personal-repo version of the Sampark NestJS + Prisma document-approval backend. The **current, actively-developed version is SMPRK** (`smprk-svnit/smprk-backend`, entry **#27**) — see that entry for the full deep-dive, architecture, features, and interview questions.
- **Relationship:** Same codebase as #27; the `smprk-svnit` org copy is a few commits ahead and is the maintained one. This `jeet0407` copy is the origin/earlier snapshot.
- **Tech Stack:** NestJS 11, TypeScript, Prisma 6, PostgreSQL, Passport-JWT, Upstash Redis, AWS S3, react-pdf / pdf-lib / pdfjs-dist, Resend (identical to #27).
- **My Role:** **Team lead & coordination** — same as #27 (Archit leads/coordinates the team; committed code authored primarily by jeet0407).
- **Status:** Superseded by SMPRK (#27), which is the current active version.
- **Everything else:** See **#27** (identical project).
- **Potential Interview Questions:** See #27.

### 26. sampark-frontend  `jeet0407/sampark-frontend`  — PRIVATE  _(earlier version of #28 — see SMPRK)_
- **Repo:** https://github.com/jeet0407/sampark-frontend
- **Description:** The earlier personal-repo version of the Sampark Next.js approval portal. The **current, actively-developed version is SMPRK** (`smprk-svnit/smprk-frontend`, entry **#28**) — see that entry for the full deep-dive.
- **Relationship:** Byte-identical to #28 (same HEAD); the `smprk-svnit` org copy is the maintained one.
- **Tech Stack:** Next.js 16, React 19, TypeScript, TanStack React Query v5, Tailwind CSS v4 (identical to #28).
- **My Role:** **Team lead & coordination** — same as #28.
- **Status:** Superseded by SMPRK (#28), the current active version.
- **Everything else:** See **#28** (identical project).
- **Potential Interview Questions:** See #28.

### 27. SMPRK (Sampark) — backend  `smprk-svnit/smprk-backend`  — PRIVATE  ★ CURRENT / ACTIVE
- **Repo:** https://github.com/smprk-svnit/smprk-backend  _(the current, updated SVNIT-org version of the Sampark backend — supersedes `jeet0407/sampark-backend`, entry #25)_
- **Status:** **Actively developing** — this is a live, in-progress project (last commit 2026-07-03; most recent of the Sampark line).
- **Description:** SMPRK ("Sampark") is the NestJS + Prisma backend for SVNIT (Sardar Vallabhbhai National Institute of Technology, Surat). It powers a multi-role digital document-approval platform: student-club heads draft event proposals and financial-settlement documents, the system generates a PDF, routes it through a configurable chain of approvers (faculty → office clerk → Chairman F&SW → Associate Dean SW → Dean SW), and embeds each approver's real digital signature into the PDF at exact coordinates before advancing to the next step.
- **Problem it solves:** Replaces the paper-based, physically-signed approval circuit for student-club events and reimbursements at a large engineering institute — sequential sign-offs, on-leave hand-offs, budget locking/deduction against club sponsor and institute-allocated wallets, financial deadlines, and a full audit trail — so proposals and settlements move through the hierarchy digitally while remaining legally-styled (signed, stamped PDFs).
- **Tech Stack:** TypeScript, NestJS 11 (modular architecture, DI, guards, interceptors, global ValidationPipe, `@nestjs/throttler` rate limiting), Prisma 6 ORM over PostgreSQL, Passport-JWT auth (cookie-based), bcrypt, Upstash Redis for reset-token TTL / IP-block state, AWS S3 (`@aws-sdk/client-s3` + presigner) for PDF/signature storage, `@react-pdf/renderer` for server-side PDF generation from TSX templates, `pdf-lib` for signature/text embedding, `pdfjs-dist` for text-layer anchor detection, `sharp` for signature image processing, Resend for transactional email, `class-validator`/`class-transformer` DTOs, Multer, Jest/Supertest, ESLint + Prettier.
- **My Role:** **Team lead & coordination (active project).** Archit **started as the product owner** — defining the problem, the features, the rules, and how the product should work, back when jeet was the only developer — then **took charge of the whole project** and **built a new junior team** to sustain it year-over-year (it's an institute platform that needs continuity). He leads requirements, system/workflow design decisions, integration, and delivery — while the committed backend code is primarily authored by jeet0407 (37 commits) with Aayush Prasad and others. Honest framing for interviews: lead the conversation with the architecture, the approval-workflow design, and how you ran the team; be upfront that you drove design/coordination rather than authoring the bulk of the NestJS code. (See the interview note below.)
- **Architecture:** Monolithic modular NestJS backend by domain module — `auth`, `admin`, `faculty`, `student`, `office`, `public`, `audit`, `email`, `redis`, `s3`, `security`, `prisma`. The student domain decomposes into focused services (`document-submission`, `approval`, `rejection`, `query`, `slot-generator`, `pdf-anchor-locator`, `signature-embedding`, `faculty-leave-workflow`, `financial-deadline`). Approval data flow: React-PDF renders a document PDF with invisible `[[SIGN:<slotKey>]]` text anchors → `pdfjs-dist` scans the text layer to locate each anchor's bounding box → coordinates persist as `DocumentSlot` rows → on each approval, `pdf-lib` downloads the current PDF from S3, white-boxes the anchor, stamps the approver's signature at the stored slot, re-uploads, and advances `currentStep`. Budget mutations and step transitions run inside Prisma `$transaction`s; audit logging and S3 side-effects are kept outside the transaction.
- **Key Features Built (by the team):**
  - Dynamic, role-routed multi-step approval engine (`DocumentFlowStep` + `slot-generator`): the faculty leg is variable-length (student picks N faculty), the office leg is fixed, and PROPOSAL vs FINANCIAL flows differ.
  - Anchor-based PDF signature embedding: text-layer anchor detection (`pdfjs-dist`, handling anchors fragmented across text items, affine-transform normalization) + `pdf-lib` image stamping with aspect-ratio scaling.
  - Two-wallet club budget ledger with lock-on-clerk-approval, deduct-on-dean-approval, and financial reconciliation, guarded by sufficient-balance checks inside transactions.
  - Faculty-on-leave auto-skip: a document reaching an on-leave faculty step is marked `SKIPPED_ON_LEAVE`, an "ON LEAVE" stamp is drawn, and the workflow advances (looping consecutive on-leave approvers) with email notification.
  - Security hardening: Redis-backed per-IP failed-login tracking (7 attempts / 30 min → 2 hr block), global throttling (100 req/min), forced first-login password reset, and single-use high-entropy random reset tokens (raw `crypto.randomBytes(32)` hex used as a TTL'd Redis key — not bcrypt-at-rest).
  - Comprehensive audit trail: a 30+ value `AuditAction` enum covering document lifecycle, financial actions, signature events, budget lock/deduct/unlock, and auth/security events.
  - Server-side PDF generation from TSX templates (React-PDF) for proposals and financial-approval documents, with signed/streamed download endpoints.
- **ML/AI Details:** Not applicable.
- **APIs / Integrations:** AWS S3 (document/signature storage, pre-signed URLs), Upstash Redis (serverless REST Redis for token/rate-limit state), Resend (transactional email). No payment/LLM APIs.
- **Database / Storage:** PostgreSQL via Prisma — 6 models (`User`, `Club`, `Document`, `DocumentFlowStep`, `DocumentSlot`, `AuditLog`) + 6 enums, self-referential proposal→financial relation, unique constraints, targeted indexes, `Decimal` budget columns, `Json` metadata; 25+ timestamped migrations show real schema evolution. Binary assets in S3; ephemeral state in Redis.
- **Complexity Level:** High — sequential state-machine approval workflow, coordinate-accurate PDF anchor detection + signature embedding, transactional two-wallet budget accounting, on-leave auto-skip, IP-based security, and a multi-integration (S3 + Redis + Resend) NestJS backend well beyond standard CRUD.
- **Commits & Activity:** Active roughly Jan–Jul 2026 (last commit 2026-07-03); primary code author jeet0407 (37), Aayush Prasad (3), others. Steady development, 25+ migrations. This SMPRK org copy is the current, maintained version.
- **Resume Bullet:** Led and coordinated the team building **SMPRK**, a NestJS 11 + Prisma/PostgreSQL document-approval platform for SVNIT that digitized the institute's multi-role event and financial sign-off process — driving the approval-workflow and data-model design, coordinating delivery across a multi-person team, and integrating a coordinate-accurate PDF signature pipeline (pdf-lib + pdfjs-dist), transactional club-budget accounting, and Redis-backed security.
- **Interview note (honesty):** As team lead your strength is the *system*, not line-by-line authorship. Be ready for "what did you personally build vs coordinate?" — answer with the design decisions you owned (the approval state machine, the budget-wallet model, the signature-anchor approach) and how you ran the team, and don't claim to have hand-written the NestJS internals. That candor is a strength for a lead role.
- **Potential Interview Questions:**
  1. As the person who designed the approval workflow: why the invisible `[[SIGN:<slotKey>]]`-anchor approach (render → re-parse with `pdfjs-dist` → stamp with `pdf-lib`) instead of computing signature placement at render time? What edge cases does it handle?
  2. The club budget model tracks `sponsorBudget`, `lockedSponsor`, `allocatedBudget`, `allocatedSpent`, `lockedAllocated`. Walk through the lock-on-clerk-approval / deduct-on-dean-approval lifecycle and how concurrent approvals avoid double-spending (Prisma `$transaction` boundaries).
  3. How did you design the faculty-on-leave auto-skip so a document never stalls on an absent approver, and what keeps that loop bounded and idempotent?
  4. How did you split work and coordinate across the team, and how did you keep the frontend (#28) and backend contract in sync as the schema evolved across 25+ migrations?
  5. Auth uses stateless JWTs in cookies plus a Redis-backed per-IP block list and a global throttler — why both, and what are the trade-offs of whitelisting entire private/campus ranges from rate-limiting?

### 28. SMPRK (Sampark) — frontend  `smprk-svnit/smprk-frontend`  — PRIVATE  ★ CURRENT / ACTIVE
- **Repo:** https://github.com/smprk-svnit/smprk-frontend  _(current SVNIT-org version of the Sampark frontend; companion to the SMPRK backend #27. Supersedes `jeet0407/sampark-frontend`, entry #26.)_
- **Status:** **Actively developing** — live, in-progress project.
- **Description:** The web portal for SMPRK/Sampark — student-club heads fill a structured event-permission form (event details, financial proposal, faculty approvers, budget allocation), preview it, and submit; the document then moves through a multi-stage, role-based approval chain (faculty advisors → office clerk → chairman → associate dean → dean) where each authority reviews, embeds a digital signature, and approves, rejects, or raises a query back to the student.
- **Problem it solves:** Replaces the slow, paper-based, physically-routed signature process for university club-event permission and budget-sanction letters — giving every role a dashboard, tracking each document's exact step, recording budget allocations against per-club sponsor/allocated budgets, and producing an auditable trail.
- **Tech Stack:** TypeScript, React 19, Next.js 16 (App Router, `'use client'` model), TanStack React Query v5 (data fetching/caching), Tailwind CSS v4, a native `fetch` wrapper (`lib/api.ts`) with cookie-based credentials, `@react-pdf/renderer`, ESLint 9. Talks to the SMPRK NestJS backend (#27) via `NEXT_PUBLIC_API_URL`.
- **My Role:** **Team lead & coordination (active project).** Archit leads/coordinates the SMPRK team; the committed frontend code is authored by jeet0407 (29 commits). Frame it honestly as leadership of the product and the client architecture, not line-by-line authorship of this repo. (Same interview note as #27.)
- **Architecture:** Client-rendered Next.js App Router frontend (business logic + PDF generation delegated to the backend). Routing organized by role under `app/dashboard/{admin,faculty,office/*,student}`. Auth state centralized in a `useAuth` hook backed by React Query (`GET /auth/me`), with a `<ProtectedRoute>` wrapper and role-based redirects. A single `apiFetch` helper handles JSON/FormData, `credentials: 'include'` (HTTP-only cookie auth), and typed `ApiError`. Config-driven components (e.g. `OfficeDocumentReview`) are parameterized by `allowedRole`/accent color and reused across office sub-roles.
- **Key Features Built (by the team):**
  - Seven-role RBAC (`SUPER_ADMIN`, `FACULTY`, `STUDENT_HEAD`, `OFFICE_CLERK`, `CHAIRMAN_F_SW`, `ASSOCIATE_DEAN_SW`, `DEAN_SW`) with per-route guards and automatic redirect to the correct dashboard.
  - Multi-section event-proposal form with inline validation, draft/preview flow persisted to `sessionStorage`, and edit-existing-document support.
  - Multi-stage approval pipeline: each authority can approve (with embedded signature), reject with feedback, or raise/close a query back to the student head.
  - Digital signature manager supporting file upload and draw-on-canvas, with client-side image resizing and magic-byte validation.
  - Per-club budget tracking (sponsor vs allocated budgets) enforced during proposal creation and editable by the office role.
  - Admin console for managing clubs, faculty, and student heads, plus a paginated audit-log viewer with typed action badges.
  - Client-side XSS hardening: `sanitizeText`/`sanitizeFormData` strip scripts/iframes/event handlers/`javascript:` URIs; uploaded images/SVGs validated by MIME, extension, filename, and magic bytes.
- **ML/AI Details:** Not applicable.
- **APIs / Integrations:** Integrates exclusively with the SMPRK backend REST API (auth, student/faculty/office/admin document + club + faculty + audit endpoints, password-reset flow).
- **Database / Storage:** None in this repo (frontend only) — transient form state in `sessionStorage`; auth via HTTP-only cookies. Data model owned by the backend (#27).
- **Complexity Level:** Medium-High — multi-role RBAC, a stateful multi-stage approval state machine, signature capture/embedding, budget-constraint validation, and security hardening; capped below "High" as it is frontend-only with heavy logic on the backend.
- **Commits & Activity:** 29 commits, primary author jeet0407; active companion to the SMPRK backend, part of the current, maintained version.
- **Resume Bullet:** Led the team delivering the **SMPRK** web portal (Next.js 16 / React 19 / React Query) — a role-based approval frontend for SVNIT spanning seven institutional roles, with a multi-stage signature-embedding approval flow, per-club budget enforcement, and client-side XSS/upload hardening — driving the client architecture and coordinating integration with the NestJS backend.
- **Potential Interview Questions:**
  1. How is protected content prevented from flashing before `getMe` resolves, and how does `<ProtectedRoute>` coordinate with `useAuth`'s redirect to avoid double-redirects?
  2. The office roles (chairman/dean/associate-dean/office-clerk) reuse a shared `OfficeDocumentReview` component parameterized by role — how would you add an eighth role without touching every route folder?
  3. After an approve/reject/query action, how do you keep the frontend's `currentStep`/`canAct` consistent (query invalidation vs optimistic updates), and how do you handle two authorities acting on the same step concurrently?
  4. Client-side sanitization and magic-byte checks run in the browser — a trust boundary a malicious client can bypass. What must the backend independently enforce, and why keep the client-side checks?
  5. As lead: how did you keep this frontend's TypeScript API types in sync with the backend contract as the Prisma schema evolved?

### 29. Parallel-Search-Tool-OpenMP-MPI-  `jeet0407/Parallel-Search-Tool-OpenMP-MPI-`  — PUBLIC
- **Repo:** https://github.com/jeet0407/Parallel-Search-Tool-OpenMP-MPI-
- **Description:** A High-Performance Computing (HPC) benchmark that searches for a keyword across every file in a directory and counts/prints matching lines, implemented four ways — serial, OpenMP (shared memory), MPI (distributed memory), and a hybrid MPI+OpenMP model — so their execution time and speedup can be measured and compared.
- **Problem it solves:** Full-text keyword search over a large corpus of files (the sample generator builds ~10 million lines across 1,000 files) is I/O- and CPU-bound and slow when done serially. The project demonstrates how to accelerate it by distributing files across CPU cores and across processes/nodes, and quantifies the payoff (speedup vs. serial) for each parallelization strategy — a classic academic HPC comparison study.
- **Tech Stack:** C++17 (`<filesystem>`, `<fstream>`, `<chrono>`), OpenMP (`#pragma omp parallel for`, `reduction`, `critical`, `omp.h`), MPI (`mpi.h`, `MPI_Init`/`MPI_Comm_rank`/`MPI_Reduce`/`MPI_Wtime`, run via `mpirun`); GNU toolchain `g++` and `mpic++` (OpenMPI wrapper); Bash driver script (`run_all.sh`); Python 3 + Matplotlib (`plot.py`) for time/speedup bar charts; CSV as the results interchange format. No CMake — compilation is via direct compiler invocations. Includes a project PPT (`HPC_PPT.pdf`).
- **My Role:** Minor contributor / effectively access-only on the code. Git history across all branches shows exactly 3 commits: jeet0407 (the "first commit" containing all four C++ programs, the shell/plot scripts and command notes), copilot-swe-agent[bot] (added the README), and Archit Savaliya (1 commit — a **merge commit** for PR #1 that merged the AI-generated README into `main`). Archit authored **no application/algorithm code** here; his only recorded contribution is merging a documentation PR. This is a jeet0407 project on which Archit was a collaborator, not a builder.
- **Architecture:** Not a service — it is a set of four standalone command-line executables sharing the same two-function skeleton: `get_files()` walks the directory with `std::filesystem::directory_iterator`, and `search_in_file()` streams each file line-by-line and substring-matches with `string::find`. The variants differ only in how the file list is parallelized: (1) **serial** — plain loop; (2) **OpenMP** — `#pragma omp parallel for reduction(+:total_matches)` over the file vector with a `#pragma omp critical` block guarding `cout`; (3) **MPI** — round-robin static assignment (`i % size == rank`) so each process handles a disjoint file subset, then `MPI_Reduce` sums per-rank match counts to rank 0; (4) **hybrid** — MPI partitions files into a per-rank `local_files` vector, then OpenMP parallelizes the scan within each process, with `MPI_Reduce` for the global total. A Bash harness compiles all four, runs them over two datasets with `OMP_NUM_THREADS`/`-np` settings, scrapes "Time taken" via grep/awk into `results.csv`, and a Python script renders execution-time and speedup graphs.
- **Key Features Built:**
  - Directory-wide keyword search that reports each hit as `filename:line_number -> line` and a total match count.
  - Four interchangeable parallel execution models (serial / OpenMP / MPI / hybrid) with a shared CLI (`<directory> <keyword>`).
  - OpenMP shared-memory parallelism using `parallel for` + `reduction` for the count and a `critical` section for thread-safe console output.
  - MPI distributed-memory parallelism using rank-striped static file distribution and `MPI_Reduce` for global aggregation.
  - Hybrid two-level parallelism (MPI across processes, OpenMP threads within each process).
  - Built-in timing per model (`chrono::high_resolution_clock` for serial/OpenMP, `MPI_Wtime` for MPI/hybrid) plus a printed performance summary (files processed, matches, threads/processes, wall time).
  - Automated benchmark pipeline: `run_all.sh` compiles, runs, and logs results to CSV; `plot.py` computes speedup relative to serial and emits time/speedup PNGs and a "best performing model" report.
  - Synthetic dataset generator (documented) producing ~200K and ~10M line corpora from `base64 /dev/urandom` with planted keyword lines.
- **ML/AI Details:** Not applicable — no models, datasets, or training. (The only "AI" involvement is that the README was authored by GitHub Copilot's SWE agent, which Archit then merged.)
- **APIs / Integrations:** None. No third-party services, network, auth, or external APIs — purely local file I/O plus the OpenMP and MPI runtimes.
- **Database / Storage:** None. State lives in the local filesystem: text files as input, `results.csv` as intermediate output, and `.png` charts as final output. No database or ORM.
- **Complexity Level:** Medium — the algorithm itself is a trivial substring search, but the engineering (MPI process management, OpenMP reductions/critical sections, a working hybrid two-level parallel model, and an automated compile-run-benchmark-plot pipeline) requires real HPC/systems knowledge beyond standard app development, while stopping short of the High bar (no dynamic load balancing, no auth/real-time/multi-service infra).
- **Commits & Activity:** Very low activity — 3 total commits across all branches over a short window (Apr 21 → May 12, 2026). Two human contributors (jeet0407 as author of all code; Archit via a single README merge) plus one AI agent (Copilot). Essentially a one-shot academic/coursework HPC assignment rather than an evolving project.
- **Resume Bullet:** Contributed to an HPC benchmarking project comparing serial, OpenMP, MPI, and hybrid MPI+OpenMP C++ implementations of directory-wide keyword search over datasets up to ~10M lines, with an automated Bash+Python pipeline generating execution-time and speedup charts (note: personal git contribution limited to merging documentation; core parallel C++ authored by a teammate).
- **Potential Interview Questions:**
  1. In `mpi.cpp` files are assigned with `i % size == rank`, but every process still calls `get_files()` on the whole directory and prints its own matches to stdout — what are the correctness and performance implications of this static round-robin scheme (e.g., load imbalance when files vary in size, redundant directory walks, and interleaved/garbled console output across ranks), and how would you improve it (dynamic work queue, `MPI_Gather` of results to rank 0)?
  2. The OpenMP version guards `cout` with `#pragma omp critical` but accumulates the count with `reduction(+:total_matches)` — why is the critical section necessary for printing but not for the counter, and what would happen to the total if you dropped the reduction and just did `total_matches += ...` in the parallel loop?
  3. In the hybrid model, work is split twice — MPI stripes files into `local_files`, then OpenMP threads scan that subset. With `-np 2` and `OMP_NUM_THREADS=2` you get 4-way parallelism; how do you reason about oversubscription vs. the physical core count, and how would MPI/OpenMP thread affinity and `MPI_Init` vs. `MPI_Init_thread` matter here?
  4. The benchmark harness times the whole run including `get_files()` and stdout printing, and the workload is dominated by disk I/O reading thousands of files — given that, is the measured "speedup" really measuring parallel compute, and how would you redesign the experiment (warm cache, exclude I/O, larger keyword-scan work per file) to isolate the parallelization benefit?
  5. `search_in_file` uses `string::find` line-by-line for exact substring matching — how would you extend this to case-insensitive or regex search, count multiple matches per line, or scale to files too large to hold comfortably in memory, and where in the parallel structure would those changes create new synchronization or memory-bandwidth bottlenecks?

### 30. Convolve — upstream original  `Nilangbhuva/Convolve`  — PUBLIC  _(original of #10)_
- **Repo:** https://github.com/Nilangbhuva/Convolve
- **Description:** The **upstream original** of the Convolve project. `Archit-175/Convolve` (entry **#10**) is a fork of this repo; the code is identical (same HEAD).
- **Problem it solves:** Same as #10 — the Convolve ML / data-science challenge.
- **Tech Stack:** Python, Jupyter Notebook, ML/data libraries (identical to #10).
- **My Role:** **Contributor** — Archit authored **3 of 17 commits**; Nilang Bhuva is the lead (~14 commits).
- **Architecture:** See #10.
- **Key Features Built:** See #10 (identical codebase).
- **ML/AI Details:** See #10.
- **APIs / Integrations:** See #10.
- **Database / Storage:** See #10.
- **Complexity Level:** See #10.
- **Commits & Activity:** 17 commits (Jan 2025 – May 2026); Nilang lead, Archit contributor (3).
- **Resume Bullet:** _Covered by #10 — same project; list once._
- **Potential Interview Questions:** See #10 (same codebase).

### 31. Consultancy-Project- — upstream original  `ttanishh/Consultancy-Project-`  — PRIVATE  _(original of #15)_
- **Repo:** https://github.com/ttanishh/Consultancy-Project-
- **Description:** The **upstream original** of the Consultancy Project. `Archit-175/Consultancy-Project-` (entry **#15**) is a fork of this repo; the code is identical (same HEAD).
- **Problem it solves:** Same as #15.
- **Tech Stack:** JavaScript-based web frontend (identical to #15).
- **My Role:** **Minor contributor** — Archit authored **1 of 22 commits**; leads were amanraz2802 (16) and Kanishk Pandey (5).
- **Architecture:** See #15.
- **Key Features Built:** See #15 (identical codebase).
- **ML/AI Details:** Not applicable.
- **APIs / Integrations:** See #15.
- **Database / Storage:** See #15.
- **Complexity Level:** See #15.
- **Commits & Activity:** 22 commits (Aug–Oct 2024); Archit 1 commit (minor).
- **Resume Bullet:** _Covered by #15 — same project; minor contribution._
- **Potential Interview Questions:** See #15 (same codebase).

### 32. DATA-SCIENCE-GROUP-ACTIVITY  `divyajaisansaria/DATA-SCIENCE-GROUP-ACTIVITY`  — PUBLIC
- **Repo:** https://github.com/divyajaisansaria/DATA-SCIENCE-GROUP-ACTIVITY
- **Status:** Complete — finished; not under active development (as of 2026-07).
- **Description:** A group data-science coursework activity: a single Jupyter/Colab notebook (`activity_1.ipynb`) that builds an end-to-end Telco Customer Churn prediction pipeline on the public Kaggle Telco Customer Churn dataset (7,043 customers, 21 columns). It loads and cleans the data, does EDA and hypothesis testing, engineers features, trains four classifiers, and compares them to recommend the best model for predicting whether a customer will churn.
- **Problem it solves:** Customer churn prediction for a telecom provider — identifying which subscribers are most likely to cancel so the business can target retention efforts. The notebook surfaces the drivers of churn (contract type, monthly charges, tenure) and produces a churn classifier plus actionable business insights.
- **Tech Stack:** Python 3.12, Jupyter/Google Colab, pandas, NumPy, scikit-learn (LogisticRegression, DecisionTreeClassifier, RandomForestClassifier, KNeighborsClassifier, StandardScaler, train_test_split, metrics), SciPy (chi2_contingency, ttest_ind), matplotlib, seaborn, Kaggle CLI/API for dataset download.
- **My Role:** Access-only / group member — Archit has **0 authored git commits**; both commits in history belong to the repo owner Divya Jaisansaria (peer). His contribution is NOT visible in git history. Per the README's group breakdown, Archit is credited as "Member 5: Feature Importance & Reporting" (interpreting the Random Forest feature-importance chart and writing up business insights), but this is a documented role, not a verifiable git contribution.
- **Architecture:** Not an application — a single-notebook, linear ML analysis pipeline. Flow: Kaggle API dataset download → pandas load → data cleaning (type coercion of `TotalCharges` object→float, drop 11 NaN rows) → EDA (seaborn count/box plots) → statistical hypothesis testing (chi-square on Contract vs Churn, t-tests on tenure/MonthlyCharges) → feature engineering (drop `customerID`, binary-map target, one-hot encode 15 categorical columns via `get_dummies(drop_first=True)`, StandardScaler on 3 numeric columns) → stratified 80/20 train/test split → train & evaluate 4 models → Random Forest feature-importance plot.
- **Key Features Built:**
  - Data cleaning: coerce `TotalCharges` to numeric and drop 11 invalid rows; duplicate/missing-value checks.
  - EDA visualizations: churn distribution, churn by contract type, tenure vs churn, monthly charges vs churn.
  - Hypothesis testing: chi-square test (Contract → Churn, p ≈ 7.3e-257) and independent t-tests on tenure (p ≈ 9.4e-207) and MonthlyCharges (p ≈ 6.8e-60).
  - Feature engineering pipeline: one-hot encoding to a 31-column feature matrix + StandardScaler on numeric features.
  - Multi-model training & comparison across Logistic Regression, Decision Tree, Random Forest, KNN with Accuracy, ROC-AUC, precision/recall/F1.
  - Random Forest feature-importance ranking (top drivers: Contract type, MonthlyCharges, tenure, PaymentMethod, TechSupport).
- **ML/AI Details:** Classical supervised binary classification on the Kaggle Telco Customer Churn dataset (7,043 rows → 7,032 after cleaning, 30 features after encoding). Four models compared. Results — Logistic Regression: Accuracy 0.8045, ROC-AUC 0.731, churn recall 0.57 (chosen as best for accuracy + interpretability); Random Forest: Acc 0.7896, ROC-AUC 0.703; KNN: Acc 0.7619, ROC-AUC 0.703; Decision Tree: Acc 0.7193, ROC-AUC 0.639. Stratified 80/20 split, `random_state=42`, `LogisticRegression(max_iter=1000)`, otherwise default hyperparameters (no tuning/CV). Class imbalance (~27% churn) is unaddressed, which suppresses churn-class recall.
- **APIs / Integrations:** Kaggle Datasets API (via `kaggle` CLI + `kaggle.json` credentials) to download `blastchar/telco-customer-churn`; Google Colab `files.upload()` for credential upload. No other third-party services. Note: a live Kaggle API key is hard-committed in the notebook output (cell uploading `kaggle.json`) — a real secret leak.
- **Database / Storage:** None — data is a single CSV pulled from Kaggle at runtime and held in-memory as a pandas DataFrame. No database, ORM, or persistent storage.
- **Complexity Level:** Low — a standard, single-notebook teaching pipeline using default scikit-learn models on a well-known benchmark dataset; no tuning, deployment, custom architecture, or app infrastructure.
- **Commits & Activity:** Very low activity — 2 commits total, both on 2025-09-17, both by owner Divya Jaisansaria (README + notebook). Group activity with 5 named members; Archit has no authored commits. Single-day, one-shot submission.
- **Resume Bullet:** Contributed to a 5-member group churn-analysis project on the Telco Customer Churn dataset (7K customers), owning feature-importance interpretation and reporting; the pipeline compared 4 scikit-learn classifiers and selected Logistic Regression (80.5% accuracy) with Contract type, monthly charges, and tenure identified as the top churn drivers. (Note: contribution not reflected in git history.)
- **Potential Interview Questions:**
  1. The notebook picks Logistic Regression because it has the "highest accuracy," but for churn the business cares about catching customers who will leave — churn-class recall is only 0.57. How would you rebalance model selection toward recall/precision-recall AUC, and what techniques (class weights, SMOTE, threshold tuning) would you apply given the ~27% churn base rate?
  2. Categorical features are encoded with `pd.get_dummies(drop_first=True)` fit on the full DataFrame before the train/test split, and `StandardScaler` is likewise fit before splitting. Where does data leakage occur here, and how would you restructure this with an sklearn `Pipeline`/`ColumnTransformer` fit only on training data?
  3. You dropped 11 rows where `TotalCharges` was blank. What do those rows actually represent (hint: `tenure == 0`), and is dropping them the right call versus imputing 0?
  4. The chi-square and t-tests were run on the raw dataset before modeling. How do those hypothesis-testing results relate to the Random Forest feature importances, and where can the two disagree (e.g., correlated one-hot columns splitting importance)?
  5. A live Kaggle API key was committed into the notebook's cell output. Walk me through the security impact, how you'd remediate it (revoke, purge git history, use Colab secrets/env vars), and how you'd prevent secret leaks in notebooks going forward.

### 33. pneumonia-detection — upstream original  `Diya5772/pneumonia-detection`  — PUBLIC  _(original of #9)_
- **Repo:** https://github.com/Diya5772/pneumonia-detection
- **Description:** The **upstream original** of the pneumonia-detection project. `Archit-175/pneumonia-detection` (entry **#9**) is a fork of this repo; the code is identical (same HEAD).
- **Problem it solves:** Same as #9 — CNN-based pneumonia detection from chest X-rays.
- **Tech Stack:** Python, Jupyter Notebook, deep-learning stack (identical to #9).
- **My Role:** **Co-author / leading contributor** — Archit authored **4 of 10 commits (the most human commits)**; owner Diya5772 (1), plus Harshvardhan, Hitarth, and AI-assist.
- **Architecture:** See #9.
- **Key Features Built:** See #9 (identical codebase).
- **ML/AI Details:** See #9.
- **APIs / Integrations:** See #9.
- **Database / Storage:** See #9.
- **Complexity Level:** See #9.
- **Commits & Activity:** 10 commits (Mar 2025 – May 2026); Archit top human contributor (4).
- **Resume Bullet:** _Covered by #9 — same project; list once._
- **Potential Interview Questions:** See #9 (same codebase).

### 34. Odoo — upstream original  `jaindevshrut/Odoo`  — PUBLIC  _(original of #19)_
- **Repo:** https://github.com/jaindevshrut/Odoo
- **Description:** The **upstream original** of the Odoo hackathon project. `Archit-175/Odoo` (entry **#19**) is a fork of this repo; the code is identical (same HEAD).
- **Problem it solves:** Same as #19.
- **Tech Stack:** JavaScript web app (identical to #19).
- **My Role:** **Co-author — top committer**, Archit authored **5 of 14 commits**; aayush4jha (4), Nilang (3), jaindevshrut (2).
- **Architecture:** See #19.
- **Key Features Built:** See #19 (identical codebase).
- **ML/AI Details:** Not applicable.
- **APIs / Integrations:** See #19.
- **Database / Storage:** See #19.
- **Complexity Level:** See #19.
- **Commits & Activity:** 14 commits (Jul 2025 – May 2026); Archit top committer (5) on a hackathon team.
- **Resume Bullet:** _Covered by #19 — same project; list once._
- **Potential Interview Questions:** See #19 (same codebase).

### 35. archit-sl — original  `Omramanuj/archit-sl`  — PRIVATE  _(original of #12)_
- **Repo:** https://github.com/Omramanuj/archit-sl
- **Description:** The **original** archit-sl repository. `Archit-175/archit-sl` (entry **#12**) is Archit's fork of this repo; the `main` branch code is identical (same HEAD).
- **Problem it solves:** Same as #12.
- **Tech Stack:** Next.js, TypeScript, Supabase, pnpm, Playwright (identical to #12).
- **My Role:** **Not Archit's project despite the name** — `main` is **32/32 authored by Ramanuj Om**; Archit has **0 commits on main** (a handful on side branches only). Ramanuj Om is the author/owner.
- **Architecture:** See #12.
- **Key Features Built:** See #12 (identical codebase — Ramanuj's work).
- **ML/AI Details:** See #12.
- **APIs / Integrations:** See #12 (Supabase).
- **Database / Storage:** Supabase (Postgres) — see #12.
- **Complexity Level:** See #12.
- **Commits & Activity:** 32 commits (Jan–May 2026), all by Ramanuj Om. Archit: 0 on main.
- **Resume Bullet:** _Not resume-worthy for Archit — authored by Ramanuj Om; see #12/#13 for Archit's actual (minor) involvement in this codebase via bright-bird._
- **Potential Interview Questions:** See #12.

### 36. Archit-175 (profile README)  `Archit-175/Archit-175`  — PUBLIC
- **Repo:** https://github.com/Archit-175/Archit-175
- **Description:** GitHub special profile-README repository — the single `README.md` here renders as the landing card on Archit's GitHub profile page. It is a self-presentation document (bio, featured projects, tech-stack badges, leadership roles, GitHub stats) rather than a running application.
- **Problem it solves:** Personal branding / developer marketing. Gives recruiters and collaborators a curated, at-a-glance summary of Archit's skills, flagship projects, and background the moment they land on his GitHub profile.
- **Tech Stack:** Markdown + embedded HTML (`<div align="center">`); shields.io badges for tech logos; dynamic-image SaaS services rendered as Markdown images — capsule-render (Vercel) for the header banner, readme-typing-svg (DemoLab) for the animated typing line, github-readme-streak-stats (Heroku) for streaks, and github-readme-activity-graph (Vercel) for the activity graph. No programming language, build tooling, or dependencies — pure static content.
- **My Role:** Sole author. 6 of 8 commits are Archit's own (architsavaliya175@gmail.com); the other 2 are from `copilot-swe-agent[bot]`, GitHub Copilot's coding agent — i.e. Archit's own AI-assisted edits, merged via PR #1, not a human collaborator. This is entirely his personal profile page.
- **Architecture:** No application architecture — a single flat `README.md` at the repo root. Content is organized into center-aligned Markdown sections (About Me, Featured Projects, Tech Stack, Leadership & Community, GitHub Analytics, Current Focus). Visual richness comes entirely from third-party image-generation URLs embedded as Markdown images; GitHub renders it automatically on the profile.
- **Key Features Built:**
  - Center-aligned animated header banner (capsule-render) plus an animated typing-SVG tagline (readme-typing-svg) for a "premium" profile look
  - Curated "Featured Projects" showcase (SAMPARK SVNIT, EEG Emotion Recognition, Kidney Tumor Segmentation, Pneumonia Detection) each with a one-line pitch, highlights, and shields.io tech-badge row
  - Consolidated Tech Stack badge wall (Python, C++, JavaScript, PyTorch, TensorFlow, React, Next.js, NestJS, PostgreSQL, MongoDB, AWS)
  - Live GitHub Analytics widgets (streak stats + activity graph) auto-populated from his username
  - Leadership & Community and Current Focus sections for non-code positioning
- **ML/AI Details:** Not applicable — this repo contains no models, datasets, or training code. It only *references* his ML projects (EEG D3QN+CNN, U-Net kidney-tumor segmentation, CNN pneumonia detection), which live in separate repositories.
- **APIs / Integrations:** No programmatic API calls. Embeds four external dynamic-image services via URL: capsule-render (Vercel), readme-typing-svg (DemoLab), github-readme-streak-stats (Heroku), github-readme-activity-graph (Vercel), plus shields.io badges.
- **Database / Storage:** None.
- **Complexity Level:** Low — a static single-file Markdown profile card with no code, build, or data model; purely branding/presentation.
- **Commits & Activity:** 8 commits total, single contributor (Archit; 2 commits via his Copilot agent). Short active window: 2026-05-13 to 2026-05-19. Iterated from an initial commit through a Copilot-assisted "premium README" pass to small polish edits (GitHub link, removing stats/"domain expansion").
- **Resume Bullet:** Designed and iterated a polished GitHub profile-README landing page using dynamic SVG banner/typing/analytics services and shields.io badge rows to showcase featured AI projects, tech stack, and leadership roles.
- **Potential Interview Questions:**
  1. How does GitHub's special `username/username` profile-README mechanism work, and why does creating this repo make the README appear on your profile page?
  2. Your banner, typing animation, and stats are rendered by third-party services (Vercel/Heroku endpoints) embedded as image URLs — what are the reliability, privacy, and rate-limit risks of depending on them, and how would you mitigate a service going down?
  3. Several badges use `style=for-the-badge` with custom `color` and `logoColor` params — walk me through how shields.io constructs those badge images from the URL query string.
  4. You feature four ML projects on this card (EEG D3QN+CNN, U-Net kidney segmentation, CNN pneumonia detection). Pick one and explain the actual model architecture and results behind the one-liner.
  5. GitHub sanitizes README HTML and proxies images through Camo — how does that affect the animated/dynamic content you embedded, and what limits does it place on styling a profile README?


## SECTION 2: SKILL MATRIX

This matrix is derived strictly from the 29 analyzed repositories. The proficiency signal reflects both breadth (how many repos use it) and depth (whether it was used as a core, load-bearing skill or a peripheral one), weighted toward repos where Archit is the genuine solo/lead author.

**Legend**
- **Used heavily** — appears across many repos and/or drives core, non-trivial work in solo/lead projects.
- **Used occasionally** — appears in a handful of repos, or in a supporting rather than central role.
- **Used once** — evidence in a single repo, or a peripheral/one-off touch.

---

### Languages

| Language | Signal | Evidence |
|---|---|---|
| TypeScript | Used heavily | Core of the entire CareerPassport family (career-passport-v4, careerpassport, cpv2, cpv3), Kore, archit-portfolio, SQL/Puzzle trackers' sibling stacks, plus sampark/archit-sl. His dominant professional language. |
| Python | Used heavily | Every ML/DS repo (EEG-RL, KidneyTumorSegmentation, Financial-Sentiment, pneumonia-detection, Convolve, Deep-Learning, NLP-LAB, GoogleColab) plus HPC/parallel work. Second core language. |
| JavaScript (vanilla ES6+) | Used heavily | Full apps built with no framework: SQL-TRACKER, Puzzle-Tracker, Crawlers, plantree_server front end, job/jobApplicatoin front ends. Strong hand-rolled DOM/Web-API fluency. |
| SQL (Postgres dialect) | Used occasionally | 26-table RLS schema + RPCs in Kore; Supabase Postgres in archit-sl/bright-bird; Prisma/Postgres in sampark. Real schema-design depth in Kore. |
| C++ (C++17) | Used once | Parallel-Search-Tool (OpenMP/MPI) — but Archit authored no core C++ here (merge-only). Peripheral. |
| HTML5 / CSS3 | Used heavily | Every front-end repo; deep hand-authored CSS (OKLCH tokens, clamp() fluid type, `svh`, safe-area, embedded base64 woff2) across trackers and CareerPassport sites. |
| Markdown | Used heavily | Docs across most repos; the profile-README repo is Markdown + embedded HTML end-to-end. |
| Bash | Used once | Benchmark harness in Parallel-Search-Tool (teammate-authored core). |
| LaTeX | Used once | Report typesetting in the Deep-Learning coursework repo. |

---

### Frameworks & Libraries

| Framework / Library | Signal | Evidence |
|---|---|---|
| Next.js (App Router, 15/16) | Used heavily | The backbone of ~9 repos (CareerPassport family, Kore, archit-portfolio, archit-sl, bright-bird, sampark-frontend). Server Actions, dynamic imports, RSC boundaries. |
| React (18/19) | Used heavily | Same set as Next.js plus Consultancy (React 18 + Vite) and ReWear SPA. Hooks, Suspense, controlled forms. |
| Tailwind CSS (v3/v4) | Used heavily | career-passport-v4, cpv3, Kore, archit-portfolio, archit-sl, bright-bird, sampark-frontend, Consultancy. |
| Framer Motion | Used heavily | career-passport-v4, careerpassport, cpv2, cpv3, archit-portfolio — a recurring animation tool. |
| GSAP (ScrollTrigger/ScrollSmoother) | Used heavily | CareerPassport family + Crawlers. Editorial/scroll animation is a signature. |
| Three.js / React Three Fiber / Drei | Used occasionally | Custom WebGL globe + blog-sphere in career-passport-v4; shared R3F scene + View.Port in cpv3. Genuinely advanced but concentrated in two repos. |
| PyTorch | Used heavily | Core of EEG-RL (D3QN/PPO), the Deep-Learning portfolio, and Financial-Sentiment's transformer path. Primary DL framework. |
| TensorFlow / Keras | Used heavily | KidneyTumorSegmentation (ARU-GD), pneumonia-detection CNN, Convolve 1D-CNN, parts of Deep-Learning. |
| scikit-learn | Used heavily | Financial-Sentiment (IterativeImputer/imputation), Convolve, DATA-SCIENCE-GROUP-ACTIVITY, GoogleColab (GridSearchCV, KMeans, trees). |
| Express (Node.js) | Used occasionally | plantree_server, job, jobApplicatoin backends; ReWear API. Solo on plantree_server. |
| NestJS 11 | Used once (led, not authored) | SMPRK/Sampark backend — Archit is team lead and designed the system, but the NestJS code is authored by teammates. Architectural familiarity, not hands-on authorship. |
| Yjs / y-protocols (CRDT) | Used once | Custom CRDT provider over Supabase Realtime in Kore — high-depth, single repo. |
| Express + Mongoose ODM | Used occasionally | job, jobApplicatoin, ReWear (MongoDB). |
| pandas / NumPy / SciPy | Used heavily | Every ML/DS repo — data wrangling and signal processing (SciPy in EEG-RL). |
| Vite | Used once | Consultancy-Project build tooling. |
| jQuery | Used once | Crawlers gallery slider. |
| Streamlit + Plotly | Used once | Financial-Sentiment interactive prediction app. |
| BlockNote / Excalidraw | Used once | Editor + whiteboard surfaces in Kore. |
| Zod | Used occasionally | Validation in archit-sl / bright-bird. |
| Pytest / Playwright / Jest | Used occasionally | Playwright in Kore and bright-bird; Jest/Supertest in SMPRK/Sampark (led, not authored). |

---

### ML / AI Tools & Models

| Tool / Model / Technique | Signal | Evidence |
|---|---|---|
| Reinforcement Learning (D3QN, PPO) | Used once (deep) | EEG-Emotion-Recognition-RL — Double Dueling DQN + PPO-driven HARL from scratch. His most advanced ML artifact; single but substantial repo. |
| CNN architectures (custom + torchvision) | Used heavily | pneumonia-detection (5-block CNN), KidneyTumorSegmentation (ARU-GD), Convolve (1D-CNN), Deep-Learning (ResNet/DenseNet/EfficientNet/MobileNet). |
| Domain Adaptation (Euclidean Alignment, CORAL, DANN) | Used once (deep) | EEG-RL multi-level adaptation with gradient-reversal autograd. |
| U-Net / attention gates / deep supervision | Used once (deep) | KidneyTumorSegmentation ARU-GD with guided decoder + MC-Dropout uncertainty. |
| Monte Carlo Dropout (uncertainty) | Used once | KidneyTumorSegmentation predictive-entropy maps (T=50 passes). |
| Transfer learning / fine-tuning | Used occasionally | Deep-Learning WCE study (EfficientNet-B0/MobileNetV3/ResNet101 freeze-vs-train). |
| Classical/statistical NLP (n-gram LMs, HMM/Viterbi, BPE/WordPiece, KN smoothing) | Used once (deep) | NLP-LAB — 10-part from-scratch toolkit. |
| HuggingFace Transformers | Used occasionally | Financial-Sentiment news-sentiment scoring. |
| Loss engineering (Focal, Label Smoothing, weighted Dice, ArcFace) | Used occasionally | Deep-Learning (hand-written Focal/LabelSmoothing) + KidneyTumorSegmentation composite loss. |
| Imbalance handling (SMOTETomek, class weights, weighted sampler, threshold tuning) | Used occasionally | Convolve, Deep-Learning long-tailed CIFAR, DATA-SCIENCE churn. |
| XGBoost | Used once | Financial-Sentiment next-day-return regressor. |
| Model interpretability (Grad-CAM, t-SNE, PCA) | Used once | Deep-Learning portfolio. |
| Clustering (KMeans, DBSCAN, Agglomerative) + selection (Elbow/silhouette) | Used once | GoogleColab. |
| LLM application engineering (OpenAI GPT-4o/4.1, Whisper, Realtime, Vision; Gemini 2.5 Flash) | Used occasionally | archit-sl / bright-bird — prompt engineering, JSON-mode generation, ephemeral Realtime tokens, multi-provider routing. Applied (not trained) AI. |
| RAG / fine-tuning as *shipped features* | Not demonstrated | Named only in CareerPassport marketing copy — no model, dataset, or ML code. Flag as marketing, not a skill. |

---

### Databases & Data Stores

| Store | Signal | Evidence |
|---|---|---|
| PostgreSQL | Used occasionally | Kore (26-table RLS schema, RPCs, SECURITY DEFINER helpers — hands-on), archit-sl/bright-bird (Supabase), SMPRK/Sampark (Prisma — led/designed, code by teammates). Real hands-on depth in Kore. |
| Supabase (Postgres + Auth + Realtime + Storage) | Used occasionally | Kore (heavy — custom CRDT over Realtime broadcast), archit-sl/bright-bird (auth, RLS, migrations). |
| MongoDB (Atlas) + Mongoose | Used occasionally | job, jobApplicatoin, ReWear. |
| Row-Level Security (RLS) design | Used occasionally | Kore (fully secured schema), archit-sl/bright-bird learning_events tables. |
| localStorage / sessionStorage | Used occasionally | SQL-TRACKER, Puzzle-Tracker layered state. |
| GitHub Gist as a sync store | Used occasionally | SQL-TRACKER + Puzzle-Tracker (encrypted cross-device sync). Creative but niche. |
| HDF5 (h5py) | Used once | KidneyTumorSegmentation in-memory dataset loading. |
| Pickle / joblib (model serialization) | Used occasionally | Financial-Sentiment, Convolve. |
| Redis (Upstash) | Used once (led, not authored) | SMPRK/Sampark IP-security layer — team-lead/design familiarity, code by teammates. |
| Prisma (ORM) | Used once (led, not authored) | SMPRK/Sampark data model — designed/led as team lead; code authored by teammates. |
| CSV / feather-style flat data | Used heavily | Ubiquitous across the ML/DS repos. |

---

### DevOps / Deployment Tools

| Tool | Signal | Evidence |
|---|---|---|
| Vercel | Used heavily | Deployment target across CareerPassport family, archit-portfolio, SQL-TRACKER, Crawlers, plantree_server, job, jobApplicatoin, profile services. His default host. |
| Serverless functions (@vercel/node) | Used occasionally | plantree_server, job, jobApplicatoin backends. |
| Google OAuth / auth wiring | Used occasionally | Kore, archit-sl, bright-bird (Supabase + Google OAuth config). |
| Git / GitHub (REST API, Gists, forks, PR flow) | Used heavily | All repos; direct GitHub REST/Gist API integration in the trackers. |
| Copilot / Claude Code (AI-assisted dev) | Used heavily | Self-directed AI-agent PRs across EEG-RL, KidneyTumorSegmentation, Deep-Learning, GoogleColab, career-passport-v4, cpv3. |
| Docker / Kubernetes / Terraform / CI pipelines | Not demonstrated | No evidence in any analyzed repo. Do not claim. |
| Git LFS | Used once | Convolve large-asset handling. |
| Deno (Supabase Edge Functions) | Used once | archit-sl/bright-bird edge functions (peripheral). |

---

### Other Tools & Techniques

| Tool / Technique | Signal | Evidence |
|---|---|---|
| Web Crypto API (SHA-256, PBKDF2, AES-GCM) | Used occasionally | SQL-TRACKER + Puzzle-Tracker client-side encryption; GoogleColab DH/HKDF/AES-GCM chat. A recurring interest. |
| Hand-authored inline SVG (data-viz, maps, connectors) | Used heavily | Trackers' analytics charts, Crawlers' SVG map, CareerPassport measured Bézier connectors, profile-README SVG services. A signature strength. |
| IntersectionObserver / ResizeObserver / rAF throttling | Used heavily | Reveal hooks + measured connectors + scroll-veil across careerpassport, cpv2, career-passport-v4. |
| Canvas 2D (scroll-scrub sequences) | Used once | cpv3 169-frame decoupled-rАF hero. |
| CSS design-token systems (OKLCH, clamp fluid type, custom properties) | Used heavily | careerpassport, cpv2, trackers — mature, systematic responsive design. |
| next/font (self-hosted variable fonts) | Used occasionally | cpv2, careerpassport, cpv3. |
| PDF generation (jsPDF, pdf-lib, @react-pdf/renderer) | Used occasionally | Consultancy (jsPDF invoice), SMPRK/Sampark (pdf-lib signature embedding — led/designed, code by teammates). |
| Nodemailer / transactional email | Used once | plantree_server confirmation emails. |
| yfinance / feedparser (data ingestion) | Used once | Financial-Sentiment. |
| OpenWeatherMap API | Used once | Crawlers live weather widget. |
| Seeded PRNG (Mulberry32) + Fisher–Yates | Used occasionally | Deterministic daily-challenge engines in SQL-TRACKER + Puzzle-Tracker. |
| shields.io / capsule-render / dynamic README services | Used once | Profile-README repo. |
| OpenMP / MPI (HPC parallelism) | Used once | Parallel-Search-Tool (Archit merge-only — do not overclaim). |

---

**Honesty flags for the reader**
- Skills tied to **SMPRK/Sampark** (NestJS, Prisma, Redis, PDF-embedding) come from Archit's **team-lead & system-design** role — he led and designed the project but the code is authored by teammates. Present them as *architectural familiarity from leading the project*, not hands-on authorship. **DATA-SCIENCE-GROUP-ACTIVITY** (some scikit-learn) is a documented group role with no authored commits.
- **OpenMP/MPI/C++** in Parallel-Search-Tool is merge-only; do not list C++/HPC as a hands-on strength.
- **RAG/fine-tuning** appears only as CareerPassport marketing copy — not an implemented capability.
- **Applied LLM engineering** (archit-sl/bright-bird) is real but is a *minor-contributor* / side-branch role on another engineer's project.

## SECTION 3: PROJECT TIERS FOR RESUME

Projects are tiered by a combination of **ownership/role** (solo author, co-author, or team lead), **technical complexity**, and **interview defensibility**. The goal: put forward work Archit can defend deeply — whether he authored the code or led the team that did — back it with breadth, and be honest about which is which.

---

### Tier 1 — Flagship (interview-worthy, lead these on the resume)

| Project | Ownership | Why it's flagship |
|---|---|---|
| **Kore** — real-time collaborative workspace | Solo (16/16 commits) | Highest-complexity solo build: a custom Yjs-CRDT provider over Supabase Realtime (presence, live cursors, chunking, snapshot persistence) + a 26-table Postgres schema fully secured with RLS and SECURITY-DEFINER helpers. Distributed-systems + security depth that few juniors can claim, and he owns 100% of it. |
| **SMPRK / Sampark** — SVNIT document-approval platform *(current, active)* | Team lead & coordination | His current, actively-developed project — a high-complexity NestJS 11 + Prisma/PostgreSQL system (multi-role approval state machine, coordinate-accurate PDF signature embedding, transactional two-wallet budgeting, S3 + Redis + Resend). He leads the team and owns the system/workflow design. Lead with the architecture and how he ran the team; be candid it's design + coordination, not line-by-line backend authorship. |
| **EEG-Emotion-Recognition-RL (NeuroRL)** — deep-RL EEG framework | Sole human author (8/9) | His most sophisticated ML artifact: Double Dueling DQN + PPO-driven hierarchical RL with Euclidean-Alignment/CORAL/DANN domain adaptation, LOSO-evaluated on DEAP and SEED-IV. Honest, leakage-safe evaluation. Signals genuine research-grade ML ability. |
| **career-passport-v4** — flagship marketing site w/ WebGL | Lead (21/23, ~91%) | The most visually and technically ambitious front-end: two hand-built Three.js experiences (ray-cast interactive globe, flat-to-sphere infinite blog gallery), a loader state machine, and reduced-motion-aware GSAP/Framer motion. Demonstrates rare WebGL + product-polish combination. |
| **KidneyTumorSegmentation-ARU-GD** — medical image segmentation | Sole human author (3/5) | Attention Residual U-Net with guided decoder + Monte-Carlo-Dropout uncertainty on KiTS23, class-weighted composite loss, ~0.83 mean foreground Dice. Second strong, defensible ML flagship — pair with EEG-RL to show ML range (RL + CV). |

*Resume guidance:* Lead with **Kore** (full-stack + distributed systems), **SMPRK/Sampark** (your current project + leadership), and **one ML flagship** (EEG-RL or KidneyTumor). Use **career-passport-v4** as the front-end showcase. On a one-page resume, pick the 3–4 that best fit the role you're applying for.

---

### Tier 2 — Supporting (solid, real authored work; adds breadth)

| Project | Ownership | One-line rationale |
|---|---|---|
| **careerpassport** / **cpv2** / **cpv3** (CareerPassport family) | Solo (56/56, 58/58, 6/6) | Pick **one** as a representative solo Next.js/React product build (SVG connectors, IntersectionObserver reveals, OKLCH token system, R3F in cpv3) — the others are iterations, so don't list all three. |
| **SQL-TRACKER** | Solo (18/18) | Zero-dependency vanilla-JS app with PBKDF2+AES-GCM client-side crypto, Gist-based cross-device sync, deterministic daily engine, hand-authored SVG analytics — shows fundamentals without a framework crutch. |
| **Puzzle-Tracker** | Solo (15/15) | Sibling of SQL-TRACKER; same crypto/sync/SVG strengths. List only one of the two trackers on a resume. |
| **archit-portfolio** | Solo (10/10) | Cinematic Next.js portfolio with scroll-to-horizontal gallery and sandboxed-iframe live demos; the natural "see my work" link. |
| **Deep-Learning** | Sole human author (24/51 human, rest own AI PRs) | ~4,400 LOC PyTorch/TF coursework portfolio (focal loss, long-tailed CIFAR, ConvLSTM, WCE transfer learning) — strong evidence of ML fundamentals breadth beyond the two flagships. |
| **NLP-LAB** | Solo (6/6) | 10-part from-scratch classical NLP toolkit (n-gram LMs, KN smoothing, Viterbi HMM, BPE/WordPiece) — demonstrates algorithmic depth, not just library calls. |
| **Crawlers** | Co-lead (94/250, ~38%) | Competition-winning ("Web Wonders" 1st place) interactive site; award + top-contributor status make it a credible team-project bullet. |
| **plantree_server** | Solo (30/30) | Small but fully-owned Node/Express + Nodemailer serverless backend — rounds out back-end breadth. |

*Resume guidance:* Choose 2–3 from this tier to fill out the page, favoring one CareerPassport-family entry, one tracker, and one ML-breadth repo (Deep-Learning or NLP-LAB). Crawlers earns a line for the award.

---

### Tier 3 — Utility / Learning / Not-Authored (omit from resume; keep for context)

| Project | Reason to omit |
|---|---|
| **DATA-SCIENCE-GROUP-ACTIVITY** | No authored commits; README-credits you as "Member 5: Feature Importance & Reporting." Fine to mention as a group project; describe that specific role, don't claim the code. |
| **Parallel-Search-Tool (OpenMP/MPI)** | Only commit is a **merge of an AI-authored README**; no C++/HPC code authored. Don't claim HPC skills. |
| **archit-sl (ScrollnLearn)** | **0 commits on main**; ~7 on a side branch. Project led by Ramanuj Om. At most a minor "contributed to" mention, not a headline. |
| **bright-bird** | **On hold / incomplete** (paused). Minor contributor (4/36, ~11%); continuation of archit-sl, primarily Ramanuj Om's. Your part: the learning-events/telemetry layer + Gemini wiring — mention as "contributed to," not a headline. |
| **Convolve** | Minor (3/17, ~18%); his commits are README + data uploads, not model code. Fork of upstream. |
| **Consultancy-Project-** | 1/22 commits (one 594-line component). Real code, but a single component on someone else's app — thin for a resume line. |
| **Odoo (ReWear)** | Top committer by count but **all five commits are README edits**; git blame shows zero authored app code. Docs-only. |
| **Financial-Sentiment-Analysis-** | Co-author (~42%) but the ML pipeline is unfinished (notebook ends at imputation, no metrics, weak correlations). Keep for context; weak as a headline. |
| **pneumonia-detection** | Co-author / top human contributor (4/10) but has a real evaluation-leakage bug (test set inside validation). Defensible only if he can speak to the flaw — otherwise omit. |
| **job / jobApplicatoin** | Not standalone — these are the job-board / application module of **Crawlers** (Tier 2). Covered under Crawlers; don't list them as separate resume lines. |
| **GoogleColab** | Solo learning portfolio of toy-dataset notebooks; useful as breadth evidence but not resume-worthy on its own. |
| **Archit-175 (profile README)** | Profile decoration, not a project. Keep as the GitHub landing page, not a resume line. |

*Note:* Tier-3 repos are still useful **context** for tailoring answers and showing range in conversation — just not headline resume lines. The honesty point: for team/coursework projects (DATA-SCIENCE, Parallel-Search, Odoo, Consultancy, Convolve) describe your **actual** role — a "walk me through your code" question should never catch you claiming work you didn't do. For **SMPRK/Sampark** (now Tier 1) the same rule applies in reverse: lead confidently with your team-lead and system-design role, and be candid you drove design/coordination rather than authoring the backend yourself.

## SECTION 4: RAW INTERVIEW QUESTION BANK

A master bank of interview questions, organized so an interviewer (or Archit prepping) can drill into any project, probe cross-cutting architecture patterns, test ML depth, or run a system-design round. Part A is the verbatim per-repo question set. Parts B–D are new questions synthesized from patterns that recur across his work.

---

## Part A — Project-Specific Questions

### career-passport-v4 (flagship marketing site, WebGL)
1. In WireframeGlobe.tsx you defer real WebGL init by one requestAnimationFrame and pair renderer.dispose() with renderer.forceContextLoss(). Walk me through the React StrictMode double-mount context-loss problem this solves and why dispose() alone isn't enough.
2. The globe does country hover-picking by ray-casting to a sphere, inverting the globe quaternion to get local lat/lon, then running a ray-casting point-in-polygon over GeoJSON rings. Why do it in geo space instead of GPU picking/raycasting the border meshes, and what are the accuracy/performance trade-offs (e.g. the antimeridian seam guard, throttling hover to ~20fps)?
3. In the blog gallery you lerp each card between a flat grid pose and a sphere pose and wrap positions toroidally so the grid is "infinite." How does wrap() guarantee no duplicate card is ever visible at once, and how did you size COLS/ROWS vs the FOV to ensure that?
4. The radar chart deliberately keeps a stable key='detail' under AnimatePresence mode='wait' instead of keying by dimension id. Explain the remount-vs-update trade-off and how the "Voronoi-by-angle" hover mapping avoids dead zones between the 8 points.
5. LoaderProvider gates the splash on the hero image's onLoad with a MIN_DISPLAY_MS floor and SAFETY_TIMEOUT_MS ceiling, and resets scroll under the overlay via useLayoutEffect. Why useLayoutEffect rather than useEffect there, and how do you keep the state machine correct when a user toggles Candidates<->Companies mid-load (stale hero handling)?

### careerpassport (Archit-175/careerpassport)
1. In BridgeSection, the SVG connector is computed from getBoundingClientRect inside useLayoutEffect with a ResizeObserver. Why useLayoutEffect over useEffect here, and what breaks visually if you use the wrong one? How do you avoid layout thrash when the observer fires repeatedly?
2. useReveal unobserves the element after the first intersection unless replay is set. Walk through the trade-offs of one-shot vs. replaying reveals, and how you'd prevent observer leaks when sections mount/unmount on audience switch.
3. The scroll "veil" writes a --veil custom property on every scroll frame using requestAnimationFrame throttling. Why drive this through a CSS variable instead of React state, and what's the performance cost of the alternative?
4. The whole page is one 'use client' route with no server rendering of dynamic data. Given it's Next.js 16 App Router, what did you give up by not using Server Components here, and how would you restructure if the waitlist form needed to actually persist emails?
5. Your responsive strategy redefines clamp()-based type tokens at each breakpoint and prefers svh over vh. Explain the mobile 100vh browser-chrome trap and one concrete section where svh changed the layout outcome.

### cpv2 (Career Passport v2)
1. In BridgeSection, you compute the connector SVG in a useLayoutEffect using getBoundingClientRect and a ResizeObserver, and bail out below 768px. Why useLayoutEffect over useEffect here, and what visual bug would appear if you used the latter or dropped the ResizeObserver?
2. Your scroll --veil handler in page.tsx reads container.scrollTop inside a requestAnimationFrame callback and registers the listener as { passive: true }. Walk through why the rAF throttle and passive flag matter for scroll performance, and what [audience] in the effect deps is guarding against.
3. The whole site is dual-audience via one useState in page.tsx that conditionally renders two different section trees. What are the trade-offs of this conditional-render approach versus two routes (/candidates, /companies), especially for SEO, deep-linking, and code-splitting in the App Router?
4. You use next/font/google to load Fraunces, Inter, and Space Mono as CSS variables with display: swap. Explain how that avoids layout shift and external font requests, and what CLS or FOUT risk remains for your variable display headings.
5. The waitlist form validates email with a regex and then only console.logs the value — no persistence. If you had to make it real, how would you wire it up in this App Router codebase (route handler vs. server action), and how would you handle validation, spam, and storage without leaking the email client-side?

### cpv3 (Career Passport v3)
1. In Character3D.tsx you render multiple per-card View viewports through one shared CharacterCanvas using Drei's View.Port. Why one Canvas instead of one per card, and what browser limitation does that avoid?
2. Your scroll animation in CandidateHero.tsx doesn't draw inside the scroll handler — the scroll listener only writes lastFrameRef and a separate requestAnimationFrame loop lerps toward it (snap when |diff| <= 2, else += diff * 0.25). Walk me through why you decoupled input from rendering and what that fixes on fast trackpad scrolls.
3. You preload all 169 frames up front and cap DPR at Math.min(devicePixelRatio, 1.5) with a cover-fit drawImage. What are the memory/perf trade-offs of full-preload, and how would you scale this to a much longer sequence?
4. Global mouse state lives at module level (_mouse) with a single window listener, and characters lerp toward it in useFrame. Why put the listener outside the component, and what would go wrong if you registered it inside each character instead?
5. Several pages (companies, about, waitlist-confirmed) and WaitlistForm are stubs, and all 3D components are 'use client' + dynamic({ ssr: false }). Why can't these render on the server, and how does that choice affect SEO, initial paint, and hydration for a marketing landing page?

### Kore (real-time collaborative workspace)
1. Your Yjs provider (lib/yjs/provider.ts) buffers live updates during initial load, applies the snapshot, then flushes and issues a state-vector handshake — walk through why that ordering is necessary and what breaks if you apply live updates before the snapshot.
2. You persist Yjs docs as a single last-writer-wins bytea snapshot (save_yjs_snapshot) rather than an append-only update log. What are the durability/conflict trade-offs, and how does the reconcile timer + peer state-reply protect against a client that snapshotted stale state?
3. Database cells live in one JSONB data blob per row, yet you route single-cell edits through db_set_cell / db_set_row_group RPCs. Why not a plain update ... set data = ..., and how does that choice affect concurrent edits from two members on the same row?
4. You state proxy.ts is "optimistic only" and the DAL is the real authz boundary because Server Actions bypass the middleware matcher. Explain the attack you'd have if you trusted the middleware, and how requireMember + RLS give you defense in depth.
5. Your RLS uses SECURITY DEFINER helper functions (is_workspace_member, etc.) specifically to avoid policy recursion, and you gate Realtime broadcast/presence channels via policies on realtime.messages keyed off split_part(realtime.topic(), ':', 2). Walk through how a malicious member is prevented from subscribing to another workspace's doc channel.

### EEG-Emotion-Recognition-RL (NeuroRL)
1. You frame emotion classification as an RL problem with reward +1/-1-λ/t and terminate the episode on the first wrong prediction — why use D3QN here instead of plain supervised cross-entropy, and what does the discount factor γ=0.75 actually buy you when "next state" is just the next EEG window?
2. Walk through your Double-Dueling DQN in BiFRCNN.forward: how does splitting value and advantage streams (Q = V + A - A.mean()) help, and why does the Double-DQN target (online net selects, target net evaluates) reduce overestimation?
3. In phase 2-refined you stack Euclidean Alignment, CORAL, and DANN — what distribution shift does each one address, and how did you implement the GradientReversal autograd Function and weight the DANN/CORAL losses (λ=0.1) against the TD loss?
4. Phase 3's HARL uses a PPO actor to output a per-sample CE weight and then scales λ_dann/λ_coral by the batch's mean weight — what's the intuition, and how does FIX-1 (evaluating the OLD action under the NEW policy) and the entropy bonus keep the PPO update correct and stable?
5. Cross-subject accuracy (54-59% on DEAP, 36% on SEED-IV) is far below the ~98% subject-dependent numbers you cite — how much of the gap is fundamental to calibration-free EEG, how did your leakage-safe calibration-split centroid (FIX-4) and LOSO protocol prevent inflating results, and what would you try next to close it?

### KidneyTumorSegmentation-ARU-GD
1. Your attention_block2d gates each encoder skip connection using the coarser decoder feature map as the gating signal — walk me through the theta/phi/psi convolutions and how the resulting sigmoid attention map is upsampled and multiplied back onto the skip features. Why attention gates over plain concatenation?
2. The model emits four softmax outputs (final_output, out_1/2/3) with loss weights 1.0 / 0.25 / 0.25 / 0.25. What is the "guided decoder" / deep supervision doing here, and how would training dynamics and final accuracy change if you dropped the auxiliary heads?
3. Your gen_dice_loss combines a weighted Dice loss with a weighted categorical log loss and a class-weight vector [0.5, 1.0, 3.0, 2.0]. How did you choose those weights, and how do the Dice and log-loss terms interact for the heavily imbalanced tumor/cyst classes?
4. In predict.py you run T=50 forward passes with dropout forced on, then use normalized predictive entropy as the uncertainty signal. Why entropy of the mean rather than mutual information (epistemic vs. aleatoric), and how would you validate that these uncertainty maps are actually calibrated?
5. train.py loads the entire KiTS23 HDF5 set into RAM and caps GPU memory via a shard-count ratio for an H100 NVL. What are the scaling limits of full-in-memory loading, and how would you re-architect the input pipeline (and move toward the README's stated 3D extension) without blowing past memory?

### Financial-Sentiment-Analysis-
1. Your notebook engineers ~14 features but the deployed Streamlit app only passes RSI, ROC, and Volume to the XGBoost model — how did you decide which features the served model actually uses, and does that mismatch risk the app feeding the model a different feature schema than it was trained on?
2. The Pearson/Spearman correlations between every feature and Next_Day_Return are all below ~0.09. Given signals that weak, how would you validate that the XGBoost regressor is doing better than a naive baseline, and what evaluation metrics (RMSE, directional accuracy) would you have added?
3. You used IterativeImputer (MICE) to fill Moving_Avg/RSI/ROC before training. Why multivariate imputation over forward-fill or dropping rows for time-series stock data, and how did you avoid leakage of future information into past rows during imputation?
4. The transformer-based sentiment scoring happens offline in the notebook, but the Streamlit app takes manual numeric inputs and never re-runs sentiment. How would you re-architect this so a user could enter a ticker and get a live prediction with fresh news sentiment end to end?
5. The model is shipped as a pickle loaded at app startup and the dataset is a single ~501-row TSLA-heavy CSV. What are the risks of pickle-based model serving and single-stock training data, and how would you productionize this (model registry, per-ticker generalization, retraining) for real use?

### pneumonia-detection
1. Your notebook does val = np.concatenate((val, test)), so the test set is also inside validation — how does that leak evaluation data into model selection (ModelCheckpoint/ReduceLROnPlateau monitor val_accuracy), and how would you fix the split?
2. The dataset is heavily skewed toward PNEUMONIA (your countplot shows this). Why is raw accuracy misleading here, and how would you handle class imbalance (class weights, resampling, threshold tuning) given recall matters for a medical screen?
3. Val accuracy swings wildly early on (e.g. val_loss ~62 in epoch 1, drops to ~50% at epoch 12) while train accuracy stays high — what causes this instability with RMSprop + BatchNorm, and would Adam or a lower initial LR help?
4. You classify at a fixed 0.5 threshold (y_pred > 0.5). For pneumonia screening, how would you choose the operating point using the ROC/precision-recall curve to trade off false negatives vs false positives?
5. Walk through why you chose grayscale 150x150 input and a from-scratch CNN instead of transfer learning (e.g. ResNet/DenseNet pretrained on ImageNet) — what are the trade-offs in data efficiency and final accuracy?

### Convolve (credit-risk hackathon)
1. This is a tabular credit dataset, yet you used Conv1D layers over reshaped (features, 1) inputs — what local structure does a 1D convolution assume, and why would (or wouldn't) that be appropriate here versus a plain MLP or gradient-boosted trees (XGBoost/LightGBM)?
2. You balanced the classes with SMOTETomek(sampling_strategy=0.5) before the train/test split in the code. What are the risks of resampling before splitting (data leakage into the test set), and how would you restructure the pipeline so evaluation reflects the real, imbalanced production distribution?
3. The README states a learning rate of 0.001 but the model code compiles Adam with learning_rate=0.0005, and it reports 0.96 accuracy on the SMOTETomek-balanced test set — how would you defend the headline metric to a risk team, and which metric (recall on defaulters, AUC-ROC, KS statistic) actually matters for credit scoring?
4. You chose a 0.4 classification threshold instead of 0.5 to catch more defaulters. Walk me through the precision/recall and business-cost trade-off of lowering that threshold, and how you'd pick it principally (e.g. from a precision-recall curve or expected-cost minimization) rather than by hand.
5. One of the training runs in the notebook collapsed to ~0.33 accuracy with a loss of exactly 0.0 across all epochs — what does a zero loss with stuck accuracy usually indicate (e.g. label/target mismatch, NaNs, all-one-class predictions), and how would you have debugged it?

### archit-portfolio
1. In HeroSection you pin a sticky background and pull the foreground figure up with -mt-[100vh] so it "attaches" to the About section — walk me through how the sticky layer, the negative-margin overlap, and the z-index stack interact to produce that effect.
2. The Live Demo gallery converts vertical scroll into horizontal movement using useScroll + useTransform to an x of -66.66% across a w-[300vw] track. How did you derive that percentage, and how would it break if you added a fourth demo?
3. You embed third-party deployed sites in iframes with sandbox="allow-scripts allow-same-origin allow-forms allow-popups". What are the security implications of allow-scripts together with allow-same-origin, and what happens if an embedded site sends X-Frame-Options: DENY?
4. ProjectCardsSection defines seven separate useTransform parallax values and indexes into them by card position. What are the trade-offs of that hard-coded approach versus generating transforms in a loop, given React's rules of hooks?
5. Every section is a 'use client' component, so almost nothing is server-rendered as an RSC. Given this is a static content site, what did you gain or lose by that choice, and how would you restructure to keep the animations while shipping more as server components?

### archit-sl (ScrollnLearn / "Branch")
1. The quick-generate route streams a 3-card opener over SSE and then closes the stream while 'generation continues in the background' — how do the remaining cards reach the client after the HTTP response ends, and what role does Supabase realtime play versus the SSE channel?
2. The learning-events / analytics infrastructure you added on archit-dev was framed as 'adaptive learning' — what events did you capture, what schema did the 010_add_learning_events migration define, and how would that data actually drive adaptation of card difficulty or ordering?
3. lib/ai/gemini.ts now throws 'Gemini generation is no longer supported' and everything routes through OpenAI — why was the Gemini path deprecated, and how was the code structured so that swapping providers didn't ripple through the app?
4. Every table enables RLS and there's a trigger enforcing a 3-decks-per-day limit; why enforce that limit in a Postgres trigger rather than in the Next.js route handler, and what attack does that defend against?
5. Generated cards are LLM HTML that gets sanitizeHtmlSnippet-ed before render — walk through the injection risks of rendering model-produced HTML, and how the normalization/sanitization pipeline in lib/ai/generate.ts mitigates them.

### bright-bird
1. Deck generation streams cards over Server-Sent Events and the quick-generate route closes the stream immediately while generation continues server-side — how does the client reliably receive later cards, and what role does Supabase realtime vs. the SSE channel play here?
2. Your learning_events table stores six event types with a JSONB metadata column and RLS restricting rows to auth.uid() = user_id — how would you turn this raw event stream into an actual adaptivity signal (e.g. deciding a learner is struggling with a concept)?
3. You run two LLM providers — Gemini 2.5 Flash for openers and OpenAI (gpt-4o-mini / gpt-4.1) for deepening/explainer/follow-up. What drove that split, and how do you keep card output consistent when the JSON comes from different models?
4. The /api/realtime/token route mints an ephemeral OpenAI Realtime client secret with server-VAD turn detection. Why mint a short-lived token server-side instead of using the main API key on the client, and how do you handle token expiry mid-session?
5. Generated card HTML is passed through sanitizeHtmlSnippet before rendering — what injection risks does rendering model-produced HTML create, and is regex/string sanitization sufficient versus a DOM-based sanitizer?

### plantree_server
1. Your Gmail user and app password are hardcoded directly in server.js (lines 17–18). What's the security risk, and how would you move these to environment variables / a secrets manager on Vercel?
2. POST /submit computes total from plant_quantity_oak/maple/pine with no validation — what happens if a user submits negative, non-numeric, or missing quantities, and how would you harden this against tampering since prices are also trusted from... where?
3. There's no database and submissions are never persisted — how would you add durable storage of donations, and what schema/store would you pick for this workload?
4. total is assigned without let/const (an implicit global) and the transporter is shared across requests — what concurrency or state-leakage bugs could that cause under load on a serverless platform, and how does Vercel's function model affect it?
5. The client-side validation can be bypassed (JS disabled, direct POST). How would you enforce required fields and a valid email server-side, and how would you protect /submit from spam/abuse (rate limiting, CAPTCHA, honeypot)?

### Consultancy-Project- (GST Bill-of-Supply component)
1. In BillofSupply.jsx you keep the entire invoice (parties, product line items, tax fields) in one useState object and re-validate in a useEffect on every change — how did you handle immutable updates for nested arrays like products[], and would you refactor this to useReducer or React Hook Form at scale?
2. Your GSTIN regex ^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$ — walk through what each group enforces, and how you'd surface partial-vs-complete validation errors to the user.
3. The app stores the JWT and user role in localStorage and reads role client-side to gate /admin/* routes — what are the security risks of trusting a client-side role, and how must the backend enforce authorization independently?
4. This branch generates PDFs two different ways — pdf-lib in the shared document components vs jspdf/jspdf-autotable in your Bill-of-Supply file. Why might a team end up with both, and how would you consolidate on one to reduce bundle size and inconsistency?
5. Routing is defined with createBrowserRouter but there's no route guard component — an unauthenticated user hitting /admin/dashboard directly just renders it. How would you add protected routes / loaders that redirect to /user/login when the token is missing or expired?

### Crawlers (forestry-education website)
1. Your search-box.js filters a hardcoded 35-entry fileMapping object client-side. How would this scale to hundreds of forests, and what would you change (indexing, fuzzy matching, a search API)?
2. In Country/weather.js the OpenWeatherMap API key is hardcoded in a public client-side file. What are the security/abuse risks, and how would you keep the key secret while still fetching weather in a static site?
3. The interactive map is one giant inline SVG with per-country <a> hotspots in index.html. What are the accessibility and maintainability trade-offs versus a mapping library (Leaflet/D3), and how would you make the hotspots keyboard- and screen-reader-friendly?
4. Blog, careers, and tree-planting are split into separate Vercel apps rather than living in this repo. Why might a team make that split, and what are the downsides (shared styling, auth, cross-origin, deployment coordination)?
5. You loaded both GSAP (parallax) and jQuery (gallery slider) plus multiple icon CDNs. How would you audit and reduce this dependency/render-blocking footprint to improve load performance on a static site?

### Deep-Learning (coursework portfolio)
1. In Lab04 you handle a ~100:1 long-tailed CIFAR-10 three ways — inverse-frequency class weighting, a WeightedRandomSampler, and augmentation. How do these differ mechanically, and why does balanced accuracy (not raw accuracy) matter for evaluating them?
2. You hand-implemented FocalLoss and LabelSmoothingCELoss instead of using stock cross-entropy. Walk through the focal-loss formula, the role of γ, and what you observed choosing γ=2 over higher values on the imbalanced split.
3. In Lab05 you wrote a ConvLSTMCell from scratch that chunks the conv output into input/forget/cell/output gates. Explain the gate equations and how a ConvLSTM differs from feeding flattened rows into a vanilla LSTM.
4. Your RNN lab logs gradient magnitudes to study vanishing/exploding gradients. Concretely, how do LSTM/GRU gating and your gradient clipping mitigate that versus a vanilla RNN over 28 time-steps?
5. In the WCE mini-project you fine-tune EfficientNet-B0, MobileNetV3-Small, and ResNet101 with ReduceLROnPlateau. How did you decide which layers to freeze vs train, why report macro Precision/Recall/F1 and confusion matrices instead of accuracy for medical imbalance, and what are the clinical risks of optimizing the wrong metric?

### NLP-LAB (classical NLP toolkit)
1. In Assignment 4 you stream tokens through a deque(maxlen=MAX_N-1) to build unigram→quadgram counts in one pass — walk me through how the sliding window forms each n-gram and why you stream instead of loading the whole corpus into memory.
2. Your Assignment 5 Good-Turing implementation re-estimates counts as c* = (c+1)·N(c+1)/N(c). What happens when N(c+1) is zero for higher counts, how did you handle it in code, and why is that a known weakness of raw Good-Turing?
3. In deleted interpolation (Assignment 5) you grid-search λ1–λ4 in 0.1 steps to maximize held-out log-likelihood. What are the failure modes of a coarse grid search here, and how would EM (the standard deleted-interpolation algorithm) estimate the λs differently?
4. Assignment 6 implements both Katz backoff and Kneser-Ney. Explain why Kneser-Ney uses continuation counts (how many distinct contexts a word completes) for its lower-order distribution instead of raw unigram frequency, and what problem that specifically fixes.
5. Your Viterbi POS tagger (Assignment 10) uses add-one smoothing with a <UNK> emission and log-probabilities. Why work in log space, how does the back-pointer table recover the best tag sequence, and what would break if you evaluated micro-F1 on the tiny 8-sentence corpus for a real-world tagger?

### ReWear (Odoo)
1. The React frontend has axios as a dependency but no API calls or base URL configured — how would you wire the SPA to the /api/v1 Express backend, and how would you handle auth token storage (cookie vs. header) given the backend supports both?
2. In verifyJWT you accept tokens from either a cookie or the Authorization header, and generateAccessAndRefreshToken saves a refresh token to the user — walk me through the full refresh-token rotation flow and where it could be exploited.
3. addAProduct uploads images to Cloudinary in a sequential for loop and rolls back on video-upload failure — how would you make this atomic and parallel, and what happens to already-uploaded images if the DB Product.create throws?
4. getAllProducts builds a MongoDB aggregation with a $regex search on title/description — what are the performance and injection concerns of regex search at scale, and how would you index or replace it (e.g. text index / Atlas Search)?
5. The domain models a swap/points economy but the Order schema only stores orderedBy/listedBy arrays with no status, points-delta, or item reference — how would you redesign the schema to correctly represent a swap or a point-redemption transaction?

### Puzzle-Tracker-
1. You gate editing behind a client-side PIN whose SHA-256 hash sits in app.js, and you note it's a "soft lock." What can and can't this actually protect on a public static site, and how would you make it real security?
2. Walk through the token-encryption flow: PBKDF2 (250k iters) → AES-GCM, salt/iv generation, and committing the ciphertext in progress.js. What's the threat model, and why is a short numeric PIN the weak link?
3. getDailyPicks() uses a Mulberry32 PRNG seeded from the date string plus a Fisher–Yates shuffle. Why is determinism important here, and what happens to "today's picks" when the solved set changes mid-day?
4. Cloud sync does a union mergeRemote() then pushes. What conflict/merge anomalies can arise across two browsers (e.g. a note edited in both, or an unsolve on one side), and how would you move toward last-write-wins or CRDT semantics?
5. State is layered: PUBLISHED_PROGRESS baseline in progress.js, overridden by localStorage, optionally merged with a Gist. Trace how these three sources reconcile on load in loadState(), and where a stale published snapshot could surprise a returning owner.

### SQL-TRACKER
1. In Store.get, effective state resolves as seed default < committed PUBLISHED_PROGRESS < local localStorage, and mergeRemote refuses to overwrite a local 'Solved' status or a non-empty note. Walk through a concrete conflict — two devices editing the same problem — and explain why this union-merge (rather than last-write-wins) was the right call and where it can still lose data.
2. You encrypt the GitHub token with PBKDF2 (250k iterations) + AES-GCM keyed on a 4-digit PIN (6612) and commit the ciphertext into progress.js in a public repo. Given the PIN's tiny keyspace, how brute-forceable is that blob, what does the iteration count actually buy you, and how would you harden this without a backend?
3. getDailySetIds uses a mulberry32 PRNG seeded from an FNV-1a hash of the date so the 'Daily 5' is deterministic per day, then freezes the picked ids into the synced store. Why seed-then-freeze instead of just recomputing from the seed on each device — what breaks if you rely on the seed alone once someone starts solving?
4. The pause/resume timer models active time as accumulatedMs + (runningSince ? now - runningSince : 0) and merges sessions across devices preferring a finished session, else the earliest start. What are the failure modes across device clocks, timezones, and a date rollover mid-session, and how would you make elapsed time authoritative?
5. The whole app is global-object modules (Store, Cloud, Analytics) loaded via ordered <script> tags with no bundler, and every chart is a hand-built SVG string. What concretely pushed you away from a framework/build step here, and at what feature or scale would that decision start costing you?

### GoogleColab (applied-ML portfolio)
1. In the Iris LogisticRegression notebook, your GridSearchCV reported 330/495 fits failing (lbfgs rejecting l1/elasticnet penalties) — how would you fix the parameter grid so every candidate is valid, and why did the default solver reject those penalties?
2. Across your K-Means notebook you used three methods to pick k (Elbow/WCSS, KneeLocator, and silhouette score) — how do these differ, and what would you trust when they disagree? Why did silhouette peak at k=3 rather than k=2?
3. In your regression and decision-tree notebooks you call r2_score(y_pred, y_test) and accuracy_score(y_pred, y_test) with predictions as the first argument — does argument order matter for these metrics, and which ones would break if swapped?
4. Walk through the Diffie-Hellman key exchange in chat_server.py/chat_client.py: what exactly is derived via HKDF-SHA256, why send the DH parameters over the wire, and what man-in-the-middle weakness does this design still have (as your own README admits)?
5. Your chat protocol uses a 4-byte big-endian length prefix and a random 12-byte nonce per AES-GCM message — why is per-message nonce uniqueness critical for GCM, and what happens to confidentiality/integrity if a nonce is ever reused under the same derived key?

### job (Forestry Jobs board)
1. In app.js the MongoDB Atlas connection string (with username/password) is hardcoded on line 13 even though dotenv is imported — why is that a serious security risk, and how would you move it to an environment variable and rotate the exposed credentials?
2. The apply form posts to POST /submit and includes a file input for a CV, but the Express route only reads text fields from req.body — what's missing (e.g. multipart parsing with multer) and where would the uploaded CV actually be stored?
3. Your Mongoose schema types number (phone) as Number — what breaks for phone numbers with leading zeros, + country codes, or spaces, and how would you fix the type/validation?
4. There's both a GET /submit (serving a nonexistent submit.html) and a POST /submit route — walk me through the actual request/response flow when a user submits the form, and what the browser sees after res.redirect('/').
5. The country/forest search in search-box.js is a hardcoded client-side object mapping ~35 names to external URLs — how would you make this scale (server-side search, fuzzy matching, or a real API) and handle the trailing-whitespace and relative-vs-absolute URL inconsistencies present in that map?

### jobApplicatoin
1. The MongoDB Atlas connection string and credentials are hardcoded directly in app.js instead of using the dotenv/process.env that's already imported — why is that a problem and how would you fix it (and rotate the exposed secret)?
2. Multer stores uploaded CVs to a local ./uploads directory, but the app is deployed to Vercel serverless (@vercel/node). Why would disk-persisted uploads be lost there, and what storage would you use instead (e.g., S3/GridFS/object storage)?
3. The form posts to POST /submit, but there's also an app.get('/submit') that serves a submit.html that isn't in the repo. Walk me through the actual request flow and what happens if req.file is undefined on submit.
4. In search-box.js, the autocomplete keeps a selectedIndex and mutates innerHTML on each keystroke to rebuild the results list. What are the correctness/XSS/performance concerns of rebuilding innerHTML from user input this way, and how would you make it safer?
5. Your commits were the vercel.json config and adding two Font Awesome CDN links — what does the vercel.json builds/routes config do here, and why load Font Awesome from a CDN versus bundling it? What are the trade-offs (offline, versioning, CSP)?

### SMPRK / Sampark backend (team lead — system-design & leadership questions)
1. The signature workflow renders invisible [[SIGN:<slotKey>]] anchors into the React-PDF output, then re-parses the PDF with pdfjs-dist to recover their coordinates instead of computing placement at render time. Why decouple anchor detection from generation, and what edge cases (fragmented text items, affine transforms, tiny fonts) does pdf-anchor-locator.service.ts handle?
2. In approval.service.ts, budget lock/deduct/reconcile mutations run inside a Prisma $transaction while S3 uploads and audit logs are deliberately kept outside it. Walk through the failure modes — e.g. the transaction commits but the subsequent old-PDF S3 delete fails, or the app crashes after upload but before commit — and how you'd keep S3 and DB consistent.
3. The Club model tracks sponsorBudget, lockedSponsor, allocatedBudget, allocatedSpent, and lockedAllocated. Explain the lock-on-clerk-approval / deduct-on-dean-approval lifecycle and how financial-document approval reconciles actual vs. estimated spend — and how concurrent approvals against the same club avoid double-spending.
4. faculty-leave-workflow.service.ts uses an unbounded while (true) loop to skip consecutive on-leave faculty, performing S3 reads/writes and a transaction per iteration. What are the correctness and performance risks (infinite loop, partial progress, N sequential round-trips), and how would you make it idempotent and bounded?
5. Auth uses stateless JWTs in cookies with a global ThrottlerGuard, plus a separate Redis-backed per-IP block list in ip-security.service.ts. Why maintain IP blocking in Redis alongside the throttler, and what are the tradeoffs of whitelisting entire private ranges (10., 192.168., 172.16–31.) so campus-network attackers are never rate-limited on failed logins?

*(Note: Archit is team lead / system designer here, not the code author — frame these as architecture, workflow-design, and leadership questions. Own the design decisions; be candid you coordinated the build rather than writing the NestJS internals.)*

### SMPRK / Sampark frontend (team lead)
1. The auth model relies on credentials: 'include' with an HTTP-only cookie and a React Query ['auth','me'] query; how do you prevent flashing protected content before getMe resolves, and how does <ProtectedRoute> coordinate with useAuth's own redirect effect to avoid double-redirects?
2. NewDocumentPage intentionally calls setState during render (gated by initializedDocId) to prefill the edit form instead of using useEffect; what problem does that solve, and what are the risks if the gate condition is wrong?
3. Role-based routing hard-codes seven roles into getDashboardPath and duplicates office-role pages (chairman/dean/associate-dean/office-clerk) around a shared OfficeDocumentReview; how would you refactor to add an eighth role without touching every route folder?
4. The approval pipeline exposes approve/reject/query/close endpoints per document; how do you keep the frontend's view of currentStep/myStep.canAct consistent after an action, and how do you handle two authorities acting on the same step concurrently (query invalidation vs optimistic updates)?
5. Client-side sanitization (sanitizeText) and image magic-byte checks run in the browser, but this is a trust boundary a malicious client can bypass; what must the backend independently enforce, and why keep the client-side checks at all?

*(Note: team-lead / design role — frame as architecture + coordination, not line-by-line authorship.)*

### Parallel-Search-Tool (OpenMP/MPI) (merge-only — no authored core)
1. In mpi.cpp files are assigned with i % size == rank, but every process still calls get_files() on the whole directory and prints its own matches to stdout — what are the correctness and performance implications of this static round-robin scheme (load imbalance, redundant directory walks, interleaved output), and how would you improve it (dynamic work queue, MPI_Gather to rank 0)?
2. The OpenMP version guards cout with #pragma omp critical but accumulates the count with reduction(+:total_matches) — why is the critical section necessary for printing but not for the counter, and what would happen to the total if you dropped the reduction and just did total_matches += ... in the parallel loop?
3. In the hybrid model, work is split twice — MPI stripes files into local_files, then OpenMP threads scan that subset. With -np 2 and OMP_NUM_THREADS=2 you get 4-way parallelism; how do you reason about oversubscription vs. the physical core count, and how would MPI/OpenMP thread affinity and MPI_Init vs. MPI_Init_thread matter here?
4. The benchmark harness times the whole run including get_files() and stdout printing, and the workload is dominated by disk I/O; is the measured 'speedup' really measuring parallel compute, and how would you redesign the experiment (warm cache, exclude I/O, larger keyword-scan work per file) to isolate the parallelization benefit?
5. search_in_file uses string::find line-by-line for exact substring matching — how would you extend this to case-insensitive or regex search, count multiple matches per line, or scale to files too large to hold in memory, and where would those changes create new synchronization or memory-bandwidth bottlenecks?

*(Caveat: Archit only merged an AI-authored README; the C++ is a teammate's.)*

### DATA-SCIENCE-GROUP-ACTIVITY (Telco churn) (no authored commits)
1. The notebook picks Logistic Regression because it has the 'highest accuracy,' but for churn the business cares about catching customers who will leave — churn-class recall is only 0.57. How would you rebalance model selection toward recall/precision-recall AUC, and what techniques (class weights, SMOTE, threshold tuning) would you apply given the ~27% churn base rate?
2. Categorical features are encoded with pd.get_dummies(drop_first=True) fit on the full DataFrame before the train/test split, and StandardScaler is likewise fit before splitting. Where does data leakage occur here, and how would you restructure this with an sklearn Pipeline/ColumnTransformer fit only on training data?
3. You dropped 11 rows where TotalCharges was blank. What do those rows actually represent (hint: tenure == 0), and is dropping them the right call versus imputing 0?
4. The chi-square and t-tests were run on the raw dataset before modeling. How do those hypothesis-testing results relate to the Random Forest feature importances, and where can the two disagree (e.g., correlated one-hot columns splitting importance)?
5. A live Kaggle API key was committed into the notebook's cell output. Walk me through the security impact, how you'd remediate it (revoke, purge git history, use Colab secrets/env vars), and how you'd prevent secret leaks in notebooks going forward.

*(Caveat: no authored Archit commits; README-credited only.)*

### Archit-175 (profile README)
1. How does GitHub's special username/username profile-README mechanism work, and why does creating this repo make the README appear on your profile page?
2. Your banner, typing animation, and stats are rendered by third-party services (Vercel/Heroku endpoints) embedded as image URLs — what are the reliability, privacy, and rate-limit risks of depending on them, and how would you mitigate a service going down?
3. Several badges use style=for-the-badge with custom color and logoColor params — walk me through how shields.io constructs those badge images from the URL query string.
4. You feature four ML projects on this card (EEG D3QN+CNN, U-Net kidney segmentation, CNN pneumonia detection). Pick one and explain the actual model architecture and results behind the one-liner.
5. GitHub sanitizes README HTML and proxies images through Camo — how does that affect the animated/dynamic content you embedded, and what limits does it place on styling a profile README?

---

## Part B — Cross-Project / Architecture Questions

These probe patterns that recur across his Next.js / Supabase / React / Node work rather than a single repo.

1. **`use client` everywhere.** Across career-passport-v4, careerpassport, cpv2, cpv3, and archit-portfolio, nearly every component is a Client Component and dynamic data is rarely server-rendered. Walk me through the App Router's Server/Client boundary. For a content-heavy marketing site, what should live in an RSC, what genuinely needs the client, and how would you push the animation-heavy pieces to the leaves so the shell can stream from the server?
2. **`useLayoutEffect` + measure-and-draw.** You use the `getBoundingClientRect` → `useLayoutEffect` → `ResizeObserver` pattern in at least three separate repos (careerpassport, cpv2, career-passport-v4 connectors). Generalize the rule: when is `useLayoutEffect` mandatory over `useEffect`, how do you avoid a measure/paint feedback loop, and how does this interact with SSR (the "useLayoutEffect does nothing on the server" warning)?
3. **rAF-throttled scroll driving CSS variables.** The `--veil` pattern (scroll handler → rAF → write a CSS custom property, listener registered `passive`) appears across the CareerPassport sites. Compare driving animation through CSS variables vs. React state vs. the Web Animations API. When does each win, and how do you keep 60fps under a fast scroll?
4. **Client-side auth/role gating vs. server enforcement.** Consultancy stores role in localStorage and gates `/admin/*` client-side; Kore explicitly moves the authz boundary to the DAL + RLS; sampark uses cookie JWTs + a backend guard. Contrast these. State the invariant every one of these systems must satisfy, and explain why the client check is at best UX and never security.
5. **Secrets in source.** Hardcoded credentials appear in plantree_server (Gmail app password), job & jobApplicatoin (Mongo Atlas URI), Crawlers (OpenWeatherMap key), and SQL-TRACKER (encrypted GitHub token committed to a public repo). Give a single, consistent secrets-management story for (a) a serverless Node backend, (b) a purely static site that still needs a third-party API, and (c) a client that must hold a token. Where does each secret actually have to live?
6. **Supabase RLS as the security spine.** Kore, archit-sl, and bright-bird all lean on Postgres RLS (and, in Kore, SECURITY-DEFINER helpers + Realtime channel policies). Explain why RLS is "defense in depth" rather than "the only defense," how SECURITY DEFINER avoids policy recursion, and one class of bug RLS does *not* protect you from.
7. **SSE + "generation continues in the background."** Both archit-sl and bright-bird stream an opener over SSE, close the HTTP response, and deliver the rest via Supabase Realtime. Draw the full message lifecycle. What are the reconnection, ordering, and duplicate-delivery hazards when you hand a stream off from SSE to a realtime channel mid-flight?
8. **Rendering model-produced HTML.** Both learning-PWA repos pass LLM HTML through a regex `sanitizeHtmlSnippet` before render. Argue why string/regex sanitization is insufficient and what a correct pipeline looks like (allowlist DOM sanitizer, CSP, sandboxing). Tie it to the same XSS class you'd hit rebuilding `innerHTML` from user input in the job-board autocomplete.
9. **Serverless statelessness.** plantree_server shares a Nodemailer transporter and an implicit-global `total` across requests; jobApplicatoin writes Multer uploads to local disk on Vercel. Explain the serverless execution model (cold starts, no shared mutable state, ephemeral filesystem) and how each of these breaks under concurrency or across invocations.
10. **Deterministic client engines.** SQL-TRACKER and Puzzle-Tracker both use a seeded PRNG (Mulberry32/FNV-1a) + Fisher–Yates for a "daily set," then freeze the picks into synced state. Generalize the "seed-then-freeze" pattern: why is recomputing-from-seed alone unsafe once state mutates, and what's the analogous problem in any distributed deterministic computation?
11. **Union-merge sync without a server.** The two trackers do a union `mergeRemote()` over a Gist; Kore does true CRDT via Yjs. Position these on a spectrum from ad-hoc merge → LWW → CRDT. For a notes/status app synced across two browsers, what anomalies does each tolerate, and when is the jump to a CRDT actually justified?
12. **Framework vs. no-framework.** He ships both heavy Next.js/React apps and deliberately zero-dependency vanilla-JS apps (trackers, Crawlers, plantree front end). Make the engineering case for each choice. At what feature/scale threshold does the no-build vanilla approach start costing more than it saves?

---

## Part C — ML / AI Depth Questions

Drawn from and generalized across the ML/DS repos (EEG-RL, KidneyTumor, pneumonia, Convolve, Financial-Sentiment, Deep-Learning, NLP-LAB, GoogleColab, DATA-SCIENCE churn).

1. **Evaluation leakage is a recurring theme.** pneumonia-detection folds the test set into validation; Convolve resamples with SMOTETomek before splitting; DATA-SCIENCE fits get_dummies/StandardScaler before the split; Financial-Sentiment imputes across the whole series. State the general rule for what may touch the training fold vs. the eval fold, and design one `Pipeline`/`ColumnTransformer` that makes leakage structurally impossible for each case.
2. **Metric choice under imbalance.** Across pneumonia (medical), Convolve (credit default), and Telco churn, raw accuracy is misleading. For each, name the metric that actually matters (recall/sensitivity, KS/AUC, PR-AUC, balanced accuracy), justify it in business/clinical terms, and explain how threshold tuning changes the operating point.
3. **Class imbalance toolbox.** You've used inverse-frequency weighting, WeightedRandomSampler, focal loss, SMOTETomek, and class-weighted Dice across the repos. Compare these mechanically (loss reshaping vs. sampling vs. synthetic data vs. resampling+cleaning). When does SMOTE hurt, and why is focal loss often the safer default for pixel/medical tasks?
4. **RL vs. supervised framing.** In EEG-RL you cast classification as a D3QN episode (reward +1/−1−λ/t, terminate on first error). Defend this over plain cross-entropy: what does the sequential/discounted formulation actually add for calibration-free EEG, and when is RL-for-classification a gimmick vs. a real gain?
5. **Domain adaptation stack.** EEG-RL layers Euclidean Alignment + CORAL + DANN. For each, name the exact distribution shift it targets (covariate shift in second-order statistics vs. feature-distribution alignment via adversary), and explain the GradientReversal trick and how you'd weight the adaptation losses against the task loss without destabilizing training.
6. **Uncertainty quantification.** KidneyTumor uses MC-Dropout predictive entropy; the DH-chat and crypto work show you care about correctness guarantees elsewhere. Distinguish epistemic vs. aleatoric uncertainty, explain why entropy-of-the-mean captures one but not cleanly the other, and describe how you'd actually *validate* that an uncertainty map is calibrated (reliability diagrams, ECE).
7. **CNN design choices.** You've hand-built a 5-block CNN (pneumonia), a 1D-CNN over tabular data (Convolve), and an attention U-Net (KidneyTumor). For each, justify the architectural inductive bias — and specifically defend the Conv1D-over-tabular choice against the interviewer's obvious objection that tabular features have no local spatial structure.
8. **Transfer learning vs. from-scratch.** pneumonia went from-scratch on grayscale 150×150; Deep-Learning's WCE study fine-tuned EfficientNet/MobileNet/ResNet101. Give the decision rule for freeze-vs-train and pretrained-vs-scratch as a function of dataset size, domain gap (natural images → medical), and compute budget.
9. **Classical NLP from first principles.** In NLP-LAB you implemented Good-Turing, deleted interpolation, Katz backoff, and Kneser-Ney by hand. Explain why Kneser-Ney's continuation counts fix the "San Francisco" problem that raw unigram backoff gets wrong, and contrast grid-searched vs. EM-estimated interpolation weights.
10. **Model serving & reproducibility.** Financial-Sentiment and Convolve ship pickled models; several repos hardcode `random_state=42` and quote single-run metrics. Critique pickle-based serving (security + version brittleness), and describe how you'd report results defensibly (CV with variance, seeds, a naive baseline, a held-out test the model never selected on).
11. **The subject-dependent vs. cross-subject gap.** EEG-RL cites ~88–98% subject-dependent but 36–59% LOSO. How much of that collapse is fundamental to calibration-free biosignal ML, how did the leakage-safe calibration-split centroid and LOSO protocol keep the honest numbers honest, and what would you try next to close it?
12. **Applied-LLM engineering (not training).** In archit-sl/bright-bird you consumed GPT-4o/4.1, Whisper, the Realtime API, Vision, and Gemini 2.5 Flash — JSON-mode generation, ephemeral tokens, multi-provider routing. What's the engineering discipline that makes multi-provider LLM output *consistent and safe* (schema validation, retries/repair, provider abstraction, sanitization), and where does prompt engineering stop being the hard part?

---

## Part D — System-Design Questions (derived from his projects)

Open-ended design rounds that build directly on systems he's touched, so he can anchor answers in real experience.

1. **Design an AI career-intelligence platform (CareerPassport, for real).** The marketing sites promise "RAG," "fine-tuning," resume-to-role matching, and a candidate/company two-sided marketplace — but no ML actually ships. Design the real backend: résumé ingestion + parsing, an embeddings/RAG retrieval layer over a job corpus, a matching/ranking service, the candidate↔company data model, auth and privacy (PII), and how you'd stage it from a static Next.js front end to a live product. Where would you actually use RAG vs. a fine-tuned model vs. plain filters?

2. **Design a campus document-approval system (Sampark, from scratch).** Multi-role (PI/clerk/dean/chairman…), a role-routed approval state machine, coordinate-accurate PDF signature embedding, transactional per-club budget accounting (lock-on-approval, deduct-on-final), and audit logging. Focus on: the state-machine model, keeping S3 (PDFs) and the DB (budget) consistent without distributed transactions, preventing double-spend under concurrent approvals, and idempotent retries for the leave-skipping workflow.

3. **Design a real-time collaborative workspace (Kore, at scale).** Notion-style docs + Keep-style notes + Excalidraw whiteboard + chat, multi-tenant with per-workspace isolation. Cover: CRDT choice (Yjs) and the sync provider, snapshot vs. update-log persistence trade-offs, presence/live-cursors at scale, the RLS/authz model for channel subscription, and how you'd move off Supabase-Realtime broadcast to a dedicated collaboration service when a single workspace has hundreds of concurrent editors.

4. **Design a distributed parallel search engine (from the OpenMP/MPI toy).** Full-text keyword/regex search across millions of files on a cluster. Cover: work distribution (static round-robin vs. dynamic work-stealing queue), avoiding redundant directory walks, gathering ranked results to a coordinator, separating I/O-bound from CPU-bound stages, an inverted index vs. brute-force `string::find` scan, and how you'd benchmark to isolate real parallel speedup from disk-I/O noise (warm cache, I/O excluded, per-file work amortized).

5. **Design an adaptive micro-learning platform (ScrollnLearn/bright-bird, productionized).** LLM-generated flashcard decks streamed to the client, multi-provider (OpenAI + Gemini) generation, a `learning_events` telemetry stream, and true difficulty/ordering adaptation. Cover: the streaming architecture (SSE handoff → realtime), a provider-abstraction layer that keeps JSON output consistent across models, turning the six-event telemetry stream into an actual mastery/spaced-repetition signal, rate-limiting/abuse (the 3-decks-per-day trigger), safe rendering of model HTML, and cost control across providers.

6. **Design a privacy-first, backend-less cross-device sync layer (generalizing the trackers).** A static app that syncs user state across browsers/devices with no server you operate, storing an encrypted blob in a user-provided store (Gist/Drive). Cover: the client-side crypto (key derivation, why a 4-digit PIN is the weak link, what to use instead), the merge/conflict model (union → LWW → CRDT), offline-first reconciliation, and the exact point at which "no backend" stops being viable and you must introduce a server or a proper sync service.

7. **Design an end-to-end financial-signal prediction service (Financial-Sentiment, real).** User enters a ticker → system fetches fresh news, scores sentiment with a transformer, joins engineered technical indicators, and returns a next-day-return prediction with a confidence band. Cover: the feature pipeline and its train/serve schema parity (the notebook trains on 14 features but serves 3 — fix that), leakage-safe time-series validation, a model registry + retraining loop, per-ticker generalization vs. single-stock overfitting, and honest uncertainty on a signal this weak.

## SECTION 5: REPOSITORY SNAPSHOT & UPDATE LEDGER

**Snapshot taken:** 2026-07-06 · **Analyst identity:** `gh` authenticated as `Archit-175` (full `repo` scope) · **Method:** blobless `git clone` + `gh api`, role from `git shortlog` across all branches.

Each row records the **exact commit this report was built from**. Next time you want to update the report, you don't re-read everything — you detect which repos moved since their recorded HEAD and re-analyze only those.

### Analyzed-HEAD ledger (all 36 repos)

| # | Repo | Vis | Branch | Analyzed HEAD | Last commit | Commits |
|---|---|---|---|---|---|---|
| 01 | `Archit-175/career-passport-v4` | PUBLIC | main | `aa2bb6d0dd` | 2026-06-18 | 23 |
| 02 | `Archit-175/careerpassport` | PRIVATE | main | `c24a88ef60` | 2026-06-08 | 56 |
| 03 | `Archit-175/cpv2` | PRIVATE | main | `aac2ce3430` | 2026-06-11 | 58 |
| 04 | `Archit-175/cpv3` | PRIVATE | main | `c876b8a67f` | 2026-06-12 | 6 |
| 05 | `Archit-175/Kore` | PRIVATE | main | `e24b103923` | 2026-06-30 | 16 |
| 06 | `Archit-175/EEG-Emotion-Recognition-RL` | PUBLIC | main | `51118d3bed` | 2026-05-18 | 9 |
| 07 | `Archit-175/KidneyTumorSegmentation-ARUGD` | PUBLIC | main | `8aed46794d` | 2026-05-19 | 5 |
| 08 | `Archit-175/Financial-Sentiment-Analysis-` | PUBLIC | main | `47094622cf` | 2025-02-09 | 19 |
| 09 | `Archit-175/pneumonia-detection` | PUBLIC | main | `4aa4540529` | 2026-05-13 | 10 |
| 10 | `Archit-175/Convolve` | PUBLIC | main | `745acd21ae` | 2026-05-17 | 17 |
| 11 | `Archit-175/archit-portfolio` | PUBLIC | main | `7033ad42a0` | 2026-05-21 | 10 |
| 12 | `Archit-175/archit-sl` | PRIVATE | main | `db33c8cb49` | 2026-05-24 | 32 |
| 13 | `Archit-175/bright-bird` | PRIVATE | main | `f34549e21d` | 2026-05-31 | 36 |
| 14 | `Archit-175/plantree_server` | PUBLIC | main | `6a92de5b29` | 2024-10-29 | 30 |
| 15 | `Archit-175/Consultancy-Project-` | PRIVATE | frontend | `271b096505` | 2024-10-28 | 22 |
| 16 | `Archit-175/Crawlers` | PUBLIC | main | `b1320ea37a` | 2026-05-17 | 250 |
| 17 | `Archit-175/Deep-Learning` | PUBLIC | main | `66f44db577` | 2026-04-10 | 50 |
| 18 | `Archit-175/NLP-LAB` | PUBLIC | main | `09338721a0` | 2025-12-03 | 6 |
| 19 | `Archit-175/Odoo` | PUBLIC | main | `21f1668279` | 2026-05-17 | 14 |
| 20 | `Archit-175/Puzzle-Tracker-` | PUBLIC | main | `a90e7a49c3` | 2026-07-01 | 15 |
| 21 | `Archit-175/SQL-TRACKER` | PUBLIC | main | `a7cfcfedb4` | 2026-07-05 | 18 |
| 22 | `Archit-175/GoogleColab` | PUBLIC | main | `94c125f870` | 2025-11-18 | 28 |
| 23 | `Archit-175/job` | PUBLIC | main | `de24875900` | 2024-08-20 | 1 |
| 24 | `Archit-175/jobApplicatoin` | PUBLIC | main | `0ccb13428f` | 2024-08-20 | 14 |
| 25 | `jeet0407/sampark-backend` | PRIVATE | main | `9c911aeda6` | 2026-06-22 | 38 |
| 26 | `jeet0407/sampark-frontend` | PRIVATE | main | `38f92ba32a` | 2026-04-21 | 29 |
| 27 | `smprk-svnit/smprk-backend` | PRIVATE | main | `07e5f985f2` | 2026-07-03 | 42 |
| 28 | `smprk-svnit/smprk-frontend` | PRIVATE | main | `38f92ba32a` | 2026-04-21 | 29 |
| 29 | `jeet0407/Parallel-Search-Tool-OpenMP-MPI-` | PUBLIC | main | `8ce6a2a216` | 2026-05-12 | 3 |
| 30 | `Nilangbhuva/Convolve` | PUBLIC | main | `745acd21ae` | 2026-05-17 | 17 |
| 31 | `ttanishh/Consultancy-Project-` | PRIVATE | frontend | `271b096505` | 2024-10-28 | 22 |
| 32 | `divyajaisansaria/DATA-SCIENCE-GROUP-ACTIVITY` | PUBLIC | main | `55445d0e12` | 2025-09-17 | 2 |
| 33 | `Diya5772/pneumonia-detection` | PUBLIC | main | `4aa4540529` | 2026-05-13 | 10 |
| 34 | `jaindevshrut/Odoo` | PUBLIC | main | `21f1668279` | 2026-05-17 | 14 |
| 35 | `Omramanuj/archit-sl` | PRIVATE | main | `db33c8cb49` | 2026-05-24 | 32 |
| 36 | `Archit-175/Archit-175` | PUBLIC | main | `b69e3171e4` | 2026-05-19 | 8 |

> **Most likely to change** (active solo work — watch these first on any refresh): `SQL-TRACKER` (2026-07-05), `smprk-backend` (2026-07-03), `Puzzle-Tracker-` (2026-07-01), `Kore` (2026-06-30), `sampark-backend` (2026-06-22), `career-passport-v4` (2026-06-18). The 2024-era repos (`job`, `jobApplicatoin`, `plantree_server`, `Consultancy`) are effectively frozen.

### Machine-readable manifest (for scripted drift checks)

```
# owner/name  branch  analyzed_sha  last_commit
Archit-175/career-passport-v4          main     aa2bb6d0dd  2026-06-18
Archit-175/careerpassport              main     c24a88ef60  2026-06-08
Archit-175/cpv2                        main     aac2ce3430  2026-06-11
Archit-175/cpv3                        main     c876b8a67f  2026-06-12
Archit-175/Kore                        main     e24b103923  2026-06-30
Archit-175/EEG-Emotion-Recognition-RL  main     51118d3bed  2026-05-18
Archit-175/KidneyTumorSegmentation-ARUGD main   8aed46794d  2026-05-19
Archit-175/Financial-Sentiment-Analysis- main   47094622cf  2025-02-09
Archit-175/pneumonia-detection         main     4aa4540529  2026-05-13
Archit-175/Convolve                    main     745acd21ae  2026-05-17
Archit-175/archit-portfolio            main     7033ad42a0  2026-05-21
Archit-175/archit-sl                   main     db33c8cb49  2026-05-24
Archit-175/bright-bird                 main     f34549e21d  2026-05-31
Archit-175/plantree_server             main     6a92de5b29  2024-10-29
Archit-175/Consultancy-Project-        frontend 271b096505  2024-10-28
Archit-175/Crawlers                    main     b1320ea37a  2026-05-17
Archit-175/Deep-Learning               main     66f44db577  2026-04-10
Archit-175/NLP-LAB                     main     09338721a0  2025-12-03
Archit-175/Odoo                        main     21f1668279  2026-05-17
Archit-175/Puzzle-Tracker-             main     a90e7a49c3  2026-07-01
Archit-175/SQL-TRACKER                 main     a7cfcfedb4  2026-07-05
Archit-175/GoogleColab                 main     94c125f870  2025-11-18
Archit-175/job                         main     de24875900  2024-08-20
Archit-175/jobApplicatoin              main     0ccb13428f  2024-08-20
jeet0407/sampark-backend               main     9c911aeda6  2026-06-22
jeet0407/sampark-frontend              main     38f92ba32a  2026-04-21
smprk-svnit/smprk-backend              main     07e5f985f2  2026-07-03
smprk-svnit/smprk-frontend             main     38f92ba32a  2026-04-21
jeet0407/Parallel-Search-Tool-OpenMP-MPI- main  8ce6a2a216  2026-05-12
Nilangbhuva/Convolve                   main     745acd21ae  2026-05-17
ttanishh/Consultancy-Project-          frontend 271b096505  2024-10-28
divyajaisansaria/DATA-SCIENCE-GROUP-ACTIVITY main 55445d0e12 2025-09-17
Diya5772/pneumonia-detection           main     4aa4540529  2026-05-13
jaindevshrut/Odoo                      main     21f1668279  2026-05-17
Omramanuj/archit-sl                    main     db33c8cb49  2026-05-24
Archit-175/Archit-175                  main     b69e3171e4  2026-05-19
```

### How to refresh next time (what to check)

A future update is three cheap checks, then a targeted re-analysis:

**1. Detect NEW repos** created since this snapshot (repos not in the ledger above):
```bash
gh repo list Archit-175 --limit 200 --json name,pushedAt,visibility
# also check collaborations / orgs:
gh repo list jeet0407 --limit 100 --json name,pushedAt
gh api user/repos --paginate -q '.[].full_name'   # everything you can see
```
Any repo name not in the ledger = a new project to add.

**2. Detect CHANGED repos** — compare each repo's current head SHA to the recorded `analyzed_sha` (no clone needed):
```bash
# for each line in the manifest:
current=$(gh api "repos/<owner>/<name>/commits/<branch>" --jq '.sha')
# if ${current:0:10} != analyzed_sha  ->  repo changed, flag for re-analysis
```
(Or the even cheaper signal: `gh api repos/<owner>/<name> --jq '.pushed_at'` and compare the date to `last_commit`.)

**3. See EXACTLY what changed** in a flagged repo (so you only re-read the delta):
```bash
git clone --filter=blob:none https://github.com/<owner>/<name> && cd <name>
git log <analyzed_sha>..HEAD --oneline --stat        # new commits + touched files
git shortlog -sne <analyzed_sha>..HEAD               # did Archit author any of them?
```
Re-run the per-repo analysis only for the flagged repos, swap their Section-1 entries, and re-run the assembler. Everything else stays cached — no need to touch the 30+ unchanged repos.

### Recommended next steps

1. **Act on the tiers now.** Pull the Tier-1 resume bullets (Kore, EEG-RL, career-passport-v4, KidneyTumorSegmentation) and rehearse the Section-4 interview bank for those four first — that's the highest-leverage use of this report.
2. **Fix the honesty gaps before interviews.** Be ready to explain the `pneumonia-detection` evaluation-leakage bug and the unfinished `Financial-Sentiment` pipeline; do **not** headline `sampark`/`smprk`, `archit-sl`, `Parallel-Search`, or `Odoo` (0 authored / docs-only) — a "walk me through your code" question would expose them.
3. **Consolidate the CareerPassport family.** Five repos (v1–v4 + Kore) tell one evolving story — decide which single one is the public showcase and archive/private the rest to avoid a cluttered profile.
4. **Schedule a light refresh** before each application wave (or monthly): run the 3 checks above. Watch `SQL-TRACKER`, `Puzzle-Tracker`, `Kore`, and `cpv3`/v4 most closely, plus any brand-new repo.
5. **Optional:** feed the Tier-1 bullets into the live `archit-portfolio` site (this report lives inside that repo), so the portfolio reflects the strongest, verified work.
