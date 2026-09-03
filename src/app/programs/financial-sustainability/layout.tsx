import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Sustainability",
  description:
    "Building institutional resilience through strategic partnerships, social enterprise, and community-based savings groups. 6+ partners, 3 revenue streams, 2030 self-sufficiency target.",
  openGraph: {
    title: "Financial Sustainability | SHIFSD Liberia",
    description:
      "Sustaining impact beyond aid — a model for long-term, self-funded community development.",
  },
};

export default function FinancialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
