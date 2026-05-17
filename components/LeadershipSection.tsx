"use client";

import { motion } from "framer-motion";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 md:px-24 lg:px-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="font-inter text-crimson tracking-[0.2em] uppercase text-sm mb-4">Leadership & Execution</p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-bold uppercase tracking-tighter leading-none">
            COMMUNITY <br/> <span className="text-white/20">& STRATEGY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {/* Block 1 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-black p-8 sm:p-12 lg:p-20 hover:bg-[#111] border border-transparent hover:border-white/10 transition-all duration-300 group cursor-pointer"
          >
            <div className="text-crimson font-oswald text-xl mb-6">01</div>
            <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-6 group-hover:text-crimson transition-colors">
              Administrator, <br/> Student’s Council
            </h3>
            <p className="font-inter text-gray-400 leading-relaxed">
              Institute-level planning, stakeholder coordination, and execution of large-scale initiatives.
            </p>
            <div className="mt-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-black p-8 sm:p-12 lg:p-20 hover:bg-[#111] border border-transparent hover:border-white/10 transition-all duration-300 group cursor-pointer"
          >
            <div className="text-crimson font-oswald text-xl mb-6">02</div>
            <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-6 group-hover:text-crimson transition-colors">
              Secretary, <br/> ACM SVNIT
            </h3>
            <p className="font-inter text-gray-400 leading-relaxed">
              Leading technical communities, managing workflows, and driving organizational impact.
            </p>
            <div className="mt-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
