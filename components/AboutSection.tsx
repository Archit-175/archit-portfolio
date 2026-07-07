"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SeamGlow from "@/components/SeamGlow";

const stats = [
  { value: "12+", label: "Projects Built", tone: "light" },
  { value: "6+", label: "Products Shipped", tone: "crimson" },
  { value: "2", label: "Research Papers", tone: "dark" },
  { value: "₹29L+", label: "Managed", tone: "dark" },
] as const;

const pillars = [
  {
    title: "AI PRODUCT",
    body: "I build intelligent products where the AI actually earns its place, useful and not bolted on.",
    variant: "dark",
    rotate: -6,
  },
  {
    title: "WORKFLOW AUTOMATION",
    body: "I turn slow, manual institutional processes into clean, reliable digital workflows.",
    variant: "crimson",
    rotate: 6,
  },
  {
    title: "SCALABLE SYSTEMS",
    body: "I design architectures and data models built to grow without falling over.",
    variant: "dark2",
    rotate: -3,
  },
] as const;

export default function AboutSection() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const cardY = [y1, y2, y3];

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-20 flex min-h-screen flex-col overflow-hidden bg-black"
    >
      <SeamGlow />
      {/* ── Credibility / stats strip ── */}
      <div className="relative z-10 w-full border-b border-white/5 px-6 py-12 sm:px-12 md:px-24 lg:px-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-crimson" />
              <span className="font-oswald text-xs uppercase tracking-widest text-white/50">
                Core Focus
              </span>
            </div>
            <span className="font-oswald text-xl font-bold uppercase tracking-wider text-white">
              PRODUCT • SYSTEMS • AI
            </span>
          </div>

          {/* Stat nodes */}
          <div className="relative flex w-full flex-wrap items-center justify-center gap-4 sm:gap-6 md:w-auto md:gap-10">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={reduce ? undefined : { scale: 1.08, y: -4 }}
                transition={{ duration: 0.25 }}
                className={`relative flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full shadow-2xl sm:h-28 sm:w-28 ${
                  s.tone === "crimson"
                    ? "z-10 border-[5px] border-black bg-crimson text-white"
                    : s.tone === "light"
                      ? "bg-white text-black"
                      : "border border-white/10 bg-[#111] text-white"
                }`}
              >
                <div
                  className={`absolute -top-2 h-2 w-2 rounded-full shadow-lg ${
                    i % 2 === 0 ? "bg-white" : "bg-crimson"
                  }`}
                />
                <span className="font-oswald text-2xl font-bold leading-none sm:text-3xl">
                  {s.value}
                </span>
                <span
                  className={`mt-1 px-1 text-center font-oswald text-[8px] uppercase tracking-[0.15em] sm:text-[9px] ${
                    s.tone === "light" ? "text-black/50" : "text-white/60"
                  }`}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="hidden max-w-[250px] border-r-2 border-crimson pr-4 text-right lg:flex">
            <p className="font-inter text-xs uppercase leading-relaxed tracking-widest text-white/50">
              “I build systems where intelligence meets execution.”
            </p>
          </div>
        </div>
      </div>

      {/* ── Core Identity ── */}
      <div className="relative flex w-full flex-1 items-center px-6 py-16 sm:px-12 md:px-24 lg:px-32">
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden opacity-[0.03] blur-[1px]">
          <h2
            className="font-oswald text-[20vw] font-bold text-transparent"
            style={{ WebkitTextStroke: "4px white" }}
          >
            ARCHITECT
          </h2>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Text column (Comic Shanns) */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -50 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8 h-1 w-16 bg-crimson" />
            <p className="mb-3 font-inter text-xs uppercase tracking-[0.25em] text-crimson">
              Core Identity
            </p>
            <h2 className="mb-8 font-comic-shanns text-4xl leading-tight text-white md:text-6xl">
              Hi, I&apos;m Archit.
            </h2>
            <p className="font-comic-shanns text-lg leading-relaxed text-gray-200 md:text-2xl">
              I&apos;m a final-year <span className="text-white">Artificial Intelligence</span>{" "}
              student at SVNIT Surat. I build AI-driven products and full-stack web apps, and I
              care about product thinking and polish as much as the code.
            </p>
            <p className="mt-6 font-comic-shanns text-lg leading-relaxed text-gray-300 md:text-2xl">
              I&apos;ve shipped a real-time collaborative workspace solo, led an institute platform
              as its product owner, and contributed to ML research on the side. I like turning messy
              real-world problems into systems people actually use, and one day I want to build my
              own business.
            </p>
          </motion.div>

          {/* Pillar cards */}
          <div className="relative mt-12 flex flex-col gap-6 lg:mt-0 lg:block lg:h-[600px]">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                style={{ y: reduce ? undefined : cardY[i], rotate: p.rotate }}
                className={`static w-full rounded-xl p-6 shadow-2xl transition-all duration-300 hover:z-10 hover:scale-105 lg:absolute lg:h-80 lg:w-64 ${
                  i === 0
                    ? "lg:left-10 lg:top-10"
                    : i === 1
                      ? "z-10 lg:right-0 lg:top-40"
                      : "lg:bottom-0 lg:left-20"
                } ${
                  p.variant === "crimson"
                    ? "border border-crimson bg-crimson text-black"
                    : p.variant === "dark2"
                      ? "border border-white/10 bg-[#1a1a1a]"
                      : "border border-white/10 bg-[#111]"
                } flex h-64 cursor-default flex-col justify-between`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    p.variant === "crimson" ? "bg-black/20" : "bg-crimson/20"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full ${
                      p.variant === "crimson" ? "bg-black" : "bg-crimson"
                    }`}
                  />
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase">{p.title}</h3>
                <p
                  className={`font-comic-shanns text-base ${
                    p.variant === "crimson" ? "text-black/70" : "text-gray-400"
                  }`}
                >
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
