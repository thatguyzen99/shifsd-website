"use client";

import { useState } from "react";
import { Heart, Globe, Smartphone, Building2, Copy, CheckCircle, ExternalLink, Lock, Shield } from "lucide-react";

// ============================================================
// SETUP: Replace these with your actual fundraising URLs
// and bank/mobile-money details when available.
// ============================================================
const GLOBALGIVING_URL = "https://www.globalgiving.org"; // Replace with your actual GlobalGiving project URL
const GOFUNDME_URL = "";  // Optional: Replace with GoFundMe campaign URL if created

const BANK_DETAILS = {
  bankName: "LBDI (Liberian Bank for Development & Investment)",
  accountName: "Self Help Initiative for Sustainable Development",
  accountNumber: "XXXX-XXXX-XXXX", // Replace with actual account number
  currency: "USD / LRD",
  swiftCode: "LBDILRMO",           // Replace with actual SWIFT code
};

// ============================================================
// IMPORTANT: Replace the mobile money numbers below with
// SHIFSD's actual Orange Money and MTN registered numbers.
// The phone numbers listed are the org's contact numbers —
// update them if different from the mobile money accounts.
// ============================================================
const MOBILE_MONEY = [
  { provider: "Orange Money", number: "+231 770 024 082", name: "SHIFSD Liberia" },
  { provider: "MTN Mobile Money", number: "+231 886 874 950", name: "SHIFSD Liberia" },
];

type DonateTab = "online" | "bank" | "mobile";

