"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useRef } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaDatabase,
  FaGithub,
  FaBrain,
  FaCloud,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
} from "react-icons/si";

import { Layers3, Cpu } from "lucide-react";

const projects = [
  {
    name: "SAMPARK",
    category: "Workflow Automation",
    description:
      "Institutional workflow platform designed to digitize approvals, streamline coordination, and centralize administrative processes.",
    color: "bg-crimson",
    textColor: "text-white",
    github: "#",
  },

  {
    name: "EEG Emotion",
    category: "Adaptive AI Systems",
    description:
      "Subject-independent EEG emotion recognition system using reinforcement learning and domain adaptation techniques.",
    color: "bg-black",
    textColor: "text-white",
    border: "border-white/10",
    github: "#",
    paper: "#",
  },

{
  name: "Kidney Segmentation",
  category: "Medical AI",
  description:
    "Uncertainty-aware kidney tumor segmentation system for AI-assisted clinical decision support.",
  color: "bg-[#5A1122]",
  textColor: "text-white",
  border: "border-red-400/20",
  github: "#",
  paper: "#",
},

{
  name: "Crawlers",
  category: "Interactive Platform",
  description:
    "Environmental exploration platform featuring immersive navigation, dynamic content systems, and engagement tools.",
  color: "bg-[rgba(155,27,48,0.12)]",
  textColor: "text-black",
  border: "border-[crimson/20]",
  github: "#",
},
  {
    name: "Pneumonia Detection",
    category: "Medical Imaging",
    description:
      "CNN-based chest X-ray classification system developed for accessible AI-assisted pneumonia detection.",
    color: "bg-[#111]",
    textColor: "text-white",
    border: "border-white/10",
    github: "https://github.com/Diya5772/pneumonia-detection",
    paper: "https://github.com/Diya5772/pneumonia-detection/blob/main/Pneumonia%20Detection%20Report.pdf",
  },

  {
    name: "Credit Risk Prediction",
    category: "Predictive Analytics",
    description:
      "Customer behavior prediction model designed to identify high-risk credit card defaulters using deep learning.",
    color: "bg-gray-200",
    textColor: "text-black",
    border: "border-black/10",
    github: "https://github.com/Nilangbhuva/Convolve",
  },

  {
    name: "Financial Sentiment",
    category: "NLP Systems",
    description:
      "Market intelligence system integrating financial sentiment analysis with predictive stock movement modeling.",
    color: "bg-black",
    textColor: "text-white",
    border: "border-white/10",
    github: "#",
  },
];

