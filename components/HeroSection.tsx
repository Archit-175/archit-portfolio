"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Background elements move up slower than the page scroll
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rolesY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div ref={wrapperRef}>
      {/* Sticky Background — stays pinned while content scrolls over it */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] z-0">
        {/* Top Roles Text */}
        <motion.div 
          style={{ y: rolesY }}
          className="absolute top-[120px] w-full px-8 md:px-16 z-20 hidden md:flex justify-between items-center text-white/80 font-oswald text-lg tracking-[0.2em] uppercase border-t border-white/10 pt-4"
        >
          <span>AI Product Manager</span>
          <span className="text-crimson">•</span>
          <span>Workflow Architect</span>
          <span className="text-crimson">•</span>
          <span>Systems Engineer</span>
          <span className="text-crimson">•</span>
          <span>Deep Learning Dev</span>
        </motion.div>

        {/* Center Background Red Circle */}
        <motion.div 
          style={{ y: circleY }}
          className="absolute z-0 w-[600px] h-[600px] bg-crimson rounded-full opacity-90 blur-[2px]"
        />

        {/* Diagonal Grey Strip Behind ARCHIT text and SVG */}
        {/* 
        <div className="absolute top-[80%] z-[5] w-[120vw] h-10 md:h-12 bg-gray-800 -rotate-3 flex items-center overflow-hidden border-y-2 border-black drop-shadow-2xl">
          <div className="flex space-x-4 whitespace-nowrap animate-pulse">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-oswald text-lg md:text-xl font-bold tracking-widest text-white uppercase" style={{ WebkitTextStroke: '1px black' }}>
                SCALABLE SYSTEMS • INTELLIGENT WORKFLOWS • 
              </span>
            ))}
          </div>
        </div>
        */}

        {/* Massive Background Typography */}
        <motion.div 
          style={{ y: textY }}
          className="absolute z-10 w-full text-center pointer-events-none"
        >
          <h1 className="font-oswald text-[25vw] md:text-[28vw] leading-none font-bold tracking-tighter text-white drop-shadow-2xl select-none">
            &lt;ARCHIT&gt;
          </h1>
        </motion.div>

        {/* Bottom Left: Bio Block */}
        <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-40 max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-crimson rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
            <span className="font-oswald text-crimson text-sm tracking-widest uppercase">SVNIT</span>
          </div>
          <p className="font-inter text-xs md:text-sm text-white/70 leading-relaxed">
            <strong className="text-white">AI</strong> Undergraduate with interests in Technical Product, AI Product, workflow automation, and scalable digital systems.
          </p>
        </div>

        {/* Bottom Right: Action Button & Stamp */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-40 flex items-center gap-6">
          <a href="#contact" className="group flex items-center gap-3 border border-white/30 rounded-full px-6 py-2.5 hover:bg-white hover:text-black transition-all">
            <span className="font-inter text-sm tracking-widest uppercase font-semibold">Connect Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          
          {/* Red Stamp / Seal */}
          <div className="w-16 h-16 rounded-full border-2 border-crimson bg-black flex items-center justify-center rotate-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-crimson/20" />
             <span className="font-oswald font-bold text-white tracking-wider z-10 text-xl">A.S.</span>
          </div>
        </div>
      </section>

      {/* Scrolling Foreground — same speed as red strip in AboutSection */}
      <div className="relative z-10 -mt-[100vh] h-screen w-full pointer-events-none flex justify-center">
        <div className="absolute bottom-0 w-full max-w-[600px] md:max-w-[800px] h-[85vh]">
          <Image
            src="/archit_cut.svg"
            alt="Archit Savaliya Silhouette"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
