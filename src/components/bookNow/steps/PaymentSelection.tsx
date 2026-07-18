"use client";

import { Dispatch, SetStateAction } from "react";
import {
  CarFront,
  Wallet,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  BadgeIndianRupee,
  Sparkles,
} from "lucide-react";

import { BookingData } from "../BookingForm";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const paymentMethods = [
  {
    id: "pay_at_pickup",
    title: "Pay at Pickup",
    subtitle: "Recommended",
    icon: CarFront,
    badge: "Most Popular",
    color: "yellow",
    description:
      "Pay the driver when your journey begins.",
    benefits: [
      "No advance payment",
      "UPI / Cash / Card",
      "Instant booking confirmation",
    ],
  },

  {
    id: "pay_after_journey",
    title: "Pay After Journey",
    subtitle: "Flexible Payment",
    icon: Wallet,
    badge: "",
    color: "blue",
    description:
      "Pay after safely reaching your destination.",
    benefits: [
      "Cash or UPI",
      "Perfect for regular customers",
      "No hidden charges",
    ],
  },

  {
    id: "online",
    title: "Pay Online",
    subtitle: "Secure Payment",
    icon: CreditCard,
    badge: "Coming Soon",
    color: "green",
    description:
      "Secure online payment using Razorpay.",
    benefits: [
      "UPI",
      "Credit/Debit Card",
      "Net Banking",
    ],
  },
];

export default function PaymentSelection({
  formData,
  setFormData,
}: Props) {
  return (
    <div>

      {/* Heading */}

      <div className="mb-10">

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          STEP 4 OF 5
        </span>

        <h2 className="mt-4 text-3xl font-black text-slate-900">
          Select Payment Method
        </h2>

        <p className="mt-3 text-slate-600">
          Choose the payment option that's most convenient for you.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-3">

        {paymentMethods.map((payment) => {

          const selected =
            formData.payment === payment.id;

          return (

            <button
              key={payment.id}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  payment: payment.id,
                }))
              }
              className={`relative rounded-3xl border bg-white p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl

              ${
                selected
                  ? "border-yellow-400 ring-4 ring-yellow-200"
                  : "border-slate-200"
              }`}
            >

              {payment.badge && (
                <div className="absolute right-5 top-5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                  {payment.badge}
                </div>
              )}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">

                <payment.icon
                  size={34}
                  className="text-blue-700"
                />

              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {payment.title}
              </h3>

              <p className="mt-1 font-medium text-blue-700">
                {payment.subtitle}
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                {payment.description}
              </p>

              <div className="mt-8 space-y-4">

                {payment.benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <span>{benefit}</span>

                  </div>

                ))}

              </div>

              {selected ? (

                <div className="mt-8 rounded-xl bg-green-100 px-5 py-3 text-center font-bold text-green-700">

                  ✓ Selected

                </div>

              ) : (

                <div className="mt-8 rounded-xl border border-blue-700 px-5 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">

                  Choose This Option

                </div>

              )}

            </button>

          );
        })}

      </div>

      {/* Secure Payment */}

      <div className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-yellow-50 p-8">

        <div className="flex items-start gap-4">

          <ShieldCheck
            size={40}
            className="text-green-600"
          />

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              Secure & Transparent Payments
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Kuldeep Travels follows a transparent pricing policy.
              You'll receive your booking confirmation immediately after
              submission. Online payments are securely processed through
              Razorpay, while Cash, UPI, and Cards are accepted for
              offline payments.
            </p>

          </div>

        </div>

      </div>

      {/* Trust Badges */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 text-center">

          <ShieldCheck
            className="mx-auto text-green-600"
            size={34}
          />

          <h4 className="mt-4 font-bold">
            Secure Booking
          </h4>

        </div>

        <div className="rounded-2xl border bg-white p-6 text-center">

          <BadgeIndianRupee
            className="mx-auto text-yellow-500"
            size={34}
          />

          <h4 className="mt-4 font-bold">
            No Hidden Charges
          </h4>

        </div>

        <div className="rounded-2xl border bg-white p-6 text-center">

          <Sparkles
            className="mx-auto text-blue-700"
            size={34}
          />

          <h4 className="mt-4 font-bold">
            Instant Confirmation
          </h4>

        </div>

      </div>

    </div>
  );
}