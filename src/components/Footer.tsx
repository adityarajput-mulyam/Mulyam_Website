import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import mulyamLogo from "../assets/logos/mulyam_logo_transparent.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#14181D] text-slate-300 pt-16 pb-8 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand & Contact Info (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={mulyamLogo}
                alt="Mulyam Logo"
                className="h-12 w-auto object-contain brightness-110"
              />
            </Link>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-md">
              Empowering the fresh produce supply chain with innovative technology
              solutions. Connecting farmers, traders, and retailers for a sustainable future.
            </p>

            <div className="space-y-3 pt-2 text-xs md:text-sm text-slate-300">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BD67] shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  Office: 922, 9th Floor, Solitaire Business Hub, Balewadi Highstreet, Baner, Pune - 411045
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00BD67] shrink-0" />
                <a
                  href="tel:+919890255532"
                  className="hover:text-white transition-colors text-slate-300 font-medium"
                >
                  +91-9890255532
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00BD67] shrink-0" />
                <a
                  href="mailto:info@mulyam.in"
                  className="hover:text-white transition-colors text-slate-300 font-medium"
                >
                  info@mulyam.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base md:text-lg font-bold text-white tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
              <li>
                <Link to="/home" className="hover:text-[#00BD67] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#00BD67] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#00BD67] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#00BD67] transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: More Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base md:text-lg font-bold text-white tracking-tight">
              More Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
              <li>
                <Link to="/about-us" className="hover:text-[#00BD67] transition-colors">
                  Sustainable Approach
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-[#00BD67] transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <a href="mailto:info@mulyam.in" className="hover:text-[#00BD67] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://mulyam.in/faq" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BD67] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Newsletter & Follow Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-base md:text-lg font-bold text-white tracking-tight mb-4">
                Get Newsletter
              </h4>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#1E232A] text-white placeholder-slate-500 text-xs md:text-sm px-4 py-2.5 rounded-lg border border-slate-700/80 focus:outline-none focus:border-[#00BD67] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00BD67] hover:bg-[#00BD67]/90 text-white font-extrabold text-xs md:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-4 h-4 fill-current stroke-none rotate-45" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Follow Us */}
            <div className="pt-2">
              <h4 className="text-base md:text-lg font-bold text-white tracking-tight mb-3">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                {/* YouTube Icon SVG */}
                <a
                  href="https://www.youtube.com/@Mulyamofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg bg-[#1E232A] hover:bg-[#00BD67] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/80 group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn Icon SVG */}
                <a
                  href="https://www.linkedin.com/company/mulyam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#1E232A] hover:bg-[#00BD67] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/80 group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2025 Mulyam. All Rights Reserved.</p>
          <p className="text-slate-400">Empowering Fresh Produce Supply Chain</p>
        </div>
      </div>
    </footer>
  );
}
