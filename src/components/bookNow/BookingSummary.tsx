"use client";

import {
  Calendar,
  Clock,
  MapPin,
  Car,
  Users,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

interface BookingSummaryProps {
  formData: {
    customerName: string;
    pickup: string;
    drop: string;
    travelDate: string;
    travelTime: string;
    vehicle: string;
    passengers: number;
    payment: string;
  };
}

export default function BookingSummary({
  formData,
}: BookingSummaryProps) {
  const paymentLabel = {
    PAY_NOW: "Pay Now",
    ADVANCE: "Advance Payment",
    PAY_AFTER_TRIP: "Pay After Trip",
  };

  return (
    <aside className="sticky top-24">

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

        {/* Header */}

        <div className="bg-slate-900 p-6 text-white">

          <h2 className="text-2xl font-bold">
            Booking Summary
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            Review your booking before submitting.
          </p>

        </div>

        {/* Body */}

        <div className="space-y-5 p-6">

          <SummaryItem
            icon={<BadgeCheck size={18} />}
            label="Customer"
            value={formData.customerName || "Not entered"}
          />

          <SummaryItem
            icon={<MapPin size={18} />}
            label="Pickup"
            value={formData.pickup || "Not selected"}
          />

          <SummaryItem
            icon={<MapPin size={18} />}
            label="Drop"
            value={formData.drop || "Not selected"}
          />

          <SummaryItem
            icon={<Calendar size={18} />}
            label="Journey Date"
            value={formData.travelDate || "--"}
          />

          <SummaryItem
            icon={<Clock size={18} />}
            label="Journey Time"
            value={formData.travelTime || "--"}
          />

          <SummaryItem
            icon={<Car size={18} />}
            label="Vehicle"
            value={formData.vehicle || "Not selected"}
          />

          <SummaryItem
            icon={<Users size={18} />}
            label="Passengers"
            value={`${formData.passengers}`}
          />

          <SummaryItem
            icon={<CreditCard size={18} />}
            label="Payment"
            value={
              paymentLabel[
                formData.payment as keyof typeof paymentLabel
              ] || "-"
            }
          />

        </div>

        {/* Footer */}

        <div className="border-t bg-slate-50 p-6">

          <div className="mb-5 rounded-2xl bg-yellow-50 p-5">

            <h3 className="text-lg font-bold text-yellow-700">
              Booking Status
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Your booking will be submitted as
              <span className="font-semibold text-yellow-600">
                {" "}Pending
              </span>.
              Our team will verify the details and confirm your ride via
              Email and WhatsApp.
            </p>

          </div>

          <div className="rounded-2xl bg-green-50 p-5">

            <h4 className="font-semibold text-green-700">
              Included
            </h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>✔ Professional Driver</li>
              <li>✔ Sanitized Vehicle</li>
              <li>✔ 24×7 Customer Support</li>
              <li>✔ Instant Booking Request</li>
            </ul>

          </div>

        </div>

      </div>

    </aside>
  );
}

interface SummaryItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function SummaryItem({
  icon,
  label,
  value,
}: SummaryItemProps) {
  return (
    <div className="flex items-start gap-4">

      <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {label}
        </p>

        <h4 className="font-semibold text-slate-900">
          {value}
        </h4>

      </div>

    </div>
  );
}