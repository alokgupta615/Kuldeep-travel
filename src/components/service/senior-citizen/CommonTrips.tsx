"use client";

import Link from "next/link";
import {
  Stethoscope,
  Plane,
  Train,
  Landmark,
  MapPinned,
  PartyPopper,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const trips = [
  {
    icon: Stethoscope,
    title: "Medical & Healthcare Visits",
    description:
      "Comfortable transportation for hospital appointments, diagnostic tests, physiotherapy sessions, dialysis, specialist consultations, and routine health check-ups.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Timely airport pickups and drops with spacious vehicles, helping senior travellers enjoy a relaxed journey without transportation worries.",
  },
  {
    icon: Train,
    title: "Railway Station Transfers",
    description:
      "Convenient transportation between home, hotels, and railway stations, ensuring a smooth beginning or end to every journey.",
  },
  {
    icon: Landmark,
    title: "Temple Visits & Pilgrimages",
    description:
      "Travel comfortably to Ayodhya, Varanasi, Prayagraj, Naimisharanya, Vindhyachal, Haridwar, Rishikesh, and other spiritual destinations.",
  },
  {
    icon: PartyPopper,
    title: "Family Celebrations",
    description:
      "Travel comfortably to weddings, anniversaries, birthdays, housewarming ceremonies, and other important family gatherings.",
  },
  {
    icon: MapPinned,
    title: "Outstation Family Visits",
    description:
      "Visit children, grandchildren, relatives, and loved ones in nearby cities with flexible schedules and comfortable vehicles.",
  },
  {
    icon: ShoppingBag,
    title: "Daily Personal Travel",
    description:
      "Reliable transportation for shopping, banking, community events, government offices, parks, and everyday travel needs.",
  },
];

const benefits = [
  "Local & Outstation Travel",
  "Hospital & Medical Appointments",
  "Religious & Pilgrimage Tours",
  "Airport & Railway Transfers",
  "Family Functions & Vacations",
  "Comfortable Everyday Travel",
];

export default function CommonTrips() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Common Travel Requirements
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Trips We
            <span className="block text-blue-700">
              Commonly Arrange
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every journey has a different purpose. Whether it's a routine
            hospital visit or a long-distance pilgrimage, we provide
            transportation planned around the comfort and convenience of
            senior citizens.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {trips.map((trip) => {
            const Icon = trip.icon;

            return (
              <div
                key={trip.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {trip.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {trip.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Section */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <h3 className="text-3xl font-bold text-white">
                Transportation Designed Around Every Journey
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Whether you're travelling across Lucknow or planning an
                outstation trip, Kuldeep Travels helps senior citizens
                enjoy comfortable transportation with experienced drivers
                and dependable service.
              </p>

            </div>

            {/* Right */}

            <div className="space-y-4">

              {benefits.map((item) => (

                <div
                  key={item}
                  className="flex items-center rounded-xl bg-white/10 px-5 py-4 backdrop-blur"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-blue-950">
                    ✓
                  </div>

                  <span className="text-lg font-medium text-white">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Book Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}