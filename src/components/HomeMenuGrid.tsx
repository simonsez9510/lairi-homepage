import Link from "next/link";
import { homeMenuCards } from "@/data/home";
import { Icon } from "./Icon";

export function HomeMenuGrid() {
  return (
    <section className="section-container py-12 md:py-16" aria-labelledby="home-menu-title">
      <div className="mb-8 max-w-[760px]">
        <p className="mb-2 text-[14px] font-medium text-civic-green">연구원 안내</p>
        <h2 id="home-menu-title" className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-civic-navy md:text-[40px]">
          연구원의 활동을 여섯 갈래로 정리했습니다
        </h2>
        <p className="mt-3 text-[15px] leading-[1.6] text-civic-muted">
          정책연구부터 AI 의정시스템, 연구 실적과 분야, 지방자치혁신뉴스, 연구진까지 — 지방의회와 지자체에 필요한 협력 지점을 담았습니다.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {homeMenuCards.map((card, index) => (
          <Link key={card.href} className="focus-ring group flex h-full flex-col rounded-[12px] border border-civic-line bg-white p-6 transition-colors hover:border-civic-green/50" href={card.href}>
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-civic-green">
                제{index + 1}조 <span className="text-civic-muted">{card.label}</span>
              </span>
              <Icon name="solar:arrow-right-up-linear" size={16} className="text-civic-muted transition-colors group-hover:text-civic-green" />
            </div>
            <h3 className="mt-4 text-[20px] font-semibold leading-[1.3] text-civic-navy">{card.title}</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-civic-muted">{card.copy}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
