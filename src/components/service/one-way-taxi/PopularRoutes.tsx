"use client";

import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Route } from "lucide-react";

const routes = [
  {
    city: "Ayodhya",
    distance: "135 km",
    time: "2.5–3 Hours",
    description: "Perfect for religious trips and weekend getaways.",
  },
  {
    city: "Varanasi",
    distance: "320 km",
    time: "6–7 Hours",
    description: "Comfortable rides for tourism, business and family travel.",
  },
  {
    city: "Prayagraj",
    distance: "200 km",
    time: "4–5 Hours",
    description: "Reliable taxi service for official and personal trips.",
  },
  {
    city: "Kanpur",
    distance: "95 km",
    time: "Around 2 Hours",
    description: "Fast city-to-city travel with professional drivers.",
  },
  {
    city: "Gorakhpur",
    distance: "270 km",
    time: "5–6 Hours",
    description: "Comfortable long-distance rides with transparent fares.",
  },
  {
    city: "Agra",
    distance: "335 km",
    time: "5–6 Hours",
    description: "Visit the Taj City with safe and reliable taxi service.",
  },
  {
    city: "Delhi",
    distance: "550 km",
    time: "8–9 Hours",
    description: "Premium outstation cab service from Lucknow to Delhi.",
  },
  {
    city: "Bareilly",
    distance: "250 km",
    time: "4–5 Hours",
    description: "Affordable cab service for business and family travel.",
  },
];

export default function PopularRoutes() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Popular Routes
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            Popular Taxi Routes From
            <span className="block text-blue-700">Lucknow</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Travel comfortably with verified drivers, clean AC vehicles and
            transparent pricing to major cities across Uttar Pradesh and nearby
            states.
          </p>
        </div>

        {/* Routes */}
        <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {routes.map((route) => (
            <Link
              key={route.city}
              href="/book-now"
              className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 md:text-2xl">
                      {route.city}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-700">
                      Lucknow → {route.city}
                    </p>

                    <p className="mt-2 hidden text-sm leading-6 text-gray-600 md:block">
                      {route.description}
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                  <Route className="h-4 w-4" />
                  {route.distance}
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                  <Clock3 className="h-4 w-4" />
                  {route.time}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Bottom CTA */}

        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 px-6 py-10 md:mt-24 md:px-12 md:py-14">
          {/* Background Blur */}
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
                Available 24×7
              </span>

              <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Can't Find Your Destination?
              </h3>

              <p className="mt-4 text-base leading-7 text-blue-100 md:text-lg">
                We provide taxi services to hundreds of destinations across
                Uttar Pradesh and neighbouring states. Tell us where you want to
                go and we'll provide the best vehicle with transparent pricing.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  ✓ One Way Taxi
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  ✓ Round Trip
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  ✓ Airport Transfer
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:scale-105 hover:bg-yellow-300"
              >
                Book Your Ride
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
