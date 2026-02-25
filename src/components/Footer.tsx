import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "News & Media", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const programLinks = [
  { name: "Climate Smart Agriculture", href: "/programs/climate-smart-agriculture" },
  { name: "Education & Livelihood", href: "/programs/education-livelihood" },
  { name: "Financial Sustainability", href: "/programs/financial-sustainability" },
];

const partners = [
  "USAID/EDC",
  "All We Can (UK)",
  "Mission Alliance",
  "YOCEL",
  "Brown Marital Trust",
];

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      {/* Newsletter signup strip */}
      <div className="bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-[var(--font-heading)] text-lg font-bold">
                Stay Connected with SHIFSD
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Get updates on our programs, impact stories, and ways to get involved.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-amber"
              />
              <button
                type="submit"
                className="bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="font-[var(--font-heading)] font-bold text-amber">S</span>
              </div>
              <div>
                <div className="font-[var(--font-heading)] font-bold">SHIFSD Liberia</div>
                <div className="text-xs text-white/60">Est. 2000</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Self Help Initiative for Sustainable Development — empowering communities through
              education, agriculture, and entrepreneurship since 2000.
            </p>
            <div className="inline-block bg-white/10 rounded-lg px-3 py-1.5 text-xs">
              Accredited: MPEA/NGO/AC#0369
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-heading)] font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-amber transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-[var(--font-heading)] font-bold text-sm uppercase tracking-wider mb-4">
              Our Programs
            </h4>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-amber transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-[var(--font-heading)] font-bold text-sm uppercase tracking-wider mt-6 mb-3">
              Partners
            </h4>
            <ul className="space-y-1">
              {partners.map((p) => (
                <li key={p} className="text-xs text-white/50">{p}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-heading)] font-bold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber" />
                <span>Block C, Lee Hill Community, Johnsonville Township, Monrovia, Liberia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0 text-amber" />
                <a href="mailto:shifsdliberia@gmail.com" className="hover:text-amber transition-colors">
                  shifsdliberia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0 text-amber" />
                <a href="tel:+231770024082" className="hover:text-amber transition-colors">
                  +231 (0) 770 024 082
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
              >
                Support Our Mission
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} SHIFSD Liberia Inc. All rights reserved.</p>
          <p>
            Motto: &ldquo;Practical Help for Self-Reliance&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
