"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";

export function DonationSuccess() {
  const searchParams = useSearchParams();
  const donation = searchParams.get("donation");

  if (donation === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0" />
          <div>
            <h3 className="font-[var(--font-heading)] font-bold text-emerald-900 text-lg">
              Thank You for Your Generous Donation!
            </h3>
            <p className="text-emerald-700 text-sm mt-1">
              Your contribution will directly support education, agriculture, and livelihoods
              across Liberia. We appreciate your generosity. God bless you.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (donation === "cancelled") {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <XCircle className="w-8 h-8 text-amber-600 shrink-0" />
          <div>
            <h3 className="font-[var(--font-heading)] font-bold text-amber-900 text-lg">
              Donation Cancelled
            </h3>
            <p className="text-amber-700 text-sm mt-1">
              No worries — your donation was not processed. You can try again anytime or
              contact us if you need assistance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