export default function ProjectCardsSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cinematic staggered parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [220, -220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const y5 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y6 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y7 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const transforms = [y1, y2, y3, y4, y5, y6, y7];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-[145vh] bg-white py-10 overflow-hidden border-t border-black/10"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
        <h2
          className="font-oswald text-[20vw] font-bold uppercase text-transparent"
          style={{
            WebkitTextStroke: "2px rgba(0,0,0,0.15)",
          }}
        >
          SYSTEMS
        </h2>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-[22vh] bg-[radial-gradient(circle_at_top,rgba(155,27,48,0.12),transparent_70%)] pointer-events-none" />
{/* Floating Border Atmosphere */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

  {/* Python */}
  <motion.div
    animate={{
      x: [0, 140, -90, 0],
      y: [0, -160, 100, 0],
      rotate: [0, 18, -10, 0],
      scale: [1, 1.08, 0.94, 1],
    }}
    transition={{
      duration: 38,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute top-[8%] left-[-2%]"
  >
    <FaPython className="text-[160px] text-black/[0.08]" />
  </motion.div>

  {/* TensorFlow */}
  <motion.div
    animate={{
      x: [0, -150, 90, 0],
      y: [0, 140, -100, 0],
      rotate: [0, -20, 12, 0],
      scale: [1, 0.94, 1.06, 1],
    }}
    transition={{
      duration: 42,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute top-[6%] right-[-3%]"
  >
    <SiTensorflow className="text-[150px] text-red-500/[0.08]" />
  </motion.div>

  {/* React */}
  <motion.div
    animate={{
      x: [0, 120, -140, 0],
      y: [0, -180, 110, 0],
      rotate: [0, 22, -14, 0],
      scale: [1, 1.1, 0.92, 1],
    }}
    transition={{
      duration: 46,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute top-[35%] left-[-4%]"
  >
    <FaReact className="text-[180px] text-cyan-500/[0.08]" />
  </motion.div>

  {/* PyTorch */}
  <motion.div
    animate={{
      x: [0, -130, 150, 0],
      y: [0, 160, -100, 0],
      rotate: [0, -18, 15, 0],
      scale: [1, 1.08, 0.93, 1],
    }}
    transition={{
      duration: 44,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute top-[38%] right-[-4%]"
  >
    <SiPytorch className="text-[150px] text-red-400/[0.08]" />
  </motion.div>

  {/* NodeJS */}
  <motion.div
    animate={{
      x: [0, 150, -80, 0],
      y: [0, -140, 120, 0],
      rotate: [0, 16, -12, 0],
      scale: [1, 1.06, 0.94, 1],
    }}
    transition={{
      duration: 40,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute bottom-[18%] left-[-2%]"
  >
    <FaNodeJs className="text-[170px] text-green-600/[0.08]" />
  </motion.div>

  {/* MongoDB */}
  <motion.div
    animate={{
      x: [0, -140, 100, 0],
      y: [0, 150, -120, 0],
      rotate: [0, -20, 14, 0],
      scale: [1, 1.08, 0.92, 1],
    }}
    transition={{
      duration: 48,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute bottom-[12%] right-[-2%]"
  >
    <SiMongodb className="text-[180px] text-green-700/[0.08]" />
  </motion.div>

  {/* CPU */}
  <motion.div
    animate={{
      x: [0, 120, -90, 0],
      y: [0, -160, 80, 0],
      rotate: [0, 18, -10, 0],
      scale: [1, 1.06, 0.94, 1],
    }}
    transition={{
      duration: 41,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute bottom-[4%] left-[28%]"
  >
    <Cpu className="w-40 h-40 text-black/[0.08]" />
  </motion.div>

  {/* Brain */}
  <motion.div
    animate={{
      x: [0, -130, 160, 0],
      y: [0, 180, -100, 0],
      rotate: [0, 24, -16, 0],
      scale: [1, 1.12, 0.9, 1],
    }}
    transition={{
      duration: 50,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute top-[12%] left-[38%]"
  >
    <FaBrain className="text-[170px] text-crimson/10" />
  </motion.div>

  {/* Layers */}
  <motion.div
    animate={{
      x: [0, 140, -110, 0],
      y: [0, -150, 100, 0],
      rotate: [0, -16, 12, 0],
      scale: [1, 1.05, 0.95, 1],
    }}
    transition={{
      duration: 43,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
    className="absolute bottom-[2%] right-[32%]"
  >
    <Layers3 className="w-40 h-40 text-black/[0.08]" />
  </motion.div>

</div>
      {/* Section Heading */}
      <div className="absolute top-14 w-full h-[16vh] text-center z-20 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider text-black"
        >
          SYSTEMS <span className="text-crimson">BUILT</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-black/60 font-inter text-sm md:text-base tracking-wide uppercase"
        >
          Intelligent platforms • scalable workflows • adaptive systems
        </motion.p>
      </div>

      {/* Cinematic Floating Layout */}
      <div className="max-w-[1600px] mx-auto relative z-10 pt-40 md:pt-54 px-8 md:px-20 pb-20">

        {/* TOP ROW */}
        <div className="flex justify-center gap-10 xl:gap-14">

          {projects.slice(0, 4).map((project, idx) => {

            const offsets = [
              "mt-10",
              "mt-0",
              "mt-8",
              "-mt-6",
            ];

            return (
              <motion.div
                key={idx}
                style={{
                  y: transforms[idx],
                }}

                initial={{
                  opacity: 0,
                  y: 140,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{ once: true, margin: "-100px" }}

                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.08,
                }}

                whileHover={{
                  y: -20,
                  scale: 1.035,
                  rotateX: -4,
                  rotateY: idx % 2 === 0 ? 4 : -4,
                }}

                className={`relative group w-72 h-96 ${offsets[idx]}`}
              >

                {/* Glow */}
                <div
                  className={`absolute -inset-4 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                    project.color === "bg-crimson"
                      ? "bg-crimson/25"
                      : "bg-black/10"
                  }`}
                />

                {/* Floating Border Glow */}
                <motion.div
                  animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"
                />

                {/* Card */}
                <div
                  className={`relative w-full h-full ${project.color} ${
                    project.border ? `border ${project.border}` : ""
                  } rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.18)] transition-all duration-500`}
                >

                  {/* Noise */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

                  {/* Accent */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />

                  {/* Top */}
                  <div className="relative z-10">
                    <span
                      className={`font-inter text-[10px] tracking-[0.32em] uppercase font-semibold opacity-60 ${project.textColor}`}
                    >
                      {project.category}
                    </span>

                    <h3
                      className={`font-oswald text-3xl font-bold uppercase mt-5 leading-tight ${project.textColor}`}
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10">
                    <p
                      className={`font-inter text-[15px] leading-relaxed opacity-75 ${project.textColor}`}
                    >
                      {project.description}
                    </p>

                    {/* Action Links */}
<div className="flex items-center gap-4 mb-6">

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 hover:scale-110 ${
        project.textColor === "text-white"
          ? "text-white/70 hover:text-white"
          : "text-black/60 hover:text-black"
      }`}
    >
      <FaGithub size={20} />
    </a>
  )}
  {project.paper && (
    <a
      href={project.paper}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 hover:scale-110 ${
        project.textColor === "text-white"
          ? "text-white/70 hover:text-white"
          : "text-black/60 hover:text-black"
      }`}
    >
      <HiOutlineDocumentText size={22} />
    </a>
  )}
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.textColor === "text-white"
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />

                      <div
                        className={`h-[1px] flex-1 ${
                          project.textColor === "text-white"
                            ? "bg-white/20"
                            : "bg-black/20"
                        }`}
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-center gap-14 xl:gap-20 mt-28">

          {projects.slice(4, 7).map((project, idx) => {

            const offsets = [
              "mt-0",
              "mt-10",
              "-mt-4",
            ];

            return (
              <motion.div
                key={idx + 4}
                style={{
                  y: transforms[idx + 4],
                }}

                initial={{
                  opacity: 0,
                  y: 140,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{ once: true, margin: "-100px" }}

                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.08,
                }}

                whileHover={{
                  y: -20,
                  scale: 1.035,
                  rotateX: -4,
                  rotateY: idx % 2 === 0 ? 4 : -4,
                }}

                className={`relative group w-72 h-96 ${offsets[idx]}`}
              >

                {/* Glow */}
                <div
                  className={`absolute -inset-4 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                    project.color === "bg-crimson"
                      ? "bg-crimson/25"
                      : "bg-black/10"
                  }`}
                />

                {/* Floating Border Glow */}
                <motion.div
                  animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"
                />

                {/* Card */}
                <div
                  className={`relative w-full h-full ${project.color} ${
                    project.border ? `border ${project.border}` : ""
                  } rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.18)] transition-all duration-500`}
                >

                  {/* Noise */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

                  {/* Accent */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />

                  {/* Top */}
                  <div className="relative z-10">
                    <span
                      className={`font-inter text-[10px] tracking-[0.32em] uppercase font-semibold opacity-60 ${project.textColor}`}
                    >
                      {project.category}
                    </span>

                    <h3
                      className={`font-oswald text-3xl font-bold uppercase mt-5 leading-tight ${project.textColor}`}
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10">
                    <p
                      className={`font-inter text-[15px] leading-relaxed opacity-75 ${project.textColor}`}
                    >
                      {project.description}
                    </p>

                     {/* Action Links */}
<div className="flex items-center gap-4 mb-6">

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 hover:scale-110 ${
        project.textColor === "text-white"
          ? "text-white/70 hover:text-white"
          : "text-black/60 hover:text-black"
      }`}
    >
      <FaGithub size={20} />
    </a>
  )}
  {project.paper && (
    <a
      href={project.paper}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 hover:scale-110 ${
        project.textColor === "text-white"
          ? "text-white/70 hover:text-white"
          : "text-black/60 hover:text-black"
      }`}
    >
      <HiOutlineDocumentText size={22} />
    </a>
  )}
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.textColor === "text-white"
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />

                      <div
                        className={`h-[1px] flex-1 ${
                          project.textColor === "text-white"
                            ? "bg-white/20"
                            : "bg-black/20"
                        }`}
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}