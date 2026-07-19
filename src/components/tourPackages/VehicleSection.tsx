"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Briefcase,
  Snowflake,
  CheckCircle2,
} from "lucide-react";

const vehicles = [
  {
    name: "Hatchback",
    image: "/images/vehicles/hatchback.jpg",
    seats: "4 Seats",
    luggage: "2 Bags",
    description:
      "Ideal for solo travelers, couples, and short city or nearby holiday trips.",
  },
  {
    name: "Sedan",
    image: "/images/vehicles/sedan.jpg",
    seats: "4 Seats",
    luggage: "3 Bags",
    description:
      "Comfortable option for family vacations and business trips.",
  },
  {
    name: "Ertiga",
    image: "/images/vehicles/ertiga.jpg",
    seats: "6 Seats",
    luggage: "4 Bags",
    description:
      "Perfect for medium-sized families with extra luggage space.",
  },
  {
    name: "Innova Crysta",
    image: "/images/vehicles/innova.jpg",
    seats: "7 Seats",
    luggage: "5 Bags",
    description:
      "Premium MPV offering superior comfort for long-distance journeys.",
  },
  {
    name: "SUV",
    image: "/images/vehicles/suv.jpg",
    seats: "6–7 Seats",
    luggage: "5 Bags",
    description:
      "Suitable for hill stations, adventure trips, and group travel.",
  },
  {
    name: "Tempo Traveller",
    image: "/images/vehicles/tempo.jpg",
    seats: "12–17 Seats",
    luggage: "Large",
    description:
      "Best choice for group tours, school trips, and pilgrimage travel.",
  },
  {
    name: "Mini Bus",
    image: "/images/vehicles/minibus.jpg",
    seats: "20–27 Seats",
    luggage: "Large",
    description:
      "Comfortable transport for corporate outings and large family groups.",
  },
  {
    name: "Luxury Bus",
    image: "/images/vehicles/luxurybus.jpg",
    seats: "35–50 Seats",
    luggage: "Extra Large",
    description:
      "Luxury coaches for large tours with spacious interiors and premium seating.",
  },
];

export default function VehicleSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Comfortable Vehicles for Every Holiday
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're traveling alone, with your family, or with a
            large group, we have the perfect vehicle for a safe and
            comfortable journey.
          </p>

        </div>

        {/* Vehicle Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {vehicles.map((vehicle) => (

            <div
              key={vehicle.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {vehicle.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {vehicle.description}
                </p>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-700" />
                    <span>{vehicle.seats}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-blue-700" />
                    <span>{vehicle.luggage}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Snowflake className="h-5 w-5 text-blue-700" />
                    <span>Air Conditioned</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Experienced Driver</span>
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Need Help Choosing the Right Vehicle?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Tell us your group size and destination, and we'll recommend the
            best vehicle for a safe, comfortable, and budget-friendly holiday.
          </p>

          <Link
            href="/book-now"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Book Your Trip
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}