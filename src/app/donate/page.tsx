"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const GLOBAL_GIVING_URL = "https://www.globalgiving.org/";

// ─── 1. Donate Hero ─────────────────────────────────────────────
function DonateHero() {
  return (
    <section data-node-id="64:19" className="bg-liberian-flame">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-gold-light text-[16px] font-medium uppercase"
            style={{ letterSpacing: "3px" }}
          >
            Make an Impact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-white text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            Your Generosity
            <br />
            Changes Lives
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] text-[18px] leading-[28px] text-[#FFF5E6] max-w-[700px]"
          >
            Every dollar you give empowers rural Liberian communities with
            sustainable agriculture, quality education, and financial
            independence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Donation state (shared) ────────────────────────────────────
type Tier = {
  amount: number;
  name: string;
  description: string;
  amountColor: string;
  buttonClass: string;
};

const tiers: Tier[] = [
  {
    amount: 25,
    name: "Seed",
    description:
      "Provides seeds and tools for one family's garden plot for a full growing season.",
    amountColor: "text-warm-teal",
    buttonClass: "bg-warm-teal hover:bg-warm-teal/90 text-white",
  },
  {
    amount: 50,
    name: "Cultivate",
    description:
      "Sponsors one student's educational materials and school supplies for a semester.",
    amountColor: "text-liberian-flame",
    buttonClass: "bg-liberian-flame hover:bg-liberian-flame/90 text-white",
  },
  {
    amount: 100,
    name: "Harvest",
    description:
      "Funds a community savings group starter kit and financial literacy training.",
    amountColor: "text-horizon-gold",
    buttonClass: "bg-warm-teal hover:bg-warm-teal/90 text-white",
  },
  {
    amount: 250,
    name: "Transform",
    description:
      "Provides comprehensive support: agriculture training, education, and financial tools for an entire family.",
    amountColor: "text-deep-canopy",
    buttonClass: "bg-warm-teal hover:bg-warm-teal/90 text-white",
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── 2. Donation Tiers (selectable) ─────────────────────────────
function DonationTiers({
  selected,
  onSelect,
}: {
  selected: number | null;
  onSelect: (amount: number) => void;
}) {
  return (
    <section
      id="tiers"
      data-node-id="64:23"
      className="bg-warm-sand scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px] text-center"
            style={{ letterSpacing: "-0.5px" }}
          >
            Choose Your Impact Level
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-[16px]">
            Select a giving tier or enter a custom amount. Every contribution
            matters.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
            {tiers.map((t) => {
              const isSelected = selected === t.amount;
              const isPopular = t.amount === 50;
              return (
                <motion.button
                  key={t.amount}
                  type="button"
                  variants={fadeUp}
                  onClick={() => {
                    onSelect(t.amount);
                    scrollToId("donate-methods");
                  }}
                  className={`text-left bg-white rounded-2xl px-6 py-8 flex flex-col items-center gap-5 transition-all outline-none ${
                    isSelected
                      ? "border-[3px] border-warm-teal shadow-xl ring-4 ring-warm-teal/15"
                      : isPopular
                        ? "border-[3px] border-liberian-flame shadow-lg hover:shadow-xl"
                        : "border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="h-6 flex items-center">
                    {isSelected ? (
                      <span className="bg-warm-teal text-white text-[11px] font-semibold rounded-full px-3 py-1 inline-flex items-center gap-1">
                        <Icon name="check" className="!text-[14px]" />
                        Selected
                      </span>
                    ) : isPopular ? (
                      <span className="bg-liberian-flame text-white text-[11px] font-semibold rounded-full px-3 py-1">
                        Most Popular
                      </span>
                    ) : null}
                  </div>
                  <p
                    className={`font-[family-name:var(--font-display)] font-semibold text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] ${t.amountColor}`}
                    style={{ letterSpacing: "-1px" }}
                  >
                    ${t.amount}
                  </p>
                  <p className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[20px]">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-[14px] text-center w-[220px]">
                    {t.description}
                  </p>
                  <span
                    className={`${
                      isSelected
                        ? "bg-warm-teal text-white"
                        : t.buttonClass
                    } text-[14px] font-semibold rounded-lg px-6 py-3 transition-colors`}
                  >
                    {isSelected ? "Continue →" : `Donate $${t.amount}`}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Selection chip (reused in Methods & Custom) ────────────────
function SelectionChip({
  selected,
  onClear,
}: {
  selected: number | null;
  onClear: () => void;
}) {
  const tier = tiers.find((t) => t.amount === selected);
  return (
    <AnimatePresence>
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-3 bg-warm-teal/10 border border-warm-teal/30 rounded-full px-4 py-2"
        >
          <Icon name="check_circle" className="!text-[18px] text-warm-teal" />
          <span className="text-warm-teal text-[13px] font-semibold">
            You selected: ${selected}
            {tier ? ` (${tier.name})` : ""}
          </span>
          <button
            type="button"
            onClick={() => {
              onClear();
              scrollToId("tiers");
            }}
            className="text-warm-teal/70 hover:text-warm-teal text-[13px] font-medium underline"
          >
            Change
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── 3. Donation Methods ────────────────────────────────────────
type Tab = "online" | "bank" | "mobile";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-lg px-4 py-3">
      <div className="flex flex-col min-w-0">
        <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
          {label}
        </span>
        <span className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[15px] truncate">
          {value}
        </span>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
        }}
        className={`shrink-0 inline-flex items-center gap-1 text-[13px] font-semibold px-3 py-1.5 rounded-md transition-colors ${
          copied
            ? "bg-warm-teal text-white"
            : "bg-warm-teal/10 text-warm-teal hover:bg-warm-teal/20"
        }`}
      >
        <Icon
          name={copied ? "check" : "content_copy"}
          className="!text-[16px]"
        />
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

const bankDetails = {
  bankName: "Ecobank Liberia Ltd",
  accountName: "Self Help Initiative for Sustainable Development Inc.",
  accountNumber: "6100206202",
  currency: "USD / LRD",
  swiftCode: "ECOCLRLM",
};

const mobileMoney = [
  { provider: "Orange Money", number: "+231 770 024 082", name: "SHIFSD Liberia" },
  { provider: "MTN Mobile Money", number: "+231 886 874 950", name: "SHIFSD Liberia" },
];

function DonationMethods({
  selected,
  onClear,
}: {
  selected: number | null;
  onClear: () => void;
}) {
  const [tab, setTab] = useState<Tab>("online");

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "online", label: "Online", icon: "language" },
    { id: "bank", label: "Bank Transfer", icon: "account_balance" },
    { id: "mobile", label: "Mobile Money", icon: "smartphone" },
  ];

  const emailSubject =
    selected !== null
      ? `Donation%20$${selected}%20-%20${
          tiers.find((t) => t.amount === selected)?.name ?? ""
        }`
      : "Donation%20inquiry";

  return (
    <section
      id="donate-methods"
      data-node-id="75:77"
      className="bg-white scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[36px] leading-[44px] text-center"
            style={{ letterSpacing: "-0.5px" }}
          >
            Make a Donation
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-[16px]">
            Choose your preferred donation method
          </motion.p>

          <SelectionChip selected={selected} onClear={onClear} />

          <motion.div
            variants={fadeUp}
            className="w-full max-w-[820px] bg-warm-sand rounded-2xl p-8 md:p-10 flex flex-col gap-8 items-center"
          >
            {/* Tab bar */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-wrap">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold transition-colors ${
                    tab === t.id
                      ? "bg-warm-teal text-white"
                      : "bg-white text-deep-canopy hover:bg-warm-sand"
                  }`}
                >
                  <Icon name={t.icon} className="!text-[18px]" />
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full flex flex-col gap-5">
              {tab === "online" && (
                <>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-warm-teal flex items-center justify-center">
                        <span className="font-[family-name:var(--font-heading)] font-semibold text-white text-[14px]">
                          GG
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[18px] leading-[28px]">
                          GlobalGiving
                        </p>
                        <p className="text-gray-500 text-[13px]">
                          Recommended for international donors
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-[14px]">
                      GlobalGiving is a trusted platform supporting nonprofits
                      worldwide. Your donation is secure, tax-deductible (for
                      US donors), and 100% of your gift goes to SHIFSD
                      programs.
                    </p>
                    <a
                      href={GLOBAL_GIVING_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-liberian-flame hover:bg-liberian-flame/90 text-white text-[16px] font-semibold rounded-lg px-6 py-3.5 inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="favorite" className="!text-[18px]" />
                      Donate {selected !== null ? `$${selected}` : ""} via GlobalGiving
                      <span aria-hidden>↗</span>
                    </a>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-warm-sand flex items-center justify-center">
                        <Icon
                          name="favorite"
                          className="!text-[18px] text-warm-teal"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[18px] leading-[28px]">
                          Contact Us Directly
                        </p>
                        <p className="text-gray-500 text-[13px]">
                          Arrange a donation via email or phone
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-[14px]">
                      Reach out to us to discuss donation options, in-kind
                      gifts, or corporate partnerships.
                    </p>
                    <a
                      href={`mailto:info@shifsd-liberia.org?subject=${emailSubject}`}
                      className="bg-warm-teal hover:bg-warm-teal/90 text-white text-[16px] font-semibold rounded-lg px-6 py-3.5 inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      Email Us to Donate <span aria-hidden>↗</span>
                    </a>
                  </div>

                  <p className="text-gray-500 text-[13px] text-center">
                    Can&apos;t donate online? Use the Bank Transfer or Mobile
                    Money options.
                  </p>
                </>
              )}

              {tab === "bank" && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-warm-teal flex items-center justify-center">
                      <Icon
                        name="account_balance"
                        className="!text-[20px] text-white"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[18px] leading-[28px]">
                        Bank Transfer
                      </p>
                      <p className="text-gray-500 text-[13px]">
                        Wire or deposit directly to our Ecobank account
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <CopyRow label="Bank" value={bankDetails.bankName} />
                    <CopyRow
                      label="Account Name"
                      value={bankDetails.accountName}
                    />
                    <CopyRow
                      label="Account Number"
                      value={bankDetails.accountNumber}
                    />
                    <CopyRow label="Currency" value={bankDetails.currency} />
                    <CopyRow label="SWIFT Code" value={bankDetails.swiftCode} />
                  </div>
                  <p className="text-gray-500 text-[13px]">
                    Please email us at{" "}
                    <a
                      className="text-warm-teal underline"
                      href={`mailto:info@shifsd-liberia.org?subject=${emailSubject}`}
                    >
                      info@shifsd-liberia.org
                    </a>{" "}
                    with your deposit reference
                    {selected !== null ? ` and note $${selected}` : ""} so we
                    can send a receipt.
                  </p>
                </div>
              )}

              {tab === "mobile" && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-warm-teal flex items-center justify-center">
                      <Icon
                        name="smartphone"
                        className="!text-[20px] text-white"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[18px] leading-[28px]">
                        Mobile Money
                      </p>
                      <p className="text-gray-500 text-[13px]">
                        Send from any Liberian mobile wallet
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {mobileMoney.map((mm) => (
                      <div
                        key={mm.provider}
                        className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[15px]">
                            {mm.provider}
                          </p>
                          <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                            {mm.name}
                          </span>
                        </div>
                        <CopyRow label="Number" value={mm.number} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-[13px] font-medium">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="lock" className="!text-[16px]" /> Secure
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="verified" className="!text-[16px]" /> Verified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="check_circle" className="!text-[16px]" /> Tax-deductible
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Custom Donation ─────────────────────────────────────────
type Frequency = "one-time" | "monthly" | "quarterly" | "annual";

function CustomDonation({
  amount,
  setAmount,
  selected,
  onClear,
}: {
  amount: string;
  setAmount: (v: string) => void;
  selected: number | null;
  onClear: () => void;
}) {
  const [freq, setFreq] = useState<Frequency>("monthly");

  const frequencies: { id: Frequency; label: string }[] = [
    { id: "one-time", label: "One-Time" },
    { id: "monthly", label: "Monthly" },
    { id: "quarterly", label: "Quarterly" },
    { id: "annual", label: "Annual" },
  ];

  return (
    <section
      id="custom"
      data-node-id="65:2"
      className="bg-white scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 pt-14 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-8"
        >
          <motion.h3
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[28px]"
          >
            Or Enter a Custom Amount
          </motion.h3>

          <SelectionChip selected={selected} onClear={onClear} />

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <span
              className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[32px]"
            >
              $
            </span>
            <label htmlFor="custom-amount" className="sr-only">
              Amount
            </label>
            <input
              id="custom-amount"
              type="number"
              min="1"
              step="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="bg-gray-50 border-2 border-gray-300 h-14 rounded-xl px-6 text-[18px] text-deep-canopy placeholder:text-gray-400 focus:border-warm-teal focus:outline-none w-[280px]"
            />
            <button
              type="button"
              onClick={() => scrollToId("donate-methods")}
              className="bg-liberian-flame hover:bg-liberian-flame/90 text-white text-[18px] font-semibold rounded-xl px-8 h-14 inline-flex items-center transition-colors"
            >
              Donate Now
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-wrap"
          >
            {frequencies.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFreq(f.id)}
                className={`px-6 py-3 text-[14px] font-medium transition-colors ${
                  freq === f.id
                    ? "bg-warm-teal text-white font-semibold"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. Your Impact ─────────────────────────────────────────────
const impactBreakdown = [
  {
    percent: "85%",
    label: "Direct Programs",
    description: "Goes directly to field operations and community impact",
  },
  {
    percent: "10%",
    label: "Administration",
    description: "Keeps our organization running efficiently",
  },
  {
    percent: "5%",
    label: "Fundraising",
    description: "Invested in sustainable growth and outreach",
  },
];

function YourImpact() {
  return (
    <section
      id="impact"
      data-node-id="65:19"
      className="bg-warm-teal scroll-mt-24"
    >
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
            className="font-[family-name:var(--font-heading)] font-medium text-white text-[36px] leading-[44px] text-center"
            style={{ letterSpacing: "-0.5px" }}
          >
            Where Your Money Goes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {impactBreakdown.map((row) => (
              <motion.div
                key={row.label}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 text-center"
              >
                <p className="font-[family-name:var(--font-heading)] font-semibold text-horizon-gold text-[48px] leading-none">
                  {row.percent}
                </p>
                <p className="font-[family-name:var(--font-heading)] font-semibold text-white text-[18px]">
                  {row.label}
                </p>
                <p className="text-teal-light text-[14px] max-w-[280px]">
                  {row.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. Donor Testimonial ───────────────────────────────────────
function DonorTestimonial() {
  return (
    <section
      id="testimonial"
      data-node-id="65:34"
      className="bg-warm-sand scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-50 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-[family-name:var(--font-accent)] italic font-medium text-deep-canopy text-[22px] leading-[32px] max-w-[900px]"
          >
            &ldquo;Seeing the direct impact of my monthly donation — families
            growing their own food, children staying in school — makes every
            dollar feel like a thousand. SHIFSD is the real deal.&rdquo;
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-warm-teal flex items-center justify-center">
              <span className="font-[family-name:var(--font-heading)] font-semibold text-white text-[14px]">
                SM
              </span>
            </div>
            <div className="flex flex-col text-left">
              <p className="font-[family-name:var(--font-body)] font-semibold text-deep-canopy text-[16px]">
                Sarah Mitchell
              </p>
              <p className="text-gray-500 text-[14px]">
                Monthly Donor since 2022
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. Trust & Security ────────────────────────────────────────
const trustBadges = [
  { icon: "lock", label1: "SSL Encrypted", label2: "& Secure" },
  { icon: "account_balance", label1: "Government", label2: "Accredited NGO" },
  { icon: "bar_chart", label1: "Transparent", label2: "Financial Reporting" },
  { icon: "toll", label1: "Tax-Deductible", label2: "Contributions" },
];

function TrustSecurity() {
  return (
    <section
      id="trust"
      data-node-id="65:41"
      className="bg-white scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-wrap items-start justify-center gap-12"
        >
          {trustBadges.map((b) => (
            <motion.div
              key={b.label1}
              variants={fadeUp}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-warm-sand flex items-center justify-center">
                <Icon name={b.icon} className="!text-[24px] text-warm-teal" />
              </div>
              <div className="text-gray-700 text-[13px] font-medium leading-tight">
                <p>{b.label1}</p>
                <p>{b.label2}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function DonatePage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  function pickTier(amount: number) {
    setSelected(amount);
    setCustomAmount(String(amount));
  }

  function clearSelection() {
    setSelected(null);
    setCustomAmount("");
  }

  return (
    <>
      <DonateHero />
      <DonationTiers selected={selected} onSelect={pickTier} />
      <DonationMethods selected={selected} onClear={clearSelection} />
      <CustomDonation
        amount={customAmount}
        setAmount={(v) => {
          setCustomAmount(v);
          const n = Number(v);
          setSelected(tiers.some((t) => t.amount === n) ? n : null);
        }}
        selected={selected}
        onClear={clearSelection}
      />
      <YourImpact />
      <DonorTestimonial />
      <TrustSecurity />
    </>
  );
}
