"use client";

import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  Wallet,
  Hotel,
  Car,
  Route,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: CalendarCheck,
    title: "Better Availability",
    description:
      "Reserve your preferred travel dates, hotels, and vehicles before they become fully booked.",
  },
  {
    icon: Wallet,
    title: "Best Pricing",
    description:
      "Early bookings often provide better package prices and greater flexibility.",
  },
  {
    icon: Hotel,
    title: "Preferred Hotels",
    description:
      "Choose from a wider range of hotel options that suit your comfort and budget.",
  },
  {
    icon: Car,
    title: "Vehicle Choice",
    description:
      "Book your preferred Sedan, SUV, Innova Crysta, Tempo Traveller, or Luxury Bus.",
  },
  {
    icon: Route,
    title: "Customized Itinerary",
    description:
      "More planning time allows us to create a personalized travel itinerary.",
  },
  {
    icon: Clock3,
    title: "Stress-Free Planning",
    description:
      "Avoid last-minute travel issues with confirmed bookings and organized schedules.",
  },
];

const highlights = [
  "Guaranteed vehicle availability",
  "Flexible travel schedule",
  "Premium hotel options",
  "Customized sightseeing",
  "Transparent pricing",
  "Dedicated travel support",
];

export default function BookingBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Booking Benefits
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Why Book Your Holiday Package Early?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Booking in advance gives you better travel options, preferred
            hotels, your choice of vehicles, and a more personalized holiday
            experience.
          </p>

        </div>

        {/* Benefits Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition-all group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* CTA Banner */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">

            {/* Left */}

            <div className="text-white">

              <BadgeCheck className="mb-5 h-12 w-12 text-yellow-400" />

              <h3 className="text-3xl font-bold">
                Plan Early. Travel Better.
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Secure your preferred itinerary, vehicle, accommodation,
                and sightseeing schedule by booking your holiday package
                in advance with Kuldeep Travels.
              </p>

              <Link
                href="/book-now"
                className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Your Holiday
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <h4 className="text-2xl font-bold text-white">
                Early Booking Includes
              </h4>

              <div className="mt-8 space-y-4">

                {highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}