"use client";

import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Car,
  Hotel,
  Route,
  UserCheck,
  Clock,
  ShieldCheck,
} from "lucide-react";

const included = [
  {
    icon: Car,
    title: "Pickup & Drop",
    desc: "Convenient pickup and drop-off from your preferred location in Lucknow.",
  },
  {
    icon: Route,
    title: "Dedicated Vehicle",
    desc: "Private vehicle throughout your family tour for maximum comfort.",
  },
  {
    icon: UserCheck,
    title: "Professional Driver",
    desc: "Experienced, courteous, and route-aware chauffeur.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Choose pickup times that fit your travel schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Assistance",
    desc: "24×7 support before and during your journey.",
  },
  {
    icon: Hotel,
    title: "Hotel Assistance",
    desc: "Accommodation booking support on request.",
  },
];

const optional = [
  "Hotel Accommodation",
  "Meals & Snacks",
  "Adventure Activities",
  "Entry Tickets",
  "Safari Booking",
  "Guide Services",
  "Shopping Stops",
  "Photography",
];

export default function IncludedSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Tour Inclusions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            What's Included in Our
            <span className="block text-blue-700">Family Tour Packages?</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every family holiday is carefully planned to provide a smooth,
            comfortable, and memorable travel experience from beginning to end.
          </p>
        </div>

        {/* Two Column */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Included */}

          <div className="rounded-[32px] bg-white p-10 shadow-xl">
            <div className="mb-8 flex items-center">
              <CheckCircle2 className="mr-3 h-8 w-8 text-green-500" />

              <h3 className="text-3xl font-bold text-slate-900">Included</h3>
            </div>

            <div className="space-y-6">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-2xl border border-slate-100 p-5 transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <div className="rounded-xl bg-blue-100 p-3">
                    <item.icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-slate-600 leading-7">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional */}

          <div className="rounded-[32px] bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 p-10 text-white shadow-xl">
            <div className="mb-8 flex items-center">
              <XCircle className="mr-3 h-8 w-8 text-yellow-300" />

              <h3 className="text-3xl font-bold">Optional Add-ons</h3>
            </div>

            <p className="mb-8 text-blue-100 leading-8">
              Customize your Family Tour Package with additional services
              according to your travel style, destination, and budget.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {optional.map((item) => (
                <div
                  key={item}
                  className="flex items-center rounded-xl bg-white/10 p-4 backdrop-blur"
                >
                  <CheckCircle2 className="mr-3 h-5 w-5 text-green-300" />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h4 className="text-2xl font-bold">
                Need a Fully Customized Package?
              </h4>

              <p className="mt-3 text-blue-100">
                Tell us your destination, family size, travel dates, and
                budget—we'll create a personalised itinerary just for you.
              </p>

              <Link
                href="/book-now"
                className="mt-6 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-3 font-bold text-slate-900 transition hover:bg-yellow-300"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
