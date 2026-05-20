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
 

        {/* Massive Background Typography */}
{/* Massive Background Typography */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)"
  }}
  animate={{
    opacity: 1,
    scale: 1,
    filter: "blur(0px)"
  }}
  transition={{
    duration: 1.2,
    ease: "easeOut"
  }}
  style={{ y: textY }}
  className="
  absolute
  top-[38%]
  md:top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  z-10
  w-full
  text-center
  pointer-events-none
  overflow-hidden
"
>
  <div className="relative inline-block">

    {/* crimson glow */}
    <motion.div
      initial={{
        opacity: 0,
        scale: .7
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.2
      }}
      className="
      absolute
      inset-0
    
      blur-[90px]
      rounded-full
      "
    />

    {/* left → right reveal */}
    <motion.div
      initial={{
        width: "0%"
      }}
      animate={{
        width: "100%"
      }}
      transition={{
        duration: 1.4,
        ease: [0.22,1,0.36,1]
      }}
      className="
      overflow-hidden
      mx-auto
      "
    >

      <motion.h1
        initial={{
          opacity: 0,
          x: -120
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1.2
        }}
        className="
        font-oswald
        text-[22vw]
        sm:text-[20vw]
        md:text-[24vw]
        lg:text-[28vw]
        leading-none
        font-bold
        tracking-tighter
        text-white
        drop-shadow-2xl
        select-none
        whitespace-nowrap
        "
      >
        &lt;ARCHIT&gt;
      </motion.h1>

      {/* scan line */}
      <motion.div
        animate={{
          x: ["-100%", "120%"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="
        absolute
        top-1/2
        left-0
        w-full
        h-[3px]
        bg-gradient-to-r
        from-transparent
        via-red-500
        to-transparent
        blur-sm
        opacity-70
        "
      />

    </motion.div>

  </div>
</motion.div>

      </section>

      {/* Scrolling Foreground — figure moves with natural page scroll to stay attached to AboutSection */}
<div className="
relative
z-10
-mt-[100vh]
h-screen
w-full
pointer-events-none
flex
justify-center
"
>
  <motion.div
    initial={{
      opacity:0,
      y:180,
      scale:.85,
      rotate:-4,
      filter:"blur(10px)"
    }}
    animate={{
      opacity:1,
      y:0,
      scale:1,
      rotate:0,
      filter:"blur(0px)"
    }}
    transition={{
      duration:1.4,
      ease:[0.22,1,0.36,1]
    }}
    className="
    absolute
    bottom-0
    w-full
    max-w-[600px]
    md:max-w-[800px]
    h-[85vh]
    "
  >

    {/* crimson aura */}
    <motion.div
      animate={{
        scale:[1,1.08,1],
        opacity:[.35,.55,.35]
      }}
      transition={{
        duration:4,
        repeat:Infinity,
        ease:"easeInOut"
      }}
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      w-[70%]
      h-[35%]
      bg-crimson
      blur-[120px]
      rounded-full
      opacity-40
      "
    />

    {/* floating image */}
    <motion.div
    
      className="relative w-full h-full"
    >
      <Image
        src="/archit.svg"
        alt="Archit Savaliya Silhouette"
        fill
        priority
        className="
        object-contain
        object-bottom
        drop-shadow-[0_30px_80px_rgba(0,0,0,0.95)]
        "
        sizes="(max-width:768px)100vw,50vw"
      />
    </motion.div>

  </motion.div>
</div>

      {/* Sticky UI — pinned ON TOP of both background and scrolling figure */}
      <div className="sticky top-0 h-screen w-full pointer-events-none z-20 -mt-[100vh]">
        {/* Bottom Left: Bio Block */}
<motion.div
  initial={{
    opacity: 0,
    x: -60,
    y: 30
  }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -4, 0]
  }}
  transition={{
    opacity: { duration: 1, delay: 0.5 },
    x: {
      duration: 1,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1]
    },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
  className="
  absolute
  bottom-14
  left-8
  md:left-16

  max-w-[300px]

  pointer-events-auto
"
>

  <div className="flex items-center gap-3 mb-3">

    <motion.div
      animate={{
        scale:[1,1.25,1],
        opacity:[1,.5,1]
      }}
      transition={{
        duration:2,
        repeat:Infinity
      }}
      className="
      w-3 h-3
      rounded-full
      bg-crimson
      "
    />

    <span
      className="
      font-oswald
      text-crimson
      text-xs
      tracking-[0.25em]
      uppercase
      "
    >
      HELLO
    </span>

  </div>

  <p
    className="
    font-inter
    text-sm
    text-white/80
    leading-relaxed
    "
  >
   
    welcome to my digital space.
  </p>

</motion.div>
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
