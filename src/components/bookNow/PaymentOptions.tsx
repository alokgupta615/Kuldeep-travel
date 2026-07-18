"use client";

import {
  CreditCard,
  Wallet,
  Banknote,
  CheckCircle2,
} from "lucide-react";

interface Props {
  formData: {
    payment: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const paymentMethods = [
  {
    id: "PAY_NOW",
    title: "Pay Now",
    description: "Pay the full amount securely online.",
    icon: CreditCard,
    color: "bg-green-100 text-green-700",
  },
  {
    id: "ADVANCE",
    title: "Pay Advance",
    description: "Pay a partial amount to confirm booking.",
    icon: Wallet,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "PAY_AFTER_TRIP",
    title: "Pay After Trip",
    description: "Pay the driver after your journey ends.",
    icon: Banknote,
    color: "bg-yellow-100 text-yellow-700",
  },
];

export default function PaymentOptions({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          Payment Method
        </h3>

        <p className="mt-2 text-slate-500">
          Select your preferred payment option.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {paymentMethods.map((item) => {
          const selected = formData.payment === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  payment: item.id,
                }))
              }
              className={`relative rounded-3xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selected
                  ? "border-yellow-400 ring-2 ring-yellow-400"
                  : "border-slate-200"
              }`}
            >
              {selected && (
                <CheckCircle2
                  className="absolute right-4 top-4 text-yellow-500"
                  size={22}
                />
              )}

              <div
                className={`mb-5 inline-flex rounded-2xl p-4 ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <h4 className="text-lg font-bold">
                {item.title}
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <h4 className="font-semibold text-slate-900">
          Payment Information
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Secure online payments via Razorpay.</li>
          <li>• Advance payment confirms your booking faster.</li>
          <li>• Pay After Trip lets you pay once the ride is completed.</li>
          <li>• GST invoice will be provided on request.</li>
        </ul>
      </div>
    </div>
  );
}