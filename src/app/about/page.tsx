import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Shield,
  Scale,
  Eye,
  Users,
  Heart,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SHIFSD Liberia's 24-year journey from a refugee camp in Ghana to one of Liberia's most trusted community development organizations.",
};

const timeline = [
  { year: "2000", title: "Founded in Ghana", description: "Established by Liberian refugees in the Central Region of Ghana on November 11, 2000 — born out of a spirit of self-help." },
  { year: "2005", title: "Registered in Liberia", description: "Officially registered with the Government of Liberia on May 30, 2005 as a non-profit, non-governmental organization." },
  { year: "2008", title: "Repatriated to Liberia", description: "Founders repatriated and eventually settled at the SHIFSD Multipurpose Youth Training Center in Johnsonville, Monrovia." },
  { year: "2016", title: "Holy Hands Institute Launched", description: "Established the TVET institution, now training youth in vocational skills with graduates working at LEC, LWSC, and more." },
  { year: "2023", title: "28.1 Acres Acquired", description: "Acquired farmland in Kpytuo Town, Nimba County for climate smart agriculture demonstration and agri-business." },
  { year: "2024", title: "700+ Beneficiaries Served", description: "Expanded reach across 7 counties with 722 youth trained, 150 women in VSLAs, and $6,092 saved in community groups." },
];

const coreValues = [
  { icon: Shield, name: "Integrity", description: "We communicate challenges to communities and donors in a timely manner." },
  { icon: Scale, name: "Justice", description: "We treat all staff members and stakeholders in a respectful, fair and honest manner." },
  { icon: Eye, name: "Transparency", description: "We remain open in the management of programs, answerable to communities, donors and partners." },
  { icon: Users, name: "Participation", description: "We value consensus building and shared leadership." },
  { icon: Heart, name: "Diversity", description: "We strive to accommodate and respect people of diverse backgrounds and affiliations." },
];

const leadership = [
  { name: "Jeremiah T. Burgess", role: "Executive Director", bio: "Founding member and visionary leader who established SHIFSD in a Ghanaian refugee camp. Over 24 years of community development leadership." },
  { name: "Board of Directors", role: "Governance", bio: "Providing strategic oversight, constitutional governance, and accountability in alignment with SHIFSD's mission and core values." },
  { name: "Program Directors", role: "Implementation", bio: "Leading program delivery across education, agriculture, and financial sustainability pillars across all operational counties." },
];

