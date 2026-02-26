import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { TrendingUp, Building, Sprout, Factory, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Sustainability",
  description: "SHIFSD's Financial Sustainability pillar: social enterprise, agri-business investment, and revenue diversification for long-term institutional resilience.",
};

export default function FinancialPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-amber" />
            <span className="text-amber-300 font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider">Pillar 3</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
            Financial Sustainability
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl font-[var(--font-accent)] italic">
            &ldquo;If investment is made in agriculture and entrepreneurship, the institution will become financially sustainable.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Building Institutional Resilience" subtitle="Ensuring SHIFSD can continue serving communities for decades to come through diversified, sustainable revenue." />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Building,
                title: "Social Enterprise Model",
                description: "Hummingbird Academy and Holy Hands Institute generate operational revenue through school fees and vocational training programs, creating a sustainable funding base that reduces donor dependency.",
              },
              {
                icon: Sprout,
                title: "Agricultural Investment",
                description: "The 28.1-acre farmland in Kpytuo Town, Nimba County serves dual purposes: a CSA demonstration site and an agri-business venture generating institutional revenue through crop production and sales.",
              },
              {
                icon: Factory,
                title: "Food Processing & Value Addition",
                description: "Developing food processing capabilities to add value to agricultural products, increasing revenue potential and creating local employment opportunities in Nimba County.",
              },
              {
                icon: BarChart3,
                title: "Revenue Diversification",
                description: "Strategic development of multiple income streams — school operations, agricultural production, vocational training, and social enterprise — to ensure long-term institutional sustainability.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-gray-border p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-amber-dark" />
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-charcoal text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-forest-dark rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="font-[var(--font-heading)] text-2xl font-bold mb-4">Invest in Sustainable Impact</h3>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Your partnership helps SHIFSD build the financial resilience needed to serve communities
              for generations. Every investment multiplies through our social enterprise model.
            </p>
            <Link href="/get-involved#partner" className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-[var(--font-heading)] font-semibold px-8 py-3.5 rounded-full transition-colors">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
