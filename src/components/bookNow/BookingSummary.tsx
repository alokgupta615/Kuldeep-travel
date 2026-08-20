"use client";

import {
  Calendar,
  Clock,
  MapPin,
  Car,
  Users,
  CreditCard,
  BadgeCheck,
  IndianRupee,
} from "lucide-react";
import type { BookingData } from "@/types/booking";
import { calculateFare } from "@/lib/fareCalculator";

interface BookingSummaryProps {
  formData: BookingData;
  fare?: number;
}

export default function BookingSummary({
  formData,
}: BookingSummaryProps) {
  const fareResult = calculateFare({
    vehicle: formData.vehicle,
    category: formData.category,
    extras: formData.extras,
    serviceType: formData.serviceType,
  });

  const paymentLabel: Record<string, string> = {
    PAY_NOW: "Pay 100% Online",
    ADVANCE: "20% Advance Token",
    PAY_AFTER_TRIP: "Pay After Trip (Cash/UPI)",
  };

  return (
    <aside className="sticky top-24">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="bg-slate-900 p-6 sm:p-7 text-white">
          <h2 className="text-xl sm:text-2xl font-extrabold">Booking Summary</h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-medium">
            Live preview of your ride details
          </p>
        </div>

        {/* Body */}
        <div className="space-y-4 p-6 sm:p-7">
          <SummaryItem
            icon={<BadgeCheck size={20} />}
            label="Customer"
            value={formData.customerName || "Not entered"}
          />

          <SummaryItem
            icon={<MapPin size={20} />}
            label="Pickup"
            value={formData.pickup || "Not selected"}
          />

          <SummaryItem
            icon={<MapPin size={20} />}
            label="Drop Destination"
            value={formData.drop || "Not selected"}
          />

          <SummaryItem
            icon={<Calendar size={20} />}
            label="Journey Date"
            value={formData.travelDate || "--"}
          />

          <SummaryItem
            icon={<Clock size={20} />}
            label="Journey Time"
            value={formData.travelTime || "--"}
          />

          <SummaryItem
            icon={<Car size={20} />}
            label="Selected Vehicle"
            value={formData.vehicle || "Swift Dzire"}
          />

          <SummaryItem
            icon={<Users size={20} />}
            label="Passengers"
            value={`${formData.passengers} Passenger${formData.passengers > 1 ? "s" : ""}`}
          />

          <SummaryItem
            icon={<CreditCard size={20} />}
            label="Payment Mode"
            value={paymentLabel[formData.payment] || "Pay After Trip"}
          />
        </div>

        {/* Fare Breakdown */}
        <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-7 space-y-3">
          <div className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-emerald-200 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800">
                  <IndianRupee className="h-6 w-6 text-emerald-800" />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase">
                    Estimated Total Fare
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    ₹{fareResult.total.toLocaleString("en-IN")}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {formData.payment === "ADVANCE" && (
            <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4 space-y-2 text-xs sm:text-sm font-semibold">
              <div className="flex justify-between text-blue-900">
                <span>Payable Now (20% Token):</span>
                <span className="font-extrabold text-blue-700">
                  ₹{fareResult.advanceAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-slate-600 border-t border-blue-200/60 pt-2">
                <span>Balance to Driver After Trip:</span>
                <span className="font-bold text-slate-800">
                  ₹{fareResult.remainingAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-7 space-y-4">
          <div className="rounded-2xl bg-yellow-50/80 border border-yellow-200 p-5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Booking Confirmation
            </h3>

            <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Our dispatch desk will verify vehicle availability and share driver details
              via SMS and WhatsApp.
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-5">
            <h4 className="text-sm sm:text-base font-bold text-emerald-900">Inclusions Guaranteed</h4>

            <ul className="mt-2.5 space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
              <li>✔ Professional Chauffeur</li>
              <li>✔ Sanitized AC Vehicle</li>
              <li>✔ 24×7 Customer Helpline</li>
              <li>✔ Zero Cancellation Fee</li>
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

function SummaryItem({ icon, label, value }: SummaryItemProps) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="rounded-xl bg-yellow-100 p-2.5 text-yellow-800 shrink-0">{icon}</div>

      <div className="min-w-0">
        <p className="text-xs sm:text-sm font-bold text-slate-500">{label}</p>
        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 truncate">{value}</h4>
      </div>
    </div>
  );
}
