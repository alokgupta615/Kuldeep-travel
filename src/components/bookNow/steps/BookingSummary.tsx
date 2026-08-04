"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Clock3,
  CarFront,
  CreditCard,
  Users,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  BadgeIndianRupee,
  Tag,
  Sparkles,
} from "lucide-react";

import type { BookingData } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

export default function BookingSummary({ formData }: Props) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const paymentText = {
    PAY_NOW: "Pay Now",
    ADVANCE: "Advance Payment",
    PAY_AFTER_TRIP: "Pay After Trip",
  };

  const categoryText = {
    economy: "Economy",
    standard: "Standard",
    business: "Business",
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}

      <div className="mb-8">
        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-700 sm:text-sm">
          Step 5 of 5
        </span>

        <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
          Review Your Booking
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Please review all your booking information carefully before confirming
          your ride.
        </p>
      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Personal Information */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6 lg:rounded-3xl lg:p-7">
          <h3 className="mb-6 text-lg font-bold text-slate-900 sm:text-xl">
            Personal Information
          </h3>

          <div className="space-y-5">
            <SummaryRow
              icon={<User size={18} />}
              label="Full Name"
              value={formData.customerName || "-"}
            />

            <SummaryRow
              icon={<Phone size={18} />}
              label="Phone Number"
              value={formData.phone || "-"}
            />

            <SummaryRow
              icon={<Mail size={18} />}
              label="Email Address"
              value={formData.email || "-"}
            />

            <SummaryRow
              icon={<Users size={18} />}
              label="Passengers"
              value={`${formData.passengers} Passenger${
                formData.passengers > 1 ? "s" : ""
              }`}
            />
          </div>
        </div>

        {/* Journey Details */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6 lg:rounded-3xl lg:p-7">
          <h3 className="mb-6 text-lg font-bold text-slate-900 sm:text-xl">
            Journey Details
          </h3>

          <div className="space-y-5">
            <SummaryRow
              icon={<MapPin size={18} />}
              label="Pickup Location"
              value={formData.pickup || "-"}
            />

            <SummaryRow
              icon={<MapPin size={18} />}
              label="Drop Location"
              value={formData.drop || "-"}
            />

            <SummaryRow
              icon={<Tag size={18} />}
              label="Service Type"
              value={formData.serviceType || "-"}
            />

            <SummaryRow
              icon={<CalendarDays size={18} />}
              label="Travel Date"
              value={formData.travelDate || "-"}
            />

            <SummaryRow
              icon={<Clock3 size={18} />}
              label="Pickup Time"
              value={formData.travelTime || "-"}
            />
          </div>
        </div>

        {/* Vehicle & Payment */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6 lg:rounded-3xl lg:p-7">
          <h3 className="mb-6 text-lg font-bold text-slate-900 sm:text-xl">
            Vehicle & Payment
          </h3>

          <div className="space-y-5">
            <SummaryRow
              icon={<CarFront size={18} />}
              label="Selected Vehicle"
              value={formData.vehicle || "-"}
            />

            <SummaryRow
              icon={<Tag size={18} />}
              label="Ride Category"
              value={
                categoryText[formData.category as keyof typeof categoryText] ||
                "-"
              }
            />

            <SummaryRow
              icon={<CreditCard size={18} />}
              label="Payment Method"
              value={
                paymentText[formData.payment as keyof typeof paymentText] || "-"
              }
            />

            <div>
              <p className="mb-3 text-sm font-medium text-slate-500">
                Ride Extras
              </p>

              {formData.extras.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {formData.extras.map((extra) => (
                    <span
                      key={extra}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                    >
                      {extra}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm font-medium text-slate-700">
                  No extra services selected
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Special Request */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6 lg:rounded-3xl lg:p-7">
          <h3 className="mb-6 text-lg font-bold text-slate-900 sm:text-xl">
            Special Request
          </h3>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <MessageSquare size={20} />
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {formData.specialNote || "No special request provided."}
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-yellow-50 p-5 sm:p-8">
        <h3 className="mb-6 text-xl font-bold text-slate-900 sm:text-2xl">
          Your Booking Includes
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Benefit
            icon={<ShieldCheck size={22} />}
            text="Verified Professional Driver"
          />

          <Benefit
            icon={<CheckCircle2 size={22} />}
            text="Instant Booking Confirmation"
          />

          <Benefit
            icon={<BadgeIndianRupee size={22} />}
            text="Transparent Pricing"
          />

          <Benefit
            icon={<CarFront size={22} />}
            text="Clean & Sanitized Vehicle"
          />

          <Benefit icon={<Sparkles size={22} />} text="24×7 Customer Support" />

          <Benefit
            icon={<Users size={22} />}
            text="Safe & Comfortable Journey"
          />
        </div>
      </div>

      {/* Terms */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <label className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-1 h-5 w-5 rounded border-slate-300"
          />

          <span className="text-sm leading-6 text-slate-600">
            I agree to the Terms & Conditions and Privacy Policy. I confirm that
            all booking information provided above is correct.
          </span>
        </label>
      </div>
    </div>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700 sm:p-3">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-slate-500">{label}</p>

        <p className="break-words text-sm font-semibold text-slate-900 sm:text-base">
          {value}
        </p>
      </div>
    </div>
  );
}

function Benefit({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:gap-4 sm:p-5">
      <div className="rounded-lg bg-green-50 p-2 text-green-600">{icon}</div>

      <span className="text-sm font-medium text-slate-700 sm:text-base">
        {text}
      </span>
    </div>
  );
}
