"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck2, Sparkles, Plane, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-14 md:py-24 text-white">
      {/* Background Glows */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl sm:rounded-[36px] border border-white/15 bg-white/10 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
            <Sparkles size={13} />
            24×7 Chaudhary Charan Singh Airport Transfers
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Need an Airport Taxi in Lucknow?{" "}
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Book in Under 60 Seconds
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-blue-100/90">
            Book in advance or request an instant airport cab. Enjoy on-time pickup,
            transparent fares, flight tracking, and courteous verified drivers.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/book-now"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-95 transition"
            >
              <CalendarCheck2 size={16} />
              <span>Book Airport Taxi</span>
            </Link>

            <a
              href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20an%20Airport%20Taxi%20in%20Lucknow."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-95 transition"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Airport Desk</span>
            </a>

            <a
              href="tel:+919936408109"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-950 active:scale-95 transition"
            >
              <Phone size={15} className="text-yellow-400" />
              <span>Call +91 99364 08109</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              Zero Cancellation Penalty
            </span>
            <span className="flex items-center gap-1.5">
              <Plane size={14} className="text-yellow-400" />
              All Terminals (T1, T2 & T3)
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-cyan-400" />
              Fixed Upfront Quotes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}