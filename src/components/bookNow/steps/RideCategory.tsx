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
    price: "₹11/km",
    description: "Affordable city rides",
    gradient: "from-green-50 to-white",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    features: ["AC Vehicle", "4 Passengers", "2 Bags"],
  },
  {
    id: "standard",
    title: "Standard",
    icon: BadgeCheck,
    price: "₹14/km",
    description: "Comfort + value",
    gradient: "from-yellow-50 to-white",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    popular: true,
    features: ["Premium Sedan", "3 Bags", "Smooth Ride"],
  },
  {
    id: "business",
    title: "Business",
    icon: Crown,
    price: "₹20/km",
    description: "Luxury travel",
    gradient: "from-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    features: ["Luxury Car", "Chauffeur", "Priority Support"],
  },
];

export default function RideCategory({ formData, setFormData }: Props) {
  return (
    <section className="w-full">
      {/* Header */}

      <div className="mb-6 text-center md:mb-10">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
          STEP 3
        </span>

        <h2 className="mt-3 text-2xl font-black text-slate-900 md:text-4xl">
          Choose Travel Category
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 md:text-base">
          Select comfort level according to your journey.
        </p>
      </div>

      {/* Cards */}

      <div
        className="
        grid 
        gap-4
        md:grid-cols-3
        md:gap-6
      "
      >
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
              className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              bg-gradient-to-br
              ${category.gradient}
              p-5
              text-left
              transition-all

              md:p-7

              ${
                selected
                  ? "border-blue-500 shadow-xl ring-4 ring-blue-100 scale-[1.02]"
                  : "border-slate-200 hover:-translate-y-1 hover:shadow-lg"
              }
            `}
            >
              {category.popular && (
                <div
                  className="
                absolute
                right-3
                top-3
                rounded-full
                bg-yellow-400
                px-3
                py-1
                text-[10px]
                font-black
                text-slate-900
              "
                >
                  ⭐ POPULAR
                </div>
              )}

              {/* Icon */}

              <div
                className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              ${category.iconBg}
              md:h-16
              md:w-16
            `}
              >
                <Icon
                  className={`
                  h-6
                  w-6
                  ${category.iconColor}
                  md:h-8
                  md:w-8
                `}
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h3
                  className="
                text-xl
                font-black
                text-slate-900
                md:text-2xl
              "
                >
                  {category.title}
                </h3>

                <span
                  className="
                rounded-full
                bg-white
                px-3
                py-1
                text-sm
                font-bold
                text-blue-700
                shadow-sm
              "
                >
                  {category.price}
                </span>
              </div>

              <p
                className="
              mt-2
              text-sm
              text-slate-600
            "
              >
                {category.description}
              </p>

              {/* Features */}

              <div
                className="
              mt-5
              flex
              flex-wrap
              gap-2
            "
              >
                {category.features.map((item) => (
                  <span
                    key={item}
                    className="
                    rounded-full
                    bg-white
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-slate-700
                    shadow-sm
                  "
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Button */}

              <div
                className={`
                mt-6
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                py-3
                text-sm
                font-bold

                ${
                  selected
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-700 text-white"
                }
              `}
              >
                {selected ? (
                  <>
                    <CheckCircle2 size={18} />
                    Selected
                  </>
                ) : (
                  <>
                    Choose
                    <ArrowRight size={17} />
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Suggestion */}

      <div
        className="
        mt-6
        flex
        gap-4
        rounded-3xl
        border
        border-blue-100
        bg-gradient-to-r
        from-blue-50
        via-white
        to-yellow-50
        p-5

        md:mt-10
        md:p-8
      "
      >
        <div
          className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-yellow-400
        "
        >
          <Sparkles className="h-6 w-6 text-white" />
        </div>

        <div>
          <h3
            className="
            text-base
            font-black
            text-slate-900
            md:text-xl
          "
          >
            Need help choosing?
          </h3>

          <p
            className="
            mt-1
            text-sm
            leading-6
            text-slate-600
          "
          >
            Standard category gives the best balance of comfort and price. Our
            team will suggest the right vehicle before confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
