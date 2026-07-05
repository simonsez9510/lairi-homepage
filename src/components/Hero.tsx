import { HeroArt } from "./HeroArt";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="section-container grid min-h-[min(640px,calc(100dvh-64px))] grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)] items-center gap-10 py-12 pb-8 max-[980px]:min-h-0 max-[980px]:grid-cols-1 max-[980px]:pt-10" id="top" aria-labelledby="hero-title">
      <div>
        <div className="editorial-eyebrow mb-[18px] inline-flex items-center gap-2.5 text-[13px] font-extrabold uppercase tracking-[0.16em] text-civic-green">2026 지방자치혁신연구원</div>
        <h1 id="hero-title" className="m-0 max-w-[760px] text-[52px] font-extrabold leading-[1.06] tracking-[-0.03em] text-civic-navy md:text-[72px] lg:text-[84px]">
          <span className="bg-gradient-to-r from-civic-green to-emerald-500 bg-clip-text text-transparent">지역의 답은</span>
          <br />지역 안에 있다
        </h1>
        <p className="mt-5 max-w-[660px] text-lg leading-[1.62] text-slate-600 md:text-xl">
          지방의회와 지자체를 위한 정책연구, AI 의정지원, 데이터 기반 뉴스 인사이트를 하나의 흐름으로 연결합니다.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 max-[640px]:flex-col">
          <a className="focus-ring inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-civic-green px-6 font-extrabold text-white shadow-[0_14px_30px_rgba(22,163,74,0.28)] transition hover:-translate-y-0.5 active:translate-y-px" href="/ai">
            AI 의정시스템 보기
            <Icon name="solar:arrow-right-linear" size={17} />
          </a>
          <a className="focus-ring inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 font-extrabold text-civic-navy transition hover:border-slate-300 hover:bg-slate-50 active:translate-y-px" href="/news">
            지방자치혁신뉴스
            <Icon name="solar:arrow-right-up-linear" size={17} />
          </a>
        </div>
      </div>

      <figure className="relative m-0 overflow-hidden rounded-[28px] border border-civic-line bg-gradient-to-br from-emerald-50/80 to-white p-6 shadow-civic max-[980px]:max-w-[720px]">
        <figcaption className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[12px] font-bold text-civic-green shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-civic-green" />
          AI 의정 워크플로
        </figcaption>
        <HeroArt />
      </figure>
    </section>
  );
}
