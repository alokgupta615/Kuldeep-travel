"use client";

import Link from "next/link";
import {
  Stethoscope,
  Plane,
  Train,
  Landmark,
  Users,
  HeartHandshake,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Hospital Visits & Medical Appointments",
    description:
      "Comfortable transportation for hospital visits, diagnostic tests, physiotherapy sessions, dialysis appointments, specialist consultations, and routine health check-ups.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Timely airport pickups and drops with comfortable seating and ample luggage space, ensuring a relaxed journey for senior travellers.",
  },
  {
    icon: Train,
    title: "Railway Station Pickups & Drops",
    description:
      "Reliable transportation between homes, hotels, and railway stations, helping elderly passengers avoid the stress of crowded public transport.",
  },
  {
    icon: Landmark,
    title: "Temple Visits & Religious Tours",
    description:
      "Comfortable travel to Ayodhya, Varanasi, Prayagraj, Naimisharanya, Vindhyachal, Haridwar, Rishikesh, and other spiritual destinations.",
  },
  {
    icon: Users,
    title: "Family Functions & Social Gatherings",
    description:
      "Travel comfortably to weddings, anniversaries, birthdays, family reunions, and other important celebrations without transportation worries.",
  },
  {
    icon: HeartHandshake,
    title: "Visiting Friends & Relatives",
    description:
      "Whether travelling within Lucknow or to another city, enjoy a safe and comfortable journey to spend quality time with loved ones.",
  },
  {
    icon: ShoppingBag,
    title: "Daily Personal Travel",
    description:
      "Convenient transportation for shopping, banking, community programs, parks, government offices, and other everyday travel needs.",
  },
];

export default function ServiceTypes() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Travel Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            When You Can Book Our
            <span className="block text-blue-700">
              Senior Citizen Cab Service
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every journey is unique. Whether it's a routine hospital visit, an
            airport transfer, a family function, or a pilgrimage, we provide
            dependable transportation designed around the comfort and safety of
            senior citizens.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-5 flex-grow leading-8 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Book This Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Transportation for Every Journey
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            From routine medical appointments and airport transfers to family
            functions, religious trips, and daily travel, Kuldeep Travels helps
            senior citizens travel comfortably, safely, and with complete peace
            of mind.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Schedule Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}