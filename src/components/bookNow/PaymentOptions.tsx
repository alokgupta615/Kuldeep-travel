"use client";

import { CheckCircle2, CreditCard, ShieldCheck, Wallet, Banknote } from "lucide-react";
import type { BookingData, PaymentType } from "@/types/booking";
import { calculateFare } from "@/lib/fareCalculator";

interface Props {
  formData: BookingData;
  setFormData: React.Dispatch<React.SetStateAction<BookingData>>;
}

export default function PaymentOptions({ formData, setFormData }: Props) {
  const fareResult = calculateFare({
    vehicle: formData.vehicle,
    category: formData.category,
    extras: formData.extras,
    serviceType: formData.serviceType,
  });

  const paymentOptions: {
    id: PaymentType;
    title: string;
    subtitle: string;
    badge: string;
    badgeColor: string;
    amountDisplay: string;
    icon: typeof Banknote;
  }[] = [
    {
      id: "PAY_AFTER_TRIP",
      title: "Pay After Trip (Recommended)",
      subtitle: `Pay full fare (₹${fareResult.total.toLocaleString("en-IN")}) via UPI / Cash after safe journey completion`,
      badge: "0% Advance Required",
      badgeColor: "bg-emerald-100 text-emerald-800",
      amountDisplay: "₹0 Now",
      icon: Banknote,
    },
    {
      id: "ADVANCE",
      title: "Pay 20% Advance Token",
      subtitle: `Pay ₹${fareResult.advanceAmount.toLocaleString("en-IN")} now to lock your cab, balance ₹${fareResult.remainingAmount.toLocaleString("en-IN")} after trip`,
      badge: "Instant Cab Lock",
      badgeColor: "bg-blue-100 text-blue-800",
      amountDisplay: `₹${fareResult.advanceAmount.toLocaleString("en-IN")} Now`,
      icon: Wallet,
    },
    {
      id: "PAY_NOW",
      title: "Pay 100% Online",
      subtitle: `Prepay full fare (₹${fareResult.total.toLocaleString("en-IN")}) securely via Razorpay (UPI / Cards / NetBanking)`,
      badge: "Automated GST Bill",
      badgeColor: "bg-purple-100 text-purple-800",
      amountDisplay: `₹${fareResult.total.toLocaleString("en-IN")} Total`,
      icon: CreditCard,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="text-sm sm:text-base font-bold text-slate-900">
          Choose How You Want to Pay:
        </label>
        <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-700">
          <ShieldCheck size={16} />
          100% Risk-Free Cancellation
        </span>
      </div>

      <div className="space-y-3">
        {paymentOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = formData.payment === opt.id;

          return (
            <label
              key={opt.id}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  payment: opt.id,
                }))
              }
              className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 sm:p-5 transition-all duration-200 ${
                isSelected
                  ? "border-blue-600 bg-blue-50/40 ring-2 ring-blue-600 shadow-md"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                    isSelected ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <Icon size={22} />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {opt.title}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${opt.badgeColor}`}
                    >
                      {opt.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                    {opt.subtitle}
                  </p>
                </div>
              </div>

              <div className="ml-3 shrink-0 flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs sm:text-sm font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {opt.amountDisplay}
                </span>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${
                    isSelected
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {isSelected && <CheckCircle2 size={16} />}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}