"use client";

import {
  MapPinned,
  CalendarDays,
  Hotel,
  Camera,
  CarFront,
  MapPin,
  Timer,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const options = [
  {
    icon: MapPinned,
    title: "Destination Selection",
    description:
      "Visit one destination or combine multiple cities into a personalised itinerary.",
  },
  {
    icon: CalendarDays,
    title: "Travel Duration",
    description:
      "Choose anything from a one-day getaway to an extended holiday.",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description:
      "Stay in budget hotels, premium properties, luxury resorts, or your own booked accommodation.",
  },
  {
    icon: Camera,
    title: "Sightseeing",
    description: "Select only the attractions you actually want to explore.",
  },
  {
    icon: CarFront,
    title: "Vehicle Choice",
    description:
      "Choose from Sedan, SUV, Innova Crysta, Tempo Traveller, Mini Bus or Luxury Coach.",
  },
  {
    icon: MapPin,
    title: "Pickup & Drop",
    description:
      "Start your trip from your home, hotel, airport, railway station, or any preferred location.",
  },
  {
    icon: Timer,
    title: "Travel Pace",
    description:
      "Enjoy a relaxed holiday or cover multiple destinations based on your preference.",
  },
  {
    icon: Wallet,
    title: "Budget Planning",
    description:
      "We recommend the best travel options while keeping your budget in mind.",
  },
];

export default function Customization() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-60" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Fully Flexible Tours
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Personalise Every
            <span className="text-blue-700"> Part of Your Journey</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            One of the biggest advantages of a custom tour package is complete
            flexibility. Choose destinations, accommodation, vehicles,
            sightseeing, and travel pace that suit your preferences.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {options.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 p-4 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-8 text-white shadow-2xl lg:p-12">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Why Choose a Custom Tour?
              </h3>

              <p className="mt-4 max-w-2xl text-blue-100 leading-7">
                Unlike fixed holiday packages, every detail of your journey is
                planned around your schedule, budget, and travel style—giving
                you complete flexibility and a more enjoyable experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Flexible Itinerary",
                "Transparent Pricing",
                "Comfortable Vehicles",
                "Experienced Drivers",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400" />

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
