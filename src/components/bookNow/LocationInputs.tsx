"use client";

import { MapPin, Navigation } from "lucide-react";
import type { BookingData } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: React.Dispatch<React.SetStateAction<BookingData>>;
}

export default function LocationInputs({ formData, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Pickup */}
        <div>
          <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
            Pickup City / Landmark / Terminal <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600" size={20} />

            <input
              type="text"
              name="pickup"
              required
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Gomti Nagar, Lucknow or CCS Airport T3"
              className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Drop */}
        <div>
          <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
            Drop Location / Destination City <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-600" size={20} />

            <input
              type="text"
              name="drop"
              required
              value={formData.drop}
              onChange={handleChange}
              placeholder="e.g. Ayodhya Dham, Kanpur, or Hazratganj"
              className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>

      {/* Trip Route Preview */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 block mb-3">
          Route Map Summary
        </span>

        <div className="space-y-3 text-sm sm:text-base font-bold">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-slate-900 font-bold">
              {formData.pickup || "Pickup Location (e.g. Lucknow)"}
            </span>
          </div>

          <div className="ml-[5px] h-5 border-l-2 border-dashed border-slate-300" />

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-rose-500 shrink-0" />
            <span className="text-slate-900 font-bold">
              {formData.drop || "Drop Location (e.g. Destination)"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
