import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ImpactCounter } from "@/components/ImpactCounter";
import { Download, Quote, BarChart3, MapPin, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact",
  description: "See SHIFSD's measurable impact: 700+ beneficiaries, 722 youth trained, $6,092 saved by women's groups, and more across 7 Liberian counties.",
};

const impactMetrics = [
  { metric: "700+", label: "Direct Beneficiaries (2024)", description: "Individuals directly served across all program areas" },
  { metric: "722", label: "Youth Trained (EDC)", description: "Young people trained in Basic Education and Work Ready Now skills" },
  { metric: "150", label: "Women in VSLAs", description: "Rural women trained in Village Savings & Loan methodology" },
  { metric: "$6,092", label: "Savings Mobilized", description: "Saved by women's groups in just 8 months across 5 communities" },
  { metric: "125", label: "Businesses Established", description: "Women who established petty trading businesses after VSLA training" },
  { metric: "381", label: "Students Enrolled", description: "Students at Hummingbird Academy from Nursery through Senior High" },
  { metric: "30", label: "Literacy Communities", description: "Communities in Lofa County participating in adult literacy programs" },
  { metric: "1,000+", label: "TVET Graduates", description: "Graduates from Holy Hands Institute since its establishment in 2016" },
];

const stories = [
  {
    quote: "Through the VSLA program, I saved enough to start my own petty trading business. Now I can pay my children's school fees on my own.",
    name: "VSLA Member",
    location: "Nimba County",
    program: "VSLA Program",
    image: "/images/vsla-white.jpg",
  },
  {
    quote: "The Work Ready Now training gave me the soft skills and confidence I needed. I never thought I could present myself professionally in an interview.",
    name: "Youth Trainee",
    location: "Montserrado County",
    program: "EDC Youth Advance",
    image: "/images/training-graduates.jpg",
  },
  {
    quote: "Learning to read and write has changed everything for me. Now I can read letters from my children and help with community decisions.",
    name: "Adult Literacy Participant",
    location: "Lofa County",
    program: "Adult Literacy Program",
    image: "/images/vsla-nimba-outdoor.jpg",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider mb-3">Our Impact</p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Measuring What Matters
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Transparency and accountability are core values. Here&apos;s the evidence of 24 years of community transformation.
            </p>
          </div>
        </div>
      </section>

      <ImpactCounter />

      {/* Data & Results */}
      <section id="data" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="2024 Impact at a Glance" subtitle="Key metrics from our programs across seven Liberian counties." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((item) => (
              <div key={item.label} className="bg-gray-bg rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="font-[var(--font-heading)] text-3xl font-bold text-forest mb-1">{item.metric}</div>
                <div className="font-[var(--font-heading)] font-semibold text-sm text-charcoal mb-2">{item.label}</div>
                <p className="text-xs text-charcoal-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counties Map */}
      <section className="py-16 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Where We Work" subtitle="Active operations across seven Liberian counties." />
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { county: "Montserrado", programs: "HAC, HHI, EDC/Youth Advance" },
              { county: "Nimba", programs: "CSA, VSLAs, Farmland" },
              { county: "Lofa", programs: "Adult Literacy (30 communities)" },
              { county: "River Gee", programs: "Community Development" },
              { county: "Maryland", programs: "Community Development" },
              { county: "Bomi", programs: "Outreach Programs" },
              { county: "Cape Mount", programs: "Outreach Programs" },
            ].map((c) => (
              <div key={c.county} className="bg-white rounded-xl p-5 border border-gray-border">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-forest" />
                  <span className="font-[var(--font-heading)] font-bold text-charcoal">{c.county}</span>
                </div>
                <p className="text-xs text-charcoal-light">{c.programs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section id="stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Stories of Change" subtitle="Real voices from the communities we serve." />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.name} className="bg-gray-bg rounded-2xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={story.image} alt={`${story.program} - ${story.location}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                <Quote className="w-8 h-8 text-amber/40 mb-4" />
                <blockquote className="font-[var(--font-accent)] italic text-charcoal leading-relaxed mb-6">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-[var(--font-heading)] font-bold text-sm text-charcoal">{story.name}</p>
                  <p className="text-xs text-charcoal-light">{story.location} &bull; {story.program}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section id="reports" className="py-20 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Annual Reports & Documents" subtitle="Download our reports for detailed program outcomes and financial transparency." light />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Annual Report 2024", description: "Comprehensive overview of all programs, financials, and outcomes for 2024.", type: "PDF", href: "/docs/SHIFSD-Annual-Report-2024.pdf" },
              { title: "Strategic Plan 2024–2028", description: "Our five-year strategic vision and theory of change framework.", type: "PDF", href: "/docs/SHIFSD-Strategic-Plan-2024-2028.pdf" },
              { title: "Organizational Profile", description: "Detailed organizational background, governance, and accreditation details.", type: "PDF", href: "/docs/SHIFSD-Organizational-Profile.pdf" },
            ].map((doc) => (
              <div key={doc.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center">
                    <Download className="w-5 h-5 text-amber" />
                  </div>
                  <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded">{doc.type}</span>
                </div>
                <h3 className="font-[var(--font-heading)] font-bold mb-2">{doc.title}</h3>
                <p className="text-sm text-white/60 mb-4">{doc.description}</p>
                <a href={doc.href} target="_blank" rel="noopener noreferrer" download className="text-sm text-amber hover:text-amber-light font-semibold flex items-center gap-1">
                  <Download className="w-3 h-3" /> Download Report
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-white mb-4">
            Help Us Multiply This Impact
          </h2>
          <p className="text-white/90 mb-6">
            Every contribution amplifies our reach across Liberia&apos;s most underserved communities.
          </p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-white text-amber-dark font-[var(--font-heading)] font-bold px-8 py-3.5 rounded-full hover:shadow-lg transition-all">
            Donate Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
