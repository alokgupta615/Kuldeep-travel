"use client";

import Link from "next/link";
import { CalendarClock, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const benefits = [
  "Book your onward and return journey together",
  "Choose different return dates",
  "Suitable for business and personal travel",
  "Quick assistance from our booking team",
];

export default function ReturnTrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">

          <div className="grid items-center gap-12 p-10 lg:grid-cols-2">

            {/* Left Content */}

            <div>

              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                <CalendarClock className="mr-2 h-4 w-4 text-yellow-400" />
                Flexible Return Planning
              </div>

              <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                Need a Return Trip Later?
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                If you already know your return travel date, let us know while
                booking your one-way cab. We'll help you plan both journeys,
                making your travel arrangements simpler and more convenient.
              </p>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                Whether your return is after a day, a week, or even longer,
                our team can schedule your next trip in advance, giving you one
                less thing to worry about.
              </p>

              <div className="mt-8 space-y-4">

                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center text-white"
                  >
                    <CheckCircle2 className="mr-3 h-5 w-5 text-yellow-400" />
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* Right Card */}

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-gray-900">
                Plan Both Trips Together
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Share your pickup location, destination, travel dates, and
                preferred timings. We'll arrange comfortable transportation for
                both journeys with transparent pricing.
              </p>

              <div className="mt-8 space-y-4">

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
                >
                  Book Return Trip
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="tel:+919999999999"
                  className="flex w-full items-center justify-center rounded-xl border border-blue-700 px-6 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Our Team
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}