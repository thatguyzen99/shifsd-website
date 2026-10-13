"use client";

import { motion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";

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
    <section data-node-id="58:19" className="bg-deep-canopy">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-white text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-teal-light text-[18px] max-w-[700px]"
          >
            We&apos;d love to hear from you. Reach out to learn more about our
            programs or explore partnership opportunities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Contact Form ────────────────────────────────────────────
const inputClass =
  "w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-[14px] text-deep-canopy placeholder:text-gray-400 focus:border-warm-teal focus:outline-none focus:ring-2 focus:ring-warm-teal/20 transition-colors";

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
    <label className="flex flex-col gap-2" htmlFor={htmlFor}>
      <span className="font-[family-name:var(--font-body)] font-medium text-gray-700 text-[14px]">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

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
    <section id="form" data-node-id="58:22" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-10"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px] text-center"
            style={{ letterSpacing: "-0.5px" }}
          >
            Send Us a Message
          </motion.h2>

          <motion.form
            ref={formRef}
            variants={fadeUp}
            onSubmit={onSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="w-full max-w-[800px] bg-white rounded-2xl shadow-md p-10 flex flex-col gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="First Name" htmlFor="c-first">
                <input
                  id="c-first"
                  name="first-name"
                  type="text"
                  required
                  placeholder="Enter your first name"
                  className={inputClass}
                />
              </Field>
              <Field label="Last Name" htmlFor="c-last">
                <input
                  id="c-last"
                  name="last-name"
                  type="text"
                  required
                  placeholder="Enter your last name"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Email Address" htmlFor="c-email">
              <input
                id="c-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </Field>

            <Field label="Subject" htmlFor="c-subject">
              <select
                id="c-subject"
                name="subject"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  How can we help?
                </option>
                <option value="general">General inquiry</option>
                <option value="programs">Programs &amp; services</option>
                <option value="partnership">Partnership</option>
                <option value="donation">Donation / giving</option>
                <option value="media">Media &amp; press</option>
                <option value="other">Other</option>
              </select>
            </Field>

            <Field label="Message" htmlFor="c-message">
              <textarea
                id="c-message"
                name="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className={`${inputClass} resize-y`}
              />
            </Field>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={state === "sending"}
                className="bg-warm-teal hover:bg-warm-teal/90 disabled:bg-gray-400 text-white text-[16px] font-semibold px-8 py-3.5 rounded-lg transition-colors self-start"
              >
                {state === "sending" ? "Sending…" : "Send Message"}
              </button>
              {state === "sent" && (
                <p className="text-warm-teal text-[14px] font-medium">
                  Thanks — your message is on its way. We&apos;ll be in touch
                  shortly.
                </p>
              )}
              {state === "error" && (
                <p className="text-error text-[14px] font-medium">
                  Couldn&apos;t send — please email{" "}
                  <a
                    href="mailto:shifsdliberia@gmail.com"
                    className="underline"
                  >
                    shifsdliberia@gmail.com
                  </a>{" "}
                  directly.
                </p>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Contact Info ────────────────────────────────────────────
type InfoCard = {
  icon: string;
  title: string;
  lines: React.ReactNode[];
};

// Source: Organizational Profile (09/2026).
const infoCards: InfoCard[] = [
  {
    icon: "home",
    title: "Visit Us",
    lines: [
      "Block C, Lee Hill Community,",
      "Johnsonville Avenue,",
      "Monrovia, Liberia",
      "P.O. Box 1164, 1000 Monrovia 10, Liberia",
    ],
  },
  {
    icon: "mail",
    title: "Email Us",
    lines: [
      <a
        key="e1"
        href="mailto:shifsdliberia@gmail.com"
        className="hover:text-warm-teal transition-colors"
      >
        shifsdliberia@gmail.com
      </a>,
      <span key="e2" className="mt-2 font-medium text-deep-canopy">
        Jeremiah T. Burgess
      </span>,
      <a
        key="e3"
        href="mailto:jburgess@shifsd-liberia.org"
        className="hover:text-warm-teal transition-colors"
      >
        jburgess@shifsd-liberia.org
      </a>,
    ],
  },
  {
    icon: "call",
    title: "Call Us",
    lines: [
      <a key="p1" href="tel:+231770024082" className="hover:text-warm-teal transition-colors">
        +231 (0)770 024 082
      </a>,
      <a key="p2" href="tel:+231886874950" className="hover:text-warm-teal transition-colors">
        +231 (0)886 874 950
      </a>,
      <a key="p3" href="tel:+231770215306" className="hover:text-warm-teal transition-colors">
        +231 (0)770 215 306
      </a>,
      "Contact person: Jeremiah T. Burgess",
    ],
  },
  {
    icon: "public",
    title: "Follow Us",
    // TODO(content): LinkedIn / Instagram links pointed at the platform
    // homepages, not SHIFSD accounts, so they were removed. Add the real
    // profile URLs when SHIFSD has them.
    lines: [
      <a
        key="s1"
        href="https://www.facebook.com/shifsdliberia/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-warm-teal transition-colors"
      >
        Facebook
      </a>,
    ],
  },
];


function ContactInfo() {
  return (
    <section id="info" data-node-id="60:2" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-10"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px] text-center"
            style={{ letterSpacing: "-0.5px" }}
          >
            Other Ways to Reach Us
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-8 flex flex-col items-center gap-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-warm-teal flex items-center justify-center">
                  <Icon
                    name={card.icon}
                    className="!text-[26px] text-white"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[18px] leading-[28px]">
                  {card.title}
                </h3>
                <div className="text-gray-500 text-[14px] leading-[22px] flex flex-col gap-0.5">
                  {card.lines.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Map ─────────────────────────────────────────────────────
function MapSection() {
  // OpenStreetMap embed centered on Johnsonville Township, Monrovia
  // (~6.28°N, -10.68°W). No API key required.
  const mapSrc =
    "https://www.openstreetmap.org/export/embed.html?bbox=-10.7500%2C6.2500%2C-10.6100%2C6.3200&layer=mapnik&marker=6.2830%2C-10.6800";
  return (
    <section id="map" data-node-id="60:25" className="bg-white scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="rounded-2xl overflow-hidden border border-gray-200"
        >
          <iframe
            title="Map — Monrovia, Liberia"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] block"
          />
        </motion.div>
        <p className="mt-3 text-center text-[13px] text-gray-500">
          Block C, Lee Hill Community · Johnsonville Avenue · Monrovia,
          Liberia ·{" "}
          <a
            href="https://www.openstreetmap.org/?mlat=6.283&mlon=-10.68#map=13/6.283/-10.68"
            target="_blank"
            rel="noreferrer"
            className="text-warm-teal hover:underline"
          >
            Open in maps →
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
    </>
  );
}
