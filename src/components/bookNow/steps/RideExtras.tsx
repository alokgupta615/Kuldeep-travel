"use client";

import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Gift,
  Coffee,
  Baby,
  Accessibility,
  Newspaper,
  Wifi,
  MapPinned,
  Car,
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
];

const extras = [
  {
    id: "water",
    title: "Mineral Water Bottle",
    description: "Stay refreshed throughout your journey.",
    price: 30,
    icon: Coffee,
  },
  {
    id: "newspaper",
    title: "Daily Newspaper",
    description: "Today's newspaper delivered before departure.",
    price: 20,
    icon: Newspaper,
  },
  {
    id: "wifi",
    title: "Wi-Fi Hotspot",
    description: "Unlimited high-speed internet in your cab.",
    price: 100,
    icon: Wifi,
  },
  {
    id: "baby-seat",
    title: "Baby Seat",
    description: "Safe and comfortable seat for children.",
    price: 300,
    icon: Baby,
  },
  {
    id: "wheelchair",
    title: "Wheelchair Assistance",
    description: "Special assistance for elderly passengers.",
    price: 500,
    icon: Accessibility,
  },
  {
    id: "meet-greet",
    title: "Airport Meet & Greet",
    description: "Professional executive will receive you.",
    price: 400,
    icon: MapPinned,
  },
  {
    id: "multiple-stops",
    title: "Multiple Stops",
    description: "Add additional stops to your journey.",
    price: 300,
    icon: Car,
  },
];

export default function RideExtras({ formData, setFormData }: Props) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleExtra = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter((item) => item !== id)
        : [...prev.extras, id],
    }));
  };

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
              Included with every booking
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
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

                <CheckCircle2 size={20} className="text-green-600" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Add-ons */}

      <div className="mt-8">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            Premium Add-ons
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Choose additional services for your ride.
          </p>
        </div>

        {/* MOBILE ACCORDION */}

        <div className="space-y-3 lg:hidden">
          {extras.map((extra) => {
            const Icon = extra.icon;
            const selected = formData.extras.includes(extra.id);
            const opened = openAccordion === extra.id;

            return (
              <div
                key={extra.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  selected
                    ? "border-blue-400 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {/* Accordion Header */}

                <button
                  type="button"
                  onClick={() => setOpenAccordion(opened ? null : extra.id)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-xl p-2.5 ${
                        selected ? "bg-blue-600" : "bg-blue-100"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={selected ? "text-white" : "text-blue-700"}
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {extra.title}
                      </h4>

                      <p className="mt-1 text-xs font-semibold text-blue-700">
                        + ₹{extra.price}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-slate-500 transition-transform duration-300 ${
                      opened ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}

                <div
                  className={`grid transition-all duration-300 ${
                    opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-4 pb-4 pt-3">
                      <p className="text-sm leading-6 text-slate-600">
                        {extra.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggleExtra(extra.id)}
                        className={`mt-4 w-full rounded-xl py-2.5 text-sm font-bold transition ${
                          selected
                            ? "bg-green-100 text-green-700"
                            : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200"
                        }`}
                      >
                        {selected ? "✓ Added" : `Add Service • ₹${extra.price}`}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP PREMIUM CARDS */}

        <div className="hidden gap-5 lg:grid lg:grid-cols-3">
          {extras.map((extra) => {
            const Icon = extra.icon;
            const selected = formData.extras.includes(extra.id);

            return (
              <button
                key={extra.id}
                type="button"
                onClick={() => toggleExtra(extra.id)}
                className={`group rounded-3xl border p-6 text-left transition-all duration-300 ${
                  selected
                    ? "border-yellow-400 bg-gradient-to-br from-yellow-50 via-white to-green-50 shadow-xl ring-4 ring-yellow-100"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`rounded-2xl p-3 transition ${
                      selected
                        ? "bg-yellow-400"
                        : "bg-blue-100 group-hover:bg-blue-600"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={
                        selected
                          ? "text-white"
                          : "text-blue-700 group-hover:text-white"
                      }
                    />
                  </div>

                  {selected && (
                    <CheckCircle2 size={24} className="text-green-600" />
                  )}
                </div>

                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  {extra.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {extra.description}
                </p>

                <p className="mt-4 text-lg font-black text-blue-700">
                  + ₹{extra.price}
                </p>

                <div
                  className={`mt-5 rounded-xl py-3 text-center text-sm font-bold transition ${
                    selected
                      ? "bg-green-100 text-green-700"
                      : "border border-blue-600 text-blue-700 group-hover:bg-blue-600 group-hover:text-white"
                  }`}
                >
                  {selected ? "✓ Service Added" : "Add Service"}
                </div>
              </button>
            );
          })}
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
              Selected services will be included in your booking confirmation
              and reflected in the final fare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
