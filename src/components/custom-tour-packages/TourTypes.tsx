"use client";

import Link from "next/link";
import {
  Users,
  Heart,
  Landmark,
  Building2,
  GraduationCap,
  Mountain,
  ArrowRight,
} from "lucide-react";

const tours = [
  {
    title: "Family Holidays",
    description:
      "Comfortable vacations designed for children, parents, and senior citizens.",
    icon: Users,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Couple Getaways",
    description:
      "Romantic holidays, anniversaries, and honeymoon trips planned your way.",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Pilgrimage Tours",
    description:
      "Visit sacred destinations with a relaxed and well-planned itinerary.",
    icon: Landmark,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Corporate Tours",
    description:
      "Business travel, conferences, team outings, and incentive trips.",
    icon: Building2,
    color: "from-indigo-600 to-blue-600",
  },
  {
    title: "Educational Tours",
    description: "Educational trips for schools, colleges, and institutions.",
    icon: GraduationCap,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Adventure Trips",
    description:
      "Hill stations, wildlife, trekking, camping, rafting and more.",
    icon: Mountain,
    color: "from-teal-600 to-cyan-500",
  },
];

export default function TourTypes() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Tour Categories
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Tours We Can
            <span className="text-blue-700"> Customise</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Every journey is tailored to your travel goals. Whether you're
            travelling with family, friends, colleagues, or planning a romantic
            escape, we create an itinerary that suits you perfectly.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => {
            const Icon = tour.icon;

            return (
              <div
                key={tour.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${tour.color} p-4 shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {tour.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {tour.description}
                </p>

                {/* CTA */}

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center font-semibold text-blue-700 transition group-hover:text-blue-900"
                >
                  Plan This Tour
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
