"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import mulyamLogo from "../assets/logos/mulyam_logo_transparent.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && window.scrollY > 50) {
      setIsScrolled(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SOLUTIONS", path: "/solutions" },
    { name: "OUR BRANDS", path: "/brands" },
    { name: "MEDIA", path: "/media" },
    { name: "CAREERS", path: "/careers" },
  ];

  // Use false on server + initial client paint to avoid hydration mismatch
  const isSolidNavbar = mounted && (isScrolled || (pathname !== "/" && pathname !== "/home"));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSolidNavbar
          ? "bg-white/80 backdrop-blur-md py-3 md:py-4 shadow-sm border-b border-slate-200/50"
          : "bg-linear-to-b from-black/50 to-transparent py-4 md:py-6"
      }`}
    >
      {/* 2X boundary clear-space layout wrapper */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Transparent Logo on the left with clear space padding — always normal colored, no filters */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="group flex items-center gap-3 cursor-pointer border-none bg-transparent p-0"
          >
            <Image 
              src={mulyamLogo} 
              alt="Mulyam Logo" 
              loading="eager"
              priority
              className="h-10 w-auto object-contain transition-all duration-300" 
            />
          </Link>
        </div>

        {/* Center menu sections */}
        <nav className="hidden lg:flex items-center gap-1 transition-all duration-300">
          {menuItems.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/" || pathname === "/home"
                : pathname === item.path ||
                  (item.path === "/about" && pathname === "/about-us") ||
                  (item.path === "/brands" && pathname === "/our-brands");
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSolidNavbar
                    ? isActive
                      ? "bg-[#edf4fc] text-mulyam-blue font-extrabold"
                      : "text-slate-600 hover:text-mulyam-blue hover:bg-slate-100"
                    : isActive
                      ? "bg-white/20 text-white font-extrabold"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Dark Mode Toggle & Get In Button */}
        <div className="flex items-center gap-3 transition-all duration-300">
          <a 
            href="mailto:connect@mulyam.in"
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-mulyam-green hover:bg-mulyam-green/90 text-white hover:text-mulyam-blue font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer inline-block"
          >
            Get In
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors cursor-pointer bg-transparent border-none outline-none ${
              isSolidNavbar
                ? "text-slate-700 dark:text-slate-200 hover:text-mulyam-green dark:hover:text-mulyam-green"
                : "text-white hover:text-white/85"
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#0C0F12] border-b border-slate-200/50 dark:border-slate-800/50 shadow-xl lg:hidden z-40 flex flex-col px-6 py-8 gap-4"
          >
            {menuItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/" || pathname === "/home"
                  : pathname === item.path ||
                    (item.path === "/about" && pathname === "/about-us") ||
                    (item.path === "/brands" && pathname === "/our-brands");
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`py-3 px-4 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#edf4fc] text-mulyam-blue font-extrabold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-mulyam-blue"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
