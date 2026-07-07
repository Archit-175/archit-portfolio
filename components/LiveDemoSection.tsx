"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import SeamGlow from "@/components/SeamGlow";
import { FiExternalLink, FiArrowRight, FiLock } from "react-icons/fi";

type EmbedPanel = {
  title: string;
  category: string;
  description: string;
  color: string;
  textColor: string;
} & ({ kind: "embed"; url: string } | { kind: "placeholder"; url?: undefined });

const panels: EmbedPanel[] = [
  {
    kind: "embed",
    title: "Crawlers",
    category: "Interactive Platform",
    description:
      "A forest-conservation site I helped build that won 1st at Web Wonders 2024. Explore the live map.",
    url: "https://crawlers-one.vercel.app/",
    color: "bg-[#111]",
    textColor: "text-white",
  },
  {
    kind: "embed",
    title: "CareerPassport",
    category: "Freelance · WebGL",
    description:
      "The flagship marketing site I built freelance, with a custom Three.js globe and a 3D blog gallery.",
    url: "https://career-passport-v4.vercel.app",
    color: "bg-crimson",
    textColor: "text-white",
  },
  {
    kind: "embed",
    title: "Kore",
    category: "Real-time Workspace",
    description:
      "My solo Notion-alternative: notes, docs, databases, whiteboards & chat with live CRDT sync. This demo resets on refresh; click around.",
    url: "https://kore-sampark.vercel.app/demo",
    color: "bg-white",
    textColor: "text-black",
  },
];

const moreLive = [
  {
    title: "SQL-Tracker",
    note: "Encrypted SQL-practice tracker · solo",
    url: "https://sql-tracker-steel.vercel.app",
  },
  {
    title: "Puzzle-Tracker",
    note: "Puzzle-practice sibling · solo",
    url: "https://puzzle-tracker-six.vercel.app",
  },
];

function BrowserFrame({ url, title }: { url: string; title: string }) {
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl">
      <div className="flex shrink-0 items-center gap-3 border-b border-white/10 bg-[#0d0d0d] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-2 flex min-w-0 flex-1 items-center gap-2 rounded-md bg-[#2a2a2a] px-3 py-1.5">
          <span className="truncate font-inter text-xs text-white/40">{url}</span>
        </div>
        <button
          onClick={() => setReloadKey((k) => k + 1)}
          className="text-white/30 transition-colors hover:text-white/70"
          title="Reload"
          aria-label="Reload preview"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 transition-colors hover:text-white/70"
          title="Open in new tab"
          aria-label={`Open ${title} in a new tab`}
        >
          <FiExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div className="relative flex-1 overflow-hidden bg-white">
        {/* Render the iframe at a wider logical viewport, then scale it down so the
            embedded site shows its full desktop layout instead of a zoomed-in slice. */}
        <iframe
          key={reloadKey}
          src={url}
          title={title}
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{ width: "133.333%", height: "133.333%", transform: "scale(0.75)" }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function KorePlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#161616] via-[#0c0c0c] to-black p-8 text-center shadow-2xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-crimson/40 bg-crimson/10 text-crimson">
        <FiLock size={26} />
      </div>
      <div>
        <p className="font-oswald text-sm uppercase tracking-[0.25em] text-crimson">
          Demo in progress
        </p>
        <h4 className="mt-2 font-oswald text-3xl font-bold uppercase text-white">Kore</h4>
      </div>
      <p className="max-w-sm font-inter text-sm leading-relaxed text-white/55">
        Kore needs a login to show its real-time collaboration, so I&apos;m building a public
        view-mode demo. Until then, here&apos;s the honest status: coming soon.
      </p>
      <span className="rounded-full border border-white/15 px-4 py-1.5 font-inter text-[11px] uppercase tracking-[0.2em] text-white/50">
        View-mode · WIP
      </span>
    </div>
  );
}

function Panel({ panel }: { panel: EmbedPanel }) {
  return panel.kind === "embed" ? (
    <BrowserFrame url={panel.url} title={panel.title} />
  ) : (
    <KorePlaceholder />
  );
}

