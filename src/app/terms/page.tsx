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
  visible: { transition: { staggerChildren: 0.08 } },
};

const lastUpdated = "September 2, 2026";

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-deep-canopy">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[860px] mx-auto flex flex-col gap-5 text-center text-white"
          >
            <motion.p variants={fadeUp} className="text-[13px] text-white/50">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <span className="px-2">/</span>
              <span>Terms of Service</span>
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] font-semibold text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
              style={{ letterSpacing: "-1px" }}
            >
              Terms of Service
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-[14px]">
              Last updated: {lastUpdated}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-[760px] mx-auto flex flex-col gap-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-gray-700 text-[17px] leading-[30px]"
            >
              These terms govern your use of the SHIFSD Liberia website. By
              using the site you agree to them. If you don&apos;t, please
              stop using the site. If anything is unclear, email{" "}
              <a
                href="mailto:info@shifsd-liberia.org"
                className="text-warm-teal underline"
              >
                info@shifsd-liberia.org
              </a>
              .
            </motion.p>

            <Section title="Who we are">
              <p>
                &ldquo;SHIFSD&rdquo; refers to Self-Help Initiative for
                Sustainable Development Inc., an accredited non-governmental
                organisation registered with the Government of Liberia
                (MPEA/NGO/AC#0369). Our office is at Block C, Lee Hill
                Community, Johnsonville Township, Monrovia, Liberia.
              </p>
            </Section>

            <Section title="Using the site">
              <p>You agree to use this site only for lawful purposes and to:</p>
              <ul className="flex flex-col gap-2.5 list-none">
                <Bullet>
                  Not misrepresent yourself, your organisation, or your
                  affiliations.
                </Bullet>
                <Bullet>
                  Not upload or transmit content that is illegal, harmful,
                  abusive, or infringing.
                </Bullet>
                <Bullet>
                  Not attempt to interfere with the site&apos;s operation, its
                  security, or other visitors&apos; access to it.
                </Bullet>
              </ul>
            </Section>

            <Section title="Content ownership">
              <p>
                All text, images, program materials, and design elements on
                this site are either owned by SHIFSD or used with the
                permission of their owners. You may share, quote, and link to
                our content for non-commercial informational purposes with a
                clear credit to SHIFSD Liberia. Commercial re-use requires
                written permission.
              </p>
              <p>
                Program photos featuring identifiable community members are
                published with their informed consent.
              </p>
            </Section>

            <Section title="Donations">
              <p>
                Donations made through this site — via GlobalGiving, direct
                bank transfer, or mobile money — go to SHIFSD&apos;s program
                and operating budget. Our 2024 Annual Report is available on
                our Impact page.
              </p>
              <p>
                Where a donation is designated for a specific program, we use
                it for that program. If the program is over-subscribed or
                cannot proceed, we contact the donor and either return the
                donation or redirect it with the donor&apos;s consent.
              </p>
              <p>
                Third-party donation platforms (such as GlobalGiving) have
                their own terms that apply in addition to these.
              </p>
            </Section>

            <Section title="Volunteer and partnership applications">
              <p>
                Submitting a volunteer application or partnership request does
                not create an obligation on either side. We review each
                application in good faith and respond as soon as capacity
                allows. Placement is subject to a suitability review and, in
                some cases, a background check.
              </p>
            </Section>

            <Section title="External links">
              <p>
                This site links to third-party sites (for example, partner
                organisations and GlobalGiving). We do not control those
                sites and are not responsible for their content or their
                practices.
              </p>
            </Section>

            <Section title="Disclaimers">
              <p>
                We do our best to keep content accurate and up to date, but
                we don&apos;t warrant that everything on the site is
                error-free or current at every moment. Program figures are
                drawn from our annual reporting; the definitive version is
                the published Annual Impact Report.
              </p>
              <p>
                The site is provided &ldquo;as is&rdquo;. SHIFSD will not be
                liable for indirect or consequential losses arising from
                using or being unable to use the site, to the fullest extent
                permitted by applicable law.
              </p>
            </Section>

            <Section title="Changes to these terms">
              <p>
                We may update these terms from time to time. When we do, we
                will change the &ldquo;Last updated&rdquo; date at the top.
                Continued use of the site after a change means you accept
                the new terms.
              </p>
            </Section>

            <Section title="Governing law">
              <p>
                These terms are governed by the laws of the Republic of
                Liberia. Any dispute that cannot be resolved amicably will be
                submitted to the competent courts of Monrovia.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:info@shifsd-liberia.org"
                  className="text-warm-teal underline"
                >
                  info@shifsd-liberia.org
                </a>{" "}
                or mailed to Block C, Lee Hill Community, Johnsonville
                Township, Monrovia, Liberia.
              </p>
            </Section>
          </motion.article>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-3">
      <h2
        className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[22px] leading-[30px] mt-4"
        style={{ letterSpacing: "-0.25px" }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-gray-700 text-[16px] leading-[28px]">
        {children}
      </div>
    </motion.div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <span
        className="text-warm-teal font-semibold shrink-0 mt-1"
        aria-hidden
      >
        →
      </span>
      <span>{children}</span>
    </li>
  );
}
