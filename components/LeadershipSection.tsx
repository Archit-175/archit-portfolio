"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-black border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-crimson tracking-[0.2em] uppercase text-sm mb-4">
            Leadership & Execution
          </p>

          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none">
            COMMUNITY <br />
            <span className="text-white/20">& STRATEGY</span>
          </h2>
        </motion.div>

        {/* FEATURED POR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ADMINISTRATOR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0A0A0A] border border-white/10 p-8 hover:border-crimson/40 hover:bg-[#111] transition-all duration-300 group"
          >

            <div className="flex justify-between items-start mb-6">

              <div>

                <div className="text-crimson font-oswald text-lg mb-3">
                  01
                </div>

                <h3 className="font-oswald text-2xl uppercase leading-none group-hover:text-crimson transition-colors">
                  Administrator
                </h3>

                <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                  Student’s Council
                </p>

              </div>

              <Image
                src="/leadership/student-council.jpeg"
                alt="Student Council"
                width={52}
                height={52}
                className="object-contain rounded-full"
              />

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Led institute-level initiatives, execution, stakeholder coordination and student-centric improvements.
            </p>

            <div className="mt-6 space-y-2 text-xs text-gray-500">

              <div>
                • Sampark initiative
              </div>

              <div>
                • Hostel allocation concepts
              </div>

              <div>
                • Student wellbeing ideas
              </div>

            </div>

          </motion.div>

          {/* ACM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#0A0A0A] border border-white/10 p-8 hover:border-crimson/40 hover:bg-[#111] transition-all duration-300 group"
          >

            <div className="flex justify-between items-start mb-6">

              <div>

                <div className="text-crimson font-oswald text-lg mb-3">
                  02
                </div>

                <h3 className="font-oswald text-2xl uppercase leading-none group-hover:text-crimson transition-colors">
                  Secretary
                </h3>

                <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                  ACM SVNIT
                </p>

              </div>

              <Image
                src="/leadership/acm.svg"
                alt="ACM"
                width={52}
                height={52}
              />

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Leading technical communities, workshops, hackathons and academic initiatives.
            </p>

            <div className="mt-6 space-y-2 text-xs text-gray-500">

              <div>
                • Workshops
              </div>

              <div>
                • Hackathons
              </div>

              <div>
                • Community building
              </div>

            </div>

          </motion.div>

          {/* MINDBEND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0A0A0A] border border-white/10 p-8 hover:border-crimson/40 hover:bg-[#111] transition-all duration-300 group"
          >

            <div className="flex justify-between items-start mb-6">

              <div>

                <div className="text-crimson font-oswald text-lg mb-3">
                  03
                </div>

                <h3 className="font-oswald text-2xl uppercase leading-none group-hover:text-crimson transition-colors">
                  Core Member
                </h3>

                <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                  Mindbend
                </p>

              </div>

              <Image
                src="/leadership/mindbend.jpg"
                alt="Mindbend"
                width={58}
                height={58}
                className="object-contain rounded-full"
              />

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Finance, logistics, sponsorship, hospitality and execution for Gujarat’s largest techno-managerial fest.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6">

              <div>

                <p className="text-crimson font-oswald text-lg">
                  ₹29L+
                </p>

                <p className="text-[10px] uppercase text-white/50">
                  Finance
                </p>

              </div>

              <div>

                <p className="text-crimson font-oswald text-lg">
                  Guests
                </p>

                <p className="text-[10px] uppercase text-white/50">
                  Speakers
                </p>

              </div>

              <div>

                <p className="text-crimson font-oswald text-lg">
                  Ops
                </p>

                <p className="text-[10px] uppercase text-white/50">
                  Events
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* MORE ROLES */}
        <div className="mt-20">

          <h3 className="font-oswald text-3xl uppercase mb-10 text-white">
            More Roles & Contributions
          </h3>

          <div className="grid md:grid-cols-3 gap-5">

            {/* MBMUN */}
            <div className="bg-[#0A0A0A] border border-white/10 p-7 hover:border-crimson/40 transition-all">

              <div className="flex justify-between items-start mb-5">

                <div>

                  <h4 className="font-oswald text-xl uppercase leading-none">
                    Chief Administrative Officer
                  </h4>

                  <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                    MBMUN
                  </p>

                </div>

                <Image
                  src="/leadership/mbmun.svg"
                  alt="MBMUN"
                  width={55}
                  height={55}
                />

              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Managed logistics, stakeholder coordination and media operations.
              </p>

            </div>

            {/* BIS */}
            <div className="bg-[#0A0A0A] border border-white/10 p-7 hover:border-crimson/40 transition-all">

              <div className="flex justify-between items-start mb-5">

                <div>

                  <h4 className="font-oswald text-xl uppercase leading-none">
                    Student Coordinator
                  </h4>

                  <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                    BIS Chapter
                  </p>

                </div>

                <Image
                  src="/leadership/bis.svg"
                  alt="BIS"
                  width={50}
                  height={50}
                />

              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Coordinated awareness and outreach initiatives under BIS.
              </p>

            </div>

            {/* BRANCH COUNSELOR */}
            <div className="bg-[#0A0A0A] border border-white/10 p-7 hover:border-crimson/40 transition-all">

              <div className="flex justify-between items-start mb-5">

                <div>

                  <h4 className="font-oswald text-xl uppercase leading-none">
                    Branch Counselor
                  </h4>

                  <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                    AI Department
                  </p>

                </div>

                <Image
                  src="/leadership/ai-dept.svg"
                  alt="AI Department"
                  width={45}
                  height={45}
                />

              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Represented students and coordinated with faculty and TNP.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}