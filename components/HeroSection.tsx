"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      {/* ── Figure on the right ── */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[90vh] w-[52vw] lg:block xl:w-[48vw]">
        {/* crimson aura */}
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-1/2 h-[38%] w-[70%] -translate-x-1/2 rounded-full bg-crimson opacity-40 blur-[120px]"
        />
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src="/archit.svg"
            alt="Archit Savaliya"
            fill
            priority
            sizes="50vw"
            className="object-contain object-bottom drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
          />
        </motion.div>
      </div>

      {/* Readability scrims */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* ── Top roles line ── */}
      <div className="absolute left-0 top-[76px] z-20 flex w-full flex-col items-center gap-2 border-t border-white/10 px-6 pt-4 font-oswald text-[10px] uppercase tracking-[0.1em] text-white/70 sm:px-12 md:top-[64px] md:flex-row md:justify-between md:text-sm md:tracking-[0.2em]">
        <div className="flex items-center gap-2 md:contents">
          <span>AI Systems</span>
          <span className="text-crimson">----</span>
          <span>Product Thinking</span>
        </div>
        <span className="hidden text-crimson md:inline">----</span>
        <div className="flex items-center gap-2 md:contents">
          <span>Data & Analytics</span>
          <span className="text-crimson">----</span>
          <span>Full-Stack</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 flex min-h-screen items-center px-6 sm:px-12 md:px-16 lg:px-28">
        <div className="max-w-2xl">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex items-center gap-3"
          >
            <motion.span
              animate={reduce ? undefined : { opacity: [1, 0.4, 1], scale: [1, 1.25, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2.5 w-2.5 rounded-full bg-crimson"
            />
            <span className="font-oswald text-xs uppercase tracking-[0.25em] text-white/70">
              Hi, I&apos;m
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-oswald text-6xl font-bold uppercase leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl"
          >
            Archit
            <br />
            <span className="text-crimson">Savaliya</span>
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 font-oswald text-xl uppercase tracking-wide text-white/90 sm:text-2xl md:text-3xl"
          >
            AI &amp; Product Builder.{" "}
            <span className="text-white/60">I ship real systems.</span>
          </motion.p>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 max-w-xl font-inter text-sm leading-relaxed text-white/55 md:text-base"
          >
            Final-year AI student at SVNIT Surat. I build AI-driven products, lead teams, and turn
            messy real-world problems into things people actually use.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-crimson px-7 py-3 font-inter text-sm font-semibold uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="/archit-savaliya-resume.pdf"
              target="_blank"
              download
              className="rounded-full border border-white/25 px-7 py-3 font-inter text-sm uppercase tracking-widest text-white transition-colors hover:border-crimson hover:text-crimson"
            >
              Résumé
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-7 py-3 font-inter text-sm uppercase tracking-widest text-white transition-colors hover:border-crimson hover:text-crimson"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/40"
        >
          <span className="font-inter text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="text-lg">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
