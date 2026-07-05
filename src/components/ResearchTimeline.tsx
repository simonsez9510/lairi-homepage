import { researchTimeline } from "@/data/home";
import { SectionHeader } from "./SectionHeader";

export function ResearchTimeline() {
  return (
    <section className="section-container" id="track">
      <SectionHeader label="Research Track Record" title="수행 과제로 검증된 정책 연구 역량." copy="연구 실적은 공공기관이 협력 여부를 판단하는 가장 강한 근거입니다." />
      <div className="mb-12 grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
        {researchTimeline.map((yearGroup) => (
          <div key={yearGroup.year} className="border-t-2 border-civic-green/30 pt-4">
            <div className="text-[28px] font-extrabold leading-none tracking-tight text-civic-green">{yearGroup.year}</div>
            <div className="mt-3 grid gap-2">
              {yearGroup.projects.map((project) => (
                <article key={project.title} className="rounded-[14px] border border-civic-soft-line bg-white/60 p-3.5">
                  <strong className="block text-[15px] leading-[1.38] text-civic-navy">{project.title}</strong>
                  <span className="mt-2 block text-[12px] leading-[1.35] text-civic-muted">{project.meta}</span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
