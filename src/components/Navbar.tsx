import { useState, useEffect } from "react";
import mulyamLogo from "../assets/mulyam_logo_transparent.png";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("HOME");
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

  const menuItems = [
    "HOME",
    "ABOUT US",
    "SOLUTIONS",
    "OUR BRANDS",
    "MEDIA",
    "CAREERS",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white py-3 md:py-4 shadow-sm"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      {/* 2X boundary clear-space layout wrapper */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Transparent Logo on the left with clear space padding — always normal colored, no filters */}
        <div className="flex items-center">
          <a href="#" className="group flex items-center gap-3 cursor-pointer">
            <img 
              src={mulyamLogo} 
              alt="Mulyam Logo" 
              className="h-10 w-auto object-contain transition-all duration-300" 
            />
          </a>
        </div>

        {/* Center menu sections — hides when scrolled past 50px (CarmoWood aesthetic) */}
        <nav 
          className={`hidden lg:flex items-center gap-1 transition-all duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none scale-95" : "opacity-100"
          }`}
        >
          {menuItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? isActive
                      ? "bg-[#edf4fc] text-mulyam-blue font-extrabold"
                      : "text-slate-500 hover:text-mulyam-blue hover:bg-slate-50"
                    : isActive
                      ? "bg-white/15 text-white font-extrabold"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right side: Get In Button — also hides when scrolled past 50px */}
        <div 
          className={`flex items-center transition-all duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none scale-95" : "opacity-100"
          }`}
        >
          <button 
            type="button"
            className="px-5 py-2.5 bg-mulyam-green hover:bg-mulyam-green/90 text-white hover:text-mulyam-blue font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Get In
          </button>
        </div>

      </div>
    </header>
  );
}
