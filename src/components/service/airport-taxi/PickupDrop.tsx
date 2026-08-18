"use client";

import Link from "next/link";
import {
  PlaneTakeoff,
  PlaneLanding,
  Clock,
  ShieldCheck,
  Luggage,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function PickupDrop() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <MapPin size={14} className="text-blue-600" />
            Dedicated Airport Services
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Airport Pickup & Drop Made Completely Stress-Free
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether arriving in Lucknow or catching a flight out, our chauffeurs
            guarantee prompt transfers with live flight tracking and zero waiting anxiety.
          </p>
        </div>

        {/* Two High-Impact Cards */}
        <div className="mt-10 md:mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1: Airport Pickup (Arrivals) */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50/70 to-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md">
                  <PlaneLanding size={28} />
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                  Arrivals (T1 / T2 / T3)
                </span>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
                Airport Pickup (Arrivals)
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Step off your flight with peace of mind. Your driver arrives before your
                scheduled landing, monitors real-time flight delays, and greets you at the
                designated arrival gate with luggage assistance.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Live Flight Delay Tracking (No extra waiting charges)",
                  "Driver Details & Cab Location shared via SMS/WhatsApp",
                  "45 Minutes Complimentary Waiting after flight touches down",
                  "Doorstep Drop to Any Hotel, Office or Home in Lucknow",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-700 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow hover:bg-blue-800 transition active:scale-95"
              >
                <span>Book Arrival Pickup</span>
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20need%20an%20Airport%20Pickup%20Cab."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition active:scale-95"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>WhatsApp Pickup</span>
              </a>
            </div>
          </div>

          {/* Card 2: Airport Drop (Departures) */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50/70 to-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 shadow-md">
                  <PlaneTakeoff size={28} />
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  Departures (City to Airport)
                </span>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
                Airport Drop (Departures)
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Never worry about missing a flight. Pre-book your city-to-airport taxi and
                our punctual chauffeur arrives 15 minutes before your scheduled pickup time,
                calculating peak highway traffic routes.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Guaranteed On-Time Doorstep Pickup across all Lucknow zones",
                  "Early Morning & Late Night 24×7 Scheduled Dispatch",
                  "Large Boot Space for Heavy Suitcases & Luggage",
                  "Direct Drop to Terminal Departure Gates (T1, T2 & T3)",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow hover:bg-slate-800 transition active:scale-95"
              >
                <span>Book Departure Drop</span>
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20need%20an%20Airport%20Drop%20Cab."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition active:scale-95"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>WhatsApp Drop</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}