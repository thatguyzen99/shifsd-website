import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";

const inter = Inter({
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
  metadataBase: new URL("https://www.shifsd-liberia.org"),
  title: {
    default: "SHIFSD Liberia | Self Help Initiative for Sustainable Development",
    template: "%s | SHIFSD Liberia",
  },
  description:
    "SHIFSD exists to alleviate poverty by expanding access to alternative education and entrepreneurship opportunities across Liberia's underserved communities. Serving Liberia since 2000.",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHIFSD Liberia — Practical Help for Self-Reliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIFSD Liberia | Practical Help for Self-Reliance",
    description:
      "From refugee camp to community catalyst — empowering Liberia since 2000.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
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
      className={`${inter.variable} ${lora.variable}`}
    >
      <head>
        {/* Clash Display + Clash Grotesk (headings) — Fontshare CDN */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@500,600,700&display=swap"
        />
        {/* Material Symbols (icons) — self-hosted subset (~5 KB vs ~970 KB from
            Google's CDN). The @font-face lives in globals.css. When you use a
            new icon name, regenerate the subset — see the comment there. */}
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Mark icons ready only once the icon font has loaded; until then the
            icon names stay invisible (see globals.css). Uses a data attribute
            React doesn't manage, so there is no hydration mismatch. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;function ok(){d.setAttribute('data-icons','ready')}if(!document.fonts||!document.fonts.load){ok();return}document.fonts.load('24px "Material Symbols Outlined"').then(function(f){if(f&&f.length)ok()}).catch(function(){})})();`,
          }}
        />
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

        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
