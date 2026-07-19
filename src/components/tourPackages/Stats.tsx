"use client";

import {
  Users,
  MapPinned,
  Car,
  ShieldCheck,
  Star,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    title: "Happy Travelers",
    description:
      "Families, couples, corporate teams, and pilgrims have trusted Kuldeep Travels.",
  },
  {
    icon: MapPinned,
    value: "100+",
    title: "Popular Destinations",
    description:
      "Travel across Uttar Pradesh, Uttarakhand, Delhi, Rajasthan, and North India.",
  },
  {
    icon: Car,
    value: "50+",
    title: "Premium Vehicles",
    description:
      "Sedans, SUVs, Innova Crysta, Tempo Travellers, Mini Buses, and Luxury Coaches.",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    title: "Safe & Reliable",
    description:
      "Professional drivers, sanitized vehicles, and customer-first service.",
  },
  {
    icon: Star,
    value: "4.9/5",
    title: "Customer Rating",
    description:
      "Highly rated for comfort, punctuality, and excellent customer support.",
  },
  {
    icon: Clock3,
    value: "24×7",
    title: "Travel Assistance",
    description:
      "Dedicated support before, during, and after your holiday trip.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted by Thousands
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Why Travelers Choose Kuldeep Travels
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            We provide safe, comfortable, and customized holiday experiences
            with transparent pricing, experienced drivers, and dedicated travel
            support.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="text-4xl font-extrabold text-blue-900">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}