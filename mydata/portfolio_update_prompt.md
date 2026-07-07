You are redesigning and upgrading my personal portfolio website — a BIGGER redesign. Explore the current codebase AND read my source-of-truth docs before changing anything, then propose a plan. **Use your available skills** (e.g. frontend-design, react-expert, nextjs-developer, ui-ux-pro-max) and **MCP tools** (browser preview, etc.) wherever they help.

## About me
I'm Archit Savaliya — a final-year B.Tech Artificial Intelligence student at SVNIT Surat. I build AI-driven products and full-stack web apps, I've led large college teams/events, and I'm targeting AI/ML, data-analyst, and product roles (NOT pure DSA/SDE). Long-term I want to build my own business. I ship real products (often AI-assisted) and care about product thinking + polish.

## The repo & current site
This IS my portfolio: a Next.js + TypeScript app (Tailwind, Framer Motion, GSAP). Live at https://archit-175.vercel.app/. It already has a dark, editorial, red-accent theme with: a hero, stats strip, "Core Identity" about, a projects list, a Live Demo (Crawlers embed), Publications (2 papers embedded), a strong Leadership section, and a Resume download. **Keep this identity and the Leadership/Publications/Live-Demo sections — enhance, don't delete.** Explore the code first to learn the structure and components.

## Read these FIRST — source of truth (accurate & honest; do NOT invent facts, metrics, or dates)
- `mydata/archit_profile.md` — my full profile: journey, ALL projects with my TRUE role & durations, academics, leadership, achievements, skills, positioning.
- `mydata/archit_career_context.md` — deep per-project analysis (tech, features, honest role) + Skill Matrix (Section 2).
- `mydata/OTP_to_Memory_PIN Case Study.pdf` — my product-strategy case study.
- Resume: `~/Downloads/archit_resume.pdf`.

## Global rules
- **Voice: FIRST PERSON throughout** ("I build…", "My role was…") — never third-person ("Archit is…").
- **Honesty:** use the exact roles below; don't overclaim. **Do NOT show my CGPA anywhere.**

## Sections to build / update

### 1. Hero
Lead with my **name** immediately + a sharp one-liner (e.g. "AI & Product Builder — I ship real systems") + CTAs (View Work · Résumé · Contact). Replace the empty maroon circle with a meaningful interactive centerpiece (WebGL/particles or an animated node-graph, or bold kinetic type). Keep the red accent + keyword marquee.

### 2. Stats / credibility strip
**Just update what's already there** — do NOT add "Web Wonders 1st" or "JEE rank" as stat items. You MAY add **"₹29L+ Managed"**. Keep it tied to real, product-y work (several of my projects ARE products: SMPRK, Kore, the SQL/Puzzle trackers, CareerPassport).

