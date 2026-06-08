const ANIMAL_OF_MONTH = {
  name: "Gorilla",
  emoji: "🦍",
  activities: 34,
};

const r4 = (n: number) => Math.round(n * 10000) / 10000;

/* ─── Jungle Scene ────────────────────────────────────────── */
function JungleScene() {
  return (
    <svg
      viewBox="0 0 1440 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Sky — deep teal to golden canopy glow */}
        <linearGradient id="jSky" x1="720" y1="0" x2="720" y2="560" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="#051a0a" />
          <stop offset="40%" stopColor="#0a3318" />
          <stop offset="75%" stopColor="#1a5c2a" />
          <stop offset="100%" stopColor="#0d2a12" />
        </linearGradient>
        {/* Canopy light shaft */}
        <radialGradient id="sunShaft" cx="50%" cy="10%" r="60%">
          <stop offset="0%"  stopColor="#ffe066" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#f4a261" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0a3318"  stopOpacity="0" />
        </radialGradient>
        {/* Ground mist */}
        <linearGradient id="mist" x1="720" y1="400" x2="720" y2="560" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="#c8f5d4" stopOpacity="0" />
          <stop offset="60%" stopColor="#c8f5d4" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c8f5d4" stopOpacity="0.45" />
        </linearGradient>
        {/* Deep leaf layer */}
        <linearGradient id="leafDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0d3318" />
          <stop offset="100%" stopColor="#051a0a" />
        </linearGradient>
        {/* Mid leaf layer */}
        <linearGradient id="leafMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#1a5c2a" />
          <stop offset="100%" stopColor="#0d3318" />
        </linearGradient>
        {/* Bright leaf */}
        <linearGradient id="leafBright" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#4caf50" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>
        {/* Tiger stripe */}
        <linearGradient id="tigerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#e65100" />
          <stop offset="100%" stopColor="#bf360c" />
        </linearGradient>
        {/* Toucan beak */}
        <linearGradient id="beak" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#ffeb3b" />
          <stop offset="50%" stopColor="#ff9800" />
          <stop offset="100%" stopColor="#f44336" />
        </linearGradient>
        {/* Flower glow */}
        <radialGradient id="flowerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#ff4081" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff4081" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Background sky ── */}
      <rect width="1440" height="560" fill="url(#jSky)" />

      {/* ── Light shaft from canopy opening ── */}
      <ellipse cx="720" cy="80" rx="420" ry="300" fill="url(#sunShaft)" />
      {/* Sharper god rays */}
      {[-60,-30,-10,10,30,60].map((angle, i) => (
        <path key={i}
          d={`M720 0 L${720 + Math.tan(angle * Math.PI/180) * 600} 600 L${720 + Math.tan((angle+8) * Math.PI/180) * 600} 600Z`}
          fill="#ffe066" opacity={0.04 - i * 0.003}
        />
      ))}

      {/* ── Far background jungle silhouette ── */}
      <path d="M0 300 Q80 220 160 260 Q240 300 320 240 Q400 180 480 230 Q560 280 640 210 Q720 140 800 210 Q880 280 960 230 Q1040 180 1120 240 Q1200 300 1280 260 Q1360 220 1440 280 L1440 400 L0 400Z"
        fill="#051a0a" opacity="0.9" />
      <path d="M0 330 Q100 260 200 295 Q300 330 400 270 Q500 210 600 265 Q700 320 800 265 Q900 210 1000 270 Q1100 330 1200 295 Q1300 260 1440 310 L1440 420 L0 420Z"
        fill="#0a2e14" opacity="0.85" />

      {/* ── Hanging vines ── */}
      {[80, 200, 380, 560, 680, 780, 900, 1060, 1200, 1360].map((x, i) => (
        <g key={i}>
          <path d={`M${x} 0 Q${x + (i%2?12:-12)} ${80 + i*15} ${x + (i%2?-6:6)} ${180 + i*10}`}
            stroke="#1a5c2a" strokeWidth={2.5 + (i%3)} fill="none" strokeLinecap="round" opacity="0.85" />
          <path d={`M${x} 0 Q${x+(i%2?-10:10)} ${120} ${x+(i%2?6:-6)} ${240}`}
            stroke="#0d3318" strokeWidth={1.5+(i%2)} fill="none" strokeLinecap="round" opacity="0.7" />
          {/* Vine leaves */}
          {[60, 130, 200].map((y, j) => (
            <ellipse key={j}
              cx={x + (j%2?8:-8)} cy={y} rx={9+(j*2)} ry={5+(j)}
              fill={j===2 ? "#2d7a38" : "#1a5c2a"}
              transform={`rotate(${-30 + j*25} ${x+(j%2?8:-8)} ${y})`}
              opacity="0.9" />
          ))}
        </g>
      ))}

      {/* ── Dense canopy left ── */}
      <g opacity="0.97">
        {/* Background tree mass */}
        <path d="M-40 0 Q60 60 20 160 Q80 100 180 140 Q100 200 160 300 Q60 260 0 350 L-40 350Z" fill="#051a0a" />
        {/* Giant monstera leaves */}
        <path d="M-20 80 Q80 40 120 120 Q80 160 20 150 Q-10 130 -20 80Z" fill="#1a5c2a" />
        <path d="M10 130 Q110 90 150 170 Q110 210 50 200 Q20 180 10 130Z" fill="#0d4020" />
        <path d="M-30 200 Q90 150 140 240 Q90 280 20 270 Q-15 248 -30 200Z" fill="#1a5c2a" opacity="0.9" />
        {/* Bright tropical leaves */}
        <path d="M30 60 Q130 20 170 100 Q120 140 50 130 Q15 108 30 60Z" fill="#2e7d32" />
        <path d="M-10 160 Q100 110 150 200 Q90 248 10 234 Q-25 210 -10 160Z" fill="#388e3c" opacity="0.85" />
        {/* Highlight leaves */}
        <path d="M40 50 Q110 20 140 80 Q100 115 45 105Z" fill="#43a047" opacity="0.7" />
        <path d="M20 150 Q110 115 140 180 Q95 218 25 205Z" fill="#4caf50" opacity="0.55" />
        {/* Veins */}
        <path d="M30 60 Q80 90 120 60" stroke="#1b5e20" strokeWidth="1.2" fill="none" opacity="0.6" />
        <path d="M30 60 Q55 100 100 120" stroke="#1b5e20" strokeWidth="1.2" fill="none" opacity="0.6" />
      </g>

      {/* ── Dense canopy right ── */}
      <g opacity="0.97">
        <path d="M1480 0 Q1380 60 1420 160 Q1360 100 1260 140 Q1340 200 1280 300 Q1380 260 1440 350 L1480 350Z" fill="#051a0a" />
        <path d="M1460 90 Q1350 50 1310 130 Q1360 170 1420 160 Q1458 140 1460 90Z" fill="#1a5c2a" />
        <path d="M1440 140 Q1320 100 1280 185 Q1340 225 1410 215 Q1448 195 1440 140Z" fill="#0d4020" />
        <path d="M1470 215 Q1340 165 1290 258 Q1360 298 1440 285 Q1482 262 1470 215Z" fill="#1a5c2a" opacity="0.9" />
        <path d="M1420 75 Q1310 35 1265 115 Q1325 155 1400 145 Q1438 125 1420 75Z" fill="#2e7d32" />
        <path d="M1450 168 Q1330 120 1280 215 Q1350 258 1430 244 Q1465 222 1450 168Z" fill="#388e3c" opacity="0.85" />
        <path d="M1410 65 Q1340 38 1305 100 Q1360 135 1420 122Z" fill="#43a047" opacity="0.7" />
        <path d="M1440 158 Q1360 125 1320 196 Q1380 232 1450 218Z" fill="#4caf50" opacity="0.55" />
      </g>

      {/* ── Mid-layer tropical foliage left ── */}
      <g opacity="0.92">
        <path d="M-30 320 Q120 260 200 360 Q120 420 40 400 Q-20 378 -30 320Z" fill="#1b5e20" />
        <path d="M0 370 Q150 310 230 410 Q148 468 60 452 Q15 428 0 370Z" fill="#2e7d32" opacity="0.9" />
        <path d="M60 340 Q200 290 270 385 Q190 440 100 425 Q55 400 60 340Z" fill="#388e3c" opacity="0.8" />
        {/* Large banana leaf */}
        <path d="M-20 280 Q160 200 210 310 Q120 380 20 358 Q-28 330 -20 280Z" fill="#43a047" opacity="0.65" />
      </g>

      {/* ── Mid-layer foliage right ── */}
      <g opacity="0.92">
        <path d="M1470 320 Q1320 260 1240 360 Q1320 420 1400 400 Q1460 378 1470 320Z" fill="#1b5e20" />
        <path d="M1440 370 Q1290 310 1210 410 Q1292 468 1380 452 Q1425 428 1440 370Z" fill="#2e7d32" opacity="0.9" />
        <path d="M1380 340 Q1240 290 1170 385 Q1250 440 1340 425 Q1385 400 1380 340Z" fill="#388e3c" opacity="0.8" />
        <path d="M1460 280 Q1280 200 1230 310 Q1320 380 1420 358 Q1468 330 1460 280Z" fill="#43a047" opacity="0.65" />
      </g>

      {/* ── Tiger resting on branch ── */}
      <g transform="translate(560, 300)">
        {/* Branch */}
        <path d="M-60 50 Q60 30 200 55" stroke="#2d1a0a" strokeWidth="16" strokeLinecap="round" fill="none" />
        <path d="M-60 50 Q60 30 200 55" stroke="#3d2a15" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.6" />
        {/* Tiger body on branch */}
        <ellipse cx="80" cy="38" rx="55" ry="22" fill="url(#tigerBody)" />
        {/* Head */}
        <circle cx="22" cy="25" r="24" fill="#e65100" />
        {/* Muzzle */}
        <ellipse cx="22" cy="34" rx="12" ry="9" fill="#ffccbc" />
        {/* Eyes */}
        <ellipse cx="13" cy="20" rx="5" ry="6" fill="#fff9c4" />
        <ellipse cx="31" cy="20" rx="5" ry="6" fill="#fff9c4" />
        <ellipse cx="13" cy="21" rx="3" ry="4" fill="#1a1a00" />
        <ellipse cx="31" cy="21" rx="3" ry="4" fill="#1a1a00" />
        <circle cx="14" cy="20" r="1.2" fill="white" />
        <circle cx="32" cy="20" r="1.2" fill="white" />
        {/* Ears */}
        <polygon points="5,4 -4,-10 14,-4" fill="#e65100" />
        <polygon points="7,5 0,-6 13,-1" fill="#ffccbc" />
        <polygon points="39,4 30,-10 48,-4" fill="#e65100" />
        <polygon points="37,5 31,-6 47,-1" fill="#ffccbc" />
        {/* Stripes */}
        <path d="M35 14 Q40 28 42 40" stroke="#1a1a00" strokeWidth="3" opacity="0.55" fill="none" strokeLinecap="round"/>
        <path d="M55 10 Q62 24 65 40" stroke="#1a1a00" strokeWidth="3" opacity="0.55" fill="none" strokeLinecap="round"/>
        <path d="M75 10 Q82 24 84 40" stroke="#1a1a00" strokeWidth="3" opacity="0.55" fill="none" strokeLinecap="round"/>
        <path d="M98 12 Q105 28 106 40" stroke="#1a1a00" strokeWidth="3" opacity="0.55" fill="none" strokeLinecap="round"/>
        <path d="M118 14 Q122 28 120 40" stroke="#1a1a00" strokeWidth="3" opacity="0.55" fill="none" strokeLinecap="round"/>
        {/* Tail */}
        <path d="M133 38 Q160 20 168 50 Q176 75 155 70" stroke="#e65100" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M133 38 Q160 20 168 50 Q176 75 155 70" stroke="#1a1a00" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" strokeDasharray="8 6"/>
        {/* Paws hanging */}
        <ellipse cx="50" cy="58" rx="10" ry="7" fill="#e65100" />
        <ellipse cx="70" cy="60" rx="10" ry="7" fill="#e65100" />
      </g>

      {/* ── Toucan on branch top-left ── */}
      <g transform="translate(160, 155)" filter="url(#glow)">
        {/* Small branch */}
        <path d="M-20 55 Q30 45 80 58" stroke="#2d1a0a" strokeWidth="8" strokeLinecap="round" fill="none" />
        {/* Body */}
        <ellipse cx="25" cy="42" rx="18" ry="22" fill="#111" />
        {/* Belly */}
        <ellipse cx="25" cy="46" rx="10" ry="14" fill="#fffde7" />
        {/* Red throat patch */}
        <ellipse cx="25" cy="56" rx="7" ry="5" fill="#f44336" />
        {/* Head */}
        <circle cx="25" cy="20" r="16" fill="#111" />
        {/* Eye ring */}
        <circle cx="31" cy="16" r="7" fill="#81c784" />
        <circle cx="31" cy="16" r="4.5" fill="#111" />
        <circle cx="33" cy="14" r="1.5" fill="white" />
        {/* Massive beak */}
        <path d="M35 18 Q80 10 82 25 Q80 36 35 30Z" fill="url(#beak)" />
        <path d="M35 18 Q80 10 82 25" stroke="#f57f17" strokeWidth="1" fill="none" />
        {/* Wing highlight */}
        <path d="M12 35 Q25 25 38 35 Q30 50 12 50Z" fill="#1a237e" opacity="0.6" />
        {/* Tail */}
        <path d="M10 56 Q-5 70 -8 80" stroke="#1a237e" strokeWidth="6" fill="none" strokeLinecap="round"/>
      </g>

      {/* ── Scarlet macaw (right) ── */}
      <g transform="translate(1230, 130)" filter="url(#glow)">
        {/* Branch */}
        <path d="M-20 60 Q30 50 80 65" stroke="#2d1a0a" strokeWidth="8" strokeLinecap="round" fill="none" />
        {/* Body */}
        <ellipse cx="30" cy="44" rx="20" ry="25" fill="#d32f2f" />
        {/* Wing */}
        <path d="M18 30 Q48 14 56 40 Q44 55 18 58Z" fill="#1565c0" />
        <path d="M22 32 Q50 18 56 40 Q44 52 22 52Z" fill="#1976d2" opacity="0.8" />
        {/* Yellow wing band */}
        <path d="M22 32 Q45 20 52 35 Q42 42 22 42Z" fill="#ffd600" opacity="0.85" />
        {/* Head */}
        <circle cx="14" cy="22" r="17" fill="#d32f2f" />
        {/* White face patch */}
        <ellipse cx="18" cy="24" rx="10" ry="8" fill="#fff8e1" />
        {/* Eye */}
        <circle cx="20" cy="21" r="4" fill="#fff8e1" />
        <circle cx="20" cy="21" r="2.5" fill="#111" />
        <circle cx="21" cy="20" r="1" fill="white" />
        {/* Beak */}
        <path d="M8 26 Q-5 32 -4 40 Q4 44 12 36 Q14 30 8 26Z" fill="#bdbdbd" />
        <path d="M8 26 Q2 32 4 38" stroke="#9e9e9e" strokeWidth="1" fill="none"/>
        {/* Tail */}
        <path d="M24 66 Q18 90 15 105" stroke="#1565c0" strokeWidth="7" fill="none" strokeLinecap="round"/>
        <path d="M30 66 Q26 90 25 105" stroke="#d32f2f" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </g>

      {/* ── Monkey swinging on vine (center-left) ── */}
      <g transform="translate(380, 180)">
        {/* Vine it grips */}
        <path d="M40 0 Q38 60 42 120" stroke="#1a5c2a" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Arms up */}
        <path d="M32 28 Q10 10 42 0" stroke="#5d4037" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M50 28 Q70 10 42 0" stroke="#5d4037" strokeWidth="5" fill="none" strokeLinecap="round"/>
        {/* Body */}
        <ellipse cx="40" cy="50" rx="18" ry="22" fill="#5d4037" />
        {/* Belly */}
        <ellipse cx="40" cy="54" rx="10" ry="14" fill="#a1887f" />
        {/* Head */}
        <circle cx="40" cy="24" r="18" fill="#5d4037" />
        {/* Face */}
        <ellipse cx="40" cy="28" rx="11" ry="9" fill="#a1887f" />
        {/* Eyes */}
        <circle cx="34" cy="22" r="4" fill="#fff" />
        <circle cx="46" cy="22" r="4" fill="#fff" />
        <circle cx="35" cy="22" r="2.5" fill="#111" />
        <circle cx="47" cy="22" r="2.5" fill="#111" />
        <circle cx="36" cy="21" r="1" fill="white" />
        <circle cx="48" cy="21" r="1" fill="white" />
        {/* Ears */}
        <circle cx="23" cy="24" r="6" fill="#5d4037" />
        <circle cx="23" cy="24" r="4" fill="#a1887f" />
        <circle cx="57" cy="24" r="6" fill="#5d4037" />
        <circle cx="57" cy="24" r="4" fill="#a1887f" />
        {/* Legs */}
        <path d="M30 70 Q15 88 18 100" stroke="#5d4037" strokeWidth="7" fill="none" strokeLinecap="round"/>
        <path d="M50 70 Q65 88 62 100" stroke="#5d4037" strokeWidth="7" fill="none" strokeLinecap="round"/>
        {/* Tail curling */}
        <path d="M40 68 Q58 80 62 96 Q65 110 54 108 Q44 106 48 96" stroke="#5d4037" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </g>

      {/* ── Exotic flowers (left side) ── */}
      {[
        { x: 100, y: 320, r: 14, c: "#e91e63", c2: "#f48fb1" },
        { x: 150, y: 370, r: 11, c: "#ff9800", c2: "#ffe082" },
        { x: 70,  y: 400, r: 10, c: "#9c27b0", c2: "#ce93d8" },
        { x: 200, y: 340, r: 9,  c: "#f44336", c2: "#ef9a9a" },
      ].map((f, i) => (
        <g key={i}>
          <circle cx={f.x} cy={f.y} r={f.r * 2.5} fill={f.c} opacity="0.12" />
          {[0,72,144,216,288].map((a, j) => {
            const px = r4(f.x + Math.cos(a*Math.PI/180)*(f.r+2));
            const py = r4(f.y + Math.sin(a*Math.PI/180)*(f.r+2));
            return (
              <ellipse key={j}
                cx={px} cy={py}
                rx={f.r*0.7} ry={f.r*1.3}
                fill={f.c}
                transform={`rotate(${a} ${px} ${py})`}
                opacity="0.9"
              />
            );
          })}
          <circle cx={f.x} cy={f.y} r={f.r*0.55} fill={f.c2} />
        </g>
      ))}

      {/* ── Exotic flowers (right side) ── */}
      {[
        { x: 1340, y: 310, r: 13, c: "#e91e63", c2: "#f48fb1" },
        { x: 1290, y: 360, r: 11, c: "#ff5722", c2: "#ffccbc" },
        { x: 1380, y: 395, r: 9,  c: "#7c4dff", c2: "#e1bee7" },
        { x: 1250, y: 330, r: 10, c: "#ff9800", c2: "#ffe082" },
      ].map((f, i) => (
        <g key={i}>
          <circle cx={f.x} cy={f.y} r={f.r * 2.5} fill={f.c} opacity="0.12" />
          {[0,72,144,216,288].map((a, j) => {
            const px = r4(f.x + Math.cos(a*Math.PI/180)*(f.r+2));
            const py = r4(f.y + Math.sin(a*Math.PI/180)*(f.r+2));
            return (
              <ellipse key={j}
                cx={px} cy={py}
                rx={f.r*0.7} ry={f.r*1.3}
                fill={f.c}
                transform={`rotate(${a} ${px} ${py})`}
                opacity="0.9"
              />
            );
          })}
          <circle cx={f.x} cy={f.y} r={f.r*0.55} fill={f.c2} />
        </g>
      ))}

      {/* ── Tree frog on leaf ── */}
      <g transform="translate(920, 270)" filter="url(#glow)">
        {/* Leaf */}
        <path d="M-10 30 Q40-10 90 30 Q70 80-10 70Z" fill="#2e7d32" />
        <path d="M40-10 Q44 30 40 70" stroke="#1b5e20" strokeWidth="1.5" fill="none" />
        {/* Frog body */}
        <ellipse cx="40" cy="28" rx="16" ry="12" fill="#00c853" />
        {/* Head */}
        <ellipse cx="40" cy="16" rx="14" ry="11" fill="#00c853" />
        {/* Eyes (bulging) */}
        <circle cx="32" cy="10" r="7" fill="#00c853" />
        <circle cx="32" cy="10" r="5" fill="#fff9c4" />
        <circle cx="32" cy="10" r="3" fill="#111" />
        <circle cx="33" cy="9" r="1.2" fill="white" />
        <circle cx="48" cy="10" r="7" fill="#00c853" />
        <circle cx="48" cy="10" r="5" fill="#fff9c4" />
        <circle cx="48" cy="10" r="3" fill="#111" />
        <circle cx="49" cy="9" r="1.2" fill="white" />
        {/* Legs */}
        <path d="M26 36 Q10 50 8 60" stroke="#00c853" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M54 36 Q70 50 72 60" stroke="#00c853" strokeWidth="5" fill="none" strokeLinecap="round"/>
        {/* Sticky toe pads */}
        <circle cx="8"  cy="61" r="4" fill="#00e676" />
        <circle cx="72" cy="61" r="4" fill="#00e676" />
        {/* Belly */}
        <ellipse cx="40" cy="30" rx="9" ry="8" fill="#b9f6ca" opacity="0.7" />
        {/* Red sides */}
        <path d="M26 20 Q24 32 28 38" stroke="#f44336" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
        <path d="M54 20 Q56 32 52 38" stroke="#f44336" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
      </g>

      {/* ── Butterfly (animated) ── */}
      <g transform="translate(700, 200)">
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="0 0; 40 -20; 80 10; 50 40; 0 0"
            dur="12s" repeatCount="indefinite" />
          {/* Wings */}
          <path d="M0 0 Q-30-20-25 10 Q-20 30 0 15Z" fill="#ff6f00" opacity="0.85">
            <animateTransform attributeName="transform" type="scale"
              values="1 1; 0.3 1; 1 1" dur="0.5s" repeatCount="indefinite" />
          </path>
          <path d="M0 0 Q30-20 25 10 Q20 30 0 15Z" fill="#ff6f00" opacity="0.85">
            <animateTransform attributeName="transform" type="scale"
              values="1 1; 0.3 1; 1 1" dur="0.5s" repeatCount="indefinite" />
          </path>
          <path d="M0 15 Q-22 20-18 35 Q-10 42 0 30Z" fill="#ffd600" opacity="0.8" />
          <path d="M0 15 Q22 20 18 35 Q10 42 0 30Z" fill="#ffd600" opacity="0.8" />
          {/* Body */}
          <ellipse cx="0" cy="16" rx="3" ry="14" fill="#111" />
          {/* Antennae */}
          <path d="M-2 2 Q-10-8-8-14" stroke="#111" strokeWidth="1.2" fill="none" />
          <circle cx="-8" cy="-14" r="2" fill="#111" />
          <path d="M2 2 Q10-8 8-14" stroke="#111" strokeWidth="1.2" fill="none" />
          <circle cx="8" cy="-14" r="2" fill="#111" />
        </g>
      </g>

      {/* ── Fireflies ── */}
      {[
        {x:300,y:380},{x:450,y:350},{x:620,y:420},{x:820,y:380},
        {x:980,y:410},{x:1100,y:370},{x:1200,y:420},{x:750,y:360},
        {x:850,y:440},{x:550,y:430},
      ].map((ff, i) => (
        <circle key={i} cx={ff.x} cy={ff.y} r={2.5} fill="#aaff44" filter="url(#glow)">
          <animate attributeName="opacity"
            values="0;1;0" dur={`${1.5 + (i%5)*0.6}s`}
            begin={`${(i*0.4) % 3}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* ── Ground foliage ── */}
      <path d="M0 430 Q180 390 360 430 Q540 470 720 435 Q900 400 1080 435 Q1260 470 1440 430 L1440 560 L0 560Z"
        fill="#051a0a" />
      <path d="M0 460 Q200 420 400 460 Q600 500 800 460 Q1000 420 1200 458 Q1340 478 1440 455 L1440 560 L0 560Z"
        fill="#061e0b" opacity="0.9" />

      {/* Ground ferns and grass blades */}
      {Array.from({ length: 50 }, (_, i) => {
        const x = (i / 50) * 1440;
        const h = 18 + (i % 7) * 8;
        const leafW = 6 + (i % 4) * 3;
        return (
          <g key={i} transform={`translate(${x}, 450)`}>
            <path d={`M0 0 Q${(i%3-1)*leafW} ${-h} ${(i%2)*leafW*1.5-leafW*0.5} ${-h*1.5}`}
              stroke={i%3===0 ? "#2e7d32" : i%3===1 ? "#388e3c" : "#1b5e20"}
              strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85">
              <animateTransform attributeName="transform" type="rotate"
                values={`0 0 0; ${(i%2)*5-2.5} 0 0; 0 0 0`}
                dur={`${1.8 + (i%7)*0.35}s`} repeatCount="indefinite" />
            </path>
          </g>
        );
      })}

      {/* ── Mist overlay ── */}
      <rect x="0" y="380" width="1440" height="180" fill="url(#mist)" />

      {/* ── Dappled light spots on ground ── */}
      {[200,420,650,870,1100,1300].map((x, i) => (
        <ellipse key={i} cx={x} cy={460} rx={30 + i*5} ry={10}
          fill="#ffe066" opacity="0.06" />
      ))}
    </svg>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden flex flex-col" style={{ background: "#051a0a" }}>
      <JungleScene />

      {/* Overlay keeps text readable without drowning the scene */}
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-black/65 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 max-w-5xl mx-auto w-full">

        {/* Badge floats above the card */}
        <div className="inline-flex items-center gap-2 bg-[#F4A261] text-white text-sm font-bold px-5 py-2 rounded-full mb-5 shadow-lg">
          100% Free — No Sign-Up Required
        </div>

        {/* Frosted glass card behind heading + copy + CTAs */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl px-8 sm:px-12 py-10 mb-8 max-w-3xl w-full shadow-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Everything Great Zoo
            <br />
            Education Sites Offer —
            <br />
            <span className="text-[#F4A261]">Minus the Stuffed Animal.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-3 leading-relaxed">
            Animal fact sheets, coloring pages, and activity packs —
            all the good stuff, for every kid, completely free.
          </p>
          <p className="text-xs text-white/50 max-w-xl mx-auto mb-7">
            Download instantly · Print at home · No account · No credit card
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#packs"
              className="bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Browse Animals A–Z
            </a>
            <a
              href="#how-it-works"
              className="bg-white/15 hover:bg-white/25 text-white font-bold text-base px-8 py-3.5 rounded-full border border-white/30 transition-all"
            >
              See What&apos;s Inside
            </a>
          </div>
        </div>

        {/* Featured animal — no urgency, just delight */}
        <div className="bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl px-8 py-5 max-w-xs w-full">
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">
            Featured This Month
          </p>
          <div className="text-4xl mb-2">{ANIMAL_OF_MONTH.emoji}</div>
          <p className="text-white font-bold text-base mb-1">{ANIMAL_OF_MONTH.name} Pack</p>
          <p className="text-white/50 text-xs">{ANIMAL_OF_MONTH.activities} activities · always free</p>
        </div>
      </div>

      {/* Wave into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-px">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full">
          <path d="M0 80L60 66C120 53 240 26 360 20C480 13 600 26 720 40C840 53 960 66 1080 60C1200 53 1320 26 1380 13L1440 0V80H0Z" fill="#FEFAE0" />
        </svg>
      </div>
    </section>
  );
}
