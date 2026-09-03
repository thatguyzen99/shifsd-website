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

// ─── CountUp helper ─────────────────────────────────────────────
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

// ─── 1. About Hero ──────────────────────────────────────────────
function AboutHero() {
  return (
    <section
      data-node-id="39:19"
      className="bg-deep-canopy"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.p
            variants={fadeUp}
            data-node-id="39:20"
            className="text-[13px] text-white/50"
          >
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="px-2">/</span>
            <span>About Us</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            data-node-id="39:21"
            className="text-horizon-gold text-[13px] font-semibold uppercase"
            style={{ letterSpacing: "3px" }}
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={fadeUp}
            data-node-id="39:22"
            className="font-[family-name:var(--font-display)] font-semibold text-white text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            About SHIFSD
          </motion.h1>
          <motion.p
            variants={fadeUp}
            data-node-id="39:23"
            className="text-[18px] leading-[28px] text-white/80 max-w-[900px]"
          >
            From a group of Liberian refugees in Ghana to a nationally recognized
            NGO transforming communities across seven counties — this is our
            journey of resilience, purpose, and sustainable impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Our Story ───────────────────────────────────────────────
function OurStory() {
  return (
    <section id="our-story" data-node-id="41:2" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col lg:flex-row gap-14 items-center"
        >
          <motion.div
            variants={fadeUp}
            data-node-id="41:3"
            className="w-full lg:w-[520px] shrink-0"
          >
            <div className="h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/images/about/our-story.jpg"
                alt="SHIFSD community meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-5">
            <p
              data-node-id="41:5"
              className="text-liberian-flame text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              How It Began
            </p>
            <h2
              data-node-id="41:6"
              className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px] leading-[40px]"
            >
              Born in a Refugee Camp, Built for Impact
            </h2>
            <p
              data-node-id="41:7"
              className="text-gray-600 text-[16px] leading-[26px]"
            >
              SHIFSD was founded in 2000 by Jeremiah Burgess and a group of
              Liberian refugees in the Buduburam Refugee Camp in Ghana. Driven
              by a shared vision to rebuild their war-torn homeland, they began
              planning for the sustainable development of Liberia.
            </p>
            <p
              data-node-id="41:8"
              className="text-gray-600 text-[16px] leading-[26px]"
            >
              After returning to Liberia, SHIFSD established its headquarters in
              Monrovia and expanded its programs to seven counties, working
              alongside communities to implement sustainable agriculture,
              education, and livelihood programs that empower families to lift
              themselves out of poverty.
            </p>
            <a
              href="/docs/SHIFSD-Strategic-Plan-2024-2028.pdf"
              download="SHIFSD-Strategic-Plan-2024-2028.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start text-warm-teal text-[14px] font-semibold hover:underline mt-1"
            >
              <Icon name="download" className="!text-[18px]" />
              Read the Strategic Plan 2024–2028
              <span aria-hidden>↗</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. At a Glance ─────────────────────────────────────────────
const glanceStats = [
  { value: 2000, suffix: "", label: "Year Founded", format: "int" },
  { value: 7, suffix: "", label: "Counties Reached", format: "int" },
  { value: 1187, suffix: "+", label: "Direct Beneficiaries", format: "int" },
  { value: 28.1, suffix: "", label: "Acres of Farmland", format: "float" },
  { value: 6, suffix: "+", label: "Strategic Partners", format: "int" },
];

function AtAGlance() {
  return (
    <section id="glance" data-node-id="41:9" className="bg-warm-teal scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {glanceStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <span
                className="font-[family-name:var(--font-heading)] font-medium text-horizon-gold text-[36px] leading-[44px]"
                style={{ letterSpacing: "-0.5px" }}
              >
                <CountUp to={s.value} suffix={s.suffix} />
              </span>
              <span className="text-white/85 text-[14px] leading-[20px]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Vision & Mission ────────────────────────────────────────
function VisionMission() {
  return (
    <section id="vision-mission" data-node-id="42:2" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 text-center"
          >
            <p
              className="text-warm-teal text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Our Purpose
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Vision &amp; Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <motion.div
              variants={fadeUp}
              data-node-id="42:7"
              className="bg-white rounded-2xl px-8 py-9 flex flex-col gap-5"
            >
              <div className="h-1 w-15 bg-warm-teal rounded-sm" />
              <h3
                className="font-[family-name:var(--font-accent)] font-semibold text-deep-canopy text-[48px] leading-[28px]"
                style={{ letterSpacing: "-2.4px" }}
              >
                Our Vision
              </h3>
              <p className="text-gray-600 text-[16px] leading-[26px]">
                A resilient, self-sustaining Liberia where communities thrive
                through sustainable agriculture, quality education, and economic
                empowerment.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              data-node-id="42:12"
              className="bg-white rounded-2xl px-8 py-9 flex flex-col gap-5"
            >
              <div className="h-1 w-15 bg-liberian-flame rounded-sm" />
              <h3
                className="font-[family-name:var(--font-accent)] font-semibold text-deep-canopy text-[48px] leading-[28px]"
                style={{ letterSpacing: "-2.4px" }}
              >
                Our Mission
              </h3>
              <p className="text-gray-600 text-[16px] leading-[26px]">
                To empower Liberian communities with the knowledge, skills, and
                resources needed to achieve food security, educational
                excellence, and financial independence through participatory,
                sustainable development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. Core Values ─────────────────────────────────────────────
const coreValues = [
  {
    icon: "eco",
    name: "Sustainability",
    description:
      "Building programs that endure beyond external funding through community ownership and self-reliance.",
  },
  {
    icon: "handshake",
    name: "Community Participation",
    description:
      "Every initiative is co-designed with the communities we serve, ensuring relevance and lasting adoption.",
  },
  {
    icon: "account_balance",
    name: "Accountability",
    description:
      "Transparent governance, rigorous reporting, and ethical stewardship of every resource entrusted to us.",
  },
  {
    icon: "lightbulb",
    name: "Innovation",
    description:
      "Embracing climate-smart techniques, digital tools, and creative approaches to development challenges.",
  },
  {
    icon: "balance",
    name: "Equity & Inclusion",
    description:
      "Prioritizing women, youth, and marginalized groups to ensure no community is left behind.",
  },
  {
    icon: "volunteer_activism",
    name: "Partnership",
    description:
      "Collaborating with local and international organizations to multiply impact and share knowledge.",
  },
];

function CoreValues() {
  return (
    <section id="core-values" data-node-id="42:17" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 text-center"
          >
            <p
              className="text-liberian-flame text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              What Drives Us
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {coreValues.map((v) => (
              <motion.div
                key={v.name}
                variants={fadeUp}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-7 flex flex-col gap-3"
              >
                <Icon
                  name={v.icon}
                  className="!text-[40px] text-liberian-flame"
                />
                <h3 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[20px] leading-[28px]">
                  {v.name}
                </h3>
                <p className="text-gray-500 text-[14px] leading-[22px]">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. Our Journey Timeline ────────────────────────────────────
const milestones = [
  { year: "2000", label: "Founded in Buduburam Refugee Camp, Ghana" },
  { year: "2005", label: "Registered as NGO in Liberia; began field operations" },
  { year: "2010", label: "Launched Climate-Smart Agriculture program" },
  { year: "2016", label: "Expanded to 7 counties with EDC partnership" },
  { year: "2020", label: "Established 28.1-acre demonstration farm" },
  { year: "2024", label: "Reached 1,187+ direct beneficiaries" },
];

function JourneyTimeline() {
  return (
    <section id="journey" data-node-id="43:2" className="bg-deep-canopy scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 text-center"
          >
            <p
              className="text-horizon-gold text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Key Milestones
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-white text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Our Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                variants={fadeUp}
                className="bg-white/[0.06] rounded-xl px-5 py-6 flex flex-col items-center gap-3 min-h-[176px]"
              >
                <div className="w-14 h-14 rounded-full bg-horizon-gold flex items-center justify-center">
                  <span className="font-[family-name:var(--font-body)] font-medium text-deep-canopy text-[16px]">
                    {m.year}
                  </span>
                </div>
                <p className="text-white/80 text-[13px] leading-[20px] text-center">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. Leadership ──────────────────────────────────────────────
const leaders = [
  {
    name: "Jeremiah Burgess",
    role: "Executive Director & Founder",
    photo: null,
  },
  {
    name: "Board of Directors",
    role: "Governance & Strategic Oversight",
    photo: null,
  },
  {
    name: "Program Managers",
    role: "Field Operations & Community Engagement",
    photo: null,
  },
];

function Leadership() {
  return (
    <section id="leadership" data-node-id="44:2" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 text-center"
          >
            <p
              className="text-warm-teal text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              The Team
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Our Leadership
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                variants={fadeUp}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="h-[280px] bg-gray-300 flex items-center justify-center">
                  {leader.photo ? (
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon
                      name="person"
                      className="!text-[80px] text-gray-400"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col items-center gap-1.5 text-center">
                  <h3 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[20px] leading-[28px]">
                    {leader.name}
                  </h3>
                  <p className="text-warm-teal text-[14px] font-medium">
                    {leader.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 8. Partners & Institutions ─────────────────────────────────
const partners = [
  { name: "EDC", logo: "/images/partner-edc.webp" },
  { name: "All We Can", logo: "/images/partner-allwecan.webp" },
  { name: "Mission Alliance", logo: "/images/partner-mission-alliance.webp" },
  { name: "YOCEL", logo: "/images/partner-yocel.webp" },
  { name: "Brown Marital Trust", logo: null },
  { name: "Stichting INITIAT", logo: "/images/partner-initiat.webp" },
];

function PartnersInstitutions() {
  return (
    <section id="partners" data-node-id="44:22" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="flex flex-col items-center gap-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-[13px] font-medium uppercase text-center"
            style={{ letterSpacing: "3px" }}
          >
            Partners &amp; Supporting Institutions
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-200 rounded-lg w-[140px] h-[60px] flex items-center justify-center overflow-hidden px-3"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-w-[100px] max-h-[44px] object-contain"
                  />
                ) : (
                  <span className="text-[#b37503] text-[13px] font-semibold text-center leading-tight">
                    {p.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <AtAGlance />
      <VisionMission />
      <CoreValues />
      <JourneyTimeline />
      <Leadership />
      <PartnersInstitutions />
    </>
  );
}
