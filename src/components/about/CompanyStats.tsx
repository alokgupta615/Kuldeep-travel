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
    description: "Successfully served across local, outstation, and tour bookings.",
  },
  {
    icon: CarFront,
    value: "100+",
    title: "Vehicles",
    description: "Well-maintained sedans, SUVs, Tempo Travellers, buses, and luxury cars.",
  },
  {
    icon: MapPinned,
    value: "50+",
    title: "Destinations",
    description: "Serving Lucknow and popular destinations across North India.",
  },
  {
    icon: Star,
    value: "98%",
    title: "Customer Satisfaction",
    description: "Trusted by families, tourists, businesses, and organizations.",
  },
  {
    icon: Clock3,
    value: "24×7",
    title: "Customer Support",
    description: "Always available to assist before, during, and after your trip.",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    title: "Verified Drivers",
    description: "Professional, experienced, and customer-focused chauffeurs.",
  },
];

export default function CompanyStats() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted by Thousands
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Numbers That Reflect Our Commitment
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every journey we complete strengthens our commitment to
            providing reliable transportation and exceptional customer
            service.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
                  {stat.value}
                </h3>

                <h4 className="mt-2 text-xl font-semibold text-slate-800">
                  {stat.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  {stat.description}
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