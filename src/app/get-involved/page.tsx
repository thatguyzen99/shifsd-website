"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent } from "react";

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
    <section data-node-id="52:19" className="bg-liberian-flame">
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
            <span>Get Involved</span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            Get Involved
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] leading-[28px] text-white/85 max-w-[900px]"
          >
            Join the movement to build a more resilient, self-sustaining
            Liberia. Whether through financial support, volunteering your
            skills, or organizational partnership — every contribution creates
            lasting impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Ways to Help ────────────────────────────────────────────
type Way = {
  title: string;
  description: string;
  image: string;
  cta: string;
  href: string;
  buttonClass: string;
  external?: boolean;
};

const ways: Way[] = [
  {
    title: "Donate",
    description:
      "Your financial support funds our work in education, climate-smart agriculture and financial empowerment. Choose one-time or recurring giving.",
    image: "/images/get-involved/donate.jpg",
    cta: "Give Now",
    href: "/donate#tiers",
    buttonClass: "bg-liberian-flame hover:bg-liberian-flame/90 text-white",
    external: true,
  },
  {
    title: "Volunteer",
    description:
      "Share your professional skills remotely or join us on the ground. We need expertise in agriculture, education, marketing, grant writing, and technology.",
    image: "/images/get-involved/volunteer.jpg",
    cta: "Apply to Volunteer",
    href: "#volunteer-form",
    buttonClass: "bg-warm-teal hover:bg-warm-teal/90 text-white",
  },
  {
    title: "Partner",
    description:
      "Organizations, institutions, and corporations can partner with SHIFSD to amplify impact through collaborative programs, co-funding, and knowledge exchange.",
    image: "/images/get-involved/partner.jpg",
    cta: "Explore Partnership",
    href: "#partner-form",
    buttonClass: "bg-horizon-gold hover:bg-horizon-gold/90 text-deep-canopy",
  },
];

