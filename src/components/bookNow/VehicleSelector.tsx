"use client";

import Image from "next/image";
import { Users, Briefcase, Snowflake, CheckCircle2, Sparkles } from "lucide-react";

interface Props {
  formData: {
    vehicle: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const vehicles = [
  {
    id: "Swift Dzire",
    name: "Prime Sedan (Dzire / Etios)",
    image: "/images/fleet/dzire.png",
    seats: "4 Seats",
    luggage: "2-3 Bags",
    ac: true,
    price: "₹12/km",
    tag: "Economical",
  },
  {
    id: "Ertiga",
    name: "Spacious SUV (Ertiga / XL6)",
    image: "/images/fleet/ertiga.png",
    seats: "6 Seats",
    luggage: "3-4 Bags",
    ac: true,
    price: "₹15/km",
    tag: "Most Popular",
  },
  {
    id: "Innova",
    name: "Toyota Innova",
    image: "/images/fleet/innova.png",
    seats: "7 Seats",
    luggage: "4-5 Bags",
    ac: true,
    price: "₹18/km",
    tag: "Comfortable",
  },
  {
    id: "Innova Crysta",
    name: "Innova Crysta (Captain Seats)",
    image: "/images/fleet/innova.png",
    seats: "6-7 Seats",
    luggage: "5 Bags",
    ac: true,
    price: "₹20/km",
    tag: "Executive Class",
  },
  {
    id: "Tempo Traveller",
    name: "Tempo Traveller (12–26 Seater)",
    image: "/images/fleet/tempo.png",
    seats: "12-26 Seats",
    luggage: "15+ Bags",
    ac: true,
    price: "₹26/km",
    tag: "Big Families",
  },
  {
    id: "Mini Bus",
    name: "Luxury Mini Bus / Coach",
    image: "/images/fleet/bus.png",
    seats: "25 Seats",
    luggage: "20+ Bags",
    ac: true,
    price: "Custom Quote",
    tag: "Group Events",
  },
];

export default function VehicleSelector({ formData, setFormData }: Props) {
  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs sm:text-sm text-slate-600">
          Tap on a vehicle to select for your journey:
        </p>
        <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
          All vehicles include Chilled AC
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => {
          const isSelected = formData.vehicle === vehicle.id;

          return (
            <div
              key={vehicle.id}
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  vehicle: vehicle.id,
                }))
              }
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                isSelected
                  ? "border-blue-600 bg-blue-50/20 ring-2 ring-blue-600 shadow-md"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {/* Top Badge & Rate */}
              <div className="flex items-center justify-between mb-2">
                <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-bold text-white">
                  {vehicle.tag}
                </span>

                <span className="rounded-full bg-yellow-400 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-950">
                  {vehicle.price}
                </span>
              </div>

              {/* Vehicle Image */}
              <div className="relative h-36 w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center p-2">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={320}
                  height={180}
                  className="max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Vehicle Name */}
              <h4 className="mt-3 text-sm font-bold text-slate-900 line-clamp-1">
                {vehicle.name}
              </h4>

              {/* Specs */}
              <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center text-xs">
                <div className="rounded-lg bg-slate-100/80 p-1.5">
                  <Users size={14} className="mx-auto text-blue-700 mb-0.5" />
                  <span className="font-semibold text-slate-800 text-[11px] block truncate">
                    {vehicle.seats}
                  </span>
                </div>

                <div className="rounded-lg bg-slate-100/80 p-1.5">
                  <Briefcase size={14} className="mx-auto text-amber-600 mb-0.5" />
                  <span className="font-semibold text-slate-800 text-[11px] block truncate">
                    {vehicle.luggage}
                  </span>
                </div>

                <div className="rounded-lg bg-slate-100/80 p-1.5">
                  <Snowflake size={14} className="mx-auto text-cyan-600 mb-0.5" />
                  <span className="font-semibold text-slate-800 text-[11px] block">
                    AC
                  </span>
                </div>
              </div>

              {/* Select Status */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                {isSelected ? (
                  <div className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-700 py-2 text-xs font-bold text-white">
                    <CheckCircle2 size={15} />
                    <span>Selected</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="w-full rounded-xl bg-slate-100 py-2 text-xs font-semibold text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition"
                  >
                    Select Vehicle
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
