import { pillars } from "@/data/home";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { SectionHeader } from "./SectionHeader";

export function Pillars() {
  return (
    <section className="section-container" id="about">
      <SectionHeader label="Three Pillars" title="연구, 의정 AI, 뉴스 인사이트를 하나의 체계로." copy="정책연구, AI 의정시스템, 지방자치혁신뉴스 — 공공 의사결정자가 신뢰할 수 있는 세 개의 축으로 연구원의 역할을 정리합니다." />
      <div className="mb-12 grid grid-cols-3 gap-4 max-[980px]:grid-cols-1">
        {pillars.map((pillar) => (
          <article key={pillar.number} className={cn("flex min-h-[300px] flex-col justify-between rounded-[24px] border p-6", pillar.featured ? "border-civic-green/40 bg-civic-navy text-white" : "border-civic-line bg-white text-civic-ink")}>
            <div>
              <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", pillar.featured ? "bg-white/10 text-civic-green-soft" : "bg-civic-green/10 text-civic-green")}>
                <Icon name={pillar.icon} size={30} />
              </span>
              <div className={cn("mt-5 text-[12px] font-black tracking-wide", pillar.featured ? "text-civic-green-soft" : "text-civic-green")}>{pillar.number} · {pillar.label}</div>
              <h3 className={cn("mt-2 text-[24px] font-bold leading-[1.2]", pillar.featured ? "text-white" : "text-civic-navy")}>{pillar.title}</h3>
              <p className={cn("m-0 mt-2 text-[14px] leading-[1.5]", pillar.featured ? "text-white/76" : "text-civic-muted")}>{pillar.copy}</p>
            </div>
            <ul className={cn("mt-5 grid list-none gap-1.5 p-0 text-sm", pillar.featured ? "text-white/76" : "text-slate-600")}>
              {pillar.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Icon name="solar:check-circle-bold-duotone" size={18} className={pillar.featured ? "mt-0.5 shrink-0 text-civic-green-soft" : "mt-0.5 shrink-0 text-civic-green"} />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
