"use client";

import { MapPin } from "lucide-react";

interface FormData {
  customerName: string;
  phone: string;
  email: string;
  pickup: string;
  drop: string;
  travelDate: string;
  travelTime: string;
  serviceType: string;
  passengers: number;
  vehicle: string;
  payment: string;
  specialNote: string;
}

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function LocationInputs({
  formData,
  setFormData,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="space-y-6">

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          Pickup & Destination
        </h3>

        <p className="mt-1 text-slate-500">
          Enter your journey locations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Pickup */}

        <div>

          <label className="mb-2 block font-medium">
            Pickup Location
          </label>

          <div className="relative">

            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" />

            <input
              type="text"
              name="pickup"
              required
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Enter pickup location"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-yellow-400"
            />

          </div>

        </div>

        {/* Drop */}

        <div>

          <label className="mb-2 block font-medium">
            Destination
          </label>

          <div className="relative">

            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600" />

            <input
              type="text"
              name="drop"
              required
              value={formData.drop}
              onChange={handleChange}
              placeholder="Enter destination"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-yellow-400"
            />

          </div>

        </div>

      </div>

      {/* Trip Preview */}

      <div className="rounded-2xl border bg-slate-50 p-6">

        <h4 className="mb-4 font-semibold">
          Trip Preview
        </h4>

        <div className="space-y-3">

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-green-500" />

            <span className="text-slate-700">
              {formData.pickup || "Pickup Location"}
            </span>

          </div>

          <div className="ml-[5px] h-8 border-l-2 border-dashed border-slate-300" />

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-red-500" />

            <span className="text-slate-700">
              {formData.drop || "Destination"}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}