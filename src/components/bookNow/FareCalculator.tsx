"use client";

import {
  CarTaxiFront,
  MapPinned,
  ReceiptIndianRupee,
  ShieldCheck,
  BadgeCheck,
  CircleDollarSign,
  MapPin,
  Sparkles,
  Tag,
  BriefcaseBusiness,
} from "lucide-react";

interface Props {
  vehicle: string;
  pickup: string;
  drop: string;

  category: "economy" | "standard" | "business";

  extras: string[];

  serviceType: string;
}

/* -----------------------------
 Vehicle Rates (₹ / KM)
--------------------------------*/

const vehicleRates: Record<string, number> = {
  hatchback: 11,
  sedan: 13,
  suv: 18,
  ertiga: 17,
  crysta: 22,
  tempo: 28,
};

/* -----------------------------
 Category Charges
--------------------------------*/

const categoryRates = {
  economy: 0,
  standard: 300,
  business: 700,
};

/* -----------------------------
 Extra Service Charges
--------------------------------*/

const extraPrices: Record<string, number> = {
  "Child Seat": 200,
  "Extra Luggage": 300,
  "Meet & Greet": 500,
  "Pet Friendly": 250,
  Wheelchair: 0,
  "Roof Carrier": 400,
};

/* -----------------------------
 Demo Distance
Replace later with
Google Distance Matrix API
--------------------------------*/

const DISTANCE = 125;

