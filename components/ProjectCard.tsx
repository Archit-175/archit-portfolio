"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiExternalLink, FiPlus, FiMinus } from "react-icons/fi";
import { Boxes, BrainCircuit, Globe, Network, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiNextdotjs, SiReact, SiTypescript, SiSupabase, SiPostgresql, SiNestjs,
  SiPrisma, SiRedis, SiThreedotjs, SiGreensock, SiFramer, SiTailwindcss,
  SiPytorch, SiTensorflow, SiGooglegemini, SiScikitlearn, SiPython,
  SiNodedotjs, SiCplusplus, SiMongodb, SiJavascript, SiGithub,
} from "react-icons/si";
import type { Project } from "@/data/projects";

/** Theme → watermark icon shown behind the project name in the cover. */
const themeIcon: Record<Project["theme"], LucideIcon> = {
  Products: Boxes,
  "AI-ML": BrainCircuit,
  Web: Globe,
  Systems: Network,
};

/** Map a tech-stack label → a recognizable brand logo (first match wins). */
const TECH_ICONS: { match: RegExp; icon: IconType }[] = [
  { match: /next/i, icon: SiNextdotjs },
  { match: /react/i, icon: SiReact },
  { match: /typescript/i, icon: SiTypescript },
  { match: /supabase/i, icon: SiSupabase },
  { match: /postgres/i, icon: SiPostgresql },
  { match: /nest/i, icon: SiNestjs },
  { match: /prisma/i, icon: SiPrisma },
  { match: /redis/i, icon: SiRedis },
  { match: /three/i, icon: SiThreedotjs },
  { match: /gsap|greensock/i, icon: SiGreensock },
  { match: /framer/i, icon: SiFramer },
  { match: /tailwind/i, icon: SiTailwindcss },
  { match: /pytorch/i, icon: SiPytorch },
  { match: /tensorflow|keras/i, icon: SiTensorflow },
  { match: /gemini/i, icon: SiGooglegemini },
  { match: /scikit/i, icon: SiScikitlearn },
  { match: /python/i, icon: SiPython },
  { match: /node/i, icon: SiNodedotjs },
  { match: /c\+\+/i, icon: SiCplusplus },
  { match: /mongo/i, icon: SiMongodb },
  { match: /javascript|vanilla js/i, icon: SiJavascript },
  { match: /github|gist/i, icon: SiGithub },
];

/** Unique-per-project logo row: dedupe, cap at 4. */
function techLogos(tech: string[]): IconType[] {
  const seen = new Set<IconType>();
  const out: IconType[] = [];
  for (const t of tech) {
    const hit = TECH_ICONS.find((e) => e.match.test(t));
    if (hit && !seen.has(hit.icon)) {
      seen.add(hit.icon);
      out.push(hit.icon);
    }
    if (out.length >= 4) break;
  }
  return out;
}

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  const { name, theme, role, blurb, details, tech, outcome, links, thumb } = project;
  const Icon = themeIcon[theme];
  const logos = techLogos(tech);

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : (index % 2) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-colors duration-300 hover:border-crimson/40 hover:bg-[#0d0d0d]"
    >
      {/* ── Cover / poster header ── */}
      <div className="relative h-40 overflow-hidden border-b border-white/10">
        {/* base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#20060c] via-[#0c0c0c] to-black" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -left-10 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-crimson/25 blur-3xl" />

        {/* theme-icon watermark */}
        <Icon
          aria-hidden
          strokeWidth={1}
          className="absolute -right-6 -top-6 h-40 w-40 text-white/[0.07] transition-transform duration-500 group-hover:scale-110 group-hover:text-crimson/20"
        />

        {/* unique per-project stack logos */}
        {logos.length > 0 && (
          <div className="absolute inset-x-5 bottom-[4.25rem] flex gap-2">
            {logos.map((Logo, i) => (
              <span
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-black/40 text-white/60 backdrop-blur-sm transition-colors group-hover:text-white/90"
              >
                <Logo className="h-4 w-4" />
              </span>
            ))}
          </div>
        )}

        {/* project name as the poster title */}
        <h3 className="absolute inset-x-5 bottom-4 font-oswald text-3xl font-bold uppercase leading-none tracking-wide text-white transition-colors group-hover:text-crimson">
          {name}
        </h3>

        {/* theme tag */}
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-oswald text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {theme}
        </span>

        {/* optional screenshot overlay (drop a file in /public/projects + set `thumb`) */}
        {thumb && imgOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt={`${name} preview`}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col p-6">
        {/* Role badge */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
          <span className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/45">
            {role}
          </span>
        </div>

        <p className="font-inter text-sm leading-relaxed text-white/60">{blurb}</p>

        {/* Tech chips (condensed) */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {tech.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-inter text-[11px] text-white/70"
            >
              {t}
            </li>
          ))}
          {tech.length > 4 && (
            <li className="rounded-full px-2.5 py-1 font-inter text-[11px] text-white/40">
              +{tech.length - 4}
            </li>
          )}
        </ul>

        {/* Expandable "know more" */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-4 border-t border-white/10 pt-4 font-inter text-sm leading-relaxed text-white/70">
                {details}
              </p>
              {tech.length > 4 && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {tech.slice(4).map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-inter text-[11px] text-white/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outcome */}
        <p className="mt-4 font-inter text-xs font-medium tracking-wide text-crimson/90">
          {outcome}
        </p>

        {/* Footer: know-more toggle + links */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 font-inter text-xs uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-crimson focus-visible:text-crimson focus-visible:outline-none"
          >
            {open ? <FiMinus size={13} /> : <FiPlus size={13} />}
            {open ? "less" : "know more"}
          </button>

          <div className="flex items-center gap-3 text-white/55">
            {links.demo === "coming-soon" && (
              <span className="font-inter text-[10px] uppercase tracking-[0.15em] text-white/35">
                demo soon
              </span>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${name} live`}
                className="transition-colors hover:text-crimson"
              >
                <FiExternalLink size={17} />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on GitHub`}
                className="transition-colors hover:text-crimson"
              >
                <FaGithub size={17} />
              </a>
            )}
            {links.paper && (
              <a
                href={links.paper}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} paper`}
                className="transition-colors hover:text-crimson"
              >
                <HiOutlineDocumentText size={19} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
