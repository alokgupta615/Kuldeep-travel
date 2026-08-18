"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Snowflake, ArrowRight } from "lucide-react";

const fleet = [
  {
    name: "Sedan",
    image: "/images/fleet/sedan.png",
    seats: "4 Seats",
    luggage: "2 Bags",
    description:
      "Perfect for city rides, airport transfers, and business travel.",
  },
  {
    name: "SUV",
    image: "/images/fleet/suv.png",
    seats: "6 Seats",
    luggage: "4 Bags",
    description: "Comfortable choice for families and outstation journeys.",
  },
  {
    name: "Innova Crysta",
    image: "/images/fleet/innova.png",
    seats: "7 Seats",
    luggage: "5 Bags",
    description:
      "Premium comfort for corporate travel and long-distance trips.",
  },
  {
    name: "Ertiga",
    image: "/images/fleet/ertiga.png",
    seats: "6-7 Seats",
    luggage: "4 Bags",
    description:
      "Spacious MPV for family vacations and outstation group rides.",
  },
  {
    name: "Tempo Traveller",
    image: "/images/fleet/tempo.png",
    seats: "12–17 Seats",
    luggage: "10 Bags",
    description: "Ideal for family tours, pilgrimages, and group travel.",
  },
  {
    name: "Luxury Mini Bus",
    image: "/images/fleet/bus.png",
    seats: "25 Seats",
    luggage: "20 Bags",
    description:
      "Reliable transportation for weddings, events, and corporate groups.",
  },
];

export default function FleetSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Choose The Perfect
            <span className="block text-blue-700">
              Vehicle For Your Journey
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Whether you're travelling alone or with a large group, Kuldeep
            Travels has the right vehicle for every outstation trip.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {fleet.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={400}
                  height={260}
                  className="max-h-48 w-auto object-contain transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-4 py-2 text-lg font-bold text-slate-900 backdrop-blur">
                  {vehicle.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                    <Users className="h-4 w-4" />
                    {vehicle.seats}
                  </span>

                  <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                    <Briefcase className="h-4 w-4" />
                    {vehicle.luggage}
                  </span>

                  <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                    <Snowflake className="h-4 w-4" />
                    AC
                  </span>
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                  {vehicle.description}
                </p>

                <Link
                  href="/book-now"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-yellow-500"
                >
                  Book This Vehicle
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
