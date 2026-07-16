"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock3,
  Route,
} from "lucide-react";

const routes = [
  {
    city: "Ayodhya",
    distance: "135 km",
    time: "2.5–3 Hours",
    description:
      "Visit the holy city of Lord Shri Ram with a comfortable private cab from Lucknow.",
  },
  {
    city: "Varanasi",
    distance: "320 km",
    time: "6–7 Hours",
    description:
      "Travel comfortably for spiritual visits, tourism, education, or business.",
  },
  {
    city: "Prayagraj",
    distance: "200 km",
    time: "4–5 Hours",
    description:
      "Perfect for official work, family visits, religious travel, and events.",
  },
  {
    city: "Kanpur",
    distance: "95 km",
    time: "Around 2 Hours",
    description:
      "A popular route for business meetings, shopping, education, and daily travel.",
  },
  {
    city: "Gorakhpur",
    distance: "270 km",
    time: "5–6 Hours",
    description:
      "Comfortable intercity travel for personal visits, work, and family trips.",
  },
  {
    city: "Agra",
    distance: "335 km",
    time: "5–6 Hours",
    description:
      "Travel directly to Agra for sightseeing, business, or weekend holidays.",
  },
  {
    city: "Delhi",
    distance: "550 km",
    time: "8–9 Hours",
    description:
      "Convenient long-distance travel for business trips, relocation, and vacations.",
  },
  {
    city: "Bareilly",
    distance: "250 km",
    time: "4–5 Hours",
    description:
      "Comfortable private taxi service for family functions and official work.",
  },
];

export default function PopularRoutes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Popular Routes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Travel to Popular
            <span className="block text-blue-700">
              Destinations with Ease
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kuldeep Travels provides reliable one-way cab services from
            Lucknow to major cities across Uttar Pradesh and neighbouring
            states with experienced drivers, comfortable vehicles,
            and transparent pricing.
          </p>

        </div>

        {/* Route Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {routes.map((route) => (
            <div
              key={route.city}
              className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
            >
              {/* Icon */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-700">
                <MapPin className="h-8 w-8 text-blue-700 group-hover:text-white" />
              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Lucknow to {route.city}
              </h3>

              {/* Description */}

              <p className="mt-4 flex-grow leading-7 text-gray-600">
                {route.description}
              </p>

              {/* Badges */}

              <div className="mt-6 flex flex-wrap gap-3">

                <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-gray-700">
                  <Route className="mr-2 h-4 w-4 text-blue-700" />
                  {route.distance}
                </div>

                <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-gray-700">
                  <Clock3 className="mr-2 h-4 w-4 text-blue-700" />
                  {route.time}
                </div>

              </div>

              {/* CTA */}

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Don't See Your Destination?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            We serve many more cities across Uttar Pradesh and neighbouring
            states. Share your destination with us, and we'll arrange a
            comfortable one-way cab at a competitive fare.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}