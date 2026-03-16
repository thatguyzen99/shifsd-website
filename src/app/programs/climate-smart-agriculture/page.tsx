import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Leaf, MapPin, Users, Sprout, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Climate Smart Agriculture",
  description: "SHIFSD's Climate Smart Agriculture program: 28.1 acres of farmland, 25 communities reached, and 200 smallholder farmers trained in Nimba County.",
};

export default function CSAPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-6 h-6 text-amber" />
            <span className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider">Pillar 1</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
            Climate Smart Agriculture
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl font-[var(--font-accent)] italic">
            &ldquo;If communities invest in climate smart agriculture, the environment will be protected.&rdquo;
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: "28.1", label: "Acres of Farmland" },
            { value: "25", label: "Communities Reached" },
            { value: "500+", label: "CSA Awareness" },
            { value: "200", label: "Farmers Targeted" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-[var(--font-heading)] text-3xl font-bold text-amber">{s.value}</div>
              <div className="text-sm text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Program Overview" centered={false} />
              <div className="mt-6 space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  SHIFSD&apos;s Climate Smart Agriculture program addresses the urgent need for sustainable
                  farming practices across Liberia. With climate change threatening food security and
                  livelihoods, this pillar equips communities with the knowledge and resources to
                  protect their environment while improving agricultural productivity.
                </p>
                <p>
                  In 2023–2024, SHIFSD acquired 28.1 acres of farmland in Kpytuo Town, Nimba County,
                  establishing a demonstration site for CSA practices and agri-business ventures. This
                  site serves as both a learning center and a revenue-generating social enterprise.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-charcoal mb-6">Key Activities</h3>
              <ul className="space-y-4">
                {[
                  { icon: Sprout, text: "CSA awareness campaigns across 25 communities in Nimba County" },
                  { icon: MapPin, text: "28.1-acre demonstration site for sustainable farming practices" },
                  { icon: Users, text: "Training targeting 200 smallholder farmers in climate-resilient techniques" },
                  { icon: Leaf, text: "Food processing and value addition development for local crops" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-emerald-700" />
                      </div>
                      <span className="text-sm text-charcoal-light">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-learning */}
      <section className="py-16 bg-gray-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="Regional Learning" subtitle="SHIFSD organized an exchange visit to Sierra Leone for cross-learning and best practice sharing, strengthening regional collaboration in sustainable agriculture." />
          <Link href="/get-involved#partner" className="inline-flex items-center gap-2 mt-8 bg-forest hover:bg-forest-dark text-white font-[var(--font-heading)] font-semibold px-8 py-3.5 rounded-full text-sm transition-colors">
            Support This Program <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