export default function LiveDemoSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // 3 panels → pan across ~2/3 of the 300vw track.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="live-demo" className="relative bg-black">
      <SeamGlow />
      {/* ── Mobile: vertical stack ── */}
      <div className="relative z-10 flex w-full flex-col gap-12 px-6 py-16 sm:px-12 md:hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-5">
          <h2 className="font-oswald text-[25vw] font-bold text-transparent" style={{ WebkitTextStroke: "2px white" }}>
            LIVE
          </h2>
        </div>
        <div className="relative z-10">
          <p className="mb-3 font-inter text-xs uppercase tracking-[0.2em] text-crimson">Try it yourself</p>
          <h2 className="font-oswald text-4xl font-bold uppercase tracking-tighter">LIVE DEMOS</h2>
        </div>
        {panels.map((demo, idx) => (
          <div key={idx} className="relative z-10 flex flex-col gap-4">
            <div className={`w-full border border-white/10 p-6 ${demo.color}`}>
              <p className={`mb-2 font-oswald text-xs uppercase tracking-widest opacity-70 ${demo.textColor}`}>{demo.category}</p>
              <h3 className={`mb-2 font-oswald text-3xl font-bold uppercase ${demo.textColor}`}>{demo.title}</h3>
              <p className={`font-inter text-sm opacity-80 ${demo.textColor}`}>{demo.description}</p>
            </div>
            <div className="h-[46vh] w-full">
              <Panel panel={demo} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop: horizontal scroll ── */}
      <div ref={targetRef} className="hidden md:block md:h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
            <h2 className="font-oswald text-[15vw] font-bold text-transparent" style={{ WebkitTextStroke: "2px white" }}>
              LIVE DEMO
            </h2>
          </div>
          <motion.div style={{ x }} className="relative z-10 flex w-[300vw] gap-12 px-24 md:px-40">
            {panels.map((demo, idx) => (
              <div key={idx} className="flex h-[74vh] w-[80vw] shrink-0 flex-col overflow-hidden border border-white/10 shadow-2xl">
                <div className={`flex shrink-0 items-center justify-between px-10 py-5 ${demo.color}`}>
                  <div>
                    <p className={`font-oswald text-xs uppercase tracking-widest opacity-70 ${demo.textColor}`}>{demo.category}</p>
                    <h3 className={`font-oswald text-3xl font-bold uppercase ${demo.textColor}`}>{demo.title}</h3>
                  </div>
                  <p className={`max-w-sm text-right font-inter text-sm opacity-80 ${demo.textColor}`}>{demo.description}</p>
                </div>
                <div className="min-h-0 flex-1">
                  <Panel panel={demo} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── More live builds + Case-study teaser (shared) ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-4 sm:px-12 md:px-20 lg:px-28">
        {/* More live */}
        <div className="mb-6 flex items-center gap-4">
          <span className="font-oswald text-sm uppercase tracking-[0.2em] text-white/50">More live builds</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {moreLive.map((m) => (
            <a
              key={m.title}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0A0A0A] p-6 transition-colors hover:border-crimson/40 hover:bg-[#111]"
            >
              <div>
                <h4 className="font-oswald text-xl font-bold uppercase text-white group-hover:text-crimson transition-colors">
                  {m.title}
                </h4>
                <p className="mt-1 font-inter text-xs uppercase tracking-widest text-white/45">{m.note}</p>
              </div>
              <FiExternalLink className="text-white/40 transition-colors group-hover:text-crimson" size={20} />
            </a>
          ))}
        </div>

        {/* Case-study teaser */}
        <Link
          href="/case-study/otp-memory-pin"
          className="group mt-8 block overflow-hidden rounded-2xl border border-crimson/25 bg-gradient-to-br from-[#1c0509] via-[#0b0b0b] to-black p-8 transition-colors hover:border-crimson/60 md:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 font-inter text-xs uppercase tracking-[0.25em] text-crimson">Product case study</p>
              <h3 className="font-oswald text-3xl font-bold uppercase leading-none tracking-tight text-white md:text-4xl">
                OTP → Memory PIN
              </h3>
              <p className="mt-4 font-inter text-sm leading-relaxed text-white/60 md:text-base">
                How replacing one-time passwords with a memorable PIN cut support complaints by{" "}
                <span className="text-white">~28%</span>. A study in compounding UX and product
                thinking.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-crimson/50 px-6 py-3 font-inter text-xs uppercase tracking-[0.2em] text-white transition-all group-hover:bg-crimson">
              Want to see it?
              <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