export function DonateForm() {
  const [activeTab, setActiveTab] = useState<DonateTab>("online");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const tabs: { id: DonateTab; label: string; icon: React.ReactNode }[] = [
    { id: "online", label: "Online", icon: <Globe className="w-4 h-4" /> },
    { id: "bank", label: "Bank Transfer", icon: <Building2 className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile Money", icon: <Smartphone className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-gray-bg rounded-2xl p-8">
      <h3 className="font-[var(--font-heading)] font-bold text-lg text-charcoal mb-2 text-center">
        Make a Donation
      </h3>
      <p className="text-xs text-charcoal-light text-center mb-6">
        Choose your preferred donation method
      </p>

      {/* Tab navigation */}
      <div className="flex bg-white rounded-xl p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? "bg-forest text-white shadow-sm"
                : "text-charcoal-light hover:text-charcoal"
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Online Donation Tab */}
      {activeTab === "online" && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-gray-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h4 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">
                  GlobalGiving
                </h4>
                <p className="text-xs text-charcoal-light">Recommended for international donors</p>
              </div>
            </div>
            <p className="text-xs text-charcoal-light mb-4 leading-relaxed">
              GlobalGiving is a trusted platform supporting nonprofits worldwide. Your donation is
              secure, tax-deductible (for US donors), and 100% of your gift goes to SHIFSD programs.
            </p>
            <a
              href={GLOBALGIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber hover:bg-amber-dark text-white font-[var(--font-heading)] font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Donate via GlobalGiving
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>
          </div>

          {GOFUNDME_URL && (
            <div className="bg-white rounded-xl p-5 border border-gray-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">
                    GoFundMe
                  </h4>
                  <p className="text-xs text-charcoal-light">Easy one-time donations</p>
                </div>
              </div>
              <a
                href={GOFUNDME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-forest hover:bg-forest-dark text-white font-[var(--font-heading)] font-bold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                Donate via GoFundMe
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          )}

          <div className="bg-white rounded-xl p-5 border border-gray-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-deep-blue/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-deep-blue" />
              </div>
              <div>
                <h4 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">
                  Contact Us Directly
                </h4>
                <p className="text-xs text-charcoal-light">Arrange a donation via email or phone</p>
              </div>
            </div>
            <p className="text-xs text-charcoal-light mb-3 leading-relaxed">
              Reach out to us to discuss donation options, in-kind gifts, or corporate partnerships.
            </p>
            <a
              href="mailto:shifsdliberia@gmail.com?subject=Donation%20Inquiry&body=Hello%20SHIFSD%20Team%2C%0A%0AI%20would%20like%20to%20make%20a%20donation.%20Please%20share%20the%20best%20way%20to%20contribute.%0A%0AThank%20you."
              className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-[var(--font-heading)] font-bold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              Email Us to Donate
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          <p className="text-xs text-charcoal-light text-center">
            Can&apos;t donate online? Use the <button onClick={() => setActiveTab("bank")} className="text-forest font-semibold underline">Bank Transfer</button> or{" "}
            <button onClick={() => setActiveTab("mobile")} className="text-forest font-semibold underline">Mobile Money</button> options.
          </p>
        </div>
      )}

      {/* Bank Transfer Tab */}
      {activeTab === "bank" && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-gray-border">
            <h4 className="font-[var(--font-heading)] font-bold text-sm text-charcoal mb-4">
              Bank Transfer Details
            </h4>
            <div className="space-y-3">
              {[
                { label: "Bank", value: BANK_DETAILS.bankName, key: "bank" },
                { label: "Account Name", value: BANK_DETAILS.accountName, key: "name" },
                { label: "Account Number", value: BANK_DETAILS.accountNumber, key: "acct" },
                { label: "Currency", value: BANK_DETAILS.currency, key: "currency" },
                { label: "SWIFT Code", value: BANK_DETAILS.swiftCode, key: "swift" },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between bg-gray-bg rounded-lg px-4 py-2.5"
                >
                  <div>
                    <p className="text-xs text-charcoal-light">{item.label}</p>
                    <p className="text-sm font-semibold text-charcoal">{item.value}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.value, item.key)}
                    className="text-charcoal-light hover:text-forest transition-colors p-1"
                    title="Copy to clipboard"
                  >
                    {copiedField === item.key ? (
                      <CheckCircle className="w-4 h-4 text-forest" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber/5 border border-amber/20 rounded-xl p-4">
            <p className="text-xs text-charcoal-light leading-relaxed">
              <strong className="text-charcoal">Reference:</strong> Please include
              &quot;SHIFSD Donation&quot; as the payment reference, and email{" "}
              <a href="mailto:shifsdliberia@gmail.com" className="text-forest font-semibold">
                shifsdliberia@gmail.com
              </a>{" "}
              with your transfer confirmation so we can send a receipt.
            </p>
          </div>
        </div>
      )}

      {/* Mobile Money Tab */}
      {activeTab === "mobile" && (
        <div className="space-y-4">
          {MOBILE_MONEY.map((mm, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-gray-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h4 className="font-[var(--font-heading)] font-bold text-sm text-charcoal">
                      {mm.provider}
                    </h4>
                    <p className="text-xs text-charcoal-light">{mm.name}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-bg rounded-lg px-4 py-3">
                <span className="text-sm font-semibold text-charcoal font-mono">{mm.number}</span>
                <button
                  onClick={() => copyToClipboard(mm.number, `mm-${idx}`)}
                  className="text-charcoal-light hover:text-forest transition-colors p-1"
                  title="Copy number"
                >
                  {copiedField === `mm-${idx}` ? (
                    <CheckCircle className="w-4 h-4 text-forest" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
          <div className="bg-amber/5 border border-amber/20 rounded-xl p-4">
            <p className="text-xs text-charcoal-light leading-relaxed">
              <strong className="text-charcoal">After sending:</strong> Please text or call the number
              with your name and &quot;SHIFSD Donation,&quot; or email{" "}
              <a href="mailto:shifsdliberia@gmail.com" className="text-forest font-semibold">
                shifsdliberia@gmail.com
              </a>{" "}
              so we can acknowledge your gift.
            </p>
          </div>
        </div>
      )}

      {/* Trust signals */}
      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-charcoal-light">
        <span className="flex items-center gap-1">
          <Lock className="w-3 h-3" /> Secure
        </span>
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" /> Verified
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3" /> Tax-deductible
        </span>
      </div>
    </div>
  );
}
