"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-12 md:px-24 lg:px-32 py-8 flex justify-between items-center mix-blend-difference"
    >
      {/* Left: Logo Text */}
      <div className="font-oswald text-2xl md:text-3xl tracking-wide font-bold text-white uppercase flex items-center gap-1">
        ARCHIT <span className="text-crimson">+</span> SAVALIYA
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden lg:flex items-center gap-6 text-xs md:text-sm font-inter tracking-[0.2em] text-white/70 uppercase">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <span className="text-crimson/80">•</span>
        <a href="#projects" className="hover:text-white transition-colors">Project</a>
        <span className="text-crimson/80">•</span>
        <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
        <span className="text-crimson/80">•</span>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="flex items-center gap-2 text-white hover:text-crimson transition-colors border border-white/20 rounded-full px-4 py-2 text-sm font-inter tracking-widest uppercase"
        >
          <Download size={16} />
          <span className="hidden md:inline">Resume</span>
        </a>
      </div>
    </motion.nav>
  );
}