function WaysToHelp() {
  return (
    <section id="ways" data-node-id="52:23" className="bg-white scroll-mt-24">
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
            Three Ways to Make a Difference
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {ways.map((w) => (
              <motion.div
                key={w.title}
                variants={fadeUp}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[24px] leading-[32px]">
                    {w.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-[24px] flex-1">
                    {w.description}
                  </p>
                  {w.external ? (
                    <Link
                      href={w.href}
                      className={`${w.buttonClass} inline-flex items-center justify-center text-[15px] font-semibold px-7 py-3.5 rounded-lg transition-colors self-start`}
                    >
                      {w.cta}
                    </Link>
                  ) : (
                    <a
                      href={w.href}
                      className={`${w.buttonClass} inline-flex items-center justify-center text-[15px] font-semibold px-7 py-3.5 rounded-lg transition-colors self-start`}
                    >
                      {w.cta}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Form field primitives ──────────────────────────────────────
function Field({
  label,
  children,
  htmlFor,
}: {
  label: string;
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-[13px]" htmlFor={htmlFor}>
      <span className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-[14px] text-deep-canopy placeholder:text-gray-400 focus:border-warm-teal focus:outline-none focus:ring-2 focus:ring-warm-teal/20 transition-colors";

// ─── 3a. Volunteer Form ─────────────────────────────────────────
const volunteerInterests = [
  "Agriculture / CSA",
  "Education & Training",
  "Grant Writing",
  "Marketing & Communications",
  "Technology & Web",
  "Translation",
  "On-the-ground fieldwork",
  "Other",
];

function VolunteerForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const data = new FormData(form);
      const body = new URLSearchParams(data as unknown as Record<string, string>);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("Network");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="volunteer-form" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p
              className="text-warm-teal text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Volunteer
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px] leading-[40px]"
            >
              Apply to Volunteer
            </h2>
            <p className="text-gray-600 text-[15px] leading-[24px]">
              Tell us a bit about yourself and where you&apos;d like to help.
              We&apos;ll get back to you within a week to talk next steps.
            </p>
          </motion.div>

          <motion.form
            ref={formRef}
            variants={fadeUp}
            onSubmit={onSubmit}
            name="volunteer"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="volunteer" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="First name" htmlFor="vol-first">
                <input
                  id="vol-first"
                  name="first-name"
                  type="text"
                  required
                  className={inputClass}
                />
              </Field>
              <Field label="Last name" htmlFor="vol-last">
                <input
                  id="vol-last"
                  name="last-name"
                  type="text"
                  required
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Email" htmlFor="vol-email">
              <input
                id="vol-email"
                name="email"
                type="email"
                required
                className={inputClass}
              />
            </Field>

            <Field label="Area of interest" htmlFor="vol-interest">
              <select
                id="vol-interest"
                name="area-of-interest"
                required
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one…
                </option>
                {volunteerInterests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Tell us about your skills and availability" htmlFor="vol-msg">
              <textarea
                id="vol-msg"
                name="message"
                rows={4}
                required
                className={`${inputClass} resize-y`}
              />
            </Field>

            <button
              type="submit"
              disabled={state === "sending"}
              className="bg-warm-teal hover:bg-warm-teal/90 disabled:bg-gray-400 text-white text-[15px] font-semibold px-7 py-3.5 rounded-lg transition-colors self-start"
            >
              {state === "sending" ? "Sending…" : "Submit application"}
            </button>

            {state === "sent" && (
              <p className="text-warm-teal text-[14px] font-medium">
                Thanks — we&apos;ve received your application and will be in
                touch soon.
              </p>
            )}
            {state === "error" && (
              <p className="text-error text-[14px] font-medium">
                Something went wrong. Please email us at{" "}
                <a
                  href="mailto:info@shifsd-liberia.org"
                  className="underline"
                >
                  info@shifsd-liberia.org
                </a>{" "}
                and we&apos;ll help directly.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3b. Partnership Form ───────────────────────────────────────
const partnershipTypes = [
  "Institutional / NGO",
  "Corporate",
  "Academic",
  "Government / Multilateral",
  "Faith-based",
  "Individual major donor",
  "Other",
];

function PartnershipForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const data = new FormData(form);
      const body = new URLSearchParams(data as unknown as Record<string, string>);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("Network");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="partner-form" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p
              className="text-horizon-gold text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Partner
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px] leading-[40px]"
            >
              Explore Partnership
            </h2>
            <p className="text-gray-600 text-[15px] leading-[24px]">
              We collaborate with organizations that share our commitment to
              community-led development. Share a few details and our team will
              be in touch.
            </p>
          </motion.div>

          <motion.form
            ref={formRef}
            variants={fadeUp}
            onSubmit={onSubmit}
            name="partnership"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-gray-50 rounded-2xl border border-gray-200 p-7 flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="partnership" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <Field label="Organization name" htmlFor="part-org">
              <input
                id="part-org"
                name="organization"
                type="text"
                required
                className={inputClass}
              />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Contact person" htmlFor="part-person">
                <input
                  id="part-person"
                  name="contact-person"
                  type="text"
                  required
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor="part-email">
                <input
                  id="part-email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Partnership type" htmlFor="part-type">
              <select
                id="part-type"
                name="partnership-type"
                required
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose one…
                </option>
                {partnershipTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              label="How would you like to work together?"
              htmlFor="part-msg"
            >
              <textarea
                id="part-msg"
                name="message"
                rows={4}
                required
                className={`${inputClass} resize-y`}
              />
            </Field>

            <button
              type="submit"
              disabled={state === "sending"}
              className="bg-horizon-gold hover:bg-horizon-gold/90 disabled:bg-gray-400 text-deep-canopy text-[15px] font-semibold px-7 py-3.5 rounded-lg transition-colors self-start"
            >
              {state === "sending" ? "Sending…" : "Send partnership request"}
            </button>

            {state === "sent" && (
              <p className="text-warm-teal text-[14px] font-medium">
                Thanks — we&apos;ve received your request. Our team will reach
                out shortly.
              </p>
            )}
            {state === "error" && (
              <p className="text-error text-[14px] font-medium">
                Something went wrong. Please email us at{" "}
                <a
                  href="mailto:info@shifsd-liberia.org"
                  className="underline"
                >
                  info@shifsd-liberia.org
                </a>{" "}
                and we&apos;ll help directly.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. FAQ (accordion) ─────────────────────────────────────────
const faqs = [
  {
    q: "How is my donation used?",
    // TODO(content): the previous answer ("100% of designated donations go
    // directly to program activities…") had no source. Replace with SHIFSD's
    // own wording if they want a specific policy statement here.
    a: "Donations support SHIFSD's work across our three pillars: Education & Livelihood Skills, Climate Smart Agriculture, and Financial Sustainability. Email us at info@shifsd-liberia.org if you'd like to discuss how your gift will be used.",
  },
  {
    q: "Can I volunteer remotely?",
    a: "Yes! We welcome remote volunteers for grant writing, marketing, translation, and technical support.",
  },
  {
    q: "Is SHIFSD a registered NGO?",
    a: "Yes. SHIFSD was formally registered with the Government of Liberia on May 30, 2005 as a national nonprofit and non-governmental organization, and is accredited under registration number MFDP/NGO/AC#531871651.",
  },
  {
    q: "How do I become a partner organization?",
    a: "Use the partnership form above, or email info@shifsd-liberia.org with your organization details and areas of interest.",
  },
];

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-xl overflow-hidden"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[17px] leading-[24px]">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-warm-teal"
        >
          <Icon name="add" className="!text-[24px]" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-500 text-[14px] leading-[22px]">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" data-node-id="52:47" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-50 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px] text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-full max-w-[820px] flex flex-col gap-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function GetInvolvedPage() {
  return (
    <>
      <Hero />
      <WaysToHelp />
      <VolunteerForm />
      <PartnershipForm />
      <FAQ />
    </>
  );
}
