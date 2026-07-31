"use client";

import Link from "next/link";
import {
  ArrowRight,
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
      "We keep you informed throughout your journey with transparent communication, timely updates, and dedicated customer support.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "From booking to destination, you can depend on us for punctual pickups, professional drivers, and consistent service quality.",
  },
  {
    icon: CarFront,
    title: "Comfortable Travel",
    description:
      "Our fleet is clean, well-maintained, and equipped to ensure a safe, relaxing, and enjoyable travel experience.",
  },
  {
    icon: Clock3,
    title: "Respect for Your Time",
    description:
      "We value every minute of your schedule with efficient trip planning and on-time arrivals for every journey.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Experience",
    description:
      "Every travel plan is personalized to match your destination, group size, comfort, and budget without compromising quality.",
  },
  {
    icon: Smile,
    title: "Travel with Confidence",
    description:
      "Our goal is to create stress-free journeys that leave you with comfort, trust, and memorable travel experiences.",
  },
];

export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-16 text-white sm:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            Our Commitment
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            The Standards We Never Compromise
          </h2>

          <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
            Every journey reflects our dedication to reliability,
            professionalism, transparency, and exceptional customer care.
          </p>
        </div>

        {/* Commitment List */}
        <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group flex flex-col gap-6 px-6 py-8 transition-all duration-300 hover:bg-white/5 sm:flex-row sm:items-center sm:px-8 lg:px-10 ${
                  index !== commitments.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-900 shadow-xl transition duration-300 group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <div className="hidden h-px flex-1 bg-gradient-to-r from-yellow-400/70 via-yellow-400/20 to-transparent sm:block" />
                  </div>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* Bottom CTA */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-now"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
            >
              Book Your Ride
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-blue-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
