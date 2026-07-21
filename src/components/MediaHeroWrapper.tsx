import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, type Variants } from "framer-motion";
import { Search, Newspaper } from "lucide-react";

interface MediaHeroWrapperProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Staggered Entrance Animation Variants
const masterContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const statusRowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const headlineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const maskedWordVariants: Variants = {
  hidden: {
    y: "125%",
    rotateX: 12,
    opacity: 0
  },
  visible: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const actionDockVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function MediaHeroWrapper({
  selectedFilter,
  setSelectedFilter,
  searchQuery,
  setSearchQuery
}: MediaHeroWrapperProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Mouse Spotlight Motion Values
  const rawMouseX = useMotionValue(-500);
  const rawMouseY = useMotionValue(-500);

  const mouseX = useSpring(rawMouseX, { stiffness: 200, damping: 25 });
  const mouseY = useSpring(rawMouseY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    rawMouseX.set(e.clientX - rect.left);
    rawMouseY.set(e.clientY - rect.top);
  };

  // Keyboard shortcut listener for '/' search focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const spotlightGradient = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(0, 189, 103, 0.15), rgba(0, 75, 139, 0.08) 45%, transparent 80%)`;

  const headlineWords = [
    { text: "Architecting", highlight: false },
    { text: "the", highlight: false },
    { text: "Future", highlight: false },
    { text: "of", highlight: false },
    { text: "Agri-Commerce", highlight: true }
  ];

  const filterTabs = ["All", "Articles", "Videos", "Press Releases"];

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden pt-28 pb-12 bg-[#F9F9F6] dark:bg-[#0C0F12] text-slate-800 dark:text-slate-100"
    >
      {/* Requirement 1: Interactive Ambient Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 dark:opacity-40" />

        {/* Dynamic Cursor Spotlight */}
        <motion.div
          className="absolute inset-0"
          style={{ background: spotlightGradient }}
        />

        {/* Ambient Top Glow Spheres */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#004B8B]/10 via-[#00BD67]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Requirement 3: Master Staggered Entrance Container */}
      <motion.div
        variants={masterContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Component 1: Status Row */}
        <motion.div variants={statusRowVariants} className="mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md text-xs font-sans font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 shadow-sm">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BD67] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00BD67] shadow-[0_0_8px_#00BD67]" />
            </span>
            <span className="font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Newspaper className="w-3.5 h-3.5 text-[#00BD67]" />
              Live Coverage
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span>
              <strong className="text-slate-900 dark:text-slate-100 font-extrabold">7+</strong> Outlets
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span>
              <strong className="text-slate-900 dark:text-slate-100 font-extrabold">FY 2024-25</strong>
            </span>
          </div>
        </motion.div>

        {/* Component 2: Masked Hero Headline */}
        <motion.h1
          variants={headlineContainerVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#004B8B] dark:text-white uppercase leading-[1.08] max-w-5xl mb-6"
        >
          {headlineWords.map((wordObj, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden py-1.5 mr-3 md:mr-4 align-bottom"
            >
              <motion.span
                variants={maskedWordVariants}
                className={`inline-block ${
                  wordObj.highlight ? "text-[#00BD67]" : ""
                }`}
              >
                {wordObj.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Requirement 2: The Subtitle Bridge */}
        <motion.p
          variants={subtitleVariants}
          className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-normal"
        >
          Explore the latest insights, press releases, and on-ground impact stories from India’s leading ag-tech supply grid.
        </motion.p>

        {/* Component 3 & Requirement 3: Floating Action Dock (Sticky Bar) */}
        <motion.div
          variants={actionDockVariants}
          className="sticky top-6 z-40 w-full max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 sm:p-2 rounded-2xl sm:rounded-full border border-slate-200/90 dark:border-slate-800/90 bg-white/75 dark:bg-[#0C0F12]/80 backdrop-blur-xl shadow-xl shadow-slate-900/5 transition-all duration-300 w-full">
            {/* Category Pills */}
            <nav className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto px-1 py-0.5">
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab;
                let activeBgClass = "bg-[#004B8B] dark:bg-[#00BD67] text-white";
                let dotColorClass = "";

                if (tab === "Articles") {
                  activeBgClass = "bg-[#00BD67] text-white";
                  dotColorClass = "bg-[#00BD67]";
                } else if (tab === "Videos") {
                  activeBgClass = "bg-[#004B8B] text-white";
                  dotColorClass = "bg-[#004B8B] dark:bg-blue-400";
                } else if (tab === "Press Releases") {
                  activeBgClass = "bg-[#FFC400] text-slate-900 font-black";
                  dotColorClass = "bg-[#FFC400]";
                }

                return (
                  <button
                    key={tab}
                    onClick={() => setSelectedFilter(tab)}
                    className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? tab === "Press Releases"
                          ? "text-slate-900 font-extrabold"
                          : "text-white"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDockTab"
                        className={`absolute inset-0 rounded-full -z-10 shadow-sm ${activeBgClass}`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {dotColorClass && !isActive && (
                      <span className={`w-2 h-2 rounded-full ${dotColorClass}`} />
                    )}
                    {tab}
                  </button>
                );
              })}
            </nav>

            {/* Search Input with Keyboard Shortcut Hint */}
            <div className="relative w-full sm:w-72 flex items-center pr-1">
              <Search className="absolute left-3.5 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search press coverage..."
                className="w-full pl-9 pr-12 py-2 text-xs rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800/50 focus:border-[#00BD67] dark:focus:border-[#00BD67] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all duration-200 shadow-inner"
              />
              <kbd className="absolute right-3 hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-sans font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 shadow-xs pointer-events-none">
                /
              </kbd>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
