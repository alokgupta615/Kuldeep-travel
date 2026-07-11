"use client";

import {
  ShieldCheck,
  MessageCircleMore,
  Clock3,
  HeartHandshake,
  CarFront,
  Smile,
} from "lucide-react";

const commitments = [
  {
    icon: MessageCircleMore,
    title: "Honest Communication",
    description:
      "We keep our customers informed from booking to trip completion with clear and transparent communication.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Our team works hard to ensure every journey begins and ends on time with dependable transportation.",
  },
  {
    icon: CarFront,
    title: "Comfortable Travel",
    description:
      "Clean, well-maintained vehicles designed to provide a smooth and enjoyable travel experience.",
  },
  {
    icon: Clock3,
    title: "Respect for Your Time",
    description:
      "Punctual pickups and efficient planning help you stay on schedule throughout your journey.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Approach",
    description:
      "Every recommendation is tailored to your destination, travel plans, group size, and budget.",
  },
  {
    icon: Smile,
    title: "Memorable Experiences",
    description:
      "We don't just provide transportation—we help create enjoyable and stress-free travel memories.",
  },
];

export default function Commitment() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900">
            Our Commitment
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Every Journey Matters
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            When you book with Kuldeep Travels, you're placing your trust in us.
            That's why every trip is planned with care, professionalism,
            and attention to detail.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {commitments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 transition group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-20 rounded-3xl bg-white/10 p-10 text-center backdrop-blur">
          <blockquote className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed">
            "Our goal isn't just to take you to your destination—
            it's to make every mile of your journey safe,
            comfortable, and memorable."
          </blockquote>

          <p className="mt-6 text-yellow-300 font-semibold">
            — Team Kuldeep Travels
          </p>
        </div>

      </div>
    </section>
  );
}