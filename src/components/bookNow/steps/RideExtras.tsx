"use client";

import { Dispatch, SetStateAction } from "react";
import {
  CheckCircle2,
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

import { BookingData } from "../types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const complimentary = [
  {
    id: "charger",
    title: "Mobile Charger",
    icon: Gift,
  },
  {
    id: "tissue",
    title: "Tissue Paper",
    icon: Gift,
  },
];

const extras = [
  {
    id: "water",
    title: "Mineral Water Bottle",
    price: 30,
    icon: Coffee,
  },
  {
    id: "newspaper",
    title: "Daily Newspaper",
    price: 20,
    icon: Newspaper,
  },
  {
    id: "wifi",
    title: "Wi-Fi Hotspot",
    price: 100,
    icon: Wifi,
  },
  {
    id: "baby-seat",
    title: "Baby Seat",
    price: 300,
    icon: Baby,
  },
  {
    id: "wheelchair",
    title: "Wheelchair Assistance",
    price: 500,
    icon: Accessibility,
  },
  {
    id: "meet-greet",
    title: "Airport Meet & Greet",
    price: 400,
    icon: MapPinned,
  },
  {
    id: "multiple-stops",
    title: "Multiple Stops",
    price: 300,
    icon: Car,
  },
];

export default function RideExtras({ formData, setFormData }: Props) {
  const toggleExtra = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter((item) => item !== id)
        : [...prev.extras, id],
    }));
  };

  return (
    <section className="w-full">
      {/* Header */}

      <div className="mb-10 text-center">
        <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          STEP 5
        </span>

        <h2 className="mt-4 text-3xl font-black text-slate-900 lg:text-4xl">
          Customize Your Ride
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Personalize your journey with optional travel services and premium
          add-ons.
        </p>
      </div>

      {/* Complimentary */}

      <div className="rounded-3xl border border-green-200 bg-green-50 p-8">
        <div className="mb-6 flex items-center gap-3">
          <Gift className="text-green-600" />
          <h3 className="text-2xl font-bold text-slate-900">
            Complimentary Services
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {complimentary.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-green-100 p-3">
                    <Icon className="text-green-700" size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="text-sm text-green-600">Included Free</p>
                  </div>
                </div>

                <CheckCircle2 className="text-green-600" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Paid Extras */}

      <div className="mt-10">
        <h3 className="mb-6 text-2xl font-bold text-slate-900">
          Premium Add-ons
        </h3>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {extras.map((extra) => {
            const Icon = extra.icon;

            const selected = formData.extras.includes(extra.id);

            return (
              <button
                key={extra.id}
                type="button"
                onClick={() => toggleExtra(extra.id)}
                className={`rounded-3xl border p-6 text-left transition-all duration-300

                ${
                  selected
                    ? "border-yellow-400 bg-yellow-50 ring-4 ring-yellow-100 shadow-lg"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-100 p-3">
                    <Icon className="text-blue-700" size={24} />
                  </div>

                  {selected && <CheckCircle2 className="text-green-600" />}
                </div>

                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  {extra.title}
                </h4>

                <p className="mt-2 text-blue-700 font-bold">+ ₹{extra.price}</p>

                {selected ? (
                  <div className="mt-6 rounded-xl bg-green-100 py-3 text-center font-semibold text-green-700">
                    Added
                  </div>
                ) : (
                  <div className="mt-6 rounded-xl border border-blue-600 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
                    Add Service
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Info */}

      <div className="mt-12 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-white to-blue-50 p-8">
        <div className="flex items-start gap-5">
          <div className="rounded-full bg-yellow-400 p-4">
            <Sparkles className="text-white" size={28} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Enhance Your Travel Experience
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
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
