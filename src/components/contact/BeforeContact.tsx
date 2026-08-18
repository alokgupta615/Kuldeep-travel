"use client";

import { useState } from "react";
import {
  Car,
  Plane,
  Bus,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  HelpCircle,
} from "lucide-react";

const bookingInfo = [
  {
    id: "cab",
    title: "Taxi & Airport Rides",
    icon: Car,
    tag: "Instant 5-Min Quote",
    color: "bg-blue-600 text-white",
    lightBg: "bg-blue-50 border-blue-200",
    description: "Keep these details handy for an immediate fixed price quotation:",
    items: [
      "Pickup location & landmark",
      "Drop location / destination city",
      "Travel date & exact pickup time",
      "One-way or round-trip requirement",
      "Number of passengers & luggage",
      "Flight number (for airport pickup)",
    ],
  },
  {
    id: "tempo",
    title: "Tempo & Bus Rental",
    icon: Bus,
    tag: "Group & Event Travel",
    color: "bg-amber-600 text-white",
    lightBg: "bg-amber-50 border-amber-200",
    description: "Helps us allocate the perfect seating capacity & luggage space:",
    items: [
      "Total passenger count (12 to 55 seats)",
      "Pickup city & tour itinerary",
      "Total days & overnight halts",
      "Event type (Wedding, Pilgrimage, Corporate)",
      "Luggage volume & carrier preference",
      "AC / Luxury Maharaja seat options",
    ],
  },
  {
    id: "tour",
    title: "Holiday & Pilgrimage",
    icon: Plane,
    tag: "Custom Itineraries",
    color: "bg-emerald-600 text-white",
    lightBg: "bg-emerald-50 border-emerald-200",
    description: "Allows our travel planners to build a personalized schedule:",
    items: [
      "Preferred destinations (Ayodhya, Varanasi, Nepal, etc.)",
      "Approximate departure dates & duration",
      "Number of adults, seniors & children",
      "Hotel category preference (3★, 4★, 5★, or Cab only)",
      "Sightseeing points of interest",
      "Approximate overall budget",
    ],
  },
];

export default function BeforeContact() {
  const [activeTab, setActiveTab] = useState<string>("cab");

  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <HelpCircle size={14} className="text-blue-600" />
            Smooth Booking Guide
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What to Keep Ready for a Quick Quote
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Having these quick details ready allows our team to check real-time
            vehicle availability and deliver the most competitive, transparent
            price.
          </p>
        </div>

        {/* Mobile Tab Selector (Visible on Small Screens) */}
        <div className="mt-8 flex md:hidden gap-2 overflow-x-auto pb-2 scrollbar-none">
          {bookingInfo.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition shadow-sm ${
                  isActive
                    ? "bg-blue-700 text-white"
                    : "bg-white text-slate-700 border border-slate-200"
                }`}
              >
                <Icon size={15} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid: Desktop shows 3 cards, Mobile shows active tab or stacked cards */}
        <div className="mt-6 md:mt-10 grid gap-6 md:grid-cols-3">
          {bookingInfo.map((section) => {
            const Icon = section.icon;
            const isVisibleOnMobile = activeTab === section.id;

            return (
              <div
                key={section.id}
                className={`relative flex flex-col justify-between rounded-3xl border bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isVisibleOnMobile ? "flex" : "hidden md:flex"
                } border-slate-200`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${section.color} shadow-md`}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">
                      {section.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {section.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Checklist Items */}
                  <ul className="mt-5 space-y-2.5">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 text-emerald-600 shrink-0"
                          size={15}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#contact-form"
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    <span>Request Quotation</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Banner */}
        <div className="mt-10 md:mt-14 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 p-6 sm:p-8 md:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-300">
                <Sparkles size={13} />
                Need Quick Help?
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                Not sure about your travel requirements?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-blue-200 max-w-xl">
                Just give us a quick call or message on WhatsApp. Our travel
                experts will suggest the best route, vehicle, and price.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <a
                href="tel:+919936408109"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 shadow-md hover:bg-yellow-300 active:scale-95 transition"
              >
                <Phone size={16} />
                <span>Call +91 99364 08109</span>
              </a>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20need%20advice%20on%20planning%20my%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-900 active:scale-95 transition"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}