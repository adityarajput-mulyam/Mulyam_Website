import { useEffect } from "react";
import Lenis from "lenis";

/**
 * useLenis — initializes a global Lenis smooth-scroll instance.
 * Call once at the app root. Lenis drives the native window scroll,
 * so all downstream CSS transforms / Framer Motion useScroll hooks
 * continue to work without modification.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
}
