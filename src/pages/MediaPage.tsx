import { useState, useMemo } from "react";
import { Download, Mail } from "lucide-react";
import MediaCard, { type MediaItem } from "../components/MediaCard";
import MediaHeroWrapper from "../components/MediaHeroWrapper";

// Mock press items matching reference image
const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "indian-express",
    publisher: "Indian Express",
    publisherPill: "Indian Express",
    date: "October 1, 2024",
    title: "Pune Inc: An Amazon-like platform for fruits and vegetables to bring farmers close to...",
    description: "Yogesh Kadam founded Mulyam Agronomics in 2023 and it will launch a full-fledged B2B marketplace in the next six months.",
    badgeType: "Article",
    linkUrl: "https://indianexpress.com/article/cities/pune/pune-inc-an-amazon-like-platform-for-fruits-and-vegetables-to-bring-farmers-close-to-buyers-9602498/",
    headerBg: "bg-white border-b border-slate-100",
    headerLogo: (
      <div className="flex flex-col items-center justify-center text-center px-4">
        {/* Indian Express Feather / Flame Icon */}
        <div className="flex items-center gap-3">
          <svg className="w-10 h-10 text-[#E31B23]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M70,10 C50,30 30,20 10,50 C30,40 50,60 40,90 C60,70 80,80 90,50 C80,60 60,40 70,10 Z" />
            <path d="M45,25 C35,40 25,35 15,55 C28,48 40,62 35,80 C50,65 65,72 72,50 C65,58 50,42 45,25 Z" fill="#C2185B" />
          </svg>
          <div className="text-left leading-tight">
            <span className="block font-black tracking-tighter text-slate-900 text-lg md:text-xl font-serif uppercase">
              The Indian
            </span>
            <span className="block font-black tracking-widest text-[#E31B23] text-sm font-sans uppercase">
              EXPRESS
            </span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "yourstory",
    publisher: "YourStory",
    publisherPill: "YourStory",
    date: "January 2025",
    title: "Startup Agritech Mulyam: AI helps farmers expand market reach",
    description: "Mulyam leverages AI technology to help farmers expand their market reach and optimize supply chain operations.",
    badgeType: "Article",
    linkUrl: "https://yourstory.com",
    headerBg: "bg-[#E31B23]",
    headerLogo: (
      <div className="flex items-center justify-center w-full">
        <div className="border-4 border-white px-5 py-2.5 bg-[#E31B23] shadow-lg">
          <span className="text-white font-black text-2xl md:text-3xl tracking-tighter uppercase font-sans block leading-none text-center">
            YOUR<br />STORY
          </span>
        </div>
      </div>
    )
  },
  {
    id: "hindustan-times",
    publisher: "Hindustan Times",
    publisherPill: "Hindustan Times",
    date: "August 13, 2025",
    title: "Startup Mantra: From the farm to your plate",
    description: "Mulyam's innovative approach to connecting farmers directly with consumers through technology.",
    badgeType: "Article",
    linkUrl: "https://hindustantimes.com",
    headerBg: "bg-[#F0F7FB] dark:bg-[#1E293B]",
    headerLogo: (
      <div className="flex items-center justify-center gap-3">
        <div className="w-16 h-16 rounded-full bg-[#00A3DA] flex items-center justify-center text-white shadow-md">
          <span className="font-serif font-black text-2xl tracking-tighter italic">HT</span>
        </div>
        <div className="text-left">
          <span className="block font-serif font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight">
            Hindustan Times
          </span>
        </div>
      </div>
    )
  },
  {
    id: "ndtv-marathi",
    publisher: "NDTV",
    publisherPill: "NDTV",
    date: "2025",
    title: "NDTV Interview with Rahul Kulkarni",
    description: "Exclusive interview discussing Mulyam's mission and impact on agricultural supply chains.",
    badgeType: "Video Interview",
    duration: "15:30",
    linkUrl: "https://marathi.ndtv.com",
    headerBg: "bg-[#800000]",
    headerLogo: (
      <div className="flex flex-col items-center justify-center">
        <div className="bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-white/10 flex flex-col items-center">
          <span className="text-white font-black text-3xl tracking-tighter font-sans uppercase">
            NDTV
          </span>
          <span className="text-[#FFC400] font-bold text-lg mt-0.5 tracking-wide">
            मराठी
          </span>
        </div>
      </div>
    )
  },
  {
    id: "mulyam-marketing-video",
    publisher: "Mulyam",
    publisherPill: "Mulyam",
    date: "2025",
    title: "Mulyam Marketing Video",
    description: "Official marketing video showcasing Mulyam's services and farmer success stories.",
    badgeType: "Marketing Video",
    duration: "3:45",
    linkUrl: "https://youtube.com",
    headerBg: "bg-gradient-to-br from-[#990000] via-[#CC0000] to-[#800000]",
    headerLogo: (
      <div className="flex items-center justify-center">
        <div className="w-16 h-12 bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-xl border border-white/20 group-hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-white ml-1" />
        </div>
      </div>
    )
  },
  {
    id: "cxo-outlook",
    publisher: "CXOToday",
    publisherPill: "CXOToday",
    date: "2025",
    title: "Agri-tech start-up Mulyam empowers 3000+ farmers, supplies over 12,000 metric ton...",
    description: "Press release highlighting Mulyam's significant impact on farmer empowerment and supply chain efficiency.",
    badgeType: "Press Release",
    linkUrl: "https://cxotoday.com",
    headerBg: "bg-white border-b border-slate-100",
    headerLogo: (
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-baseline gap-1">
          <span className="font-serif font-black text-slate-900 text-3xl tracking-tight">CXO</span>
          <span className="font-sans font-extrabold text-[#00A3DA] text-xs uppercase tracking-widest bg-[#00A3DA]/10 px-1.5 py-0.5 rounded">
            OUTLOOK
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">
          INSIGHTS, IDEAS, INSPIRATIONS
        </span>
      </div>
    )
  },
  {
    id: "startup-talky",
    publisher: "Startup Talky",
    publisherPill: "Startup Talky",
    date: "2025",
    title: "Mulyam Agritech Startup: Redefining fruits & vegetable supply chain",
    description: "Comprehensive coverage of how Mulyam is revolutionizing the agricultural supply chain industry.",
    badgeType: "Article",
    linkUrl: "https://startuptalky.com",
    headerBg: "bg-[#FFF8F0] dark:bg-[#2A1B14]",
    headerLogo: (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-[#FF5722] text-white flex items-center justify-center shadow-md rotate-[-6deg]">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div className="text-left">
          <span className="block font-black text-[#FF5722] text-xl tracking-tight leading-none">
            Startup
          </span>
          <span className="block font-black text-slate-800 dark:text-slate-100 text-lg tracking-tight leading-none">
            Talky
          </span>
        </div>
      </div>
    )
  }
];

