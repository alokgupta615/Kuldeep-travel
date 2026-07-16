"use client";

import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  BadgeCheck,
  IndianRupee,
  Route,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Comfort Comes First",
    description:
      "Every journey is planned around the comfort of senior citizens. From selecting the right vehicle to allowing sufficient time for boarding, we focus on making travel easy and stress-free.",
  },
  {
    icon: ShieldCheck,
    title: "Professional & Respectful Drivers",
    description:
      "Our experienced drivers understand that patience, courtesy, and safe driving are just as important as reaching the destination on time.",
  },
  {
    icon: BadgeCheck,
    title: "Clean & Well-Maintained Vehicles",
    description:
      "Every vehicle is regularly serviced, cleaned, and inspected to provide a comfortable and reliable travel experience for elderly passengers.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "Know your fare before your journey begins. We provide clear quotations with no hidden charges, helping families plan with confidence.",
  },
  {
    icon: Route,
    title: "Flexible Travel Planning",
    description:
      "Need to stop at a pharmacy, pick up a family member, or make multiple stops? We'll accommodate your travel requirements wherever possible.",
  },
  {
    icon: Users,
    title: "Trusted by Families Across Lucknow",
    description:
      "Families continue choosing Kuldeep Travels because of our dependable service, courteous drivers, and commitment to making every journey comfortable.",
  },
];

const trustPoints = [
  "Serving Travellers Since 2012",
  "Safe & Comfortable Travel",
  "Professional Drivers",
  "Doorstep Pickup & Drop",
  "Transparent Pricing",
  "24×7 Booking Assistance",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Kuldeep Travels
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Families Across
            <span className="block text-blue-700">
              Lucknow Trust Us
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Booking transportation for elderly parents or grandparents is about
            more than arranging a cab—it's about choosing a travel partner you
            can rely on. We focus on safety, comfort, reliability, and a smooth
            experience from pickup to drop-off.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {reason.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Banner */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2">

            {/* Left */}

            <div>
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-400" />
                <h3 className="ml-3 text-3xl font-bold text-white">
                  A Travel Partner You Can Trust
                </h3>
              </div>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Whether it's a routine hospital visit, an airport transfer,
                a pilgrimage, or an outstation family trip, we ensure every
                senior citizen travels with comfort, dignity, and complete
                peace of mind.
              </p>
            </div>

            {/* Right */}

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center rounded-xl bg-white/10 px-5 py-4 backdrop-blur"
                >
                  <ShieldCheck className="mr-3 h-5 w-5 text-yellow-400" />
                  <span className="font-medium text-white">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* CTA */}

          <div className="border-t border-white/10 px-10 py-8">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

              <div>
                <h4 className="text-2xl font-bold text-white">
                  Ready to Book a Comfortable Journey?
                </h4>

                <p className="mt-2 text-blue-100">
                  Let us help you arrange safe and reliable transportation for
                  yourself or your loved ones.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}