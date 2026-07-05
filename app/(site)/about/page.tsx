import type { Metadata } from "next";
import { Pillars } from "@/components/Pillars";
import { ProofStrip } from "@/components/ProofStrip";

export const metadata: Metadata = {
  title: "연구원 소개 - 지방자치혁신연구원",
  description: "지방자치혁신연구원의 정책연구, AI 의정시스템, 혁신뉴스 3대 축을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="page-stack">
      <Pillars />
      <ProofStrip />
    </div>
  );
}
