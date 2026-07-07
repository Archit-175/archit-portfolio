"use client";

import { motion, useReducedMotion } from "framer-motion";
import SeamGlow from "@/components/SeamGlow";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

type Paper = {
  status: string;
  title: string;
  roleNote: string;
  description: string;
  chips: string[];
  github: string;
  paper: string;
};

const papers: Paper[] = [
  {
    status: "Under Review",
    title: "EEG Emotion Recognition using Deep Reinforcement Learning",
    roleNote: "Group research · Contributor (one of three authors)",
    description:
      "I contributed to this collaborative research on subject-independent (calibration-free) EEG emotion recognition, using deep reinforcement learning with domain adaptation so the model generalizes across people without per-user calibration.",
    chips: [
      "PyTorch",
      "Double-Dueling DQN",
      "PPO",
      "Domain Adaptation (CORAL / DANN)",
      "DEAP",
      "SEED-IV",
    ],
    github: "https://github.com/Archit-175/EEG-Emotion-Recognition-RL",
    paper:
      "https://drive.google.com/file/d/1Zs-Phj2G10crf564G2ZLi1PqpycFY28y/view",
  },
  {
    status: "Under Review",
    title: "Kidney Tumor Segmentation (Attention Residual U-Net)",
    roleNote: "Group research · Contributor (one of three authors)",
    description:
      "I contributed to this medical-imaging research: an Attention Residual U-Net with a guided decoder plus Monte-Carlo Dropout to produce per-pixel uncertainty maps for AI-assisted clinical review, trained on the KiTS23 kidney/tumor/cyst dataset.",
    chips: [
      "TensorFlow / Keras",
      "Attention U-Net",
      "Deep Supervision",
      "MC-Dropout Uncertainty",
      "KiTS23",
      "~0.83 Dice",
    ],
    github: "https://github.com/Archit-175/KidneyTumorSegmentation-ARUGD",
    paper:
      "https://drive.google.com/file/d/1ucTMprid8-kiHZHOUj5dqHAMaX5TwkIc/view",
  },
];

export default function PublicationsSection() {
  const reduce = useReducedMotion();

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
      };

  return (
    <section
      id="publications"
      className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-black"
    >
      <SeamGlow />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div {...reveal} className="mb-14">
          <p className="font-inter text-crimson tracking-[0.2em] uppercase text-sm mb-4">
            Research
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white">
            PUBLICATIONS <span className="text-white/20">&amp; PAPERS</span>
          </h2>
        </motion.div>

        {/* Paper cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {papers.map((paper, idx) => {
            const cardReveal = reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-50px" },
                  transition: { duration: 0.7, delay: idx * 0.12 },
                };

            return (
              <motion.article
                key={paper.title}
                {...cardReveal}
                className="group flex flex-col bg-[#0A0A0A] hover:bg-[#111] border border-white/10 rounded-2xl p-7 sm:p-8 transition-colors duration-300"
              >
                {/* Status tag */}
                <span className="inline-block self-start bg-crimson/15 text-crimson text-[10px] font-oswald tracking-widest uppercase px-3 py-1 rounded-full">
                  {paper.status}
                </span>

                {/* Title */}
                <h3 className="font-oswald text-2xl uppercase leading-tight text-white mt-5">
                  {paper.title}
                </h3>

                {/* Role note */}
                <p className="text-xs text-white/40 uppercase tracking-widest mt-3">
                  {paper.roleNote}
                </p>

                {/* Description */}
                <p className="font-inter text-sm text-gray-400 leading-relaxed mt-4">
                  {paper.description}
                </p>

                {/* Topic chips */}
                <ul className="flex flex-wrap gap-2 mt-6">
                  {paper.chips.map((chip) => (
                    <li
                      key={chip}
                      className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/70"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                {/* Action row */}
                <div className="flex items-center gap-6 mt-7 pt-6 border-t border-white/10">
                  <a
                    href={paper.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code for ${paper.title} on GitHub`}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-crimson transition"
                  >
                    <FaGithub aria-hidden="true" size={16} />
                    <span className="font-inter">Code</span>
                  </a>

                  <a
                    href={paper.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read the ${paper.title} paper`}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-crimson transition"
                  >
                    <HiOutlineDocumentText aria-hidden="true" size={18} />
                    <span className="font-inter">Read paper</span>
                    <FaExternalLinkAlt aria-hidden="true" size={10} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