### 3. About ("Core Identity")
Rewrite in **first person** ("I'm an AI undergrad at SVNIT… I build…"). Use the font **"Comic Shanns"** for this section (self-host it — it's freely available; add via `@font-face` / `next/font/local`). Keep the 3 pillar cards. **No CGPA.**

### 4. Projects — the centerpiece
Show **8 featured projects up front**, then a **"See more"** expand for the rest. Each card has a **"know more…"** control that expands its description; include **tech stack + my honest role + outcome** for each. Group by theme (Products / AI-ML / Web).

**FEATURED (8):**
1. **Kore** — real-time collaborative workspace (Notion + Keep + whiteboards + chat) I built **SOLO**; custom Yjs-CRDT sync over Supabase Realtime + fully RLS-secured Postgres. (~1 week, AI-assisted.) *Private repo — no live demo yet (see Live Demo note).*
2. **SAMPARK / SMPRK** — SVNIT's digital document-approval platform (NestJS + Prisma + PostgreSQL). **Team lead — I own product vision & workflow design and coordinate the dev team (I did NOT write all the backend). ONGOING / being deployed.**
3. **CareerPassport (v4)** — premium marketing/waitlist site, **freelance** for a startup (Next.js, WebGL/Three.js). Frontend + product design. (~3 weeks.) *Live demo available.*
4. **bright-bird (ScrollnLearn)** — AI "scroll-to-learn" app that turns any topic into swipeable card decks. **My part: the adaptive learning-events layer + Gemini generation; built on a teammate's base; currently on hold.** (Contributor — say so.)
5. **EEG Emotion Recognition (Deep RL)** — **GROUP research (~2 months): I was a contributor, NOT the lead / minor contribution.** Subject-independent emotion recognition (Double-Dueling DQN + PPO, domain adaptation, DEAP/SEED-IV). Paper.
6. **Kidney Tumor Segmentation** — **GROUP research (~3 months): contributor, NOT lead.** Attention Residual U-Net + MC-Dropout uncertainty on KiTS23 (~0.85 Dice); paper under review.
7. **Crawlers** — forest-conservation website; **won 1st place, Web Wonders 2024**. Team project — my part: frontend + donation-email flow. *Live demo (crawlers-one.vercel.app).*
8. **Convolve 3.0 — Credit-Risk Prediction** — AI/ML hackathon (Pan-IIT), customer-default prediction (~96% acc). Co-authored.

**SEE MORE:** SQL-Tracker (solo, live: sql-tracker-steel.vercel.app), Puzzle-Tracker (solo, live), Pneumonia Detection (CNN, co-authored), Financial Sentiment (NLP + Streamlit, co-authored), Parallel Search (OpenMP/MPI, HPC — minor role).

**Do NOT include:** NLP-LAB, Deep-Learning, GoogleColab, Data Science project, Consultancy Project, archit-sl.

### 5. Live Demo (enhance existing)
- **Kore live demo isn't possible yet** (it needs login) — leave a "demo coming soon / view-mode in progress" placeholder for it; I'll add a view-mode later.
- Add **CareerPassport v4** as a live embed/link (get the URL from GitHub or ask me). Keep **Crawlers**. Pull **live GitHub/Vercel links** for other good ones (SQL-Tracker, Puzzle-Tracker).

### 6. Case Study — as its OWN PAGE
Put a **glimpse/teaser in the Live-Demo area** with a "Want to see it? →" that **navigates to a dedicated case-study page** for **OTP → Memory PIN** (title, research question, key findings — complaints ↓28%, "compounding UX" — with the embedded PDF).

### 7. Certifications (NEW)
Add a certifications section — I earned these in the summer after 1st year (Jatan Shah courses):
- **Excel** — https://excel.jatanshah.in/your-certificate/2D089937E2B7-2D089937473D-813B964798/
- **Power BI** — https://excel.jatanshah.in/your-certificate/2D065117E824-2D089936F8BA-813B964798/

### 8. Achievements (NEW section — not top stats)
A dedicated achievements section: Web Wonders 2024 (1st), CEVPOLY Business Simulation (1st), the Excel & Power BI certs, the 2 research papers. (Keep these OUT of the top stats strip.)

### 9. Skills (NEW)
Categorized + honest: Languages, Frameworks, ML/AI, Data & DB, Tools. Pull from `archit_career_context.md` Section 2; don't overstate.

### 10. Keep & polish
Leadership & Execution (already strong — keep, add ₹29L / role highlights), Publications (both papers), Contact, Résumé download.

## Design direction
Distinctive, modern, memorable — dark editorial + red accent, first-person voice, "Comic Shanns" in the About section. Fast, fully responsive, accessible, dark-mode, strong typography + purposeful GSAP motion (respect prefers-reduced-motion). Real project thumbnails/screenshots. Stack stays Next.js + TS + Tailwind + Framer Motion + GSAP (+ R3F/Three.js for the hero if useful); Vercel-deployable.

## Constraints
Preserve what works; don't break the build. Run it locally and verify it renders + is responsive (use a preview MCP if available). Show me a redesign plan before large changes and check in on design decisions. Ask me for any live URL or asset you need.

Start by reading the source-of-truth files and the current codebase, then propose the redesign plan.
