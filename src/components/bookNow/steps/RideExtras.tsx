"use client";

import { Dispatch, SetStateAction } from "react";
import {
  CheckCircle2,
  Gift,
  Coffee,
  Sparkles,
} from "lucide-react";

import type { BookingData } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const complimentary = [
  {
    id: "charger",
    title: "Mobile Charger",
    description: "Fast charging cable available during your trip.",
    icon: Gift,
  },
  {
    id: "tissue",
    title: "Tissue Paper",
    description: "Premium tissue pack included free.",
    icon: Gift,
  },
  {
    id: "water",
    title: "Water Bottle",
    description: "Complimentary water bottle for your journey.",
    icon: Coffee,
  },
];

export default function RideExtras({ formData, setFormData }: Props) {
  return (
    <section className="w-full px-1 sm:px-0">
      {/* Header */}
      <div className="mb-6 text-center lg:mb-10">
        <span className="inline-flex rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-purple-700 sm:px-4 sm:py-2 sm:text-sm">
          Step 5
        </span>
        <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Customize Your Ride
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Personalize your travel experience with premium optional services for
          a smoother and more comfortable journey.
        </p>
      </div>

      {/* Complimentary Services */}
      <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-green-50 p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-green-100 p-2">
            <Gift size={20} className="text-green-700" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Complimentary Services
            </h3>
            <p className="text-xs text-slate-500 sm:text-sm">
              Included with every booking (Free of cost)
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {complimentary.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-green-100 bg-white p-3 shadow-sm transition hover:shadow-md sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2">
                    <Icon size={18} className="text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
                <CheckCircle2 size={20} className="text-green-600 shrink-0 ml-2" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Extra Things on Demand */}
      <div className="mt-8">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            Extra Things on Demand
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            If you need anything else (like baby seat, wheelchair, or multiple stops), please write it below.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <textarea
            value={formData.specialNote}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, specialNote: e.target.value }))
            }
            placeholder="Type your extra requirements here... We will get notified via email."
            className="w-full h-32 p-4 outline-none resize-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 text-slate-700"
          ></textarea>
        </div>
      </div>

      {/* Experience Banner */}
      <div className="mt-8 rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-white to-blue-50 p-4 sm:p-6 lg:mt-12">
        <div className="flex items-start gap-3 sm:gap-5">
          <div className="rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 p-3 shadow-lg">
            <Sparkles size={22} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Enhance Your Travel Experience
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Add optional services to make your journey more comfortable.
              We will try our best to arrange them for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
