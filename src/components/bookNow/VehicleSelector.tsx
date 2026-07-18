"use client";

import Image from "next/image";
import { Users, Briefcase, Snowflake } from "lucide-react";

interface Props {
  formData: {
    vehicle: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const vehicles = [
  {
    id: "Swift Dzire",
    image: "/images/vehicles/dzire.png",
    seats: 4,
    luggage: 2,
    ac: true,
    price: "₹12/km",
  },
  {
    id: "Ertiga",
    image: "/images/vehicles/ertiga.png",
    seats: 6,
    luggage: 3,
    ac: true,
    price: "₹15/km",
  },
  {
    id: "Innova",
    image: "/images/vehicles/innova.png",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹18/km",
  },
  {
    id: "Innova Crysta",
    image: "/images/vehicles/crysta.png",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹20/km",
  },
  {
    id: "Tempo Traveller",
    image: "/images/vehicles/tempo.png",
    seats: 12,
    luggage: 8,
    ac: true,
    price: "₹28/km",
  },
  {
    id: "Mini Bus",
    image: "/images/vehicles/bus.png",
    seats: 20,
    luggage: 12,
    ac: true,
    price: "Contact",
  },
];

export default function VehicleSelector({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold">Select Vehicle</h3>

        <p className="mt-2 text-slate-500">
          Choose the vehicle that best suits your journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((vehicle) => {
          const selected = formData.vehicle === vehicle.id;

          return (
            <div
              key={vehicle.id}
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  vehicle: vehicle.id,
                }))
              }
              className={`cursor-pointer overflow-hidden rounded-3xl border text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                selected
                  ? "border-yellow-400 ring-2 ring-yellow-400"
                  : "border-slate-200"
              }`}
            >
              {/* Vehicle Image */}

              <div className="relative h-44 bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.id}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Details */}

              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold">{vehicle.id}</h4>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    {vehicle.price}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="flex flex-col items-center rounded-xl bg-slate-100 p-3">
                    <Users size={18} className="mb-2 text-blue-600" />

                    <span>{vehicle.seats}</span>

                    <small>Seats</small>
                  </div>

                  <div className="flex flex-col items-center rounded-xl bg-slate-100 p-3">
                    <Briefcase
                      size={18}
                      className="mb-2 text-orange-600"
                    />

                    <span>{vehicle.luggage}</span>

                    <small>Bags</small>
                  </div>

                  <div className="flex flex-col items-center rounded-xl bg-slate-100 p-3">
                    <Snowflake
                      size={18}
                      className="mb-2 text-cyan-600"
                    />

                    <span>{vehicle.ac ? "AC" : "No"}</span>

                    <small>Comfort</small>
                  </div>
                </div>

                {/* Button */}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();

                    setFormData((prev: any) => ({
                      ...prev,
                      vehicle: vehicle.id,
                    }));
                  }}
                  className={`w-full rounded-xl py-3 font-semibold transition ${
                    selected
                      ? "bg-yellow-400 text-slate-900"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {selected ? "Selected" : "Select Vehicle"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}