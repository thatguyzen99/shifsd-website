import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Livelihood Skills",
  description:
    "Equipping youth and women with employable skills and practical knowledge: Leaders in Teaching in 65 public schools, adult education in 30 Lofa communities, TVET and academic programs.",
  openGraph: {
    title: "Education & Livelihood Skills | SHIFSD Liberia",
    description:
      "Equipping youth and women with employable skills and practical knowledge.",
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
