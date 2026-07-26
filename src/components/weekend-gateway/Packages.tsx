"use client";

import {
  Users,
  Heart,
  Car,
  Landmark,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const packages = [
  {
    icon: Users,
    title: "Family Weekend Trips",
    description:
      "Comfortable holidays designed for memorable family experiences.",
  },
  {
    icon: Heart,
    title: "Couple Packages",
    description: "Romantic weekend escapes with flexible sightseeing plans.",
  },
  {
    icon: Car,
    title: "Friends Road Trips",
    description: "Exciting short vacations packed with fun and adventure.",
  },
  {
    icon: Landmark,
    title: "Spiritual Tours",
    description:
      "Temple visits and pilgrimage circuits planned around your schedule.",
  },
  {
    icon: Briefcase,
    title: "Corporate Outings",
    description:
      "Professional transport solutions for team outings and retreats.",
  },
  {
    icon: Sparkles,
    title: "Custom Packages",
    description:
      "Personalized itineraries created according to your travel preferences.",
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Weekend Packages
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Weekend Trips for Every Traveller
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're travelling with family, friends, colleagues or your
            partner, we have the perfect weekend package for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-gradient-to-br from-blue-50 to-white p-8 border border-blue-100 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 group-hover:bg-blue-900">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/book-now"
            className="inline-flex items-center rounded-xl bg-blue-700 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-900"
          >
            Plan My Weekend Trip
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
