import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Livelihood Skills",
  description:
    "Scholarships, vocational training, adult literacy, and leadership development. 50+ scholarships awarded, 200+ youth in vocational training across three communities.",
  openGraph: {
    title: "Education & Livelihood Skills | SHIFSD Liberia",
    description:
      "Building human capital for a stronger Liberia — one student, one skill, one community at a time.",
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
