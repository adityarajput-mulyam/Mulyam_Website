import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Quote, Leaf, Cpu, Coins, ShieldCheck } from "lucide-react";

// Import local WebP and PNG assets
import farmParallax from "../assets/farm_parallax.png";
import leaderYogesh from "../assets/leader_yogesh.webp";
import leaderMahesh from "../assets/leader_mahesh.webp";
import leaderPreetesh from "../assets/leader_preetesh.webp";
import leaderSameer from "../assets/leader_sameer.webp";
import leaderRishabh from "../assets/leader_rishabh.webp";
import leaderVivek from "../assets/leader_vivek.webp";
import leaderRahul from "../assets/leader_rahul.webp";
import agriMarquee1 from "../assets/agri_marquee1.png";
import agriMarquee2 from "../assets/agri_marquee2.png";
import foundersImage from "../assets/founders.webp";

// Sequential Word Reveal Component
function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };
  
  const wordVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.h1 
      variants={containerVars}
      initial="initial"
      animate="animate"
      className={className}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-2 md:mr-3">
          <motion.span variants={wordVars} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

// Magnetic Button Component
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, elastic: 0.1, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    const strength = 0.28;
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// Card Active/Inactive Animation Variants
const cardVariants = {
  inactive: {
    scale: 0.93,
    opacity: 0.35,
    filter: "grayscale(30%) blur(0.5px)",
    borderColor: "rgba(226, 232, 240, 0.4)",
    boxShadow: "2px 2px 0px 0px rgba(0, 0, 0, 0.05)",
    transition: { type: "spring" as any, stiffness: 100, damping: 20 }
  },
  active: {
    scale: 1.0,
    opacity: 1.0,
    filter: "grayscale(0%) blur(0px)",
    borderColor: "#00BD67",
    boxShadow: "8px 8px 0px 0px rgba(0, 189, 103, 0.35)",
    transition: { type: "spring" as any, stiffness: 180, damping: 12 } // spring bounce!
  }
};

