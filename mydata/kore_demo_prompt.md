You're adding a public, no-login DEMO / SANDBOX MODE to Kore so it can be embedded on my portfolio. Explore the codebase first to understand the real architecture, then propose a plan before building. Use your available skills (react-expert, nextjs-developer, etc.) and MCP tools where helpful.

## What Kore is
Kore is a real-time collaborative team workspace (Next.js App Router + TypeScript + Supabase). It has: Google-Keep-style notes, Notion-style nested docs (BlockNote), Notion-style databases (table + Kanban views), Excalidraw whiteboards, and team chat — all under shared projects. Writes go through Server Actions (`lib/actions/*`), data access + auth via a DAL (`lib/dal.ts`), real-time via a custom Yjs-CRDT provider over Supabase Realtime (`lib/yjs/*`), and Postgres with Row-Level Security. Read these to understand the real data shapes and write path.

## Goal
A demo mode that:
- Needs **NO login** — public and safe to embed in an `<iframe>` (no auth walls, no OAuth popups, no redirects).
- Comes **pre-seeded** with realistic sample data so it feels alive: a demo team/workspace with a few notes, a couple of docs, a database (table + Kanban rows), a whiteboard with shapes, and a chat with a few messages between a couple of teammates.
- Is **fully non-persistent (ephemeral)**: any change a visitor makes — add/edit a note, type in a doc, drag a Kanban card, draw on the whiteboard, send a chat — lives **only in memory** and is **undone on page refresh**. **Nothing is written to Supabase / the real database.**

## Recommended approach (adapt to the actual code)
- Add a demo entry point — a dedicated route (e.g. `/demo`) and/or a `DEMO` flag in context — that **bypasses auth** (no login redirect; skip DAL membership checks) and renders the full workspace UI.
- Introduce a **demo data layer**: a client-side, in-memory store (React context / Zustand / Jotai) **seeded from a mock dataset** that mirrors the real DB shapes (workspace, team, members, projects, notes, pages/docs, databases + rows + views, whiteboards, chat messages, activity). In demo mode, ALL reads and mutations hit this in-memory store — **never call the real Server Actions / Supabase**.
- **Disable Supabase entirely in demo mode**: no auth, no Postgres reads/writes, no Realtime broadcast, no Storage uploads. For docs/whiteboards that rely on Yjs/BlockNote/Excalidraw, run them in **local, single-user, non-networked mode** seeded with the mock content (Yjs works fine fully offline with no provider).
- Because the store is re-created from the seed on every page load, **a refresh wipes all changes automatically** — that's the whole trick; don't add any persistence (no localStorage either, if you want it to reset every refresh).
- Keep the authenticated app **100% untouched** — demo is purely additive and guarded by the flag.

## Seed content (make it look real, not empty)
- A demo team ("Kore Demo") with 3–4 members (fake names + avatars) and 1–2 projects.
- **Notes:** 4–6 Keep-style notes — different colors, one checklist, one pinned.
- **Docs:** 2 BlockNote docs with headings, a list, and an @mention.
- **Database:** 1 database with ~6 rows, plus BOTH a Table view and a Kanban board with a status column (so drag-to-move works locally).
- **Whiteboard:** 1 Excalidraw board with a few shapes / sticky notes / arrows.
- **Chat:** a channel with ~8 messages between the fake members, a couple of emoji reactions, so it reads like a real conversation.
- Optional touch: 1–2 static presence avatars / "live cursors" to hint at the real-time nature (no actual networking).

## UX
- A clear, unobtrusive banner: **"Demo mode — changes aren't saved and reset on refresh."**
- Everything must be genuinely interactive (create / edit / drag / draw / type) — just ephemeral.
- Iframe-embeddable and fast to load (lazy-load heavy editors like Excalidraw/BlockNote).
- Handle deletes/edits of seeded content gracefully (they just mutate local state).

## Constraints
- **Verify zero writes/reads to Supabase from `/demo`** (check the network tab — no Supabase calls).
- Don't break or change the authenticated app.
- Run locally and confirm: the seed loads, every module (notes, docs, database, whiteboard, chat) is interactive, and a refresh resets ALL changes back to the seed.
- Keep it Vercel-deployable and iframe-safe (headers allowing embedding on my portfolio origin).

Start by reading the routes, `lib/dal.ts`, `lib/actions/*`, `lib/yjs/*`, and the notes/docs/databases/whiteboards/chat modules, then propose the demo-layer implementation plan before coding.
