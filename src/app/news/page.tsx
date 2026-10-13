"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { articles, type Article, type ArticleCategory } from "./articles";

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

// ─── 1. Hero ────────────────────────────────────────────────────
function Hero() {
  return (
    <section data-node-id="53:19" className="bg-deep-canopy">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-5 text-center text-white"
        >
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-semibold text-[34px] leading-[42px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]"
            style={{ letterSpacing: "-1px" }}
          >
            News &amp; Media
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] text-white/85 max-w-[820px]"
          >
            Stories from the field, program updates, and media coverage of our
            work across Liberia.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Featured Article ────────────────────────────────────────
const featured: Article = articles.find((a) => a.featured) ?? articles[0];
const others = articles.filter((a) => a.slug !== featured.slug);

function FeaturedArticle() {
  return (
    <section id="featured" data-node-id="53:22" className="bg-gray-50 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <motion.div
            variants={fadeUp}
            className="w-full lg:w-[600px] shrink-0"
          >
            <div className="h-[400px] rounded-2xl overflow-hidden border-[6px] border-canopy-light">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-4">
            <span className="self-start bg-warm-teal/10 text-warm-teal text-[12px] font-semibold rounded-full px-3 py-1">
              FEATURED
            </span>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[28px] leading-[36px]"
              style={{ letterSpacing: "-0.25px" }}
            >
              {featured.title}
            </h2>
            <p className="text-gray-600 text-[16px] leading-[26px]">
              {featured.excerpt}
            </p>
            <p className="text-gray-400 text-[13px]">{featured.date}</p>
            <Link
              href={`/news/${featured.slug}`}
              className="text-warm-teal text-[16px] font-semibold hover:underline self-start"
            >
              Read Full Story →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Article Grid ────────────────────────────────────────────
const categoryStyle: Record<ArticleCategory, string> = {
  Agriculture: "bg-warm-teal/10 text-warm-teal",
  Education: "bg-liberian-flame/10 text-liberian-flame",
  Partnership: "bg-horizon-gold/10 text-horizon-gold",
  Impact: "bg-horizon-gold/10 text-horizon-gold",
  Youth: "bg-liberian-flame/10 text-liberian-flame",
  Community: "bg-warm-teal/10 text-warm-teal",
};

function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      variants={fadeUp}
      className="bg-gold-light border border-gray-200 rounded-xl overflow-hidden flex flex-col p-[5px]"
    >
      <Link href={`/news/${article.slug}`} className="flex flex-col h-full">
        <div className="h-[200px] rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 p-5 flex-1">
          <span
            className={`${categoryStyle[article.category]} self-start text-[11px] font-semibold rounded-full px-3 py-1`}
          >
            {article.category}
          </span>
          <h3
            className="font-[family-name:var(--font-accent)] font-semibold text-deep-canopy text-[22px] leading-[28px] flex-1"
            style={{ letterSpacing: "-0.5px" }}
          >
            {article.title}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-gray-400 text-[12px]">{article.date}</span>
            <span className="bg-warm-teal text-white text-[13px] font-semibold rounded-full pl-3 pr-1 py-1 inline-flex items-center gap-2">
              Read
              <span className="bg-gold-light text-warm-teal rounded-full h-[22px] min-w-[36px] px-1 flex items-center justify-center">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function ArticleGrid() {
  return (
    <section id="latest" data-node-id="53:31" className="bg-warm-sand scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 pt-12 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col gap-8"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[28px] leading-[36px]"
            style={{ letterSpacing: "-0.25px" }}
          >
            Latest Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Newsletter ──────────────────────────────────────────────
function Newsletter() {
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
    <section id="newsletter" data-node-id="53:90" className="bg-horizon-gold scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[24px] leading-[32px]">
              Stay Updated
            </h2>
            <p className="text-deep-canopy/75 text-[15px]">
              Get the latest stories and updates delivered to your inbox.
            </p>
          </motion.div>

          <motion.form
            ref={formRef}
            variants={fadeUp}
            onSubmit={onSubmit}
            name="newsletter"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>
            <label htmlFor="news-email" className="sr-only">
              Email
            </label>
            <input
              id="news-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="bg-white h-12 rounded-lg px-4 text-[15px] text-deep-canopy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-deep-canopy/20 w-full sm:w-[260px]"
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="bg-deep-canopy hover:bg-deep-canopy/90 disabled:bg-gray-500 text-white text-[15px] font-semibold rounded-lg px-6 h-12 transition-colors"
            >
              {state === "sending" ? "Sending…" : state === "sent" ? "Subscribed ✓" : "Subscribe"}
            </button>
          </motion.form>
        </motion.div>
        {state === "error" && (
          <p className="mt-3 text-deep-canopy/80 text-[13px]">
            Couldn&apos;t submit — try again or email{" "}
            <a className="underline" href="mailto:shifsdliberia@gmail.com">
              shifsdliberia@gmail.com
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function NewsPage() {
  return (
    <>
      <Hero />
      <FeaturedArticle />
      <ArticleGrid />
      <Newsletter />
    </>
  );
}
