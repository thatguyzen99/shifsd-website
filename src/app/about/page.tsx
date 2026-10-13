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
function CountUp({ to, suffix = "", plain = false }: { to: number; suffix?: string; plain?: boolean }) {
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

  const display = isFractional
    ? n.toFixed(1)
    : plain
      ? String(Math.floor(n))
      : Math.floor(n).toLocaleString();
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
            Founded by a group of Liberian refugees in Ghana in 2000, SHIFSD is
            a national nonprofit now operating in Montserrado, Bong, Nimba and
            Lofa Counties.
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
              The Self-Help Initiative for Sustainable Development (SHIFSD) was
              originally founded on November 11, 2000 in the Central Region of
              Ghana by a group of Liberian refugees. It was formally registered
              with the Government of Liberia on May 30, 2005 as a national
              nonprofit and non-governmental organization.
            </p>
            <p
              data-node-id="41:8"
              className="text-gray-600 text-[16px] leading-[26px]"
            >
              Following repatriation in August 2008, SHIFSD relocated its
              headquarters to Johnsonville, Monrovia, Liberia, where it continues
              to operate at its own premises. The organization is duly
              accredited under registration number MFDP/NGO/AC#531871651 with
              the Government of Liberia.
            </p>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              Our programs primarily serve disadvantaged young people between
              the ages of 18 and 35, as well as persons with disabilities.
            </p>
            <a
              href="/docs/SHIFSD-Organizational-Profile.pdf"
              download="SHIFSD-Organizational-Profile.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start text-warm-teal text-[14px] font-semibold hover:underline mt-1"
            >
              <Icon name="download" className="!text-[18px]" />
              Read our Organizational Profile
              <span aria-hidden>↗</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. At a Glance ─────────────────────────────────────────────
// Source: Organizational Profile (09/2026).
const glanceStats = [
  { value: 2000, suffix: "", label: "Year Founded", format: "int" },
  { value: 4, suffix: "", label: "Counties of Operation", format: "int" },
  { value: 2526, suffix: "", label: "Beneficiaries, Late 2024–2026", format: "int" },
  { value: 17, suffix: "", label: "Core Staff", format: "int" },
  { value: 36, suffix: "", label: "LIT Master Trainers", format: "int" },
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
                <CountUp to={s.value} suffix={s.suffix} plain={s.label === "Year Founded"} />
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
                To envisage a society free of illiteracy and poverty.
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
                To alleviate poverty by expanding access to alternative
                education and entrepreneurship opportunities across
                Liberia&apos;s underserved communities.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. Core Values ─────────────────────────────────────────────
// Core values and their lines: Organizational Profile (09/2026), "Core Values".
const coreValues = [
  {
    icon: "verified",
    name: "Integrity",
    description:
      "Openly communicating challenges to communities and donors in a timely manner.",
  },
  {
    icon: "balance",
    name: "Justice",
    description:
      "Treating staff, partners, and stakeholders with respect, fairness, and honesty.",
  },
  {
    icon: "account_balance",
    name: "Transparency & Accountability",
    description:
      "Keeping program management open and answerable to participating communities, donors, and partners.",
  },
  {
    icon: "handshake",
    name: "Participation",
    description:
      "Valuing consensus building and shared leadership in decision-making.",
  },
  {
    icon: "diversity_3",
    name: "Diversity",
    description:
      "Striving to accommodate and respect people of varied backgrounds, experiences, and affiliations.",
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
// Source: Organizational Profile (09/2026).
const milestones = [
  { year: "2000", label: "Founded on 11 November in the Central Region of Ghana by Liberian refugees" },
  { year: "2005", label: "Registered with the Government of Liberia on 30 May as a national nonprofit NGO" },
  { year: "2008", label: "Repatriated in August; headquarters moved to Johnsonville, Monrovia" },
  { year: "2022", label: "USAID Youth Advance Activity: 1,395+ youth in 12 communities (2022–2024)" },
  { year: "2024", label: "Baseline survey of 305 households in Nimba for the AWC/Y-Care International Project" },
  { year: "2025", label: "Leaders in Teaching with EDC / Mastercard Foundation and the Adult Education Project with Mission Alliance" },
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
// Source: Organizational Profile (09/2026), "Human Resources".
// TODO(content): the profile lists Jeremiah T. Burgess as contact person but
// does not state his title. "Executive Director" is carried over from the
// previous site — confirm it. Add photos when supplied.
const leaders = [
  {
    name: "Jeremiah T. Burgess",
    role: "Executive Director",
    photo: null,
  },
  {
    name: "Board of Directors",
    role: "Seven members providing strategic oversight",
    photo: null,
  },
  {
    name: "Management & Staff",
    role: "17 core staff and 36 LIT Master Trainers, plus field monitors and literacy facilitators",
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
// Current partners and networks: Organizational Profile (09/2026).
// Logos are the ones already in the repo; networks are text only.
const partners = [
  { name: "Education Development Center (EDC) / Mastercard Foundation", logo: "/images/partner-edc.webp" },
  { name: "All We Can (UK)", logo: "/images/partner-allwecan.webp" },
  { name: "Mission Alliance", logo: "/images/partner-mission-alliance.webp" },
];

const networks = [
  "Liberia National NGO Network (LINNK)",
  "Consortium of Adult Educators (CAE)",
  "New Africa Research Development Agency (NARDA)",
  "Pamoja Education (regional)",
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
                title={p.name}
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

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-[15px] leading-[24px] text-center max-w-[720px] mt-4"
          >
            SHIFSD&apos;s work is sustained through the support of{" "}
            <span className="font-semibold text-deep-canopy">
              the Education Development Center (EDC) / Mastercard Foundation
            </span>
            ,{" "}
            <span className="font-semibold text-deep-canopy">All We Can (UK)</span>{" "}
            and{" "}
            <span className="font-semibold text-deep-canopy">Mission Alliance</span>
            , who also provide ongoing technical support. SHIFSD is a network
            member of {networks.slice(0, 3).join(", ")}, and regionally a member
            of Pamoja Education.
          </motion.p>
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
