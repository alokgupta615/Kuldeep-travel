"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Wallet,
  BadgeCheck,
  Crown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// import { BookingData } from "../types/booking";
import type { BookingData } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const categories = [
  {
    id: "economy",
    title: "Economy",
    icon: Wallet,
    price: "Starting ₹11/km",
    description: "Affordable rides for daily travel.",
    color: "green",
    popular: false,
    features: [
      "Budget Friendly",
      "Air Conditioned",
      "4 Passengers",
      "2 Luggage Bags",
      "Perfect for City Travel",
    ],
  },
  {
    id: "standard",
    title: "Standard",
    icon: BadgeCheck,
    price: "Starting ₹14/km",
    description: "Extra comfort for families & business travellers.",
    color: "yellow",
    popular: true,
    features: [
      "Premium Sedan",
      "Better Comfort",
      "3 Luggage Bags",
      "Most Popular",
      "Smooth Ride",
    ],
  },
  {
    id: "business",
    title: "Business",
    icon: Crown,
    price: "Starting ₹20/km",
    description: "Luxury experience with premium vehicles.",
    color: "blue",
    popular: false,
    features: [
      "Luxury Vehicles",
      "Professional Chauffeur",
      "Premium Interior",
      "Priority Support",
      "Executive Experience",
    ],
  },
];

export default function RideCategory({ formData, setFormData }: Props) {
  return (
    <section className="w-full">
      {/* Header */}

      <div className="mb-10 text-center">
        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          STEP 3
        </span>

        <h2 className="mt-4 text-3xl font-black text-slate-900 lg:text-4xl">
          Choose Your Travel Category
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Select the travel experience that best matches your comfort, budget
          and journey requirements.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
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
                  category: category.id as "economy" | "standard" | "business",
                  vehicle: "",
                }))
              }
              className={`relative overflow-hidden rounded-3xl border bg-white p-7 text-left transition-all duration-300

              ${
                selected
                  ? "border-yellow-400 ring-4 ring-yellow-200 shadow-2xl"
                  : "border-slate-200 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              }`}
            >
              {category.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                  ⭐ Most Popular
                </div>
              )}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <Icon className="h-8 w-8 text-blue-700" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-2 text-lg font-bold text-blue-700">
                {category.price}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {category.description}
              </p>

              <div className="mt-6 space-y-3">
                {category.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-green-600" />

                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              {selected ? (
                <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-green-100 py-3 font-semibold text-green-700">
                  <CheckCircle2 size={20} />
                  Selected
                </div>
              ) : (
                <div className="mt-8 rounded-2xl border border-blue-600 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
                  Select Category
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Info */}

      <div className="mt-10 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-yellow-50 p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Not sure which category to choose?
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Choose <strong>Standard</strong> for the best balance of comfort
              and price. Our team will recommend the most suitable vehicle based
              on your passenger count, luggage, and travel distance before
              confirming your booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
