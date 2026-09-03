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
            Over two decades of measurable impact across agriculture, education,
            and community development in Liberia.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Key Metrics ─────────────────────────────────────────────
const keyMetrics = [
  { value: 24, suffix: "+", label: "Years of Service", format: "int" as const },
  { value: 1187, suffix: "+", label: "Beneficiaries", format: "int" as const },
  { value: 7, suffix: "", label: "Counties", format: "int" as const },
  { value: 28.1, suffix: "", label: "Acres Farmland", format: "float" as const },
  { value: 6, suffix: "+", label: "Partners", format: "int" as const },
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

const impactAreas: Area[] = [
  {
    name: "Agriculture",
    accent: "teal",
    href: "/programs/climate-smart-agriculture#overview",
    items: [
      "1,187+ farmers trained in CSA techniques",
      "28.1-acre demonstration farm established",
      "85% yield improvement reported",
      "7 counties with active programs",
    ],
  },
  {
    name: "Education",
    accent: "flame",
    href: "/programs/education-livelihood#overview",
    items: [
      "50+ scholarships awarded",
      "200+ youth in vocational training",
      "Adult literacy programs in 3 communities",
      "Leadership development for young changemakers",
    ],
  },
  {
    name: "Financial",
    accent: "gold",
    href: "/programs/financial-sustainability#overview",
    items: [
      "6+ strategic partnerships secured",
      "3 revenue streams developed",
      "Community savings groups established",
      "Path to 2030 self-sufficiency mapped",
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

// ─── 4a. Stories of Change ──────────────────────────────────────
type Story = {
  initials: string;
  name: string;
  role: string;
  county: string;
  program: string;
  programAccent: "teal" | "flame" | "gold";
  quote: string;
};

const stories: Story[] = [
  {
    initials: "MB",
    name: "Musa B.",
    role: "Smallholder Farmer",
    county: "Nimba County",
    program: "Climate-Smart Agriculture",
    programAccent: "teal",
    quote:
      "Before SHIFSD's training, my rice yield could barely feed my family. After learning conservation techniques on the demo farm, I harvested twice as much last season and sold the surplus to pay school fees.",
  },
  {
    initials: "GK",
    name: "Grace K.",
    role: "Adult Literacy Graduate",
    county: "Lofa County",
    program: "Education & Livelihood",
    programAccent: "flame",
    quote:
      "I was 42 when I learned to read my own name. Now I keep the records for our savings group and help my grandchildren with their homework. SHIFSD gave me a second beginning.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "VSLA Chairperson",
    county: "Nimba County",
    program: "Financial Sustainability",
    programAccent: "gold",
    quote:
      "Our village savings group started with 15 members and $200. Two years later we're 42 members and have loaned out over $6,000 to small businesses. No one had to leave town to find capital.",
  },
];

const storyAccents = {
  teal: { pill: "bg-warm-teal/10 text-warm-teal", avatar: "bg-warm-teal" },
  flame: { pill: "bg-liberian-flame/10 text-liberian-flame", avatar: "bg-liberian-flame" },
  gold: { pill: "bg-horizon-gold/10 text-horizon-gold", avatar: "bg-horizon-gold" },
};

function StoriesOfChange() {
  return (
    <section id="stories" className="bg-warm-sand scroll-mt-24">
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
              In Their Words
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Stories of Change
            </h2>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              Behind every number is a person. These are a few of the Liberians
              whose lives have shifted through SHIFSD&apos;s programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {stories.map((s) => {
              const a = storyAccents[s.programAccent];
              return (
                <motion.article
                  key={s.name}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-7 flex flex-col gap-5 border border-gray-200"
                >
                  <span
                    className="font-[family-name:var(--font-accent)] text-horizon-gold text-[48px] leading-none italic font-semibold -mb-2"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="font-[family-name:var(--font-accent)] italic text-deep-canopy text-[17px] leading-[28px]">
                    {s.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 mt-auto border-t border-gray-100">
                    <div
                      className={`${a.avatar} w-11 h-11 rounded-full flex items-center justify-center shrink-0`}
                    >
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-white text-[14px]">
                        {s.initials}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[15px]">
                        {s.name}
                      </p>
                      <p className="text-gray-500 text-[12px]">
                        {s.role} · {s.county}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`${a.pill} inline-block self-start text-[11px] font-semibold rounded-full px-2.5 py-1`}
                  >
                    {s.program}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4b. Data & Results ─────────────────────────────────────────
type Result = {
  label: string;
  from: number;
  to: number;
  suffix?: string;
  fromYear: string;
  toYear: string;
  accent: "teal" | "flame" | "gold";
};

const results: Result[] = [
  {
    label: "Farmers trained (cumulative)",
    from: 120,
    to: 1187,
    suffix: "+",
    fromYear: "2016",
    toYear: "2024",
    accent: "teal",
  },
  {
    label: "Youth in vocational training",
    from: 45,
    to: 200,
    suffix: "+",
    fromYear: "2018",
    toYear: "2024",
    accent: "flame",
  },
  {
    label: "Communities with active programs",
    from: 3,
    to: 12,
    fromYear: "2016",
    toYear: "2024",
    accent: "gold",
  },
  {
    label: "Strategic funding partners",
    from: 1,
    to: 6,
    suffix: "+",
    fromYear: "2016",
    toYear: "2024",
    accent: "teal",
  },
];

const resultAccents = {
  teal: { bar: "bg-warm-teal", text: "text-warm-teal", track: "bg-warm-teal/15" },
  flame: { bar: "bg-liberian-flame", text: "text-liberian-flame", track: "bg-liberian-flame/15" },
  gold: { bar: "bg-horizon-gold", text: "text-horizon-gold", track: "bg-horizon-gold/15" },
};

function ProgressBar({
  percent,
  accent,
}: {
  percent: number;
  accent: keyof typeof resultAccents;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const a = resultAccents[accent];
  return (
    <div ref={ref} className={`h-2 w-full rounded-full ${a.track} overflow-hidden`}>
      <motion.div
        className={`h-full ${a.bar} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percent}%` : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      />
    </div>
  );
}

function DataAndResults() {
  return (
    <section id="data" className="bg-white scroll-mt-24">
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
              className="text-liberian-flame text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              By the Numbers
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Data &amp; Results
            </h2>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              Measurable growth across every pillar. Every figure is drawn from
              our annual reporting and field verification records.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {results.map((r) => {
              const percent = Math.min(100, Math.round((r.from / r.to) * 100));
              const growth = Math.round(((r.to - r.from) / r.from) * 100);
              const a = resultAccents[r.accent];
              return (
                <motion.div
                  key={r.label}
                  variants={fadeUp}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-7 flex flex-col gap-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[18px] leading-[26px]">
                      {r.label}
                    </h3>
                    <span
                      className={`${a.text} font-[family-name:var(--font-heading)] font-semibold text-[14px] whitespace-nowrap`}
                    >
                      +{growth}%
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">
                        {r.fromYear}
                      </span>
                      <span className="font-[family-name:var(--font-heading)] font-medium text-gray-500 text-[24px] leading-[32px]">
                        {r.from.toLocaleString()}
                        {r.suffix ?? ""}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`${a.text} text-[11px] font-semibold uppercase tracking-wider`}
                      >
                        {r.toYear}
                      </span>
                      <span
                        className={`font-[family-name:var(--font-heading)] font-medium ${a.text} text-[36px] leading-[44px]`}
                        style={{ letterSpacing: "-0.5px" }}
                      >
                        <CountUp to={r.to} suffix={r.suffix ?? ""} />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <ProgressBar percent={percent} accent={r.accent} />
                    <div className="flex justify-between text-[11px] text-gray-400">
                      <span>Baseline {percent}%</span>
                      <span>Current 100%</span>
                    </div>
                  </div>
                </motion.div>
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
            Programs active across 7 of Liberia&apos;s 15 counties. Hover over
            a marker to see the work happening on the ground.
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
      <StoriesOfChange />
      <DataAndResults />
      <GeographicReach />
      <SupportCTA />
    </>
  );
}
