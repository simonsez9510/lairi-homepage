import type { Metadata } from "next";
import { Team } from "@/components/Team";

export const metadata: Metadata = {
  title: "연구진 - 지방자치혁신연구원",
  description: "지방자치혁신연구원의 정책연구, 사회복지, 지방행정, 데이터사이언스 연구진입니다.",
};

export default function TeamPage() {
  return (
    <div className="page-stack">
      <Team />
    </div>
  );
}
