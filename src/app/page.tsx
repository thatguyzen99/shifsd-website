"use client";

import Link from "next/link";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─── Shared reveal variants ─────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

// ─── 1. Hero ────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/hero-section.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-canopy/40 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-24">
        {/* Hero Content — Figma node 22:3 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          data-node-id="22:3"
          className="bg-deep-canopy border-[3px] border-liberian-flame rounded-2xl p-8 flex flex-col gap-6 max-w-[634px]"
        >
          <motion.p
            variants={fadeUp}
            data-node-id="22:4"
            className="text-horizon-gold text-[14px] font-semibold uppercase"
            style={{ letterSpacing: "1.5px" }}
          >
            Empowering Liberia Since 2000
          </motion.p>
          <motion.h1
            variants={fadeUp}
            data-node-id="22:5"
            className="font-[family-name:var(--font-display)] font-semibold text-white text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            From Refugee Camp
            <br />
            to Community Catalyst
          </motion.h1>
          <motion.p
            variants={fadeUp}
            data-node-id="22:6"
            className="text-[18px] leading-[28px]"
            style={{ color: "#C8D6D0" }}
          >
            We exist to alleviate poverty through alternative education and
            entrepreneurship across Liberia&apos;s most underserved communities.
          </motion.p>
          <motion.div
            variants={fadeUp}
            data-node-id="22:7"
            className="flex gap-4 flex-wrap"
          >
            <Link
              href="/get-involved#partner-form"
              data-node-id="22:8"
              className="bg-liberian-flame hover:bg-liberian-flame/90 text-white font-semibold text-[16px] px-7 py-3.5 rounded-lg transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/impact#metrics"
              data-node-id="22:10"
              className="border-[1.5px] border-white text-white hover:bg-white hover:text-deep-canopy font-semibold text-[16px] px-7 py-3.5 rounded-lg transition-colors"
            >
              See Our Impact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Impact Stats Strip ──────────────────────────────────────
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);
  const isFractional = to % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  const display = isFractional ? n.toFixed(1) : Math.floor(n).toLocaleString();
  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 24, suffix: "+", label: "Years of Service" },
  { value: 1187, suffix: "+", label: "Beneficiaries Since 2024" },
  { value: 7, suffix: "", label: "Counties Reached" },
  { value: 28.1, suffix: "", label: "Acres of Farmland" },
];

function ImpactStrip() {
  return (
    <section className="bg-warm-teal py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-heading)] font-medium text-white text-[44px] leading-none">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/80 text-sm mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Three Pillars ───────────────────────────────────────────
// Pillar card matches Figma node 110:594 (Card: Climate Smart Agriculture)
const pillars = [
  {
    titleTop: "Climate Smart",
    titleBottom: "Agriculture",
    image: "/images/pillar-agriculture.jpg",
    body: "Protecting the environment through sustainable farming practices, CSA awareness campaigns across 25 communities, and 28.1 acres of demonstration farmland.",
    stats: ["28.1 acres", "25 communities", "500+ aware"],
    href: "/programs/climate-smart-agriculture",
  },
  {
    titleTop: "Education &",
    titleBottom: "Livelihoods",
    image: "/images/pillar-education.jpg",
    body: "Empowering youth and women through Hummingbird Academy, Holy Hands Institute TVET, and literacy for adults — a full ladder of opportunity.",
    stats: ["480+ graduates", "100+ trainees", "3 institutes"],
    href: "/programs/education-livelihood",
  },
  {
    titleTop: "Financial",
    titleBottom: "Sustainability",
    image: "/images/pillar-financial.jpg",
    body: "Building institutional resilience through social enterprise, agri-business ventures, and diversified revenue streams for long-term community impact.",
    stats: ["12 enterprises", "3× revenue", "Long-term"],
    href: "/programs/financial-sustainability",
  },
];

function ReadMorePill({ href, label = "Learn More" }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      data-node-id="112:155"
      aria-label={label}
      className="group relative inline-flex items-center gap-2 self-start bg-deep-canopy hover:bg-warm-teal text-white rounded-full pl-5 pr-1.5 h-11 min-w-[170px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF5E6]"
    >
      <span className="text-[14px] font-semibold flex-1">{label}</span>
      <span
        data-node-id="112:158"
        className="bg-white text-deep-canopy rounded-full h-8 w-14 inline-flex items-center justify-center overflow-hidden"
      >
        <span
          aria-hidden
          className="material-symbols-outlined !text-[18px] transition-transform duration-300 group-hover:translate-x-1"
        >
          arrow_forward
        </span>
      </span>
    </Link>
  );
}

function ThreePillars() {
  return (
    <section className="bg-warm-sand py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-liberian-flame text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Our Three Programs
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px] mb-4"
          >
            Our Three Strategic Pillars
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-[15px]">
            Guided by our 2024-2028 Strategic Plan, we deliver measurable change
            across three interconnected areas.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((p) => (
            <motion.article
              key={p.titleTop}
              variants={fadeUp}
              data-node-id="110:594"
              className="rounded-xl p-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[var(--shadow-lg)] transition-shadow duration-300 flex flex-col"
              style={{ backgroundColor: "#FFF5E6" }}
            >
              <div
                data-node-id="110:524"
                className="rounded-[9px] h-[200px] overflow-hidden"
                style={{ backgroundColor: "rgba(26,107,90,0.15)" }}
              >
                <img
                  src={p.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div
                data-node-id="110:526"
                className="p-6 flex flex-col gap-4"
                style={{ backgroundColor: "#FFF5E6" }}
              >
                <h3
                  data-node-id="110:527"
                  className="text-deep-canopy"
                >
                  <span className="block font-[family-name:var(--font-heading)] font-semibold text-[28px] leading-[36px] tracking-[-0.25px]">
                    {p.titleTop}
                  </span>
                  <span className="block font-[family-name:var(--font-accent)] font-semibold text-[28px] leading-[28px] tracking-[-1.4px]">
                    {p.titleBottom}
                  </span>
                </h3>
                <p
                  data-node-id="110:528"
                  className="font-normal text-[15px] leading-[24px]"
                  style={{ color: "#666" }}
                >
                  {p.body}
                </p>
                <div
                  data-node-id="110:529"
                  className="flex gap-4 flex-wrap pt-2"
                >
                  {p.stats.map((label) => (
                    <span
                      key={label}
                      className="px-3 py-[6px] rounded-full text-[12px] font-medium text-warm-teal"
                      style={{ backgroundColor: "#E8F4F0" }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <ReadMorePill href={p.href} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Testimonial ─────────────────────────────────────────────
function Testimonial() {
  return (
    <section className="bg-deep-canopy py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-horizon-gold text-[64px] leading-none font-[family-name:var(--font-accent)] italic font-semibold mb-2">
            &ldquo;
          </div>
          <blockquote className="font-[family-name:var(--font-accent)] italic text-white/95 text-[24px] leading-[1.5]">
            What began as a small group of Liberian refugees dreaming of a better
            future has grown into a movement that transforms entire communities.
            Every seed planted, every child educated, every family empowered is
            proof that sustainable change starts from within.
          </blockquote>
          <div className="mx-auto w-16 h-px bg-horizon-gold my-8" />
          <p className="text-horizon-gold font-semibold text-sm">
            Jeremiah Burgess
          </p>
          <p className="text-white/70 text-sm mt-1">
            Executive Director &amp; Founder, SHIFSD
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. Partners Strip ──────────────────────────────────────────
const partners = [
  { name: "EDC", logo: "/images/partner-edc.webp" },
  { name: "All We Can", logo: "/images/partner-allwecan.webp" },
  { name: "Mission Alliance", logo: "/images/partner-mission-alliance.webp" },
  { name: "YOCEL", logo: "/images/partner-yocel.webp" },
  { name: "Brown Marital Trust", logo: null },
  { name: "Stichting INITIAT", logo: "/images/partner-initiat.webp" },
];

function PartnersStrip() {
  return (
    <section className="bg-warm-sand py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <p className="text-center text-gray-500 text-[12px] font-semibold tracking-[0.3em] uppercase mb-8">
          Trusted Partners &amp; Supporters
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="bg-white rounded-lg h-20 flex items-center justify-center px-4 shadow-[var(--shadow-sm)]"
              title={p.name}
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-10 max-w-full object-contain"
                />
              ) : (
                <span className="text-xs text-liberian-flame font-semibold text-center">
                  {p.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. Latest Updates ──────────────────────────────────────────
const updates = [
  {
    tag: "Agriculture",
    title: "CSA Training Reaches 7 Counties Across Liberia",
    excerpt:
      "Our Climate Smart Agriculture program expands to seven counties, equipping farmers with sustainable techniques for food security.",
    image: "/images/news-agriculture.jpg",
    date: "March 24, 2025",
    href: "/news",
  },
  {
    tag: "Education",
    title: "Scholarship Program Empowers 50 Young Leaders",
    excerpt:
      "Through our Education & Livelihood initiative, 50 students received full scholarships to pursue higher education opportunities.",
    image: "/images/news-education.jpg",
    date: "February 26, 2025",
    href: "/news",
  },
  {
    tag: "Partnership",
    title: "New Alliance with Mission Alliance Strengthens Programs",
    excerpt:
      "A multi-year Mission Alliance partnership will expand our adult literacy work across 30 communities in the Zorzor and Salayea districts of Lofa County.",
    image: "/images/news-partnership.jpg",
    date: "February 12, 2025",
    href: "/news",
  },
];

function LatestUpdates() {
  return (
    <section className="bg-warm-sand py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-liberian-flame text-[13px] font-semibold tracking-[0.2em] uppercase mb-3"
          >
            News &amp; Stories
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
          >
            Latest Updates
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {updates.map((u) => (
            <motion.article
              key={u.title}
              variants={fadeUp}
              className="rounded-xl p-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[var(--shadow-lg)] transition-shadow duration-300 flex flex-col"
              style={{ backgroundColor: "#FFF5E6" }}
            >
              <div
                className="rounded-[9px] h-[200px] overflow-hidden"
                style={{ backgroundColor: "rgba(26,107,90,0.15)" }}
              >
                <img
                  src={u.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div
                className="p-6 flex flex-col gap-4"
                style={{ backgroundColor: "#FFF5E6" }}
              >
                <span
                  className="px-3 py-[6px] rounded-full text-[12px] font-medium text-warm-teal self-start"
                  style={{ backgroundColor: "#E8F4F0" }}
                >
                  {u.tag}
                </span>
                <h3 className="font-[family-name:var(--font-accent)] font-semibold text-deep-canopy text-[22px] leading-[28px] tracking-[-0.5px]">
                  {u.title}
                </h3>
                <p
                  className="text-[15px] leading-[24px]"
                  style={{ color: "#666" }}
                >
                  {u.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-[12px] text-gray-500">{u.date}</span>
                  <ReadMorePill href={u.href} label="Read More" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link
            href="/news#latest"
            className="inline-flex items-center gap-2 border border-warm-teal text-warm-teal hover:bg-warm-teal hover:text-white font-semibold px-6 py-3 rounded-md text-sm transition-all"
          >
            View All Updates
            <Icon name="arrow_forward" className="!text-[16px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 7. Get Involved CTA ────────────────────────────────────────
const involvementCards = [
  {
    icon: "volunteer_activism",
    iconBg: "bg-liberian-flame",
    title: "Donate",
    body:
      "Your financial support funds agricultural training, scholarships, and community infrastructure across Liberia.",
    cta: "Give Now",
    ctaClass: "bg-liberian-flame text-white hover:bg-liberian-flame/90",
    href: "/donate",
  },
  {
    icon: "diversity_3",
    iconBg: "bg-horizon-gold",
    title: "Volunteer",
    body:
      "Share your skills and time to support our programs on the ground or remotely through our volunteer network.",
    cta: "Join Us",
    ctaClass: "bg-horizon-gold text-deep-canopy hover:bg-horizon-gold/90",
    href: "/get-involved#volunteer",
  },
  {
    icon: "handshake",
    iconBg: "bg-deep-canopy",
    title: "Partner",
    body:
      "Organizations and institutions can partner with us to amplify impact through collaborative development programs.",
    cta: "Connect",
    ctaClass: "bg-deep-canopy text-white hover:bg-deep-canopy/90",
    href: "/get-involved#partner",
  },
];

function GetInvolvedCTA() {
  return (
    <section className="bg-warm-teal py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-horizon-gold text-[13px] font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Make a Difference
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-white text-[36px] leading-[44px] mb-4"
          >
            Get Involved Today
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/85 text-[15px]">
            Join us in building a more resilient and self-sustaining Liberia.
            Every contribution creates lasting impact.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {involvementCards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div
                className={`w-14 h-14 rounded-full ${c.iconBg} text-white flex items-center justify-center mx-auto mb-5`}
              >
                <Icon name={c.icon} className="!text-[28px]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-medium text-white text-[22px] mb-3">
                {c.title}
              </h3>
              <p className="text-white/80 text-sm leading-[22px] mb-6">
                {c.body}
              </p>
              <Link
                href={c.href}
                className={`inline-flex items-center justify-center font-semibold text-sm px-5 py-2.5 rounded-md transition-colors ${c.ctaClass}`}
              >
                {c.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 8. Newsletter Signup ───────────────────────────────────────
function Newsletter() {
  return (
    <section className="bg-horizon-gold py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-md">
          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[26px] leading-[1.15]">
            Stay Connected With Our Impact
          </h3>
          <p className="text-deep-canopy/80 text-sm mt-2">
            Get quarterly updates on our programs, impact stories, and ways to
            get involved.
          </p>
        </div>
        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          action="/?form=newsletter"
          className="flex items-stretch gap-2 w-full md:w-auto"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="px-4 py-3 rounded-md bg-white text-deep-canopy placeholder-gray-400 text-sm min-w-[280px] focus:outline-none focus:ring-2 focus:ring-deep-canopy"
          />
          <button
            type="submit"
            className="bg-deep-canopy hover:bg-deep-canopy/90 text-white font-semibold px-6 rounded-md text-sm transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <ThreePillars />
      <Testimonial />
      <PartnersStrip />
      <LatestUpdates />
      <GetInvolvedCTA />
      <Newsletter />
    </>
  );
}
