"use client";

import {
  Target,
  Eye,
  ShieldCheck,
  HeartHandshake,
  Users,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Every journey is planned with passenger safety and vehicle reliability as our highest priorities.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We listen carefully, recommend the right travel solution, and support customers throughout their journey.",
  },
  {
    icon: Users,
    title: "Professionalism",
    description:
      "From booking to drop-off, our team focuses on punctuality, courtesy, and dependable service.",
  },
  {
    icon: BadgeCheck,
    title: "Transparency",
    description:
      "Honest communication and clear pricing with no unnecessary hidden charges.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Guided by Purpose, Driven by Service
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our mission, vision, and values shape every journey we organize,
            helping us deliver travel experiences built on trust, comfort,
            and reliability.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-blue-900 p-10 text-white shadow-xl transition hover:-translate-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400">
              <Target className="h-8 w-8 text-slate-900" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              To provide safe, affordable, transparent, and dependable
              transportation while delivering exceptional customer service
              for local travel, airport transfers, outstation trips, tours,
              and special occasions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition hover:-translate-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Eye className="h-8 w-8" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To become one of the most trusted travel and taxi service
              providers in North India by continuously improving our fleet,
              embracing innovation, and exceeding customer expectations.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-center text-3xl font-bold text-slate-900">
            Our Core Values
          </h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h4>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}