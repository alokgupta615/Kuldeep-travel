"use client";

import {
  BadgeCheck,
  Car,
  Users,
  Wallet,
  Route,
  Headset,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Customized Tour Planning",
    description:
      "Every holiday package is planned according to your travel dates, destination, group size, and budget.",
  },
  {
    icon: Car,
    title: "Comfortable Vehicles",
    description:
      "Choose from Hatchbacks, Sedans, SUVs, Innova Crysta, Tempo Travellers, Mini Buses, and Luxury Coaches.",
  },
  {
    icon: Users,
    title: "Experienced Drivers",
    description:
      "Professional drivers with extensive knowledge of popular tourist routes ensure a safe and enjoyable journey.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Receive a detailed quotation before your trip begins.",
  },
  {
    icon: Route,
    title: "Flexible Itineraries",
    description:
      "Add sightseeing, extend your stay, or customize destinations according to your preferences.",
  },
  {
    icon: Headset,
    title: "24×7 Travel Support",
    description:
      "Our support team remains available before and throughout your journey whenever assistance is required.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Travel",
    description:
      "Well-maintained vehicles, verified chauffeurs, and customer-first service for complete peace of mind.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    description:
      "We value your time with punctual pickups and carefully planned travel schedules.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Why Choose Kuldeep Travels
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Why Travelers Book Their Holiday Packages With Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe every journey should be comfortable, memorable, and
            hassle-free. From customized itineraries to professional drivers,
            every detail is carefully managed to provide an exceptional travel
            experience.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition-all duration-300 group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-white">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">
                Trusted Holiday Travel Partner in Lucknow
              </h3>

              <p className="mt-5 text-blue-100 leading-8">
                Whether you're planning a family vacation, honeymoon,
                pilgrimage, corporate outing, or weekend getaway, Kuldeep
                Travels provides safe transportation, flexible tour planning,
                and reliable customer support from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  10,000+
                </h4>
                <p className="mt-2 text-blue-100">Happy Travelers</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  100+
                </h4>
                <p className="mt-2 text-blue-100">Tour Destinations</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  24×7
                </h4>
                <p className="mt-2 text-blue-100">Customer Support</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  100%
                </h4>
                <p className="mt-2 text-blue-100">Safe Travel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}