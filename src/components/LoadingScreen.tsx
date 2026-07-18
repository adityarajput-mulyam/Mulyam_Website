import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { LogoReveal } from './LogoReveal';

export interface LoadingScreenProps {
  /** Whether the loader covers the entire screen (fixed overlay). Defaults to true. */
  fullScreen?: boolean;
  /** Callback triggered when the splash animation completes and fades out. */
  onComplete?: () => void;
  /** Optional custom class name for the root container. */
  className?: string;
}

type LoaderState = 'idle' | 'pulsing' | 'merging' | 'revealed';

export function LoadingScreen({
  fullScreen = true,
  onComplete,
  className,
}: LoadingScreenProps) {
  const [state, setState] = React.useState<LoaderState>('idle');
  const [isVisible, setIsVisible] = React.useState(true);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = React.useState(false);

  // 1. Detect actual website load event (resilient check)
  React.useEffect(() => {
    if (document.readyState !== 'loading') {
      setPageLoaded(true);
    } else {
      const handleLoad = () => setPageLoaded(true);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // 2. Safety fallback timer + state sequence controller
  React.useEffect(() => {
    // 0.0s - 0.3s: Idle (nothing except background)
    const tPulsing = setTimeout(() => {
      setState('pulsing');
    }, 300);

    // Enforce a minimum pulsing duration of 1200ms (total elapsed time 1500ms)
    const tMinTime = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1500);

    // Safety fallback: if page load hasn't fired in 4 seconds, force transition
    const tFallback = setTimeout(() => {
      setPageLoaded(true);
    }, 4000);

    return () => {
      clearTimeout(tPulsing);
      clearTimeout(tMinTime);
      clearTimeout(tFallback);
    };
  }, []);

  // 3. Transition once page is loaded AND minimum pulsing time has elapsed
  React.useEffect(() => {
    if (state === 'pulsing' && pageLoaded && minTimeElapsed) {
      setState('merging');

      // Merging duration: 500ms (dots slide and scale to 0 in center)
      const tRevealed = setTimeout(() => {
        setState('revealed');
      }, 500);

      // Logo display duration: 800ms before starting exit fade-out
      const tFadeOut = setTimeout(() => {
        setIsVisible(false);
      }, 1300);

      return () => {
        clearTimeout(tRevealed);
        clearTimeout(tFadeOut);
      };
    }
  }, [state, pageLoaded, minTimeElapsed]);

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onComplete?.();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div
          role="status"
          aria-busy="true"
          className={cn(
            'flex flex-col items-center justify-center overflow-hidden bg-[#004B8B]',
            fullScreen ? 'fixed inset-0 z-[100]' : 'relative w-full min-h-[400px] rounded-xl',
            className
          )}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }} // 200ms exit fade-out
        >
          <LogoReveal state={state} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

LoadingScreen.displayName = 'LoadingScreen';
