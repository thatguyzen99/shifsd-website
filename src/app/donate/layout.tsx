import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support SHIFSD's programs in Liberia. Give online, by bank transfer to Ecobank Liberia, or by mobile money.",
  openGraph: {
    title: "Donate to SHIFSD Liberia",
    description:
      "Your generosity changes lives. Choose one-time or recurring giving in support of Climate-Smart Agriculture, Education, and Financial Sustainability.",
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
