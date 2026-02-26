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
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
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
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer />
      </head>
      <body className="antialiased">
        {/* Netlify Identity redirect handler for CMS login */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", function(user) {
              if (!user) {
                window.netlifyIdentity.on("login", function() {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}} />
        {/* Hidden forms for Netlify Forms detection at build time */}
        <form name="contact" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input name="first-name" />
          <input name="last-name" />
          <input name="email" />
          <select name="subject"><option /></select>
          <textarea name="message" />
        </form>
        <form name="volunteer" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="volunteer" />
          <input name="first-name" />
          <input name="last-name" />
          <input name="email" />
          <select name="area-of-interest"><option /></select>
          <textarea name="message" />
        </form>
        <form name="partnership" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="partnership" />
          <input name="organization" />
          <input name="contact-person" />
          <input name="email" />
          <select name="partnership-type"><option /></select>
          <textarea name="message" />
        </form>
        <form name="newsletter" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="newsletter" />
          <input name="email" />
        </form>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
