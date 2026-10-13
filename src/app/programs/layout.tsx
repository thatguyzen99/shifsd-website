import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Three thematic pillars: Education & Livelihood Skills, Climate Smart Agriculture, and Financial Sustainability — implemented on an integrated basis across Liberia.",
  openGraph: {
    title: "SHIFSD Programs — Three Pillars, One Mission",
    description:
      "Climate-Smart Agriculture, Education & Livelihood, and Financial Sustainability programs building resilient communities across Liberia.",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
