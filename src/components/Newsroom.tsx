import { links, newsCards } from "@/data/home";
import { Icon } from "./Icon";

export function Newsroom() {
  return (
    <section className="section-container mb-12 grid grid-cols-[0.85fr_1.15fr] items-stretch gap-6 max-[980px]:grid-cols-1" id="news" aria-labelledby="news-title">
      <div className="news-feature relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[24px] bg-civic-navy p-7 text-white max-[640px]:min-h-0">
        <div>
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-civic-green/20 text-civic-green-soft">
            <Icon name="solar:notebook-bookmark-bold-duotone" size={30} />
          </span>
          <div className="mb-2 mt-5 text-[12px] font-black uppercase tracking-wide text-civic-green-soft">Newsroom</div>
          <h2 id="news-title" className="text-[36px] font-bold leading-[1.12] text-white">지방자치혁신뉴스</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-white/74">연구의 깊이와 뉴스의 속도를 결합한 지방자치 전문 매체. 정책 브리프와 데이터 분석, 지역 혁신 사례를 꾸준히 발행합니다.</p>
        </div>
        <a className="focus-ring relative z-10 mt-6 inline-flex items-center gap-1.5 font-black text-civic-green-soft hover:text-white" href={links.news} target="_blank" rel="noopener noreferrer">
          jachinews.kr 바로가기
          <Icon name="solar:arrow-right-up-linear" size={18} />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
        {newsCards.map((card) => (
          <article key={card.number} className="min-h-[116px] rounded-[18px] border border-civic-line bg-white p-4">
            <small className="font-black text-civic-green">{card.number}</small>
            <strong className="mt-2 block text-[17px] font-bold leading-[1.25] text-civic-navy">{card.title}</strong>
            <p className="mt-1.5 text-[13px] leading-[1.45] text-civic-muted">{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
