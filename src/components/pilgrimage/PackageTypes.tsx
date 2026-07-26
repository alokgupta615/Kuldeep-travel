"use client";

import {
  Building2,
  CalendarDays,
  Clock3,
  Route,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

import { packageTypes } from "@/data/pilgrimage";

const icons = {
  Clock3,
  CalendarDays,
  Route,
  Users,
  Building2,
  Sparkles,
};

export default function PackageTypes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Pilgrimage Packages
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Packages Designed Around Your Needs
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Whether you're planning a one-day temple visit or a multi-day
            pilgrimage across India, we create travel experiences tailored to
            your comfort and schedule.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packageTypes.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
