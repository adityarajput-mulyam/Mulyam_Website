import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ExternalLink, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Activity, 
  GraduationCap, 
  Clock, 
  Briefcase,
  MapPin
} from "lucide-react";

// Local image imports for team visual cluster
import leaderYogesh from "../assets/team/leader_yogesh.webp";
import leaderMahesh from "../assets/team/leader_mahesh.webp";
import foundersImage from "../assets/images/founders.webp";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  linkedInUrl: string;
  overview: string;
  responsibilities: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "sales-manager",
    title: "Sales Manager",
    department: "Sales & Sourcing",
    location: "Mumbai, India",
    type: "Full-Time",
    experience: "3-5 Yrs Exp",
    linkedInUrl: "https://www.linkedin.com/company/mulyam/",
    overview: "We are seeking a driven Sales Manager to accelerate our demand-side network and build strong partnerships with retailers, institutions, and modern trade channels across Maharashtra.",
    responsibilities: [
      "Drive institutional and bulk buyer sales acquisition for fresh produce.",
      "Manage client relationships and ensure high retention and order fulfillment.",
      "Work closely with field sourcing teams to align supply with demand forecasts.",
      "Analyze market price fluctuations and optimize margin performance."
    ]
  },
  {
    id: "product-architect",
    title: "Product Architect",
    department: "Engineering",
    location: "Pune / Remote",
    type: "Full-Time",
    experience: "5+ Yrs Exp",
    linkedInUrl: "https://www.linkedin.com/company/mulyam/",
    overview: "Looking for a Lead Product Architect to design, scale, and maintain our farm-to-shelf digital supply chain platform, real-time dispatch systems, and inventory allocation algorithms.",
    responsibilities: [
      "Architect microservices for high-throughput supply chain operations.",
      "Lead technical design reviews, data modeling, and API integrations.",
      "Collaborate with product managers and field teams to streamline mobile workflow apps.",
      "Mentor junior engineers and champion code quality, security, and performance."
    ]
  }
];

