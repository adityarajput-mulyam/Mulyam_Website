import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { Quote, TrendingUp, Calendar, Activity } from "lucide-react";

// Import local WebP and PNG assets
import farmParallax from "../assets/farm_parallax.png";
import leaderYogesh from "../assets/leader_yogesh.webp";
import leaderMahesh from "../assets/leader_mahesh.webp";
import leaderPreetesh from "../assets/leader_preetesh.webp";
import leaderSameer from "../assets/leader_sameer.webp";
import leaderRishabh from "../assets/leader_rishabh.webp";
import leaderVivek from "../assets/leader_vivek.webp";
import leaderRahul from "../assets/leader_rahul.webp";
import foundersImage from "../assets/founders.webp";
import distributionIcon from "../assets/distribution.png";
import seedlingIcon from "../assets/seedling.png";
import technologyIcon from "../assets/technology.png";
import financeIcon from "../assets/finance.png";
import mulyamLogoNotext from "../assets/mulyam_logo_transparent_notext.png";



// Card Active/Inactive Animation Variants
const cardVariants = {
  inactive: {
    scale: 0.93,
    opacity: 0.35,
    filter: "grayscale(30%) blur(0.5px)",
    borderColor: "rgba(226, 232, 240, 0.4)",
    boxShadow: "2px 2px 0px 0px rgba(0, 0, 0, 0.05)",
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  },
  active: {
    scale: 1.0,
    opacity: 1.0,
    filter: "grayscale(0%) blur(0px)",
    borderColor: "#00BD67",
    boxShadow: "8px 8px 0px 0px rgba(0, 189, 103, 0.35)",
    transition: { type: "spring" as const, stiffness: 180, damping: 12 } // spring bounce!
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
  const [activeStateIndex, setActiveStateIndex] = useState(0);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  const stateCenterCoords: { [key: number]: [number, number] } = {
    0: [19.5, 75.0], // Maharashtra (Pune/Nashik)
    1: [13.5, 77.8], // Karnataka (Bengaluru)
    2: [28.8, 77.2], // Delhi & Haryana
    3: [26.2, 82.5], // Uttar Pradesh
    4: [17.385, 78.486]  // Telangana (Hyderabad)
  };

  // Sync map center view when selection changes
  useEffect(() => {
    if (mapRef.current && stateCenterCoords[activeStateIndex]) {
      mapRef.current.setView(stateCenterCoords[activeStateIndex], 6.5, {
        animate: true,
        duration: 1.2
      });
    }
  }, [activeStateIndex]);

  // Initialize Leaflet Map from globally loaded Leaflet in index.html
  useEffect(() => {
    const L = (window as any).L;
    if (!L || !mapContainerRef.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
    }

    const map = L.map(mapContainerRef.current, {
      center: [21.5, 78.9],
      zoom: 4.8,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Standard OpenStreetMap Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    // Custom Pin Marker HTML structure using the actual Mulyam Logo PNG
    const mulyamIcon = L.divIcon({
      className: 'custom-mulyam-marker-icon',
      html: `
        <div style="
          position: relative;
          width: 34px;
          height: 34px;
          border-radius: 50% 50% 50% 0;
          background: white;
          transform: rotate(-45deg);
          box-shadow: -1px 3px 6px rgba(0,0,0,0.3);
          border: 2.5px solid #004B8B;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="transform: rotate(45deg); display: flex; align-items: center; justify-content: center; width: 22px; height: 22px;">
            <img src="${mulyamLogoNotext}" style="width: 100%; height: 100%; object-fit: contain;" alt="Mulyam" />
          </div>
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 34]
    });

    // Markers list matched to activeStateIndex
    const markers = [
      { name: "Pune Head Office", stateIdx: 0, coords: [18.5204, 73.8567] },
      { name: "Theur Phata Collection Center", stateIdx: 0, coords: [18.5250, 74.0500] },
      { name: "Kalamb Collection Center", stateIdx: 0, coords: [19.0500, 73.9500] },
      { name: "Punavale Distribution Hub", stateIdx: 0, coords: [18.6181, 73.7483] },
      { name: "Nashik (Chandori) Sourcing Center", stateIdx: 0, coords: [20.0350, 74.0150] },
      { name: "Malur Distribution Center", stateIdx: 1, coords: [13.0100, 77.9400] },
      { name: "Sannatammanahalli Fulfillment Hub", stateIdx: 1, coords: [13.0600, 77.8100] },
      { name: "Chikkaballapura Sourcing Center", stateIdx: 1, coords: [13.4300, 77.7300] },
      { name: "Delhi Distribution Center", stateIdx: 2, coords: [28.6139, 77.2090] },
      { name: "Sonipat Sourcing & Distribution", stateIdx: 2, coords: [28.9931, 77.0151] },
      { name: "Lucknow Sourcing Center", stateIdx: 3, coords: [26.8467, 80.9462] },
      { name: "Varanasi Distribution Hub", stateIdx: 3, coords: [25.3176, 82.9739] },
      { name: "Gorakhpur Collection Center", stateIdx: 3, coords: [26.7606, 83.3731] },
      { name: "Hyderabad Regional Hub", stateIdx: 4, coords: [17.3850, 78.4867] }
    ];

    markers.forEach(mark => {
      const m = L.marker(mark.coords, { icon: mulyamIcon }).addTo(map);
      m.bindPopup(`<b>${mark.name}</b>`);
      m.on("click", () => {
        setActiveStateIndex(mark.stateIdx);
      });
    });

    mapRef.current = map;

    // Call invalidateSize on next ticks to render correctly
    const timer1 = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    const timer2 = setTimeout(() => {
      map.invalidateSize();
    }, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const locationsData = [
    {
      state: "Maharashtra",
      hq: "Pune (Head Office)",
      hqDetails: "922, 9th Floor, Solitaire Business Hub, Balewadi Highstreet, Baner, Pune – 411045",
      centers: [
        { name: "Theur Phata", type: "Collection Center" },
        { name: "Kalamb", type: "Collection Center" },
        { name: "Punavale", type: "Distribution Hub" },
        { name: "Chandori (Nashik)", type: "Sourcing Center" }
      ],
      coords: { x: "32%", y: "58%" }
    },
    {
      state: "Karnataka",
      hq: "Bengaluru Regional Office",
      hqDetails: "Sannatammanahalli Hub",
      centers: [
        { name: "Malur", type: "Distribution Center" },
        { name: "Sannatammanahalli (DC 1 & DC 2)", type: "Fulfillment Hub" },
        { name: "Chikkaballapura", type: "Sourcing Center" }
      ],
      coords: { x: "38%", y: "78%" }
    },
    {
      state: "Delhi & Haryana",
      hq: "Delhi Regional Hub",
      hqDetails: "NCR Distribution Grid",
      centers: [
        { name: "Delhi", type: "Distribution Center" },
        { name: "Sonipat (Haryana)", type: "Sourcing & Distribution Hub" }
      ],
      coords: { x: "40%", y: "28%" }
    },
    {
      state: "Uttar Pradesh",
      hq: "UP East Hub",
      hqDetails: "Varanasi Regional Center",
      centers: [
        { name: "Lucknow", type: "Sourcing Center" },
        { name: "Varanasi", type: "Distribution Hub" },
        { name: "Gorakhpur", type: "Collection Center" }
      ],
      coords: { x: "52%", y: "35%" }
    },
    {
      state: "Telangana",
      hq: "Hyderabad Center",
      hqDetails: "Telangana Regional Hub",
      centers: [
        { name: "Hyderabad", type: "Distribution Center" }
      ],
      coords: { x: "42%", y: "68%" }
    }
  ];
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
      icon: <img src={distributionIcon} className="h-6 w-6 object-contain" alt="Distribution" />,
      title: "Restructuring Ag-Trade Distribution",
      desc: "We eliminate highly fragmented, multi-tiered intermediary networks, securing fair value distribution directly for farm-gate growers and stable pricing for commercial buyers."
    },
    {
      icon: <img src={seedlingIcon} className="h-6 w-6 object-contain" alt="Sourcing" />,
      title: "Direct Sourcing Assurance",
      desc: "By cutting intermediate traders, we link institutional demand straight to growers, executing strict multi-stage quality checks at our fulfillment centers."
    },
    {
      icon: <img src={technologyIcon} className="h-6 w-6 object-contain" alt="Technology" />,
      title: "Tech-Driven Logistics Engine",
      desc: "Our customized SaaS coordinates real-time dispatch, route optimization, and tracking to compress transit windows and keep post-harvest losses below 5%."
    },
    {
      icon: <img src={financeIcon} className="h-6 w-6 object-contain" alt="Finance" />,
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
        
        {/* 2.5 ROOTS & VALUES SECTION (Hero Intro Style - Viewport Fit) */}
        <section 
          className="relative w-full min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] lg:min-h-0 flex items-center justify-center py-12 lg:py-0 overflow-hidden" 
          aria-label="Roots and Core Values"
        >
          {/* Faded Large Devanagari background watermark */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 text-[14vw] font-black text-slate-200/20 dark:text-slate-800/10 pointer-events-none select-none font-sans leading-none z-0">
            मूल्य
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative: Roots of Mulyam */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-sans font-extrabold text-xs tracking-widest text-mulyam-green uppercase block mb-4">
                Our Origins
              </span>
              <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-mulyam-blue dark:text-white leading-[1.1] tracking-tight mb-8">
                Roots of <span className="text-mulyam-green">Mulyam</span>
              </h1>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-350 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                <p>
                  Mulyam's story doesn't start in a boardroom; it begins in the fields of rural India. Founders and brothers, <span className="text-mulyam-blue dark:text-white font-semibold">Yogesh and Mahesh Kedari</span>, hail from a farming family. Since childhood, they witnessed firsthand the hard work that goes into agriculture and the persistent challenges farmers face—from unpredictable prices to post-harvest losses.
                </p>
                <p>
                  After several years of gaining valuable corporate experience, they felt a strong pull to return to their roots. They decided to combine their professional expertise with their innate understanding of agriculture to tackle one of India's most critical problems: the inefficient supply chain for perishable commodities.
                </p>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 border-l-2 border-mulyam-green pl-4 italic">
                  This is where the idea for Mulyam was born—a mission to restore <span className="text-mulyam-green font-semibold">"मूल्य"</span> or <span className="text-mulyam-green font-semibold">"value"</span> where it matters most: back to the soil and the hands that till it.
                </p>
              </div>
            </div>

            {/* Right Side: Founders Photo with Editorial Layout */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative w-full max-w-md"
              >
                {/* Image Card Container */}
                <div className="relative w-full bg-white dark:bg-[#12161A] border border-slate-200/80 dark:border-slate-800 rounded-[1.5rem] overflow-hidden shadow-2xl p-3">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[1rem] bg-slate-100 dark:bg-slate-900 relative">
                    <img 
                      src={foundersImage} 
                      alt="Mulyam Founders Yogesh and Mahesh Kedari" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pt-4 pb-1 text-center">
                    <h3 className="font-sans font-extrabold text-base md:text-lg text-mulyam-blue dark:text-white leading-tight">Yogesh & Mahesh Kedari</h3>
                    <p className="text-[10px] text-mulyam-green font-semibold tracking-wider mt-1 uppercase">Founders of Mulyam</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. MISSION / "WHAT WE DO" SECTION */}
        <section 
          ref={timelineRef}
          className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative overflow-hidden"
          aria-label="Core Business Model Timeline"
        >
          {/* Section Header (Centered to establish the Central axis string visual start) */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-mulyam-blue dark:text-white uppercase tracking-tight mb-3">
              What We Do
            </h2>
            <div className="h-1 w-12 bg-mulyam-green rounded-full mx-auto mb-4"></div>
            <p className="font-sans font-normal text-slate-500 dark:text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We are restoring the true value ("Mulyam") of produce back to growers and buyers alike.
            </p>
          </div>

          {/* Desktop Central axis string timeline layout (Visible on lg screens and up) */}
          <div className="hidden lg:block relative max-w-6xl mx-auto min-h-[720px]">
            
            {/* The Central String (Axis) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-slate-200 dark:bg-slate-800/80 z-0">
              {/* Dynamic green progress line */}
              <motion.div 
                style={{ height: timelineHeight }}
                className="w-full bg-mulyam-green origin-top"
              />
              
              <motion.div
                style={{ 
                  top: timelineHeight, 
                  left: "50%",
                  x: "-50%",
                  y: "-50%"
                }}
                className="absolute w-4 h-4 rounded-full bg-mulyam-green border-2 border-white dark:border-[#0C0F12] shadow-[0_0_12px_4px_rgba(0,189,103,0.65)] aspect-square z-20 pointer-events-none"
              />
            </div>

            {/* Timeline alternating rows */}
            <div className="space-y-12 relative z-10">
              
              {timelineNodes.map((node, idx) => {
                const isLeft = idx % 2 === 0;
                const isActive = activeIndex >= idx;

                return (
                  <div key={idx} className="grid grid-cols-12 gap-8 items-center relative h-[135px]">
                    
                    {/* Node Dot on the center string */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-800 bg-white dark:bg-[#0C0F12] flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: isActive ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-2 h-2 rounded-full bg-mulyam-green"
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
                            animate={{ x2: isActive ? 0 : 100 }} // shoots from center (right side) to left
                            transition={{ type: "spring", stiffness: 120, damping: 14 }}
                            stroke="var(--color-mulyam-green)"
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
                            stroke="var(--color-mulyam-green)"
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
                        className="p-5 rounded-2xl bg-white dark:bg-[#12161A] border-2 shadow-md dark:shadow-none transition-colors duration-300 flex flex-col justify-center select-none"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 ${isActive ? "scale-110 rotate-3 border-mulyam-green/30" : ""}`}>
                            {node.icon}
                          </div>
                          <h4 className="font-sans font-extrabold text-base text-mulyam-blue dark:text-white leading-tight">
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
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800/80 space-y-6">
              {timelineNodes.map((node, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <div className="absolute left-[-30px] top-1.5 w-3.5 h-3.5 rounded-full bg-mulyam-green border-4 border-white dark:border-[#0C0F12] shadow-[0_0_6px_rgba(0,189,103,0.3)]" />
                  
                  {/* Card content */}
                  <div className="p-5 rounded-xl bg-white dark:bg-[#12161A] border border-slate-200/60 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                        {node.icon}
                      </div>
                      <h4 className="font-sans font-extrabold text-sm text-mulyam-blue dark:text-white leading-tight">
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

        {/* 4. JOURNEY & IMPACT SECTION (Combined Parallax & Stats) */}
        <section 
          ref={quoteSectionRef} 
          className="relative w-full min-h-screen lg:h-screen lg:min-h-0 flex items-center justify-center py-16 lg:py-0 overflow-hidden border-y border-slate-800"
          aria-label="Our Journey and Impact Statement"
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
            <div className="absolute inset-0 bg-black/75 dark:bg-black/80" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Top Grid: Quote + Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              
              {/* Left Column: Premium Quote Display */}
              <div className="lg:col-span-6 flex flex-col items-start text-left border-l-4 border-mulyam-yellow pl-6 md:pl-8 py-2">
                <Quote className="h-10 w-10 text-mulyam-yellow opacity-80 mb-4" />
                <p className="font-sans font-medium text-lg md:text-xl lg:text-2xl text-white leading-relaxed italic mb-6">
                  "Our goal is not just to transport fresh produce. It is to restore the true worth—Mulyam—of every harvest back to the soil and the hands that till it."
                </p>
                <div>
                  <span className="block font-sans font-extrabold text-sm uppercase tracking-widest text-mulyam-green">
                    Yogesh Kedari
                  </span>
                  <span className="text-xs text-slate-300 tracking-wider">
                    Founder & CEO, Mulyam
                  </span>
                </div>
              </div>

              {/* Right Column: Journey Narrative */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                  Our Journey of Growth
                </h2>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light mb-6">
                  This deep domain knowledge became our greatest asset. Fueled by the collective experience of a core team—including the strategic expertise of Preetesh, Sameer, Vivek, Rishabh, and Rahul—Mulyam achieved unprecedented growth, scaling from zero to a <span className="text-mulyam-green font-semibold">200 Cr business in merely 2.5 years</span>.
                </p>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                  Today, our journey is driven by a shared dream: to revolutionize the supply chain of perishable commodities in India, making it more efficient by drastically reducing losses and wastage for a stronger, more sustainable future.
                </p>
              </div>

            </div>

            {/* Bottom Row: Glassmorphic Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Stat 1 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between h-40 text-left hover:border-mulyam-green/30 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-3xl md:text-4xl font-extrabold font-sans text-mulyam-yellow">₹200 Cr+</span>
                  <TrendingUp className="h-6 w-6 text-mulyam-green" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white">Revenue Scaled</h4>
                  <p className="text-[10px] text-slate-400 font-light mt-1">From inception to scale</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between h-40 text-left hover:border-mulyam-blue/40 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-3xl md:text-4xl font-extrabold font-sans text-mulyam-yellow">2.5 Yrs</span>
                  <Calendar className="h-6 w-6 text-mulyam-green" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white">Time to Scale</h4>
                  <p className="text-[10px] text-slate-400 font-light mt-1">Accelerated growth trajectory</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between h-40 text-left hover:border-mulyam-green/30 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-3xl md:text-4xl font-extrabold font-sans text-mulyam-yellow">&lt;2%</span>
                  <Activity className="h-6 w-6 text-mulyam-green" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white">Transit Wastage</h4>
                  <p className="text-[10px] text-slate-400 font-light mt-1">Compared to 30%+ national average losses</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. LEADERSHIP TEAM SECTION (Hierarchical layout for 7 actual WebP team members) */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-24" aria-label="Leadership Team Profiles">
          <div className="w-full mb-8">
            {/* Meet the Leadership Head */}
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="font-sans font-black text-4xl sm:text-5xl text-mulyam-blue dark:text-white uppercase tracking-tight">
                Meet Our Team
              </h3>
            </div>
          </div>

          <div className="space-y-16">
            
            {/* ROW 1: Founders & Tech Head (3 Column Grid - larger visual footprint) */}
            <div>
              <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 text-center md:text-left border-b border-slate-200/50 dark:border-slate-800/50 pb-1">
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
                      {/* Badge indicator removed */}
                    </div>

                    {/* Content Panel (reduced padding to p-4) */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-sans font-extrabold text-base md:text-lg text-mulyam-blue dark:text-white leading-tight">
                            {leader.name}
                          </h3>
                          <span className="text-[11px] text-mulyam-green font-semibold tracking-wider block mt-1">
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
                      {/* Badge indicator removed */}
                    </div>

                    {/* Content Panel (reduced padding to p-4) */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <div>
                          <h3 className="font-sans font-extrabold text-base text-mulyam-blue dark:text-white leading-tight">
                            {leader.name}
                          </h3>
                          <span className="text-[11px] text-mulyam-green font-semibold tracking-wide block mt-0.5">
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

        {/* 6. OUR LOCATIONS / OPERATIONAL NETWORK SECTION */}
        <section 
          className="w-full lg:h-[80vh] flex items-center py-12 lg:py-0 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden" 
          aria-label="Our Operational Locations"
        >
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-full py-6">
            
            {/* Left Side: Title and Locations List */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full gap-4">
              <div>
                <h2 className="font-sans font-black text-3xl sm:text-4xl text-mulyam-blue dark:text-white uppercase tracking-tight">
                  Our Locations
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Empowering farm-to-shelf supply chain network across major states.
                </p>
              </div>

              {/* State Tabs (Vertical list) */}
              <div className="flex flex-col gap-2">
                {locationsData.map((loc, idx) => {
                  const isSelected = activeStateIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStateIndex(idx)}
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-bold transition-all duration-300 border cursor-pointer flex justify-between items-center ${
                        isSelected
                          ? "bg-mulyam-blue border-mulyam-blue text-white shadow-md shadow-mulyam-blue/10"
                          : "bg-white dark:bg-[#12161A] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:border-slate-350 dark:hover:border-slate-700"
                      }`}
                    >
                      <span>{loc.state}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-900 text-slate-500"}`}>
                        {loc.centers.length} Hubs
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Side: Map Container */}
            <div className="lg:col-span-7 flex items-center justify-center h-full py-4 lg:py-8">
              <div className="relative w-full h-[50vh] lg:h-full min-h-[350px] border border-slate-200/60 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-900">
                <div ref={mapContainerRef} className="w-full h-full z-0" />
              </div>
            </div>

          </div>
        </section>


      </div>
    </div>
  );
}
