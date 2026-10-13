"use client";

import Link from "next/link";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LiberiaMap from "@/components/LiberiaMap";

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

function CountUp({
  to,
  suffix = "",
  format = "int",
}: {
  to: number;
  suffix?: string;
  format?: "int" | "float";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  const display =
    format === "float" ? n.toFixed(1) : Math.floor(n).toLocaleString();
  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

// ─── 1. Impact Hero ─────────────────────────────────────────────
function ImpactHero() {
  return (
    <section data-node-id="51:19" className="bg-deep-canopy">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.p variants={fadeUp} className="text-[13px] text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="px-2">/</span>
            <span>Impact</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-horizon-gold text-[13px] font-semibold uppercase"
            style={{ letterSpacing: "3px" }}
          >
            Measuring Change
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-white text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            Our Impact
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] leading-[28px] text-white/85 max-w-[900px]"
          >
            Between late 2024 and 2026, SHIFSD reached a combined total of
            2,526 beneficiaries through its integrated programs in education,
            climate-smart agriculture, financial empowerment, and community
            development.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Key Metrics ─────────────────────────────────────────────
// Source: Organizational Profile (09/2026). 25+ years = founded 11 Nov 2000.
const keyMetrics = [
  { value: 25, suffix: "+", label: "Years of Service", format: "int" as const },
  { value: 2526, suffix: "", label: "Beneficiaries, Late 2024–2026", format: "int" as const },
  { value: 4, suffix: "", label: "Counties of Operation", format: "int" as const },
  { value: 65, suffix: "", label: "Public Schools (LIT)", format: "int" as const },
  { value: 1395, suffix: "+", label: "Youth Reached, 2022–2024", format: "int" as const },
];

function KeyMetrics() {
  return (
    <section id="metrics" data-node-id="51:24" className="bg-warm-teal scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {keyMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="font-[family-name:var(--font-heading)] font-medium text-horizon-gold text-[42px] leading-none">
                <CountUp to={m.value} suffix={m.suffix} format={m.format} />
              </span>
              <span className="text-white/85 text-[14px] font-medium">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Impact by Area ──────────────────────────────────────────
type Area = {
  name: string;
  accent: "teal" | "flame" | "gold";
  href: string;
  items: string[];
};

// Sources: Organizational Profile (09/2026) and 2024 Annual Report.
const impactAreas: Area[] = [
  {
    name: "Agriculture",
    accent: "teal",
    href: "/programs/climate-smart-agriculture#overview",
    items: [
      "28.1 acres of farmland purchased between 2023 and 2024",
      "CSA awareness events in 25 communities (2024)",
      "Baseline survey of 305 households in Nimba for AWC/Y-Care (2024)",
      "Welthungerhilfe consultancy: 50 storage facilities mapped across 3 counties; end-line survey of 300 respondents (2023)",
    ],
  },
  {
    name: "Education",
    accent: "flame",
    href: "/programs/education-livelihood#overview",
    items: [
      "Leaders in Teaching with EDC / Mastercard Foundation: 65 public schools (2025–present)",
      "Adult Education Project with Mission Alliance: 30 communities in Lofa (January 2025–present)",
      "USAID Youth Advance Activity: 1,395+ youth in 12 communities (2022–2024)",
      "Hummingbird Academy: 381 students in the 2023/2024 school year",
    ],
  },
  {
    name: "Financial",
    accent: "gold",
    href: "/programs/financial-sustainability#overview",
    items: [
      "150 rural women trained in VSLA methodologies in five groups (2024)",
      "Five youth VSLA groups established with EDC in Montserrado (2024)",
      "145 participants in entrepreneurship training (June 2024)",
      "Five-year strategic plan (2024–2028) with All We Can, emphasising financial sustainability",
    ],
  },
];

const areaAccents = {
  teal: { bar: "bg-warm-teal", check: "text-warm-teal" },
  flame: { bar: "bg-liberian-flame", check: "text-liberian-flame" },
  gold: { bar: "bg-horizon-gold", check: "text-horizon-gold" },
};

function ImpactByArea() {
  return (
    <section id="by-area" data-node-id="51:40" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px] text-center"
            style={{ letterSpacing: "-0.5px" }}
          >
            Impact by Program Area
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {impactAreas.map((area) => {
              const a = areaAccents[area.accent];
              return (
                <motion.div key={area.name} variants={fadeUp}>
                  <Link
                    href={area.href}
                    className="group block h-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-7 flex flex-col gap-4 transition-colors hover:border-warm-teal/50 hover:bg-white"
                  >
                    <div className={`h-1 w-12 ${a.bar} rounded-sm`} />
                    <h3 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[24px] leading-[32px]">
                      {area.name}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 items-start text-[14px]"
                        >
                          <span
                            className={`${a.check} font-semibold shrink-0`}
                            aria-hidden
                          >
                            ✓
                          </span>
                          <span className="text-gray-600 leading-[22px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <span
                      className={`${a.check} mt-2 inline-flex items-center gap-1 text-[13px] font-semibold`}
                    >
                      Explore program
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Stories of Change and Data & Results were removed: their names, quotes,
// baselines and growth figures were not in any SHIFSD source.
// TODO(content): add real beneficiary stories only with names, quotes and
// consent supplied by SHIFSD.

// ─── 4c. Publications ───────────────────────────────────────────
type Publication = {
  title: string;
  description: string;
  file: string;
  filename: string;
  icon: string;
  accent: "teal" | "flame" | "gold";
};

const publications: Publication[] = [
  {
    title: "Annual Impact Report 2024",
    description:
      "Our actions and achievements in 2024, the first year of our five-year strategic plan.",
    file: "/docs/SHIFSD-Annual-Report-2024.pdf",
    filename: "SHIFSD-Annual-Report-2024.pdf",
    icon: "insert_chart",
    accent: "gold",
  },
  // TODO(content): public/docs/SHIFSD-Strategic-Plan-2024-2028.pdf in the
  // repo is truncated/corrupted and will not open. Replace it with a good copy.
  {
    title: "Strategic Plan 2024–2028",
    description:
      "Our five-year plan (2024–2028) across three pillars: Climate Smart Agriculture, Education and Livelihood Skills, and Financial Sustainability.",
    file: "/docs/SHIFSD-Strategic-Plan-2024-2028.pdf",
    filename: "SHIFSD-Strategic-Plan-2024-2028.pdf",
    icon: "map",
    accent: "teal",
  },
  {
    title: "Organizational Profile",
    description:
      "History, registration and accreditation, strategy, reach, human resources, partners and track record (updated September 2026).",
    file: "/docs/SHIFSD-Organizational-Profile.pdf",
    filename: "SHIFSD-Organizational-Profile.pdf",
    icon: "menu_book",
    accent: "flame",
  },
];

const pubAccents = {
  teal: { icon: "bg-warm-teal text-white", link: "text-warm-teal" },
  flame: { icon: "bg-liberian-flame text-white", link: "text-liberian-flame" },
  gold: { icon: "bg-horizon-gold text-deep-canopy", link: "text-horizon-gold" },
};

function PubIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} aria-hidden>
      {name}
    </span>
  );
}

function Publications() {
  return (
    <section id="publications" className="bg-warm-sand scroll-mt-24">
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
            className="flex flex-col items-center gap-3 text-center max-w-[720px]"
          >
            <p
              className="text-warm-teal text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Publications
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Reports &amp; Downloads
            </h2>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              The primary sources behind the figures on this page.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {publications.map((p) => {
              const a = pubAccents[p.accent];
              return (
                <motion.a
                  key={p.filename}
                  href={p.file}
                  download={p.filename}
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  className="group bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 transition-colors hover:border-warm-teal/50"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${a.icon} flex items-center justify-center`}
                  >
                    <PubIcon name={p.icon} className="!text-[24px]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[20px] leading-[28px]">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-[22px] flex-1">
                    {p.description}
                  </p>
                  <span
                    className={`${a.link} inline-flex items-center gap-1 text-[14px] font-semibold`}
                  >
                    <PubIcon name="download" className="!text-[18px]" />
                    Download PDF
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. Geographic Reach ────────────────────────────────────────
function GeographicReach() {
  return (
    <section id="geographic-reach" data-node-id="51:88" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-8"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px] text-center"
          >
            Our Geographic Reach
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-[16px] leading-[26px] text-center max-w-[720px] -mt-2"
          >
            SHIFSD currently operates in Montserrado, Bong, Nimba, and Lofa
            Counties. In the past, SHIFSD has also worked in Margibi, Grand Cape
            Mount, and Bomi Counties.
          </motion.p>
          <motion.div variants={fadeUp} className="w-full">
            <LiberiaMap />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. Support CTA ─────────────────────────────────────────────
function SupportCTA() {
  return (
    <section id="support" data-node-id="51:92" className="bg-warm-teal scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-semibold text-white text-[32px]"
          >
            Help Us Expand Our Impact
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link
              href="/get-involved#ways"
              className="inline-block bg-liberian-flame hover:bg-liberian-flame/90 text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Get Involved Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <KeyMetrics />
      <ImpactByArea />
      <Publications />
      <GeographicReach />
      <SupportCTA />
    </>
  );
}
