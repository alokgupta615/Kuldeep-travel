"use client";

import Image from "next/image";
import Link from "next/link";
import { Car, Bus, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const fleet = [
  {
    title: "Sedan Cars",
    image: "/images/fleet/sedan.png",
    icon: Car,
    capacity: "1-4 Passengers",
    description: "Perfect for couples, solo travellers and small families.",
  },
  {
    title: "SUV",
    image: "/images/fleet/suv.png",
    icon: Car,
    capacity: "4-6 Passengers",
    description: "Comfortable rides for weekend road trips and hill stations.",
  },
  {
    title: "Innova Crysta",
    image: "/images/fleet/innova.png",
    icon: Users,
    capacity: "6-7 Passengers",
    description: "Premium travel experience for family vacations.",
  },
  {
    title: "Tempo Traveller",
    image: "/images/fleet/tempo.png",
    icon: Bus,
    capacity: "9-17 Passengers",
    description: "Ideal for group tours and corporate outings.",
  },
  {
    title: "Mini Bus",
    image: "/images/fleet/bus.png",
    icon: Bus,
    capacity: "18-30 Passengers",
    description: "Best for school trips, religious tours and events.",
  },
  {
    title: "Luxury Coach",
    image: "/images/fleet/bus.png",
    icon: Bus,
    capacity: "30+ Passengers",
    description: "Premium coaches for large group travel.",
  },
];

export default function Fleet() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Travel Comfortably
            <span className="block text-blue-700">With Our Premium Fleet</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're travelling alone or with a large group, we have the
            perfect vehicle for your weekend getaway.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {fleet.map((vehicle) => {
            const Icon = vehicle.icon;

            return (
              <div
                key={vehicle.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-700 p-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{vehicle.title}</h3>

                      <p className="text-blue-700 font-medium">
                        {vehicle.capacity}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {vehicle.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                    Sanitised & Well Maintained
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/fleet"
            className="inline-flex items-center rounded-xl bg-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-900 transition"
          >
            View Our Fleet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
