"use client";

import {
  ShieldCheck,
  Users,
  Route,
  Car,
  Hotel,
  Headphones,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Customized Tour Planning",
    description:
      "Every family has different travel preferences. We create personalized itineraries based on your destinations, travel dates, budget, and family size.",
  },
  {
    icon: Car,
    title: "Comfortable Premium Vehicles",
    description:
      "Choose from Sedan, SUV, Innova Crysta, Tempo Traveller, or Mini Bus according to your group size and luggage requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Travel",
    description:
      "Our experienced drivers and well-maintained vehicles ensure a safe, smooth, and stress-free journey for every family member.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking Assistance",
    description:
      "Need accommodation? We help you find comfortable hotels that match your budget and travel preferences.",
  },
  {
    icon: Users,
    title: "Suitable for Every Generation",
    description:
      "Whether you're travelling with children, parents, grandparents, or a joint family, we plan tours that everyone can enjoy.",
  },
  {
    icon: Headphones,
    title: "24×7 Travel Support",
    description:
      "Our team remains available before and throughout your trip to assist with itinerary changes and travel-related support.",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Happy Families",
  },
  {
    value: "100+",
    label: "Tour Destinations",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "4.9★",
    label: "Customer Rating",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            <Sparkles className="h-4 w-4" />
            Why Families Choose Kuldeep Travels
          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Why Choose Our
            <span className="block text-blue-700">
              Family Tour Packages from Lucknow?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We don't just arrange transportation—we create memorable family
            holidays with comfortable vehicles, flexible itineraries,
            experienced drivers, and personalized travel planning that keeps
            every member of your family happy throughout the journey.
          </p>
        </div>

        {/* Statistics */}

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-4xl font-black text-blue-700">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
            >
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 p-5 text-white transition group-hover:scale-110">
                <feature.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-8 flex items-center text-blue-700 font-semibold">
                <BadgeCheck className="mr-2 h-5 w-5" />
                Trusted by Thousands of Travellers
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
