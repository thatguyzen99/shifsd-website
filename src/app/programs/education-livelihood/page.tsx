import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { GraduationCap, BookOpen, Wrench, Users, DollarSign, ArrowRight, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Livelihood Skills",
  description: "SHIFSD's Education & Livelihood Skills program: Hummingbird Academy, Holy Hands Institute TVET, adult literacy, VSLA savings, and youth workforce training.",
};

const subPrograms = [
  {
    icon: BookOpen,
    title: "Hummingbird Academy (HAC)",
    stats: "381 students • 141 boys, 240 girls • 16 staff",
    description: "Accredited academic school running from Nursery through Senior High (Grade 10), located at the SHIFSD Multipurpose Youth Training Center in Johnsonville, Montserrado County.",
    color: "bg-blue-50 border-blue-200",
    image: "/images/hac-students-outdoor.webp",
  },
  {
    icon: Wrench,
    title: "Holy Hands Institute (HHI) — TVET",
    stats: "1,000+ graduates • New 14-classroom building",
    description: "Accredited technical and vocational education institution established in 2016. Graduates work at LEC, LWSC, and other national entities. New facility funded by the Brown Marital Trust. Programs include Electricity, Plumbing, and more.",
    color: "bg-indigo-50 border-indigo-200",
    image: "/images/hhi-tvet-trainees.webp",
  },
  {
    icon: GraduationCap,
    title: "EDC Leaders In Teaching (LIT) Partnership",
    stats: "722 youth trained • 18+ communities • National TOTs",
    description: "Partnership with EDC delivering Basic Education and Work Ready Now (soft skills) training across Montserrado County. SHIFSD serves as a regional implementing partner for the Leaders In Teaching (LIT) Project, with national Training of Trainers and Master Teacher onboarding.",
    color: "bg-sky-50 border-sky-200",
    image: "/images/lit-tot-goodridge.webp",
  },
  {
    icon: BookOpen,
    title: "Adult Literacy Program (ALP)",
    stats: "30 communities • Lofa County • REFLECT methodology",
    description: "Supported by All We Can (AWC UK), this program uses the REFLECT methodology to deliver adult literacy education across 30 communities in Lofa County, empowering adults to participate more fully in their communities.",
    color: "bg-teal-50 border-teal-200",
    image: "/images/alp-lofa-grads-2025.webp",
  },
  {
    icon: DollarSign,
    title: "Village Savings & Loan Associations (VSLAs)",
    stats: "150 women • $6,092 saved • 5 communities",
    description: "In Nimba County, 150 rural women were trained in VSLA methodology, saving $6,092 USD in just 8 months. 125 women established petty trading businesses, transforming household economics.",
    color: "bg-emerald-50 border-emerald-200",
    image: "/images/vsla-green.webp",
  },
  {
    icon: Award,
    title: "Entrepreneurship Training",
    stats: "145 women • 6-day program • June 2024",
    description: "Funded by All We Can and Otto 8 Per Miles, this intensive training equipped 145 women with business skills, financial literacy, and entrepreneurial confidence.",
    color: "bg-amber-50 border-amber-200",
    image: "/images/training-graduates.webp",
  },
];

export default function EducationPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-amber" />
            <span className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider">Pillar 2</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
            Education & Livelihood Skills
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl font-[var(--font-accent)] italic">
            &ldquo;If young people are literate, have marketable skills, and women have access to loans, their livelihood will improve.&rdquo;
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10 pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "381", label: "Students at HAC", icon: "🎓" },
              { value: "722", label: "Youth Trained (EDC)", icon: "👨‍💼" },
              { value: "150", label: "Women in VSLAs", icon: "👩‍🤝‍👩" },
              { value: "$6,092", label: "Saved in 8 Months", icon: "💰" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl shadow-lg border border-gray-border p-5 text-center hover:shadow-xl transition-shadow">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-[var(--font-heading)] text-3xl font-bold text-forest">{s.value}</div>
                <div className="text-xs font-semibold text-charcoal-light mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Sub-Programs" subtitle="Six interconnected programs working together to transform education and livelihoods." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {subPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <div key={program.title} className={`rounded-2xl border ${program.color} overflow-hidden`}>
                  {program.image && (
                    <div className="h-48 overflow-hidden">
                      <img loading="lazy" src={program.image} alt={program.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-[var(--font-heading)] font-bold text-charcoal text-lg">{program.title}</h3>
                        <p className="text-xs font-semibold text-forest mt-1">{program.stats}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-charcoal-light leading-relaxed">{program.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-[var(--font-heading)] font-semibold px-8 py-3.5 rounded-full transition-colors">
              Support Education <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
