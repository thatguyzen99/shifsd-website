import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the SHIFSD Liberia website — acceptable use, content ownership, donations, and applicable law.",
  robots: { index: true, follow: false },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
