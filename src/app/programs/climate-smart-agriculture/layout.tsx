import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climate-Smart Agriculture",
  description:
    "Strengthening food security and resilience through farmer training and agribusiness initiatives. 28.1 acres of farmland and CSA awareness in 25 communities.",
  openGraph: {
    title: "Climate-Smart Agriculture | SHIFSD Liberia",
    description:
      "Strengthening food security and resilience through farmer training and agribusiness.",
  },
};

export default function CSALayout({ children }: { children: React.ReactNode }) {
  return children;
}
