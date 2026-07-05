import type { Metadata } from "next";
import { AiWorkflow } from "@/components/AiWorkflow";

export const metadata: Metadata = {
  title: "AI 의정시스템 - 지방자치혁신연구원",
  description: "조례 작성, 질의서 생성, 예결산 분석, 회의록 검색을 지원하는 AI 지방의정시스템입니다.",
};

export default function AiPage() {
  return (
    <div className="page-stack">
      <AiWorkflow />
    </div>
  );
}
