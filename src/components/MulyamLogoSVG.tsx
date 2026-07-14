interface MulyamLogoSVGProps {
  size?: number;
}

export default function MulyamLogoSVG({ size = 44 }: MulyamLogoSVGProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.86)}
      viewBox="0 0 110 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mulyam-logo-svg"
    >
      {/* Left hump - Green */}
      <circle cx="22" cy="55" r="22" fill="#00BD67" />
      <rect x="0" y="33" width="44" height="40" fill="#00BD67" rx="4" />

      {/* Middle hump - Yellow/Gold */}
      <circle cx="55" cy="38" r="22" fill="#FFC400" />
      <rect x="33" y="16" width="44" height="40" fill="#FFC400" rx="4" />

      {/* Right hump - Blue */}
      <circle cx="88" cy="55" r="22" fill="#004B8B" />
      <rect x="66" y="33" width="44" height="40" fill="#004B8B" rx="4" />

      {/* Legs bottom */}
      <rect x="0" y="62" width="18" height="33" rx="9" fill="#00BD67" />
      <rect x="37" y="62" width="18" height="33" rx="9" fill="#FFC400" />
      <rect x="74" y="62" width="18" height="33" rx="9" fill="#004B8B" />

      {/* Dot on middle hump - accent */}
      <circle cx="55" cy="15" r="7" fill="#FFC400" />
    </svg>
  );
}
