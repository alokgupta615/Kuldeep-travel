"use client";

import { Dispatch, SetStateAction } from "react";
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
} from "lucide-react";

import { BookingData } from "../BookingForm";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

export default function BookingSummary({
  formData,
  setFormData,
}: Props) {

  const paymentText = {
    pay_at_pickup: "Pay at Pickup",
    pay_after_journey: "Pay After Journey",
    online: "Pay Online",
  };

  return (
    <div>

      {/* Heading */}

      <div className="mb-10">

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          STEP 5 OF 5
        </span>

        <h2 className="mt-4 text-3xl font-black text-slate-900">
          Review Your Booking
        </h2>

        <p className="mt-3 text-slate-600">
          Please verify all the information before confirming your booking.
        </p>

      </div>

      {/* Summary */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Personal */}

        <div className="rounded-3xl border bg-white p-7 shadow-sm">

          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Personal Information
          </h3>

          <div className="space-y-5">

            <SummaryRow
              icon={<User size={18} />}
              label="Full Name"
              value={formData.name || "-"}
            />

            <SummaryRow
              icon={<Phone size={18} />}
              label="Phone"
              value={formData.phone || "-"}
            />

            <SummaryRow
              icon={<Mail size={18} />}
              label="Email"
              value={formData.email || "-"}
            />

            <SummaryRow
              icon={<Users size={18} />}
              label="Passengers"
              value={String(formData.passengers)}
            />

          </div>

        </div>

        {/* Journey */}

        <div className="rounded-3xl border bg-white p-7 shadow-sm">

          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Journey Details
          </h3>

          <div className="space-y-5">

            <SummaryRow
              icon={<MapPin size={18} />}
              label="Pickup"
              value={formData.pickup || "-"}
            />

            <SummaryRow
              icon={<MapPin size={18} />}
              label="Drop"
              value={formData.drop || "-"}
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

        {/* Vehicle */}

        <div className="rounded-3xl border bg-white p-7 shadow-sm">

          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Vehicle & Payment
          </h3>

          <div className="space-y-5">

            <SummaryRow
              icon={<CarFront size={18} />}
              label="Vehicle"
              value={formData.vehicle || "-"}
            />

            <SummaryRow
              icon={<CreditCard size={18} />}
              label="Payment"
              value={
                paymentText[
                  formData.payment as keyof typeof paymentText
                ] || "-"
              }
            />

          </div>

        </div>

        {/* Special Request */}

        <div className="rounded-3xl border bg-white p-7 shadow-sm">

          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Special Request
          </h3>

          <div className="flex items-start gap-3">

            <MessageSquare className="mt-1 text-blue-600" />

            <p className="text-slate-600">
              {formData.specialRequest ||
                "No special request provided."}
            </p>

          </div>

        </div>

      </div>

      {/* Booking Benefits */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-50 to-yellow-50 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Your Booking Includes
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <Benefit icon={<ShieldCheck />} text="Verified Professional Driver" />

          <Benefit icon={<CheckCircle2 />} text="Instant Booking Confirmation" />

          <Benefit icon={<BadgeIndianRupee />} text="Transparent Pricing" />

          <Benefit icon={<CarFront />} text="Clean & Sanitized Vehicle" />

        </div>

      </div>

      {/* Terms */}

      <div className="mt-10 rounded-2xl border bg-white p-6">

        <label className="flex items-start gap-4">

          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                termsAccepted: e.target.checked,
              }))
            }
            className="mt-1 h-5 w-5"
          />

          <span className="text-sm leading-7 text-slate-600">
            I agree to the Terms & Conditions and Privacy Policy.
            I confirm that all the booking information provided is correct.
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
    <div className="flex items-center gap-4">

      <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-semibold text-slate-900">
          {value}
        </p>

      </div>

    </div>
  );
}

function Benefit({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">

      <div className="text-green-600">
        {icon}
      </div>

      <span className="font-medium text-slate-700">
        {text}
      </span>

    </div>
  );
}