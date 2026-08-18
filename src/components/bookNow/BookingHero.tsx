"use client";

import Link from "next/link";
import { PhoneCall, ChevronRight, ShieldCheck, Clock3, Star, Sparkles, MessageCircle } from "lucide-react";

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Image with optimized overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/hero-bg.jpeg')",
        }}
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden" />

      {/* Glowing Accents */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-2 text-xs sm:text-sm text-slate-300">
          <Link href="/" className="transition hover:text-yellow-400">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-yellow-400 font-semibold">Book Taxi & Tours</span>
        </div>

        <div className="max-w-3xl">
          {/* Live Dispatch Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/15 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-yellow-300 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Instant Dispatch Desk • 24×7 Active in Lucknow</span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Book Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Premium Ride
            </span>{" "}
            in Minutes
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
            Transparent fixed pricing for Local City Travel, Airport Transfers, Outstation Trips,
            and Holiday Packages. Enjoy verified chauffeurs and clean sanitized AC vehicles.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#booking-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-95 transition"
            >
              <span>Fill Booking Form</span>
            </a>

            <a
              href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-95 transition"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Booking</span>
            </a>

            <a
              href="tel:+919936408109"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-950 active:scale-95 transition"
            >
              <PhoneCall size={15} className="text-yellow-400" />
              <span>+91 99364 08109</span>
            </a>
          </div>

          {/* 3 Quick Badges */}
          <div className="mt-9 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
              <Clock3 className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1" />
              <h4 className="text-xs sm:text-sm font-bold text-white">24×7 Support</h4>
              <p className="text-[10px] sm:text-xs text-slate-300">Live Trip Desk</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
              <ShieldCheck className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1" />
              <h4 className="text-xs sm:text-sm font-bold text-white">100% Verified</h4>
              <p className="text-[10px] sm:text-xs text-slate-300">Highway Drivers</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
              <Star className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1" />
              <h4 className="text-xs sm:text-sm font-bold text-white">12+ Years</h4>
              <p className="text-[10px] sm:text-xs text-slate-300">Trusted Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
