import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "From a Ghanaian refugee camp in 2000 to seven counties of Liberia today — SHIFSD's story, values, leadership, and 24-year journey of community-led development.",
  openGraph: {
    title: "About SHIFSD | Practical Help for Self-Reliance",
    description:
      "Founded by Liberian refugees in Ghana in 2000, SHIFSD now serves 1,187+ beneficiaries across seven counties through agriculture, education, and financial sustainability programs.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
