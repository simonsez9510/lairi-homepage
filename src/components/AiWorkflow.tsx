import { aiSteps } from "@/data/home";
import { Icon } from "./Icon";

export function AiWorkflow() {
  return (
    <section className="section-container mb-12 grid grid-cols-[0.92fr_1.08fr] overflow-hidden rounded-[26px] border border-civic-line bg-white shadow-civic max-[980px]:grid-cols-1" id="ai" aria-labelledby="ai-title">
      <div className="flex flex-col justify-between bg-civic-navy p-8 text-white lg:p-9">
        <div>
          <div className="mb-2 text-[12px] font-black uppercase tracking-wide text-civic-green-soft">AI Legislative Workflow</div>
          <h2 id="ai-title" className="text-[32px] font-bold leading-[1.15] text-white md:text-[38px] lg:text-[42px]">지방의회 업무를 흐름 단위로 지원합니다.</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-white/74">초안 작성, 근거 검토, 예산 분석, 회의록 확인, 보고서 내보내기를 하나의 업무선으로 연결합니다.</p>
        </div>
        <div className="mt-8 flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/5 p-5">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-civic-green/20 text-civic-green-soft">
            <Icon name="solar:cpu-bolt-bold-duotone" size={32} />
          </span>
          <div>
            <div className="text-[15px] font-bold text-white">jachiai.kr</div>
            <p className="mt-0.5 text-[13px] leading-[1.4] text-white/70">AI 지방의정시스템 운영 서비스</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px bg-civic-line max-[640px]:grid-cols-1">
        {aiSteps.map((step) => (
          <div key={step.number} className="flex min-h-[122px] flex-col justify-between bg-white p-5">
            <b className="text-[12px] font-extrabold tabular-nums text-civic-green">{step.number}</b>
            <div>
              <strong className="mt-2 block text-[18px] font-bold leading-[1.25] text-civic-navy">{step.title}</strong>
              <span className="mt-1.5 block text-[13px] leading-[1.4] text-civic-muted">{step.copy}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
