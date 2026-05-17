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

  const { scrollY } = useScroll(); // Global scroll
  
  // Background elements move up slower than the page scroll
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rolesY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const circleY = useTransform(scrollYProgress, [0, 1], ["0", "-40%"]);
  // Figure moves naturally with document flow (no transform)
  return (
    <div ref={wrapperRef}>
      {/* Sticky Background — stays pinned while content scrolls over it */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] z-0">
        {/* Top Roles Text */}
        <motion.div 
          style={{ y: rolesY }}
          className="absolute top-[90px] md:top-[40px] w-full px-6 sm:px-12 md:px-16 z-20 flex flex-col md:flex-row items-center md:justify-between text-white/80 font-oswald text-[10px] md:text-lg tracking-[0.1em] md:tracking-[0.2em] uppercase border-t border-white/10 pt-4 gap-2 md:gap-0"
        >
          <div className="flex items-center gap-2 md:contents">
            <span>AI SYSTEMS</span>
            <span className="text-crimson">----</span>
            <span>PRODUCT THINKING</span>
          </div>
          <span className="text-crimson hidden md:inline">----</span>
          <div className="flex items-center gap-2 md:contents">
            <span>PRODUCT MANAGEMENT</span>
            <span className="text-crimson">----</span>
            <span>WORKFLOW AUTOMATION</span>
          </div>
        </motion.div>
 

        {/* Center Background Red Circle */}
        <motion.div 
          style={{ y: circleY }}
          className="absolute top-[38%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-crimson rounded-full opacity-90 blur-[2px]"
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
          className="absolute top-[38%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center pointer-events-none"
        >
          <h1 className="font-oswald text-[22vw] sm:text-[20vw] md:text-[24vw] lg:text-[28vw] leading-none font-bold tracking-tighter text-white drop-shadow-2xl select-none">&lt;ARCHIT&gt;
          </h1>
        </motion.div>

      </section>

      {/* Scrolling Foreground — figure moves with natural page scroll to stay attached to AboutSection */}
      <div className="relative z-10 -mt-[100vh] h-screen w-full pointer-events-none flex justify-center">
        <div className="absolute bottom-0 w-full max-w-[600px] md:max-w-[800px] h-[85vh]">
          <Image
            src="/archit.svg"
            alt="Archit Savaliya Silhouette"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Sticky UI — pinned ON TOP of both background and scrolling figure */}
      <div className="sticky top-0 h-screen w-full pointer-events-none z-20 -mt-[100vh]">
        {/* Bottom Left: Bio Block */}
        <div className="absolute top-[55%] sm:top-[60%] md:top-auto md:bottom-16 left-6 sm:left-12 md:left-16 max-w-[280px] sm:max-w-xs bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 sm:bg-transparent sm:backdrop-blur-none sm:p-0 sm:border-none sm:rounded-none pointer-events-auto">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-crimson rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
            <span className="font-oswald text-crimson text-sm tracking-widest uppercase">SVNIT</span>
          </div>
          <p className="font-inter text-xs md:text-sm text-white/70 leading-relaxed"> Building &nbsp;
            <strong className="text-white">AI</strong>-driven systems, scalable workflows, and product-focused digital experiences where technology meets execution.
          </p>
        </div>

        {/* Bottom Right: Action Button & Stamp */}
        <div className="absolute bottom-10 right-6 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 flex items-center gap-4 sm:gap-6 scale-75 sm:scale-100 origin-bottom-right pointer-events-auto">
          {/* <a href="#contact" className="group flex items-center gap-3 border border-white/30 bg-black/50 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-full px-6 py-2.5 hover:bg-white hover:text-black transition-all">
            <span className="font-inter text-sm tracking-widest uppercase font-semibold whitespace-nowrap">Connect Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
          </a> */}
          
          {/* Red Stamp / Seal */}
          <div className="w-16 h-16 rounded-full border-2 border-crimson overflow-hidden shadow-lg bg-black">
            <Image
              src="/Deadpool-logo.png"
              alt="Stamp"
              width={160}
              height={160}
              className="object-cover scale-160 object-center translate-y-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
