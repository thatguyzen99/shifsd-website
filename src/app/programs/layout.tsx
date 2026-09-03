import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Three integrated pillars of sustainable development: Climate-Smart Agriculture, Education & Livelihood Skills, and Financial Sustainability — working together across seven Liberian counties.",
  openGraph: {
    title: "SHIFSD Programs — Three Pillars, One Mission",
    description:
      "Climate-Smart Agriculture, Education & Livelihood, and Financial Sustainability programs building resilient communities across Liberia.",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
