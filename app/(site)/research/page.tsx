import type { Metadata } from "next";
import { ResearchFields } from "@/components/ResearchFields";

export const metadata: Metadata = {
  title: "연구 분야 - 지방자치혁신연구원",
  description: "생활정책, 자치제도, 지역경제, 재정과 데이터, 환경과 탄소, 문화와 공간 연구 분야입니다.",
};

export default function ResearchPage() {
  return (
    <div className="page-stack">
      <ResearchFields />
    </div>
  );
}
