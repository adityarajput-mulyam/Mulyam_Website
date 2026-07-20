import { useEffect } from "react";
import EcosystemHero from "../components/brands/EcosystemHero";
import ImFreshSection from "../components/brands/ImFreshSection";
import ImKisanSection from "../components/brands/ImKisanSection";
import ConvergenceFooter from "../components/brands/ConvergenceFooter";

export default function Brands() {
  useEffect(() => {
    document.title = "Our Brands | I'mFresh & ImKisan — Mulyam Ecosystem";
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F6] text-[#004B8B] selection:bg-[#00BD67] selection:text-white">
      {/* 1. Ecosystem Hero Introduction */}
      <EcosystemHero />

      {/* 2. I'mFresh Journey Section (FIRST) */}
      <ImFreshSection />

      {/* 3. ImKisan Digital Advisory Section (SECOND) */}
      <ImKisanSection />

      {/* 4. Convergence Stats & Footer CTA */}
      <ConvergenceFooter />

      {/* Site Footer Bottom Note */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-center text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mulyam Digital Agriculture Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-300 font-semibold">
            <span className="text-[#FFC400]">I'mFresh</span>
            <span>·</span>
            <span className="text-[#00BD67]">ImKisan</span>
            <span>·</span>
            <span>Mulyam Infrastructure</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
