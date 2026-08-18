"use client";

import {
  Clock3,
  BadgeIndianRupee,
  CarFront,
  ShieldCheck,
  PlaneLanding,
  Headset,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "100% On-Time Airport Arrival",
    description:
      "We calculate real-time Lucknow city traffic to guarantee you arrive at your departure gate well ahead of your boarding time.",
  },
  {
    icon: PlaneLanding,
    title: "Free Flight Delay Tracking",
    description:
      "Our system tracks incoming flight delays automatically. No waiting penalty or extra charges if your flight lands late.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Fixed Transparent Rates",
    description:
      "All-inclusive flat fares covering parking, tolls, and fuel. No midnight surge or surprise extra billing upon arrival.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Highway Chauffeurs",
    description:
      "Background-verified, polite, non-smoking drivers trained in courteous luggage handling and defensive driving.",
  },
  {
    icon: CarFront,
    title: "Spotless Sanitized Fleet",
    description:
      "Clean AC sedans, SUVs, Innovas, and Tempo Travellers sanitized thoroughly before every airport pickup.",
  },
  {
    icon: Headset,
    title: "24×7 Active Dispatch Desk",
    description:
      "Need a last-minute 3:00 AM airport taxi? Our active 24-hour operations team dispatches verified cabs within minutes.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-14 md:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Reliability Guarantee
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Lucknow Flyers Trust Kuldeep Travels
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Over a decade of airport transfer excellence with more than 50,000+ satisfied
            passengers across Chaudhary Charan Singh International Airport.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white shadow-sm">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}