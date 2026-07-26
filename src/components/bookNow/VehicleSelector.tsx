"use client";

import {
  Users,
  Briefcase,
  Snowflake,
  CarTaxiFront,
  CheckCircle2,
} from "lucide-react";

interface Props {
  formData: {
    vehicle: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const vehicles = [
  {
    id: "Swift Dzire",
    seats: 4,
    luggage: 2,
    ac: true,
    price: "₹12/km",
  },
  {
    id: "Ertiga",
    seats: 6,
    luggage: 3,
    ac: true,
    price: "₹15/km",
  },
  {
    id: "Innova",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹18/km",
  },
  {
    id: "Innova Crysta",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹20/km",
  },
  {
    id: "Tempo Traveller",
    seats: 12,
    luggage: 8,
    ac: true,
    price: "₹28/km",
  },
  {
    id: "Mini Bus",
    seats: 20,
    luggage: 12,
    ac: true,
    price: "Contact Us",
  },
];

export default function VehicleSelector({
  formData,
  setFormData,
}: Props) {
  return (
    <section className="space-y-8">

      {/* Heading */}

      <div>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          Choose Your Vehicle
        </span>

        <h3 className="mt-5 text-3xl font-bold text-slate-900">
          Select Your Preferred Vehicle
        </h3>

        <p className="mt-3 max-w-2xl text-slate-600">
          Choose from our comfortable and well-maintained fleet. Every
          vehicle comes with experienced drivers, clean interiors, air
          conditioning, and transparent pricing.
        </p>

      </div>

      {/* Vehicles */}

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
              className={`group cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                selected
                  ? "border-yellow-400 ring-2 ring-yellow-400 shadow-xl"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {/* Top */}

              <div className="bg-gradient-to-r from-blue-950 to-blue-800 p-6">

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 shadow-lg">

                    <CarTaxiFront
                      className="text-slate-900"
                      size={32}
                    />

                  </div>

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-900 shadow">
                    {vehicle.price}
                  </span>

                </div>

                <h4 className="mt-6 text-2xl font-bold text-white">
                  {vehicle.id}
                </h4>

                <p className="mt-2 text-sm text-blue-100">
                  Comfortable, clean and professionally maintained.
                </p>

              </div>

              {/* Features */}

              <div className="space-y-6 p-6">

                <div className="grid grid-cols-3 gap-3">

                  <div className="rounded-2xl bg-slate-50 p-4 text-center">

                    <Users
                      className="mx-auto mb-2 text-blue-600"
                      size={22}
                    />

                    <p className="text-lg font-bold">
                      {vehicle.seats}
                    </p>

                    <span className="text-xs text-slate-500">
                      Seats
                    </span>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 text-center">

                    <Briefcase
                      className="mx-auto mb-2 text-orange-500"
                      size={22}
                    />

                    <p className="text-lg font-bold">
                      {vehicle.luggage}
                    </p>

                    <span className="text-xs text-slate-500">
                      Bags
                    </span>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 text-center">

                    <Snowflake
                      className="mx-auto mb-2 text-cyan-600"
                      size={22}
                    />

                    <p className="text-lg font-bold">
                      {vehicle.ac ? "AC" : "No"}
                    </p>

                    <span className="text-xs text-slate-500">
                      Comfort
                    </span>

                  </div>

                </div>

                {/* Button */}

                {selected ? (
                  <div className="flex items-center justify-center gap-2 rounded-2xl bg-green-50 py-4 text-green-700">

                    <CheckCircle2 size={20} />

                    <span className="font-semibold">
                      Selected Vehicle
                    </span>

                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();

                      setFormData((prev: any) => ({
                        ...prev,
                        vehicle: vehicle.id,
                      }));
                    }}
                    className="w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-900"
                  >
                    Select Vehicle
                  </button>
                )}

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}