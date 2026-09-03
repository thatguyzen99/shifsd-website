"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about#our-story" },
      { name: "Vision & Mission", href: "/about#vision-mission" },
      { name: "Core Values", href: "/about#core-values" },
      { name: "Journey", href: "/about#journey" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Partners", href: "/about#partners" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    children: [
      { name: "Climate-Smart Agriculture", href: "/programs/climate-smart-agriculture#overview" },
      { name: "Education & Livelihood", href: "/programs/education-livelihood#overview" },
      { name: "Financial Sustainability", href: "/programs/financial-sustainability#overview" },
      { name: "Our Approach", href: "/programs#approach" },
    ],
  },
  {
    name: "Impact",
    href: "/impact",
    children: [
      { name: "Key Metrics", href: "/impact#metrics" },
      { name: "Impact by Area", href: "/impact#by-area" },
      { name: "Stories of Change", href: "/impact#stories" },
      { name: "Data & Results", href: "/impact#data" },
      { name: "Publications", href: "/impact#publications" },
      { name: "Geographic Reach", href: "/impact#geographic-reach" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      { name: "Donate", href: "/donate#tiers" },
      { name: "Volunteer", href: "/get-involved#volunteer-form" },
      { name: "Partner With Us", href: "/get-involved#partner-form" },
      { name: "FAQ", href: "/get-involved#faq" },
    ],
  },
  { name: "News & Media", href: "/news" },
  { name: "Contact", href: "/contact" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* ── Navigation: Warm Sand, 82px ────────────────────────── */}
      <nav className="bg-warm-sand h-[82px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="SHIFSD — Home">
            <img
              src="/images/logos/logo-primary-light.png"
              alt="SHIFSD — Self-Help Initiative for Sustainable Development"
              className="block"
              style={{ width: 170, height: 48, aspectRatio: "85 / 24" }}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-warm-teal"
                      : "text-deep-canopy hover:text-warm-teal"
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <Icon
                      name="expand_more"
                      className="!text-[18px] transition-transform"
                    />
                  )}
                </Link>

                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-3 w-64">
                    <div className="bg-white rounded-lg shadow-[var(--shadow-md)] border border-gray-200 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-warm-sand hover:text-warm-teal transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center gap-2 bg-liberian-flame text-white font-semibold px-6 py-2.5 rounded-md text-[15px] hover:bg-liberian-flame/90 transition-all shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
            >
              Donate
            </Link>
            <button
              className="lg:hidden p-2 text-deep-canopy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-warm-sand border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <ul className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? "text-warm-teal bg-white"
                      : "text-deep-canopy hover:bg-white"
                  }`}
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <ul className="pl-6 space-y-1 py-1">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-warm-teal"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 bg-liberian-flame text-white font-semibold px-5 py-3 rounded-md w-full"
                onClick={() => setMobileOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
