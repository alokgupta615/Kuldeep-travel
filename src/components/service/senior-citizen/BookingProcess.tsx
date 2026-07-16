"use client";

import Link from "next/link";
import {
  ClipboardList,
  BadgeIndianRupee,
  CalendarCheck2,
  CarTaxiFront,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Share Your Travel Details",
    description:
      "Tell us your pickup location, destination, travel date, preferred pickup time, number of passengers, and any special travel requirements.",
  },
  {
    icon: BadgeIndianRupee,
    step: "Step 2",
    title: "Receive a Fare Estimate",
    description:
      "We'll recommend the most suitable vehicle and provide a transparent quotation based on your travel plan.",
  },
  {
    icon: CalendarCheck2,
    step: "Step 3",
    title: "Confirm Your Booking",
    description:
      "Once you're happy with the quotation, we'll reserve your cab and share the driver's and pickup details.",
  },
  {
    icon: CarTaxiFront,
    step: "Step 4",
    title: "Travel Comfortably",
    description:
      "Our driver arrives on time, assists if needed, and ensures a smooth, safe, and comfortable journey from pickup to destination.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Booking a Senior Citizen Cab
            <span className="block text-blue-700">
              is Simple & Stress-Free
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe arranging transportation for elderly passengers should be
            straightforward. Share your travel details, confirm your booking,
            and we'll take care of the rest.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-blue-100 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.step} className="relative text-center">
                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 shadow-lg">
                    <Icon className="h-9 w-9 text-white" />
                  </div>

                  <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">
                    <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      {step.step}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Need Help Planning the Journey?
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Whether you're arranging transportation for yourself or an
                elderly family member, our team will help you choose the right
                vehicle, explain the fare, and plan a comfortable journey from
                pickup to drop-off.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="tel:+919999999999"
                className="inline-flex items-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}