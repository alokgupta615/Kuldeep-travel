"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Snowflake, ArrowRight, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

const vehicles = [
  {
    name: "Prime Sedan (Dzire / Etios)",
    image: "/images/fleet/sedan.png",
    capacity: "4 Passengers",
    luggage: "2-3 Large Suitcases",
    price: "Starting ₹549 fixed",
    bestFor: "Solo Flyers, Business Execs & Couples",
    features: ["Chilled AC", "Comfortable Legroom", "Smooth Highway Drive"],
    tag: "Economical & Quick",
  },
  {
    name: "Spacious SUV (Ertiga / XL6)",
    image: "/images/fleet/ertiga.png",
    capacity: "6 Passengers",
    luggage: "3-4 Large Bags",
    price: "Starting ₹799 fixed",
    bestFor: "Families & Extra Holiday Luggage",
    features: ["Generous Boot Space", "Dual AC", "Child-Friendly Cabin"],
    tag: "Most Popular",
  },
  {
    name: "Premium MPV (Innova Crysta)",
    image: "/images/fleet/innova.png",
    capacity: "6-7 Passengers",
    luggage: "5 Large Suitcases",
    price: "Starting ₹1,199 fixed",
    bestFor: "VIP Clients, Corporate Guests & Heavy Baggage",
    features: ["Plush Captain Chairs", "Luxury Suspension", "Whisper Quiet Ride"],
    tag: "Executive Comfort",
  },
  {
    name: "Tempo Traveller (12–26 Seater)",
    image: "/images/fleet/tempo.png",
    capacity: "12 to 26 Passengers",
    luggage: "15+ Heavy Bags",
    price: "Starting ₹2,499 fixed",
    bestFor: "Delegations, Wedding Groups & Tour Flights",
    features: ["Maharaja Pushback Seats", "Separate Luggage Section", "High Roof"],
    tag: "Large Group Transfer",
  },
];

export default function VehicleOptions() {
  return (
    <section className="bg-slate-50/70 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Airport Fleet Selection
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose the Right Airport Cab for Your Luggage & Group
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            All vehicles are sanitized, air-conditioned, and chauffeured by verified
            highway professionals with ample luggage storage.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="mt-10 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={260}
                    className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 rounded-full bg-blue-900/80 backdrop-blur px-2.5 py-0.5 text-[11px] font-bold text-white shadow">
                    {vehicle.tag}
                  </div>

                  <div className="absolute bottom-2.5 right-3 rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-extrabold text-blue-800 shadow-sm">
                    {vehicle.price}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {vehicle.name}
                  </h3>

                  <div className="mt-3.5 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users size={15} className="text-blue-700 shrink-0" />
                      <span className="font-semibold text-slate-800">{vehicle.capacity}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase size={15} className="text-blue-700 shrink-0" />
                      <span>{vehicle.luggage}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{vehicle.bestFor}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {vehicle.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
                >
                  <span>Select Cab</span>
                  <ArrowRight size={13} />
                </Link>

                <a
                  href={`https://wa.me/919936408109?text=${encodeURIComponent(
                    `Hello Kuldeep Travels, I want to book an Airport Taxi with ${vehicle.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
                  title="Ask Quote on WhatsApp"
                >
                  <MessageCircle size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}