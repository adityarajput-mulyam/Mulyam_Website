import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import imFreshLogo from "../../assets/logos/imfresh.png";
import imKisanLogo from "../../assets/logos/im_kisan.png";

export default function EcosystemHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position as hero section scrolls up out of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring dynamics
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  // 1. CARDS SPLIT & ZOOM OUTWARD AS USER SCROLLS DOWN
  const leftCardXTransform = useTransform(smoothProgress, [0, 0.7], ["0%", "-160%"]);
  const rightCardXTransform = useTransform(smoothProgress, [0, 0.7], ["0%", "160%"]);
  
  const leftCardX = isMobile ? "0%" : leftCardXTransform;
  const rightCardX = isMobile ? "0%" : rightCardXTransform;
  
  const cardScale = useTransform(smoothProgress, [0, 0.7], [1, 1.12]);

  // 2. CONNECTING LINE FADES OUT
  const lineOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#F9F9F6] flex flex-col justify-between overflow-hidden pt-20 pb-0 z-10">
      
      {/* --- CUSTOM SVG BACKGROUND CANVAS --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg 
          className="w-full h-full object-cover" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Off-white Canvas Background */}
          <rect width="1440" height="800" fill="#F9F9F6" />
          
          {/* Background Field Layer (Lightest) */}
          <path 
            d="M0 600 Q 300 550, 720 600 T 1440 580 L 1440 800 L 0 800 Z" 
            fill="#E8ECD7" 
          />
          
          {/* Midground Field Layer */}
          <path 
            d="M0 650 Q 400 680, 800 620 T 1440 650 L 1440 800 L 0 800 Z" 
            fill="#D2DCA3" 
          />
          
          {/* Foreground Field Layer (Darkest) */}
          <path 
            d="M0 720 Q 500 700, 900 750 T 1440 700 L 1440 800 L 0 800 Z" 
            fill="#88A064" 
          />
        </svg>
      </div>

      {/* --- CENTERED HERO CONTENT CONTAINER --- */}
      <div className="w-full max-w-7xl mx-auto px-6 relative flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between z-10 py-16 gap-8 lg:gap-0">
        
        {/* SVG CONNECTING BEZIER LINE */}
        <motion.svg 
          style={{ opacity: lineOpacity }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden lg:block" 
          viewBox="0 0 1200 400" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="brandGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004B8B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00BD67" stopOpacity="1" />
              <stop offset="100%" stopColor="#00BD67" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Clean Bezier Line connecting I'mFresh (left) to ImKisan (right) */}
          <path
            d="M 220,200 C 450,130 750,270 980,200"
            fill="none"
            stroke="url(#brandGradientLine)"
            strokeWidth="3.5"
            strokeDasharray="8 8"
          />

          {/* Animated Glowing Data Stream */}
          <motion.path
            d="M 220,200 C 450,130 750,270 980,200"
            fill="none"
            stroke="#00BD67"
            strokeWidth="6"
            strokeDasharray="50 180"
            initial={{ strokeDashoffset: 460 }}
            animate={{ strokeDashoffset: -460 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
          />
        </motion.svg>

        {/* LEFT CARD: I'mFresh (SLIGHTLY REDUCED LOGO SCALE FOR ELEGANT BALANCE) */}
        <motion.div 
          style={{ x: leftCardX, scale: cardScale }}
          className="w-72 sm:w-[350px] relative z-10 bg-white/95 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.07)] flex flex-col items-center justify-center group"
        >
          <div className="absolute -top-3.5 left-8 bg-[#004B8B] text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm z-20">
            RETAIL ECOSYSTEM
          </div>
          
          <div className="w-full aspect-[4/3] flex items-center justify-center p-3 overflow-hidden rounded-2xl bg-white">
            <img 
              src={imFreshLogo} 
              alt="I'mFresh Logo" 
              className="w-full h-full object-contain mix-blend-multiply scale-95 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* RIGHT CARD: ImKisan (SLIGHTLY REDUCED LOGO SCALE FOR ELEGANT BALANCE) */}
        <motion.div 
          style={{ x: rightCardX, scale: cardScale }}
          className="w-72 sm:w-[350px] relative z-10 bg-white/95 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.07)] flex flex-col items-center justify-center group"
        >
          <div className="absolute -top-3.5 right-8 bg-[#00BD67] text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm z-20">
            GROWER ECOSYSTEM
          </div>
          
          <div className="w-full aspect-[4/3] flex items-center justify-center p-3 overflow-hidden rounded-2xl bg-white">
            <img 
              src={imKisanLogo} 
              alt="ImKisan Logo" 
              className="w-full h-full object-contain mix-blend-multiply scale-95 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
}
