import { contactDetails } from "@/data/home";

export function Contact() {
  return (
    <section className="contact-panel section-container relative mb-10 grid grid-cols-[0.9fr_1.1fr] items-center gap-8 overflow-hidden rounded-[28px] bg-civic-navy p-7 text-white md:p-8 max-[980px]:grid-cols-1" id="contact" aria-labelledby="contact-title">
      <div>
        <div className="mb-2 text-[12px] font-black uppercase tracking-wide text-civic-green-soft">Contact</div>
        <h2 id="contact-title" className="text-[28px] font-bold leading-[1.18] text-white md:text-[34px]">연구 용역, 정책 자문, AI 의정시스템 도입을 논의해보세요.</h2>
        <p className="mt-3 text-[15px] leading-[1.6] text-white/74">대한민국 지방자치 발전을 위한 정책 파트너로 함께하겠습니다.</p>
        <div className="mt-6">
          <a className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full bg-civic-green px-6 font-extrabold text-white shadow-[0_14px_30px_rgba(22,163,74,0.32)] transition hover:-translate-y-0.5 active:translate-y-px" href="mailto:seongmuk.won@gmail.com">연구 자문 문의</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5 max-[560px]:grid-cols-1">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5">
            <small className="block text-[11px] font-black text-civic-green-soft">{detail.label}</small>
            {detail.href ? (
              <a className="focus-ring mt-0.5 block break-words text-[14px] text-white/92 hover:text-white" href={detail.href}>
                {detail.value}
              </a>
            ) : (
              <span className="mt-0.5 block break-words text-[14px] text-white/92">{detail.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
