"use client";

import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Car,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const cities = [
  {
    city: "Lucknow",
    routes: [
      "Ayodhya",
      "Varanasi",
      "Prayagraj",
      "Agra",
      "Delhi",
      "Nainital",
    ],
  },
  {
    city: "Kanpur",
    routes: [
      "Ayodhya",
      "Varanasi",
      "Haridwar",
      "Mussoorie",
      "Agra",
      "Delhi",
    ],
  },
  {
    city: "Ayodhya",
    routes: [
      "Prayagraj",
      "Varanasi",
      "Haridwar",
      "Nainital",
      "Delhi",
      "Agra",
    ],
  },
  {
    city: "Prayagraj",
    routes: [
      "Ayodhya",
      "Varanasi",
      "Mussoorie",
      "Rishikesh",
      "Delhi",
      "Agra",
    ],
  },
  {
    city: "Varanasi",
    routes: [
      "Ayodhya",
      "Prayagraj",
      "Haridwar",
      "Mussoorie",
      "Nainital",
      "Delhi",
    ],
  },
  {
    city: "Gorakhpur",
    routes: [
      "Ayodhya",
      "Varanasi",
      "Lucknow",
      "Haridwar",
      "Rishikesh",
      "Delhi",
    ],
  },
];

const features = [
  "Doorstep Pickup",
  "Comfortable AC Vehicles",
  "Experienced Drivers",
  "Flexible Itineraries",
  "Transparent Pricing",
  "24×7 Travel Support",
];

export default function DepartureCities() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Departure Cities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Holiday Packages from Major Cities
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            While most of our holiday packages start from Lucknow, we also
            arrange customized departures from nearby cities across Uttar
            Pradesh.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cities.map((city) => (

            <div
              key={city.city}
              className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex items-center gap-4">

                <div className="rounded-2xl bg-blue-100 p-4">

                  <MapPin className="h-8 w-8 text-blue-700" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {city.city}
                  </h3>

                  <p className="text-blue-700">
                    Popular Routes
                  </p>

                </div>

              </div>

              <div className="space-y-3">

                {city.routes.map((route) => (

                  <div
                    key={route}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>{route}</span>
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">

            {/* Left */}

            <div className="text-white">

              <Car className="mb-5 h-12 w-12 text-yellow-400" />

              <h3 className="text-3xl font-bold">
                Don't See Your City?
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                We also arrange holiday packages from many other cities.
                Contact our travel experts and we'll plan your journey from
                your preferred pickup location.
              </p>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <h4 className="text-2xl font-bold text-white">
                Every Departure Includes
              </h4>

              <div className="mt-8 space-y-4">

                {features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3 text-white"
                  >
                    <Clock3 className="h-5 w-5 text-yellow-400" />
                    <span>{feature}</span>
                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Plan My Holiday

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}