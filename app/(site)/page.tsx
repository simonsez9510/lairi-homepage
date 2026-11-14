import Link from "next/link";
import {
  director,
  featuredResearch,
  fieldIndex,
  recentItems,
  researchTimeline,
  services,
} from "@/data/home";
import s from "./home.module.css";

const stackOrder = [
  { key: "jachiai", slot: s.shotBackLeft },
  { key: "edu", slot: s.shotBackRight },
  { key: "news", slot: s.shotFront },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function HomePage() {
  const yearsDesc = [...researchTimeline].reverse();

  return (
    <div className={s.page}>
      <section className={s.showcase} aria-labelledby="hero-title">
        <div className={`${s.wrap} ${s.showcaseGrid}`}>
          <div>
            <h1 id="hero-title" className={s.heroTitle}>
              <span>지방자치혁신연구원을</span>
              <br />
              소개합니다
            </h1>
            <p className={s.heroCopy}>
              연구로 근거를 만들고, 직접 운영하는 서비스로 현장에 닿습니다. 정책연구, AI 의정시스템, 지방자치 전문 매체,
              공무원 교육을 한 연구원이 함께 합니다.
            </p>
            <div className={s.heroActions}>
              <a className={s.btn} href="#research">
                대표 연구 보기
              </a>
              <a className={s.textlink} href="#services">
                대표 서비스 3개
              </a>
            </div>
          </div>
          <div className={s.stack} aria-label="연구원이 운영하는 서비스 화면">
            {stackOrder.map(({ key, slot }) => {
              const svc = services.find((item) => item.key === key)!;
              return (
                <a key={svc.key} className={`${s.shot} ${slot}`} href={svc.external} target="_blank" rel="noopener noreferrer">
                  <span className={s.shotBar}>
                    <i />
                    <i />
                    <i />
                    <span>{svc.domain}</span>
                  </span>
                  <img src={svc.image} alt={`${svc.name} 화면`} loading="eager" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className={s.research} id="research" aria-labelledby="research-title">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2 id="research-title">대표 연구</h2>
            <Link className={s.textlink} href="/track">
              연구 전체 보기
            </Link>
          </div>
          <div className={s.researchGrid}>
            <div className={s.lead}>
              <div className={s.meta}>
                <span className={s.type}>{featuredResearch.type}</span> · {featuredResearch.meta}
              </div>
              <h3 className={s.leadTitle}>{featuredResearch.title}</h3>
              <p className={s.summary}>{featuredResearch.summary}</p>
              <ul className={s.findings}>
                {featuredResearch.findings.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link className={s.textlink} href={featuredResearch.href}>
                연구 내용 보기
              </Link>
            </div>
            <aside className={s.side} aria-label="최근 연구와 교육">
              <div className={s.kicker}>최근 연구와 교육</div>
              {recentItems.map((item) => {
                const body = (
                  <>
                    <div className={s.meta}>
                      <span className={s.type}>{item.type}</span> · {item.meta}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </>
                );
                return (
                  <article key={item.title}>
                    {isExternal(item.href) ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {body}
                      </a>
                    ) : (
                      <Link href={item.href}>{body}</Link>
                    )}
                  </article>
                );
              })}
            </aside>
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="fields-title">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2 id="fields-title">연구 분야</h2>
            <Link className={s.textlink} href="/research">
              분야별 연구 보기
            </Link>
          </div>
          <div className={s.fields}>
            {fieldIndex.map((field) => (
              <div key={field.title} className={s.field}>
                <h3>{field.title}</h3>
                <p className={s.scope}>{field.scope}</p>
                <ul>
                  {field.projects.map(([name, year]) => (
                    <li key={name}>
                      {name}
                      <em>{year}</em>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} id="services" aria-labelledby="services-title">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2 id="services-title">대표 서비스</h2>
            <span className={s.meta}>연구원이 직접 만들고 운영합니다</span>
          </div>
          <div className={s.svcList}>
            {services.map((svc) => {
              const body = (
                <>
                  <div className={s.meta}>
                    <span className={s.type}>{svc.type}</span> · {svc.domain}
                  </div>
                  <h3>{svc.name}</h3>
                  <p>{svc.copy}</p>
                </>
              );
              return isExternal(svc.href) ? (
                <a key={svc.key} href={svc.href} target="_blank" rel="noopener noreferrer">
                  {body}
                </a>
              ) : (
                <Link key={svc.key} href={svc.href}>
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={s.brand} aria-label="연구원 슬로건">
        <div className={`${s.wrap} ${s.brandGrid}`}>
          <h2>
            <span>지역의 답은</span>
            <br />
            지역 안에 있다
          </h2>
          <p>지방의회와 지자체를 위한 정책연구, AI 의정지원, 데이터 기반 뉴스를 하나의 흐름으로 연결합니다.</p>
        </div>
      </section>

      <section className={s.director} aria-label="원장 소개">
        <div className={`${s.wrap} ${s.directorGrid}`}>
          <img src={director.photo} alt={`${director.name} 원장`} width={96} height={96} />
          <div>
            <div className={s.kicker}>원장</div>
            <h3>{director.name}</h3>
            <p>{director.bio}</p>
          </div>
          <a className={s.textlink} href={director.site} target="_blank" rel="noopener noreferrer">
            원성묵 개인 사이트
          </a>
        </div>
      </section>

      <section className={s.section} aria-labelledby="track-title">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2 id="track-title">연구 실적</h2>
            <Link className={s.textlink} href="/track">
              전체 보기
            </Link>
          </div>
          <div className={s.years}>
            {yearsDesc.map((year) => (
              <div key={year.year} className={s.year}>
                <h3>{year.year}</h3>
                <ul>
                  {year.projects.map((project) => (
                    <li key={project.title}>
                      {project.title}
                      <em>{project.meta.split(" / ")[0]}</em>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
