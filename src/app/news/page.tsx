import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Calendar, Tag, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Media",
  description: "Latest news, program updates, photo galleries, and stories from SHIFSD Liberia's community development work across seven counties.",
};

const blogPosts = [
  {
    title: "EDC Leaders In Teaching (LIT) National TOTs Launch at Goodridge School",
    excerpt: "SHIFSD partnered with EDC to launch the Leaders In Teaching (LIT) national Training of Trainers at E.J. Goodridge School in Barnersville, strengthening education leadership across Montserrado County.",
    date: "February 2025",
    tag: "Education",
    featured: true,
    image: "/images/lit-tot-goodridge.jpg",
  },
  {
    title: "SHIFSD Reaches 1,187+ Beneficiaries Across Liberia",
    excerpt: "From 2024 to present, SHIFSD has impacted over 1,187 beneficiaries across the country through education, livelihood skills, TVET training, and community development programs.",
    date: "February 2025",
    tag: "Impact",
    featured: true,
    image: "/images/shifsd-lit-onboarding.jpg",
  },
  {
    title: "EDC LIT Master Trainers Onboarded at SHIFSD Center",
    excerpt: "Master Trainers for the EDC Leaders In Teaching project were onboarded at the SHIFSD Multipurpose Youth Training Center in Johnsonville, preparing them to lead education transformation.",
    date: "January 2025",
    tag: "Education",
    featured: false,
    image: "/images/lit-master-teachers-center.jpg",
  },
  {
    title: "SHIFSD Orientation Meeting at Main Office",
    excerpt: "A well-attended orientation meeting was held at the main office of SHIFSD in Lee Hill Community, Johnsonville Avenue. Bravo to all who made this a success — we are indeed grateful.",
    date: "January 2025",
    tag: "Organization",
    featured: false,
    image: "/images/shifsd-office-johnsonville.jpg",
  },
  {
    title: "Adult Literacy Level 1 Graduates in Lofa County",
    excerpt: "SHIFSD celebrated its 2025 Adult Literacy Level 1 graduates in Lofa County, empowering adults to read, write, and participate more fully in their communities through the REFLECT methodology.",
    date: "January 2025",
    tag: "Literacy",
    featured: false,
    image: "/images/alp-lofa-grads-2025.jpg",
  },
  {
    title: "722 Youth Complete EDC Work Ready Now Training",
    excerpt: "In partnership with EDC, SHIFSD trained 722 youth in Basic Education and Work Ready Now soft skills across 18+ communities in Montserrado County, preparing them for the workforce.",
    date: "December 2024",
    tag: "Education",
    featured: false,
    image: "/images/hero-community.jpg",
  },
  {
    title: "150 Women Transform Lives Through VSLA Savings",
    excerpt: "Women in five Nimba County communities saved $6,092 in just 8 months through SHIFSD's VSLA program, with 125 women establishing their own petty trading businesses.",
    date: "November 2024",
    tag: "Livelihoods",
    featured: false,
    image: "/images/vsla-green.jpg",
  },
  {
    title: "New 14-Classroom School Building Under Construction",
    excerpt: "Funded by the Brown Marital Trust, the new Holy Hands Institute facility will dramatically expand TVET capacity, offering state-of-the-art vocational training.",
    date: "October 2024",
    tag: "Infrastructure",
    featured: false,
  },
  {
    title: "145 Women Graduate Entrepreneurship Training",
    excerpt: "Funded by All We Can and Otto 8 Per Miles, the six-day intensive training equipped women with business planning, financial literacy, and market access skills.",
    date: "June 2024",
    tag: "Training",
    featured: false,
  },
];

