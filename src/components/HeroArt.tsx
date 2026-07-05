export function HeroArt() {
  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-label="정책 문서를 AI가 분석해 인사이트로 연결하는 지방의정 워크플로 일러스트"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="ha-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
        <filter id="ha-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      <circle cx="430" cy="80" r="110" fill="#dcfce7" opacity="0.7" />
      <circle cx="90" cy="330" r="70" fill="#ecfdf5" />

      <g transform="rotate(-7 400 150)">
        <rect x="312" y="58" width="176" height="176" rx="18" fill="#f1f5f9" stroke="#e2e8f0" />
        <g stroke="#cbd5e1" strokeWidth="1.4">
          <line x1="356" y1="70" x2="356" y2="222" />
          <line x1="400" y1="70" x2="400" y2="222" />
          <line x1="444" y1="70" x2="444" y2="222" />
          <line x1="324" y1="102" x2="476" y2="102" />
          <line x1="324" y1="146" x2="476" y2="146" />
          <line x1="324" y1="190" x2="476" y2="190" />
        </g>
        <polyline points="330,196 366,150 402,168 438,110 470,124" fill="none" stroke="url(#ha-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="366" cy="150" r="5" fill="#16a34a" />
        <circle cx="438" cy="110" r="5" fill="#16a34a" />
      </g>

      <path d="M150 250 C 210 300, 300 300, 360 250" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="3 8" strokeLinecap="round" opacity="0.7" />

      <g transform="rotate(-4 175 210)" filter="url(#ha-shadow)">
        <rect x="70" y="96" width="210" height="228" rx="16" fill="#ffffff" stroke="#eef2f6" />
        <rect x="70" y="96" width="210" height="46" rx="16" fill="url(#ha-green)" />
        <rect x="70" y="120" width="210" height="22" fill="url(#ha-green)" />
        <rect x="92" y="112" width="96" height="8" rx="4" fill="#ffffff" opacity="0.9" />
        <g fill="#e2e8f0">
          <rect x="92" y="168" width="166" height="9" rx="4.5" />
          <rect x="92" y="188" width="166" height="9" rx="4.5" />
          <rect x="92" y="208" width="120" height="9" rx="4.5" />
        </g>
        <g>
          <rect x="92" y="288" width="20" height="24" rx="3" fill="#bbf7d0" />
          <rect x="120" y="272" width="20" height="40" rx="3" fill="#4ade80" />
          <rect x="148" y="256" width="20" height="56" rx="3" fill="#16a34a" />
          <rect x="176" y="278" width="20" height="34" rx="3" fill="#86efac" />
        </g>
        <circle cx="238" cy="252" r="20" fill="none" stroke="#16a34a" strokeWidth="3" opacity="0.5" />
        <path d="M228 252 l7 7 l13 -15" fill="none" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g transform="translate(250 92)" filter="url(#ha-shadow)">
        <rect x="0" y="0" width="72" height="40" rx="20" fill="#0f172a" />
        <circle cx="22" cy="20" r="9" fill="none" stroke="#4ade80" strokeWidth="3" />
        <circle cx="22" cy="20" r="2.5" fill="#4ade80" />
        <text x="40" y="25" fill="#ffffff" fontFamily="Pretendard, sans-serif" fontSize="15" fontWeight="800">AI</text>
      </g>

      <g transform="translate(348 236)">
        <circle cx="0" cy="0" r="30" fill="#ffffff" stroke="#16a34a" strokeWidth="5" filter="url(#ha-shadow)" />
        <circle cx="0" cy="0" r="30" fill="#22c55e" opacity="0.08" />
        <line x1="22" y1="22" x2="44" y2="44" stroke="#16a34a" strokeWidth="7" strokeLinecap="round" />
        <path d="M-12 2 l7 7 l14 -16" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
