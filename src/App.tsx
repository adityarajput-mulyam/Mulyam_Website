import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import mulyamLogo from "./assets/logos/mulyam_logo_transparent.png";
import mulyamLogoEn from "./assets/logos/mulyam_logo_en.png";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#F9F9F6] dark:bg-[#0C0F12]">
      <div className="text-center max-w-md px-6">
        <h1 className="text-4xl font-extrabold text-[#004B8B] dark:text-white tracking-tight uppercase mb-4">
          {title}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          This segment of the Mulyam platform is undergoing strategic expansion. Click below to return to the core operations page.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-[#00BD67] hover:bg-[#00BD67]/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer inline-block"
        >
          Return to Core Ops
        </Link>
      </div>
    </div>
  );
}

function AppContent() {
  useLenis();

  useEffect(() => {
    [mulyamLogo, mulyamLogoEn].forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F6] dark:bg-[#0C0F12] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <ScrollToTop />
      <Preloader />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/our-brands" element={<PagePlaceholder title="OUR BRANDS" />} />
          <Route path="/media" element={<PagePlaceholder title="MEDIA" />} />
          <Route path="/careers" element={<PagePlaceholder title="CAREERS" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