const galleryCategories = [
  { name: "LIT Training of Trainers", count: "Goodridge School", color: "bg-blue-100 text-blue-800", image: "/images/lit-tot-goodridge.jpg" },
  { name: "LIT Master Trainers", count: "SHIFSD Center", color: "bg-indigo-100 text-indigo-800", image: "/images/lit-master-teachers-center.jpg" },
  { name: "LIT School Leaders", count: "Montserrado County", color: "bg-sky-100 text-sky-800", image: "/images/lit-school-leaders-training.jpg" },
  { name: "SHIFSD Director at LIT", count: "Onboarding Meeting", color: "bg-violet-100 text-violet-800", image: "/images/shifsd-director-lit-onboarding.jpg" },
  { name: "EDC & DMI Visit", count: "School Leaders Training", color: "bg-cyan-100 text-cyan-800", image: "/images/edc-school-leaders-visit.jpg" },
  { name: "LIT Inception Meeting", count: "Voka Mission", color: "bg-slate-100 text-slate-800", image: "/images/lit-inception-voka-mission.jpg" },
  { name: "HHI Electricity Trainees", count: "TVET Programs", color: "bg-amber-100 text-amber-800", image: "/images/hhi-electricity-trainees.jpg" },
  { name: "Female Electrician in Training", count: "Holy Hands Institute", color: "bg-pink-100 text-pink-800", image: "/images/tvet-electricity-female.jpg" },
  { name: "HHI TVET Trainees", count: "Holy Hands Institute", color: "bg-orange-100 text-orange-800", image: "/images/hhi-tvet-trainees.jpg" },
  { name: "Plumbing Trainees", count: "TVET Programs", color: "bg-teal-100 text-teal-800", image: "/images/tvet-plumbing-trainees.jpg" },
  { name: "Adult Literacy Grads 2025", count: "Lofa County", color: "bg-green-100 text-green-800", image: "/images/alp-lofa-grads-2025.jpg" },
  { name: "Literacy Graduation Day", count: "Lofa County", color: "bg-lime-100 text-lime-800", image: "/images/literacy-graduation-day.jpg" },
  { name: "Literacy Graduate Certificate", count: "Lofa County", color: "bg-emerald-100 text-emerald-800", image: "/images/literacy-grad-certificate.jpg" },
  { name: "ALP Level 1 Participant", count: "Lofa County", color: "bg-teal-100 text-teal-800", image: "/images/alp-participant.jpg" },
  { name: "AWC Onboarding", count: "All We Can Partnership", color: "bg-purple-100 text-purple-800", image: "/images/awc-onboarding-presentation.jpg" },
  { name: "SHIFSD Main Office", count: "Johnsonville", color: "bg-stone-100 text-stone-800", image: "/images/shifsd-office-johnsonville.jpg" },
  { name: "Hummingbird Academy", count: "Students Outdoor", color: "bg-blue-100 text-blue-800", image: "/images/hac-students-outdoor.jpg" },
  { name: "VSLA Training Sessions", count: "Nimba County", color: "bg-emerald-100 text-emerald-800", image: "/images/vsla-white.jpg" },
];

export default function NewsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider mb-3">News & Media</p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stories From the Field
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Program updates, community stories, and the latest from SHIFSD&apos;s work across Liberia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest Updates" />

          {/* Featured */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.filter(p => p.featured).map((post) => (
              <article key={post.title} className="rounded-2xl overflow-hidden border border-gray-border hover:shadow-lg transition-shadow">
                <div className="h-56 overflow-hidden">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-forest/10 flex items-center justify-center">
                      <span className="text-forest/30 text-sm font-[var(--font-heading)]">Photo Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold bg-forest/10 text-forest px-2.5 py-1 rounded-full">{post.tag}</span>
                    <span className="flex items-center gap-1 text-xs text-charcoal-light">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-charcoal text-xl mb-2">{post.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{post.excerpt}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-forest hover:text-forest-light transition-colors">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(p => !p.featured).map((post) => (
              <article key={post.title} className="rounded-xl border border-gray-border overflow-hidden hover:shadow-md transition-shadow">
                {post.image && (
                  <div className="h-40 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold bg-forest/10 text-forest px-2.5 py-1 rounded-full">{post.tag}</span>
                    <span className="flex items-center gap-1 text-xs text-charcoal-light">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-charcoal mb-2">{post.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Photo Gallery" subtitle="Capturing moments of transformation across our programs and communities." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-[var(--font-heading)] font-bold text-charcoal">{cat.name}</h3>
                  <span className={`inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-full ${cat.color}`}>
                    {cat.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
