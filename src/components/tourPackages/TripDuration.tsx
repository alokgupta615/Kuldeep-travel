"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const durations = [
  {
    days: "1 Day",
    title: "Same Day Tours",
    description:
      "Perfect for nearby destinations like Ayodhya, Naimisharanya, and Prayagraj.",
    trips: [
      "Temple Visits",
      "Local Sightseeing",
      "Religious Tours",
      "Family Outings",
    ],
  },
  {
    days: "2 Days / 1 Night",
    title: "Weekend Escape",
    description:
      "Relax with a short vacation without taking long leave from work.",
    trips: [
      "Agra",
      "Varanasi",
      "Haridwar",
      "Rishikesh",
    ],
  },
  {
    days: "3 Days / 2 Nights",
    title: "Short Vacation",
    description:
      "Explore beautiful destinations with enough time for sightseeing and relaxation.",
    trips: [
      "Mussoorie",
      "Nainital",
      "Jim Corbett",
      "Delhi",
    ],
  },
  {
    days: "5–7 Days",
    title: "Extended Holidays",
    description:
      "Ideal for North India tours covering multiple destinations in one journey.",
    trips: [
      "Uttarakhand",
      "Rajasthan",
      "Himachal",
      "Customized Tours",
    ],
  },
];

export default function TripDuration() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trip Duration
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Holiday Packages Based on Trip Duration
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're planning a quick getaway or a week-long vacation,
            we offer flexible holiday packages to suit your schedule.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {durations.map((trip) => (

            <div
              key={trip.days}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
            >

              <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-700">

                <CalendarDays className="h-8 w-8 text-blue-700 group-hover:text-white" />

              </div>

              <div className="mt-6">

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  {trip.days}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {trip.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {trip.description}
                </p>

                <div className="mt-6 space-y-3">

                  {trip.trips.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span>{item}</span>
                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-white">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <Clock3 className="mb-5 h-12 w-12 text-yellow-400" />

              <h3 className="text-3xl font-bold">
                Need a Custom Trip Duration?
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Not every holiday fits into a fixed itinerary. Tell us your
                preferred travel dates, and we'll create a personalized holiday
                package that matches your schedule.
              </p>

            </div>

            <div className="text-center lg:text-right">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Customize My Holiday
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}