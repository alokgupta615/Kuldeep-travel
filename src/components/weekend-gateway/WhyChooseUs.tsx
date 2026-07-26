"use client";

import {
  ShieldCheck,
  Car,
  Map,
  Users,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Customized Travel Plans",
    description:
      "Weekend itineraries designed according to your interests, schedule and budget.",
  },
  {
    icon: Car,
    title: "Comfortable Vehicles",
    description:
      "Travel in clean, well-maintained sedans, SUVs, Innova Crysta and Tempo Travellers.",
  },
  {
    icon: Users,
    title: "Experienced Drivers",
    description:
      "Professional drivers with extensive knowledge of tourist routes.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Itineraries",
    description: "Modify sightseeing stops and travel plans whenever possible.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Receive a detailed quotation before booking.",
  },
  {
    icon: Headphones,
    title: "24/7 Travel Support",
    description:
      "Dedicated customer support before, during and after your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Why Kuldeep Travels?
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Why Plan Your Weekend Trip With Us?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We make every weekend trip comfortable, safe and memorable with
            personalized travel planning and premium transport.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
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
