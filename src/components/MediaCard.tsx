import React from "react";
import { Calendar, ExternalLink, Play, Clock } from "lucide-react";
import TiltedWrapper from "./TiltedWrapper";

export interface MediaItem {
  id: string;
  publisher: string;
  publisherPill: string;
  date: string;
  title: string;
  description: string;
  badgeType: "Article" | "Video Interview" | "Marketing Video" | "Press Release";
  duration?: string;
  linkUrl: string;
  headerBg: string; // Tailwind class or custom bg color
  headerLogo: React.ReactNode; // SVG or custom React component logo
}

interface MediaCardProps {
  item: MediaItem;
}

export default function MediaCard({ item }: MediaCardProps) {
  const getBadgeStyle = (type: MediaItem["badgeType"]) => {
    switch (type) {
      case "Article":
        return "bg-[#00BD67] text-white";
      case "Video Interview":
      case "Marketing Video":
        return "bg-[#004B8B] text-white";
      case "Press Release":
        return "bg-[#FFC400] text-slate-900 font-black";
      default:
        return "bg-[#00BD67] text-white";
    }
  };

  const isVideo = item.badgeType.includes("Video");

  return (
    <a
      href={item.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-full"
    >
      <TiltedWrapper scaleOnHover={1.03} rotateAmplitude={8} className="w-full h-full">
        <div className="flex flex-col rounded-xl overflow-hidden w-full h-full">
          {/* Top Header Block with Publisher Logo */}
          <div
            className={`h-44 w-full relative flex items-center justify-center p-6 transition-transform duration-500 overflow-hidden ${item.headerBg}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* Duration Badge (Top Left for videos) */}
            {item.duration && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded bg-black/75 text-white font-mono text-[11px] font-bold backdrop-blur-md border border-white/10 shadow-sm">
                <Clock className="w-3 h-3 text-[#00BD67]" />
                <span>{item.duration}</span>
              </div>
            )}

            {/* Floating Category Badge (Top Right) */}
            <div
              className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md ${getBadgeStyle(
                item.badgeType
              )}`}
            >
              {item.badgeType}
            </div>

            {/* Logo Content */}
            <div className="relative z-0 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center w-full h-full">
              {item.headerLogo}
            </div>
          </div>

          {/* Card Body & Content (Option B: Floating White Card with Soft Shadow) */}
          <div className="flex-1 p-6 flex flex-col justify-between bg-white dark:bg-[#141B26] border border-slate-200/90 dark:border-slate-800/90 rounded-b-xl shadow-[0_8px_25px_-5px_rgba(0,0,0,0.08)] group-hover:shadow-[0_16px_36px_-6px_rgba(0,189,103,0.2)] group-hover:border-[#00BD67]/80 transition-all duration-300">
            
            <div>
              {/* Meta Row: Publisher Pill & Date */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#00BD67]/10 text-[#00BD67] dark:bg-[#00BD67]/20 border border-[#00BD67]/20">
                  {item.publisherPill}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5 opacity-70" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-base md:text-lg font-bold text-[#004B8B] dark:text-white line-clamp-2 leading-snug group-hover:text-[#00BD67] dark:group-hover:text-[#00BD67] transition-colors duration-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mt-2.5 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* Footer Outline Button */}
            <div className="mt-6">
              <div className="w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#00BD67] text-[#00BD67] group-hover:bg-[#00BD67] group-hover:text-white transition-all duration-300 shadow-sm">
                <span>{isVideo ? "WATCH VIDEO" : "READ ARTICLE"}</span>
                {isVideo ? (
                  <Play className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                )}
              </div>
            </div>

          </div>
        </div>
      </TiltedWrapper>
    </a>
  );
}
