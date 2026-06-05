interface PortraitProps {
  size?: number;
  className?: string;
}

export default function DrMayaPortrait({ size = 320, className = "" }: PortraitProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Portrait of Dr. Maya Okafor, Wildlife Educator"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2d6a4f" />
          <stop offset="100%" stopColor="#1b4332" />
        </radialGradient>
        <radialGradient id="skinGrad" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#8b5a2b" />
          <stop offset="100%" stopColor="#6b3f1a" />
        </radialGradient>
        <linearGradient id="jacketGrad" x1="160" y1="200" x2="160" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4a7c59" />
          <stop offset="100%" stopColor="#2d5a40" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="160" y1="60" x2="160" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a0a00" />
          <stop offset="100%" stopColor="#2d1a08" />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx="160" cy="160" r="158" />
        </clipPath>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background circle */}
      <circle cx="160" cy="160" r="160" fill="url(#bgGrad)" />

      {/* Jungle leaf decorations in background */}
      <g clipPath="url(#circleClip)" opacity="0.18">
        <path d="M-10 80 Q60 20 120 90 Q60 130 -10 120Z" fill="#52b788" />
        <path d="M200 10 Q290 50 310 130 Q250 110 200 50Z" fill="#52b788" />
        <path d="M-20 220 Q30 170 90 230 Q40 270-20 260Z" fill="#52b788" />
        <path d="M260 240 Q310 200 330 270 Q290 290 260 270Z" fill="#52b788" />
        <path d="M100 290 Q150 250 200 295 Q160 330 100 320Z" fill="#52b788" />
      </g>

      <g clipPath="url(#circleClip)">
        {/* Shoulders / jacket */}
        <path d="M40 320 Q60 240 100 220 Q130 210 160 215 Q190 210 220 220 Q260 240 280 320Z"
          fill="url(#jacketGrad)" />

        {/* Jacket collar / shirt */}
        <path d="M130 218 Q160 230 190 218 L185 260 Q160 270 135 260Z" fill="#f4a261" opacity="0.9" />

        {/* Neck */}
        <rect x="146" y="190" width="28" height="32" rx="8" fill="url(#skinGrad)" />

        {/* Head shape */}
        <ellipse cx="160" cy="148" rx="58" ry="66" fill="url(#skinGrad)" />

        {/* Hair — natural coils/locs */}
        <ellipse cx="160" cy="100" rx="62" ry="42" fill="url(#hairGrad)" />
        {/* Individual hair texture coils */}
        {[
          [110,82],[120,70],[132,62],[148,58],[162,56],[176,58],[190,64],[200,74],[208,86],
          [118,94],[128,88],[142,84],[156,82],[170,82],[184,86],[196,92],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={6 + (i % 3) * 2} fill={i % 2 ? "#1a0a00" : "#251005"} opacity="0.9" />
        ))}
        {/* Hair outline / top */}
        <path d="M102 118 Q98 80 115 65 Q135 48 160 46 Q185 48 205 65 Q222 80 218 118"
          fill="url(#hairGrad)" />

        {/* Forehead */}
        <path d="M110 118 Q160 106 210 118 L210 130 Q160 118 110 130Z" fill="url(#skinGrad)" />

        {/* Eyebrows */}
        <path d="M120 132 Q133 126 145 130" stroke="#1a0a00" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M175 130 Q187 126 200 132" stroke="#1a0a00" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* Eyes */}
        <ellipse cx="133" cy="146" rx="12" ry="10" fill="white" />
        <ellipse cx="187" cy="146" rx="12" ry="10" fill="white" />
        <circle cx="135" cy="147" r="7" fill="#3d1a00" />
        <circle cx="189" cy="147" r="7" fill="#3d1a00" />
        <circle cx="135" cy="147" r="4" fill="#1a0800" />
        <circle cx="189" cy="147" r="4" fill="#1a0800" />
        <circle cx="137" cy="145" r="2" fill="white" />
        <circle cx="191" cy="145" r="2" fill="white" />
        {/* Eyelids */}
        <path d="M121 144 Q133 138 145 144" stroke="#6b3f1a" strokeWidth="1.5" fill="none" />
        <path d="M175 144 Q187 138 199 144" stroke="#6b3f1a" strokeWidth="1.5" fill="none" />

        {/* Nose */}
        <path d="M155 158 Q148 172 152 178 Q160 182 168 178 Q172 172 165 158"
          fill="#7a4a1e" stroke="#6b3a15" strokeWidth="1" />
        <ellipse cx="153" cy="178" rx="6" ry="4" fill="#6b3a15" />
        <ellipse cx="167" cy="178" rx="6" ry="4" fill="#6b3a15" />

        {/* Mouth — warm smile */}
        <path d="M140 192 Q160 204 180 192" stroke="#5a2d0c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M143 193 Q160 208 177 193 Q168 202 160 203 Q152 202 143 193Z" fill="#c17040" opacity="0.7" />

        {/* Cheek highlights */}
        <ellipse cx="120" cy="165" rx="14" ry="9" fill="#c17040" opacity="0.25" />
        <ellipse cx="200" cy="165" rx="14" ry="9" fill="#c17040" opacity="0.25" />

        {/* Small earrings — gold hoops */}
        <ellipse cx="103" cy="158" rx="7" ry="8" fill="none" stroke="#f4a261" strokeWidth="3" />
        <ellipse cx="217" cy="158" rx="7" ry="8" fill="none" stroke="#f4a261" strokeWidth="3" />

        {/* Field jacket badge / patch on shoulder */}
        <rect x="56" y="252" width="42" height="28" rx="4" fill="#1b4332" stroke="#52b788" strokeWidth="1.5" />
        <text x="77" y="262" textAnchor="middle" fill="#52b788" fontSize="5.5" fontWeight="700" fontFamily="Arial">FIELD</text>
        <text x="77" y="272" textAnchor="middle" fill="#f4a261" fontSize="5.5" fontWeight="700" fontFamily="Arial">ZOOLOGIST</text>
        <text x="77" y="278" textAnchor="middle" fill="#52b788" fontSize="4" fontFamily="Arial">UC DAVIS</text>

        {/* Binoculars strap hint */}
        <path d="M130 218 Q120 235 115 255 Q118 258 122 255 Q128 240 136 224"
          stroke="#4a3520" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
      </g>

      {/* Outer ring */}
      <circle cx="160" cy="160" r="157" stroke="#52b788" strokeWidth="3" fill="none" opacity="0.6" />
      <circle cx="160" cy="160" r="153" stroke="#f4a261" strokeWidth="1" fill="none" opacity="0.35" />
    </svg>
  );
}
