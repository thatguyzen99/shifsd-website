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
    title: "722 Youth Complete EDC Work Ready Now Training",
    excerpt: "In partnership with USAID/EDC, SHIFSD trained 722 youth in Basic Education and Work Ready Now soft skills across 18+ communities in Montserrado County, preparing them for the workforce.",
    date: "December 2024",
    tag: "Education",
    featured: true,
    image: "/images/hero-community.jpg",
  },
  {
    title: "150 Women Transform Lives Through VSLA Savings",
    excerpt: "Women in five Nimba County communities saved $6,092 in just 8 months through SHIFSD's VSLA program, with 125 women establishing their own petty trading businesses.",
    date: "November 2024",
    tag: "Livelihoods",
    featured: true,
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
    title: "SHIFSD Launches CSA Awareness Campaign in 25 Communities",
    excerpt: "Over 500 community members in Nimba County are now aware of climate smart agriculture practices following SHIFSD's intensive awareness campaign.",
    date: "September 2024",
    tag: "Agriculture",
    featured: false,
  },
  {
    title: "145 Women Graduate Entrepreneurship Training",
    excerpt: "Funded by All We Can and Otto 8 Per Miles, the six-day intensive training equipped women with business planning, financial literacy, and market access skills.",
    date: "June 2024",
    tag: "Training",
    featured: false,
  },
  {
    title: "Adult Literacy Expanding Across Lofa County",
    excerpt: "Using the REFLECT methodology, SHIFSD's adult literacy program now reaches 30 communities in Lofa County, supported by All We Can (AWC UK).",
    date: "May 2024",
    tag: "Literacy",
    featured: false,
  },
];

const galleryCategories = [
  { name: "VSLA Training Sessions", count: "Nimba County", color: "bg-emerald-100 text-emerald-800", image: "/images/vsla-white.jpg" },
  { name: "EDC Youth Training", count: "Montserrado County", color: "bg-blue-100 text-blue-800", image: "/images/hero-community.jpg" },
  { name: "Hummingbird Academy", count: "Johnsonville", color: "bg-purple-100 text-purple-800", image: "/images/training-graduates.jpg" },
  { name: "Holy Hands Institute", count: "TVET Programs", color: "bg-amber-100 text-amber-800", image: "/images/tvet-trainees.jpg" },
  { name: "CSA Demonstration Farm", count: "Nimba County", color: "bg-green-100 text-green-800", image: "/images/vsla-nimba-outdoor.jpg" },
  { name: "Community Events", count: "Multiple Counties", color: "bg-rose-100 text-rose-800", image: "/images/vsla-nimba-meeting.jpg" },
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
                  <button className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-forest hover:text-forest-light transition-colors">
                    Read Full Story <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(p => !p.featured).map((post) => (
              <article key={post.title} className="rounded-xl border border-gray-border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold bg-forest/10 text-forest px-2.5 py-1 rounded-full">{post.tag}</span>
                  <span className="flex items-center gap-1 text-xs text-charcoal-light">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-charcoal mb-2">{post.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{post.excerpt}</p>
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
              <div key={cat.name} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
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
