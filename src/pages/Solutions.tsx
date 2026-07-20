import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Import custom category assets
import hero1Image from "../assets/hero1.jpg";
import hero2Image from "../assets/hero2.jpg";
import farmerImage from "../assets/farmer.jpg";
import traderImage from "../assets/trader.jpg";
import transporterImage from "../assets/transporter.jpg";
import handshakeIcon from "../assets/handshake.png";
import pricingIcon from "../assets/pricing.png";
import mobileTransferIcon from "../assets/mobile_transfer.png";
import qualityAssuranceIcon from "../assets/quality_assurance.png";
import distributionIcon from "../assets/distribution.png";
import supplyLogisticsIcon from "../assets/supply_logistics.png";
import streamlineDeliveryIcon from "../assets/streamline_delivery.png";
import routeIcon from "../assets/route.png";
import increasedBusinessIcon from "../assets/increased_business.png";

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.8,
  });

  const y2 = useTransform(smoothScrollYProgress, [0.15, 0.5], ["100%", "0%"]); 
  const y3 = useTransform(smoothScrollYProgress, [0.64, 0.95], ["100%", "0%"]); 

  const s1HeadingY = useTransform(smoothScrollYProgress, [0, 0.25], [0, -35]);
  const s1HeadingOpacity = useTransform(smoothScrollYProgress, [0.05, 0.25], [1, 0]);
  const s2HeadingY = useTransform(smoothScrollYProgress, [0.15, 0.38, 0.6, 0.85], [35, 0, 0, -35]);
  const s2HeadingOpacity = useTransform(smoothScrollYProgress, [0.15, 0.32, 0.62, 0.82], [0, 1, 1, 0]);
  const s3HeadingY = useTransform(smoothScrollYProgress, [0.64, 0.8], [28, 0]);

  return (
    <div className="bg-[#F9F9F6] dark:bg-[#0C0F12] min-h-screen antialiased text-slate-900 dark:text-slate-100 transition-colors duration-300 relative border-t-0">
      
      {/* Contained Hero Section (Framed Editorial Style) */}
      <section className="relative w-full pt-20 z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 h-[35vh] sm:h-[45vh] w-full border border-slate-950 dark:border-slate-800 rounded-[1.5rem] overflow-hidden shadow-md">
          {/* Left Hero half: Farmer */}
          <div className="relative w-full h-full overflow-hidden group">
            <img 
              src={hero1Image} 
              alt="Vibrant agricultural fields" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-[1.03]"
            />
          </div>

          {/* Right Hero half: Trader Sourcing */}
          <div className="relative w-full h-full border-l border-slate-950 dark:border-slate-800 overflow-hidden group">
            <img 
              src={hero2Image} 
              alt="Fresh produce storage logistics" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Big Editorial Banner Header */}
        <div className="relative w-full py-8 md:py-10 border-b border-slate-950 dark:border-slate-800 bg-[#F9F9F6] dark:bg-[#0C0F12] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mt-6">
          <div className="text-left font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 w-full md:w-1/4">
            Mulyam Platform<br />
            Pune, MH, IN
          </div>
          
          <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl text-mulyam-blue dark:text-white text-center leading-none tracking-tighter uppercase w-full md:w-2/4">
            Our Solutions
          </h1>

          <div className="text-right font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 w-full md:w-1/4">
            Ecosystem Grid<br />
            Since 2023
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center relative z-10">
        <h2 className="font-sans font-black text-2xl sm:text-3xl text-mulyam-blue dark:text-white uppercase tracking-tight mb-6">
          It takes a community to grow a community.
        </h2>
        <div className="h-1 w-12 bg-mulyam-green rounded-full mx-auto mb-8"></div>
        <p className="font-sans font-normal text-slate-800 dark:text-slate-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Mulyam empowers the fresh produce supply chain with innovative technology solutions, connecting farmers directly to retail markets, optimizing transportation logistics, and ensuring quality and traceability from seed to shelf.
        </p>
      </section>

      {/* Main Content Modules with Sticky Slide-like behavior */}
      <section ref={containerRef} className="w-full relative z-10 h-[250vh] border-t border-slate-950 dark:border-slate-800 bg-[#F9F9F6] dark:bg-[#0C0F12]">
        <div className="sticky top-16 w-full h-[calc(100vh-4rem)] overflow-hidden bg-transparent">
          {/* Slide 1: Farmers */}
          <div className="absolute inset-0 w-full h-full bg-white dark:bg-[#0E1216] overflow-hidden">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 border-b border-slate-950 dark:border-slate-800">
              <div className="lg:col-span-7 p-8 lg:p-12 xl:p-16 flex flex-col justify-center h-full text-left">
                <motion.div style={{ y: s1HeadingY, opacity: s1HeadingOpacity }} className="flex flex-col gap-4">
                  <span className="font-mono text-xs font-bold text-mulyam-green uppercase tracking-widest block mb-1">
                    01 / Sourcing
                  </span>
                  <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-mulyam-blue dark:text-white uppercase tracking-tight mb-2">
                    Empowering <span className="text-mulyam-yellow">Farmers</span>
                  </h2>
                  <div className="h-1 w-24 bg-mulyam-green rounded-full" />
                </motion.div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed my-8 max-w-xl">
                  We connect farmers directly to a wide network of buyers, eliminating unnecessary intermediaries and ensuring they get the value their produce deserves.
                </p>

                <div className="space-y-6 max-w-2xl">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={handshakeIcon} alt="Direct market linkage" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Direct market linkage with assured offtake</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Large network of buyers from all the categories ensure complete liquidation of all the grades</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={pricingIcon} alt="Fair and transparent pricing" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Fair & Transparent Pricing</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Complete liquidation gives a better price realisation. This price is always better than market. No hidden fees</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={mobileTransferIcon} alt="Hassle free payment terms" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Hassle-free Payment terms</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">We ensure fastest payment cycles with least deductions. All the digital payments, credited directly to bank accounts.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-full bg-slate-50 dark:bg-slate-900 flex lg:border-l border-slate-950 dark:border-slate-800 overflow-hidden">
                <img
                  src={farmerImage}
                  alt="Farmer crop yield"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Slide 2: Buyers */}
          <motion.div style={{ y: y2 }} className="absolute inset-0 w-full h-full bg-white dark:bg-[#0E1216] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.12)]">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 border-b border-slate-950 dark:border-slate-800">
              <div className="lg:col-span-5 relative h-full bg-slate-50 dark:bg-slate-900 flex border-b lg:border-b-0 border-slate-950 dark:border-slate-800 overflow-hidden lg:order-1">
                <img
                  src={traderImage}
                  alt="Fresh vegetables warehouse sorting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 p-8 lg:p-12 xl:p-16 flex flex-col justify-center h-full text-left lg:border-l border-slate-950 dark:border-slate-800 lg:order-2">
                <motion.div style={{ y: s2HeadingY, opacity: s2HeadingOpacity }} className="flex flex-col gap-4">
                  <span className="font-mono text-xs font-bold text-mulyam-green uppercase tracking-widest block mb-1">
                    02 / Procurement
                  </span>
                  <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-mulyam-blue dark:text-white uppercase tracking-tight mb-2">
                    Freshness & Quality for <span className="text-mulyam-yellow">Buyers</span>
                  </h2>
                  <div className="h-1 w-24 bg-mulyam-yellow rounded-full" />
                </motion.div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed my-8 max-w-xl">
                  Our commitment to freshness is backed by technology and operational excellence, ensuring consistent quality at scale.
                </p>

                <div className="space-y-6 max-w-2xl">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={qualityAssuranceIcon} alt="Consistent quality" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Consistent Quality</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Operation excellence and strong quality checks ensure that we deliver best and consistent quality throughout the year.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={distributionIcon} alt="Traceability" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Traceability</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Complete origin traceability for enhanced food safety and trust using innovative technology including blockchains.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={supplyLogisticsIcon} alt="Reliable and efficient supply" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Reliable & Efficient Supply</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">99% fulfillment rate with less than 3% rejection in the last year.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slide 3: Transporters */}
          <motion.div style={{ y: y3 }} className="absolute inset-0 w-full h-full bg-white dark:bg-[#0E1216] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.12)]">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 border-b border-slate-950 dark:border-slate-800">
              <div className="lg:col-span-7 p-8 lg:p-12 xl:p-16 flex flex-col justify-center h-full text-left">
                <motion.div style={{ y: s3HeadingY, opacity: 1 }} className="flex flex-col gap-4">
                  <span className="font-mono text-xs font-bold text-mulyam-green uppercase tracking-widest block mb-1">
                    03 / Logistics
                  </span>
                  <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-mulyam-blue dark:text-white uppercase tracking-tight mb-2">
                    For <span className="text-mulyam-yellow">Transporters</span>
                  </h2>
                  <div className="h-1 w-24 bg-mulyam-green rounded-full" />
                </motion.div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed my-8 max-w-xl font-bold">
                  More business, less hassle.
                </p>

                <div className="space-y-6 max-w-2xl">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={streamlineDeliveryIcon} alt="Streamlined deliveries" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Streamlined Deliveries</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Efficiently manage trips from farm to mandi or dark stores.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={routeIcon} alt="Optimized routes" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Optimized Routes</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Reduce idle time and fuel costs with better route planning.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center shrink-0">
                      <img src={increasedBusinessIcon} alt="Increased business" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white">Increased Business</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Get access to a steady flow of delivery orders through our network.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-full bg-slate-50 dark:bg-slate-900 flex lg:border-l border-slate-950 dark:border-slate-800 overflow-hidden">
                <img
                  src={transporterImage}
                  alt="Logistics transportation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