export default function MediaPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    return MEDIA_ITEMS.filter((item) => {
      // Category filter
      let matchesCategory = true;
      if (selectedFilter === "Articles") {
        matchesCategory = item.badgeType === "Article";
      } else if (selectedFilter === "Videos") {
        matchesCategory = item.badgeType.includes("Video");
      } else if (selectedFilter === "Press Releases") {
        matchesCategory = item.badgeType === "Press Release";
      }

      // Search query filter
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.publisher.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#EEF2F6] dark:bg-[#0A0D11] pb-24 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <MediaHeroWrapper
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="max-w-7xl mx-auto px-6 mt-12">

        {/* 3-Column Staggered Media Cards Grid with Ample Gap Spacing (gap-8) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredItems.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#141B26] rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-slate-500 dark:text-slate-400 text-base font-semibold">
              No press coverage found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("All");
              }}
              className="mt-4 px-4 py-2 bg-[#00BD67] text-white text-xs font-bold uppercase rounded-lg shadow-sm hover:bg-[#00BD67]/90 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Press Kit & Media Contact CTA Banner */}
        <div className="mt-20 bg-gradient-to-br from-[#004B8B] to-[#002D54] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          {/* Decorative Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BD67]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-block text-[#00BD67] text-xs font-extrabold uppercase tracking-widest mb-2">
                MEDIA RESOURCES & PRESS INQUIRIES
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                Need Official Assets Or An Interview?
              </h2>
              <p className="text-slate-300 text-xs md:text-sm mt-2 max-w-xl leading-relaxed">
                Download our official media kit including high-res logos, brand guidelines, founder bios, and product images, or reach out to our communications team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <a
                href="mailto:press@mulyam.in"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#004B8B] font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact PR Team</span>
              </a>
              <a
                href="#download-kit"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#00BD67] hover:bg-[#00BD67]/90 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Press Kit</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
