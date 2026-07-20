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
    </div>
  );
}
