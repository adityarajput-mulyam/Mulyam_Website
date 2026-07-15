import { useEffect } from "react";
import { motion } from "framer-motion";

export default function WhatIsMulyam() {
  // Global header transparency controller
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Force transparency and dark layout properties
          header.style.backgroundColor = "transparent";
          header.style.setProperty("background-color", "transparent", "important");
          header.style.setProperty("border-bottom-color", "rgba(255, 255, 255, 0.1)", "important");

          // Strip white background and shadow classes programmatically
          header.classList.remove("bg-white/95", "shadow-sm", "border-slate-100");

          // Force white text options for active navigation tabs
          const navButtons = header.querySelectorAll("nav button");
          navButtons.forEach((btn) => {
            (btn as HTMLElement).style.setProperty("color", "rgba(255, 255, 255, 0.7)", "important");
            if (btn.classList.contains("font-extrabold")) {
              (btn as HTMLElement).style.setProperty("color", "#ffffff", "important");
              (btn as HTMLElement).style.setProperty("background-color", "rgba(255, 255, 255, 0.15)", "important");
            }
          });
        } else {
          // Restore normal header state when scrolling away
          header.style.backgroundColor = "";
          header.style.removeProperty("background-color");
          header.style.removeProperty("border-bottom-color");

          const navButtons = header.querySelectorAll("nav button");
          navButtons.forEach((btn) => {
            (btn as HTMLElement).style.removeProperty("color");
            (btn as HTMLElement).style.removeProperty("background-color");
          });
        }
      },
      { threshold: 0.1, rootMargin: "-80px 0px 0px 0px" } // Offset matching navbar height footprint
    );

    const section = document.getElementById("what-is-mulyam");
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
      // Enforce total cleanup of overridden styles on unmount
      header.style.backgroundColor = "";
      header.style.removeProperty("background-color");
      header.style.removeProperty("border-bottom-color");
      const navButtons = header.querySelectorAll("nav button");
      navButtons.forEach((btn) => {
        (btn as HTMLElement).style.removeProperty("color");
        (btn as HTMLElement).style.removeProperty("background-color");
      });
    };
  }, []);

  const hoverAnimation = { y: -8 };
  const springTransition = { type: "spring", stiffness: 300, damping: 24 };

  const cards = [
    {
      src: "/videos/droneshot.mp4",
      tag: "01 . COMMODITY BRAND",
      title: "I'mFresh Premium Produce",
      desc: "Our retail and quick-commerce facing brand. Under the I'mFresh guarantee, every batch undergoes strict selection to promise crop excellence, raw freshness, and complete chemical safety.",
      specs: [
        { label: "Sourcing", val: "FPO Partner Networks" },
        { label: "Compliance", val: "Q-Commerce Ready" },
        { label: "Traceability", val: "Origin Code Scan" },
      ],
    },
    {
      src: "/videos/macroinspection.mp4",
      tag: "02 . FARMER ADVISORY",
      title: "ImKisan Digital Ecosystem",
      desc: "Empowering growers with science-backed crop advisory, localized crop calendars, and real-time market pricing ledger updates to maximize productivity and harvest value.",
      specs: [
        { label: "Partnership", val: "ICAR-DOGR Advisor" },
        { label: "Updates", val: "Real-Time Mandi Rates" },
        { label: "Scheduling", val: "Predictive Crop Cycle" },
      ],
    },
    {
      src: "/videos/sortingbelt.mp4",
      tag: "03 . YIELD LIQUIDATION",
      title: "Assured Crop Offtake",
      desc: "Eliminating post-harvest crop wastage by assuring farmers a complete liquidation of all grades (A, B, and C) to our diverse institutional bulk buyer network.",
      specs: [
        { label: "Wastage", val: "Under 3% Grading Losses" },
        { label: "Payment", val: "Fastest Direct Transfer" },
        { label: "Pricing", val: "Better-than-Market Rates" },
      ],
    },
    {
      src: "/videos/truck_vegetable.mp4",
      tag: "04 . FULFILLMENT NETWORK",
      title: "Smart Cold-Chain Logistics",
      desc: "Managing temperature-controlled active reefer fleets to transport produce from farm gates directly to distribution centers and dark stores with zero temperature spikes.",
      specs: [
        { label: "Fleet", val: "Reefer Logistics Trucks" },
        { label: "Speed", val: "Direct Farm to Hub Transit" },
        { label: "Efficiency", val: "Quick Decanting Windows" },
      ],
    },
  ] as const;

  return (
    <section
      id="what-is-mulyam"
      className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center py-28 px-6 overflow-hidden z-30"
      aria-label="What is Mulyam — Strategic overview"
    >
      {/* ── Section Header (Solid White Typography Above) ──────────────────── */}
      <div className="text-center mb-20 z-10 flex flex-col items-center">
        <h2 className="font-black text-5xl md:text-7xl text-white tracking-tight uppercase leading-none font-sans">
          What Is Mulyam?
        </h2>
        <div className="h-1.5 w-24 bg-mulyam-green mt-6 rounded-full" />
      </div>

      {/* ── Structured 2x2 Grid Layout (No overlaps, straight cards) ──────── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={hoverAnimation}
            transition={springTransition}
            className="group flex flex-col gap-5 w-full pointer-events-auto cursor-pointer"
          >
            {/* Video Container */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full pointer-events-none group-hover:scale-[1.02] transition-transform duration-500"
                src={card.src}
              />
            </div>

            {/* Info Block (Underneath the Video) */}
            <div className="flex flex-col gap-3 px-1">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-mulyam-green font-bold">
                  {card.tag}
                </span>
                <h3 className="font-bold text-xl md:text-2xl text-white font-sans tracking-tight uppercase group-hover:text-mulyam-green transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                {card.desc}
              </p>

              {/* Structured Specifications (CarmoFarm Elegant Layout) */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-4 border-t border-white/5">
                {card.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-white truncate">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
