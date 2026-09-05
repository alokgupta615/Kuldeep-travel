"use client";

import {
  ShieldCheck,
  BadgeCheck,
  CircleDollarSign,
  ReceiptIndianRupee,
} from "lucide-react";
import { calculateFare } from "@/lib/fareCalculator";

interface Props {
  vehicle: string;
  pickup: string;
  drop: string;
  category: "economy" | "standard" | "business";
  extras: string[];
  serviceType: string;
}

export default function FareCalculator({
  vehicle,
  pickup,
  drop,
  category,
  extras,
  serviceType,
}: Props) {
  const fareResult = calculateFare({
    pickup,
    drop,
    vehicle,
    category,
    extras,
    serviceType,
  });

  const hasRoute = Boolean(pickup?.trim() && drop?.trim());

  const fareRows = [
    { label: "Base Rate", value: `₹${fareResult.ratePerKm}/km`, color: "bg-blue-500" },
    {
      label: "Estimated Distance",
      value: hasRoute && fareResult.distance > 0 ? `~${fareResult.distance} KM` : "Enter Pickup & Drop",
      color: "bg-indigo-500",
    },
    {
      label: "Base Fare (Estimated)",
      value: `₹${fareResult.baseFare.toLocaleString("en-IN")}`,
      color: "bg-emerald-600",
    },
    ...(fareResult.extrasFare > 0
      ? [{ label: "Selected Add-ons", value: `₹${fareResult.extrasFare.toLocaleString("en-IN")}`, color: "bg-amber-500" }]
      : []),
  ];

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* 1. Route Summary Box */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900">
            Route Overview
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs sm:text-sm font-extrabold ${
              hasRoute && fareResult.distance > 0
                ? "bg-blue-100 text-blue-800"
                : "bg-amber-100 text-amber-800"
            }`}
          >
            {hasRoute && fareResult.distance > 0 ? `~${fareResult.distance} KM` : "Location Required"}
          </span>
        </div>

        <div className="space-y-2.5 text-sm sm:text-base font-semibold">
          <div className="flex items-start gap-2.5">
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-slate-500 block">Pickup Location</span>
              <p
                className={`font-bold truncate ${
                  pickup ? "text-slate-900" : "text-slate-400 italic"
                }`}
              >
                {pickup || "Enter Pickup Location"}
              </p>
            </div>
          </div>

          <div className="ml-[4px] h-3.5 border-l-2 border-dashed border-slate-300" />

          <div className="flex items-start gap-2.5">
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs text-slate-500 block">Destination</span>
              <p
                className={`font-bold truncate ${
                  drop ? "text-slate-900" : "text-slate-400 italic"
                }`}
              >
                {drop || "Enter Drop Destination"}
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
              ₹{fareResult.total.toLocaleString("en-IN")}
            </h3>
            {hasRoute && fareResult.total > 0 ? (
              <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">
                Includes Dedicated AC Vehicle &amp; Chauffeur.
              </p>
            ) : (
              <p className="text-xs sm:text-sm text-yellow-300 mt-1 font-medium">
                Please enter pickup and destination to calculate fare.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-3.5 sm:p-4 text-center shrink-0 self-start sm:self-auto">
            <span className="text-xs uppercase font-bold text-blue-200 block">Rate</span>
            <span className="text-lg sm:text-xl font-black text-yellow-300">
              ₹{fareResult.ratePerKm}/km
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
