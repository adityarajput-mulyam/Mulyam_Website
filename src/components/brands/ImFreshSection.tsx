import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Award, 
  Sparkles, 
  Sprout, 
  Truck, 
  ShieldCheck,
  Clock,
  MapPin
} from "lucide-react";
import imFreshLogo from "../../assets/logos/imfresh.png";

// Parallax Produce Card Sub-component
function ParallaxProduceCard({ 
  produce 
}: { 
  produce: {
    title: string;
    category: string;
    description: string;
    image: string;
    badgeColor: string;
  };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Parallax Image Header */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
        <motion.img 
          src={produce.image} 
          alt={produce.title}
          style={{ y: imageY }} 
          className="w-full h-[120%] object-cover absolute -top-[10%] left-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span 
            className="text-[10px] font-extrabold tracking-wider text-white uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-md"
            style={{ backgroundColor: produce.badgeColor }}
          >
            {produce.category}
          </span>
        </div>
      </div>

      {/* Produce Info */}
      <div className="p-5">
        <h4 className="text-lg font-extrabold text-[#004B8B] tracking-tight mb-1">
          {produce.title}
        </h4>
        <p className="text-slate-600 text-xs leading-relaxed">
          {produce.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ImFreshSection() {
  const qualityStandards = [
    {
      title: "Certified Quality",
      description: "Every product undergoes rigorous quality checks and certification processes to ensure only the best reaches your table.",
      icon: Award,
      color: "#00BD67"
    },
    {
      title: "AI-Powered Inspection",
      description: "Advanced AI technology ensures consistent quality assessment, eliminating human error and maintaining high standards.",
      icon: Sparkles,
      color: "#004B8B"
    },
    {
      title: "Sustainable Sourcing",
      description: "We work directly with farmers practicing sustainable agriculture, ensuring environmental responsibility at every step.",
      icon: Sprout,
      color: "#00BD67"
    },
    {
      title: "Fresh Delivery",
      description: "Our efficient cold chain logistics maintain product freshness from farm to market, preserving nutrients and taste.",
      icon: Truck,
      color: "#FFC400"
    }
  ];

  const produceItems = [
    {
      title: "Premium Onions",
      category: "Vegetables",
      description: "Farm-fresh onions packed with nutrients and delivered at peak freshness",
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=85",
      badgeColor: "#00BD67"
    },
    {
      title: "Fresh Apples",
      category: "Fruits",
      description: "Handpicked seasonal apples ensuring the best taste and quality",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=85",
      badgeColor: "#00BD67"
    },
    {
      title: "Quality Potatoes",
      category: "Vegetables",
      description: "Crisp and fresh potatoes perfect for your healthy meals",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=85",
      badgeColor: "#00BD67"
    },
    {
      title: "Citrus Oranges",
      category: "Fruits",
      description: "Carefully sourced fresh oranges bursting with vitamin C and flavor",
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=85",
      badgeColor: "#00BD67"
    }
  ];

  return (
    <section className="relative bg-[#F9F9F6] py-16 md:py-24 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <span className="text-xs font-bold tracking-widest text-[#004B8B] uppercase bg-[#004B8B]/10 px-3.5 py-1.5 rounded-full border border-[#004B8B]/20">
            PLATFORM 01 · CONSUMER & RETAIL BRAND
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#004B8B] tracking-tight mt-4">
            The I'mFresh Legacy
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mt-2">
            A registered trademark of Mulyam Agronomics, bringing certified farm-fresh produce directly to Indian homes.
          </p>
        </div>

        {/* 2-Column Layout Container (I'M FRESH PINNED ON LEFT SIDE) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: PINNED LOGO & STORY CARD (STICKY ON LEFT, lg:order-1) */}
          <div className="lg:col-span-5 lg:order-1 lg:sticky lg:top-28 flex flex-col justify-center py-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-7 border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.05)] text-center relative overflow-hidden"
            >
              {/* Balanced Prominent Logo Container */}
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2 rounded-2xl bg-white mb-4 overflow-hidden border border-slate-100">
                <img 
                  src={imFreshLogo} 
                  alt="I'mFresh Logo" 
                  className="h-full w-auto object-contain mix-blend-multiply scale-95 transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* The Story Behind I'mFresh Title */}
              <h3 className="text-xl font-extrabold text-[#004B8B] tracking-tight mb-3">
                The Story Behind I'mFresh
              </h3>
              
              {/* Story Copy */}
              <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3 text-left mb-6 font-normal">
                <p>
                  I'mFresh was born from a simple yet powerful vision: to create a brand that consumers could trust for the freshest, highest-quality fruits and vegetables.
                </p>
                <p>
                  As a registered trademark of Mulyam Agronomics, I'mFresh represents our commitment to bringing farm-fresh produce directly to consumers. Every package bearing the I'mFresh logo is a promise of quality, freshness, and trust.
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-[#00BD67] mx-auto mb-1" />
                  <span className="text-xs font-extrabold text-[#004B8B] block">100%</span>
                  <span className="text-[10px] text-slate-500 font-semibold block">Assured</span>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-[#004B8B] mx-auto mb-1" />
                  <span className="text-xs font-extrabold text-[#004B8B] block">24/7</span>
                  <span className="text-[10px] text-slate-500 font-semibold block">Monitoring</span>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-[#FFC400] mx-auto mb-1" />
                  <span className="text-xs font-extrabold text-[#004B8B] block">Pan-India</span>
                  <span className="text-[10px] text-slate-500 font-semibold block">Presence</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: SCROLLING QUALITY STANDARDS & PRODUCE SHOWCASE (lg:order-2) */}
          <div className="lg:col-span-7 lg:order-2 flex flex-col gap-10 pb-12">
            
            {/* 1. Quality Standards That Define Excellence */}
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-extrabold tracking-widest text-[#00BD67] uppercase bg-[#00BD67]/10 px-3 py-1 rounded-full border border-[#00BD67]/20">
                  BENCHMARKS OF FRESHNESS
                </span>
                <h3 className="text-2xl font-extrabold text-[#004B8B] tracking-tight mt-3">
                  Quality Standards That Define Excellence
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityStandards.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ 
                          backgroundColor: `${item.color}15`,
                          color: item.color === "#FFC400" ? "#B78100" : item.color 
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-[#004B8B] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 2. Produce Range Showcase (Produce Grid) */}
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-extrabold tracking-widest text-[#004B8B] uppercase bg-[#004B8B]/10 px-3 py-1 rounded-full border border-[#004B8B]/20">
                  OUR PRODUCE RANGE
                </span>
                <h3 className="text-2xl font-extrabold text-[#004B8B] tracking-tight mt-3">
                  Farmgate Freshness Catalog
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  From everyday essentials to seasonal varieties, I'mFresh delivers quality you can trust.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {produceItems.map((produce) => (
                  <ParallaxProduceCard key={produce.title} produce={produce} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
