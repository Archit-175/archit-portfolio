"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 md:px-24 lg:px-32 py-2 md:py-2 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      {/* Left: Logo Text */}
      <div className="font-oswald text-2xl md:text-3xl tracking-wide font-bold text-white uppercase flex items-center gap-1">
        ARCHIT<span className="text-crimson">+</span>SAVALIYA
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden lg:flex items-center gap-6 text-xs md:text-sm font-inter tracking-[0.2em] text-white/70 uppercase">
        <a href="#about" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">About</a>
        <span className="text-crimson/80">•</span>
        <a href="#projects" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">Project</a>
        <span className="text-crimson/80">•</span>
        <a href="#leadership" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">Leadership</a>
        <span className="text-crimson/80">•</span>
        <a href="#contact" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">Contact</a>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="flex items-center justify-center gap-2 text-white hover:text-crimson hover:border-crimson hover:-translate-y-0.5 transition-all duration-300 border border-white/10 rounded-full px-4 py-2 text-sm font-inter tracking-widest uppercase shadow-lg hover:shadow-crimson/20"
        >
          <Download size={16} />
          <span className="hidden md:inline"> Resume </span>
        </a>
      </div>
    </motion.nav>
  );
}
