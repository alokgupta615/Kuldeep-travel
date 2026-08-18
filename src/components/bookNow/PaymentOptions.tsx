"use client";

import { CreditCard, Wallet, Banknote, CheckCircle2, ShieldCheck } from "lucide-react";
import type { BookingData, PaymentType } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: React.Dispatch<React.SetStateAction<BookingData>>;
}

const paymentMethods: {
  id: PaymentType;
  title: string;
  badge: string;
  description: string;
  icon: typeof Banknote;
  color: string;
}[] = [
  {
    id: "PAY_AFTER_TRIP",
    title: "Pay After Trip",
    badge: "Most Convenient",
    description: "Pay driver via Cash, UPI or Card after journey ends.",
    icon: Banknote,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    id: "ADVANCE",
    title: "Pay Advance",
    badge: "Instant Lock",
    description: "Pay a minimal token amount to lock your cab dispatch.",
    icon: Wallet,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "PAY_NOW",
    title: "Pay Online Now",
    badge: "100% Secure",
    description: "Instant online checkout via Razorpay (UPI, Cards, Netbanking).",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-800",
  },
];

export default function PaymentOptions({ formData, setFormData }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {paymentMethods.map((item) => {
          const selected = formData.payment === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  payment: item.id,
                }))
              }
              className={`relative rounded-2xl border p-4 text-left transition-all duration-200 ${
                selected
                  ? "border-blue-600 bg-blue-50/30 ring-2 ring-blue-600 shadow-md scale-[1.01]"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              {selected && (
                <CheckCircle2
                  className="absolute right-3 top-3 text-blue-600"
                  size={18}
                />
              )}

              <div className="flex items-center gap-2">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color}`}>
                  <Icon size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {item.badge}
                </span>
              </div>

              <h4 className="mt-2.5 text-sm font-bold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-3.5 text-xs text-slate-700 flex items-center gap-2.5">
        <ShieldCheck size={20} className="text-blue-700 shrink-0" />
        <span>
          <strong>Zero Payment Risk:</strong> You can select <em>Pay After Trip</em> to confirm your booking without any immediate online payment. GST tax invoices are provided upon request.
        </span>
      </div>
    </div>
  );
}