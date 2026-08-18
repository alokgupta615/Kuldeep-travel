"use client";

import { Dispatch, SetStateAction } from "react";
import { CheckCircle2, Gift, Coffee, Sparkles } from "lucide-react";
import type { BookingData } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const complimentary = [
  {
    id: "charger",
    title: "Mobile Fast Charger",
    description: "Multi-pin USB/Type-C charger available in car",
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
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-700">
            <Gift size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Complimentary In-Cab Amenities (100% Free)
            </h4>
            <p className="text-xs text-slate-600">
              Every Kuldeep Travels ride includes premium amenities:
            </p>
          </div>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-3">
          {complimentary.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white p-3 shadow-xs"
            >
              <div>
                <h5 className="text-xs font-bold text-slate-900">{item.title}</h5>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  {item.description}
                </p>
              </div>
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 ml-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-bold text-slate-800">
          Special Requests / Luggage Notes (Optional)
        </label>
        <textarea
          value={formData.specialNote}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, specialNote: e.target.value }))
          }
          placeholder="e.g. Flight 6E-204 arriving at T3, need child car seat, extra boot space for 4 large suitcases, senior citizen passenger needing extra boarding assistance..."
          className="w-full h-24 p-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}
