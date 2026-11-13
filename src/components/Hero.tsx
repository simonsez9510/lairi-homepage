import Link from "next/link";
import { Icon } from "./Icon";

const inputs = [
  { y: 57, label: "조례안 초안", line: "제1조(목적) 이 조례는" },
  { y: 133, label: "행정질의서", line: "질의 요지와 답변 대조" },
  { y: 209, label: "예결산 자료", line: "세출 결산 대비 집행률" },
  { y: 285, label: "회의록·안건", line: "본회의 발언과 안건 연결" },
];

export function Hero() {
  return (
    <section className="section-container grid grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] items-center gap-10 py-12 pb-8 max-[980px]:grid-cols-1 max-[980px]:pt-10" id="top" aria-labelledby="hero-title">
      <div>
        <p className="mb-4 text-[14px] font-medium text-civic-muted">지방의회와 지자체를 위한 정책연구기관</p>
        <h1 id="hero-title" className="m-0 max-w-[760px] text-[44px] font-semibold leading-[1.1] tracking-[-0.03em] text-civic-navy md:text-[56px] lg:text-[68px]">
          <span className="text-civic-green">지역의 답은</span>
          <br />지역 안에 있다
        </h1>
        <p className="mt-5 max-w-[620px] text-lg leading-[1.62] text-slate-600">
          지방의회와 지자체를 위한 정책연구, AI 의정지원, 데이터 기반 뉴스 인사이트를 하나의 흐름으로 연결합니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 max-[640px]:flex-col">
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-civic-green px-6 font-semibold text-white transition-colors hover:bg-[#15803d]" href="/ai">
            AI 의정시스템 보기
            <Icon name="solar:arrow-right-linear" size={16} />
          </Link>
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] border border-civic-line bg-white px-6 font-semibold text-civic-navy transition-colors hover:bg-slate-50" href="/news">
            지방자치혁신뉴스
            <Icon name="solar:arrow-right-up-linear" size={16} />
          </Link>
        </div>
      </div>

      <figure className="relative m-0 rounded-[16px] border border-civic-line bg-white p-6 max-[980px]:max-w-[720px]">
        <figcaption className="absolute left-6 top-5 z-10 text-[13px] font-medium text-civic-muted">
          AI 의정 파이프라인
        </figcaption>
        <svg viewBox="0 0 520 400" role="img" aria-label="조례·질의서·예결산·회의록이 AI 의정시스템을 거쳐 의정 아카이브로 연결되는 파이프라인 다이어그램" className="h-auto w-full">
          {inputs.map((n) => (
            <path key={n.label} d={`M150 ${n.y + 29} C 188 ${n.y + 29}, 196 200, 228 200`} fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round" opacity="0.7" />
          ))}
          <path d="M360 200 L400 200" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round" opacity="0.7" />

          {inputs.map((n) => (
            <g key={n.label}>
              <rect x="4" y={n.y} width="146" height="58" rx="6" fill="#fbfbf9" stroke="#e2e8f0" />
              <line x1="5.5" y1={n.y + 8} x2="5.5" y2={n.y + 50} stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
              <text x="18" y={n.y + 25} fill="#0f172a" fontFamily="Pretendard, sans-serif" fontSize="14" fontWeight="600">{n.label}</text>
              <text x="18" y={n.y + 44} fill="#64748b" fontFamily="Pretendard, sans-serif" fontSize="11" fontWeight="400">{n.line}</text>
            </g>
          ))}

          <g>
            <rect x="228" y="152" width="132" height="96" rx="12" fill="#16a34a" />
            <circle cx="294" cy="184" r="14" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
            <circle cx="294" cy="184" r="3.5" fill="#ffffff" />
            <text x="294" y="220" fill="#ffffff" fontFamily="Pretendard, sans-serif" fontSize="15" fontWeight="600" textAnchor="middle">AI 의정시스템</text>
            <text x="294" y="237" fill="#dcfce7" fontFamily="Pretendard, sans-serif" fontSize="11" fontWeight="400" textAnchor="middle">jachiai.kr</text>
          </g>

          <g>
            <rect x="400" y="164" width="116" height="72" rx="10" fill="#0f172a" />
            <text x="458" y="195" fill="#ffffff" fontFamily="Pretendard, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">의정 아카이브</text>
            <text x="458" y="214" fill="#86efac" fontFamily="Pretendard, sans-serif" fontSize="12" fontWeight="400" textAnchor="middle">보고서 출력</text>
          </g>
        </svg>
      </figure>
    </section>
  );
}
