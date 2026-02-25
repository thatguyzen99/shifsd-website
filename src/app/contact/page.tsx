import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SHIFSD Liberia. Visit our headquarters in Johnsonville, Monrovia or reach us by email and phone.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-[var(--font-heading)] font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Let&apos;s Connect
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Whether you have questions, want to visit our programs, or are interested in partnership — we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-charcoal mb-2">Send a Message</h2>
              <div className="section-divider mb-6" />
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-1.5">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Donation Question</option>
                    <option>Volunteer Interest</option>
                    <option>Media / Press Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Message *</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-forest resize-none" placeholder="How can we help you?" />
                </div>
                <button className="bg-forest hover:bg-forest-dark text-white font-[var(--font-heading)] font-bold px-8 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-charcoal mb-2">Contact Details</h2>
              <div className="section-divider mb-6" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-forest/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">Headquarters</h3>
                    <p className="text-sm text-charcoal-light mt-1 leading-relaxed">
                      Block C, Lee Hill Community<br />
                      Johnsonville Township<br />
                      Monrovia, Liberia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-forest/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">Email</h3>
                    <a href="mailto:shifsdliberia@gmail.com" className="text-sm text-deep-blue hover:underline mt-1 block">
                      shifsdliberia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-forest/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">Phone</h3>
                    <a href="tel:+231770024082" className="text-sm text-deep-blue hover:underline mt-1 block">
                      +231 (0) 770 024 082
                    </a>
                    <a href="tel:+231886874950" className="text-sm text-deep-blue hover:underline block">
                      +231 (0) 886 874 950
                    </a>
                    <p className="text-xs text-charcoal-light mt-1">Contact: Jeremiah T. Burgess</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-forest/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">Office Hours</h3>
                    <p className="text-sm text-charcoal-light mt-1">
                      Monday – Friday: 8:00 AM – 5:00 PM<br />
                      Saturday: 9:00 AM – 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-bg rounded-xl h-56 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-forest/30 mx-auto mb-2" />
                  <p className="text-sm text-charcoal-light">Johnsonville, Monrovia</p>
                  <p className="text-xs text-charcoal-light/60">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
