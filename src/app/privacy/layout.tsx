import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SHIFSD Liberia handles the information you share with us through this website — what we collect, how we use it, and the choices you have.",
  robots: { index: true, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
