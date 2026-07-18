import Navbar from "../components/Navbar";
import HeroVanguard from "../components/HeroVanguard";
import WhatIsMulyam from "../components/WhatIsMulyam";
import CapabilitiesSnap from "../components/CapabilitiesSnap";
import Preloader from "../components/Preloader";
import ScmGrid from "../components/ScmGrid";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-800 selection:bg-mulyam-green selection:text-white">

      {/* Page Preloader */}
      <Preloader />

      {/* Standalone Navigation Bar */}
      <Navbar />

      {/* Block 1: Hero Entry & Associated Brands Anchor */}
      <HeroVanguard />

      {/* Block 2: The Core "What is Mulyam?" Strategic Narrative Layer */}
      <WhatIsMulyam />

      {/* Block 3: Capabilities Vertical Snap Slider — 3 editorial slides */}
      <CapabilitiesSnap />

      {/* Block 4: Scm Grid — Scroll-Triggered Grid with background depth */}
      <ScmGrid />

      {/* Strategic Deployment Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-8 md:px-12 w-full text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans font-extrabold text-lg text-white tracking-wider">MULYAM</span>
              <span className="text-[9px] bg-mulyam-green/10 text-mulyam-green border border-mulyam-green/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Agritech Core
              </span>
            </div>
            <p className="text-xs max-w-sm font-light leading-relaxed text-slate-400">
              © {new Date().getFullYear()} Mulyam Agronomics Private Limited. All rights reserved. Headquartered in Pune, Maharashtra.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <a href="#about" className="hover:text-mulyam-green transition-colors">Strategic Mission</a>
            <a href="#trifecta" className="hover:text-mulyam-green transition-colors">Technology</a>
            <a href="#metrics" className="hover:text-mulyam-green transition-colors">B2B Sourcing</a>
            <a href="https://status.mulyam.in" className="hover:text-mulyam-green transition-colors">Uptime Diagnostics</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
