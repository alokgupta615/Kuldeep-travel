"use client";

import Link from "next/link";
import {
  MapPinned,
  BadgeCheck,
  CarFront,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MapPinned,
    title: "Tell Us About Your Trip",
    description:
      "Share your pickup location, destination, travel date, preferred pickup time, number of passengers, and any special travel requirements.",
  },
  {
    step: "02",
    icon: BadgeCheck,
    title: "Confirm Your Booking",
    description:
      "We'll recommend the most suitable vehicle, confirm the fare, and share your booking details. Once approved, your cab is reserved for your selected date and time.",
  },
  {
    step: "03",
    icon: CarFront,
    title: "Start Your Journey",
    description:
      "Your professional driver arrives on time, assists with your luggage if needed, and takes you safely to your destination in a clean, comfortable vehicle.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Book Your One Way Cab
            <span className="block text-blue-700">
              in 3 Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Booking your intercity cab shouldn't take more than a few minutes.
            Share your travel details, confirm your booking, and let us take
            care of the rest.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-blue-100 lg:block"></div>

          <div className="grid gap-10 lg:grid-cols-3">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                >
                  {/* Step Number */}

                  <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-blue-950 shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}

                  <div className="mt-8 inline-flex rounded-2xl bg-blue-100 p-4">
                    <Icon className="h-8 w-8 text-blue-700" />
                  </div>

                  {/* Content */}

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Ready to Book Your Ride?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Our booking process is quick, transparent, and hassle-free. Simply
            tell us where you're travelling, and we'll arrange the perfect cab
            for your journey.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="tel:+919999999999"
              className="inline-flex items-center rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900"
            >
              Call Now
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}





