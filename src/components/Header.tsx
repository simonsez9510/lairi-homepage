import Link from "next/link";
import { navItems } from "@/data/home";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-civic-line bg-civic-paper">
      <nav className="section-container flex min-h-16 items-center justify-between gap-4 py-3" aria-label="주요 메뉴">
        <Link className="focus-ring flex items-center whitespace-nowrap" href="/" aria-label="지방자치혁신연구원 홈">
          <span className="bg-civic-navy px-2 py-0.5 text-[15px] font-semibold leading-tight tracking-tight text-white">지방자치</span>
          <span className="ml-1.5 text-[17px] font-semibold tracking-tight text-civic-navy">혁신연구원</span>
        </Link>
        <div className="flex items-center gap-3 text-[13px] text-civic-navy/75 max-[1040px]:hidden" aria-label="페이지 섹션">
          {navItems.map((item) => (
            <Link key={item.href} className="focus-ring border-b border-transparent py-2 transition-colors hover:border-civic-green hover:text-civic-navy" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <details className="relative min-[1041px]:hidden">
            <summary className="focus-ring inline-flex min-h-10 cursor-pointer list-none items-center justify-center rounded-[10px] border border-civic-line bg-white px-3 text-sm font-medium text-civic-navy">
              메뉴
            </summary>
            <div className="absolute right-0 top-12 grid w-52 gap-1 rounded-[12px] border border-civic-line bg-civic-paper p-2">
              {navItems.map((item) => (
                <Link key={item.href} className="focus-ring rounded-[8px] px-3 py-2 text-sm font-medium text-civic-navy hover:bg-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="focus-ring rounded-[8px] bg-civic-green px-3 py-2 text-sm font-semibold text-white" href="/contact">
                연구 자문 문의
              </Link>
            </div>
          </details>
          <Link
            className="nav-cta focus-ring inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-[10px] bg-civic-green px-4 text-sm font-semibold transition-colors hover:bg-[#15803d] max-[420px]:hidden"
            href="/contact"
            style={{ color: "#ffffff" }}
          >
            연구 자문 문의
          </Link>
        </div>
      </nav>
    </header>
  );
}
