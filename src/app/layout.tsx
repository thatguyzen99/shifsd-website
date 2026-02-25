import type { Metadata } from "next";
import { Montserrat, Open_Sans, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "SHIFSD Liberia | Self Help Initiative for Sustainable Development",
    template: "%s | SHIFSD Liberia",
  },
  description:
    "SHIFSD exists to alleviate poverty through access to alternative sources of education and entrepreneurship across Liberia. 24+ years of community impact.",
  keywords: [
    "Liberia NGO",
    "SHIFSD Liberia",
    "nonprofit Liberia",
    "education Liberia",
    "poverty alleviation Liberia",
    "climate smart agriculture Africa",
    "VSLA training Liberia",
    "TVET Liberia",
  ],
  openGraph: {
    title: "SHIFSD Liberia | Practical Help for Self-Reliance",
    description:
      "From refugee camp to community catalyst — empowering Liberia since 2000.",
    url: "https://www.shifsd-liberia.org",
    siteName: "SHIFSD Liberia",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${lora.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
