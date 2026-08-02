"use client";

import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  CarFront,
  IndianRupee,
  Headphones,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Experienced Drivers",
    description: "Verified drivers with years of long-distance experience.",
  },
  {
    icon: CarFront,
    title: "Premium Fleet",
    description: "Clean, comfortable and regularly serviced vehicles.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges with upfront fare estimates.",
  },
  {
    icon: Clock3,
    title: "24×7 Service",
    description: "Book your cab anytime with dedicated support.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Trips",
    description: "On-time pickups and hassle-free journeys.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Friendly assistance before and during your trip.",
  },
];

export default function WhyChooseKuldeep() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700 py-14 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/pattern/grid.svg')] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-400/15 px-4 py-2 text-sm font-semibold text-yellow-300">
            Why Choose Kuldeep Travels
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Your Trusted
            <span className="block text-yellow-400">Travel Partner</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Safe, comfortable and affordable outstation taxi services backed by
            experienced drivers, premium vehicles and 24×7 customer support.
          </p>
        </div>

        {/* Features */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-slate-900 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300 group-hover:text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-14 rounded-3xl bg-white p-6 text-center shadow-2xl md:p-10">
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Ready For Your Next Road Trip?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-7">
            Whether you're travelling with family, friends or colleagues,
            Kuldeep Travels ensures a safe, comfortable and memorable journey
            every time.
          </p>

          <Link
            href="/book-now"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Book Your Cab
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
