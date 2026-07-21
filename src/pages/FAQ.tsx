import { useState, useMemo } from "react";
import { Search, ChevronDown, HelpCircle, PhoneCall, Mail, Sparkles } from "lucide-react";

interface FAQItem {
  id: string;
  category: "General" | "Farmers & FPOs" | "Retailers & Buyers" | "Technology & Quality" | "Logistics & Payments";
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // General
  {
    id: "what-is-mulyam",
    category: "General",
    question: "What is Mulyam and what does the name signify?",
    answer: "Mulyam (meaning 'value' or 'worth' in Sanskrit & Hindi) is a tech-enabled B2B agritech marketplace founded in 2023. We eliminate supply chain friction by connecting farmers and Farmer Producer Organizations (FPOs) directly with retailers, quick-commerce dark stores, and wholesale buyers across India."
  },
  {
    id: "mulyam-mission",
    category: "General",
    question: "What is Mulyam's primary mission in Indian agriculture?",
    answer: "Our mission is to bring 100% price transparency and zero-middlemen efficiency to the fresh produce ecosystem. We empower farmers with scientific crop advisory, AI-backed market intelligence, and direct market linkage to maximize price realization and reduce post-harvest wastage."
  },
  {
    id: "where-headquarters",
    category: "General",
    question: "Where is Mulyam based and which regions do you operate in?",
    answer: "Mulyam Agronomics Private Limited is headquartered in Pune, Maharashtra (Solitaire Business Hub, Baner). Our active supply chain network spans over 500+ APMC Mandi markets and thousands of farmers across Maharashtra, Uttar Pradesh, Punjab, Haryana, and Karnataka."
  },

  // Farmers & FPOs
  {
    id: "farmer-benefits",
    category: "Farmers & FPOs",
    question: "How does Mulyam help farmers achieve higher crop earnings?",
    answer: "By bypassing traditional multi-tiered middlemen, Mulyam transfers maximum margin value back to growers. Farmers get real-time price discovery, guaranteed transparent weighing, instant digital settlements, and direct access to high-demand urban buyer networks."
  },
  {
    id: "farmer-advisory",
    category: "Farmers & FPOs",
    question: "What agronomy advisory and technical support does Mulyam provide?",
    answer: "In partnership with agricultural institutes like ICAR and cloud partners like ESDS, Mulyam provides growers with AI-driven weather forecasts, soil health advisory, disease prevention insights, and customized crop calendar guidance to improve yield quality."
  },
  {
    id: "fpo-onboarding",
    category: "Farmers & FPOs",
    question: "How can Farmers or FPOs onboard with Mulyam?",
    answer: "Farmers and FPOs can register through our field procurement centers or reach out via our helpline at +91-9890255532. Our ground executive team visits partner farms to set up digital profiles and conduct quality grading."
  },

  // Retailers & Buyers
  {
    id: "who-can-buy",
    category: "Retailers & Buyers",
    question: "Who can purchase fresh fruits and vegetables through Mulyam?",
    answer: "Our B2B marketplace serves modern supermarket chains, quick-commerce dark stores, HORECA (Hotels, Restaurants, Caterers), regional wholesalers, and independent retail chains looking for consistent, farm-fresh produce."
  },
  {
    id: "produce-range",
    category: "Retailers & Buyers",
    question: "What varieties of produce are available on the Mulyam platform?",
    answer: "We offer a wide catalog including staple vegetables (onions, potatoes, tomatoes), leafy greens, seasonal Indian fruits, exotic vegetables, and regional specialty crops sourced directly from partner farm clusters."
  },
  {
    id: "quality-control",
    category: "Retailers & Buyers",
    question: "How does Mulyam guarantee quality grading and freshness?",
    answer: "Every batch undergoes rigorous multi-point quality audits at our collection hubs. Produce is sorted, graded according to size/freshness specifications, and packed in temperature-controlled environments to minimize transit loss."
  },

  // Technology & Quality
  {
    id: "ai-market-intelligence",
    category: "Technology & Quality",
    question: "How does Mulyam leverage AI and data technology?",
    answer: "Our proprietary AI engines analyze historical market prices, weather patterns, and regional demand spikes across 500+ mandis. This allows us to provide predictive price discovery for farmers and reliable inventory planning for retail partners."
  },
  {
    id: "traceability-system",
    category: "Technology & Quality",
    question: "Is farm-to-store traceability available for buyers?",
    answer: "Yes, Mulyam implements digital crop tracking from harvest to dispatch. Buyers can track batch origin, harvest date, mandi route, and quality test reports via our logistics dashboard."
  },

  // Logistics & Payments
  {
    id: "cold-chain-logistics",
    category: "Logistics & Payments",
    question: "What logistics and cold-chain infrastructure does Mulyam utilize?",
    answer: "Mulyam operates optimized fleet routes equipped with temperature-controlled logistics, reducing harvest-to-retail transit time to under 24 hours while cutting post-harvest spoilage significantly below industry averages."
  },
  {
    id: "payment-terms",
    category: "Logistics & Payments",
    question: "What are the payment settlement cycles for farmers and suppliers?",
    answer: "We prioritize financial transparency with direct bank transfer settlements (UPI/NEFT) immediately upon quality verification at collection hubs, ensuring zero payment delays for farming communities."
  }
];

const CATEGORIES = [
  "All",
  "General",
  "Farmers & FPOs",
  "Retailers & Buyers",
  "Technology & Quality",
  "Logistics & Payments"
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openId, setOpenId] = useState<string | null>("what-is-mulyam");

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] dark:bg-[#0A0D11] pt-28 pb-24 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* Hero Header Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-[#00BD67]/10 text-[#00BD67] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest border border-[#00BD67]/20 mb-4">
          <HelpCircle className="w-4 h-4" />
          <span>HELP CENTER & FAQS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#004B8B] dark:text-white tracking-tight uppercase mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about Mulyam&apos;s B2B marketplace, farmer advisory, AI technology, and supply chain network.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. price, advisory, payments)..."
            className="w-full bg-white dark:bg-[#141B26] text-slate-800 dark:text-white placeholder-slate-400 text-sm pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none focus:outline-none focus:border-[#00BD67] transition-all"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Category Pill Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#00BD67] text-white shadow-md shadow-[#00BD67]/20"
                    : "bg-white dark:bg-[#141B26] text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-[#00BD67]/50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white dark:bg-[#141B26] rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#00BD67] shadow-lg shadow-[#00BD67]/5"
                      : "border-slate-200/90 dark:border-slate-800 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-[#004B8B]/10 text-[#004B8B] dark:bg-[#00BD67]/20 dark:text-[#00BD67]">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#00BD67] text-white rotate-180"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1">
                      <p className="mt-3">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-[#141B26] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-slate-600 dark:text-slate-400 font-semibold text-base">
              No questions found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-[#00BD67] text-white text-xs font-bold uppercase rounded-lg shadow-sm hover:bg-[#00BD67]/90 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Contact Support CTA Box */}
        <div className="mt-16 bg-gradient-to-br from-[#004B8B] to-[#002D54] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="relative z-10 space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-[#00BD67] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Still Have Questions?
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              Our Advisory & Support Team Is Here To Help
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
              Reach out directly to learn more about farmer registration, bulk produce procurement, or supply chain partnerships.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:+919890255532"
              className="w-full sm:w-auto px-5 py-3 bg-white text-[#004B8B] font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#00BD67]" />
              <span>Call Support</span>
            </a>

            <a
              href="mailto:info@mulyam.in"
              className="w-full sm:w-auto px-5 py-3 bg-[#00BD67] hover:bg-[#00BD67]/90 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
