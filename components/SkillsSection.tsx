"use client";

import { motion, useReducedMotion } from "framer-motion";
import SeamGlow from "@/components/SeamGlow";
import {
  Code2,
  Boxes,
  BrainCircuit,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type SkillCategory = {
  index: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const CATEGORIES: SkillCategory[] = [
  {
    index: "01",
    title: "Languages",
    icon: Code2,
    skills: [
      "TypeScript",
      "Python",
      "JavaScript (ES6+)",
      "SQL (PostgreSQL)",
      "HTML & CSS",
    ],
  },
  {
    index: "02",
    title: "Frameworks & Libraries",
    icon: Boxes,
    skills: [
      "Next.js (App Router / RSC)",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js / R3F",
      "Node.js / Express",
      "NestJS",
    ],
  },
  {
    index: "03",
    title: "ML / AI",
    icon: BrainCircuit,
    skills: [
      "PyTorch",
      "TensorFlow / Keras",
      "scikit-learn",
      "Reinforcement Learning (D3QN, PPO)",
      "Domain Adaptation",
      "CNNs / U-Net / Attention",
      "MC-Dropout Uncertainty",
      "Classical NLP",
      "Applied LLMs (Gemini, OpenAI)",
    ],
  },
  {
    index: "04",
    title: "Data & Databases",
    icon: Database,
    skills: [
      "PostgreSQL + RLS",
      "MySQL",
      "Supabase (Auth / Realtime / Storage)",
      "MongoDB",
      "Prisma",
      "pandas / NumPy / SciPy",
    ],
  },
  {
    index: "05",
    title: "Tools & Practices",
    icon: Wrench,
    skills: [
      "Vercel",
      "Git & GitHub API",
      "AI-assisted development",
      "Playwright",
      "SVG / Canvas / WebGL",
      "Canva",
      "PDF Generation",
    ],
  },
];

export default function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-black"
    >
      <SeamGlow />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="font-inter text-crimson tracking-[0.2em] uppercase text-sm mb-4">
            What I work with
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none">
            SKILLS <span className="text-white/20">&amp; STACK</span>
          </h2>
        </motion.div>

        {/* Category grid: flex so the last row of cards stays centered */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: reduce ? 0 : idx * 0.08,
                }}
                className="group relative flex w-full flex-col rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 transition-colors duration-300 hover:bg-[#111] hover:border-crimson/30 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson/10 text-crimson transition-colors duration-300 group-hover:bg-crimson/20"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-tight leading-none">
                      {category.title}
                    </h3>
                  </div>
                  <span
                    className="font-oswald text-sm font-bold tracking-[0.2em] text-crimson/70"
                    aria-hidden="true"
                  >
                    {category.index}
                  </span>
                </div>

                {/* Skill chips */}
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-inter text-white/80 hover:border-crimson/50 hover:text-white transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
