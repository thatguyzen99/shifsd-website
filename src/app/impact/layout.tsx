import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "2,526 beneficiaries between late 2024 and 2026, 65 public schools in Leaders in Teaching, and 1,395+ youth reached in 2022–2024 — SHIFSD's impact across education, agriculture and financial empowerment.",
  openGraph: {
    title: "SHIFSD Impact | Measuring Change Across Liberia",
    description:
      "Key figures, impact by programme area, reports and the geographic reach of SHIFSD's work.",
  },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
