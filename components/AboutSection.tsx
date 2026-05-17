"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { scrollY } = useScroll(); // Global scroll to perfectly sync with HeroSection
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  
  return (
    <section
    
  id="about"
  ref={ref}
  className="relative z-20 min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col"
>
   

{/* Top System Ticker Divider */}
<div className="relative z-50 overflow-hidden">

{/* Ambient Red Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,27,48,0.14),transparent_40%)] pointer-events-none" />

  {/* Subtle Bottom Glow */}
  <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-[radial-gradient(circle_at_bottom,rgba(155,27,48,0.08),transparent_70%)] pointer-events-none" />

  {/* Top Highlight */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-10" />

  <div className="relative w-full h-10 md:h-12 bg-[#9B1B30] border-y border-black overflow-hidden flex items-center">

    {/* Shimmer Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse pointer-events-none" />

    {/* Infinite Ticker */}
    <motion.div
      animate={{
        x: ["0%", "-25%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 18,
        ease: "linear",
      }}
      className="flex whitespace-nowrap shrink-0"
    >

      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center shrink-0">

          {[...Array(4)].map((_, j) => (
            <span
              key={j}
              className="px-6 font-oswald text-lg md:text-xl font-bold uppercase tracking-[0.25em] text-white"
              style={{
                WebkitTextStroke: "1px rgba(0,0,0,0.9)",
              }}
            >
              AI SYSTEMS • PRODUCT THINKING • WORKFLOW AUTOMATION • SCALABLE EXECUTION • DIGITAL EXPERIENCES •
            </span>
          ))}

        </div>
      ))}

    </motion.div>

  </div>

</div>


      {/* Stats/Trailer Header Area */}
      <div className="w-full py-12 px-6 sm:px-12 md:px-24 lg:px-32 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Expertise */}
        <div className="flex flex-col items-center md:items-start gap-1 mb-8 md:mb-0">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-crimson" />
             <span className="font-oswald text-xs tracking-widest text-white/50 uppercase">Core Focus</span>
          </div>
          <span className="font-oswald text-xl font-bold text-white uppercase tracking-wider">PRODUCT • SYSTEMS • AI</span>
        </div>

{/* Center: System Identity Nodes */}
<div className="relative flex items-center gap-6 sm:gap-8 md:gap-14">

  {/* Main Connector Line */}
  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

  {/* Ambient Glow */}
  <div className="absolute inset-0 bg-crimson/10 blur-3xl pointer-events-none" />

  {/* PROduct */}
  <motion.div
    whileHover={{ scale: 1.08, y: -4 }}
    transition={{ duration: 0.25 }}
    className="relative flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white text-black shadow-2xl before:absolute before:inset-0 before:bg-white/10 before:blur-2xl before:-z-10"
  >
    {/* Node Marker */}
    <div className="absolute -top-2 w-2 h-2 rounded-full bg-white shadow-lg" />

    <span className="font-oswald text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-black/50">
      Product
    </span>

    <span className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
      1
    </span>
  </motion.div>

  {/* PROJECTS */}
  <motion.div
    whileHover={{ scale: 1.1, y: -6 }}
    transition={{ duration: 0.25 }}
    className="relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-crimson text-white border-[5px] border-black shadow-2xl z-10 before:absolute before:inset-0 before:bg-crimson/20 before:blur-3xl before:-z-10"
  >
    {/* Node Marker */}
    <div className="absolute -top-3 w-3 h-3 rounded-full bg-white shadow-xl" />

    <span className="font-oswald text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/70">
      Project
    </span>

    <span className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
      6+
    </span>
  </motion.div>

  {/* Publication */}
  <motion.div
    whileHover={{ scale: 1.08, y: -4 }}
    transition={{ duration: 0.25 }}
    className="relative flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#111] border border-white/10 text-white shadow-2xl before:absolute before:inset-0 before:bg-white/5 before:blur-2xl before:-z-10"
  >
    {/* Node Marker */}
    <div className="absolute -top-2 w-2 h-2 rounded-full bg-crimson shadow-lg" />

    <span className="font-oswald text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50">
      Publication
    </span>

    <span className="font-oswald text-xl sm:text-2xl md:text-3xl font-bold leading-none">
      2
    </span>
  </motion.div>

</div>

        {/* Right: Quote */}
        <div className="hidden lg:flex max-w-[250px] text-right border-r-2 border-crimson pr-4">
          <p className="font-inter text-xs text-white/50 uppercase tracking-widest leading-relaxed">
            “Building systems where intelligence meets execution.”
          </p>
        </div>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center relative py-16 px-6 sm:px-12 md:px-24 lg:px-32">
        {/* Background large text outline */}
        <div className="absolute inset-0 flex items-start justify-center opacity-[0.03] blur-[1px] pointer-events-none overflow-hidden">
          <h2 className="font-oswald text-[20vw] font-bold text-transparent" style={{ WebkitTextStroke: '4px white' }}>
  ARCHITECT
</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 w-full">
          
          {/* Text Column */}
          <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="w-16 h-1 bg-crimson mb-8"></div>
          <h2 className="font-oswald text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight">
            CORE IDENTITY

          </h2>
         <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed font-light">
  Archit Savaliya is an Artificial Intelligence undergraduate at <strong className="text-white">SVNIT Surat</strong> focused on AI systems, workflow automation, and scalable digital experiences.
</p>

<p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed font-light mt-6">
  His work combines technical understanding, product thinking, and execution building systems designed to simplify processes, improve coordination, and create meaningful real-world impact.
</p>
        </motion.div>

        {/* Floating Geometric Elements / Cards Column */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Card 1 */}
          <motion.div 
            style={{ y: y1, rotate: -6 }}
            className="absolute top-10 left-10 w-64 h-80 bg-[#111] border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col justify-between hover:scale-105 hover:z-10 transition-all duration-300 cursor-default before:absolute before:inset-0 before:bg-white/5 before:blur-3xl before:-z-10"
          >
            <div className="w-10 h-10 rounded-full bg-crimson/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-crimson rounded-full" />
            </div>
            <h3 className="font-oswald text-2xl font-bold">AI PRODUCT</h3>
            <p className="text-sm text-gray-400">Building intelligent systems that align technology with user-focused execution.
</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            style={{ y: y2, rotate: 6 }}
            className="absolute top-40 right-0 w-64 h-80 bg-crimson text-black border border-crimson rounded-xl p-6 shadow-2xl flex flex-col justify-between z-10 hover:scale-105 transition-all duration-300 cursor-default before:absolute before:inset-0 before:bg-crimson/20 before:blur-3xl before:-z-10"
          >
            <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
            <h3 className="font-oswald text-2xl font-bold">WORKFLOW AUTOMATION</h3>
            <p className="text-sm text-black/70">Optimizing institutional and digital processes through structured automation systems.
</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            style={{ y: y3, rotate: -3 }}
            className="absolute bottom-0 left-20 w-64 h-80 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col justify-between hover:scale-105 transition-all duration-300 cursor-default before:absolute before:inset-0 before:bg-crimson/20 before:blur-3xl before:-z-10"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <h3 className="font-oswald text-2xl font-bold">SCALABLE SYSTEMS</h3>
            <p className="text-sm text-gray-400">Designing architectures and workflows built to scale with clarity and efficiency.
</p>
          </motion.div>
        </div>

        </div>
      </div>
    </section>

  );
}
