import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SHIFSD Liberia — send us a message, visit our Johnsonville office in Monrovia, or reach us by email or phone.",
  openGraph: {
    title: "Contact SHIFSD Liberia",
    description:
      "Reach out to learn more about our programs or explore partnership opportunities.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
