import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  active: boolean;
  suffix?: string;
}

function Counter({ value, active, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    const start = 0;
    const end = value;
    const duration = 1200;
    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * (end - start) + start);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, active]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

/* ── Shared Review Card Component ── */
interface ReviewData {
  readonly initials: string;
  readonly avatarBg: string;
  readonly name: string;
  readonly role: string;
  readonly headline: string;
  readonly body: string;
}

function ReviewCard({ rev }: { rev: ReviewData }) {
  return (
    <article className="min-w-[320px] max-w-[350px] bg-white border-2 border-slate-900 rounded-2xl p-6 flex-shrink-0 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
      {/* Author row */}
      <div className="flex items-center gap-3">
        <div
          style={{ backgroundColor: rev.avatarBg }}
          className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-sm text-white select-none shadow-sm"
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
        &ldquo;{rev.body}&rdquo;
      </p>
    </article>
  );
}

export default function CapabilitiesSnap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isSlide2Active, setIsSlide2Active] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setIsSlide2Active(latest >= 0.28 && latest <= 0.82);
    });
  }, [scrollYProgress]);

  const y2 = useTransform(scrollYProgress, [0.15, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.95], ["100%", "0%"]);

  // --- Scroll-bound Heading Animations ---
  const s1HeadingY = useTransform(scrollYProgress, [0, 0.25], [0, -35]);
  const s1HeadingOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);  const s2HeadingY = useTransform(scrollYProgress, [0.15, 0.38, 0.6, 0.85], [35, 0, 0, -35]);
  const s2HeadingOpacity = useTransform(scrollYProgress, [0.15, 0.32, 0.62, 0.82], [0, 1, 1, 0]);
  const reviews: readonly ReviewData[] = [
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
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250vh] bg-[#0a0a0a]"
    >
      {/* Pinned Sticky Viewport Shell */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-transparent">
        
        {/* ── Slide 1 — Clean White Sourcing Layer ──── */}
        <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center px-6 overflow-hidden bg-white">

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Column: Text & Specs */}
            <div className="flex flex-col gap-6">
              <motion.div 
                style={{ y: s1HeadingY, opacity: s1HeadingOpacity }}
                className="flex flex-col gap-4"
              >
                <span className="font-sans font-black text-5xl leading-none text-mulyam-yellow select-none block w-fit">
                  01
                </span>
                <h2 className="font-black text-4xl md:text-5xl text-mulyam-blue tracking-tighter uppercase leading-[1.1] font-sans">
                  Most Trusted B2B Partner <br />
                  for Quick Commerce
                </h2>
                <div className="h-1.5 w-24 bg-mulyam-green rounded-full" />
              </motion.div>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl font-medium mt-2">
                Mulyam is the leading fresh produce procurement partner for top-tier quick commerce networks, modern trade chains, and bulk institutional buyers. We eliminate supply bottlenecks by managing high-volume daily shipments directly from farms to dark stores with absolute precision.
              </p>

              {/* Structured Specifications */}
              <div className="grid grid-cols-3 gap-4 mt-2 pt-6 border-t border-mulyam-blue/10 max-w-md">
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
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-mulyam-blue/15 shadow-2xl">
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

        {/* ── Slide 2 — Clean Light Gray SCM Control Center Dashboard ──────── */}
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 w-full h-full bg-slate-50 flex items-center justify-center z-20 px-6 shadow-[0_-30px_60px_rgba(0,0,0,0.12)]"
          role="region"
          aria-label="Mulyam SCM Control Console"
        >
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Column: Metrics Info */}
            <div className="flex flex-col gap-6 z-10">
              <motion.div 
                style={{ y: s2HeadingY, opacity: s2HeadingOpacity }}
                className="flex flex-col gap-4"
              >
                <span className="font-sans font-black text-5xl leading-none text-mulyam-yellow select-none block w-fit">
                  02
                </span>
                <h2 className="font-black text-4xl md:text-5xl text-mulyam-blue tracking-tighter uppercase leading-[1.1] font-sans">
                  Our Impact <br />in Numbers
                </h2>
                <div className="h-1.5 w-24 bg-mulyam-yellow rounded-full" />
              </motion.div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-4 mt-2 max-w-md">
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-green block">
                    <Counter value={4950} active={isSlide2Active} suffix="+ MT" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-450 uppercase">
                    Monthly Volume
                  </span>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-blue block">
                    <Counter value={3000} active={isSlide2Active} suffix="+" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-450 uppercase">
                    Suppliers Network
                  </span>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-green block">
                    <Counter value={25} active={isSlide2Active} suffix="+" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-450 uppercase">
                    Cities Covered
                  </span>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className="font-sans font-black text-2xl text-mulyam-blue block">
                    <Counter value={1000} active={isSlide2Active} suffix="+" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-450 uppercase">
                    Retailer Partners
                  </span>
                </div>
              </div>

              {/* Structured Specs */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-150 max-w-md">
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

            {/* Right Column: Telemetry Chart Block */}
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

                  <motion.path
                    d="M 10 110 Q 75 95 150 65 T 290 20"
                    fill="none"
                    stroke="#00BD67"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isSlide2Active ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.circle cx="10" cy="110" r="4.5" fill="#004B8B"
                    style={{ transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box" }}
                    initial={{ scale: 0 }}
                    animate={isSlide2Active ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  />
                  <motion.circle cx="150" cy="65" r="4.5" fill="#004B8B"
                    style={{ transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box" }}
                    initial={{ scale: 0 }}
                    animate={isSlide2Active ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  />
                  <motion.circle cx="290" cy="20" r="5.5" fill="#00BD67"
                    style={{ transform: "none", transformOrigin: "50% 50%", transformBox: "fill-box" }}
                    initial={{ scale: 0 }}
                    animate={isSlide2Active ? { scale: [1, 1.4, 1] } : { scale: 0 }}
                    transition={{ 
                      scale: { delay: 1.4, type: "spring", stiffness: 200 },
                      default: { delay: 1.4 }
                    }}
                  />
                </svg>

                <div className="absolute top-3 left-4 text-[10px] font-mono font-bold text-slate-400">1,200 MT Sourcing Base</div>
                <div className="absolute bottom-3 right-4 text-[11px] font-mono font-bold text-mulyam-green">4,950+ MT Actual Scale</div>
              </div>

              {/* Mini logs */}
              <div className="flex flex-col gap-2 bg-slate-50 border border-slate-100 rounded-xl p-3 text-[11px] font-mono text-slate-500">
                <div className="flex justify-between">
                  <span>[SCM ROOT ADAPTOR]</span>
                  <motion.span
                    animate={isSlide2Active ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-slate-800 font-bold"
                  >
                    CONNECTING... OK
                  </motion.span>
                </div>
                <div className="flex justify-between">
                  <span>[FLEET DISPATCH LEDGER]</span>
                  <span className="text-mulyam-green flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-mulyam-green rounded-full animate-pulse" />
                    <span>42 ACTIVE REEFERS ON-ROUTE</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Slide 3 — Warm Editorial Cream Testimonials ────── */}
        <motion.div
          style={{
            y: y3,
            background: "#ffffff",
          }}
          className="absolute inset-0 w-full h-full flex flex-col justify-center z-30 px-6 overflow-hidden"
          role="region"
          aria-label="Customer testimonials"
        >
          {/* Soft radial green glow top-right (no filter:blur — pre-softened gradient) */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-30%",
              right: "-20%",
              width: "1200px",
              height: "1200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,189,103,0.07) 0%, rgba(0,189,103,0.02) 30%, transparent 55%)",
            }}
          />
          {/* Soft golden accent bottom-left (no filter:blur — pre-softened gradient) */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-25%",
              left: "-15%",
              width: "900px",
              height: "900px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,196,0,0.05) 0%, rgba(255,196,0,0.01) 30%, transparent 55%)",
            }}
          />

          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
            
            {/* Header Block */}
            <motion.div 
              className="flex flex-col gap-4 text-center items-center"
            >
              <span className="font-sans font-black text-5xl leading-none text-mulyam-yellow select-none block w-fit">
                03
              </span>
              <h2 className="font-black text-4xl md:text-5xl text-mulyam-blue tracking-tighter uppercase leading-none font-sans">
                What People Say About Mulyam
              </h2>
              <div className="h-1.5 w-24 bg-mulyam-blue rounded-full mt-2" />
            </motion.div>

             {/* Testimonials Marquee Track */}
            <div className="w-full overflow-hidden relative mt-4">
              {/* Fade Overlays — matching cream background */}
              <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
              <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

              <div className="flex w-max gap-6 animate-marquee-reviews hover:[animation-play-state:paused] py-4">
                
                {/* Track 1 */}
                <div className="flex gap-6">
                  {reviews.map((rev, idx) => (
                    <ReviewCard key={`rev-1-${idx}`} rev={rev} />
                  ))}
                </div>

                {/* Track 2: Duplicate for seamless loop */}
                <div className="flex gap-6" aria-hidden="true">
                  {reviews.map((rev, idx) => (
                    <ReviewCard key={`rev-2-${idx}`} rev={rev} />
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
