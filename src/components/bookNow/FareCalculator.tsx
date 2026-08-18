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

const vehicleRates: Record<string, number> = {
  "Swift Dzire": 12,
  Sedan: 12,
  Ertiga: 15,
  SUV: 15,
  Innova: 18,
  "Innova Crysta": 20,
  "Tempo Traveller": 26,
  "Mini Bus": 35,
};

const categoryRates = {
  economy: 0,
  standard: 200,
  business: 600,
};

const extraPrices: Record<string, number> = {
  "Child Seat": 200,
  "Extra Luggage": 300,
  "Meet & Greet": 400,
  "Pet Friendly": 250,
  Wheelchair: 0,
  "Roof Carrier": 350,
};

const DISTANCE = 120;

export default function FareCalculator({
  vehicle,
  pickup,
  drop,
  category,
  extras,
  serviceType,
}: Props) {
  const distance = DISTANCE;
  const rate = vehicleRates[vehicle] ?? 12;
  const baseFare = distance * rate;
  const categoryFare = categoryRates[category] ?? 0;
  const extrasFare = (extras ?? []).reduce(
    (total, item) => total + (extraPrices[item] || 0),
    0
  );

  let serviceCharge = 0;
  if (serviceType === "Airport Transfer") serviceCharge = 200;
  else if (serviceType === "Round Trip") serviceCharge = 400;

  const driverAllowance = distance > 150 ? 400 : 0;
  const toll = 150;
  const gst = Math.round(
    (baseFare + categoryFare + extrasFare + serviceCharge + driverAllowance + toll) * 0.05
  );

  const total =
    baseFare + categoryFare + extrasFare + serviceCharge + driverAllowance + toll + gst;

  const fareRows = [
    { label: "Base Rate", value: `₹${rate}/km`, color: "bg-blue-500" },
    { label: "Base Fare (Estimated)", value: `₹${baseFare}`, color: "bg-indigo-500" },
    { label: "Tier Adjustment", value: `₹${categoryFare}`, color: "bg-purple-500" },
    { label: "Service / Inclusions", value: `₹${serviceCharge}`, color: "bg-emerald-500" },
    { label: "Toll & State Permits", value: `₹${toll}`, color: "bg-amber-500" },
    { label: "GST (5%)", value: `₹${gst}`, color: "bg-green-600" },
  ];

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* 1. Route Summary Box */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900">
            Route Overview
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs sm:text-sm font-extrabold text-blue-800">
            ~{distance} KM
          </span>
        </div>

        <div className="space-y-2.5 text-sm sm:text-base font-semibold">
          <div className="flex items-start gap-2.5">
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-slate-500 block">Pickup Location</span>
              <p className="font-bold text-slate-900 truncate">
                {pickup || "Lucknow City / Airport"}
              </p>
            </div>
          </div>

          <div className="ml-[4px] h-3.5 border-l-2 border-dashed border-slate-300" />

          <div className="flex items-start gap-2.5">
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-slate-500 block">Destination</span>
              <p className="font-bold text-slate-900 truncate">
                {drop || "Selected Destination"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Selected Parameters Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
        <div className="rounded-2xl border border-slate-200 bg-white p-3.5">
          <span className="text-xs text-slate-500 block uppercase font-bold">Vehicle</span>
          <p className="font-bold text-slate-900 text-sm sm:text-base truncate mt-1">{vehicle || "Swift Dzire"}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3.5">
          <span className="text-xs text-slate-500 block uppercase font-bold">Comfort Tier</span>
          <p className="font-bold text-slate-900 text-sm sm:text-base capitalize truncate mt-1">{category}</p>
        </div>

        <div className="col-span-2 sm:col-span-1 rounded-2xl border border-slate-200 bg-white p-3.5">
          <span className="text-xs text-slate-500 block uppercase font-bold">Trip Type</span>
          <p className="font-bold text-slate-900 text-sm sm:text-base truncate mt-1">{serviceType}</p>
        </div>
      </div>

      {/* 3. Fare Breakdown Table */}
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <span className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wider">
            Fare Breakdown
          </span>
          <span className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
            All-Inclusive
          </span>
        </div>

        <div className="divide-y divide-slate-100 text-sm sm:text-base">
          {fareRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 rounded-full ${row.color}`} />
                <span className="text-slate-800 font-semibold">{row.label}</span>
              </div>
              <span className="font-extrabold text-slate-900">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Total Highlight Card */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-5 sm:p-7 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-blue-100">
              Estimated Total Fare
            </span>
            <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              ₹{total.toLocaleString("en-IN")}
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">
              Includes Driver, AC, Tolls, State Taxes & GST.
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-3.5 sm:p-4 text-center shrink-0 self-start sm:self-auto">
            <span className="text-xs uppercase font-bold text-blue-200 block">Avg Rate</span>
            <span className="text-lg sm:text-xl font-black text-yellow-300">
              ₹{Math.round(total / distance)}/km
            </span>
          </div>
        </div>

        {/* 4 Trust Pills */}
        <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs sm:text-sm font-semibold text-blue-100">
          <span className="flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} className="text-emerald-400" />
            Safe & Sanitized
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <BadgeCheck size={16} className="text-cyan-400" />
            GST Bill Ready
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <CircleDollarSign size={16} className="text-yellow-400" />
            No Hidden Fees
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <ReceiptIndianRupee size={16} className="text-pink-400" />
            Guaranteed Rate
          </span>
        </div>
      </div>
    </div>
  );
}
