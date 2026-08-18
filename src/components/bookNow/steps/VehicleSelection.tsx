"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Users, Briefcase, Snowflake, CheckCircle2, Star } from "lucide-react";

// import { BookingData } from "../BookingForm";
import type { BookingData } from "@/types/booking";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const vehicles = [
  {
    id: "hatchback",
    name: "Hatchback",
    image: "/images/fleet/dzire.png",
    seats: "4 Passengers",
    luggage: "2 Bags",
    ac: true,
    recommended: false,
    price: "₹11/km",
  },
  {
    id: "sedan",
    name: "Sedan",
    image: "/images/fleet/sedan.png",
    seats: "4 Passengers",
    luggage: "3 Bags",
    ac: true,
    recommended: true,
    price: "₹13/km",
  },
  {
    id: "suv",
    name: "SUV",
    image: "/images/fleet/suv.png",
    seats: "6 Passengers",
    luggage: "4 Bags",
    ac: true,
    recommended: false,
    price: "₹18/km",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    image: "/images/fleet/ertiga.png",
    seats: "6 Passengers",
    luggage: "4 Bags",
    ac: true,
    recommended: false,
    price: "₹17/km",
  },
  {
    id: "crysta",
    name: "Innova Crysta",
    image: "/images/fleet/innova.png",
    seats: "7 Passengers",
    luggage: "5 Bags",
    ac: true,
    recommended: true,
    price: "₹22/km",
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    image: "/images/fleet/tempo.png",
    seats: "12–26 Passengers",
    luggage: "Large Capacity",
    ac: true,
    recommended: false,
    price: "Custom Quote",
  },
];

export default function VehicleSelection({ formData, setFormData }: Props) {
  return (
    <section className="w-full">
      {/* Header */}

      <div className="mb-8 text-center lg:mb-12">
        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-700 sm:text-sm">
          Step 3 of 5
        </span>

        <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
          Choose Your Vehicle
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Select the perfect vehicle based on your travel requirements,
          passenger count and luggage.
        </p>
      </div>

      {/* Vehicle Grid */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((vehicle) => {
          const selected = formData.vehicle === vehicle.id;

          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  vehicle: vehicle.id,
                }))
              }
              className={`group relative overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300

              ${
                selected
                  ? "border-yellow-400 ring-4 ring-yellow-200 shadow-xl"
                  : "border-slate-200 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
              }`}
            >
              {vehicle.recommended && (
                <div className="absolute right-3 top-3 z-20 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900 shadow">
                  ⭐ Popular
                </div>
              )}

              <div className="relative h-40 bg-gradient-to-br from-slate-50 to-slate-100 sm:h-48 lg:h-52">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4 transition duration-500 group-hover:scale-105 sm:p-6"
                />
              </div>

              <div className="p-5 lg:p-6">
                <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  {vehicle.name}
                </h3>

                <p className="mt-2 text-lg font-bold text-blue-700">
                  {vehicle.price}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-700 lg:text-base">
                    <Users size={18} className="shrink-0 text-yellow-500" />
                    {vehicle.seats}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-700 lg:text-base">
                    <Briefcase size={18} className="shrink-0 text-yellow-500" />
                    {vehicle.luggage}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-700 lg:text-base">
                    <Snowflake size={18} className="shrink-0 text-blue-600" />
                    Air Conditioned
                  </div>
                </div>
                {selected ? (
                  <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-100 px-4 py-3 text-sm font-semibold text-green-700 lg:text-base">
                    <CheckCircle2 size={20} />
                    Selected
                  </div>
                ) : (
                  <div className="mt-6 rounded-xl border border-blue-600 px-4 py-3 text-center text-sm font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white lg:text-base">
                    Select Vehicle
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Help Section */}

      <div className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-yellow-50 p-5 shadow-sm lg:mt-14 lg:rounded-3xl lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-white sm:mx-0">
            <Star size={26} />
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900 lg:text-2xl">
              Need help choosing a vehicle?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-700 lg:text-base">
              Our travel experts will recommend the best vehicle according to
              your passenger count, luggage, travel distance and budget. If
              you're unsure, simply select any option and we'll confirm the most
              suitable vehicle before your trip.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
                ✓ Family Trips
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
                ✓ Airport Transfers
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
                ✓ Outstation Tours
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
                ✓ Wedding Travel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
