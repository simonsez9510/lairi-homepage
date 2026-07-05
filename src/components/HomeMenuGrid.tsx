import Link from "next/link";
import { homeMenuCards } from "@/data/home";
import { Icon } from "./Icon";

export function HomeMenuGrid() {
  return (
    <section className="section-container py-12 md:py-16" aria-labelledby="home-menu-title">
      <div className="mb-6 max-w-[760px]">
        <div className="mb-2 text-[12px] font-black uppercase tracking-wide text-civic-green">Overview</div>
        <h2 id="home-menu-title" className="text-[32px] font-bold leading-[1.16] tracking-[-0.02em] text-civic-navy md:text-[40px]">
          연구원의 활동을 여섯 갈래로 정리했습니다.
        </h2>
        <p className="mt-3 text-[15px] leading-[1.6] text-civic-muted">
          정책연구부터 AI 의정시스템, 연구 실적과 분야, 지방자치혁신뉴스, 연구진까지 — 지방의회와 지자체에 필요한 협력 지점을 담았습니다.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {homeMenuCards.map((card) => (
          <Link key={card.href} className="focus-ring group flex h-full flex-col rounded-[20px] border border-civic-line bg-white shadow-civic transition hover:-translate-y-0.5 hover:border-civic-green/40" href={card.href}>
            <div className="flex items-center justify-between rounded-t-[20px] bg-gradient-to-br from-emerald-50 to-white p-5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-civic-green/10 text-civic-green transition group-hover:scale-105">
                <Icon name={card.icon} size={28} />
              </span>
              <Icon name="solar:arrow-right-up-linear" size={20} className="text-civic-muted transition group-hover:text-civic-green" />
            </div>
            <div className="flex flex-1 flex-col p-5 pt-4">
              <div className="text-[12px] font-black text-civic-green">{card.number} · {card.label}</div>
              <h3 className="mt-2 text-[21px] font-bold leading-[1.25] text-civic-navy">{card.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-civic-muted">{card.copy}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
