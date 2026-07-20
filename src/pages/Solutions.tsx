import { motion } from "framer-motion";
import { Sprout, Store, ShieldCheck, ArrowRight, TrendingUp, CheckCircle, Navigation } from "lucide-react";

// Import custom category assets
import farmerImage from "../assets/farmer.jpg";
import traderImage from "../assets/trader.jpg";
import transporterImage from "../assets/transporter.jpg";

export default function Solutions() {
  const sections = [
    {
      id: "farmers",
      badge: "For Growers",
      title: "Empowering Growers & Farmers",
      subtitle: "Returning the true value ('Mulyam') of every harvest directly back to the soil and the hands that till it.",
      image: farmerImage,
      isLeft: true,
      points: [
        {
          title: "Direct Farm-Gate Linkage",
          desc: "We bypass highly fragmented middleman networks by linking local growers directly with high-volume buyers, ensuring farmers capture their fair share of market value.",
          icon: <Sprout className="h-5 w-5 text-mulyam-green" />
        },
        {
          title: "Transparent Digital Payouts",
          desc: "Real-time weighing, digital grade certification, and automated payouts sent directly to farmers' bank accounts within hours of delivery.",
          icon: <TrendingUp className="h-5 w-5 text-mulyam-green" />
        },
        {
          title: "Assured Forward Offtake",
          desc: "By matching field planning with buyer demand forecasting, we insulate farmers from seasonal price volatility and guarantee harvest liquidation.",
          icon: <CheckCircle className="h-5 w-5 text-mulyam-green" />
        }
      ]
    },
    {
      id: "buyers",
      badge: "For Buyers",
      title: "Grade-Assured Sourcing for Buyers",
      subtitle: "Scale-proof procurement networks designed for Quick Commerce, Modern Trade, and Institutional Retailers.",
      image: traderImage,
      isLeft: false,
      points: [
        {
          title: "99% Fulfillment Sourcing Grid",
          desc: "A highly resilient supply chain delivering 4,950+ MT monthly volume with strict adherence to grade specifications and quality profiles.",
          icon: <Store className="h-5 w-5 text-mulyam-blue" />
        },
        {
          title: "Under 2% Post-Harvest Losses",
          desc: "Multi-stage grading at collection centers and chilled transport logistics keep wastage levels far below the 30% national average.",
          icon: <ShieldCheck className="h-5 w-5 text-mulyam-blue" />
        },
        {
          title: "Full Origin Traceability",
          desc: "Digitized records track every crate's journey from harvest coordinates to dark store doorsteps, securing complete food safety accountability.",
          icon: <CheckCircle className="h-5 w-5 text-mulyam-blue" />
        }
      ]
    },
    {
      id: "logistics",
      badge: "For Transporters",
      title: "Predictable Logistics & Fleet Operations",
      subtitle: "Maximizing fleet efficiency, route density, and driver earnings with custom SaaS orchestration.",
      image: transporterImage,
      isLeft: true,
      points: [
        {
          title: "Automated Dispatch & Route Logic",
          desc: "Custom SaaS algorithms coordinate load planning and route geometry, minimizing idle time and transit delays.",
          icon: <Navigation className="h-5 w-5 text-mulyam-green" />
        },
        {
          title: "Backhaul Optimization",
          desc: "By coordinating empty return trucks with local collection center pickups, we maximize utilization rates and reduce fuel waste.",
          icon: <TrendingUp className="h-5 w-5 text-mulyam-green" />
        },
        {
          title: "Frictionless Billing Cycles",
          desc: "Instant digital trip validation, transparent freight agreements, and reliable payout windows to support partner fleet operators.",
          icon: <CheckCircle className="h-4 w-4 text-mulyam-green" />
        }
      ]
    }
  ];

  return (
    <div className="bg-[#F9F9F6] dark:bg-[#0C0F12] min-h-screen antialiased text-slate-800 dark:text-slate-200 transition-colors duration-300 relative">
      
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Main Section container */}
      <div className="pt-24 pb-20 relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Editorial Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans font-extrabold text-xs tracking-widest text-mulyam-green uppercase block mb-3">
            What We Deliver
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-mulyam-blue dark:text-white uppercase tracking-tight mb-4">
            Our Solutions
          </h1>
          <p className="font-sans font-normal text-slate-505 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A tech-driven agritech ecosystem built to solve post-harvest challenges, build direct market linkages, and automate logistics nationwide.
          </p>
        </div>

        {/* Scrollable Alternating Content Sections */}
        <div className="space-y-32">
          {sections.map((sec) => (
            <div 
              key={sec.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 w-full flex justify-center ${sec.isLeft ? "lg:order-1" : "lg:order-2"}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full aspect-[4/3] border border-slate-200/60 dark:border-slate-800/80 rounded-[1.5rem] overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-900"
                >
                  <img 
                    src={sec.image} 
                    alt={sec.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Copy / Content Column */}
              <div className={`lg:col-span-7 text-left flex flex-col justify-center ${sec.isLeft ? "lg:order-2" : "lg:order-1"}`}>
                <motion.div
                  initial={{ opacity: 0, x: sec.isLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="font-sans font-extrabold text-[10px] tracking-widest text-mulyam-green uppercase block mb-2">
                      {sec.badge}
                    </span>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-mulyam-blue dark:text-white leading-tight">
                      {sec.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-2.5">
                      {sec.subtitle}
                    </p>
                  </div>

                  {/* Points list (vertical flow) */}
                  <div className="space-y-4">
                    {sec.points.map((pt, ptIdx) => (
                      <div 
                        key={ptIdx} 
                        className="p-4 rounded-xl bg-white dark:bg-[#12161A] border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex items-start gap-4 transition-all duration-300 hover:border-slate-350 dark:hover:border-slate-700"
                      >
                        <div className="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100/50 dark:border-slate-800">
                          {pt.icon}
                        </div>
                        <div>
                          <h3 className="font-sans font-extrabold text-xs sm:text-sm text-mulyam-blue dark:text-white">
                            {pt.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-1">
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a 
                      href="mailto:connect@mulyam.in"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-mulyam-green hover:bg-mulyam-green/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                    >
                      Connect Now <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
