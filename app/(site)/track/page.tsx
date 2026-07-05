import type { Metadata } from "next";
import { ResearchTimeline } from "@/components/ResearchTimeline";

export const metadata: Metadata = {
  title: "연구 실적 - 지방자치혁신연구원",
  description: "2023년부터 2026년까지 지방자치혁신연구원이 수행한 정책 연구 과제입니다.",
};

export default function TrackPage() {
  return (
    <div className="page-stack">
      <ResearchTimeline />
    </div>
  );
}
