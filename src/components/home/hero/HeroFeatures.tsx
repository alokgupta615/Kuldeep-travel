"use client";

import {
  Clock3,
  ShieldCheck,
  BadgeIndianRupee,
  Car,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24×7 Support",
    description:
      "Travel experts available round the clock to assist you anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Professional, courteous and background-verified drivers for every trip.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Honest pricing with complete fare transparency.",
  },
  {
    icon: Car,
    title: "Premium Fleet",
    description:
      "Clean, sanitized and well-maintained vehicles for comfortable journeys.",
  },
];

export default function HeroFeatures() {
  return (
    <section className="mt-24">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-yellow-400/40 hover:bg-white/15 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 transition group-hover:scale-110">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {feature.description}
              </p>

              <div className="mt-6 h-1 w-14 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
}