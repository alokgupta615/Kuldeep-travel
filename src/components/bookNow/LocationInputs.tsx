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
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Pickup */}
        <div>
          <label className="mb-1.5 block text-xs font-bold text-slate-800">
            Pickup City / Address <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600" size={18} />

            <input
              type="text"
              name="pickup"
              required
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Gomti Nagar, Lucknow or CCS Airport"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Drop */}
        <div>
          <label className="mb-1.5 block text-xs font-bold text-slate-800">
            Drop Location / Destination <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <Navigation className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-600" size={18} />

            <input
              type="text"
              name="drop"
              required
              value={formData.drop}
              onChange={handleChange}
              placeholder="e.g. Ayodhya Dham, Kanpur, or Hazratganj"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>

      {/* Trip Route Preview */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-xs">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
          Route Map Summary
        </span>

        <div className="space-y-2 text-xs font-semibold">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-slate-900 font-bold">
              {formData.pickup || "Pickup Location (e.g. Lucknow)"}
            </span>
          </div>

          <div className="ml-[4px] h-4 border-l-2 border-dashed border-slate-300" />

          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0" />
            <span className="text-slate-900 font-bold">
              {formData.drop || "Drop Location (e.g. Destination)"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
