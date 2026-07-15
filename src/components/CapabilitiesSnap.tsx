import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CapabilitiesSnap() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slide transitions with plateaus:
  // Slide 1: Static base layer (visible immediately, no empty black space).
  // Slide 2: Slides up over Slide 1 between 15% and 50% scroll progress.
  // Slide 2: 50% to 60% static.
  // Slide 3: Slides up over Slide 2 between 60% and 95% scroll progress.
  const y2 = useTransform(scrollYProgress, [0.15, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.95], ["100%", "0%"]);

  const reviews = [
    {
      initials: "SC",
      avatarBg: "#00BD67",
      name: "Sourcing Manager",
      role: "Leading Q-Commerce Platform",
      headline: "Streamlined SCM Fulfillment",
      body: "Mulyam's tech-enabled routing systems and strict quality controls have fully streamlined our fresh produce procurement. Their post-harvest grading guarantees that every delivery meets our quick-commerce operational guidelines.",
    },
    {
      initials: "MR",
      avatarBg: "#FFC400",
      name: "Mahesh R.",
      role: "FPO Director, Maharashtra",
      headline: "Science-Backed Crop Advisory",
      body: "ImKisan has completely changed how our FPO schedules planting. The ICAR-DOGR weather insights and daily mandi rates help us negotiate fairer prices and avoid overproduction.",
    },
    {
      initials: "SK",
      avatarBg: "#00BD67",
      name: "Sanjay K.",
      role: "Grower Partner, Nashik",
      headline: "Guaranteed Harvest Offtake",
      body: "With Mulyam, we sell all grades of our onion and potato harvests in one go. Assured payments within 24 hours keep our farm cash flow highly stable and eliminate middleman commissions.",
    },
    {
      initials: "VS",
      avatarBg: "#E11D48",
      name: "Vikram S.",
      role: "Category Manager, Retail Chain",
      headline: "Consistent Cold-Chain Logistics",
      body: "Managing supply chain fulfillment for perishable vegetables was a massive headache until we integrated I'mFresh. Their cold-chain consistency and origin traceability are unmatched.",
    },
  ] as const;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250vh] bg-[#0a0a0a] select-none"
    >
      {/* Pinned Sticky Viewport Shell */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-transparent">
        
        {/* ── Slide 1 (Static Base Layer - Sourcing Layer with YT Video) ──── */}
        <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center z-10 px-6">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text & Specs */}
            <div className="flex flex-col gap-6">
              <span className="font-sans font-black text-5xl leading-none text-mulyam-yellow select-none block w-fit">
                01
              </span>
              
              <h2 className="font-black text-4xl md:text-5xl text-mulyam-blue tracking-tighter uppercase leading-[0.95] font-sans">
                Most Trusted B2B Partner <br />
                for Quick Commerce
              </h2>
              
              <div className="h-1.5 w-24 bg-mulyam-green rounded-full" />
              
              <p className="text-slate-655 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Mulyam is the leading fresh produce procurement partner for top-tier quick commerce networks, modern trade chains, and bulk institutional buyers. We eliminate supply bottlenecks by managing high-volume daily shipments directly from farms to dark stores with absolute precision.
              </p>

              {/* Structured Specifications */}
              <div className="grid grid-cols-3 gap-4 mt-2 pt-6 border-t border-slate-100 max-w-md">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Operational SLA</span>
                  <span className="text-xs font-bold text-mulyam-blue">99.8% On-Time SCM</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Wastage Margin</span>
                  <span className="text-xs font-bold text-mulyam-blue">Under 2% Losses</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Sourcing Base</span>
                  <span className="text-xs font-bold text-mulyam-blue">3,000+ Farmers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded YouTube Video */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200 shadow-2xl">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/GLTLQU6xbII?start=27"
                title="Mulyam Agritech Startup Explainer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        </div>

        {/* ── Slide 2 (Slides up over Slide 1 - Dashboard Telemetry) ──────── */}
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 w-full h-full bg-slate-50 flex items-center justify-center z-20 px-6 shadow-[0_-30px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Metrics Info */}
            <div className="flex flex-col gap-6">
              <span className="font-sans font-black text-5xl leading-none text-mulyam-yellow select-none block w-fit">
                02
              </span>
              
              <h2 className="font-black text-4xl md:text-5xl text-mulyam-blue tracking-tighter uppercase leading-[0.95] font-sans">
                Our Impact in Numbers
              </h2>
              
              <div className="h-1.5 w-24 bg-mulyam-yellow rounded-full" />
              
              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-4 mt-2 max-w-md">
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-green block">4,950+ MT</span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Monthly Volume</span>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-blue block">3,000+</span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Suppliers Network</span>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-green block">25+</span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Cities Covered</span>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-blue block">1,000+</span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Retailer Partners</span>
                </div>
              </div>

              {/* Structured Specs */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-md">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Active Cities</span>
                  <span className="text-xs font-bold text-mulyam-blue">National Scope</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Growth Rate</span>
                  <span className="text-xs font-bold text-mulyam-blue">3.5x YoY Expansion</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Advisory</span>
                  <span className="text-xs font-bold text-mulyam-blue">ICAR DOGR Partner</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Telemetry Chart Block */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800">TELEMETRY PLATFORM</span>
                  <span className="text-[10px] font-mono text-slate-400">DEMAND-LED SOURCING LEDGER</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-mulyam-green bg-mulyam-green/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-mulyam-green rounded-full animate-ping" />
                  LIVE LINKED
                </span>
              </div>

              {/* Simulated Vector Graph */}
              <div className="relative w-full h-44 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden flex items-end p-4">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <line x1="0" y1="30" x2="300" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="90" x2="300" y2="90" stroke="#f1f5f9" strokeWidth="1" />
                  
                  <path
                    d="M 10 110 Q 75 95 150 65 T 290 20"
                    fill="none"
                    stroke="#00BD67"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  
                  <circle cx="10" cy="110" r="4.5" fill="#004B8B" />
                  <circle cx="150" cy="65" r="4.5" fill="#004B8B" />
                  <circle cx="290" cy="20" r="5.5" fill="#00BD67" className="animate-pulse" />
                </svg>

                <div className="absolute top-3 left-4 text-[10px] font-mono font-bold text-slate-400">1,200 MT Sourcing Base</div>
                <div className="absolute bottom-3 right-4 text-[11px] font-mono font-bold text-mulyam-green">4,950+ MT Actual Scale</div>
              </div>

              {/* Mini logs */}
              <div className="flex flex-col gap-2 bg-slate-50 border border-slate-100 rounded-xl p-3 text-[11px] font-mono text-slate-500">
                <div className="flex justify-between">
                  <span>[SCM ROOT ADAPTOR]</span>
                  <span className="text-slate-800">CONNECTING... OK</span>
                </div>
                <div className="flex justify-between">
                  <span>[FLEET DISPATCH LEDGER]</span>
                  <span className="text-mulyam-green">42 ACTIVE REEFERS ON-ROUTE</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Slide 3 (Slides up over Slide 2 - White Theme) ────── */}
        <motion.div
          style={{ y: y3 }}
          className="absolute inset-0 w-full h-full bg-white flex flex-col justify-center z-30 px-6 shadow-[0_-30px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
            
            {/* Header Block */}
            <div className="flex flex-col gap-4 text-center items-center">
              <span className="font-sans font-black text-5xl leading-none text-mulyam-yellow select-none block w-fit">
                03
              </span>
              <h2 className="font-black text-4xl md:text-5xl text-mulyam-blue tracking-tighter uppercase leading-none font-sans">
                What People Say About Mulyam
              </h2>
              <div className="h-1.5 w-24 bg-mulyam-blue rounded-full" />
            </div>

            {/* Testimonials Marquee Track (clean white cards) */}
            <div className="w-full overflow-hidden relative mt-4">
              <div className="flex w-max gap-6 animate-marquee-reviews hover:[animation-play-state:paused] py-4">
                
                {/* Track 1: First iteration */}
                <div className="flex gap-6">
                  {reviews.map((rev, idx) => (
                    <article
                      key={`rev-1-${idx}`}
                      className="min-w-[320px] max-w-[350px] bg-white border-2 border-slate-900 rounded-2xl p-6 flex-shrink-0 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
                    >
                      {/* Author row */}
                      <div className="flex items-center gap-3">
                        <div
                          style={{ backgroundColor: rev.avatarBg }}
                          className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-sm text-white select-none"
                        >
                          {rev.initials}
                        </div>
                        <div>
                          <div className="font-sans font-bold text-xs uppercase tracking-tight text-slate-900">
                            {rev.name}
                          </div>
                          <div className="font-sans text-[10px] uppercase tracking-tight text-slate-500 font-semibold">
                            {rev.role}
                          </div>
                          <span className="text-[10px] text-mulyam-yellow">★ ★ ★ ★ ★</span>
                        </div>
                      </div>
                      {/* Divider */}
                      <div className="border-t-2 border-slate-900" />
                      {/* Headline highlight */}
                      <h3 className="font-sans font-black text-xs uppercase tracking-wide bg-mulyam-yellow text-slate-900 px-2 py-1 rounded w-fit">
                        {rev.headline}
                      </h3>
                      {/* Body */}
                      <p className="font-sans text-xs font-medium text-slate-700 leading-relaxed">
                        "{rev.body}"
                      </p>
                    </article>
                  ))}
                </div>

                {/* Track 2: Duplicate for seamless looping */}
                <div className="flex gap-6" aria-hidden="true">
                  {reviews.map((rev, idx) => (
                    <article
                      key={`rev-2-${idx}`}
                      className="min-w-[320px] max-w-[350px] bg-white border-2 border-slate-900 rounded-2xl p-6 flex-shrink-0 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          style={{ backgroundColor: rev.avatarBg }}
                          className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-sm text-white select-none"
                        >
                          {rev.initials}
                        </div>
                        <div>
                          <div className="font-sans font-bold text-xs uppercase tracking-tight text-slate-900">
                            {rev.name}
                          </div>
                          <div className="font-sans text-[10px] uppercase tracking-tight text-slate-500 font-semibold">
                            {rev.role}
                          </div>
                          <span className="text-[10px] text-mulyam-yellow">★ ★ ★ ★ ★</span>
                        </div>
                      </div>
                      <div className="border-t-2 border-slate-900" />
                      <h3 className="font-sans font-black text-xs uppercase tracking-wide bg-mulyam-yellow text-slate-900 px-2 py-1 rounded w-fit">
                        {rev.headline}
                      </h3>
                      <p className="font-sans text-xs font-medium text-slate-700 leading-relaxed">
                        "{rev.body}"
                      </p>
                    </article>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
