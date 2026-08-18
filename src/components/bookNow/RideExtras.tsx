"use client";

import { Dispatch, SetStateAction } from "react";
import { CheckCircle2, Gift, Coffee } from "lucide-react";
import type { BookingData } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const complimentary = [
  {
    id: "charger",
    title: "Mobile Fast Charger",
    description: "Multi-pin USB/Type-C charger in car",
    icon: Gift,
  },
  {
    id: "tissue",
    title: "Sanitized Tissues",
    description: "Fresh premium tissue box included",
    icon: Gift,
  },
  {
    id: "water",
    title: "Packaged Water",
    description: "Chilled mineral water on demand",
    icon: Coffee,
  },
];

export default function RideExtras({ formData, setFormData }: Props) {
  return (
    <div className="w-full mt-6">
      {/* Complimentary Inclusions */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 sm:p-6">
        <div className="mb-3.5 flex items-center gap-2.5">
          <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
            <Gift size={20} />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Complimentary In-Cab Amenities (100% Free)
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Every Kuldeep Travels ride includes premium amenities:
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {complimentary.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white p-3.5 shadow-xs"
            >
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h5>
                <p className="text-xs text-slate-600 leading-tight mt-0.5">
                  {item.description}
                </p>
              </div>
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 ml-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div className="mt-5">
        <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
          Special Requests / Luggage Notes (Optional)
        </label>
        <textarea
          value={formData.specialNote}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, specialNote: e.target.value }))
          }
          placeholder="e.g. Flight 6E-204 arriving at T3, need child car seat, extra boot space for 4 large suitcases, senior citizen passenger needing extra boarding assistance..."
          className="w-full h-28 p-4 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}
