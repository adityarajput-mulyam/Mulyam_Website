import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mulyamLogoEn from "../assets/logos/mulyam_logo_en.png";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Phase 1: Let the gooey loader swirl for 0.8s, then trigger the reveal sequence
    const tLoad = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    // Phase 2: After the logo spring animation settles, slide the preloader up
    const tDismiss = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(tLoad);
      clearTimeout(tDismiss);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`fixed inset-0 z-100 bg-mulyam-blue flex items-center justify-center select-none ${
            isLoaded ? "is-loaded pointer-events-none" : ""
          }`}
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Encapsulated styling for custom CSS filters, keyframe physics, and transitions */}
          <style>{`
            @keyframes gooey-motion {
              0% { transform: translate(0px, 0px); }
              33% { transform: translate(30px, -45px); }
              66% { transform: translate(-30px, 20px); }
              100% { transform: translate(0px, 0px); }
            }
            .gooey-dot {
              position: absolute;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              transform: translate3d(0, 0, 0);
              animation: gooey-motion 3s infinite ease-in-out;
            }

            /* --- Shockwaves --- */
            .shockwave-container {
              position: absolute;
              width: 140px;
              height: 140px;
              display: flex;
              justify-content: center;
              align-items: center;
              pointer-events: none;
            }
            .wave {
              position: absolute;
              width: 100%;
              height: 100%;
              transform: scale(0);
              border-radius: 50%;
              opacity: 0;
            }
            .wave-cyan { border: 4px solid #00ffff; }
            .wave-green { border: 4px solid #00bd67; }
            .wave-yellow { border: 4px solid #ffc400; }

            /* --- Logo Image --- */
            .logo-wrapper {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 10;
            }
            .logo-img {
              height: 96px;
              width: auto;
              object-fit: contain;
              transform: scale(0);
              opacity: 0;
            }

            /* =============================================
               TRIGGERED TRANSITIONS ONCE LOADED
               ============================================= */
            
            /* Fade out gooey dots container */
            .is-loaded .gooey-dots-wrap {
              opacity: 0;
              pointer-events: none;
              transition: opacity 0.3s ease-out;
            }

            /* Trigger concentric geometric morphing shockwaves */
            .is-loaded .wave {
              animation: geometric-shockwave 1.6s forwards;
            }
            .is-loaded .wave-cyan { animation-delay: 0s; }
            .is-loaded .wave-green { animation-delay: 0.12s; }
            .is-loaded .wave-yellow { animation-delay: 0.24s; }

            /* Trigger spring-loaded logo reveal with custom overshoot (easeOutBack) */
            .is-loaded .logo-img {
              animation: logo-spring-reveal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.45) forwards;
            }

            /* --- Keyframe Definitions --- */
            @keyframes geometric-shockwave {
              0% {
                transform: scale(0);
                border-radius: 50%;
                opacity: 0.9;
              }
              30% {
                opacity: 0.85;
              }
              100% {
                transform: scale(20);
                border-radius: 0%; /* Morphs circular wave to a sharp square boundary */
                opacity: 0;
              }
            }

            @keyframes logo-spring-reveal {
              0% {
                transform: scale(0);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>

          {/* 1. Gooey Loading Dots (wrapped so we can fade out) */}
          <div className="gooey-dots-wrap relative flex items-center justify-center w-48 h-48 filter-[url(#gooey-filter)]">
            <div className="gooey-dot bg-[#00ffff]" style={{ animationDelay: "0s" }} />
            <div className="gooey-dot bg-[#00bd67]" style={{ animationDelay: "-1s" }} />
            <div className="gooey-dot bg-[#ffc400]" style={{ animationDelay: "-2s" }} />

            {/* SVG gooey filter definition */}
            <svg className="hidden">
              <defs>
                <filter id="gooey-filter">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>

          {/* 2. Concentric geometric shockwaves behind logo */}
          <div className="shockwave-container">
            <div className="wave wave-cyan" />
            <div className="wave wave-green" />
            <div className="wave wave-yellow" />
          </div>

          {/* 3. Spring-loaded Mulyam logo image */}
          <div className="logo-wrapper">
            <img
              src={mulyamLogoEn}
              alt="Mulyam Logo"
              loading="eager"
              decoding="async"
              className="logo-img"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
