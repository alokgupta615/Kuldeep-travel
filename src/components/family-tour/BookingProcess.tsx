"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  PhoneCall,
  CreditCard,
  CarFront,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Share Your Requirements",
    description:
      "Tell us your destination, travel dates, family size, preferred vehicle, and any special requirements.",
  },
  {
    step: "02",
    icon: CalendarCheck2,
    title: "Receive Your Custom Quote",
    description:
      "Our travel experts prepare the best itinerary with transparent pricing and recommend the ideal vehicle.",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Confirm Your Booking",
    description:
      "Secure your booking with online payment or choose our flexible pay-later option, depending on the package.",
  },
  {
    step: "04",
    icon: CarFront,
    title: "Enjoy Your Family Holiday",
    description:
      "Your driver arrives on time and your family enjoys a safe, comfortable, and memorable journey.",
  },
];

export default function BookingProcess() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Book Your Family Tour
            <span className="block text-cyan-400">In Just 4 Easy Steps</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Booking your dream family holiday with Kuldeep Travels is simple,
            transparent, and completely hassle-free.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Line */}

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 lg:block" />

          <div className="space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;

              const reverse = index % 2 === 1;

              return (
                <div
                  key={step.step}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Card */}

                  <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-cyan-400 hover:bg-white/10">
                    <div className="flex items-center gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                        <Icon className="h-8 w-8" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-cyan-300">
                          Step {step.step}
                        </p>

                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 leading-8 text-slate-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Number */}

                  <div className="hidden items-center justify-center lg:flex">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-slate-900 bg-gradient-to-br from-cyan-500 to-blue-600 text-4xl font-black text-white shadow-2xl">
                      {step.step}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[36px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
            <BadgeCheck className="h-10 w-10 text-white" />
          </div>

          <h3 className="mt-8 text-3xl font-black text-white">
            Ready to Plan Your Family Vacation?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Let our travel experts create a personalised itinerary with the
            perfect vehicle, comfortable hotels, and unforgettable destinations
            for your family.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 font-bold text-white transition hover:bg-cyan-400"
            >
              Book Your Tour
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
