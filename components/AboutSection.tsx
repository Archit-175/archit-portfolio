"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section id="about" ref={ref} className="relative z-20 min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">
      {/* Top Red Strip acting as a divider from Hero */}
      <div className="w-full h-10 md:h-12 bg-[#9B1B30] z-50 flex items-center overflow-hidden border-y-2 border-black shrink-0">
        <div className="flex space-x-4 whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-oswald text-lg md:text-xl font-bold tracking-widest text-white uppercase" style={{ WebkitTextStroke: '1px black' }}>
              SCALABLE SYSTEMS • INTELLIGENT WORKFLOWS • 
            </span>
          ))}
        </div>
      </div>

      {/* Stats/Trailer Header Area */}
      <div className="w-full py-12 px-12 md:px-24 lg:px-32 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Expertise */}
        <div className="flex flex-col items-center md:items-start gap-1 mb-8 md:mb-0">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-crimson" />
             <span className="font-oswald text-xs tracking-widest text-white/50 uppercase">Core Focus</span>
          </div>
          <span className="font-oswald text-xl font-bold text-white uppercase tracking-wider">AI Systems & Product</span>
        </div>

        {/* Center: Circular Stats */}
        <div className="flex items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white text-black rounded-full shadow-2xl">
            <span className="font-oswald text-[10px] font-bold uppercase tracking-widest text-black/50">Projects</span>
            <span className="font-oswald text-2xl md:text-3xl font-bold leading-none">12+</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-crimson text-white rounded-full shadow-2xl scale-110 border-[6px] border-black">
            <span className="font-oswald text-[10px] font-bold uppercase tracking-widest text-white/70">Experience</span>
            <span className="font-oswald text-2xl md:text-3xl font-bold leading-none">2Y</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-[#111] border border-white/10 text-white rounded-full shadow-2xl">
            <span className="font-oswald text-[10px] font-bold uppercase tracking-widest text-white/50">Hackathons</span>
            <span className="font-oswald text-2xl md:text-3xl font-bold leading-none">5</span>
          </div>
        </div>

        {/* Right: Quote */}
        <div className="hidden lg:flex max-w-[250px] text-right border-r-2 border-crimson pr-4">
          <p className="font-inter text-xs text-white/50 uppercase tracking-widest leading-relaxed">
            "Driven by the intersection of intelligent models and user value, building systems that scale gracefully."
          </p>
        </div>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center relative py-16 px-12 md:px-24 lg:px-32">
        {/* Background large text outline */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
          <h2 className="font-oswald text-[25vw] font-bold text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            ABOUT
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
            Who I Am
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Archit Savaliya is an Artificial Intelligence undergraduate at <strong className="text-white">SVNIT Surat</strong> with interests in Technical Product, AI Product, workflow automation, and scalable digital systems. 
          </p>
          <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed font-light mt-6">
            He enjoys building and contributing to AI-driven platforms, intelligent applications, and process optimization systems that solve real-world problems. He aims to grow in roles that combine technical understanding, product strategy, communication, and execution.
          </p>
        </motion.div>

        {/* Floating Geometric Elements / Cards Column */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Card 1 */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-10 left-10 w-64 h-80 bg-[#111] border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col justify-between transform -rotate-6"
          >
            <div className="w-10 h-10 rounded-full bg-crimson/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-crimson rounded-full" />
            </div>
            <h3 className="font-oswald text-2xl font-bold">AI PRODUCT</h3>
            <p className="text-sm text-gray-400">Bridging the gap between intelligent models and user value.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-40 right-0 w-64 h-80 bg-crimson text-black border border-crimson rounded-xl p-6 shadow-2xl flex flex-col justify-between transform rotate-6 z-10"
          >
            <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
            <h3 className="font-oswald text-2xl font-bold">WORKFLOW AUTOMATION</h3>
            <p className="text-sm text-black/70">Streamlining institutional and enterprise processes.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            style={{ y: y3 }}
            className="absolute bottom-0 left-20 w-64 h-80 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col justify-between transform -rotate-3"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <h3 className="font-oswald text-2xl font-bold">SCALABLE SYSTEMS</h3>
            <p className="text-sm text-gray-400">Architecting solutions that grow gracefully with demand.</p>
          </motion.div>
        </div>

        </div>
      </div>
    </section>
  );
}