export default function FareCalculator({
  vehicle,
  pickup,
  drop,
  category,
  extras,
  serviceType,
}: Props) {
  const distance = DISTANCE;

  /* -----------------------------
      Base Fare
  --------------------------------*/

  const rate = vehicleRates[vehicle] ?? 0;

  const baseFare = distance * rate;

  /* -----------------------------
      Category Fare
  --------------------------------*/

  const categoryFare = categoryRates[category] ?? 0;

  /* -----------------------------
      Extras Fare
  --------------------------------*/

  const extrasFare = (extras ?? []).reduce(
    (total, item) => total + (extraPrices[item] || 0),
    0,
  );

  /* -----------------------------
      Service Charge
  --------------------------------*/

  let serviceCharge = 0;

  switch (serviceType) {
    case "Airport Transfer":
      serviceCharge = 200;
      break;

    case "Round Trip":
      serviceCharge = 500;
      break;

    default:
      serviceCharge = 0;
  }

  /* -----------------------------
      Driver Allowance
  --------------------------------*/

  const driverAllowance = distance > 150 ? 500 : 0;

  /* -----------------------------
      Toll
  --------------------------------*/

  const toll = 150;

  /* -----------------------------
      GST
  --------------------------------*/

  const gst = Math.round(
    (baseFare +
      categoryFare +
      extrasFare +
      serviceCharge +
      driverAllowance +
      toll) *
      0.05,
  );

  /* -----------------------------
      Grand Total
  --------------------------------*/

  const total =
    baseFare +
    categoryFare +
    extrasFare +
    serviceCharge +
    driverAllowance +
    toll +
    gst;

  /* -----------------------------
      Fare Breakdown
  --------------------------------*/

  const fareRows = [
    {
      label: "Rate",
      value: `₹${rate}/km`,
    },
    {
      label: "Base Fare",
      value: `₹${baseFare}`,
    },
    {
      label: "Category Charge",
      value: `₹${categoryFare}`,
    },
    {
      label: "Extras",
      value: `₹${extrasFare}`,
    },
    {
      label: "Service Charge",
      value: `₹${serviceCharge}`,
    },
    {
      label: "Driver Allowance",
      value: `₹${driverAllowance}`,
    },
    {
      label: "Toll & Parking",
      value: `₹${toll}`,
    },
    {
      label: "GST (5%)",
      value: `₹${gst}`,
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg sm:rounded-3xl sm:shadow-xl">
      <div className="space-y-3 px-2 py-3 sm:space-y-4 sm:px-5 sm:py-5 lg:space-y-5 lg:px-6 lg:py-6">
        {/* ================= JOURNEY OVERVIEW ================= */}

        <section className="w-full">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="text-[17px] font-bold text-slate-900">
                Journey Overview
              </h3>

              <p className="text-xs text-slate-500 sm:text-sm">
                Review your selected ride details
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {distance} KM
            </span>
          </div>

          <div className="space-y-2">
            {/* Pickup */}

            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:rounded-xl sm:p-3">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md">
                  <MapPin size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Pickup
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-slate-900 sm:text-base">
                    {pickup || "Select Pickup Location"}
                  </p>
                </div>
              </div>
            </div>

            {/* Route */}

            <div className="flex justify-center">
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <MapPinned size={16} className="text-blue-600" />

                <span className="text-xs font-semibold text-slate-600">
                  {distance} km Journey
                </span>
              </div>
            </div>

            {/* Drop */}

            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md sm:rounded-xl sm:p-3">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-md">
                  <MapPin size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Destination
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-slate-900 sm:text-base">
                    {drop || "Select Destination"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RIDE INFORMATION ================= */}

        <section>
          <div className="mb-2">
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Ride Information
            </h3>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Selected vehicle and services
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Vehicle */}

            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                <CarTaxiFront size={18} />
              </div>

              <p className="text-xs text-slate-500">Vehicle</p>

              <p className="mt-1 text-sm font-bold capitalize text-slate-900">
                {vehicle || "-"}
              </p>
            </div>

            {/* Category */}

            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <Tag size={18} />
              </div>

              <p className="text-xs text-slate-500">Category</p>

              <p className="mt-1 text-sm font-bold capitalize text-slate-900">
                {category}
              </p>
            </div>

            {/* Service */}

            <div className="col-span-2 rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                <BriefcaseBusiness size={18} />
              </div>

              <p className="text-xs text-slate-500">Service Type</p>

              <p className="mt-1 text-sm font-bold text-slate-900">
                {serviceType}
              </p>
            </div>
          </div>
        </section>

        {/* ================= RIDE EXTRAS ================= */}

        <section>
          <div className="mb-2">
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Ride Extras
            </h3>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
            {(extras ?? []).length ? (
              <div className="flex flex-wrap gap-2">
                {(extras ?? []).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="text-slate-400" />

                <p className="text-sm text-slate-500">
                  No extra services selected
                </p>
              </div>
            )}
          </div>
        </section>
        {/* ================= FARE BREAKDOWN ================= */}

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Fare Breakdown
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Transparent pricing with no hidden charges
              </p>
            </div>

            <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
              GST Included
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {fareRows.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-4 py-3 transition-all duration-200 hover:bg-slate-50 sm:px-5 sm:py-4 ${
                  index !== fareRows.length - 1
                    ? "border-b border-slate-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      item.label === "Base Fare"
                        ? "bg-blue-500"
                        : item.label === "Category Charge"
                          ? "bg-indigo-500"
                          : item.label === "Extras"
                            ? "bg-purple-500"
                            : item.label === "Service Charge"
                              ? "bg-emerald-500"
                              : item.label === "Driver Allowance"
                                ? "bg-orange-500"
                                : item.label === "Toll & Parking"
                                  ? "bg-red-500"
                                  : item.label === "GST (5%)"
                                    ? "bg-green-500"
                                    : "bg-slate-400"
                    }`}
                  />

                  <span className="text-sm font-medium text-slate-600 sm:text-base">
                    {item.label}
                  </span>
                </div>

                <span className="text-sm font-bold text-slate-900 sm:text-base">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICE SUMMARY ================= */}

        <section>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">
              <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                Base Fare
              </p>

              <p className="mt-2 text-2xl font-black text-blue-700">
                ₹{baseFare}
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-green-50 p-3">
              <p className="text-xs font-medium uppercase tracking-wide text-green-600">
                Additional Charges
              </p>

              <p className="mt-2 text-2xl font-black text-green-700">
                ₹{categoryFare + extrasFare + serviceCharge}
              </p>
            </div>
          </div>
        </section>
        {/* ================= TOTAL FARE ================= */}

        <section>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 shadow-xl">
            {/* Background Glow */}

            <div className="relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative p-4 sm:p-5 lg:p-6">
                {/* Header */}

                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100 backdrop-blur">
                      Estimated Fare
                    </span>

                    <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                      ₹{total}
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-6 text-blue-100">
                      Inclusive of GST, toll, parking and applicable charges.
                    </p>
                  </div>

                  {/* Fare Badge */}

                  <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-wider text-blue-100">
                      Average Cost
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      ₹{Math.round(total / distance)}
                      <span className="ml-1 text-sm font-medium text-blue-200">
                        /km
                      </span>
                    </p>
                  </div>
                </div>

                {/* Feature Pills */}

                <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
                  <div className="rounded-xl bg-white/10 p-2.5 text-center backdrop-blur">
                    <ShieldCheck size={20} className="mx-auto text-green-300" />

                    <p className="mt-2 text-xs font-semibold text-white">
                      Safe Ride
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-2.5 text-center backdrop-blur">
                    <BadgeCheck size={20} className="mx-auto text-cyan-300" />

                    <p className="mt-2 text-xs font-semibold text-white">
                      GST Included
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-2.5 text-center backdrop-blur">
                    <CircleDollarSign
                      size={20}
                      className="mx-auto text-yellow-300"
                    />

                    <p className="mt-2 text-xs font-semibold text-white">
                      No Hidden Fees
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-2.5 text-center backdrop-blur">
                    <ReceiptIndianRupee
                      size={20}
                      className="mx-auto text-pink-300"
                    />

                    <p className="mt-2 text-xs font-semibold text-white">
                      Best Price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================= WHY BOOK WITH US ================= */}

        {/* ================= IMPORTANT NOTE ================= */}
      </div>
    </div>
  );
}
