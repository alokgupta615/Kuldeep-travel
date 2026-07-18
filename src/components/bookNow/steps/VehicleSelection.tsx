"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import {
  Users,
  Briefcase,
  Snowflake,
  CheckCircle2,
  Star,
} from "lucide-react";

import { BookingData } from "../BookingForm";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const vehicles = [
  {
    id: "hatchback",
    name: "Hatchback",
    image: "/images/vehicles/hatchback.png",
    seats: "4 Passengers",
    luggage: "2 Bags",
    ac: true,
    recommended: false,
    price: "₹11/km",
  },
  {
    id: "sedan",
    name: "Sedan",
    image: "/images/vehicles/sedan.png",
    seats: "4 Passengers",
    luggage: "3 Bags",
    ac: true,
    recommended: true,
    price: "₹13/km",
  },
  {
    id: "suv",
    name: "SUV",
    image: "/images/vehicles/suv.png",
    seats: "6 Passengers",
    luggage: "4 Bags",
    ac: true,
    recommended: false,
    price: "₹18/km",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    image: "/images/vehicles/ertiga.png",
    seats: "6 Passengers",
    luggage: "4 Bags",
    ac: true,
    recommended: false,
    price: "₹17/km",
  },
  {
    id: "crysta",
    name: "Innova Crysta",
    image: "/images/vehicles/innova-crysta.png",
    seats: "7 Passengers",
    luggage: "5 Bags",
    ac: true,
    recommended: true,
    price: "₹22/km",
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    image: "/images/vehicles/tempo-traveller.png",
    seats: "12–26 Passengers",
    luggage: "Large Capacity",
    ac: true,
    recommended: false,
    price: "Custom Quote",
  },
];

export default function VehicleSelection({
  formData,
  setFormData,
}: Props) {
  return (
    <div>
      <div className="mb-10">

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          STEP 3 OF 5
        </span>

        <h2 className="mt-4 text-3xl font-black text-slate-900">
          Choose Your Vehicle
        </h2>

        <p className="mt-3 text-slate-600">
          Select the vehicle that best suits your travel needs.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {vehicles.map((vehicle) => {

          const selected =
            formData.vehicle === vehicle.id;

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
              className={`relative overflow-hidden rounded-3xl border bg-white text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl

              ${
                selected
                  ? "border-yellow-400 ring-4 ring-yellow-200"
                  : "border-slate-200"
              }`}
            >

              {vehicle.recommended && (
                <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                  ⭐ Popular
                </div>
              )}

              <div className="relative h-52">

                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-6 transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {vehicle.name}
                </h3>

                <p className="mt-2 text-lg font-bold text-blue-700">
                  {vehicle.price}
                </p>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-slate-700">
                    <Users className="text-yellow-500" size={18} />
                    {vehicle.seats}
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <Briefcase className="text-yellow-500" size={18} />
                    {vehicle.luggage}
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <Snowflake className="text-blue-600" size={18} />
                    Air Conditioned
                  </div>

                </div>

                {selected ? (
                  <div className="mt-8 flex items-center gap-2 rounded-xl bg-green-100 px-4 py-3 font-semibold text-green-700">

                    <CheckCircle2 />

                    Selected

                  </div>
                ) : (
                  <div className="mt-8 rounded-xl border border-blue-600 px-4 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
                    Select Vehicle
                  </div>
                )}

              </div>

            </button>
          );
        })}

      </div>

      <div className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-yellow-50 p-8">

        <div className="flex items-start gap-4">

          <Star className="mt-1 text-yellow-500" />

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              Need help choosing a vehicle?
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Our team will recommend the best vehicle based on the number
              of passengers, luggage, travel distance, and budget.
              If you're unsure, simply select your preferred option and
              we'll confirm the most suitable vehicle before your trip.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}