import Link from "next/link";
import { ImpactCounter } from "@/components/ImpactCounter";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRight,
  Leaf,
  GraduationCap,
  TrendingUp,
  Heart,
  Users,
  Handshake,
  Quote,
} from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Climate Smart Agriculture",
    description:
      "Protecting the environment through sustainable farming practices, CSA awareness campaigns across 25 communities, and 28.1 acres of demonstration farmland in Nimba County.",
    href: "/programs/climate-smart-agriculture",
    color: "bg-emerald-50 text-emerald-700",
    iconBg: "bg-emerald-100",
  },
  {
    icon: GraduationCap,
    title: "Education & Livelihood Skills",
    description:
      "Empowering youth and women through Hummingbird Academy (381 students), Holy Hands Institute TVET, adult literacy in 30 communities, and VSLA savings groups.",
    href: "/programs/education-livelihood",
    color: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: TrendingUp,
    title: "Financial Sustainability",
    description:
      "Building institutional resilience through social enterprise, agri-business ventures, and diversified revenue streams to sustain long-term community impact.",
    href: "/programs/financial-sustainability",
    color: "bg-amber-50 text-amber-700",
    iconBg: "bg-amber-100",
  },
];

const ctas = [
  {
    icon: Heart,
    title: "Donate",
    description: "Your gift directly empowers communities across Liberia.",
    href: "/get-involved#donate",
    bg: "bg-amber",
    hover: "hover:bg-amber-dark",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join us on the ground or remotely. Your skills matter.",
    href: "/get-involved#volunteer",
    bg: "bg-forest",
    hover: "hover:bg-forest-dark",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate for lasting change across West Africa.",
    href: "/get-involved#partner",
    bg: "bg-deep-blue",
    hover: "hover:bg-deep-blue-light",
  },
];

const partners = [
  "EDC",
  "All We Can (UK)",
  "Mission Alliance",
  "YOCEL",
  "Brown Marital Trust",
  "Stichting INITIAT",
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[90vh] flex items-center pt-24">
        {/* Background image placeholder + overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero-community.jpg')] bg-cover bg-center bg-[center_20%]">
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 mb-6">
              Empowering Liberia Since 2000
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              From Refugee Camp to{" "}
              <span className="text-amber">Community Catalyst</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl font-[var(--font-body)]">
              We exist to alleviate poverty through alternative education and
              entrepreneurship across Liberia&apos;s most underserved
              communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-involved#partner"
                className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-[var(--font-heading)] font-semibold px-8 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-xl"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-[var(--font-heading)] font-semibold px-8 py-3.5 rounded-full text-base transition-all"
              >
                See Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMPACT STATS ============ */}
      <ImpactCounter />

      {/* ============ THREE PILLARS ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Three Strategic Pillars"
            subtitle="Guided by our 2024-2028 Strategic Plan, we deliver measurable change across three interconnected areas."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="group block rounded-2xl border border-gray-border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-7 h-7 ${pillar.color.split(" ")[1]}`} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-charcoal mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-charcoal-light leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-forest font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED TESTIMONIAL ============ */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-amber/40 mx-auto mb-6" />
          <blockquote className="font-[var(--font-accent)] text-2xl sm:text-3xl text-charcoal leading-relaxed italic">
            &ldquo;Instead of complaining, we took responsibility for
            ourselves. That is the spirit of SHIFSD — practical help for
            self-reliance.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-[var(--font-heading)] font-bold text-forest">
              Jeremiah T. Burgess
            </p>
            <p className="text-sm text-charcoal-light">
              Executive Director, SHIFSD Liberia
            </p>
          </div>
        </div>
      </section>

      {/* ============ PARTNER LOGOS ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-[var(--font-heading)] font-semibold text-charcoal-light uppercase tracking-wider mb-8">
            Trusted By Leading Development Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center h-16 px-6 rounded-xl bg-gray-bg text-charcoal-light font-[var(--font-heading)] font-semibold text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST NEWS PREVIEW ============ */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest Updates"
            subtitle="Stories from the field and program highlights."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "EDC Leaders In Teaching (LIT) TOTs Launch",
                excerpt:
                  "SHIFSD partnered with EDC to launch the national Training of Trainers at E.J. Goodridge School, strengthening education leadership.",
                date: "February 2025",
                tag: "Education",
                image: "/images/lit-tot-goodridge.jpg",
                alt: "EDC Leaders In Teaching Training of Trainers at Goodridge School",
              },
              {
                title: "1,187+ Beneficiaries Impacted Nationwide",
                excerpt:
                  "From 2024 to present, SHIFSD has reached over 1,187 beneficiaries across the country through education, TVET, and community programs.",
                date: "February 2025",
                tag: "Impact",
                image: "/images/shifsd-lit-onboarding.jpg",
                alt: "SHIFSD LIT onboarding meeting with staff and partners",
              },
              {
                title: "Adult Literacy Level 1 Graduates in Lofa",
                excerpt:
                  "SHIFSD celebrated its 2025 Adult Literacy graduates in Lofa County, empowering adults through the REFLECT methodology.",
                date: "January 2025",
                tag: "Literacy",
                image: "/images/alp-lofa-grads-2025.jpg",
                alt: "SHIFSD Adult Literacy Level 1 graduates in Lofa County 2025",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-border hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold bg-forest/10 text-forest px-2.5 py-1 rounded-full">
                      {post.tag}
                    </span>
                    <span className="text-xs text-charcoal-light">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-charcoal mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-forest hover:text-forest-light transition-colors"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GET INVOLVED CTAs ============ */}
      <section className="py-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Get Involved"
            subtitle="There are many ways to support SHIFSD's mission and make a lasting impact."
            light
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {ctas.map((cta) => {
              const Icon = cta.icon;
              return (
                <Link
                  key={cta.title}
                  href={cta.href}
                  className={`group block ${cta.bg} ${cta.hover} rounded-2xl p-8 text-white text-center transition-all hover:scale-[1.02] shadow-lg`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl font-bold mb-2">
                    {cta.title}
                  </h3>
                  <p className="text-white/80 text-sm">{cta.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
