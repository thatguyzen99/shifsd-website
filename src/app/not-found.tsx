"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Programs", href: "/programs", description: "Our three strategic pillars" },
  { name: "Impact", href: "/impact", description: "Our reach across Liberia" },
  { name: "News & Media", href: "/news", description: "Stories from the field" },
  { name: "Get Involved", href: "/get-involved", description: "Donate, volunteer, or partner" },
];

export default function NotFound() {
  return (
    <section className="bg-deep-canopy min-h-[calc(100vh-82px)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-[820px] mx-auto flex flex-col items-center gap-8 text-center"
        >
          <p
            className="text-horizon-gold text-[13px] font-semibold uppercase"
            style={{ letterSpacing: "3px" }}
          >
            Page Not Found
          </p>

          <h1
            className="font-[family-name:var(--font-display)] font-semibold text-white leading-[0.9]"
            style={{ fontSize: "clamp(96px, 20vw, 200px)", letterSpacing: "-4px" }}
          >
            404
          </h1>

          <h2
            className="font-[family-name:var(--font-heading)] font-medium text-white text-[32px] leading-[40px]"
            style={{ letterSpacing: "-0.5px" }}
          >
            The page you&apos;re looking for isn&apos;t here.
          </h2>

          <p className="text-white/70 text-[17px] leading-[28px] max-w-[560px]">
            It might have moved, been renamed, or never existed. Try one of
            the links below, or head back to the homepage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link
              href="/"
              className="bg-liberian-flame hover:bg-liberian-flame/90 text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/contact#form"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-canopy text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Contact us
            </Link>
          </div>

          <div className="w-full max-w-[720px] mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-horizon-gold/50 rounded-xl px-5 py-4 flex items-center justify-between gap-3 text-left transition-colors"
              >
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-heading)] font-medium text-white text-[15px]">
                    {link.name}
                  </span>
                  <span className="text-white/60 text-[12px]">
                    {link.description}
                  </span>
                </div>
                <span
                  className="text-horizon-gold text-[18px] transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
