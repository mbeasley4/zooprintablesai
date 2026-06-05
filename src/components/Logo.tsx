interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'full' | 'icon';
  onDark?: boolean;
}

export default function Logo({ size = 40, className = '', variant = 'full', onDark = false }: LogoProps) {
  const textColor = onDark ? 'white' : undefined;
  const textGradId = onDark ? 'none' : 'textGrad';

  if (variant === 'icon') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="iconGradI" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#52B788" />
            <stop offset="1" stopColor="#1B4332" />
          </linearGradient>
          <linearGradient id="sparkGradI" x1="30" y1="6" x2="42" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBBF24" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="26" r="20" fill="rgba(0,0,0,0.12)" />
        <circle cx="24" cy="24" r="20" fill="url(#iconGradI)" />
        <ellipse cx="24" cy="28" rx="8" ry="7" fill="white" opacity="0.95" />
        <ellipse cx="16.5" cy="22" rx="3.5" ry="3" fill="white" opacity="0.95" />
        <ellipse cx="31.5" cy="22" rx="3.5" ry="3" fill="white" opacity="0.95" />
        <ellipse cx="20" cy="17" rx="3" ry="2.5" fill="white" opacity="0.95" />
        <ellipse cx="28" cy="17" rx="3" ry="2.5" fill="white" opacity="0.95" />
        <circle cx="36" cy="12" r="6" fill="url(#sparkGradI)" />
        <text x="36" y="15.5" textAnchor="middle" fill="white" fontSize="6" fontWeight="900" fontFamily="Arial">AI</text>
      </svg>
    );
  }

  return (
    <svg
      width={size * 7.5}
      height={size}
      viewBox="0 0 300 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52B788" />
          <stop offset="1" stopColor="#1B4332" />
        </linearGradient>
        <linearGradient id="sparkGrad2" x1="28" y1="4" x2="36" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
        {!onDark && (
          <linearGradient id="textGrad" x1="50" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B4332" />
            <stop offset="0.5" stopColor="#2D6A4F" />
            <stop offset="1" stopColor="#1B4332" />
          </linearGradient>
        )}
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Icon mark */}
      <g filter="url(#shadow)">
        <circle cx="20" cy="20" r="20" fill="url(#bgGrad)" />
      </g>
      <ellipse cx="20" cy="24" rx="8" ry="7" fill="white" opacity="0.95" />
      <ellipse cx="12.5" cy="18" rx="3.5" ry="3" fill="white" opacity="0.95" />
      <ellipse cx="27.5" cy="18" rx="3.5" ry="3" fill="white" opacity="0.95" />
      <ellipse cx="16" cy="13" rx="3" ry="2.5" fill="white" opacity="0.95" />
      <ellipse cx="24" cy="13" rx="3" ry="2.5" fill="white" opacity="0.95" />
      <circle cx="30" cy="9" r="6" fill="url(#sparkGrad2)" />
      <text x="30" y="12.5" textAnchor="middle" fill="white" fontSize="6" fontWeight="900" fontFamily="Arial, sans-serif">AI</text>

      {/* Wordmark — white on dark bg, gradient on light bg */}
      <text
        x="50"
        y="28"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill={onDark ? textColor : `url(#${textGradId})`}
        letterSpacing="-0.5"
      >
        Zoo{" "}Printables
      </text>

      {/* AI pill */}
      <rect x="232" y="10" width="32" height="18" rx="9" fill="url(#sparkGrad2)" />
      <text x="248" y="22.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="0.5">AI</text>
    </svg>
  );
}
