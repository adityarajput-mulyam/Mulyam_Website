import Navbar from "../components/Navbar";
import HeroBlock from "../components/HeroBlock";
import EcosystemTrifecta from "../components/EcosystemTrifecta";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-800 selection:bg-mulyam-green selection:text-white">
      {/* Standalone Navigation Bar */}
      <Navbar />

      {/* Block 1: Hero Entry & Associated Brands Anchor */}
      <HeroBlock />

      {/* Block 2: The Core "What is Mulyam?" Strategic Narrative Layer */}
      <section id="about" className="py-20 md:py-28 px-8 md:px-12 bg-slate-50 w-full border-t border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-4">
              <span className="text-mulyam-green text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">
                Corporate Mission
              </span>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-mulyam-blue">
                What is Mulyam?
              </h2>
            </div>
            
            <div className="md:col-span-8 space-y-6">
              <p className="font-sans font-light text-slate-700 text-lg md:text-xl leading-relaxed">
                Mulyam is a high-volume, B2B agritech enterprise headquartered in Pune. We build the mission-critical technology and supply chain infrastructure bridging rural cultivation hubs directly with modern quick-commerce dark stores and national corporate retail networks.
              </p>
              
              <p className="font-sans font-light text-slate-555 text-base md:text-lg leading-relaxed text-slate-600">
                By leveraging real-time logistics tracking, automated AI computer vision sorting, and direct farmer support platforms like <strong className="text-mulyam-blue font-semibold">ImKisan</strong>, we bring value, stability, and absolute traceability to the agricultural commerce network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3 & 4: B2B Enterprise & Tech Intelligence Matrix & Editorial Testimonial Panel */}
      <EcosystemTrifecta />

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
