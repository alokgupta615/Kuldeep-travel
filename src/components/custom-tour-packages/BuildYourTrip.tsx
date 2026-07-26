"use client";

import Link from "next/link";
import {
  MessageCircleMore,
  ClipboardList,
  Route,
  BadgeCheck,
  CarFront,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircleMore,
    title: "Tell Us Your Plan",
    description:
      "Share your destination, travel dates, group size, budget, and any special requests. Our team listens carefully before suggesting the best itinerary.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "We Create Your Itinerary",
    description:
      "Our travel experts prepare a personalised day-by-day itinerary with the right balance of sightseeing, relaxation, and travel time.",
  },
  {
    number: "03",
    icon: Route,
    title: "Review & Customise",
    description:
      "Need more time at a destination or want to add another city? We'll happily update the itinerary before booking.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Confirm Your Tour",
    description:
      "Once you're satisfied with the itinerary and quotation, we confirm your booking and make all necessary travel arrangements.",
  },
  {
    number: "05",
    icon: CarFront,
    title: "Enjoy Your Journey",
    description:
      "On the day of travel, our professional driver arrives at your preferred pickup location and your customised adventure begins.",
  },
];

export default function BuildYourTrip() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Decoration */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Build Your Tour
            <span className="text-blue-700"> in 5 Simple Steps</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Creating your perfect holiday shouldn't be complicated. Our simple
            planning process ensures every detail is organised before your
            journey begins.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-blue-100 md:block" />

          <div className="space-y-10">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col gap-6 md:flex-row md:items-start"
                >
                  {/* Step Circle */}

                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 text-xl font-bold text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-blue-100 p-4">
                        <Icon className="h-7 w-7 text-blue-700" />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-6 leading-8 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Card */}

        <div className="mt-24 overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-white shadow-2xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold">
                Ready to Create Your Dream Tour?
              </h3>

              <p className="mt-4 max-w-2xl text-lg text-blue-100">
                Share your travel plans with our experts, and we'll design a
                personalised itinerary that matches your schedule, interests,
                and budget.
              </p>
            </div>

            <Link
              href="/book-now"
              className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Request Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
