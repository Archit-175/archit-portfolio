"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 md:px-24 lg:px-32 py-2 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5"
      >
        {/* Left: Logo Text */}
        <div className="font-oswald text-2xl md:text-3xl tracking-wide font-bold text-white uppercase flex items-center gap-1">
          ARCHIT<span className="text-crimson">+</span>SAVALIYA
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-xs md:text-sm font-inter tracking-[0.2em] text-white/70 uppercase">
          <a href="#about" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">About</a>
          <span className="text-crimson/80">•</span>
          <a href="#projects" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">Live Demo</a>
          <span className="text-crimson/80">•</span>
          <a href="#leadership" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">Leadership</a>
          <span className="text-crimson/80">•</span>
          <a href="#contact" className="hover:text-crimson hover:-translate-y-0.5 transition-all duration-300">Contact</a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <a 
            href="https://drive.google.com/file/d/1FWpmHjfhW7APTLKznhLiSUx78kEst1Rr/view?usp=sharing" 
            target="_blank"
            className="hidden sm:flex items-center justify-center gap-2 text-white hover:text-crimson hover:border-crimson hover:-translate-y-0.5 transition-all duration-300 border border-white/10 rounded-full px-4 py-2 text-sm font-inter tracking-widest uppercase shadow-lg hover:shadow-crimson/20"
          >
            <Download size={16} />
            <span className="hidden md:inline"> Resume </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] sm:top-[70px] left-0 w-full z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 lg:hidden shadow-2xl"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="w-full text-center py-4 text-white/80 hover:text-crimson hover:bg-white/5 font-inter tracking-[0.2em] uppercase text-sm transition-all">About</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="w-full text-center py-4 text-white/80 hover:text-crimson hover:bg-white/5 font-inter tracking-[0.2em] uppercase text-sm transition-all">Live Demo</a>
            <a href="#leadership" onClick={() => setIsOpen(false)} className="w-full text-center py-4 text-white/80 hover:text-crimson hover:bg-white/5 font-inter tracking-[0.2em] uppercase text-sm transition-all">Leadership</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-4 text-white/80 hover:text-crimson hover:bg-white/5 font-inter tracking-[0.2em] uppercase text-sm transition-all">Contact</a>
            
            <a 
              href="https://drive.google.com/file/d/1FWpmHjfhW7APTLKznhLiSUx78kEst1Rr/view?usp=sharing" 
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 text-white border border-white/20 rounded-full px-6 py-2.5 text-sm font-inter tracking-widest uppercase hover:bg-crimson hover:border-crimson hover:text-black transition-all"
            >
              <Download size={16} />
              <span> Resume </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
