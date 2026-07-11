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
      "Our travel experts are available around the clock to assist you before, during, and after your journey.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Experienced, courteous, and background-verified drivers committed to your safety and comfort.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "Clear quotations with no hidden charges, so you always know exactly what you're paying for.",
  },
  {
    icon: Car,
    title: "Safe Travel",
    description:
      "Well-maintained, regularly inspected vehicles designed to provide a comfortable and worry-free ride.",
  },
];

export default function HeroFeatures() {
  return (
    <div className="relative z-10 mt-14">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-white/15 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-slate-900 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}