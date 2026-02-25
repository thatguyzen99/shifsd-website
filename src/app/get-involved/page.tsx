import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Heart, Users, Handshake, ArrowRight, CheckCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Support SHIFSD Liberia — donate, volunteer, or partner with us to create lasting change in education, agriculture, and livelihoods.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/images/vsla-green.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 to-forest-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider mb-3">Get Involved</p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Be Part of the Change
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              There are many ways to support SHIFSD&apos;s mission. Whether you give, serve, or collaborate — your contribution creates lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber" />
                </div>
                <h2 className="font-[var(--font-heading)] text-3xl font-bold text-charcoal">Donate</h2>
              </div>
              <div className="section-divider mb-6" />
              <p className="text-charcoal-light leading-relaxed mb-6">
                Your generosity directly empowers Liberian communities. Every dollar supports education for
                underserved youth, sustainable farming for families, and savings programs that transform
                women&apos;s lives.
              </p>
              <h3 className="font-[var(--font-heading)] font-bold text-charcoal mb-3">Your Impact</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "$25 — Provides school supplies for 5 students at Hummingbird Academy",
                  "$50 — Trains a woman in VSLA savings methodology",
                  "$100 — Sponsors a youth through Work Ready Now training",
                  "$500 — Supports CSA training for an entire farming community",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-light">
                    <CheckCircle className="w-4 h-4 text-forest mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-bg rounded-2xl p-8">
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-charcoal mb-6 text-center">
                Make a Donation
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["$25", "$50", "$100", "$250", "$500", "Other"].map((amount) => (
                  <button
                    key={amount}
                    className="border border-gray-border rounded-xl py-3 text-sm font-semibold text-charcoal hover:border-forest hover:text-forest hover:bg-forest/5 transition-colors"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                <button className="w-full bg-amber hover:bg-amber-dark text-white font-[var(--font-heading)] font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" /> Donate Now
                </button>
              </div>
              <p className="text-xs text-charcoal-light text-center mt-4">
                Secure payment processing. Tax-deductible contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-20 bg-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-charcoal mb-6">
                Volunteer Application
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm text-charcoal-light focus:outline-none focus:ring-2 focus:ring-forest">
                  <option>Area of Interest</option>
                  <option>Education & Teaching</option>
                  <option>Agriculture & Farming</option>
                  <option>Administration & Operations</option>
                  <option>Communications & Media</option>
                  <option>Fundraising & Grants</option>
                  <option>Technology & IT</option>
                </select>
                <textarea rows={4} placeholder="Tell us about your skills and availability..." className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest resize-none" />
                <button className="w-full bg-forest hover:bg-forest-dark text-white font-[var(--font-heading)] font-bold py-3.5 rounded-xl text-sm transition-colors">
                  Submit Application
                </button>
              </form>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-forest" />
                </div>
                <h2 className="font-[var(--font-heading)] text-3xl font-bold text-charcoal">Volunteer</h2>
              </div>
              <div className="section-divider mb-6" />
              <p className="text-charcoal-light leading-relaxed mb-6">
                Join SHIFSD as a volunteer or intern and contribute your skills to community transformation.
                We welcome professionals, students, and retirees who share our vision.
              </p>
              <h3 className="font-[var(--font-heading)] font-bold text-charcoal mb-3">Opportunities Include</h3>
              <ul className="space-y-3">
                {[
                  "Teaching and tutoring at Hummingbird Academy",
                  "TVET instruction at Holy Hands Institute",
                  "Agricultural extension support in Nimba County",
                  "Grant writing and fundraising support",
                  "Digital communications and website management",
                  "Program monitoring and evaluation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-light">
                    <CheckCircle className="w-4 h-4 text-forest mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-deep-blue/10 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-deep-blue" />
                </div>
                <h2 className="font-[var(--font-heading)] text-3xl font-bold text-charcoal">Partner With Us</h2>
              </div>
              <div className="section-divider mb-6" />
              <p className="text-charcoal-light leading-relaxed mb-6">
                SHIFSD brings local knowledge, community trust, and operational capacity to deliver
                results at scale. Our track record with USAID/EDC and All We Can demonstrates our
                ability to execute complex, multi-county programs effectively.
              </p>
              <h3 className="font-[var(--font-heading)] font-bold text-charcoal mb-3">Collaboration Areas</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Program implementation partnership",
                  "Capacity building and institutional strengthening",
                  "Research and knowledge sharing",
                  "Technical assistance and training",
                  "Funding and grant co-development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-light">
                    <CheckCircle className="w-4 h-4 text-deep-blue mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-deep-blue rounded-2xl p-8 text-white">
              <h3 className="font-[var(--font-heading)] font-bold text-lg mb-6">Partnership Inquiry</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Organization Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber" />
                <input type="text" placeholder="Contact Person" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber" />
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber">
                  <option>Partnership Type</option>
                  <option>Program Implementation</option>
                  <option>Funding / Grants</option>
                  <option>Technical Assistance</option>
                  <option>Research Partnership</option>
                </select>
                <textarea rows={4} placeholder="Tell us about your partnership vision..." className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber resize-none" />
                <button className="w-full bg-amber hover:bg-amber-dark text-white font-[var(--font-heading)] font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
