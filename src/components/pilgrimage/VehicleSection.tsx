"use client";

import Image from "next/image";
import { CarFront, Users, Briefcase, ShieldCheck } from "lucide-react";

const vehicles = [
  {
    title: "Sedan Cars",
    description:
      "Comfortable and economical option for couples and small families travelling to nearby pilgrimage destinations.",
    image: "/images/vehicles/sedan.jpg",
    capacity: "2-4 Passengers",
    features: [
      "AC Comfortable Ride",
      "Best for Short Trips",
      "Affordable Pricing",
    ],
  },

  {
    title: "SUV Cars",
    description:
      "Spacious vehicles with extra luggage space, perfect for families seeking additional comfort during long journeys.",
    image: "/images/vehicles/suv.jpg",
    capacity: "4-6 Passengers",
    features: [
      "Extra Leg Space",
      "More Luggage Capacity",
      "Comfortable Long Travel",
    ],
  },

  {
    title: "Innova Crysta",
    description:
      "A preferred choice for long-distance pilgrimage tours with families and groups who need premium comfort.",
    image: "/images/vehicles/innova.jpg",
    capacity: "6-7 Passengers",
    features: [
      "Premium Interior",
      "Ideal for Multi-Day Tours",
      "Smooth Highway Travel",
    ],
  },

  {
    title: "Tempo Traveller",
    description:
      "Perfect for group pilgrimages, religious tours, and family gatherings with comfortable seating.",
    image: "/images/vehicles/tempo.jpg",
    capacity: "9-17 Passengers",
    features: ["Large Group Travel", "Push Back Seats", "Tour Friendly"],
  },
];

export default function VehicleSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Comfortable Vehicles For Every Pilgrimage
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Choose the right vehicle according to your group size, travel
            distance, and comfort requirements.
          </p>
        </div>

        {/* Vehicle Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}

              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900">
                  {vehicle.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-blue-700">
                  <Users size={18} />

                  <span className="font-semibold">{vehicle.capacity}</span>
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {vehicle.description}
                </p>

                <div className="mt-6 space-y-3">
                  {vehicle.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <ShieldCheck size={18} className="text-green-500" />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-7 flex items-center gap-2 font-bold text-blue-700 transition hover:text-yellow-600">
                  View Vehicle
                  <CarFront size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
