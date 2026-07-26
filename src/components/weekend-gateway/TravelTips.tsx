"use client";

import {
  Clock3,
  Backpack,
  CalendarCheck,
  Shirt,
  Compass,
  ShieldCheck,
} from "lucide-react";

const tips = [
  {
    icon: Clock3,
    title: "Start Early",
    text: "Leave early in the morning to maximise your sightseeing time.",
  },
  {
    icon: Backpack,
    title: "Pack Light",
    text: "Carry only essentials for a hassle-free weekend journey.",
  },
  {
    icon: CalendarCheck,
    title: "Book in Advance",
    text: "Reserve vehicles and hotels early during weekends and holidays.",
  },
  {
    icon: Shirt,
    title: "Dress Comfortably",
    text: "Carry clothing suitable for your destination and season.",
  },
  {
    icon: Compass,
    title: "Keep Plans Flexible",
    text: "Leave room for spontaneous stops and local experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Travel With Professionals",
    text: "Choose trusted operators like Kuldeep Travels for a stress-free trip.",
  },
];

export default function TravelTips() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Travel Tips
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Make Your Weekend Trip
            <span className="block text-blue-700">Even Better</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A little planning goes a long way. Follow these simple travel tips
            to enjoy a comfortable and memorable weekend getaway.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <div
                key={tip.title}
                className="flex gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-700">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div>
                  <span className="text-sm font-bold text-blue-700">
                    Tip {index + 1}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {tip.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">{tip.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
