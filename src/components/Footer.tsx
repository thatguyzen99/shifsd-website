import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "News & Media", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const programLinks = [
  { name: "Climate-Smart Agriculture", href: "/programs/climate-smart-agriculture#overview" },
  { name: "Education & Livelihood", href: "/programs/education-livelihood#overview" },
  { name: "Financial Sustainability", href: "/programs/financial-sustainability#overview" },
  { name: "Our Approach", href: "/programs#approach" },
  { name: "Partner With Us", href: "/programs#partner-cta" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

// TODO(content): LinkedIn, Instagram and YouTube icons were removed because
// they linked to the platform homepages, not SHIFSD accounts. Add them back
// with the real profile URLs when the accounts go live.
const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/shifsdliberia/",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <circle cx="12" cy="12" r="9" />
        <path d="M14 8h-1.5a1.5 1.5 0 0 0-1.5 1.5V12m-2 0h5m-2.5 0v7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-deep-canopy text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 pt-20 pb-6">
        {/* ── Columns ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.15fr_1.2fr] gap-10 lg:gap-12">
          {/* About */}
          <div>
            <img
              src="/images/logos/logo-primary-dark.png"
              alt="SHIFSD — Self-Help Initiative for Sustainable Development"
              className="block mb-6"
              style={{ width: 170, height: 52, aspectRatio: "952 / 291" }}
            />
            <p className="text-sm text-white/75 leading-[22px] max-w-[280px]">
              Self-Help Initiative for Sustainable Development-Liberia
              (SHIFSD-Liberia), Inc. — alleviating poverty through alternative
              education and entrepreneurship since 2000. Accreditation no.
              MFDP/NGO/AC#531871651.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-horizon-gold text-[15px] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 hover:text-horizon-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-horizon-gold text-[15px] mb-5">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 hover:text-horizon-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-horizon-gold text-[15px] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/85">
                <Icon name="home" className="!text-[20px] mt-0.5 shrink-0" />
                <span className="leading-[22px]">
                  Block C, Lee Hill Community,
                  <br />
                  Johnsonville Avenue, Monrovia
                  <br />
                  P.O. Box 1164, 1000 Monrovia 10, Liberia
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/85">
                <Icon name="mail" className="!text-[20px] shrink-0" />
                <a
                  href="mailto:shifsdliberia@gmail.com"
                  className="hover:text-horizon-gold transition-colors"
                >
                  shifsdliberia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/85">
                <Icon name="call" className="!text-[20px] mt-0.5 shrink-0" />
                <span className="leading-[22px]">
                  <a
                    href="tel:+231770024082"
                    className="hover:text-horizon-gold transition-colors"
                  >
                    +231 (0)770 024 082
                  </a>
                  <br />
                  <a
                    href="tel:+231886874950"
                    className="hover:text-horizon-gold transition-colors"
                  >
                    +231 (0)886 874 950
                  </a>
                  <br />
                  <a
                    href="tel:+231770215306"
                    className="hover:text-horizon-gold transition-colors"
                  >
                    +231 (0)770 215 306
                  </a>
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6 text-white/85">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 hover:text-horizon-gold transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="h-px bg-white/10 mt-16" />

        {/* ── SHIFSD wordmark ─────────────────────────────────── */}
        <div className="pt-4 pb-2 overflow-hidden">
          <div
            className="font-[family-name:var(--font-display)] font-semibold text-white leading-[0.85] tracking-[-0.04em] select-none"
            style={{ fontSize: "clamp(4rem, 26vw, 22rem)" }}
          >
            SHIFSD
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-white/60">
          <p>© {new Date().getFullYear()} SHIFSD Liberia. All Rights Reserved.</p>
          <p>Designed &amp; built by Melvin Z. Freeman</p>
          <p className="flex items-center gap-2">
            <Link href="/privacy" className="hover:text-horizon-gold transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-horizon-gold transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
