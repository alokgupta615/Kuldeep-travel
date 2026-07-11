"use client";

import {
  ShieldCheck,
  BadgeIndianRupee,
  Clock3,
  CarFront,
  MapPinned,
  CalendarCheck2,
  Headset,
  Smile,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Professional, experienced, and courteous drivers committed to safe and comfortable travel.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "Fair quotations with no hidden charges, giving you complete confidence before booking.",
  },
  {
    icon: CarFront,
    title: "Well-Maintained Fleet",
    description:
      "Clean, regularly serviced vehicles that ensure reliability and comfort on every journey.",
  },
  {
    icon: Clock3,
    title: "24×7 Support",
    description:
      "Our support team is available around the clock to help with bookings and travel assistance.",
  },
  {
    icon: MapPinned,
    title: "Wide Destination Coverage",
    description:
      "Travel across Lucknow, Uttar Pradesh, and popular destinations throughout North India.",
  },
  {
    icon: CalendarCheck2,
    title: "Flexible Booking",
    description:
      "Easy booking options with support for schedule updates whenever possible.",
  },
  {
    icon: Headset,
    title: "Dedicated Assistance",
    description:
      "Friendly travel experts help you choose the right vehicle and travel plan.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description:
      "Thousands of happy travelers trust Kuldeep Travels for reliable transportation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Travel With Confidence Every Time
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We focus on delivering a dependable travel experience from the
            moment you contact us until your journey is complete.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}