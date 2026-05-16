"use client";

import { motion } from "framer-motion";

export default function Ticker() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-crimson text-black py-3 z-40 border-y border-white/10">
      <motion.div
        animate={{ x: [0, -1035] }} // Adjust based on text width
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
        className="flex space-x-8 font-oswald text-sm md:text-base tracking-[0.2em] uppercase font-bold"
      >
        {/* Duplicate the content multiple times to ensure a seamless loop */}
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex-shrink-0">
            AI PRODUCT • WORKFLOW AUTOMATION • SCALABLE SYSTEMS • DEEP LEARNING •
          </span>
        ))}
      </motion.div>
    </div>
  );
}
