import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  webmSrc: string;
  mp4Src: string;
  posterSrc?: string;
}

function LazyVideo({ webmSrc, mp4Src, posterSrc, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      preload="none"
      poster={posterSrc}
      {...props}
    >
      {isIntersecting && (
        <>
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </>
      )}
    </video>
  );
}

export default function WhatIsMulyam() {

  const hoverAnimation = { y: -8 };
  const springTransition = { type: "spring" as const, stiffness: 300, damping: 24 };

  const cards = [
    {
      src: "/videos/droneshot.mp4",
      poster: "/videos/droneshot-poster.jpg",
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
      poster: "/videos/macroinspection-poster.jpg",
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
      poster: "/videos/sortingbelt-poster.jpg",
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
      poster: "/videos/truck_vegetable-poster.jpg",
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
              <LazyVideo
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full pointer-events-none group-hover:scale-[1.02] transition-transform duration-500"
                webmSrc={card.src.replace(".mp4", ".webm")}
                mp4Src={card.src}
                posterSrc={card.poster}
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
