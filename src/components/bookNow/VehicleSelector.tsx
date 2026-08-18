"use client";

import Image from "next/image";
import { Users, Briefcase, Snowflake, CheckCircle2 } from "lucide-react";

interface Props {
  formData: {
    vehicle: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const vehicles = [
  {
    id: "Swift Dzire",
    image: "/images/fleet/dzire.png",
    seats: 4,
    luggage: 2,
    ac: true,
    price: "₹12/km",
  },
  {
    id: "Ertiga",
    image: "/images/fleet/ertiga.png",
    seats: 6,
    luggage: 3,
    ac: true,
    price: "₹15/km",
  },
  {
    id: "Innova",
    image: "/images/fleet/innova.png",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹18/km",
  },
  {
    id: "Innova Crysta",
    image: "/images/fleet/innova.png",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹20/km",
  },
  {
    id: "Tempo Traveller",
    image: "/images/fleet/tempo.png",
    seats: 12,
    luggage: 8,
    ac: true,
    price: "₹28/km",
  },
  {
    id: "Mini Bus",
    image: "/images/fleet/bus.png",
    seats: 20,
    luggage: 12,
    ac: true,
    price: "Contact Us",
  },
];

export default function VehicleSelector({ formData, setFormData }: Props) {
  return (
    <section className="space-y-8">
      {/* Heading */}

      <div className="text-center lg:text-left">
        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-700 sm:text-sm">
          🚖 Choose Your Vehicle
        </span>

        <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
          Select Your Preferred Vehicle
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base lg:mx-0">
          Choose from our premium fleet of clean, comfortable and professionally
          maintained vehicles. Every booking includes experienced drivers, air
          conditioning and transparent pricing.
        </p>
      </div>

      {/* Vehicles Grid */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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
              className={`group cursor-pointer overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-3xl ${
                selected
                  ? "border-yellow-400 ring-2 ring-yellow-400 shadow-xl"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {/* Header */}

              {/* Header */}

              <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-5">
                {/* Price */}

                <div className="flex justify-end">
                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                    {vehicle.price}
                  </span>
                </div>

                {/* Vehicle Image */}

                {/* Vehicle Image */}
                {/* Vehicle Image */}
                <div className="mt-4 mx-auto w-full overflow-hidden rounded-xl bg-white text-slate-900">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.id}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover scale-[1.08] transition-transform duration-300 group-hover:scale-[1.12]"
                    />
                  </div>
                </div>

                {/* Vehicle Name */}

                <h4 className="mt-4 text-center text-xl font-bold text-white sm:text-2xl">
                  {vehicle.id}
                </h4>

                <p className="mt-2 text-center text-sm leading-6 text-blue-100">
                  Premium • AC • Professional Driver
                </p>
              </div>

              {/* Features */}

              <div className="space-y-5 p-4 sm:p-5">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {/* Seats */}

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Users className="mx-auto mb-2 h-5 w-5 text-blue-600" />

                    <p className="text-xl font-bold text-slate-900">
                      {vehicle.seats}
                    </p>

                    <span className="text-xs text-slate-600">Seats</span>
                  </div>
                  {/* Bags */}

                  <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
                    <Briefcase className="mx-auto mb-2 h-5 w-5 text-orange-500" />

                    <p className="text-xl font-bold text-slate-900">
                      {vehicle.luggage}
                    </p>

                    <span className="text-xs text-slate-600">Bags</span>
                  </div>

                  {/* AC */}

                  {/* <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Snowflake
                      size={18}
                      className="mx-auto mb-2 text-cyan-600"
                    />

                    <p className="text-base font-bold">
                      {vehicle.ac ? "AC" : "No"}
                    </p>

                    <span className="text-[11px] text-slate-500">Comfort</span>
                  </div>
                </div> */}

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Snowflake className="mx-auto mb-2 h-5 w-5 text-cyan-600" />

                    <p className="text-base font-bold text-slate-900">AC</p>

                    <span className="text-xs text-slate-600">Comfort</span>
                  </div>
                </div>

                {/* Selected Button */}

                {selected ? (
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50 py-3 text-sm font-semibold text-green-700">
                    <CheckCircle2 size={18} />

                    <span>Selected Vehicle</span>
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
                    className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-900"
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
