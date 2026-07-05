import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "연구 자문 문의 - 지방자치혁신연구원",
  description: "지방자치혁신연구원 연구 용역, 정책 자문, AI 의정시스템 도입 문의 안내입니다.",
};

export default function ContactPage() {
  return (
    <div className="page-stack">
      <Contact />
    </div>
  );
}
