import { contactDetails } from "@/data/home";

export function Contact() {
  return (
    <section className="contact-panel section-container relative mb-[60px] grid grid-cols-[0.95fr_1.05fr] items-end gap-7 overflow-hidden rounded-[28px] bg-civic-navy p-7 text-white md:p-8 lg:p-9 max-[980px]:grid-cols-1" id="contact" aria-labelledby="contact-title">
      <div>
        <div className="mb-2 text-[12px] font-black uppercase tracking-wide text-civic-green-soft">Contact</div>
        <h2 id="contact-title" className="text-[32px] font-bold leading-[1.15] text-white md:text-[38px] lg:text-[42px]">연구 용역, 정책 자문, AI 의정시스템 도입을 논의해보세요.</h2>
        <p className="mt-4 text-[15px] leading-[1.6] text-white/74">대한민국 지방자치 발전을 위한 정책 파트너로 함께하겠습니다.</p>
        <div className="mt-7 flex flex-wrap gap-3 max-[640px]:flex-col">
          <a className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full bg-civic-green px-6 font-extrabold text-white shadow-[0_14px_30px_rgba(22,163,74,0.32)] transition hover:-translate-y-0.5 active:translate-y-px" href="mailto:seongmuk.won@gmail.com">연구 자문 문의</a>
        </div>
      </div>
      <div className="grid w-[min(100%,460px)] justify-self-end gap-2.5 max-[980px]:w-full max-[980px]:justify-self-stretch">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
            <small className="block font-black text-civic-green-soft">{detail.label}</small>
            {detail.href ? (
              <a className="focus-ring mt-1 block break-words text-white/92 hover:text-white" href={detail.href}>
                {detail.value}
              </a>
            ) : (
              <span className="mt-1 block break-words text-white/92">{detail.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
