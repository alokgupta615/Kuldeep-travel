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
      "Call, WhatsApp, or submit our online booking form. Share your travel date, pickup location, destination, and passenger details.",
  },
  {
    number: "02",
    icon: CarFront,
    title: "Choose Your Vehicle",
    description:
      "We'll recommend the most suitable vehicle based on your group size, travel plan, comfort preferences, and budget.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Confirm Your Booking",
    description:
      "Receive a transparent quotation, confirm your booking, and get all trip details before your journey begins.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Enjoy Your Journey",
    description:
      "Our professional driver arrives on time so you can enjoy a safe, comfortable, and hassle-free travel experience.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Book Your Ride in Four Simple Steps
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We've designed our booking process to be simple, transparent,
            and convenient so you can focus on your journey instead of the
            logistics.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-slate-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  {/* Number */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-slate-900 shadow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-blue-600 text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-slate-900">
                    <Icon className="h-12 w-12" />
                  </div>

                  {/* Card */}
                  <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Ready to Start Your Journey?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you need a local taxi, airport transfer, outstation cab,
            or a customized tour package, our team is ready to help you plan
            the perfect trip.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-now"
              className="inline-flex items-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Book Now
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
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