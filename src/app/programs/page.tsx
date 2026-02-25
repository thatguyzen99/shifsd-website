import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Leaf, GraduationCap, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore SHIFSD's three strategic pillars: Climate Smart Agriculture, Education & Livelihood Skills, and Financial Sustainability.",
};

const programs = [
  {
    icon: Leaf,
    pillar: "Pillar 1",
    title: "Climate Smart Agriculture",
    theory: "If communities invest in climate smart agriculture, the environment will be protected.",
    stats: ["28.1 acres farmland", "25 communities", "500+ people aware", "200 farmers targeted"],
    description: "Protecting the environment and food security through sustainable farming practices, CSA awareness campaigns, and demonstration farmland development across Nimba County.",
    href: "/programs/climate-smart-agriculture",
    color: "border-emerald-500",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: GraduationCap,
    pillar: "Pillar 2",
    title: "Education & Livelihood Skills",
    theory: "If young people are literate, have marketable skills, and women have access to loans, their livelihood will improve.",
    stats: ["381 students at HAC", "722 youth trained", "150 women in VSLAs", "$6,092 saved"],
    description: "Empowering youth, women, and communities through formal education, TVET, adult literacy, VSLA savings groups, and entrepreneurship training across multiple counties.",
    href: "/programs/education-livelihood",
    color: "border-blue-500",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    pillar: "Pillar 3",
    title: "Financial Sustainability",
    theory: "If investment is made in agriculture and entrepreneurship, the institution will become financially sustainable.",
    stats: ["Social enterprise model", "28.1 acres agri-business", "Revenue diversification", "Value addition"],
    description: "Building institutional resilience through social enterprise from school operations, agricultural investment, food processing, and diversified revenue streams.",
    href: "/programs/financial-sustainability",
    color: "border-amber-500",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider mb-3">Our Programs</p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Three Pillars, One Mission
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Guided by our 2024–2028 Strategic Plan and grounded in our Theory of Change, each pillar
              addresses interconnected barriers to sustainable development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className={`rounded-2xl border-l-4 ${program.color} bg-white shadow-sm hover:shadow-lg transition-shadow p-8 md:p-10`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${program.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${program.iconColor}`} />
                      </div>
                      <span className="text-xs font-[var(--font-heading)] font-bold uppercase tracking-wider text-charcoal-light">
                        {program.pillar}
                      </span>
                    </div>
                    <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-charcoal mb-3">
                      {program.title}
                    </h2>
                    <blockquote className="font-[var(--font-accent)] italic text-charcoal-light text-lg mb-4 border-l-2 border-amber pl-4">
                      &ldquo;{program.theory}&rdquo;
                    </blockquote>
                    <p className="text-charcoal-light leading-relaxed mb-6">{program.description}</p>
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-[var(--font-heading)] font-semibold px-6 py-3 rounded-full text-sm transition-colors"
                    >
                      Explore This Program <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {program.stats.map((stat) => (
                      <div key={stat} className={`${program.bgColor} rounded-xl p-4 text-center`}>
                        <span className={`font-[var(--font-heading)] font-bold text-sm ${program.iconColor}`}>
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
