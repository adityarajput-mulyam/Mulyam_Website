import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Truck, Cpu, Landmark } from "lucide-react";

export default function ScmGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a smoothed spring progress to buffer raw scroll ticks (inertia glide)
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 180,
    mass: 0.5,
  });

  // --- Scroll-bound Parallax for Background Orbs ---
  const cyanY = useTransform(smoothProgress, [0, 1], [-90, 90]);
  const greenY = useTransform(smoothProgress, [0, 1], [90, -90]);

  // --- Scroll-bound Word-by-Word Text Reveal ---
  // Word 1: INTEGRATED
  const word1Y = useTransform(smoothProgress, [0.12, 0.28], ["105%", "0%"]);
  const word1Rotate = useTransform(smoothProgress, [0.12, 0.28], [6, 0]);

  // Word 2: LOGISTICS
  const word2Y = useTransform(smoothProgress, [0.16, 0.32], ["105%", "0%"]);
  const word2Rotate = useTransform(smoothProgress, [0.16, 0.32], [6, 0]);

  // Word 3: ENGINE
  const word3Y = useTransform(smoothProgress, [0.20, 0.36], ["105%", "0%"]);
  const word3Rotate = useTransform(smoothProgress, [0.20, 0.36], [6, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#070b19] flex items-center justify-center overflow-hidden py-28 px-6 select-none"
    >
      {/* 1. Tactile SVG Grain Overlay */}
      <div className="noise-overlay" />

      {/* 2. Floating Ambient Background Orbs (Parallax Scroll Bound) */}
      <motion.div style={{ y: cyanY }} className="bg-orb orb-cyan" />
      <motion.div style={{ y: greenY }} className="bg-orb orb-green" />

      {/* CSS Configurations for Filters, Grids, and Layout dynamics */}
      <style>{`
        /* Tactile Grain Overlay */
        .noise-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          filter: url(#noise-grain);
          opacity: 0.18;
        }

        /* Ambient Blur Orbs styling */
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: screen;
        }

        .orb-cyan {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%);
          top: -10%;
          left: -10%;
          filter: blur(180px);
        }

        .orb-green {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(0, 189, 103, 0.04) 0%, transparent 70%);
          bottom: -15%;
          right: -10%;
          filter: blur(200px);
        }

        /* Text Mask Reveal (overflow: hidden masks text as it slides up) */
        .reveal-mask {
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
        }

        .reveal-word {
          display: inline-block;
          transform-origin: left bottom;
        }

        .gradient-text {
          background: linear-gradient(90deg, #00ffff, #00bd67);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* Cards Grid with static alignment */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }
      `}</style>

      {/* Main Content Layout Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Section Title Reveal */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-mulyam-green font-bold">
            03 . Supply Chain System
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-white tracking-tighter uppercase leading-none font-sans flex flex-wrap gap-x-3 gap-y-1">
            <span className="reveal-mask">
              <motion.span 
                style={{ y: word1Y, rotate: word1Rotate }} 
                className="reveal-word block"
              >
                INTEGRATED
              </motion.span>
            </span>
            <span className="reveal-mask">
              <motion.span 
                style={{ y: word2Y, rotate: word2Rotate }} 
                className="reveal-word gradient-text font-extrabold block"
              >
                LOGISTICS
              </motion.span>
            </span>
            <span className="reveal-mask">
              <motion.span 
                style={{ y: word3Y, rotate: word3Rotate }} 
                className="reveal-word block"
              >
                ENGINE
              </motion.span>
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-mulyam-green rounded-full mt-2" />
        </div>

        {/* Static 3-Card Grid */}
        <div className="cards-grid">
          {/* Card 1: Smart Routing */}
          <div className="p-8 bg-[#111827]/40 border border-slate-800/80 rounded-2xl shadow-xl hover:border-mulyam-green/40 hover:bg-[#111827]/60 transition-all duration-350 group backdrop-blur-md flex flex-col gap-6">
            <div className="p-4 bg-mulyam-green/10 text-mulyam-green rounded-xl w-fit group-hover:bg-mulyam-green/20 group-hover:scale-105 transition-all duration-300">
              <Truck className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold">
                Agri-Logistics
              </span>
              <h3 className="font-sans font-bold text-xl text-white uppercase group-hover:text-mulyam-green transition-colors duration-300">
                Smart Routing
              </h3>
            </div>
            <p className="font-sans font-light text-sm text-slate-400 leading-relaxed">
              Dynamic transit mapping coordinates farm harvests with localized quick-commerce dark stores in real time, reducing cargo wastage margins under 2%.
            </p>
          </div>

          {/* Card 2: AI Quality Grading */}
          <div className="p-8 bg-[#111827]/40 border border-slate-800/80 rounded-2xl shadow-xl hover:border-mulyam-yellow/40 hover:bg-[#111827]/60 transition-all duration-350 group backdrop-blur-md flex flex-col gap-6">
            <div className="p-4 bg-mulyam-yellow/10 text-mulyam-yellow rounded-xl w-fit group-hover:bg-mulyam-yellow/20 group-hover:scale-105 transition-all duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold">
                Computer Vision
              </span>
              <h3 className="font-sans font-bold text-xl text-white uppercase group-hover:text-mulyam-yellow transition-colors duration-300">
                AI Quality Grading
              </h3>
            </div>
            <p className="font-sans font-light text-sm text-slate-400 leading-relaxed">
              High-speed camera sensor arrays inspect fresh produce attributes at farm gates, certifying grade-A standard compliance and digital tracking codes instantly.
            </p>
          </div>

          {/* Card 3: Direct Liquidation */}
          <div className="p-8 bg-[#111827]/40 border border-slate-800/80 rounded-2xl shadow-xl hover:border-mulyam-green/40 hover:bg-[#111827]/60 transition-all duration-350 group backdrop-blur-md flex flex-col gap-6">
            <div className="p-4 bg-mulyam-green/10 text-mulyam-green rounded-xl w-fit group-hover:bg-mulyam-green/20 group-hover:scale-105 transition-all duration-300">
              <Landmark className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold">
                B2B Sourcing
              </span>
              <h3 className="font-sans font-bold text-xl text-white uppercase group-hover:text-mulyam-green transition-colors duration-300">
                Direct Liquidation
              </h3>
            </div>
            <p className="font-sans font-light text-sm text-slate-400 leading-relaxed">
              Guaranteed multi-tier crop purchasing liquidates all grades (A, B, and C) to diverse institutional buyer networks, offering cash flows back to farmers within 24 hours.
            </p>
          </div>
        </div>

      </div>

      {/* Hidden SVG Noise Grain Generator */}
      <svg className="hidden">
        <defs>
          <filter id="noise-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.08 0" />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
