import { motion } from "framer-motion";
import MulyamLogoSVG from "./MulyamLogoSVG";

export default function HeroBlock() {
  return (
    <section className="relative min-h-screen bg-mulyam-blue text-white flex flex-col justify-between p-8 md:p-12 overflow-hidden">
      {/* Navigation Header with 2X clear space padding */}
      <header className="w-full flex items-center justify-between py-8 px-8 md:px-12 bg-mulyam-blue/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="flex items-center gap-4">
          {/* Logo with strict 2X clear space margin (approx. p-4 wrapper around logo) */}
          <div className="p-4 bg-white/5 rounded-lg flex items-center justify-center">
            <MulyamLogoSVG size={52} />
          </div>
          <div className="hidden sm:block">
            <span className="font-sans font-bold text-xl tracking-tight text-white">MULYAM</span>
            <span className="block text-[10px] text-mulyam-green uppercase font-semibold tracking-widest">Agronomics</span>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-mulyam-green transition-colors">About</a>
          <a href="#trifecta" className="hover:text-mulyam-green transition-colors">Ecosystem</a>
          <a href="#metrics" className="hover:text-mulyam-green transition-colors">Impact</a>
          <a 
            href="https://status.mulyam.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-mulyam-green/10 text-mulyam-green border border-mulyam-green/20 text-xs font-semibold hover:bg-mulyam-green/20 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-mulyam-green animate-pulse" />
            System Live
          </a>
        </nav>
      </header>

      {/* Hero Typography Core */}
      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto text-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-mulyam-yellow text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
            B2B Agritech Supply Chain Layer
          </span>
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6 text-white">
            Empowering the Fresh Produce <br />
            <span className="text-mulyam-green">Supply Chain</span> via Technology
          </h1>
          <p className="font-sans font-medium text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bridging rural agricultural cultivation hubs with modern quick-commerce dark stores and corporate retail networks across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#trifecta"
            className="w-full sm:w-auto px-8 py-3 bg-mulyam-green text-mulyam-blue font-bold rounded-lg hover:bg-mulyam-green/90 transition-all text-center shadow-lg hover:shadow-mulyam-green/20 cursor-pointer"
          >
            Explore Ecosystem
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-all text-center border border-white/10 cursor-pointer"
          >
            Read Strategic Narrative
          </a>
        </motion.div>
      </div>

      {/* Associated Brands & Corporate Partners Bar */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">
            Associated Brands & Strategic Channels
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
            <div className="flex flex-col items-center">
              <span className="font-sans font-extrabold text-lg text-white">I'mFresh</span>
              <span className="text-[9px] text-mulyam-green font-bold uppercase tracking-wider">Premium Produce</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans font-extrabold text-lg text-white">ImKisan</span>
              <span className="text-[9px] text-mulyam-green font-bold uppercase tracking-wider">ICAR-DOGR Partner</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans font-extrabold text-lg text-white">AI Grading</span>
              <span className="text-[9px] text-mulyam-green font-bold uppercase tracking-wider">Quality Automation</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Quick-Commerce Channels
            </div>
            <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Enterprise Retail
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
