"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
  ArrowRight,
} from "lucide-react";

const fleet = [
  {
    name: "Sedan",
    image: "/images/fleet/sedan.jpg",
    seats: "4 Seats",
    luggage: "2 Bags",
    description:
      "Perfect for city rides, airport transfers, and business travel.",
  },
  {
    name: "SUV",
    image: "/images/fleet/suv.jpg",
    seats: "6 Seats",
    luggage: "4 Bags",
    description:
      "Comfortable choice for families and outstation journeys.",
  },
  {
    name: "Innova Crysta",
    image: "/images/fleet/innova-crysta.jpg",
    seats: "7 Seats",
    luggage: "5 Bags",
    description:
      "Premium comfort for corporate travel and long-distance trips.",
  },
  {
    name: "Tempo Traveller",
    image: "/images/fleet/tempo-traveller.jpg",
    seats: "12–17 Seats",
    luggage: "10 Bags",
    description:
      "Ideal for family tours, pilgrimages, and group travel.",
  },
  {
    name: "Mini Bus",
    image: "/images/fleet/mini-bus.jpg",
    seats: "25 Seats",
    luggage: "20 Bags",
    description:
      "Reliable transportation for schools, events, and corporate groups.",
  },
  {
    name: "Luxury Coach",
    image: "/images/fleet/luxury-coach.jpg",
    seats: "40+ Seats",
    luggage: "Large Storage",
    description:
      "Luxury buses for large events, weddings, and long-distance travel.",
  },
];

export default function FleetSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Vehicles for Every Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you're travelling alone or with a large group,
            we have well-maintained vehicles designed for comfort,
            safety, and reliability.
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

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

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