import { researchFields } from "@/data/home";
import { Icon } from "./Icon";
import { SectionHeader } from "./SectionHeader";

export function ResearchFields() {
  return (
    <section className="section-container" id="research" aria-labelledby="fields-title">
      <SectionHeader id="fields-title" label="Research Fields" title="6개 분야를 정책 매트릭스로 압축합니다." copy="의뢰기관이 자신의 문제를 빠르게 찾을 수 있도록 연구 분야를 분류합니다." />
      <div className="mb-12 grid grid-cols-3 gap-4 max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        {researchFields.map((field) => (
          <article key={field.label} className="rounded-[20px] border border-civic-line bg-white p-5 shadow-civic transition hover:-translate-y-0.5 hover:border-civic-green/40">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-civic-green/10 text-civic-green">
              <Icon name={field.icon} size={28} />
            </span>
            <small className="mt-4 block font-black text-civic-green">{field.label}</small>
            <h3 className="mt-1.5 text-[20px] font-bold leading-[1.25] text-civic-navy">{field.title}</h3>
            <p className="m-0 mt-1.5 text-[13px] leading-[1.5] text-civic-muted">{field.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
