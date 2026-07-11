"use client";

import Image from "next/image";
import { CalendarDays, Target, HeartHandshake } from "lucide-react";

const timeline = [
  {
    year: "The Beginning",
    title: "A Vision to Simplify Travel",
    description:
      "Kuldeep Travels started with a simple mission—to provide safe, transparent, and dependable taxi services in Lucknow with a customer-first approach.",
  },
  {
    year: "Growing Together",
    title: "Serving Every Travel Need",
    description:
      "As our customers grew, so did our services. We expanded into airport transfers, outstation taxis, tour packages, wedding transportation, and corporate travel.",
  },
  {
    year: "Today",
    title: "A Trusted Travel Partner",
    description:
      "Today, Kuldeep Travels proudly serves thousands of travelers with reliable vehicles, experienced drivers, and personalized travel solutions across North India.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about/our-story.jpg"
                alt="Kuldeep Travels Story"
                width={700}
                height={900}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-yellow-400 p-3">
                  <HeartHandshake className="h-7 w-7 text-slate-900" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Customer First
                  </h3>

                  <p className="text-sm text-slate-500">
                    Every journey begins with trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              Our Journey
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Every Great Journey Begins With Trust
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              What began as a commitment to honest and dependable taxi
              services has grown into a complete travel company trusted
              by families, tourists, businesses, and organizations
              throughout Lucknow and beyond.
            </p>

            <div className="mt-10 space-y-8">
              {timeline.map((item, index) => (
                <div key={item.title} className="relative pl-8">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[11px] top-8 h-full w-0.5 bg-slate-200" />
                  )}

                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                    <CalendarDays className="h-3.5 w-3.5" />
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission Card */}
            <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white shadow-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-yellow-400 p-3">
                  <Target className="h-7 w-7 text-slate-900" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Our Promise
                  </h3>

                  <p className="mt-3 leading-7 text-blue-100">
                    Every booking is handled with professionalism,
                    transparency, and attention to detail. Whether it's a
                    short city ride or a multi-day tour, we strive to
                    deliver a safe, comfortable, and memorable travel
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}