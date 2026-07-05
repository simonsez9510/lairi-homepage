import type { Metadata } from "next";
import { Newsroom } from "@/components/Newsroom";

export const metadata: Metadata = {
  title: "혁신뉴스 - 지방자치혁신연구원",
  description: "지방자치혁신뉴스의 정책 브리프, 원장 칼럼, 혁신 조례 분석, 오늘의 숫자를 소개합니다.",
};

export default function NewsPage() {
  return (
    <div className="page-stack">
      <Newsroom />
    </div>
  );
}
