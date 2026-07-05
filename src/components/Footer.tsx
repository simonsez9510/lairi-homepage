import { links } from "@/data/home";

export function Footer() {
  return (
    <footer className="section-container flex justify-between gap-5 border-t border-civic-line py-7 pb-[50px] text-sm text-civic-muted max-[640px]:flex-col">
      <span>© 2026 지방자치혁신연구원</span>
      <span>
        서울특별시 마포구 어울마당로 130, 3층 3358호 ·{" "}
        <a className="font-bold text-civic-navy" href={links.news} target="_blank" rel="noopener noreferrer">
          jachinews.kr
        </a>
      </span>
    </footer>
  );
}
