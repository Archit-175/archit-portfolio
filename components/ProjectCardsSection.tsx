"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ProjectCard from "@/components/ProjectCard";
import SeamGlow from "@/components/SeamGlow";
import {
  featuredProjects,
  moreProjects,
  themeFilters,
  type Theme,
} from "@/data/projects";

export default function ProjectCardsSection() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<"All" | Theme>("All");
  const [showMore, setShowMore] = useState(false);

  const isAll = filter === "All";
  const byFilter = <T extends { theme: Theme }>(list: T[]) =>
    isAll ? list : list.filter((p) => p.theme === filter);

  // Under "All" we keep the featured / see-more split. Under a specific theme,
  // everything in that theme shows at once so filters never land on an empty grid.
  const featured = useMemo(
    () => (isAll ? byFilter(featuredProjects) : byFilter([...featuredProjects, ...moreProjects])),
    [filter]
  );
  const more = useMemo(() => (isAll ? moreProjects : []), [filter]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28"
    >
      <SeamGlow />
      {/* Background wordmark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2
          className="font-oswald text-[22vw] font-bold uppercase text-transparent opacity-[0.03]"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
        >
          BUILD
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="mb-4 font-inter text-sm uppercase tracking-[0.2em] text-crimson">
            Selected work
          </p>
          <h2 className="font-oswald text-4xl font-bold uppercase leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            SYSTEMS <span className="text-white/20">I&apos;VE BUILT</span>
          </h2>
          <p className="mt-5 max-w-2xl font-inter text-sm leading-relaxed text-white/50 md:text-base">
            Products I&apos;ve shipped, research I&apos;ve contributed to, and web things I&apos;ve
            led, grouped by what they are. Each card has the honest role I played.
          </p>
        </motion.div>

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {themeFilters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 font-inter text-xs uppercase tracking-[0.15em] transition-colors focus-visible:outline-none ${
                  active
                    ? "border-crimson bg-crimson text-white"
                    : "border-white/15 text-white/60 hover:border-crimson/50 hover:text-white"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Featured grid: 2 per row */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {featured.length === 0 && (
          <p className="py-10 text-center font-inter text-sm text-white/40">
            Nothing featured in this group. Try “See more”.
          </p>
        )}

        {/* See more */}
        <AnimatePresence initial={false}>
          {showMore && more.length > 0 && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-8 flex items-center gap-4">
                <span className="font-oswald text-sm uppercase tracking-[0.2em] text-white/40">
                  More builds
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {more.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {more.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowMore((s) => !s)}
              aria-expanded={showMore}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-inter text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-crimson hover:text-white"
            >
              {showMore ? "Show less" : `See more (${more.length})`}
              <FiChevronDown
                className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
                size={15}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
