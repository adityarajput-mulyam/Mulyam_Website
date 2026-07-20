import { useState, useEffect } from "react";
import mulyamLogo from "../assets/logos/mulyam_logo_transparent.png";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  const menuItems = [
    "HOME",
    "ABOUT US",
    "SOLUTIONS",
    "OUR BRANDS",
    "MEDIA",
    "CAREERS",
  ];

  const isSolidNavbar = isScrolled || activeTab !== "HOME";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSolidNavbar
          ? "bg-white/85 dark:bg-[#0C0F12]/85 backdrop-blur-md py-3 md:py-4 shadow-md border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-gradient-to-b from-black/50 to-transparent py-4 md:py-6"
      }`}
    >
      {/* 2X boundary clear-space layout wrapper */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Transparent Logo on the left with clear space padding — always normal colored, no filters */}
        <div className="flex items-center">
          <button 
            onClick={() => setActiveTab("HOME")} 
            className="group flex items-center gap-3 cursor-pointer border-none bg-transparent p-0"
          >
            <img 
              src={mulyamLogo} 
              alt="Mulyam Logo" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-10 w-auto object-contain transition-all duration-300" 
            />
          </button>
        </div>

        {/* Center menu sections */}
        <nav className="hidden lg:flex items-center gap-1 transition-all duration-300">
          {menuItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSolidNavbar
                    ? isActive
                      ? "bg-mulyam-blue/10 dark:bg-mulyam-green/20 text-mulyam-blue dark:text-mulyam-green font-extrabold"
                      : "text-slate-600 dark:text-slate-300 hover:text-mulyam-blue dark:hover:text-mulyam-green hover:bg-slate-100 dark:hover:bg-slate-800"
                    : isActive
                      ? "bg-white/20 text-white font-extrabold"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right side: Dark Mode Toggle & Get In Button */}
        <div className="flex items-center gap-4 transition-all duration-300">
          <a 
            href="mailto:connect@mulyam.in"
            className="px-5 py-2.5 bg-mulyam-green hover:bg-mulyam-green/90 text-white hover:text-mulyam-blue font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer inline-block"
          >
            Get In
          </a>
        </div>

      </div>
    </header>
  );
}
