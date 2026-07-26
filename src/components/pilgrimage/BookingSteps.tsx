"use client";

import { UserRound, ClipboardList, CheckCircle2, MapPin } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Travel Details",
    description:
      "Tell us your preferred pilgrimage destinations, travel dates, number of passengers, pickup location, and special requirements.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Receive a Personalized Itinerary",
    description:
      "Our travel experts prepare a customized pilgrimage plan with suitable routes, vehicle options, and transparent pricing.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Confirm Your Booking",
    description:
      "Review your itinerary, finalize your travel schedule, and confirm your pilgrimage package with complete peace of mind.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Start Your Spiritual Journey",
    description:
      "Our driver reaches your pickup location on time and takes care of your transportation while you focus on your prayers.",
    icon: MapPin,
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Simple Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Plan Your Pilgrimage In 4 Easy Steps
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From planning your route to completing your journey, we make every
            step simple, comfortable, and hassle-free.
          </p>
        </div>

        {/* Steps */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl"
              >
                {/* Number */}

                <div className="absolute right-6 top-5 text-5xl font-black text-gray-100">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
                  <Icon size={28} />
                </div>

                {/* Content */}

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
