import { motion } from "framer-motion";
import { 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  Cloud,
  Users,
  Award
} from "lucide-react";
import imKisanLogo from "../../assets/logos/im_kisan.png";

export default function ImKisanSection() {
  const bentoCards = [
    {
      id: "field-advisory",
      title: "Field-Ready Advisory",
      description: "Contextual pest, disease, and nutrient guidance tailored to crop stage, soil type, and local weather patterns.",
      icon: Sparkles,
      tag: "AGRONOMY INTELLIGENCE",
      accentColor: "#00BD67"
    },
    {
      id: "crop-calendars",
      title: "Dynamic Crop Calendars",
      description: "Seasonal crop calendars that keep farmers on track with sowing, irrigation, input management, and harvest windows.",
      icon: Calendar,
      tag: "PRECISION ADVISORY",
      accentColor: "#004B8B"
    },
    {
      id: "market-insights",
      title: "Actionable Market Insights",
      description: "Price trends, mandi intelligence, and demand forecasts help farmers time their harvests and sales decisions.",
      icon: TrendingUp,
      tag: "MANDI INTELLIGENCE",
      accentColor: "#FFC400"
    },
    {
      id: "always-on-support",
      title: "Always-On Support",
      description: "Secure cloud architecture built with ICAR-DOGR and ESDS ensures advisories, records, and alerts are always accessible.",
      icon: Cloud,
      tag: "CLOUD INFRASTRUCTURE",
      accentColor: "#00BD67"
    }
  ];

  return (
    <section className="relative bg-linear-to-b from-[#F4F9F6] via-[#F8FAF7] to-[#F4F8FA] pt-16 pb-6 md:pt-20 md:pb-8 border-t border-slate-200/60">
      {/* Subtle Ambient Radial Glows Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-mulyam-green/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-mulyam-blue/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Identifier */}
        <div className="mb-12 text-center lg:text-left">
          <span className="inline-block text-xs font-bold tracking-widest text-mulyam-green uppercase bg-mulyam-green/10 px-3.5 py-1.5 rounded-full border border-mulyam-green/20">
            PLATFORM 02 · GROWER & AGRONOMY ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-mulyam-blue tracking-tight mt-4">
            ImKisan · Empowering Every Acre
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mt-2">
            Mulyam's farmer-first digital platform, co-created with ICAR-DOGR and ESDS to democratise scientific crop intelligence.
          </p>
        </div>

        {/* 2-Column Layout Container (ALTERNATING LAYOUT: PINNED ON RIGHT SIDE) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* RIGHT COLUMN: PINNED LOGO & STORY CARD (STICKY ON RIGHT, lg:order-2) */}
          <div className="lg:col-span-5 lg:order-2 lg:sticky lg:top-28 flex flex-col justify-center py-2">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-7 border border-slate-200/90 border-t-4 border-t-mulyam-green shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,189,103,0.1)] transition-all duration-300 text-center relative overflow-hidden"
            >
              {/* Logo Container (100% Identical Classes to I'mFresh Card) */}
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2 rounded-2xl bg-slate-50/70 mb-4 overflow-hidden border border-slate-100">
                <img 
                  src={imKisanLogo} 
                  alt="ImKisan Logo" 
                  className="h-full w-auto object-contain mix-blend-multiply scale-95 transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-mulyam-blue tracking-tight mb-3">
                Digital Agri Advisory
              </h3>
              
              {/* Story Copy */}
              <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3 text-left mb-6 font-normal">
                <p>
                  ImKisan is Mulyam's farmer-first digital platform, co-created with ICAR-DOGR and ESDS to democratise scientific crop intelligence. The mobile app equips growers with hyperlocal advisory, crop calendars, and actionable insights.
                </p>
                <p>
                  Whether a farmer is planning the next sowing cycle, monitoring crop health, or gauging market opportunities, ImKisan keeps vital knowledge within reach with continuous multilingual recommendations.
                </p>
              </div>

              {/* Metric Badges with Brand Color Fills */}
              <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-slate-100">
                <div className="bg-mulyam-green/10 p-2.5 rounded-xl border border-mulyam-green/20">
                  <Award className="w-4 h-4 text-mulyam-green mx-auto mb-1" />
                  <span className="text-xs font-extrabold text-mulyam-blue block">ICAR-DOGR</span>
                  <span className="text-[10px] text-slate-600 font-semibold block">Co-Created</span>
                </div>

                <div className="bg-mulyam-blue/10 p-2.5 rounded-xl border border-mulyam-blue/20">
                  <Cloud className="w-4 h-4 text-mulyam-blue mx-auto mb-1" />
                  <span className="text-xs font-extrabold text-mulyam-blue block">ESDS Cloud</span>
                  <span className="text-[10px] text-slate-600 font-semibold block">Architecture</span>
                </div>

                <div className="bg-mulyam-yellow/15 p-2.5 rounded-xl border border-mulyam-yellow/30">
                  <Users className="w-4 h-4 text-[#B78100] mx-auto mb-1" />
                  <span className="text-xs font-extrabold text-mulyam-blue block">Multilingual</span>
                  <span className="text-[10px] text-slate-600 font-semibold block">Advisory</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LEFT COLUMN: SCROLLING BENTO FEATURE CARDS (lg:order-1) */}
          <div className="lg:col-span-7 lg:order-1 flex flex-col gap-6 pb-12">
            <div className="mb-2">
              <span className="inline-block text-[11px] font-extrabold tracking-widest text-mulyam-green uppercase bg-mulyam-green/10 px-3 py-1 rounded-full border border-mulyam-green/20">
                SCIENTIFIC CROP INTELLIGENCE
              </span>
              <h3 className="text-2xl font-extrabold text-mulyam-blue tracking-tight mt-3">
                Empowering Every Acre Through Data
              </h3>
            </div>

            {bentoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group bg-white/95 backdrop-blur-md rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] transition-all duration-300 relative overflow-hidden"
                  style={{ borderLeftWidth: "4px", borderLeftColor: card.accentColor }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-[11px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase"
                      style={{ 
                        backgroundColor: `${card.accentColor}15`, 
                        color: card.accentColor === "#FFC400" ? "#B78100" : card.accentColor 
                      }}
                    >
                      {card.tag}
                    </span>
                    <div 
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${card.accentColor}12`,
                        color: card.accentColor === "#FFC400" ? "#D49B00" : card.accentColor 
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-xl font-extrabold text-mulyam-blue tracking-tight mb-2">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
