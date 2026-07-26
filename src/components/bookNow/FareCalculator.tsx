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

const vehicleRates: Record<string, number> = {
  "Swift Dzire": 12,
  Ertiga: 15,
  Innova: 18,
  "Innova Crysta": 20,
  "Tempo Traveller": 28,
  "Mini Bus": 35,
};

export default function FareCalculator({
  vehicle,
  pickup,
  drop,
}: Props) {
  // Temporary Distance
  // Replace with Google Maps Distance Matrix API later
  const distance = 125;

  const rate = vehicleRates[vehicle] || 0;

  const baseFare = distance * rate;

  const driverAllowance = distance > 150 ? 500 : 0;

  const toll = 150;

  const gst = Math.round((baseFare + driverAllowance + toll) * 0.05);

  const total =
    baseFare +
    driverAllowance +
    toll +
    gst;

  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 p-8">

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 shadow-lg">

            <ReceiptIndianRupee
              size={32}
              className="text-slate-900"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              Estimated Fare
            </h2>

            <p className="mt-2 text-blue-100">
              Final fare depends on the actual travel route,
              tolls and applicable taxes.
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-8 p-8">

        {/* Route Details */}

        <div>

          <h3 className="mb-5 text-lg font-bold text-slate-900">
            Route Details
          </h3>

          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">

              <div className="flex items-center gap-2 text-slate-600">

                <MapPin size={18} />

                Pickup

              </div>

              <span className="font-semibold text-slate-900">
                {pickup || "Select Pickup"}
              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">

              <div className="flex items-center gap-2 text-slate-600">

                <MapPin size={18} />

                Drop

              </div>

              <span className="font-semibold text-slate-900">
                {drop || "Select Destination"}
              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">

              <div className="flex items-center gap-2 text-slate-600">

                <MapPinned size={18} />

                Distance

              </div>

              <span className="font-semibold">
                {distance} km
              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">

              <div className="flex items-center gap-2 text-slate-600">

                <CarTaxiFront size={18} />

                Vehicle

              </div>

              <span className="font-semibold">
                {vehicle || "Choose Vehicle"}
              </span>

            </div>

          </div>

        </div>

        {/* Fare Breakdown */}

        <div>

          <h3 className="mb-5 text-lg font-bold text-slate-900">
            Fare Breakdown
          </h3>

          <div className="space-y-2">

            <div className="flex justify-between rounded-lg px-2 py-2 hover:bg-slate-50">
              <span className="text-slate-600">Rate</span>
              <span className="font-semibold">₹{rate}/km</span>
            </div>

            <div className="flex justify-between rounded-lg px-2 py-2 hover:bg-slate-50">
              <span className="text-slate-600">Base Fare</span>
              <span className="font-semibold">
                ₹{baseFare}
              </span>
            </div>

            <div className="flex justify-between rounded-lg px-2 py-2 hover:bg-slate-50">
              <span className="text-slate-600">
                Driver Allowance
              </span>
              <span className="font-semibold">
                ₹{driverAllowance}
              </span>
            </div>

            <div className="flex justify-between rounded-lg px-2 py-2 hover:bg-slate-50">
              <span className="text-slate-600">
                Toll / Parking
              </span>
              <span className="font-semibold">
                ₹{toll}
              </span>
            </div>

            <div className="flex justify-between rounded-lg px-2 py-2 hover:bg-slate-50">
              <span className="text-slate-600">
                GST (5%)
              </span>
              <span className="font-semibold">
                ₹{gst}
              </span>
            </div>

          </div>

        </div>

        {/* Total */}

        <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-amber-400 p-6 shadow-lg">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                Estimated Total
              </p>

              <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
                ₹{total}
              </h2>

            </div>

            <div className="rounded-full bg-white px-5 py-2 text-sm font-bold shadow">
              Approx.
            </div>

          </div>

        </div>

        {/* Trust Badges */}

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl border bg-slate-50 p-4 text-center">

            <ShieldCheck
              className="mx-auto text-green-600"
              size={26}
            />

            <p className="mt-2 text-sm font-medium">
              Verified Pricing
            </p>

          </div>

          <div className="rounded-2xl border bg-slate-50 p-4 text-center">

            <BadgeCheck
              className="mx-auto text-blue-600"
              size={26}
            />

            <p className="mt-2 text-sm font-medium">
              GST Included
            </p>

          </div>

          <div className="rounded-2xl border bg-slate-50 p-4 text-center">

            <CircleDollarSign
              className="mx-auto text-yellow-500"
              size={26}
            />

            <p className="mt-2 text-sm font-medium">
              No Hidden Charges
            </p>

          </div>

        </div>

        {/* Note */}

        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

          <p className="text-sm leading-7 text-slate-600">

            <span className="font-semibold text-slate-800">
              Note:
            </span>{" "}
            This fare is only an estimate. Final pricing may vary based on
            the selected route, tolls, parking, state taxes, waiting time,
            night charges and any additional travel requirements. The exact
            amount will be confirmed by our team before your journey begins.

          </p>

        </div>

      </div>
    </div>
  );
}