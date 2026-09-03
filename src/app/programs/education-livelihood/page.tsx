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

function CountUp({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
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

  return (
    <span ref={ref} className="tabular-nums">
      {Math.floor(n).toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── 1. Education Hero ──────────────────────────────────────────
function EducationHero() {
  return (
    <section data-node-id="49:19" className="bg-liberian-flame">
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
            <span>Education &amp; Livelihood</span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            Education &amp; Livelihood Skills
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] leading-[28px] text-white/85 max-w-[900px]"
          >
            Empowering youth and adults through scholarships, vocational
            training, literacy programs, and livelihood skills to create
            pathways out of poverty.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Program Overview ────────────────────────────────────────
function ProgramOverview() {
  return (
    <section id="overview" data-node-id="49:23" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col lg:flex-row-reverse gap-14 items-center"
        >
          <motion.div
            variants={fadeUp}
            className="w-full lg:w-[520px] shrink-0"
          >
            <div className="h-[380px] rounded-2xl overflow-hidden">
              <img
                src="/images/programs/education-overview.jpg"
                alt="Education program participants"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-5">
            <p
              className="text-liberian-flame text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Program Overview
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[28px] leading-[36px]"
              style={{ letterSpacing: "-0.25px" }}
            >
              Building Human Capital for a Stronger Liberia
            </h2>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              Our education programs target out-of-school youth, adult learners,
              and community leaders. Through scholarships, vocational training,
              and literacy programs, we equip individuals with the skills needed
              to build productive, self-sufficient lives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Key Programs ────────────────────────────────────────────
const keyPrograms = [
  {
    title: "Scholarship Program",
    description:
      "Full scholarships for promising students to pursue secondary and higher education.",
  },
  {
    title: "Vocational Training",
    description:
      "Practical skills in agriculture, construction, and tailoring for employment readiness.",
  },
  {
    title: "Adult Literacy",
    description:
      "Functional literacy and numeracy programs for adults in rural communities.",
  },
  {
    title: "Leadership Development",
    description:
      "Youth mentorship and community leadership programs building future change-makers.",
  },
];

function KeyPrograms() {
  return (
    <section id="programs-list" data-node-id="49:29" className="bg-warm-sand scroll-mt-24">
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
          >
            Key Programs
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {keyPrograms.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-white rounded-xl px-5 py-6 flex flex-col gap-2.5"
              >
                <h3 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[20px] leading-[28px]">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-[22px]">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Education Impact ────────────────────────────────────────
const eduStats = [
  { value: 50, suffix: "+", label: "Scholarships Awarded" },
  { value: 5, suffix: "", label: "Training Programs" },
  { value: 200, suffix: "+", label: "Youth Trained" },
  { value: 3, suffix: "", label: "Communities Served" },
];

function EducationImpact() {
  return (
    <section id="stats" data-node-id="49:44" className="bg-liberian-flame scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {eduStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-1.5 text-white"
            >
              <span
                className="font-[family-name:var(--font-heading)] font-medium text-[36px] leading-[44px]"
                style={{ letterSpacing: "-0.5px" }}
              >
                <CountUp to={s.value} suffix={s.suffix} />
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

// ─── 5. Support CTA ─────────────────────────────────────────────
function SupportCTA() {
  return (
    <section id="support" data-node-id="49:57" className="bg-white scroll-mt-24">
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
            Invest in Education, Transform Lives
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/donate#tiers"
              className="bg-liberian-flame hover:bg-liberian-flame/90 text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Sponsor a Student
            </Link>
            <Link
              href="/programs#program-cards"
              className="border-2 border-liberian-flame text-liberian-flame hover:bg-liberian-flame hover:text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
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
export default function EducationProgramPage() {
  return (
    <>
      <EducationHero />
      <ProgramOverview />
      <KeyPrograms />
      <EducationImpact />
      <SupportCTA />
    </>
  );
}
