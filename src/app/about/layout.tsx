import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded by Liberian refugees in Ghana's Central Region in 2000 and registered in Liberia in 2005 — SHIFSD's story, vision, values, team and partners.",
  openGraph: {
    title: "About SHIFSD | Practical Help for Self-Reliance",
    description:
      "Founded by Liberian refugees in Ghana in 2000, SHIFSD reached 2,526 beneficiaries between late 2024 and 2026 across Montserrado, Bong, Nimba and Lofa Counties.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
