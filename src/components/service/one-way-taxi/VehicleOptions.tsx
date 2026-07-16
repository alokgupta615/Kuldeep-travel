"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react";

const vehicles = [
  {
    name: "Sedan",
    image: "/images/fleet/sedan.png",
    bestFor: "Solo travellers, couples & business trips",
    passengers: "1–4 Passengers",
    luggage: "2–3 Bags",
    description:
      "Perfect for short and medium-distance one-way journeys with excellent comfort, fuel efficiency, and affordability.",
    features: [
      "Business Travel",
      "Family Visits",
      "Airport Transfers",
      "Short & Medium Distance Routes",
    ],
  },
  {
    name: "SUV",
    image: "/images/fleet/suv.png",
    bestFor: "Families & Small Groups",
    passengers: "1–6 Passengers",
    luggage: "4–5 Bags",
    description:
      "Extra seating space and luggage capacity make SUVs ideal for family trips, religious tours, and weekend getaways.",
    features: [
      "Family Trips",
      "Religious Tours",
      "Weekend Getaways",
      "Extra Luggage",
    ],
  },
  {
    name: "Innova Crysta",
    image: "/images/fleet/innova-crysta.png",
    bestFor: "Premium Family & Corporate Travel",
    passengers: "1–7 Passengers",
    luggage: "5–6 Bags",
    description:
      "Experience premium comfort with spacious interiors, making every long-distance journey smooth and enjoyable.",
    features: [
      "Corporate Travel",
      "Premium Intercity Rides",
      "Family Vacations",
      "Group Travel",
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
            Find the Right Vehicle
            <span className="block text-blue-700">
              for Your Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every trip is different. Choose from our comfortable sedans,
            spacious SUVs, or premium Innova Crysta depending on your travel
            requirements, passengers, and luggage.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-56 bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-6"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {vehicle.name}
                </h3>

                <p className="mt-2 font-medium text-blue-700">
                  Best For: {vehicle.bestFor}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                    <Users className="mr-2 h-4 w-4 text-blue-700" />
                    {vehicle.passengers}
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
                      <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
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

        {/* Bottom Note */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Not Sure Which Vehicle to Choose?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Tell us your destination, number of passengers, and luggage details.
            Our team will recommend the most suitable cab for a safe,
            comfortable, and cost-effective one-way journey.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Get Vehicle Recommendation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}