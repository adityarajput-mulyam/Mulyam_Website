interface MulyamLogoSVGProps {
  size?: number;
  strokeOnly?: boolean;
}

export default function MulyamLogoSVG({ size = 44, strokeOnly = false }: MulyamLogoSVGProps) {
  const fillProps = (color: string) => {
    if (strokeOnly) {
      return { fill: "none", stroke: "currentColor", strokeWidth: 2 };
    }
    return { fill: color };
  };

  return (
    <svg
      width={size}
      height={Math.round(size * 0.86)}
      viewBox="0 0 110 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mulyam-logo-svg"
    >
      {/* Left hump */}
      <circle cx="22" cy="55" r="22" {...fillProps("#00BD67")} />
      <rect x="0" y="33" width="44" height="40" rx="4" {...fillProps("#00BD67")} />

      {/* Middle hump */}
      <circle cx="55" cy="38" r="22" {...fillProps("#FFC400")} />
      <rect x="33" y="16" width="44" height="40" rx="4" {...fillProps("#FFC400")} />

      {/* Right hump */}
      <circle cx="88" cy="55" r="22" {...fillProps("#004B8B")} />
      <rect x="66" y="33" width="44" height="40" rx="4" {...fillProps("#004B8B")} />

      {/* Legs bottom */}
      <rect x="0" y="62" width="18" height="33" rx="9" {...fillProps("#00BD67")} />
      <rect x="37" y="62" width="18" height="33" rx="9" {...fillProps("#FFC400")} />
      <rect x="74" y="62" width="18" height="33" rx="9" {...fillProps("#004B8B")} />

      {/* Dot on middle hump */}
      <circle cx="55" cy="15" r="7" {...fillProps("#FFC400")} />
    </svg>
  );
}
