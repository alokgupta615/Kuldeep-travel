"use client";

import { Clock3, Mountain, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Perfect for Busy Schedules",
    description:
      "Enjoy a refreshing holiday without taking long leaves from work. Our carefully planned weekend trips maximise every moment.",
  },
  {
    icon: Mountain,
    title: "Discover Amazing Destinations",
    description:
      "Choose from hill stations, wildlife parks, pilgrimage sites, heritage cities and scenic road trips across North India.",
  },
  {
    icon: HeartHandshake,
    title: "Stress-Free Planning",
    description:
      "From transport and hotel assistance to sightseeing recommendations, we handle everything for a smooth travel experience.",
  },
];

export default function Intro() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Weekend Escapes
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Escape the Routine, Even If It's Just for a Weekend
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            You don't always need a long vacation to relax. A well-planned
            weekend getaway gives you enough time to recharge, explore new
            places, and spend quality time with family or friends. Kuldeep
            Travels creates customised weekend tours that combine comfort,
            sightseeing, and flexibility.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
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
      </div>
    </section>
  );
}