const partnersList = [
  { name: "EDC", description: "Leaders In Teaching (LIT) Project partner — youth education and workforce development across Montserrado and Bong Counties.", logo: "/images/partner-edc.webp" },
  { name: "All We Can (UK)", description: "Supporting adult literacy (REFLECT methodology), VSLA programming, and entrepreneurship training in Lofa and Nimba Counties.", logo: "/images/partner-allwecan.webp" },
  { name: "Mission Alliance", description: "Collaborative partner in community development and capacity building initiatives.", logo: "/images/partner-mission-alliance.webp" },
  { name: "YOCEL", description: "Youth-focused partnership supporting education and livelihood programming.", logo: "/images/partner-yocel.webp" },
  { name: "Brown Marital Trust", description: "Funding the new 14-classroom Holy Hands Institute building for expanded TVET education.", logo: null },
  { name: "Stichting INITIAT", description: "International partnership supporting SHIFSD's institutional development goals.", logo: "/images/partner-initiat.webp" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider mb-3">
              About SHIFSD Liberia
            </p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              24 Years of Practical Help for Self-Reliance
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              From a group of determined refugees in Ghana to one of Liberia&apos;s most trusted community
              development organizations — this is the story of SHIFSD.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Our Story" centered={false} />
              <div className="mt-8 space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  The Self-Help Initiative for Sustainable Development (SHIFSD) is a
                  refugee-inspired, nonprofit organization based on Christian values. Originally
                  established in the Central Region of Ghana by a group of Liberian refugees on
                  November 11, 2000, SHIFSD was born from a simple but powerful belief: instead of
                  waiting for help, we would create our own path forward.
                </p>
                <p>
                  Registered with the Government of Liberia on May 30, 2005, SHIFSD repatriated in
                  August 2008 and eventually settled at its own premises — the SHIFSD Multipurpose
                  Youth Training Center in Johnsonville, Monrovia. The organization is duly accredited
                  as a national NGO (MFDP/NGO/Acc# 531871651).
                </p>
                <p>
                  Today, SHIFSD operates across seven counties — Montserrado, Nimba, River Gee,
                  Maryland, Lofa, Bomi, and Cape Mount — serving over 700 direct beneficiaries
                  annually through three strategic pillars: Climate Smart Agriculture, Education &
                  Livelihood Skills, and Financial Sustainability.
                </p>
              </div>
            </div>
            <div className="bg-gray-bg rounded-2xl p-8">
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-charcoal mb-4">
                At a Glance
              </h3>
              <dl className="space-y-4">
                {[
                  { icon: Calendar, label: "Founded", value: "November 11, 2000" },
                  { icon: MapPin, label: "Headquarters", value: "Johnsonville, Monrovia" },
                  { icon: Award, label: "Accreditation", value: "MPEA/NGO/AC#0369" },
                  { icon: Users, label: "2024 Beneficiaries", value: "700+" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-forest" />
                      </div>
                      <div>
                        <dt className="text-xs text-charcoal-light uppercase tracking-wider">{item.label}</dt>
                        <dd className="font-semibold text-charcoal">{item.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-forest">
              <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-wider text-forest mb-3">
                Our Vision
              </h3>
              <p className="text-xl font-[var(--font-accent)] italic text-charcoal leading-relaxed">
                SHIFSD envisages a society free of illiteracy and poverty.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-amber">
              <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-wider text-amber-dark mb-3">
                Our Mission
              </h3>
              <p className="text-xl font-[var(--font-accent)] italic text-charcoal leading-relaxed">
                SHIFSD exists to alleviate poverty through access to alternative sources of education
                and entrepreneurship.
              </p>
            </div>
          </div>

          <SectionHeading title="Our Core Values" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className="bg-white rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-forest" />
                  </div>
                  <h4 className="font-[var(--font-heading)] font-bold text-charcoal mb-2">
                    {value.name}
                  </h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Journey" subtitle="From refugee camp to community catalyst — two decades of impact." />
          <div className="mt-12 relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-forest/20" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-14">
                  <div className="absolute left-0 w-11 h-11 rounded-full bg-forest text-white flex items-center justify-center font-[var(--font-heading)] font-bold text-xs">
                    {item.year}
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-charcoal text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Leadership" subtitle="Guided by experienced leadership committed to community transformation." />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <div key={person.name} className="bg-white rounded-2xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={["/images/hero-community.webp", "/images/tvet-trainees.webp", "/images/vsla-nimba-meeting.webp"][i]}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[var(--font-heading)] font-bold text-charcoal">
                    {person.name}
                  </h3>
                  <p className="text-sm text-forest font-semibold mb-3">{person.role}</p>
                  <p className="text-sm text-charcoal-light leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Partners" subtitle="We are proud to collaborate with organizations that share our vision for a better Liberia." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersList.map((partner) => (
              <div key={partner.name} className="rounded-xl border border-gray-border p-6 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl bg-white flex items-center justify-center mb-4 overflow-hidden">
                  {partner.logo ? (
                    <img loading="lazy" src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain" />
                  ) : (
                    <div className="w-20 h-20 rounded-lg bg-deep-blue/10 flex items-center justify-center">
                      <Handshake className="w-8 h-8 text-deep-blue" />
                    </div>
                  )}
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-charcoal mb-2">{partner.name}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="py-20 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="SHIFSD Institutions" subtitle="Three entities working together toward a common mission." light />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { name: "Hummingbird Academy (HAC)", logo: "/images/logo-hac.webp", motto: "Applied Knowledge is Power", est: "Est. 2016", description: "Accredited academic school running from Nursery to Senior Secondary (Grade 10), serving 381 students with 16 dedicated teaching staff at the SMYTC campus." },
              { name: "Holy Hands Institute (HHI)", logo: "/images/logo-hhi.webp", motto: "Meeting Needs and Healing Hearts", est: "Est. 2016", description: "Accredited TVET institution graduating over 1,000 trainees in welding, auto mechanics, cosmetology, and electrical — many now employed at LEC, LWSC, and other national entities." },
              { name: "LightUp The Bible Ministries (LBM)", logo: "/images/logo-lbm.webp", motto: "Discover What The Bible Really Says", est: "", description: "Registered Christian ministry serving as the spiritual arm of SHIFSD, providing faith-based support and community upliftment." },
            ].map((inst) => (
              <div key={inst.name} className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-24 h-24 mx-auto mb-5 bg-white rounded-2xl p-2 flex items-center justify-center">
                  <img loading="lazy" src={inst.logo} alt={inst.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-amber text-lg mb-1">
                  {inst.name}
                </h3>
                <p className="text-white/50 text-xs font-[var(--font-accent)] italic mb-3">
                  {inst.motto}{inst.est ? ` • ${inst.est}` : ""}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{inst.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
