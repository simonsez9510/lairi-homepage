import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  title: "지방자치혁신연구원 - 지역의 답은 지역 안에 있다",
  description:
    "지방의회와 지자체를 위한 정책연구, AI 의정지원, 데이터 기반 뉴스 인사이트를 제공하는 지방자치혁신연구원 홈 리디자인.",
  metadataBase: new URL("https://home.jachinews.kr"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "지방자치혁신연구원 - 지역의 답은 지역 안에 있다",
    description: "AI 기술과 정책 전문성의 결합으로 지방의정의 새로운 기준을 만듭니다.",
    url: "/",
    siteName: "지방자치혁신연구원",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "지방자치혁신연구원 지역의 답은 지역 안에 있다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "지방자치혁신연구원 - 지역의 답은 지역 안에 있다",
    description: "AI 기술과 정책 전문성의 결합으로 지방의정의 새로운 기준을 만듭니다.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js" defer />
      </head>
      <body>{children}</body>
    </html>
  );
}
