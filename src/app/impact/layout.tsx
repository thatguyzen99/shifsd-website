import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "24+ years of service, 1,187+ direct beneficiaries, 7 counties, 28.1 acres of farmland, 6+ strategic partners. Independently verified impact across agriculture, education, and financial programs.",
  openGraph: {
    title: "SHIFSD Impact | Measuring Change Across Liberia",
    description:
      "Over two decades of measurable, verified impact — stories, data, and the geographic reach of SHIFSD's work.",
  },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
