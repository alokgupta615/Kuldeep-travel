"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Wallet,
  BadgeCheck,
  Crown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import type { BookingData, VehicleCategory } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const categories = [
  {
    id: "economy" as VehicleCategory,
    title: "Economy",
    icon: Wallet,
    price: "₹11/km",
    description: "Affordable city rides & daily transfers",
    gradient: "from-green-50 to-white",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    features: ["AC Vehicle", "4 Passengers", "2 Bags"],
  },
  {
    id: "standard" as VehicleCategory,
    title: "Standard",
    icon: BadgeCheck,
    price: "₹14/km",
    description: "Best comfort + value for families",
    gradient: "from-yellow-50 to-white",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    popular: true,
    features: ["Prime Sedan / SUV", "3-4 Bags", "Smooth Ride"],
  },
  {
    id: "business" as VehicleCategory,
    title: "Business / Luxury",
    icon: Crown,
    price: "₹20/km",
    description: "Plush captain seats & executive travel",
    gradient: "from-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    features: ["Innova Crysta / Luxury", "Chauffeur", "Priority Support"],
  },
];

export default function RideCategory({ formData, setFormData }: Props) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4">
        <h4 className="text-base sm:text-lg font-bold text-slate-900">
          Select Travel Comfort Tier
        </h4>
        <p className="text-sm text-slate-700 mt-0.5">
          Choose standard, economy, or business class for your ride:
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const selected = formData.category === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  category: category.id,
                }))
              }
              className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${category.gradient} p-4 sm:p-5 text-left transition-all duration-200 ${
                selected
                  ? "border-blue-600 shadow-lg ring-2 ring-blue-600 scale-[1.01]"
                  : "border-slate-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              }`}
            >
              {category.popular && (
                <div className="absolute right-3 top-3 rounded-full bg-yellow-400 px-2.5 py-0.5 text-xs font-black text-slate-950 shadow-xs">
                  POPULAR
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${category.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-bold text-slate-900">
                    {category.title}
                  </h5>
                  <span className="text-sm font-extrabold text-blue-800">
                    {category.price}
                  </span>
                </div>
              </div>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {category.description}
              </p>

              {/* Features */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {category.features.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-800"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Select Status */}
              <div
                className={`mt-4 flex items-center justify-center gap-2 rounded-xl py-2 text-xs sm:text-sm font-bold transition ${
                  selected
                    ? "bg-blue-700 text-white"
                    : "bg-slate-100 text-slate-800 group-hover:bg-blue-50"
                }`}
              >
                {selected ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>Selected Tier</span>
                  </>
                ) : (
                  <span>Select {category.title}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
