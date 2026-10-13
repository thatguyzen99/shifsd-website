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

export default function PrivacyPage() {
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
              <span>Privacy Policy</span>
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] font-semibold text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
              style={{ letterSpacing: "-1px" }}
            >
              Privacy Policy
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
              SHIFSD (Self-Help Initiative for Sustainable Development) respects
              your privacy. This policy explains what information we collect
              when you use this website, how we use it, and the choices you
              have. If anything here is unclear, email{" "}
              <a
                href="mailto:shifsdliberia@gmail.com"
                className="text-warm-teal underline"
              >
                shifsdliberia@gmail.com
              </a>{" "}
              and we will do our best to answer plainly.
            </motion.p>

            <Section title="What we collect">
              <p>
                <strong>Information you give us.</strong> When you use one of
                our forms — Contact, Volunteer, Partnership, or Newsletter — we
                collect the details you enter, such as your name, email
                address, organisation, and message. We only collect what those
                forms ask for.
              </p>
              <p>
                <strong>Information collected automatically.</strong> Our
                hosting provider records basic technical information (IP
                address, browser, pages visited) for security, spam prevention,
                and aggregated analytics. We do not run any third-party
                behavioural advertising trackers.
              </p>
              <p>
                <strong>Donations.</strong> If you donate through GlobalGiving
                or another external platform, that platform collects your
                payment details directly. SHIFSD does not receive, store, or
                process card information.
              </p>
            </Section>

            <Section title="How we use your information">
              <ul className="flex flex-col gap-2.5 list-none">
                <Bullet>
                  To respond to your enquiry, volunteer application, or
                  partnership request.
                </Bullet>
                <Bullet>
                  To send you the newsletter if you subscribed. You can
                  unsubscribe at any time using the link at the bottom of
                  every email.
                </Bullet>
                <Bullet>
                  To keep our programs, financial records, and reporting
                  accurate — for example, acknowledging a donation for tax or
                  audit purposes.
                </Bullet>
                <Bullet>
                  To protect the site and its visitors from abuse, spam, and
                  fraud.
                </Bullet>
              </ul>
            </Section>

            <Section title="How we share your information">
              <p>
                We do not sell or rent personal information. We share it only
                with:
              </p>
              <ul className="flex flex-col gap-2.5 list-none">
                <Bullet>
                  Service providers who help us operate the site (hosting,
                  form-submission handling, email delivery). Each is bound by
                  their own privacy commitments.
                </Bullet>
                <Bullet>
                  Program partners, when your enquiry is directly relevant to
                  a joint program and you have asked to be introduced.
                </Bullet>
                <Bullet>
                  Government or regulatory authorities, if required by
                  applicable law.
                </Bullet>
              </ul>
            </Section>

            <Section title="How long we keep it">
              <p>
                Form submissions are retained for as long as we may reasonably
                need to follow up with you and to meet our record-keeping
                obligations as an accredited NGO. Newsletter subscriptions are
                kept until you unsubscribe. Aggregated, anonymised analytics
                may be kept indefinitely.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You may ask us at any time to:
              </p>
              <ul className="flex flex-col gap-2.5 list-none">
                <Bullet>Access the personal information we hold about you.</Bullet>
                <Bullet>Correct anything that is inaccurate.</Bullet>
                <Bullet>Delete your information, subject to our reporting obligations.</Bullet>
                <Bullet>Unsubscribe from the newsletter or any other mailing list.</Bullet>
              </ul>
              <p>
                Write to{" "}
                <a
                  href="mailto:shifsdliberia@gmail.com"
                  className="text-warm-teal underline"
                >
                  shifsdliberia@gmail.com
                </a>{" "}
                and we will confirm within a reasonable time.
              </p>
            </Section>

            <Section title="Children">
              <p>
                This site is not directed at children under 13. We do not
                knowingly collect personal information from children. If you
                believe a child has submitted personal information, please
                contact us and we will delete it.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                We use a small number of cookies necessary for the site to
                function (for example, remembering that a form was submitted).
                We do not use advertising cookies. You can disable cookies in
                your browser; some parts of the site may then behave
                differently.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this policy from time to time. When we do, we
                will change the &ldquo;Last updated&rdquo; date at the top.
                Material changes will be announced on the homepage.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:shifsdliberia@gmail.com"
                  className="text-warm-teal underline"
                >
                  shifsdliberia@gmail.com
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
