"use client";

import Link from "next/link";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

// ─── CountUp helper ─────────────────────────────────────────────
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

// ─── 1. CSA Hero ────────────────────────────────────────────────
function CSAHero() {
  return (
    <section data-node-id="48:19" className="bg-warm-teal">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-5 text-center text-white"
        >
          <motion.p variants={fadeUp} className="text-[13px] text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link
              href="/programs#program-cards"
              className="hover:text-white/80 transition-colors"
            >
              Programs
            </Link>
            <span className="px-2">/</span>
            <span>Climate-Smart Agriculture</span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            Climate-Smart Agriculture
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] leading-[28px] text-white/85 max-w-[900px]"
          >
            Training smallholder farmers in conservation agriculture,
            agroforestry, and post-harvest techniques to build food security and
            climate resilience across Liberia.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Program Overview ────────────────────────────────────────
function ProgramOverview() {
  return (
    <section id="overview" data-node-id="48:23" className="bg-white scroll-mt-24">
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
            className="w-full lg:w-[520px] shrink-0"
          >
            <div className="h-[380px] rounded-2xl overflow-hidden">
              <img
                src="/images/programs/csa.jpg"
                alt="Climate-Smart Agriculture demonstration farm"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-5">
            <p
              className="text-warm-teal text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Program Overview
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[28px] leading-[36px]"
              style={{ letterSpacing: "-0.25px" }}
            >
              Growing Food Security from the Ground Up
            </h2>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              Our CSA program trains farmers in climate-adaptive techniques
              across seven counties. Working on our 28.1-acre demonstration
              farm and in communities, we equip smallholder farmers with the
              knowledge to increase yields while protecting the environment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Key Activities ──────────────────────────────────────────
const activities = [
  {
    title: "Conservation Agriculture",
    description:
      "Minimum tillage, crop rotation, and soil cover techniques that improve yields while reducing environmental impact.",
  },
  {
    title: "Agroforestry",
    description:
      "Integrating trees with crops to restore soil fertility, provide shade, and create additional income from fruit and timber.",
  },
  {
    title: "Post-Harvest Management",
    description:
      "Training in proper drying, storage, and processing to reduce crop losses and improve food safety.",
  },
  {
    title: "Seed Multiplication",
    description:
      "Community seed banks and improved variety multiplication to ensure access to quality planting materials.",
  },
];

function KeyActivities() {
  return (
    <section id="activities" data-node-id="48:29" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-10"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px] text-center"
            style={{ letterSpacing: "0.64px" }}
          >
            Key Activities
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {activities.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="bg-white rounded-xl px-5 py-6 flex flex-col gap-2.5"
              >
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[18px]">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-[22px]">
                  {a.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. CSA Impact Stats ────────────────────────────────────────
const csaStats = [
  { value: 1187, suffix: "+", label: "Farmers Trained", format: "int" as const },
  {
    value: 28.1,
    suffix: "",
    label: "Acres Demonstration Farm",
    format: "float" as const,
  },
  { value: 7, suffix: "", label: "Counties Reached", format: "int" as const },
  { value: 85, suffix: "%", label: "Yield Improvement", format: "int" as const },
];

function CSAImpactStats() {
  return (
    <section id="stats" data-node-id="48:44" className="bg-warm-teal scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {csaStats.map((s, i) => (
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
                <CountUp to={s.value} suffix={s.suffix} format={s.format} />
              </span>
              <span className="text-white/85 text-[14px] font-medium">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Support CSA CTA ─────────────────────────────────────────
function SupportCTA() {
  return (
    <section id="support" data-node-id="48:57" className="bg-white scroll-mt-24">
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
            className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px]"
          >
            Support Our Agricultural Mission
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-[16px]">
            Help us train more farmers and expand climate-smart agriculture
            across Liberia.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/donate#tiers"
              className="bg-warm-teal hover:bg-warm-teal/90 text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Donate to CSA
            </Link>
            <Link
              href="/programs#program-cards"
              className="border-2 border-warm-teal text-warm-teal hover:bg-warm-teal hover:text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              ← Back to Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function CSAProgramPage() {
  return (
    <>
      <CSAHero />
      <ProgramOverview />
      <KeyActivities />
      <CSAImpactStats />
      <SupportCTA />
    </>
  );
}
