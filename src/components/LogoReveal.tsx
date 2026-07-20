import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { cn } from '../lib/utils';
import mulyamLogoEn from '../assets/logos/mulyam_logo_en.png';

export interface LogoRevealProps {
  state: 'idle' | 'pulsing' | 'merging' | 'revealed';
  className?: string;
}

export function LogoReveal({ state, className }: LogoRevealProps) {
  const isPulsing = state === 'pulsing';
  const isMerging = state === 'merging';
  const isRevealed = state === 'revealed';

  // Lighter blue/sky blue for dot 1 so it stands out against the deep blue background
  const initialBlueDotColor = '#87b6ec';

  // Variants for Dot 1 (Blue) - Starts at cx=40. Animates x: 20 to merge into center (cx=60)
  const dot1Variants: Variants = {
    idle: { opacity: 0, scale: 0, x: 0, y: 0 },
    pulsing: {
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1.2, 0.8],
      y: [-4, 4, -4],
      x: 0,
      transition: {
        y: { repeat: Infinity, duration: 2.3, ease: 'easeInOut' as const },
        scale: { repeat: Infinity, duration: 1.0, ease: 'easeInOut' as const, delay: 0 },
        opacity: { repeat: Infinity, duration: 1.0, ease: 'easeInOut' as const, delay: 0 },
      },
    },
    merging: {
      x: 20,
      y: 0,
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    revealed: {
      x: 20,
      y: 0,
      scale: 0,
      opacity: 0,
    },
  };

  // Variants for Dot 2 (Green) - Starts at cx=60. Stays at x: 0 to merge in center
  const dot2Variants: Variants = {
    idle: { opacity: 0, scale: 0, x: 0, y: 0 },
    pulsing: {
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1.2, 0.8],
      y: [3, -3, 3],
      x: 0,
      transition: {
        y: { repeat: Infinity, duration: 1.9, ease: 'easeInOut' as const },
        scale: { repeat: Infinity, duration: 1.0, ease: 'easeInOut' as const, delay: 0.2 },
        opacity: { repeat: Infinity, duration: 1.0, ease: 'easeInOut' as const, delay: 0.2 },
      },
    },
    merging: {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    revealed: {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
    },
  };

  // Variants for Dot 3 (Yellow) - Starts at cx=80. Animates x: -20 to merge into center (cx=60)
  const dot3Variants: Variants = {
    idle: { opacity: 0, scale: 0, x: 0, y: 0 },
    pulsing: {
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1.2, 0.8],
      y: [-5, 2, -5],
      x: 0,
      transition: {
        y: { repeat: Infinity, duration: 2.6, ease: 'easeInOut' as const },
        scale: { repeat: Infinity, duration: 1.0, ease: 'easeInOut' as const, delay: 0.4 },
        opacity: { repeat: Infinity, duration: 1.0, ease: 'easeInOut' as const, delay: 0.4 },
      },
    },
    merging: {
      x: -20,
      y: 0,
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    revealed: {
      x: -20,
      y: 0,
      scale: 0,
      opacity: 0,
    },
  };

  // PNG Logo image fade-in and pop-out transition
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 140,
        damping: 14,
        mass: 0.8,
      },
    },
  };

  return (
    <div className={cn('relative flex items-center justify-center w-64 h-64', className)}>
      {/* SVG Container for the merging dots */}
      {(isPulsing || isMerging) && (
        <svg
          viewBox="0 0 120 120"
          className="absolute inset-0 w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={40}
            cy={60}
            r={6}
            fill={initialBlueDotColor}
            variants={dot1Variants}
            initial="idle"
            animate={state}
          />
          <motion.circle
            cx={60}
            cy={60}
            r={6}
            fill="#00bd67"
            variants={dot2Variants}
            initial="idle"
            animate={state}
          />
          <motion.circle
            cx={80}
            cy={60}
            r={6}
            fill="#ffc400"
            variants={dot3Variants}
            initial="idle"
            animate={state}
          />
        </svg>
      )}

      {/* Actual PNG Logo image that fades/scales up from the merged center */}
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate={isRevealed ? 'visible' : 'hidden'}
        className="flex items-center justify-center"
      >
        <img
          src={mulyamLogoEn}
          alt="Mulyam Logo"
          loading="eager"
          decoding="async"
          className="h-16 w-auto object-contain select-none pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

LogoReveal.displayName = 'LogoReveal';
