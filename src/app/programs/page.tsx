"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

// ─── 1. Programs Hero ───────────────────────────────────────────
function ProgramsHero() {
  return (
    <section data-node-id="46:19" className="bg-deep-canopy">
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
            <span>Programs</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-horizon-gold text-[13px] font-semibold uppercase"
            style={{ letterSpacing: "3px" }}
          >
            What We Do
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-white text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            Our Programs
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] leading-[28px] text-white/80 max-w-[900px]"
          >
            Three integrated pillars of sustainable development — agriculture,
            education, and financial empowerment — working together to build
            resilient Liberian communities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Program Cards ───────────────────────────────────────────
type Program = {
  title: string;
  description: string;
  image: string;
  href: string;
  accent: "teal" | "flame" | "gold";
  stats: string[];
  reverse?: boolean;
};

const programs: Program[] = [
  {
    title: "Climate-Smart Agriculture",
    description:
      "Training smallholder farmers in sustainable techniques including conservation agriculture, agroforestry, and post-harvest management to achieve food security and climate resilience across seven counties.",
    image: "/images/programs/csa.jpg",
    href: "/programs/climate-smart-agriculture#overview",
    accent: "teal",
    stats: ["1,187+ Beneficiaries", "28.1 Acres", "7 Counties"],
  },
  {
    title: "Education & Livelihood Skills",
    description:
      "Empowering youth and adults through scholarships, vocational training, literacy programs, and livelihood skills development to create pathways out of poverty and into self-sufficiency.",
    image: "/images/programs/education.jpg",
    href: "/programs/education-livelihood#overview",
    accent: "flame",
    stats: ["50+ Scholars", "5 Programs", "3 Communities"],
    reverse: true,
  },
  {
    title: "Financial Sustainability",
    description:
      "Building institutional resilience through strategic resource mobilization, social enterprise development, and community-based savings groups that reduce dependency on external funding.",
    image: "/images/programs/financial.jpg",
    href: "/programs/financial-sustainability#overview",
    accent: "gold",
    stats: ["6+ Partners", "3 Revenue Streams", "Long-term Impact"],
  },
];

const accentClasses = {
  teal: {
    border: "border-warm-teal",
    bar: "bg-warm-teal",
    pillBg: "bg-warm-teal/10",
    pillText: "text-warm-teal",
    linkText: "text-warm-teal",
  },
  flame: {
    border: "border-liberian-flame",
    bar: "bg-liberian-flame",
    pillBg: "bg-liberian-flame/10",
    pillText: "text-liberian-flame",
    linkText: "text-liberian-flame",
  },
  gold: {
    border: "border-horizon-gold",
    bar: "bg-horizon-gold",
    pillBg: "bg-horizon-gold/10",
    pillText: "text-horizon-gold",
    linkText: "text-horizon-gold",
  },
};

function ProgramCard({ program }: { program: Program }) {
  const a = accentClasses[program.accent];
  const image = (
    <div
      className={`w-full lg:w-[520px] shrink-0 h-[360px] rounded-2xl overflow-hidden border-[6px] ${a.border}`}
    >
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
  const content = (
    <div className="flex-1 flex flex-col gap-5">
      <div className={`h-1 w-12 ${a.bar} rounded-sm`} />
      <h2
        className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[28px] leading-[36px]"
        style={{ letterSpacing: "-0.25px" }}
      >
        {program.title}
      </h2>
      <p className="text-gray-600 text-[16px] leading-[26px]">
        {program.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {program.stats.map((s) => (
          <span
            key={s}
            className={`${a.pillBg} ${a.pillText} text-[12px] font-semibold rounded-full px-3.5 py-1.5`}
          >
            {s}
          </span>
        ))}
      </div>
      <Link
        href={program.href}
        className={`${a.linkText} text-[16px] font-semibold hover:underline`}
      >
        Learn More →
      </Link>
    </div>
  );

  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col lg:flex-row gap-12 items-center w-full ${
        program.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {image}
      {content}
    </motion.div>
  );
}

function ProgramCards() {
  return (
    <section id="program-cards" data-node-id="46:24" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col gap-12"
        >
          {programs.map((p) => (
            <ProgramCard key={p.title} program={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Our Approach ────────────────────────────────────────────
const approachSteps = [
  {
    number: "01",
    title: "Community Assessment",
    description:
      "We begin by understanding each community's unique needs, resources, and aspirations through participatory assessments.",
  },
  {
    number: "02",
    title: "Capacity Building",
    description:
      "Training programs equip community members with practical skills in agriculture, business, and leadership.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Programs are co-implemented with community ownership, ensuring cultural relevance and local accountability.",
  },
  {
    number: "04",
    title: "Monitoring & Growth",
    description:
      "Continuous evaluation drives improvement while communities grow toward full self-sufficiency.",
  },
];

function OurApproach() {
  return (
    <section id="approach" data-node-id="47:2" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-10"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 text-center max-w-[900px]"
          >
            <p
              className="text-warm-teal text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Integrated Development
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Our Approach
            </h2>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              Our three pillars work together as an integrated system.
              Agricultural training creates food security, education builds
              capacity, and financial sustainability ensures long-term
              independence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {approachSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="bg-white rounded-xl px-5 py-6 flex flex-col gap-3"
              >
                <p className="font-[family-name:var(--font-heading)] font-semibold text-warm-teal/20 text-[32px] leading-none">
                  {step.number}
                </p>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[18px] leading-[28px]">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-[22px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Partner CTA ─────────────────────────────────────────────
function PartnerCTA() {
  return (
    <section id="partner-cta" data-node-id="47:24" className="bg-warm-teal scroll-mt-24">
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
            className="font-[family-name:var(--font-heading)] font-medium text-white text-[32px] leading-[40px]"
          >
            Partner With Us to Scale Impact
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/85 text-[16px] leading-[26px] max-w-[900px]"
          >
            Organizations, donors, and volunteers can amplify our reach across
            Liberia. Together, we can build a more food-secure, educated, and
            financially resilient nation.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-involved#partner-form"
              className="bg-liberian-flame hover:bg-liberian-flame/90 text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="/contact#form"
              className="border-2 border-white text-white hover:bg-white hover:text-warm-teal text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramCards />
      <OurApproach />
      <PartnerCTA />
    </>
  );
}
