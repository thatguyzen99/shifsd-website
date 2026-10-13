import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Sustainability",
  description:
    "Empowering families and communities through VSLAs, financial literacy, and entrepreneurship support.",
  openGraph: {
    title: "Financial Sustainability | SHIFSD Liberia",
    description:
      "Empowering families and communities through VSLAs, financial literacy, and entrepreneurship support.",
  },
};

export default function FinancialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
