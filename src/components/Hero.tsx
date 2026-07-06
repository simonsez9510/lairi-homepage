import Link from "next/link";
import { Icon } from "./Icon";

const inputs = [
  { y: 57, label: "조례안 초안" },
  { y: 133, label: "행정질의서" },
  { y: 209, label: "예결산 자료" },
  { y: 285, label: "회의록·안건" },
];

export function Hero() {
  return (
    <section className="section-container grid grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] items-center gap-10 py-12 pb-8 max-[980px]:grid-cols-1 max-[980px]:pt-10" id="top" aria-labelledby="hero-title">
      <div>
        <div className="editorial-eyebrow mb-[18px] inline-flex items-center gap-2.5 text-[13px] font-extrabold uppercase tracking-[0.16em] text-civic-green">2026 지방자치혁신연구원</div>
        <h1 id="hero-title" className="m-0 max-w-[760px] text-[46px] font-extrabold leading-[1.06] tracking-[-0.03em] text-civic-navy md:text-[60px] lg:text-[72px]">
          <span className="bg-gradient-to-r from-civic-green to-emerald-500 bg-clip-text text-transparent">지역의 답은</span>
          <br />지역 안에 있다
        </h1>
        <p className="mt-5 max-w-[620px] text-lg leading-[1.62] text-slate-600">
          지방의회와 지자체를 위한 정책연구, AI 의정지원, 데이터 기반 뉴스 인사이트를 하나의 흐름으로 연결합니다.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 max-[640px]:flex-col">
          <Link className="focus-ring inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-civic-green px-6 font-extrabold text-white shadow-[0_14px_30px_rgba(22,163,74,0.28)] transition hover:-translate-y-0.5 active:translate-y-px" href="/ai">
            AI 의정시스템 보기
            <Icon name="solar:arrow-right-linear" size={17} />
          </Link>
          <Link className="focus-ring inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 font-extrabold text-civic-navy transition hover:border-slate-300 hover:bg-slate-50 active:translate-y-px" href="/news">
            지방자치혁신뉴스
            <Icon name="solar:arrow-right-up-linear" size={17} />
          </Link>
        </div>
      </div>

      <figure className="relative m-0 rounded-[28px] border border-civic-line bg-gradient-to-br from-emerald-50/70 to-white p-6 shadow-civic max-[980px]:max-w-[720px]">
        <figcaption className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[12px] font-bold text-civic-green shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-civic-green" />
          AI 의정 파이프라인
        </figcaption>
        <svg viewBox="0 0 520 400" role="img" aria-label="조례·질의서·예결산·회의록이 AI 의정시스템을 거쳐 의정 아카이브로 연결되는 파이프라인 다이어그램" className="h-auto w-full">
          <defs>
            <linearGradient id="hd-core" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#22c55e" />
              <stop offset="1" stopColor="#16a34a" />
            </linearGradient>
            <filter id="hd-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.1" />
            </filter>
          </defs>

          {inputs.map((n) => (
            <path key={n.label} d={`M138 ${n.y + 29} C 180 ${n.y + 29}, 190 200, 224 200`} fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" opacity="0.65" />
          ))}
          <path d="M360 200 L402 200" stroke="#16a34a" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" opacity="0.65" />

          {inputs.map((n) => (
            <g key={n.label} filter="url(#hd-shadow)">
              <rect x="6" y={n.y} width="132" height="58" rx="13" fill="#ffffff" stroke="#e2e8f0" />
              <rect x="18" y={n.y + 19} width="8" height="20" rx="2" fill="#16a34a" />
              <text x="36" y={n.y + 34} fill="#0f172a" fontFamily="Pretendard, sans-serif" fontSize="14" fontWeight="700">{n.label}</text>
            </g>
          ))}

          <g filter="url(#hd-shadow)">
            <rect x="224" y="150" width="136" height="100" rx="22" fill="url(#hd-core)" />
            <circle cx="292" cy="184" r="17" fill="none" stroke="#ffffff" strokeWidth="2.4" opacity="0.9" />
            <circle cx="292" cy="184" r="4" fill="#ffffff" />
            <text x="292" y="222" fill="#ffffff" fontFamily="Pretendard, sans-serif" fontSize="16" fontWeight="800" textAnchor="middle">AI 의정시스템</text>
            <text x="292" y="240" fill="#dcfce7" fontFamily="Pretendard, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">jachiai.kr</text>
          </g>

          <g filter="url(#hd-shadow)">
            <rect x="402" y="166" width="112" height="68" rx="14" fill="#0f172a" />
            <text x="458" y="196" fill="#ffffff" fontFamily="Pretendard, sans-serif" fontSize="13" fontWeight="700" textAnchor="middle">의정 아카이브</text>
            <text x="458" y="214" fill="#4ade80" fontFamily="Pretendard, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle">· 보고서 출력</text>
          </g>
        </svg>
      </figure>
    </section>
  );
}
