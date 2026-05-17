"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const liveDemos = [
  {
    title: "Crawlers",
    category: "Interactive Platform",
    description: "Environmental exploration platform featuring immersive navigation, dynamic content systems, and engagement tools.",
    url: "https://crawlers-one.vercel.app/", // Replace with actual URL
    color: "bg-[#111]",
    textColor: "text-white",
    accentColor: "text-crimson",
  },
  {
    title: "Research: Kidney Seg",
    category: "PUBLICATIONS",
    description: "Co-authored work on Uncertainty Quantification in Kidney Segmentation.",
    url: "https://drive.google.com/file/d/1ucTMprid8-kiHZHOUj5dqHAMaX5TwkIc/preview", // Replace with actual URL
    color: "bg-crimson",
    textColor: "text-black",
    accentColor: "text-black/70",
  },
  {
    title: "Research: EEG Emotion",
    category: "PUBLICATIONS",
    description: "EEG Emotion Recognition using Deep Reinforcement Learning.",
    url: "https://drive.google.com/file/d/1Zs-Phj2G10crf564G2ZLi1PqpycFY28y/preview", // Replace with actual URL
    color: "bg-white",
    textColor: "text-black",
    accentColor: "text-black/70",
  },
];

function BrowserFrame({ url, title }: { url: string; title: string }) {
  const [key, setKey] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(url);

  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a]">
      {/* Browser Chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#0d0d0d] border-b border-white/10 shrink-0">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {/* URL Bar */}
        <div className="flex-1 flex items-center gap-2 bg-[#2a2a2a] rounded-md px-3 py-1.5 mx-2 min-w-0">
          <svg className="w-3 h-3 text-white/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-inter text-xs text-white/40 truncate">{currentUrl}</span>
        </div>
        {/* Reload */}
        <button
          onClick={() => setKey(k => k + 1)}
          className="text-white/30 hover:text-white/70 transition-colors"
          title="Reload"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        {/* Open External */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-white/70 transition-colors"
          title="Open in new tab"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* iframe */}
      <div className="flex-1 relative bg-white">
        <iframe
          key={key}
          src={url}
          title={title}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          loading="lazy"
        />
        {/* Overlay fallback if iframe blocked */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] text-white/30 pointer-events-none opacity-0 hover:opacity-0">
          <p className="font-inter text-sm">Loading {title}…</p>
        </div>
      </div>
    </div>
  );
}

export default function LiveDemoSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-auto md:h-[300vh] bg-black">

      {/* Mobile Layout: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-12 px-6 sm:px-12 py-12 md:py-24 relative z-10 w-full">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5 overflow-hidden">
          <h2 className="font-oswald text-[25vw] font-bold text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            LIVE
          </h2>
        </div>

        {liveDemos.map((demo, idx) => (
          <div key={idx} className="relative z-10 flex flex-col gap-4">
            {/* Card Header */}
            <div className={`w-full ${demo.color} border border-white/10 p-6`}>
              <p className={`font-oswald text-xs tracking-widest mb-2 opacity-70 ${demo.textColor}`}>{demo.category}</p>
              <h3 className={`font-oswald text-3xl font-bold uppercase mb-2 ${demo.textColor}`}>{demo.title}</h3>
              <p className={`font-inter text-sm opacity-80 ${demo.textColor}`}>{demo.description}</p>
            </div>
            {/* Browser Frame */}
            <div className="w-full h-[40vh] sm:h-[50vh]">
              <BrowserFrame url={demo.url} title={demo.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout: Horizontal Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">

        {/* Background text */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
          <h2 className="font-oswald text-[15vw] font-bold text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            LIVE DEMO
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-24 md:px-40 relative z-10 w-[300vw]">
          {liveDemos.map((demo, idx) => (
            <div
              key={idx}
              className={`w-[80vw] h-[72vh] shrink-0 flex flex-col shadow-2xl border border-white/10 overflow-hidden`}
            >
              {/* Top info strip */}
              <div className={`${demo.color} px-10 py-5 flex items-center justify-between shrink-0`}>
                <div>
                  <p className={`font-oswald text-xs tracking-widest opacity-70 uppercase ${demo.textColor}`}>{demo.category}</p>
                  <h3 className={`font-oswald text-3xl font-bold uppercase ${demo.textColor}`}>{demo.title}</h3>
                </div>
                <p className={`font-inter text-sm  opacity-80 text-right ${demo.textColor}`}>{demo.description}</p>
              </div>

              {/* Browser Frame — takes remaining height */}
              <div className="flex-1 min-h-0">
                <BrowserFrame url={demo.url} title={demo.title} />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
