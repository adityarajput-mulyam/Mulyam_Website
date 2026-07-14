import { useState } from "react";
import mulyamLogo from "../assets/mulyam_logo_transparent_en.png";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("HOME");

  const menuItems = [
    "HOME",
    "ABOUT US",
    "SOLUTIONS",
    "OUR BRANDS",
    "MEDIA",
    "CAREERS",
  ];

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-150 z-50">
      {/* 2X boundary clear-space layout wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">
        
        {/* Transparent Logo on the left with clear space padding */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={mulyamLogo} 
              alt="Mulyam Logo" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Center menu sections */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#edf4fc] text-mulyam-blue font-extrabold"
                    : "text-slate-550 text-slate-500 hover:text-mulyam-blue hover:bg-slate-50"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right side: Get In Button */}
        <div className="flex items-center">
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
