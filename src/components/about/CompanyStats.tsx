"use client";

import {
  Users,
  CarFront,
  MapPinned,
  Star,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15K+",
    title: "Happy Travelers",
  },
  {
    icon: CarFront,
    value: "100+",
    title: "Premium Vehicles",
  },
  {
    icon: MapPinned,
    value: "50+",
    title: "Destinations",
  },
  {
    icon: Star,
    value: "98%",
    title: "Customer Satisfaction",
  },
  {
    icon: Clock3,
    value: "24×7",
    title: "Support",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    title: "Verified Drivers",
  },
];

export default function CompanyStats() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted by Thousands
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Numbers That Speak for Us
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our journey is measured by the trust of our customers and the
            quality of every ride we deliver.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className={`text-center ${
                  index < stats.length - 2
                    ? "pb-8 border-b border-slate-200"
                    : ""
                } lg:border-b-0`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
                  {stat.value}
                </h3>

                <p className="mt-2 font-semibold text-slate-700">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      </div>
    </section>
  );
}
