import HeroVanguard from "../components/HeroVanguard";
import WhatIsMulyam from "../components/WhatIsMulyam";
import CapabilitiesSnap from "../components/CapabilitiesSnap";


export default function Home() {
  return (
    <div className="bg-white dark:bg-[#0C0F12] min-h-screen font-sans antialiased text-slate-800 dark:text-slate-200 selection:bg-mulyam-green selection:text-white transition-colors duration-300">

      {/* Block 1: Hero Entry & Associated Brands Anchor */}
      <HeroVanguard />

      {/* Block 2: The Core "What is Mulyam?" Strategic Narrative Layer */}
      <WhatIsMulyam />

      {/* Block 3: Capabilities Vertical Snap Slider — 3 editorial slides */}
      <CapabilitiesSnap />



    </div>
  );
}
