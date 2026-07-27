"use client";

import React, { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import ClickSpark from "@/components/ClickSpark";
import Preloader from "@/components/Preloader";
import mulyamLogo from "@/assets/logos/mulyam_logo_transparent.png";
import mulyamLogoEn from "@/assets/logos/mulyam_logo_en.png";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  useLenis();

  useEffect(() => {
    // Preload logo images on client mount
    [mulyamLogo, mulyamLogoEn].forEach((logo) => {
      const img = new Image();
      img.decoding = "async";
      img.src = typeof logo === "string" ? logo : (logo as any).src;
    });
  }, []);

  return (
    <ClickSpark
      sparkColor="#00BD67"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={400}
      easing="ease-out"
      extraScale={1.2}
    >
      <Preloader />
      {children}
    </ClickSpark>
  );
}
