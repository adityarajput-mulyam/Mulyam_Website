import { motion } from "framer-motion";
import { ShieldCheck, Truck, Cpu, Landmark } from "lucide-react";

export default function EcosystemTrifecta() {
  // Staggered animation container
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <div id="trifecta" className="bg-mulyam-blue text-white flex flex-col divide-y divide-white/10">
      
      {/* Block A: B2B Enterprise Capabilities Text Layer */}
      <section className="py-16 md:py-24 px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-mulyam-yellow text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">
              Capabilities
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-white mb-6">
              Empowering the Fresh Produce Sourcing Layer
            </h2>
            <p className="font-sans font-light text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              Mulyam operates a high-volume, demand-led supply chain network designed to eliminate perishability losses and optimize pricing value.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-mulyam-green/10 text-mulyam-green rounded-lg shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg text-white mb-2">Cold-Chain Logistics</h3>
                <p className="font-sans font-light text-sm text-slate-300">
                  Fully tracked reefer fleets carrying farm produce directly to quick commerce dark stores and packaging centers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-mulyam-green/10 text-mulyam-green rounded-lg shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg text-white mb-2">AI Quality Grading</h3>
                <p className="font-sans font-light text-sm text-slate-300">
                  Automated computer vision arrays scanning, grading, and telemetry tracing post-harvest fresh crops in real time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-mulyam-green/10 text-mulyam-green rounded-lg shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg text-white mb-2">Traceable Supply</h3>
                <p className="font-sans font-light text-sm text-slate-300">
                  Quality guarantees and field tracing under the I'mFresh trademark ensuring premium standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-mulyam-green/10 text-mulyam-green rounded-lg shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg text-white mb-2">Farmer First Advisory</h3>
                <p className="font-sans font-light text-sm text-slate-300">
                  Hyperlocal scientific crop intelligence and crop calendar integration with ICAR-DOGR via the ImKisan mobile ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block B: High-Density Metrics Matrix */}
      <section id="metrics" className="py-16 md:py-24 bg-slate-950/40 w-full">
        <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="mb-12 text-center lg:text-left">
            <span className="text-mulyam-yellow text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">
              Verified Scale
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-white">
              Institutional Scale Ledger
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-center"
            >
              <span className="font-sans font-extrabold text-3xl md:text-4xl text-mulyam-green mb-2 block">
                4,950+ MT
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                Monthly Volume
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-center"
            >
              <span className="font-sans font-extrabold text-3xl md:text-4xl text-mulyam-green mb-2 block">
                3,000+
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                Suppliers Network
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-center"
            >
              <span className="font-sans font-extrabold text-3xl md:text-4xl text-mulyam-green mb-2 block">
                25+
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                Cities Covered
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-center"
            >
              <span className="font-sans font-extrabold text-3xl md:text-4xl text-mulyam-green mb-2 block">
                1,000+
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                Retailer Partners
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Block C: Single-Column Editorial Testimonial Canvas */}
      <section className="py-16 md:py-24 px-8 md:px-12 max-w-4xl mx-auto w-full text-center">
        <span className="text-mulyam-yellow text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block">
          Strategic Verification
        </span>
        
        <blockquote className="relative">
          <p className="font-sans font-light text-xl md:text-3xl text-white leading-relaxed mb-8">
            "Mulyam's tech-enabled routing systems and strict quality controls have <strong className="font-extrabold text-mulyam-green">fully streamlined our fresh produce procurement track</strong>. Their post-harvest grading guarantees that every delivery meets our quick-commerce operational guidelines."
          </p>
          <cite className="block">
            <span className="font-sans font-bold text-base text-white block">Supply Chain Lead</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Leading National Quick Commerce Network
            </span>
          </cite>
        </blockquote>
      </section>

    </div>
  );
}
