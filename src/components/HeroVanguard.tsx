import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroVanguard() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section className="w-screen h-screen overflow-hidden relative bg-black select-none" aria-label="Mulyam — India's leading fresh produce supply chain">
      {/* Visually hidden SEO description for crawlers */}
      <p className="sr-only">
        Mulyam Agronomics is India's most trusted B2B fresh produce procurement partner for quick commerce platforms, modern trade chains, and institutional buyers. We manage farm-to-store cold-chain logistics with under 2% wastage across 25+ cities.
      </p>
      {/* 1. Full-Bleed Media Canvas Layer */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        poster="/videos/hero-logistics-poster.jpg"
      >
        <source src="/videos/hero-logistics.webm" type="video/webm" />
        <source src="/videos/hero-logistics.mp4" type="video/mp4" />
      </video>

      {/* 2. Center-Stage Interactive Typography Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, y: 40, letterSpacing: "0.15em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "-0.05em" }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 3.8, // Triggers exactly as preloader finishes sliding out
          }}
        >
          {/* Background Layer: Hollow text outline + soft semi-transparent backing fill */}
          <h1
            className="font-sans font-extrabold text-7xl sm:text-8xl md:text-[11rem] text-white/25 uppercase leading-none"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.85)",
            }}
          >
            Mulyam
          </h1>

          {/* Foreground Layer: Filled text revealed by clip-path circle spotlight */}
          <h1
            className="absolute inset-0 font-sans font-extrabold text-7xl sm:text-8xl md:text-[11rem] text-white uppercase leading-none pointer-events-none select-none"
            style={{
              WebkitTextStroke: "2px #ffffff",
              clipPath: isHovered
                ? `circle(120px at ${mousePos.x}px ${mousePos.y}px)`
                : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
              transition: isHovered ? "none" : "clip-path 0.15s ease-out",
            }}
          >
            Mulyam
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