export default function Careers() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#F9F9F6] text-[#004B8B] font-sans antialiased pt-24 lg:pt-28 pb-24 selection:bg-[#00BD67]/30 selection:text-[#004B8B]">
      
      {/* ── SECTION 1: THE HERO (SPLIT LAYOUT WITH ENHANCED CLUSTER WIDGET) ── */}
      <section className="px-6 lg:px-16 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Content & Uncluttered Typography) */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00BD67]/10 border border-[#00BD67]/30 text-[#00BD67] text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00BD67] animate-pulse" />
              Careers At Mulyam
            </div>

            {/* Cleaned Up & Uncluttered Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#004B8B] tracking-tight uppercase leading-[1.08]">
              Cultivate Your Potential. <br />
              <span className="text-[#00BD67]">Revolutionise Fresh Produce.</span>
            </h1>

            {/* Subheading / Descriptive Body */}
            <p className="text-lg text-[#004B8B]/80 leading-relaxed font-normal max-w-2xl">
              Transform India's agricultural supply chain with Mulyam. Whether you're passionate about technology, operations, or farmer empowerment, your work here directly impacts thousands of lives every day.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#open-positions"
                className="px-7 py-4 rounded-xl bg-[#004B8B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#00BD67] hover:text-[#004B8B] shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 group"
              >
                <span>Explore Open Positions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#benefits"
                className="px-7 py-4 rounded-xl border border-[#004B8B]/20 text-[#004B8B] font-bold text-xs uppercase tracking-wider hover:border-[#00BD67] hover:text-[#00BD67] transition-all duration-300"
              >
                Learn About Culture
              </a>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-black font-mono text-[#004B8B]">50,000+</div>
                <div className="text-xs text-[#004B8B]/60 font-medium">Farmers Network</div>
              </div>
              <div>
                <div className="text-2xl font-black font-mono text-[#00BD67]">100%</div>
                <div className="text-xs text-[#004B8B]/60 font-medium">Direct Sourcing</div>
              </div>
              <div>
                <div className="text-2xl font-black font-mono text-[#004B8B]">10+</div>
                <div className="text-xs text-[#004B8B]/60 font-medium">Agri Hubs</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Enhanced Floating Photo Cluster Widget) */}
          <motion.div 
            className="lg:col-span-5 relative h-[420px] sm:h-[460px] w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Soft Ambient Backdrop Glow */}
            <div className="absolute w-72 h-72 bg-[#00BD67]/15 rounded-full filter blur-3xl -z-10" />

            {/* Circle 1 - Top Left */}
            <div className="absolute top-2 left-2 sm:left-4 w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden z-10 hover:z-30 hover:scale-105 transition-all duration-300 group">
              <img 
                src={leaderYogesh} 
                alt="Mulyam Leadership" 
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Circle 2 - Top Right (Primary overlap) */}
            <div className="absolute top-14 right-2 sm:right-2 w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-white bg-white shadow-2xl overflow-hidden z-20 hover:scale-105 transition-all duration-300 group">
              <img 
                src={foundersImage} 
                alt="Mulyam Founders" 
                className="w-full h-full object-cover object-center grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Circle 3 - Bottom Center Offset */}
            <div className="absolute bottom-2 left-1/4 w-40 h-40 sm:w-52 sm:h-52 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden z-10 hover:z-30 hover:scale-105 transition-all duration-300 group">
              <img 
                src={leaderMahesh} 
                alt="Mulyam Operations" 
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Floating Glass Accent Pill */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 right-4 z-30 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-[#004B8B]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00BD67]" />
              <span>Direct Farm Supply Chain</span>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 2: BENEFITS GRID (ENHANCED CARDS WITH MULYAM STYLING) ── */}
      <section id="benefits" className="py-20 px-6 lg:px-16 bg-[#F9F9F6]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00BD67] font-bold">
              01 . OUR CULTURE & PERKS
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-[#004B8B] tracking-tight uppercase">
              Why Work With Us?
            </h2>
            <div className="h-1.5 w-20 bg-[#00BD67] mt-3 rounded-full mx-auto" />
            <p className="text-[#004B8B]/70 leading-relaxed text-base lg:text-lg pt-2">
              At Mulyam, taking care of our team is the foundation for creating meaningful, scalable impact across the agricultural ecosystem.
            </p>
          </div>

          {/* 2x2 Glassmorphic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#00BD67]/60 transition-all duration-300 space-y-5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#00BD67] group-hover:w-full transition-all duration-500" />
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#004B8B]/5 text-[#004B8B] flex items-center justify-center font-mono font-bold text-lg">
                  01
                </div>
                <div className="p-3 rounded-xl bg-[#00BD67]/10 text-[#00BD67]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#004B8B] group-hover:text-[#00BD67] transition-colors duration-200">
                  Health & Family Insurance
                </h3>
                <p className="text-[#004B8B]/70 leading-relaxed text-sm lg:text-base">
                  Comprehensive medical coverage for you and your dependents, with zero-deductible preventive care initiatives.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#00BD67]/60 transition-all duration-300 space-y-5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#00BD67] group-hover:w-full transition-all duration-500" />
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#004B8B]/5 text-[#004B8B] flex items-center justify-center font-mono font-bold text-lg">
                  02
                </div>
                <div className="p-3 rounded-xl bg-[#00BD67]/10 text-[#00BD67]">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#004B8B] group-hover:text-[#00BD67] transition-colors duration-200">
                  Health Focus Activities
                </h3>
                <p className="text-[#004B8B]/70 leading-relaxed text-sm lg:text-base">
                  Regular wellness initiatives, mental health counseling access, and sports/fitness allowances to keep you energized.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#00BD67]/60 transition-all duration-300 space-y-5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#00BD67] group-hover:w-full transition-all duration-500" />
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#004B8B]/5 text-[#004B8B] flex items-center justify-center font-mono font-bold text-lg">
                  03
                </div>
                <div className="p-3 rounded-xl bg-[#00BD67]/10 text-[#00BD67]">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#004B8B] group-hover:text-[#00BD67] transition-colors duration-200">
                  Learning & Growth Budget
                </h3>
                <p className="text-[#004B8B]/70 leading-relaxed text-sm lg:text-base">
                  Annual allowance for courses, technical books, global conferences, and professional certifications.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#00BD67]/60 transition-all duration-300 space-y-5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#00BD67] group-hover:w-full transition-all duration-500" />
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#004B8B]/5 text-[#004B8B] flex items-center justify-center font-mono font-bold text-lg">
                  04
                </div>
                <div className="p-3 rounded-xl bg-[#00BD67]/10 text-[#00BD67]">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#004B8B] group-hover:text-[#00BD67] transition-colors duration-200">
                  Flexi Benefits & Hardware
                </h3>
                <p className="text-[#004B8B]/70 leading-relaxed text-sm lg:text-base">
                  Flexible working schedules, Apple workstation hardware, and customizable perk choices tailored to your needs.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── SECTION 3: THE "MORE" CALLOUT BANNER ── */}
      <section className="py-12 px-6 lg:px-16 bg-[#F9F9F6]">
        <div className="max-w-7xl mx-auto bg-white border border-[#00BD67]/30 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow">
          
          <div className="space-y-2 max-w-xl">
            <div className="inline-block px-3 py-1 rounded-full bg-[#00BD67]/10 text-[#00BD67] font-mono text-xs font-bold uppercase tracking-wider mb-1">
              Perks Guarantee
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#004B8B]">And So Much More!</h3>
            <p className="text-[#004B8B]/70 leading-relaxed text-sm lg:text-base">
              Beyond these core benefits, we provide additional perks designed to support your personal life and long-term trajectory.
            </p>
          </div>

          {/* Flex Row of Pill Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-5 py-2.5 rounded-full bg-[#004B8B]/5 text-[#004B8B] font-mono text-xs lg:text-sm font-semibold border border-[#004B8B]/10">
              Competitive Salaries
            </span>
            <span className="px-5 py-2.5 rounded-full bg-[#004B8B]/5 text-[#004B8B] font-mono text-xs lg:text-sm font-semibold border border-[#004B8B]/10">
              Performance Bonuses
            </span>
            <span className="px-5 py-2.5 rounded-full bg-[#00BD67]/10 text-[#00BD67] font-mono text-xs lg:text-sm font-bold border border-[#00BD67]/30">
              Team Offsites & Activities
            </span>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: OPEN POSITIONS (THE INTERACTIVE LEDGER) ── */}
      <section id="open-positions" className="py-20 px-6 lg:px-16 bg-[#F9F9F6]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00BD67] font-bold">
              02 . CAREER OPPORTUNITIES
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-[#004B8B] tracking-tight uppercase">
              Open Positions
            </h2>
            <div className="h-1.5 w-20 bg-[#00BD67] mt-3 rounded-full mx-auto" />
            <p className="text-[#004B8B]/70 leading-relaxed text-base lg:text-lg pt-2">
              Join our mission to build resilient digital supply chain infrastructure across India.
            </p>
          </div>

          {/* The List Container */}
          <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80 bg-white/60 backdrop-blur-sm rounded-2xl px-4 lg:px-8 border border-slate-200/80 shadow-sm">
            {OPEN_POSITIONS.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div key={job.id} className="py-6 space-y-4 transition-colors hover:bg-white/80 rounded-xl px-2 lg:px-4">
                  
                  {/* Flex Container (Title & Metadata & Action) */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Left: Job Title & Badges */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-[#00BD67]" />
                        <h3 className="text-xl lg:text-2xl font-bold text-[#004B8B] tracking-tight">
                          {job.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-md bg-[#004B8B]/5 text-[#004B8B] text-xs font-mono font-medium">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 rounded-md bg-[#004B8B]/5 text-[#004B8B] text-xs font-mono font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#00BD67]" />
                          {job.location}
                        </span>
                        <span className="px-3 py-1 rounded-md bg-[#004B8B]/5 text-[#004B8B] text-xs font-mono font-medium">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 rounded-md bg-[#00BD67]/10 text-[#00BD67] text-xs font-mono font-bold">
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    {/* Right: Action Button */}
                    <div className="flex items-center gap-3 self-start md:self-center">
                      <a
                        href={job.linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#004B8B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#00BD67] hover:text-[#004B8B] shadow-sm transition-all duration-200 inline-flex items-center gap-1.5"
                      >
                        <span>Apply on LinkedIn</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                  {/* Accordion Toggle Trigger */}
                  <div>
                    <button
                      onClick={() => toggleAccordion(job.id)}
                      className="text-xs font-mono text-[#004B8B]/70 hover:text-[#00BD67] font-semibold inline-flex items-center gap-1.5 transition-colors py-1 cursor-pointer focus:outline-none"
                    >
                      <span>{isExpanded ? "Hide Details" : "View Details & Stack"}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#00BD67]" : ""}`} 
                      />
                    </button>
                  </div>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 text-sm text-[#004B8B]/80 space-y-4 border-t border-slate-200/60 mt-2">
                          <p className="leading-relaxed text-base">{job.overview}</p>
                          
                          <div className="space-y-2">
                            <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#00BD67]">
                              Key Responsibilities:
                            </span>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200/60">
                                  <CheckCircle2 className="w-4 h-4 text-[#00BD67] shrink-0 mt-0.5" />
                                  <span className="text-xs lg:text-sm text-[#004B8B]/90 font-medium">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 5: THE CATCH-ALL CTA ── */}
      <section className="py-24 px-6 lg:px-16 bg-[#F9F9F6] border-t border-slate-200/60">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00BD67] font-bold">
            03 . GET IN TOUCH
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-[#004B8B] tracking-tight uppercase">
            Don't See A Position That Fits?
          </h2>
          <div className="h-1.5 w-20 bg-[#00BD67] rounded-full mx-auto" />
          <p className="text-base lg:text-lg text-[#004B8B]/70 leading-relaxed max-w-xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for upcoming roles.
          </p>
          <div className="pt-2">
            <a
              href="mailto:careers@mulyam.in"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00BD67] text-[#004B8B] font-bold text-xs uppercase tracking-wider hover:bg-[#004B8B] hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Send Resume</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
