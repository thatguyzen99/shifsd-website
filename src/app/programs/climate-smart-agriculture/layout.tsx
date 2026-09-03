import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climate-Smart Agriculture",
  description:
    "Training smallholder farmers in conservation agriculture, agroforestry, and post-harvest management. 1,187+ farmers trained, 28.1-acre demonstration farm, 85% yield improvement.",
  openGraph: {
    title: "Climate-Smart Agriculture | SHIFSD Liberia",
    description:
      "Growing food security from the ground up across seven Liberian counties.",
  },
};

export default function CSALayout({ children }: { children: React.ReactNode }) {
  return children;
}
