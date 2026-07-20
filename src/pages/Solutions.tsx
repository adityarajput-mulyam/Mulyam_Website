import { useState } from "react";
import { motion } from "framer-motion";
import { Sprout, Store, Truck, ShieldCheck, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

// Import custom category assets
import farmerImage from "../assets/farmer.jpg";
import traderImage from "../assets/trader.jpg";
import transporterImage from "../assets/transporter.jpg";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState<"FARMERS" | "BUYERS" | "LOGISTICS">("FARMERS");

  const tabData = {
    FARMERS: {
      title: "Empowering Indian Growers",
      subtitle: "Returning the true value ('Mulyam') back to the hands that till the soil.",
      image: farmerImage,
      benefits: [
        {
          title: "Direct Market Linkage",
          desc: "We connect farmers directly to high-volume commercial buyers, eliminating multi-layered middleman commissions.",
          icon: <Sprout className="h-4 w-4 text-mulyam-green" />
        },
        {
          title: "Fair & Transparent Pricing",
          desc: "Real-time market rate validation and automated payouts sent straight to bank accounts within hours of delivery.",
          icon: <TrendingUp className="h-4 w-4 text-mulyam-green" />
        },
        {
          title: "Assured Crop Offtake",
          desc: "Guaranteed liquidation of harvests through forward demand forecasting, protecting farmers from local price crashes.",
          icon: <CheckCircle className="h-4 w-4 text-mulyam-green" />
        }
      ]
    },
    BUYERS: {
      title: "Institutional Sourcing Grid",
      subtitle: "Grade-assured fresh produce procurement built for Quick Commerce & Modern Trade.",
      image: traderImage,
      benefits: [
        {
          title: "99% Sourcing Fulfillment",
          desc: "A reliable daily supply grid handling 4,950+ MT monthly volume with standard specification fulfillment.",
          icon: <Store className="h-4 w-4 text-mulyam-blue" />
        },
        {
          title: "Under 2% Transit Wastage",
          desc: "Automated sorting lines and temperature-monitored distribution hubs keep transit losses far below the 30% national average.",
          icon: <ShieldCheck className="h-4 w-4 text-mulyam-blue" />
        },
        {
          title: "Farm-to-Shelf Traceability",
          desc: "Complete provenance tracking from harvest patch to delivery crate, ensuring food safety compliance.",
          icon: <CheckCircle className="h-4 w-4 text-mulyam-blue" />
        }
      ]
    },
    LOGISTICS: {
      title: "Supply Chain & Mobility SaaS",
      subtitle: "Driving efficiency through real-time route optimization and high fleet utilization.",
      image: transporterImage,
      benefits: [
        {
          title: "Route Optimization Engine",
          desc: "Custom dispatch routing and real-time telemetry to compress transit windows and reduce fuel waste.",
          icon: <Truck className="h-4 w-4 text-mulyam-green" />
        },
        {
          title: "High Fleet Utilization",
          desc: "Minimizing empty return journeys by matching backhaul routes with local collection center pickups.",
          icon: <TrendingUp className="h-4 w-4 text-mulyam-green" />
        },
        {
          title: "Consistent Delivery Orders",
          desc: "Predictable trip allocations and automated digital billing to ensure steady earnings for fleet owners.",
          icon: <CheckCircle className="h-4 w-4 text-mulyam-green" />
        }
      ]
    }
  };

  return (
    <div className="bg-[#F9F9F6] dark:bg-[#0C0F12] min-h-screen antialiased text-slate-800 dark:text-slate-200 transition-colors duration-300 relative">
      
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="pt-20 pb-12 relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center lg:h-screen lg:min-h-0 overflow-hidden">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-mulyam-blue dark:text-white uppercase tracking-tight mb-3">
            Our Solutions
          </h1>
          <p className="font-sans font-normal text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            Revolutionizing agricultural supply chains through AI-driven quality checks, automated route logic, and direct market integration.
          </p>
        </div>

        {/* Tab Controls (Horizontal Tabs row) */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {(Object.keys(tabData) as Array<keyof typeof tabData>).map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-mulyam-blue border-mulyam-blue text-white shadow-lg shadow-mulyam-blue/15"
                    : "bg-white dark:bg-[#12161A] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-350 dark:hover:border-slate-700"
                }`}
              >
                {tab === "FARMERS" && <Sprout className="h-4 w-4" />}
                {tab === "BUYERS" && <Store className="h-4 w-4" />}
                {tab === "LOGISTICS" && <Truck className="h-4 w-4" />}
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Content Layout Grid (Interactive transition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full">
          
          {/* Left Column: Category Image (Fitted to viewport) */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[4/3] max-h-[280px] lg:max-h-[340px] border border-slate-200/60 dark:border-slate-800/80 rounded-[1.5rem] overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-900"
            >
              <img 
                src={tabData[activeTab].image} 
                alt={tabData[activeTab].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Title, Subtitle & Benefits Grid List */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left h-full gap-4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div>
                <h2 className="font-sans font-black text-2xl sm:text-3xl text-mulyam-blue dark:text-white leading-tight">
                  {tabData[activeTab].title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-455 leading-relaxed font-light mt-1.5">
                  {tabData[activeTab].subtitle}
                </p>
              </div>

              {/* Benefits list (compact layout) */}
              <div className="space-y-2.5">
                {tabData[activeTab].benefits.map((benefit, bIdx) => (
                  <div 
                    key={bIdx} 
                    className="p-3.5 rounded-xl bg-white dark:bg-[#12161A] border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex items-start gap-3 transition-all duration-300 hover:border-slate-350 dark:hover:border-slate-700"
                  >
                    <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100/50 dark:border-slate-800">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-xs text-mulyam-blue dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-normal mt-0.5">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1">
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

      </div>
    </div>
  );
}
