"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, ShieldCheck, Star } from "lucide-react";

const vehicles = [
  {
    name: "Sedan",
    image: "/images/family-tour/vehicles/sedan.jpg",
    capacity: "4 Passengers",
    luggage: "2 Bags",
    bestFor: "Couples & Small Families",
    features: ["AC", "Comfortable Seats", "Economical", "Professional Driver"],
  },
  {
    name: "SUV",
    image: "/images/family-tour/vehicles/suv.jpg",
    capacity: "6 Passengers",
    luggage: "4 Bags",
    bestFor: "Medium Families",
    features: [
      "Extra Legroom",
      "Premium Comfort",
      "Large Boot",
      "Air Conditioning",
    ],
  },
  {
    name: "Innova Crysta",
    image: "/images/family-tour/vehicles/innova.jpg",
    capacity: "7 Passengers",
    luggage: "5 Bags",
    bestFor: "Large Families",
    features: [
      "Luxury Interior",
      "Captain Seats",
      "Ample Space",
      "Smooth Ride",
    ],
  },
  {
    name: "Tempo Traveller",
    image: "/images/family-tour/vehicles/tempo.jpg",
    capacity: "12–17 Passengers",
    luggage: "Large Capacity",
    bestFor: "Joint Families",
    features: [
      "Pushback Seats",
      "Large Luggage",
      "Group Travel",
      "Air Conditioning",
    ],
  },
];

export default function VehicleSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Premium Fleet
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Comfortable Vehicles for Every
            <span className="block text-blue-700">Family Tour Package</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every family trip deserves a comfortable journey. We provide clean,
            spacious, and well-maintained vehicles suitable for couples, nuclear
            families, joint families, and large groups.
          </p>
        </div>

        {/* Vehicle Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={600}
                  height={450}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur">
                  ⭐ Premium
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {vehicle.name}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <Users className="mr-3 h-5 w-5 text-blue-700" />

                    <span>{vehicle.capacity}</span>
                  </div>

                  <div className="flex items-center">
                    <Briefcase className="mr-3 h-5 w-5 text-blue-700" />

                    <span>{vehicle.luggage}</span>
                  </div>

                  <div className="flex items-center">
                    <ShieldCheck className="mr-3 h-5 w-5 text-blue-700" />

                    <span>{vehicle.bestFor}</span>
                  </div>
                </div>

                {/* Features */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                    <span className="ml-2 font-semibold">Family Favourite</span>
                  </div>

                  <Link
                    href="/book-now"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[36px] bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-black">
            Not Sure Which Vehicle is Right for Your Family?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            Our travel experts will recommend the ideal vehicle based on your
            family size, luggage requirements, destination, and budget, ensuring
            everyone enjoys a comfortable and hassle-free journey.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Talk to Our Travel Expert
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
