"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CalendarCheck2,
  ShieldCheck,
  BadgeCheck,
  Star,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-14 md:py-24 text-white">
      {/* Background Glows */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl sm:rounded-[36px] border border-white/15 bg-white/10 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
                <Sparkles size={13} />
                Plan Your Dream Family Vacation
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready for Your Next{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Family Holiday?
                </span>
              </h2>

              <p className="mt-4 text-xs sm:text-base leading-relaxed text-blue-100/90 max-w-xl">
                Let Kuldeep Travels curate an unforgettable holiday with
                comfortable AC fleets, professional drivers, verified hotels,
                and complete travel support from start to finish.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-95 transition"
                >
                  <CalendarCheck2 size={16} />
                  <span>Book Family Tour</span>
                </Link>

                <a
                  href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20inquire%20about%20a%20family%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-700 active:scale-95 transition shadow-md"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Tour Planner</span>
                </a>

                <a
                  href="tel:+919936408109"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-slate-900 active:scale-95 transition"
                >
                  <Phone size={15} className="text-yellow-400" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-3.5">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 backdrop-blur">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <BadgeCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Verified Travel Service
                    </h3>
                    <p className="text-xs text-blue-100 mt-0.5">
                      Professional highway chauffeurs and sanitized vehicles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 backdrop-blur">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Safe & Comfortable Journey
                    </h3>
                    <p className="text-xs text-blue-100 mt-0.5">
                      Clean AC cabs, transparent fixed rates, and 24×7 dispatch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 p-5 sm:p-6 backdrop-blur">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Why Families Choose Kuldeep Travels?
                </h3>

                <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-100">
                  {[
                    "Custom Family Tour Plans",
                    "Sedan, SUV & Tempo Fleets",
                    "Hotel Booking Assistance",
                    "Doorstep Lucknow Pickup",
                    "24×7 Trip Assistance",
                    "Transparent Fixed Pricing",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <ArrowRight size={13} className="text-yellow-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
