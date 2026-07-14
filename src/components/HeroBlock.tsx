import { motion } from "framer-motion";

export default function HeroBlock() {
  return (
    <section className="relative bg-white text-mulyam-blue flex flex-col justify-center min-h-[75vh] p-8 md:p-12 overflow-hidden border-b border-slate-100">
      {/* Hero Typography Core */}
      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto text-center px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-mulyam-green text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
            B2B Agritech Supply Chain Layer
          </span>
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6 text-mulyam-blue">
            Empowering the Fresh Produce <br />
            <span className="text-mulyam-green">Supply Chain</span> via Technology
          </h1>
          <p className="font-sans font-medium text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
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
            className="w-full sm:w-auto px-8 py-3 bg-mulyam-green text-white hover:text-mulyam-blue font-bold rounded-lg hover:bg-mulyam-green/90 transition-all text-center shadow-md hover:shadow-lg cursor-pointer"
          >
            Explore Ecosystem
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all text-center border border-slate-200 cursor-pointer"
          >
            Read Strategic Narrative
          </a>
        </motion.div>
      </div>

      {/* Associated Brands & Corporate Partners Bar */}
      <div className="border-t border-slate-100 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">
            Associated Brands & Strategic Channels
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
            <div className="flex flex-col items-center">
              <span className="font-sans font-extrabold text-lg text-mulyam-blue">I'mFresh</span>
              <span className="text-[9px] text-mulyam-green font-bold uppercase tracking-wider">Premium Produce</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans font-extrabold text-lg text-mulyam-blue">ImKisan</span>
              <span className="text-[9px] text-mulyam-green font-bold uppercase tracking-wider">ICAR-DOGR Partner</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans font-extrabold text-lg text-mulyam-blue">AI Grading</span>
              <span className="text-[9px] text-mulyam-green font-bold uppercase tracking-wider">Quality Automation</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Quick-Commerce Channels
            </div>
            <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Enterprise Retail
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
