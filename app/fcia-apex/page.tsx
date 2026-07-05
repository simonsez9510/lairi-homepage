import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FCIA APEX - 지방자치혁신연구원",
  description: "지방자치혁신연구원 FCIA APEX 소개 페이지입니다.",
};

export default function FciaApexPage() {
  return (
    <main style={{ minHeight: "100dvh", background: "#0f172a" }}>
      <iframe
        title="FCIA APEX"
        src="/lairi-homepage/fcia-apex/index.html"
        style={{ display: "block", width: "100%", height: "100dvh", border: 0 }}
      />
    </main>
  );
}
