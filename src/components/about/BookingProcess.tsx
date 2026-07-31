"use client";

import Link from "next/link";
import {
  PhoneCall,
  CarFront,
  BadgeCheck,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Contact Us",
    description:
      "Call, WhatsApp, or submit our booking form with your travel details.",
  },
  {
    number: "02",
    icon: CarFront,
    title: "Choose Vehicle",
    description:
      "Select the ideal vehicle based on your group size and travel needs.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Confirm Booking",
    description:
      "Receive a transparent quotation and confirm your reservation.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Enjoy the Journey",
    description:
      "Our professional driver arrives on time for a safe and comfortable ride.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Booking Process
          </span>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Book Your Ride in 4 Simple Steps
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Booking with Kuldeep Travels is quick, transparent, and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-slate-300 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-slate-900">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Number */}
                  <span className="mt-5 block text-sm font-bold tracking-[0.25em] text-yellow-500">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-8 text-center text-white shadow-2xl sm:p-12">
          <h3 className="text-2xl font-bold sm:text-3xl">Ready to Travel?</h3>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Whether it's an airport transfer, local taxi, outstation trip, or
            holiday package, we're ready to make your journey comfortable and
            memorable.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Book Your Ride
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white hover:text-blue-900"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
