"use client";

import {
  CarTaxiFront,
  MapPinned,
  ReceiptIndianRupee,
  ShieldCheck,
  BadgeCheck,
  CircleDollarSign,
  MapPin,
} from "lucide-react";

interface Props {
  vehicle: string;
  pickup: string;
  drop: string;
}

/**
 * Per KM Rates
 */
const vehicleRates: Record<string, number> = {
  hatchback: 11,
  sedan: 13,
  suv: 18,
  ertiga: 17,
  crysta: 22,
  tempo: 28,
};

/**
 * Demo Distance
 * Replace this with Google Distance Matrix API later.
 */
const DISTANCE = 125;

export default function FareCalculator({ vehicle, pickup, drop }: Props) {
  const distance = DISTANCE;

  const rate = vehicleRates[vehicle] ?? 0;

  const baseFare = distance * rate;

  const driverAllowance = distance > 150 ? 500 : 0;

  const toll = 150;

  const gst = Math.round((baseFare + driverAllowance + toll) * 0.05);

  const total = baseFare + driverAllowance + toll + gst;

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
      label: "Driver Allowance",
      value: `₹${driverAllowance}`,
    },
    {
      label: "Toll / Parking",
      value: `₹${toll}`,
    },
    {
      label: "GST (5%)",
      value: `₹${gst}`,
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      {/* Header */}

      {/* Part 2 starts here */}
      {/* ================= BODY ================= */}

      <div className="space-y-6 p-5 sm:space-y-8 sm:p-6 lg:p-8">
        {/* ================= ROUTE DETAILS ================= */}

        <section>
          <h3 className="mb-5 text-lg font-bold text-slate-900">
            Route Details
          </h3>

          <div className="space-y-4">
            {/* Pickup */}

            <div className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-2">
                  <MapPin size={18} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Pickup
                  </p>

                  <p className="font-semibold text-slate-900">Starting Point</p>
                </div>
              </div>

              <p className="break-words text-sm font-semibold text-slate-900 sm:max-w-[55%] sm:text-right">
                {pickup || "Select Pickup Location"}
              </p>
            </div>

            {/* Drop */}

            <div className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-red-100 p-2">
                  <MapPin size={18} className="text-red-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Destination
                  </p>

                  <p className="font-semibold text-slate-900">Drop Location</p>
                </div>
              </div>

              <p className="break-words text-sm font-semibold text-slate-900 sm:max-w-[55%] sm:text-right">
                {drop || "Select Destination"}
              </p>
            </div>

            {/* Distance */}

            <div className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-2">
                  <MapPinned size={18} className="text-green-600" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Estimated Distance
                  </p>

                  <p className="font-semibold text-slate-900">
                    Travel Distance
                  </p>
                </div>
              </div>

              <p className="text-lg font-bold text-slate-900">{distance} km</p>
            </div>

            {/* Vehicle */}

            <div className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-yellow-100 p-2">
                  <CarTaxiFront size={18} className="text-yellow-600" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Selected Vehicle
                  </p>

                  <p className="font-semibold text-slate-900">Vehicle Type</p>
                </div>
              </div>

              <p className="text-sm font-semibold capitalize text-slate-900 sm:text-base">
                {vehicle || "Choose Vehicle"}
              </p>
            </div>
          </div>
        </section>

        {/* ================= FARE BREAKDOWN ================= */}

        <section>
          <h3 className="mb-5 text-lg font-bold text-slate-900">
            Fare Breakdown
          </h3>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            {[
              {
                label: "Rate",
                value: `₹${rate}/km`,
              },
              {
                label: "Base Fare",
                value: `₹${baseFare}`,
              },
              {
                label: "Driver Allowance",
                value: `₹${driverAllowance}`,
              },
              {
                label: "Toll / Parking",
                value: `₹${toll}`,
              },
              {
                label: "GST (5%)",
                value: `₹${gst}`,
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-5 py-4 text-sm transition hover:bg-slate-50 sm:text-base ${
                  index !== 4 ? "border-b border-slate-200" : ""
                }`}
              >
                <span className="text-slate-600">{item.label}</span>

                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
        {/* ================= TOTAL FARE ================= */}

        <section>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 shadow-xl">
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[3px] text-slate-700 sm:text-sm">
                  Estimated Total Fare
                </p>

                <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">
                  ₹{total}
                </h2>

                <p className="mt-2 text-sm text-slate-700">
                  Inclusive of GST, toll & applicable charges*
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <span className="rounded-full bg-white px-6 py-2 text-sm font-bold text-slate-900 shadow-lg">
                  Approximate Fare
                </span>

                <span className="text-sm font-medium text-slate-800">
                  Subject to actual distance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST BADGES ================= */}

        <section>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <ShieldCheck size={28} className="text-green-600" />
              </div>

              <h4 className="mt-4 text-lg font-bold text-slate-900">
                Verified Pricing
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Transparent fare calculation with no surprises.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <BadgeCheck size={28} className="text-blue-600" />
              </div>

              <h4 className="mt-4 text-lg font-bold text-slate-900">
                GST Included
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Taxes are calculated transparently.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 xl:col-span-1">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
                <CircleDollarSign size={28} className="text-yellow-600" />
              </div>

              <h4 className="mt-4 text-lg font-bold text-slate-900">
                No Hidden Charges
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Honest pricing with complete transparency.
              </p>
            </div>
          </div>
        </section>

        {/* ================= IMPORTANT NOTE ================= */}

        <section>
          <div className="rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">Important Note</h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              This fare is an approximate estimate based on the selected vehicle
              and assumed travel distance. The final amount may vary depending
              on the actual route, toll charges, parking fees, waiting time,
              night allowance, state taxes, additional stops, traffic conditions
              and any extra travel requirements.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Our travel team will always confirm the final fare with you before
              your journey begins.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
