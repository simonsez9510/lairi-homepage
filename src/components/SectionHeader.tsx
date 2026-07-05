type SectionHeaderProps = {
  label: string;
  title: string;
  copy: string;
  id?: string;
};

export function SectionHeader({ label, title, copy, id }: SectionHeaderProps) {
  return (
    <div className="mb-5 max-w-[760px]">
      <div className="mb-2 text-[12px] font-black uppercase tracking-wide text-civic-green">{label}</div>
      <h2 id={id} className="text-[32px] font-bold leading-[1.16] tracking-[-0.02em] text-civic-navy md:text-[38px] lg:text-[42px]">
        {title}
      </h2>
      <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-civic-muted">{copy}</p>
    </div>
  );
}
