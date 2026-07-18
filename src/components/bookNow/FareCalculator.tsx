"use client";

import { CarTaxiFront, MapPinned, ReceiptIndianRupee } from "lucide-react";

interface Props {
  vehicle: string;
  pickup: string;
  drop: string;
}

const vehicleRates: Record<string, number> = {
  "Swift Dzire": 12,
  "Ertiga": 15,
  "Innova": 18,
  "Innova Crysta": 20,
  "Tempo Traveller": 28,
  "Mini Bus": 35,
};

export default function FareCalculator({
  vehicle,
  pickup,
  drop,
}: Props) {
  // Temporary distance
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
    <div className="rounded-3xl border bg-white p-8 shadow-lg">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-yellow-400 p-3">
          <ReceiptIndianRupee className="text-slate-900" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Estimated Fare
          </h2>

          <p className="text-slate-500">
            Final fare may vary depending on route.
          </p>
        </div>

      </div>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-3">
          <span>Pickup</span>

          <span className="font-medium">
            {pickup || "-"}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Drop</span>

          <span className="font-medium">
            {drop || "-"}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="flex items-center gap-2">
            <MapPinned size={18} />
            Distance
          </span>

          <span>{distance} km</span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="flex items-center gap-2">
            <CarTaxiFront size={18} />
            Vehicle
          </span>

          <span>{vehicle || "-"}</span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span>Rate</span>

          <span>
            ₹{rate}/km
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span>Base Fare</span>

          <span>
            ₹{baseFare}
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span>Driver Allowance</span>

          <span>
            ₹{driverAllowance}
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span>Toll / Parking</span>

          <span>
            ₹{toll}
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span>GST (5%)</span>

          <span>
            ₹{gst}
          </span>

        </div>

        <div className="flex justify-between rounded-2xl bg-yellow-50 p-5">

          <span className="text-xl font-bold">
            Estimated Total
          </span>

          <span className="text-2xl font-extrabold text-yellow-600">
            ₹{total}
          </span>

        </div>

      </div>

      <p className="mt-5 text-sm text-slate-500">
        * This is an estimated fare. The final amount will be confirmed
        by the admin after verifying the pickup, drop location, and
        selected vehicle.
      </p>

    </div>
  );
}