"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "SamparkX",
    category: "INCUBATION",
    description: "Startup incubation project digitizing institutional workflows.",
    color: "bg-[#111]",
    textColor: "text-white",
    borderColor: "border-white/20",
  },
  {
    title: "Research: Kidney Seg",
    category: "PUBLICATIONS",
    description: "Co-authored work on Uncertainty Quantification in Kidney Segmentation.",
    color: "bg-crimson",
    textColor: "text-black",
    borderColor: "border-crimson",
  },
  {
    title: "Research: EEG Emotion",
    category: "PUBLICATIONS",
    description: "EEG Emotion Recognition using Deep Reinforcement Learning.",
    color: "bg-white",
    textColor: "text-black",
    borderColor: "border-white",
  }
];

export default function ProjectsSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]); // 3 items, so scroll 2/3 of the way

  return (
    <section id="projects" ref={targetRef} className="relative h-auto md:h-[300vh] bg-black">
      
      {/* Mobile Layout: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-8 px-6 sm:px-12 py-24 relative z-10 w-full">
        {/* Mobile Background Text */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5 overflow-hidden">
           <h2 className="font-oswald text-[25vw] font-bold text-transparent" style={{ WebkitTextStroke: '2px white' }}>
             PROJECTS
           </h2>
        </div>
        
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className={`w-full min-h-[40vh] ${project.color} ${project.borderColor} border p-8 flex flex-col justify-between shadow-2xl relative z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]`}
          >
            <div>
              <p className={`font-oswald text-xs sm:text-sm tracking-widest mb-4 opacity-70 ${project.textColor}`}>{project.category}</p>
              <h3 className={`font-oswald text-4xl sm:text-5xl font-bold uppercase mb-6 ${project.textColor}`}>{project.title}</h3>
              <p className={`font-inter text-base sm:text-lg opacity-90 ${project.textColor}`}>{project.description}</p>
            </div>
            <div className={`w-full h-1 mt-8 ${project.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/20'}`} />
          </div>
        ))}
      </div>

      {/* Desktop Layout: Horizontal Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
           <h2 className="font-oswald text-[15vw] font-bold text-transparent" style={{ WebkitTextStroke: '2px white' }}>
             PROJECTS
           </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-16 px-24 md:px-40 relative z-10 w-[300vw]">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`w-[60vw] h-[60vh] shrink-0 ${project.color} ${project.borderColor} border p-12 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(255,255,255,0.1)] cursor-pointer`}
            >
              <div>
                <p className={`font-oswald text-sm tracking-widest mb-4 opacity-70 ${project.textColor}`}>{project.category}</p>
                <h3 className={`font-oswald text-5xl lg:text-7xl font-bold uppercase mb-6 ${project.textColor}`}>{project.title}</h3>
                <p className={`font-inter text-xl lg:text-2xl max-w-2xl opacity-90 ${project.textColor}`}>{project.description}</p>
              </div>
              <div className={`w-full h-1 ${project.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/20'}`} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
