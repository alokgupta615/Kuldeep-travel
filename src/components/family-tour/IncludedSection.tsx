"use client";

import Link from "next/link";
import {
  CheckCircle2,
  PlusCircle,
  ArrowRight,
  Car,
  Hotel,
  Route,
  UserCheck,
  Clock,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const included = [
  {
    icon: Car,
    title: "Doorstep Pickup & Drop",
    desc: "Convenient pickup and drop from your residence or airport in Lucknow.",
  },
  {
    icon: Route,
    title: "Dedicated Private AC Vehicle",
    desc: "Clean, air-conditioned vehicle exclusively reserved for your family.",
  },
  {
    icon: UserCheck,
    title: "Verified Highway Chauffeur",
    desc: "Experienced, polite, non-smoking, and family-friendly driver.",
  },
  {
    icon: Clock,
    title: "Flexible Daily Timings",
    desc: "Start and pause according to your family's morning and meal schedules.",
  },
  {
    icon: ShieldCheck,
    title: "24×7 Roadside & Trip Assistance",
    desc: "Dedicated tour manager support throughout your entire itinerary.",
  },
  {
    icon: Hotel,
    title: "Fuel, Toll & State Taxes Included",
    desc: "Fixed transparent pricing with zero surprise charges on the road.",
  },
];

const optional = [
  "Handpicked Family Hotel Stays",
  "Daily Breakfast & Dinner Buffets",
  "Jungle Safari & Jeep Bookings",
  "Monument Entry Passes & Guides",
  "Boating & Ropeway Tickets",
  "Special Wheelchair Assistance",
  "Decorated Marriage/Celebration Cab",
  "Custom Meal & Snack Stops",
];

export default function IncludedSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-14 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Transparent Value
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What's Included in Your Family Tour Package
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every family holiday is planned to provide a comfortable,
            all-inclusive, and safe travel experience with no hidden costs.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="mt-10 md:mt-14 grid gap-8 lg:grid-cols-2">
          {/* Included Card */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Standard Package Inclusions
                </h3>
                <p className="text-xs text-slate-500">
                  Included in every family tour booking
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-slate-100 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
                >
                  <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700 shrink-0 mt-0.5">
                    <item.icon size={18} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Add-ons Card */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-6 sm:p-8 md:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-300">
                  <PlusCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Optional Custom Add-ons
                  </h3>
                  <p className="text-xs text-blue-200">
                    Customize your trip based on your preferences
                  </p>
                </div>
              </div>

              <p className="mb-6 text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Add any of these optional services to your package for a
                complete hands-off vacation experience:
              </p>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {optional.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl bg-white/10 p-3 backdrop-blur text-xs sm:text-sm"
                  >
                    <CheckCircle2 size={16} className="text-yellow-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom CTA Box */}
            <div className="mt-8 rounded-2xl bg-white/10 p-5 sm:p-6 border border-white/15 backdrop-blur">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Need a Custom Package for Your Family?
              </h4>
              <p className="mt-1.5 text-xs text-blue-100 leading-relaxed">
                Share your dates, destinations, and family size. We will build a
                personalized day-by-day itinerary.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-yellow-400 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-yellow-300 transition active:scale-95"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20a%20customized%20family%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition active:scale-95"
                >
                  <MessageCircle size={15} className="text-emerald-400" />
                  <span>WhatsApp Planner</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
