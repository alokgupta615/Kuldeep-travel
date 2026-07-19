"use client";

import {
  Mountain,
  Trees,
  Heart,
  Landmark,
  Crown,
  Building2,
  Tent,
  Camera,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const themes = [
  {
    title: "Hill Station Holidays",
    description:
      "Escape the city and enjoy pleasant weather, scenic mountain views, waterfalls, and peaceful surroundings.",
    icon: Mountain,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Wildlife Adventures",
    description:
      "Explore India's famous wildlife sanctuaries and national parks with guided safari experiences.",
    icon: Trees,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Romantic Getaways",
    description:
      "Celebrate honeymoons, anniversaries, and memorable vacations with specially curated couple packages.",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Religious Tours",
    description:
      "Visit sacred temples, holy cities, and pilgrimage destinations with comfortable travel arrangements.",
    icon: Landmark,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Luxury Holidays",
    description:
      "Experience premium hotels, luxury vehicles, exclusive sightseeing, and personalized travel services.",
    icon: Crown,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Heritage Tours",
    description:
      "Discover India's rich history through magnificent forts, palaces, museums, and UNESCO heritage sites.",
    icon: Building2,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Adventure Tours",
    description:
      "Enjoy trekking, river rafting, camping, jungle safaris, boating, and exciting outdoor activities.",
    icon: Tent,
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Photography Tours",
    description:
      "Capture breathtaking landscapes, sunrise points, monuments, wildlife, and vibrant local culture.",
    icon: Camera,
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function HolidayThemes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Holiday Themes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Explore Holidays That Match Your Travel Style
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every traveler has different interests. Whether you enjoy adventure,
            spirituality, luxury, wildlife, or peaceful family vacations, we
            have thoughtfully designed holiday packages for every travel style.
          </p>

        </div>

        {/* Theme Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {themes.map((theme) => {
            const Icon = theme.icon;

            return (
              <div
                key={theme.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >

                <div
                  className={`inline-flex rounded-2xl p-4 transition-all duration-300 ${theme.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {theme.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {theme.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* CTA */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">

            <div className="text-white">

              <h3 className="text-3xl font-bold">
                Can't Find the Right Holiday Theme?
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Share your destination, travel interests, budget, and duration.
                We'll create a completely customized holiday package designed
                around your preferences.
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