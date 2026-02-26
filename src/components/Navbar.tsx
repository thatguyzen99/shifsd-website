"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about#our-story" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Partners", href: "/about#partners" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    children: [
      { name: "Climate Smart Agriculture", href: "/programs/climate-smart-agriculture" },
      { name: "Education & Livelihood", href: "/programs/education-livelihood" },
      { name: "Financial Sustainability", href: "/programs/financial-sustainability" },
    ],
  },
  {
    name: "Impact",
    href: "/impact",
    children: [
      { name: "Annual Reports", href: "/impact#reports" },
      { name: "Stories of Change", href: "/impact#stories" },
      { name: "Data & Results", href: "/impact#data" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      { name: "Donate", href: "/get-involved#donate" },
      { name: "Volunteer", href: "/get-involved#volunteer" },
      { name: "Partner With Us", href: "/get-involved#partner" },
    ],
  },
  { name: "News & Media", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top utility bar */}
      <div className="bg-forest text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">shifsdliberia@gmail.com</span>
            <span className="hidden sm:inline">+231 (0) 770 024 082</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-80">MPEA/NGO/AC#0369</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo.png"
              alt="SHIFSD Logo"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <div className="font-[var(--font-heading)] font-bold text-forest text-sm lg:text-base leading-tight">
                SHIFSD
              </div>
              <div className="text-[10px] lg:text-xs text-charcoal-light leading-tight">
                Practical Help for Self-Reliance
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-forest transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-border py-2 animate-fade-in-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-gray-bg hover:text-forest transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-involved#donate"
              className="hidden sm:inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-[var(--font-heading)] font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
            <button
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-base font-medium text-charcoal hover:text-forest hover:bg-gray-bg rounded-lg"
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-charcoal-light hover:text-forest"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/get-involved#donate"
                className="flex items-center justify-center gap-2 bg-amber text-white font-semibold px-5 py-3 rounded-full w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
