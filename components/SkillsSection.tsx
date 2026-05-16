"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Deep Learning", color: "bg-gray-100", textColor: "text-black", border: "border-black/10" },
  { name: "Workflow Automation", color: "bg-crimson", textColor: "text-white" },
  { name: "Scalable Systems", color: "bg-black", textColor: "text-white" },
  { name: "AI Product Strategy", color: "bg-gray-200", textColor: "text-black" },
  { name: "Full Stack Dev", color: "bg-white", textColor: "text-black", border: "border-black/20" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Staggered parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const y5 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const transforms = [y1, y2, y3, y4, y5];

  return (
    <section id="skills" ref={ref} className="relative min-h-[150vh] bg-white py-32 overflow-hidden border-t border-black/10 transition-colors duration-1000">
      
      <div className="absolute top-32 w-full text-center z-20 pointer-events-none">
        <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-wider text-black drop-shadow-md">
          Tech Stack <span className="text-crimson">&</span> Skills
        </h2>
      </div>

      <div className="max-w-7xl mx-auto h-full flex flex-wrap justify-center items-center gap-8 relative z-10 pt-64 px-12 md:px-24 lg:px-32">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            style={{ y: transforms[idx] }}
            className={`w-64 h-80 ${skill.color} ${skill.border ? `border ${skill.border}` : ''} rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-2xl transition-transform hover:scale-105 cursor-pointer`}
          >
            <h3 className={`font-oswald text-2xl font-bold uppercase ${skill.textColor}`}>
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
