import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "Stories from the field, program updates, and media coverage of SHIFSD's work across seven Liberian counties.",
  openGraph: {
    title: "News & Media | SHIFSD Liberia",
    description:
      "Read the latest stories from SHIFSD's work in Liberia — agriculture, education, community development, and impact reporting.",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
