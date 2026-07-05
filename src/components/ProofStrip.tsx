import { proofItems } from "@/data/home";
import { cn } from "@/lib/cn";

export function ProofStrip() {
  return (
    <section className="section-container mb-10 grid grid-cols-[1.1fr_repeat(3,1fr)] border-y border-civic-line max-[980px]:grid-cols-2 max-[640px]:grid-cols-1" aria-label="핵심 신뢰 지표">
      {proofItems.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "flex min-h-[84px] flex-col justify-center border-civic-line px-5 py-4",
            index !== proofItems.length - 1 && "border-r",
            index % 2 === 1 && "max-[980px]:border-r-0",
            index < 2 && "max-[980px]:border-b",
            "max-[640px]:border-r-0",
            index !== proofItems.length - 1 && "max-[640px]:border-b",
          )}
        >
          <small className="font-extrabold text-[12px] text-civic-gold">{item.label}</small>
          <strong className="mt-1 text-[19px] font-semibold leading-[1.25] text-civic-navy">{item.title}</strong>
          <p className="mt-1 text-[13px] leading-[1.35] text-civic-muted">{item.copy}</p>
        </div>
      ))}
    </section>
  );
}
