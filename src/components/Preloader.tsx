import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mulyamLogoEn from "../assets/mulyam_logo_en.png";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#004B8B] flex flex-col justify-center items-center select-none"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mb-8 flex justify-center items-center"
          >
            <img src={mulyamLogoEn} alt="Mulyam Logo" className="h-16 w-auto object-contain" />
          </motion.div>

          {/* Loading line indicator */}
          <div className="w-40 h-[2px] bg-white/25 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
