import Link from "next/link";
import { director, links, mainNav } from "@/data/home";
import { MobileMenu, ServicesMenu } from "./HeaderMenus";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.util}>
        <div className={s.wrap}>
          <span>지방의회와 지자체를 위한 정책연구기관</span>
          <nav className={s.utilNav} aria-label="보조 메뉴">
            <a className="focus-ring" href={director.site} target="_blank" rel="noopener noreferrer">
              원장 원성묵
            </a>
            <a className="focus-ring" href={links.introPdf}>
              연구원 소개서 PDF
            </a>
          </nav>
        </div>
      </div>
      <div className={s.bar}>
        <nav className={`${s.wrap} ${s.barInner}`} aria-label="주요 메뉴">
          <Link className={`focus-ring ${s.logo}`} href="/" aria-label="지방자치혁신연구원 홈">
            <b>지방자치</b>혁신연구원
          </Link>

          <div className={s.main}>
            {mainNav.map((item) => (
              <Link key={item.href} className="focus-ring" href={item.href}>
                {item.label}
              </Link>
            ))}
            <ServicesMenu />
          </div>

          <div className={s.actions}>
            <MobileMenu />
            <Link className={`focus-ring ${s.cta}`} href="/contact">
              연구 자문 문의
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
