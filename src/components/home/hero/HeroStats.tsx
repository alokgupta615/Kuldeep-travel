"use client";

import {
  Star,
  Users,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    value: "15K+",
    label: "Happy Travelers",
    color: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Drivers",
    color: "text-green-400",
  },
  {
    icon: Clock3,
    value: "24×7",
    label: "Customer Support",
    color: "text-cyan-400",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/15"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ${item.color}`}
            >
              <Icon className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-300">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}