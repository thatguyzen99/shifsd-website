import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the movement to build a more resilient, self-sustaining Liberia. Donate, volunteer your skills, or partner with SHIFSD as an organisation.",
  openGraph: {
    title: "Get Involved with SHIFSD Liberia",
    description:
      "Three ways to make a difference: donate, volunteer, or partner with SHIFSD.",
  },
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
