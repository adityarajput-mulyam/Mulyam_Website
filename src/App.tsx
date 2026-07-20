import { useState, useEffect } from "react";
import { useLenis } from "./hooks/useLenis";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import mulyamLogo from "./assets/logos/mulyam_logo_transparent.png";
import mulyamLogoEn from "./assets/logos/mulyam_logo_en.png";

function App() {
  useLenis();
  const [activeTab, setActiveTab] = useState("HOME");

  useEffect(() => {
    [mulyamLogo, mulyamLogoEn].forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
    });

    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F9F9F6] dark:bg-[#0C0F12] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Global Preloader */}
      <Preloader />

      {/* Global Sticky Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Page Content Dispatcher */}
      <main>
        {activeTab === "HOME" ? (
          <Home />
        ) : activeTab === "ABOUT US" ? (
          <About />
        ) : activeTab === "SOLUTIONS" ? (
          <Solutions />
        ) : (
          /* Fallback for other pages currently in planning/development */
          <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#F9F9F6] dark:bg-[#0C0F12]">
            <div className="text-center max-w-md px-6">
              <h1 className="text-4xl font-extrabold text-[#004B8B] dark:text-white tracking-tight uppercase mb-4">
                {activeTab}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                This segment of the Mulyam platform is undergoing strategic expansion. Click below to return to the core operations page.
              </p>
              <button 
                onClick={() => setActiveTab("HOME")} 
                className="px-6 py-3 bg-[#00BD67] hover:bg-[#00BD67]/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Return to Core Ops
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
