"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Article, ArticleCategory } from "../articles";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

const categoryStyle: Record<ArticleCategory, string> = {
  Agriculture: "bg-warm-teal/10 text-warm-teal",
  Education: "bg-liberian-flame/10 text-liberian-flame",
  Partnership: "bg-horizon-gold/10 text-horizon-gold",
  Impact: "bg-horizon-gold/10 text-horizon-gold",
  Youth: "bg-liberian-flame/10 text-liberian-flame",
  Community: "bg-warm-teal/10 text-warm-teal",
};

export default function ArticleClient({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-deep-canopy">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[860px] mx-auto flex flex-col gap-5 text-center"
          >
            <motion.p variants={fadeUp} className="text-[13px] text-white/50">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <span className="px-2">/</span>
              <Link
                href="/news"
                className="hover:text-white/80 transition-colors"
              >
                News &amp; Media
              </Link>
              <span className="px-2">/</span>
              <span>{article.category}</span>
            </motion.p>
            <motion.div variants={fadeUp}>
              <span
                className={`inline-block ${categoryStyle[article.category]} text-[11px] font-semibold rounded-full px-3 py-1`}
              >
                {article.category}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] font-semibold text-white text-[36px] sm:text-[44px] leading-[1.15]"
              style={{ letterSpacing: "-0.5px" }}
            >
              {article.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-[14px]">
              <time dateTime={article.isoDate}>{article.date}</time>
              <span className="px-2">·</span>
              <span>SHIFSD Team</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured image ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 -mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="rounded-2xl overflow-hidden border-[6px] border-canopy-light max-w-[900px] mx-auto"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
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
            className="max-w-[720px] mx-auto flex flex-col gap-6"
          >
            <motion.p
              variants={fadeUp}
              className="font-[family-name:var(--font-accent)] italic text-deep-canopy text-[20px] leading-[32px]"
            >
              {article.excerpt}
            </motion.p>

            {article.body.map((block, i) => {
              if (block.type === "p") {
                return (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-gray-700 text-[17px] leading-[30px]"
                  >
                    {block.text}
                  </motion.p>
                );
              }
              if (block.type === "h2") {
                return (
                  <motion.h2
                    key={i}
                    variants={fadeUp}
                    className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[24px] leading-[32px] mt-2"
                  >
                    {block.text}
                  </motion.h2>
                );
              }
              if (block.type === "list") {
                return (
                  <motion.ul
                    key={i}
                    variants={fadeUp}
                    className="flex flex-col gap-2.5"
                  >
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 items-start text-gray-700 text-[17px] leading-[28px]"
                      >
                        <span
                          className="text-warm-teal font-semibold shrink-0 mt-1"
                          aria-hidden
                        >
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <motion.blockquote
                    key={i}
                    variants={fadeUp}
                    className="border-l-4 border-liberian-flame pl-6 py-2 flex flex-col gap-2"
                  >
                    <p className="font-[family-name:var(--font-accent)] italic text-deep-canopy text-[20px] leading-[32px]">
                      &ldquo;{block.text}&rdquo;
                    </p>
                    {block.attribution && (
                      <p className="text-gray-500 text-[14px] font-medium">
                        — {block.attribution}
                      </p>
                    )}
                  </motion.blockquote>
                );
              }
              return null;
            })}
          </motion.article>
        </div>
      </section>

      {/* ── Related articles ────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-warm-sand">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="flex flex-col gap-8"
            >
              <motion.div
                variants={fadeUp}
                className="flex items-end justify-between gap-4 flex-wrap"
              >
                <h2
                  className="font-[family-name:var(--font-heading)] font-semibold text-deep-canopy text-[28px] leading-[36px]"
                  style={{ letterSpacing: "-0.25px" }}
                >
                  Related stories
                </h2>
                <Link
                  href="/news#latest"
                  className="text-warm-teal text-[15px] font-semibold hover:underline"
                >
                  All articles →
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((a) => (
                  <motion.article
                    key={a.slug}
                    variants={fadeUp}
                    className="bg-gold-light border border-gray-200 rounded-xl overflow-hidden flex flex-col p-[5px]"
                  >
                    <Link
                      href={`/news/${a.slug}`}
                      className="flex flex-col h-full"
                    >
                      <div className="h-[180px] rounded-lg overflow-hidden">
                        <img
                          src={a.image}
                          alt={a.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-3 p-5 flex-1">
                        <span
                          className={`${categoryStyle[a.category]} self-start text-[11px] font-semibold rounded-full px-3 py-1`}
                        >
                          {a.category}
                        </span>
                        <h3
                          className="font-[family-name:var(--font-accent)] font-semibold text-deep-canopy text-[20px] leading-[26px] flex-1"
                          style={{ letterSpacing: "-0.5px" }}
                        >
                          {a.title}
                        </h3>
                        <span className="text-gray-400 text-[12px]">
                          {a.date}
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Back link ───────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-30 py-12 flex justify-center">
          <Link
            href="/news#latest"
            className="inline-flex items-center gap-2 border-2 border-warm-teal text-warm-teal hover:bg-warm-teal hover:text-white text-[16px] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