export default function About() {
  const quoteSectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Parallax calculations for the Quote section background
  const { scrollYProgress } = useScroll({
    target: quoteSectionRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  // Scroll tracking for Central String timeline
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const timelinePathLength = useSpring(timelineScroll, { stiffness: 65, damping: 15 });

  const [activeIndex, setActiveIndex] = useState(-1);
  useMotionValueEvent(timelineScroll, "change", (latest) => {
    if (latest < 0.08) {
      setActiveIndex(-1);
    } else if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.58) {
      setActiveIndex(1);
    } else if (latest < 0.83) {
      setActiveIndex(2);
    } else {
      setActiveIndex(3);
    }
  });

  const timelineHeight = useTransform(timelinePathLength, [0, 1], ["0%", "100%"]);

  // Core leadership (Top Row)
  const coreLeaders = [
    {
      name: "Yogesh Kedari",
      title: "Founder & CEO",
      roleDesc: "18+ years of agribusiness experience across agritech, supply chain category operations, and trade financing. Ex-DeHaat (procurement/sourcing lead), Ex-NCDEX, and Ex-StarAgri. Drives corporate strategy.",
      image: leaderYogesh,
      badge: "Founder",
      linkedin: "https://linkedin.com/in/yogesh-kedari-mulyam"
    },
    {
      name: "Mahesh Kedari",
      title: "Co-Founder & COO",
      roleDesc: "12+ years managing high-volume warehouse operations, cold chain logistics grids, and food safety compliance. Spearheads daily ground logistics and sourcing fulfillment.",
      image: leaderMahesh,
      badge: "Founder",
      linkedin: "https://linkedin.com/in/mahesh-kedari-mulyam"
    },
    {
      name: "Preetesh Dutt",
      title: "Head of Tech & Product",
      roleDesc: "10+ years designing enterprise B2B SaaS, automated agricultural bidding engines, and logistics dashboards. Alumnus of DeHaat and Snapdeal. Directs the product roadmap.",
      image: leaderPreetesh,
      badge: "Core Team",
      linkedin: "https://linkedin.com/in/preetesh-dutt-mulyam"
    }
  ];

  // Key operations & division leaders (Bottom Row)
  const strategicLeaders = [
    {
      name: "Sameer",
      title: "Head of Sourcing & FPO Relations",
      roleDesc: "Specializes in building deep relationships with Farmer Producer Organizations (FPOs). Oversees direct farm-gate sourcing programs and collection center networking.",
      image: leaderSameer,
      badge: "Core Team",
      linkedin: "https://linkedin.com/in/sameer-mulyam"
    },
    {
      name: "Vivek",
      title: "Head of BizDev & Partnerships",
      roleDesc: "Manages B2B institutional relationships, modern trade contracts, and quick-commerce dark store linkages. Expands Mulyam's buyer and sales footprint.",
      image: leaderVivek,
      badge: "Core Team",
      linkedin: "https://linkedin.com/in/vivek-mulyam"
    },
    {
      name: "Rishabh",
      title: "Head of Supply Chain & Fulfillment",
      roleDesc: "Coordinates automated warehousing systems, sorting compliance lines, and last-mile dispatch networks to guarantee daily freshness and under 2% transit loss.",
      image: leaderRishabh,
      badge: "Core Team",
      linkedin: "https://linkedin.com/in/rishabh-mulyam"
    },
    {
      name: "Rahul",
      title: "Head of Finance & Credit Enablement",
      roleDesc: "Manages trade finance solutions, transparent invoice discounting, working capital facilities, and audit systems for both growers and institutional partners.",
      image: leaderRahul,
      badge: "Core Team",
      linkedin: "https://linkedin.com/in/rahul-mulyam"
    }
  ];

  const timelineNodes = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#004B8B] dark:text-[#FFC400]" />,
      title: "Restructuring Ag-Trade Distribution",
      desc: "We eliminate highly fragmented, multi-tiered intermediary networks, securing fair value distribution directly for farm-gate growers and stable pricing for commercial buyers."
    },
    {
      icon: <Leaf className="h-6 w-6 text-[#00BD67]" />,
      title: "Direct Sourcing Assurance",
      desc: "By cutting intermediate traders, we link institutional demand straight to growers, executing strict multi-stage quality checks at our fulfillment centers."
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#004B8B] dark:text-[#FFC400]" />,
      title: "Tech-Driven Logistics Engine",
      desc: "Our customized SaaS coordinates real-time dispatch, route optimization, and tracking to compress transit windows and keep post-harvest losses below 5%."
    },
    {
      icon: <Coins className="h-6 w-6 text-[#FFC400] dark:text-[#00BD67]" />,
      title: "Trade Finance & Credit Solutions",
      desc: "We clear liquidity bottlenecks for farmers and retailers alike by providing transparent credit terms, digital invoice discounting, and secure trade financing."
    }
  ];

  return (
    <div className="bg-[#F9F9F6] dark:bg-[#0C0F12] min-h-screen antialiased text-slate-800 dark:text-slate-200 transition-colors duration-300 relative">
      
      {/* Dynamic Grid Background Layer (Premium SaaS Aesthetic) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Padding offset for the navigation bar */}
      <div className="pt-16 relative z-10">
        
        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden flex flex-col justify-between min-h-[calc(100vh-4rem)] pt-6 pb-8" aria-label="Mulyam Strategic Mission Introduction">
          <div className="max-w-5xl mx-auto px-6 text-center flex-grow flex flex-col justify-center mb-6">

            {/* Headline with sequential word reveal */}
            <WordReveal 
              text="Reimagining the Fresh Produce Supply Chain for a Sustainable Future"
              className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004B8B] dark:text-white leading-[1.1] tracking-tight max-w-4xl mx-auto mb-4"
            />

            {/* Paragraph Reveal */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-sm md:text-base lg:text-lg text-slate-655 dark:text-slate-350 font-light max-w-2xl mx-auto mb-6 leading-relaxed"
            >
              Mulyam simplifies the fragmented Indian agricultural market. By connecting farmers directly with business buyers, we reduce wastage, secure crop value, and build sustainable food pipelines.
            </motion.p>
          </div>

          {/* Continuous scrolling image marquee */}
          <div className="w-full relative overflow-hidden py-4 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50 mt-auto">
            <div className="flex whitespace-nowrap animate-marquee-horizontal gap-6">
              {[
                agriMarquee1,
                agriMarquee2,
                farmParallax,
                agriMarquee1,
                agriMarquee2,
                farmParallax,
              ].map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  className="w-[200px] sm:w-[260px] md:w-[320px] h-[130px] sm:h-[160px] md:h-[190px] shrink-0 rounded-2xl overflow-hidden shadow-md dark:shadow-none border border-slate-200/50 dark:border-slate-800 transition-transform duration-500 hover:scale-[1.02]"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Mulyam agricultural operations thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2.5 ROOTS & VALUES SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 border-t border-slate-200/50 dark:border-slate-800/50" aria-label="Roots and Core Values">
          {/* Top Row: Roots Narrative & Founders Photo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left Narrative: Roots of Mulyam */}
            <div className="md:col-span-7">
              <span className="font-sans font-black text-xs tracking-widest text-[#004B8B] dark:text-[#FFC400] uppercase block mb-3">
                Origins
              </span>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#004B8B] dark:text-white leading-tight mb-6">
                Roots of Mulyam
              </h2>
              <p className="text-slate-655 dark:text-slate-350 leading-relaxed font-light mb-4 text-sm md:text-base">
                Mulyam's story doesn't start in a boardroom; it begins in the fields of rural India. Founders and brothers, Yogesh and Mahesh Kedari, hail from a farming family. Since childhood, they witnessed firsthand the hard work that goes into agriculture and the persistent challenges farmers face—from unpredictable prices to post-harvest losses.
              </p>
              <p className="text-slate-655 dark:text-slate-350 leading-relaxed font-light text-sm md:text-base">
                After several years of gaining valuable corporate experience, they felt a strong pull to return to their roots. They decided to combine their professional expertise with their innate understanding of agriculture to tackle one of India's most critical problems: the inefficient supply chain for perishable commodities. This is where the idea for Mulyam was born—a mission to restore <span className="text-[#00BD67] font-semibold">"मूल्य"</span> or <span className="text-[#00BD67] font-semibold">"value"</span> where it matters most.
              </p>
            </div>

            {/* Right Side: Founders Photo with Neo-Brutalist Frame */}
            <div className="md:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-white dark:bg-[#12161A] border-2 border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,189,103,0.3)] dark:shadow-[8px_8px_0px_0px_rgba(0,189,103,0.15)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(0,189,103,0.45)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                  <img 
                    src={foundersImage} 
                    alt="Mulyam Founders Yogesh and Mahesh Kedari" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 text-center">
                  <h4 className="font-sans font-extrabold text-sm text-[#004B8B] dark:text-white leading-tight">Yogesh & Mahesh Kedari</h4>
                  <p className="text-[10px] text-[#00BD67] font-semibold tracking-wide mt-1 uppercase">Founders of Mulyam</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. MISSION / "WHAT WE DO" SECTION */}
        <section 
          ref={timelineRef}
          className="max-w-7xl mx-auto px-6 py-20 md:py-32 border-t border-slate-200/50 dark:border-slate-800/50 relative" 
          aria-label="Core Capabilities"
        >
          {/* Section Header (Centered to establish the Central axis string visual start) */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-[#004B8B] dark:text-white uppercase tracking-tight mb-4">
              What We Do
            </h2>
            <div className="h-1.5 w-16 bg-[#00BD67] rounded-full mx-auto mb-6"></div>
            <p className="font-sans font-normal text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We are restoring the true value ("Mulyam") of produce back to growers and buyers alike.
            </p>
          </div>

          {/* Desktop Central axis string timeline layout (Visible on lg screens and up) */}
          <div className="hidden lg:block relative max-w-6xl mx-auto min-h-[960px]">
            
            {/* The Central String (Axis) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-slate-200 dark:bg-slate-800/80 z-0">
              {/* Dynamic green progress line */}
              <motion.div 
                style={{ height: timelineHeight }}
                className="w-full bg-[#00BD67] origin-top"
              />
              
              {/* Perfect Playhead circle dot (centered perfectly on the string using translate(-50%, -50%)) */}
              <motion.div
                style={{ 
                  top: timelineHeight, 
                  left: "50%",
                  x: "-50%",
                  y: "-50%"
                }}
                className="absolute w-4 h-4 rounded-full bg-[#00BD67] border-2 border-white dark:border-[#0C0F12] shadow-[0_0_12px_4px_rgba(0,189,103,0.65)] aspect-square z-20 pointer-events-none"
              />
            </div>

            {/* Timeline alternating rows */}
            <div className="space-y-24 relative z-10">
              
              {timelineNodes.map((node, idx) => {
                const isLeft = idx % 2 === 0;
                const isActive = activeIndex >= idx;

                return (
                  <div key={idx} className="grid grid-cols-12 gap-8 items-center relative h-[180px]">
                    
                    {/* Node Dot on the center string */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-4 h-4 rounded-full border-2 border-slate-350 dark:border-slate-800 bg-white dark:bg-[#0C0F12] flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: isActive ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-2 h-2 rounded-full bg-[#00BD67]"
                        />
                      </div>
                    </div>

                    {/* SVG Connector Shoot Line */}
                    {isLeft ? (
                      /* Left-to-Right Connector (From center line to left card's right edge) */
                      <div className="absolute left-[41.66%] right-[50%] h-[4px] -translate-y-1/2 top-1/2 z-10">
                        <svg className="w-full h-full" viewBox="0 0 100 4" preserveAspectRatio="none">
                          <motion.line
                            x1="100" // center
                            y1="2"
                            x2="100"
                            y2="2"
                            animate={{ x2: isActive ? 0 : 100 }} // shoots from right to left
                            transition={{ type: "spring", stiffness: 120, damping: 14 }}
                            stroke="#00BD67"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      /* Right-to-Left Connector (From center line to right card's left edge) */
                      <div className="absolute left-[50%] right-[41.66%] h-[4px] -translate-y-1/2 top-1/2 z-10">
                        <svg className="w-full h-full" viewBox="0 0 100 4" preserveAspectRatio="none">
                          <motion.line
                            x1="0" // center
                            y1="2"
                            x2="0"
                            y2="2"
                            animate={{ x2: isActive ? 100 : 0 }} // shoots from left to right
                            transition={{ type: "spring", stiffness: 120, damping: 14 }}
                            stroke="#00BD67"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Alternating Cards Grid Columns */}
                    <div className={`col-span-5 ${isLeft ? "col-start-1" : "col-start-8"}`}>
                      <motion.div
                        variants={cardVariants}
                        animate={isActive ? "active" : "inactive"}
                        className="p-6 rounded-2xl bg-white dark:bg-[#12161A] border-2 shadow-md dark:shadow-none transition-colors duration-300 flex flex-col justify-center select-none"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 ${isActive ? "scale-110 rotate-3 border-[#00BD67]/30" : ""}`}>
                            {node.icon}
                          </div>
                          <h4 className="font-sans font-extrabold text-base text-[#004B8B] dark:text-white leading-tight">
                            {node.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                          {node.desc}
                        </p>
                      </motion.div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* Mobile Fallback Layout (Visible on sm/md/lg, hidden on lg and above) */}
          <div className="block lg:hidden max-w-2xl mx-auto">
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800/80 space-y-10">
              {timelineNodes.map((node, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <div className="absolute left-[-30px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#00BD67] border-4 border-white dark:border-[#0C0F12] shadow-[0_0_6px_rgba(0,189,103,0.3)]" />
                  
                  {/* Card content */}
                  <div className="p-5 rounded-xl bg-white dark:bg-[#12161A] border border-slate-200/60 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                        {node.icon}
                      </div>
                      <h4 className="font-sans font-extrabold text-sm text-[#004B8B] dark:text-white leading-tight">
                        {node.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. IMPACT QUOTE SECTION (Parallax) */}
        <section 
          ref={quoteSectionRef} 
          className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden flex items-center justify-center border-y border-slate-200/50 dark:border-slate-800/50"
          aria-label="CEO Impact Statement"
        >
          {/* Parallax Background Div */}
          <motion.div 
            style={{ y: parallaxY }}
            className="absolute top-[-15%] left-0 w-full h-[130%] bg-cover bg-center"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${farmParallax})` }}
            />
            {/* Ambient Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-brightness-[0.75]" />
          </motion.div>

          {/* Foreground Text Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <Quote className="h-12 w-12 text-[#FFC400] opacity-80" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight max-w-3xl mx-auto italic mb-8"
            >
              "Our goal is not just to transport fresh produce. It is to restore the true worth—Mulyam—of every harvest back to the soil and the hands that till it."
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="block font-sans font-extrabold text-sm uppercase tracking-widest text-[#00BD67]">
                Yogesh Kedari
              </span>
              <span className="text-xs text-slate-350 tracking-wider">
                Founder & CEO, Mulyam
              </span>
            </motion.div>
          </div>
        </section>

        {/* 5. LEADERSHIP TEAM SECTION (Hierarchical layout for 7 actual WebP team members) */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32" aria-label="Leadership Team Profiles">
          <div className="max-w-4xl mx-auto mb-20">
            {/* Journey of Growth Intro Block */}
            <div className="text-center mb-16 pb-12 border-b border-slate-200/50 dark:border-slate-800/50">
              <span className="text-[10px] bg-[#FFC400]/10 text-[#004B8B] dark:text-[#FFC400] border border-[#FFC400]/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                Our Growth Story
              </span>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#004B8B] dark:text-white mt-6 mb-6">
                Our Journey of Growth
              </h2>
              <p className="text-sm md:text-base text-slate-655 dark:text-slate-350 leading-relaxed font-light max-w-3xl mx-auto mb-4">
                This deep domain knowledge became our greatest asset. Fueled by the collective experience of a core team—including the strategic expertise of Preetesh, Sameer, Vivek, Rishabh, and Rahul—Mulyam achieved unprecedented growth, scaling from zero to a <span className="text-[#00BD67] font-semibold">200 Cr business in merely 2.5 years</span>.
              </p>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
                Today, our journey is driven by a shared dream: to revolutionize the supply chain of perishable commodities in India, making it more efficient by drastically reducing losses and wastage for a stronger, more sustainable future.
              </p>
            </div>

            {/* Meet the Leadership Head */}
            <div className="text-center">
              <span className="text-[10px] bg-[#00BD67]/10 dark:bg-mulyam-green/20 text-[#00BD67] border border-[#00BD67]/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                Founders & Core Team
              </span>
              <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-[#004B8B] dark:text-white mt-4 mb-4">
                Founders of Mulyam
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
                Founded with the vision to revolutionize the fresh produce supply chain, Mulyam has a rich history of innovation and dedication. Meet the leaders behind the movement.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            
            {/* ROW 1: Founders & Tech Head (3 Column Grid - larger visual footprint) */}
            <div>
              <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 text-center md:text-left border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
                Executive Leadership
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coreLeaders.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -6,
                      // Hard Neo-brutalist shadow expansion (tighter)
                      boxShadow: "6px 6px 0px 0px rgba(0, 189, 103, 0.95)"
                    }}
                    className="group bg-white dark:bg-[#12161A] border-2 border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,75,139,1)] dark:shadow-[4px_4px_0px_0px_rgba(18,22,26,1)] transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Headshot container (changed to aspect-[4/3] landscape for compact vertical fit) */}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                      <img 
                        src={leader.image} 
                        alt={`Portrait of ${leader.name}`} 
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103" 
                      />
                      {/* Badge indicator */}
                      <div className="absolute top-3 left-3 bg-[#FFC400] text-slate-900 font-sans font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                        {leader.badge}
                      </div>
                    </div>

                    {/* Content Panel (reduced padding to p-4) */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-sans font-extrabold text-base md:text-lg text-[#004B8B] dark:text-white leading-tight">
                            {leader.name}
                          </h3>
                          <span className="text-[11px] text-[#00BD67] font-semibold tracking-wider block mt-1">
                            {leader.title}
                          </span>
                        </div>
                        {/* LinkedIn Link */}
                        <a 
                          href={leader.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-[#0077B5] dark:hover:text-[#0077B5] border border-slate-200 dark:border-slate-800 hover:bg-[#edf4fc] dark:hover:bg-[#edf4fc]/10 transition-colors flex items-center justify-center shrink-0"
                          aria-label={`${leader.name}'s LinkedIn profile`}
                        >
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                      
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-2 flex-grow">
                        {leader.roleDesc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ROW 2: Core Division Heads (4 Column Grid - slightly tighter footprint) */}
            <div>
              <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 text-center md:text-left border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
                Operational Core & Strategic Heads
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {strategicLeaders.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "5px 5px 0px 0px rgba(0, 189, 103, 0.9)"
                    }}
                    className="group bg-white dark:bg-[#12161A] border-2 border-slate-200 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,75,139,1)] dark:shadow-[3px_3px_0px_0px_rgba(18,22,26,1)] transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Headshot container (changed to aspect-[4/3] landscape for compact vertical fit) */}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                      <img 
                        src={leader.image} 
                        alt={`Portrait of ${leader.name}`} 
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103" 
                      />
                      <div className="absolute top-2.5 left-2.5 bg-slate-900/60 dark:bg-[#12161A]/80 backdrop-blur-sm text-white dark:text-slate-300 font-sans font-bold text-[8px] uppercase tracking-widest px-2 py-0.5 rounded shadow-sm">
                        {leader.badge}
                      </div>
                    </div>

                    {/* Content Panel (reduced padding to p-4) */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <div>
                          <h3 className="font-sans font-extrabold text-base text-[#004B8B] dark:text-white leading-tight">
                            {leader.name}
                          </h3>
                          <span className="text-[11px] text-[#00BD67] font-semibold tracking-wide block mt-0.5">
                            {leader.title}
                          </span>
                        </div>
                        {/* LinkedIn Link */}
                        <a 
                          href={leader.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-[#0077B5] dark:hover:text-[#0077B5] border border-slate-200 dark:border-slate-800 hover:bg-[#edf4fc] dark:hover:bg-[#edf4fc]/10 transition-colors flex items-center justify-center shrink-0"
                          aria-label={`${leader.name}'s LinkedIn profile`}
                        >
                          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                      
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-2 flex-grow">
                        {leader.roleDesc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 6. CALL TO ACTION (CTA) / JOIN US */}
        <section className="bg-white dark:bg-[#12161A] border-t border-slate-200/60 dark:border-slate-800/80 py-20 md:py-28 relative overflow-hidden" aria-label="Join our team">
          {/* Subtle Ambient green glow */}
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#00BD67]/5 blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#004B8B]/5 dark:bg-[#FFC400]/2 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#004B8B] dark:text-white tracking-tight uppercase leading-[1.1] mb-6"
            >
              Together, we can <span className="text-[#00BD67]">restore the planet.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed font-light"
            >
              Join Mulyam in restructuring agricultural trade, scaling resource productivity, and making zero-waste food distribution a reality.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              {/* Magnetic CTA Button */}
              <MagneticButton 
                onClick={() => window.location.href = "mailto:careers@mulyam.in"}
                className="group flex items-center gap-3 px-8 py-4 bg-[#00BD67] hover:bg-[#00BD67]/90 text-white font-bold text-sm uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200 cursor-pointer"
              >
                <span>See Opportunities</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  <ArrowRight className="h-4.5 w-4.5" />
                </span>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
