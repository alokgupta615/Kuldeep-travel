"use client";

import Link from "next/link";
import {
  MapPinned,
  PhoneCall,
  FileText,
  CreditCard,
  CarFront,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPinned,
    title: "Share Your Travel Plan",
    description:
      "Tell us your destination, travel dates, number of travelers, preferred vehicle, and budget.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Receive Customized Quote",
    description:
      "Our travel experts prepare a personalized itinerary with transparent pricing and package options.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Confirm Your Booking",
    description:
      "Review your itinerary, make any changes if required, and confirm your holiday package.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Easy Payment",
    description:
      "Complete your booking securely with flexible payment options and receive booking confirmation.",
  },
  {
    number: "05",
    icon: CarFront,
    title: "Enjoy Your Holiday",
    description:
      "Our driver arrives on time and your memorable holiday begins with complete travel support.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Book Your Holiday in 5 Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Planning your holiday with Kuldeep Travels is simple, transparent,
            and hassle-free. Our team guides you through every step until your
            journey begins.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-blue-100 lg:block"></div>

          <div className="grid gap-10 lg:grid-cols-5">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >

                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 shadow-xl">

                    <Icon className="h-10 w-10 text-white" />

                  </div>

                  {/* Number */}

                  <span className="mt-6 inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-bold text-yellow-700">
                    Step {step.number}
                  </span>

                  {/* Card */}

                  <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">

            <div className="text-white">

              <h3 className="text-3xl font-bold">
                Ready to Plan Your Next Holiday?
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Share your destination and travel dates today. Our experts will
                prepare a customized holiday package with comfortable
                transportation, flexible itinerary, and transparent pricing.
              </p>

            </div>

            <div className="text-center lg:text-right">

              <Link
                href="/book-now"
                className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Holiday Package

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}