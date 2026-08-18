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
        <h4 className="text-sm font-bold text-slate-900">
          Select Travel Comfort Tier
        </h4>
        <p className="text-xs text-slate-600">
          Choose standard, economy, or business class for your ride:
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-3.5 sm:grid-cols-3">
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
              className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${category.gradient} p-4 text-left transition-all duration-200 ${
                selected
                  ? "border-blue-600 shadow-md ring-2 ring-blue-600 scale-[1.01]"
                  : "border-slate-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm"
              }`}
            >
              {category.popular && (
                <div className="absolute right-2.5 top-2.5 rounded-full bg-yellow-400 px-2 py-0.5 text-[9px] font-black text-slate-950 shadow-sm">
                  POPULAR
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${category.iconBg}`}
                >
                  <Icon className={`h-5 w-5 ${category.iconColor}`} />
                </div>

                <div>
                  <h5 className="text-sm font-bold text-slate-900">
                    {category.title}
                  </h5>
                  <span className="text-xs font-extrabold text-blue-800">
                    {category.price}
                  </span>
                </div>
              </div>

              <p className="mt-2 text-[11px] text-slate-600 leading-relaxed">
                {category.description}
              </p>

              {/* Features */}
              <div className="mt-2.5 flex flex-wrap gap-1">
                {category.features.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/90 border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-700"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Select Status */}
              <div
                className={`mt-3 flex items-center justify-center gap-1.5 rounded-xl py-1.5 text-xs font-bold transition ${
                  selected
                    ? "bg-blue-700 text-white"
                    : "bg-slate-100 text-slate-700 group-hover:bg-blue-50"
                }`}
              >
                {selected ? (
                  <>
                    <CheckCircle2 size={14} />
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
