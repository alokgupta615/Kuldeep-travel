"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const vehicles = [
  {
    name: "Sedan",
    image: "/images/fleet/sedan.png",
    bestFor: "Local Travel & Medical Visits",
    capacity: "1–4 Passengers",
    luggage: "2–3 Bags",
    description:
      "Sedans are comfortable, easy to enter and exit, making them an excellent choice for doctor appointments, shopping, airport transfers, and everyday travel.",
    features: [
      "Hospital Visits",
      "Airport Transfers",
      "Railway Station Pickup",
      "Daily Personal Travel",
    ],
  },
  {
    name: "SUV",
    image: "/images/fleet/suv.png",
    bestFor: "Families & Outstation Travel",
    capacity: "1–6 Passengers",
    luggage: "4–5 Bags",
    description:
      "SUVs provide extra seating space and luggage capacity, making them ideal for family trips, weekend travel, and longer journeys.",
    features: [
      "Family Visits",
      "Weekend Travel",
      "Outstation Trips",
      "Extra Comfort",
    ],
  },
  {
    name: "Innova Crysta",
    image: "/images/fleet/innova-crysta.png",
    bestFor: "Premium Family & Medical Travel",
    capacity: "1–7 Passengers",
    luggage: "5–6 Bags",
    description:
      "The Innova Crysta is one of the most preferred vehicles for senior citizens thanks to its spacious seating, smooth suspension, and premium comfort.",
    features: [
      "Medical Travel",
      "Pilgrimage Tours",
      "Airport Transfers",
      "Family Vacations",
    ],
  },
  {
    name: "Tempo Traveller",
    image: "/images/fleet/tempo-traveller.png",
    bestFor: "Group Pilgrimages",
    capacity: "9–17 Passengers",
    luggage: "Large Capacity",
    description:
      "Ideal for multiple senior family members travelling together to religious destinations, weddings, or community events.",
    features: [
      "Temple Tours",
      "Community Trips",
      "Group Vacations",
      "Family Functions",
    ],
  },
  {
    name: "Mini Bus",
    image: "/images/fleet/minibus.png",
    bestFor: "Large Family Groups",
    capacity: "18–30 Passengers",
    luggage: "Ample Space",
    description:
      "Travel together in comfort with spacious seating, making mini buses suitable for weddings, religious gatherings, and social events.",
    features: [
      "Wedding Transport",
      "Religious Events",
      "Family Gatherings",
      "Corporate Groups",
    ],
  },
  {
    name: "Luxury Coach",
    image: "/images/fleet/luxury-coach.png",
    bestFor: "Premium Group Travel",
    capacity: "30–50 Passengers",
    luggage: "Large Storage",
    description:
      "Luxury coaches provide maximum comfort for large groups with reclining seats, air conditioning, and generous luggage space.",
    features: [
      "Pilgrimage Tours",
      "Luxury Group Travel",
      "Community Events",
      "Long-Distance Trips",
    ],
  },
];

export default function VehicleOptions() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Vehicle Options
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Choose the Right Vehicle
            <span className="block text-blue-700">
              for a Comfortable Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every journey is different. We recommend vehicles based on travel
            distance, passenger comfort, group size, and luggage requirements,
            ensuring senior citizens enjoy a smooth and relaxing ride.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
            >
              <div className="relative h-56 bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {vehicle.name}
                </h3>

                <p className="mt-2 font-medium text-blue-700">
                  {vehicle.bestFor}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                    <Users className="mr-2 h-4 w-4 text-blue-700" />
                    {vehicle.capacity}
                  </div>

                  <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                    <Briefcase className="mr-2 h-4 w-4 text-blue-700" />
                    {vehicle.luggage}
                  </div>
                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  {vehicle.description}
                </p>

                <div className="mt-8 space-y-3">
                  {vehicle.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
                >
                  Book This Vehicle
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Need Help Choosing the Right Vehicle?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Tell us about your journey, the number of passengers, and any
            specific requirements. We'll recommend the most suitable vehicle to
            ensure a safe and comfortable travel experience.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Get a Vehicle Recommendation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}