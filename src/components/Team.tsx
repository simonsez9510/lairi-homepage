import { teamMembers } from "@/data/home";
import { SectionHeader } from "./SectionHeader";

export function Team() {
  return (
    <section className="section-container" id="team">
      <SectionHeader label="Research Team" title="전문성의 조합으로 정책 현장을 읽습니다." copy="정책 현장, 사회복지, 행정 경험, 데이터사이언스의 조합이 의뢰기관의 신뢰 판단 기준입니다." />
      <div className="mb-12 grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
        {teamMembers.map((member) => (
          <article key={member.name} className="flex min-h-[236px] flex-col justify-between rounded-[18px] border border-civic-line bg-white p-5 shadow-civic transition hover:-translate-y-0.5 hover:border-civic-green/40">
            <div>
              <div className="text-[12px] font-black tracking-wide text-civic-green">{member.role}</div>
              <h3 className="mt-1.5 text-[24px] font-bold leading-[1.2] text-civic-navy">{member.name}</h3>
              <ul className="mt-3 grid list-none gap-1 border-t border-civic-soft-line p-0 pt-3 text-[12px] leading-[1.4] text-civic-muted">
                {member.profile.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <span className="mt-4 inline-flex text-[13px] font-extrabold text-civic-green">{member.expertise}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
