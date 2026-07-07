"use client";

import { motion, useReducedMotion } from "framer-motion";
import SeamGlow from "@/components/SeamGlow";
import type { ReactNode } from "react";
import { FaTrophy, FaAward } from "react-icons/fa";
import { BadgeCheck, ExternalLink } from "lucide-react";

type Achievement = {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  href?: string;
};

type Certification = {
  title: string;
  issuer: string;
  verifyUrl: string;
  icon: ReactNode;
};

const achievements: Achievement[] = [
  {
    title: "Web Wonders 2024 · 1st Place",
    subtitle: "Inter-college web design",
    description:
      "Our team's forest-conservation website won 1st; I built the frontend and the donation-email flow.",
    icon: <FaTrophy size={18} />,
  },
  {
    title: "CEVPOLY Business Simulation · 1st Place",
    subtitle: "Strategy & pitching",
    description:
      "Won a competitive bidding-and-pitching simulation built on real-time strategy, persuasion and decisions.",
    icon: <FaAward size={18} />,
  },
];

const certifications: Certification[] = [
  {
    title: "Microsoft Excel",
    issuer: "Jatan Shah · earned the summer after my first year",
    verifyUrl:
      "https://excel.jatanshah.in/your-certificate/2D089937E2B7-2D089937473D-813B964798/",
    icon: <BadgeCheck size={18} />,
  },
  {
    title: "Power BI",
    issuer: "Jatan Shah · earned the summer after my first year",
    verifyUrl:
      "https://excel.jatanshah.in/your-certificate/2D065117E824-2D089936F8BA-813B964798/",
    icon: <BadgeCheck size={18} />,
  },
];

export default function AchievementsSection() {
  const reduce = useReducedMotion();

  const cardReveal = (idx: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.6, delay: idx * 0.08 },
        };

  return (
    <section
      id="achievements"
      className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-black"
    >
      <SeamGlow />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="font-inter text-crimson tracking-[0.2em] uppercase text-sm mb-4">
            Recognition
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white">
            ACHIEVEMENTS <span className="text-white/20">&amp; CERTS</span>
          </h2>
        </motion.div>

        {/* Group A: Achievements */}
        <h3 className="font-oswald text-2xl uppercase mb-6 text-white">
          Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((item, idx) => {
            const cardBody = (
              <>
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-crimson/15 text-crimson flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-oswald text-lg sm:text-xl uppercase leading-tight text-white">
                      {item.title}
                    </h4>
                    <p className="font-inter text-xs uppercase tracking-widest text-crimson/80 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="font-inter text-sm leading-relaxed text-gray-400 mt-4">
                  {item.description}
                </p>
              </>
            );

            const baseClass =
              "group block rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-300 p-6";

            return (
              <motion.div key={item.title} {...cardReveal(idx)}>
                {item.href ? (
                  <a
                    href={item.href}
                    aria-label={`${item.title}, see Publications`}
                    className={`${baseClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson/60`}
                  >
                    {cardBody}
                    <span className="inline-flex items-center gap-1 text-crimson text-xs uppercase tracking-widest mt-4 group-hover:underline">
                      See Publications
                      <ExternalLink size={12} />
                    </span>
                  </a>
                ) : (
                  <div className={baseClass}>{cardBody}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Group B: Certifications */}
        <h3 className="font-oswald text-2xl uppercase mb-6 text-white mt-14">
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              {...cardReveal(idx)}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-300 p-6 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-crimson/15 text-crimson flex items-center justify-center">
                  {cert.icon}
                </span>
                <div>
                  <h4 className="font-oswald text-lg sm:text-xl uppercase leading-tight text-white">
                    {cert.title}
                  </h4>
                  <p className="font-inter text-sm text-white/50 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-crimson text-xs uppercase tracking-widest hover:underline mt-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson/60 rounded-sm"
              >
                Verify
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
