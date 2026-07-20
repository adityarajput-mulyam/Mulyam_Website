import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import distributionIcon from "../../assets/icons/distribution.png";
import logisticsIcon from "../../assets/icons/supply_logistics.png";
import technologyIcon from "../../assets/icons/technology.png";
import qualityIcon from "../../assets/icons/quality_assurance.png";

export default function ConvergenceFooter() {
  const stats = [
    {
      value: "500+",
      label: "APMC Mandi Markets",
      detail: "Real-time price discovery & direct trading networks",
      icon: distributionIcon,
      iconAlt: "APMC Distribution",
    },
    {
      value: "1,000+",
      label: "Retail Partners",
      detail: "Supermarket chains, quick-commerce dark stores & regional partners",
      icon: logisticsIcon,
      iconAlt: "Retail Logistics",
    },
    {
      value: "ICAR & ESDS",
      label: "Co-Created Intelligence",
      detail: "Scientific agronomy advisory & cloud-backed digital crop intelligence",
      icon: technologyIcon,
      iconAlt: "Agronomy Technology",
      isText: true
    },
    {
      value: "100%",
      label: "Farm-to-Store Traceability",
      detail: "Quality-checked cold chain with zero middlemen friction",
      icon: qualityIcon,
      iconAlt: "Quality Assurance",
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F4F8FA] via-[#F9FBFA] to-[#EFF5FA] py-20 md:py-32 border-t border-slate-200/80 overflow-hidden">
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#004B8B]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00BD67]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Clean Solid Deep Navy Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-xs font-extrabold tracking-widest text-[#004B8B] uppercase bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm inline-block mb-4"
          >
            ECOSYSTEM SCALE & IMPACT
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#004B8B] tracking-tight mb-4"
          >
            One Integrated Supply Chain
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            By unifying grower advisory and retail distribution, Mulyam eliminates waste, boosts farmer incomes, and guarantees fresh produce for consumers across India.
          </motion.p>
        </div>

        {/* Standardized 4-Card Grid with Alternating Brand Accent Tops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 items-stretch">
          {stats.map((stat, idx) => {
            const accentColor = idx % 2 === 0 ? "#004B8B" : "#00BD67";
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,75,139,0.09)] transition-all duration-300 flex flex-col justify-between h-full min-h-[330px] group"
                style={{ borderTopWidth: "4px", borderTopColor: accentColor }}
              >
                <div className="flex-1 flex flex-col justify-between">
                  {/* Vector Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 p-2.5 flex items-center justify-center border border-slate-100 group-hover:border-[#00BD67]/30 transition-colors shadow-inner shrink-0">
                      <img 
                        src={stat.icon} 
                        alt={stat.iconAlt} 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#00BD67] shrink-0" />
                  </div>
                  
                  {/* Stat Number / Value */}
                  <div className="mb-4">
                    <h3 className={`${stat.isText ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'} font-extrabold text-[#004B8B] tracking-tight mb-2 h-10 flex items-center`}>
                      {stat.value}
                    </h3>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wide h-8 flex items-center">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Standardized Bottom Detail Box */}
                <div className="pt-4 border-t border-slate-100 mt-4 h-16 flex items-center">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-gradient-to-br from-[#004B8B] via-[#003B6F] to-[#002A50] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Subtle background glow circle */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#00BD67]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00BD67] bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block mb-4">
              Join the Ecosystem
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Ready to partner with I'mFresh or ImKisan?
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Whether you're an agricultural producer seeking market reach or a retail buyer looking for guaranteed fresh produce, connect with our supply team today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full sm:w-auto">
            <a
              href="mailto:connect@mulyam.in"
              className="px-8 py-4 bg-[#00BD67] hover:bg-[#00BD67]/90 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <Link
              to="/solutions"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all duration-200 text-center cursor-pointer"
            >
              View Solutions
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
