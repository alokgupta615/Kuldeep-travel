"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  ChevronRight,
  ShieldCheck,
  Clock3,
  Star,
  Sparkles,
  MessageCircle,
  Car,
  CheckCircle2,
  CalendarCheck,
  Zap,
} from "lucide-react";

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden bg-[#041126] text-white">
      {/* Background Image */}
      <Image
        src="/images/heroimg/airport.png"
        alt="Book Premium Taxi with Kuldeep Travels"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover object-[75%_center] md:object-center opacity-30"
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041126]/95 via-[#041126]/90 to-[#041126]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#041126] via-transparent to-transparent md:hidden" />

      {/* Decorative Glows */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-2 text-sm text-blue-200 font-medium">
          <Link href="/" className="transition hover:text-yellow-400">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-yellow-300 font-bold">Online Cab Booking</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            {/* Live Dispatch Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-yellow-400/40 bg-yellow-400/15 px-4 py-2 text-xs sm:text-sm font-bold text-yellow-300 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>24×7 Instant Cab Dispatch • Lucknow & North India</span>
            </div>

            {/* Main Title */}
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Book Your Premium Cab{" "}
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Fast & Reliable
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-blue-100/90 font-medium">
              Airport transfers, one-way drops, round trips, and family tours.
              Travel in clean, sanitized AC cabs with verified highway chauffeurs and zero hidden charges.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-4 text-sm sm:text-base font-extrabold text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-95 transition"
              >
                <CalendarCheck size={18} />
                <span>Fill Booking Form</span>
              </a>

              <a
                href="https://wa.me/918801842859?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20a%20taxi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm sm:text-base font-bold text-white shadow-md hover:bg-emerald-700 active:scale-95 transition"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href="tel:+918801842859"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm sm:text-base font-bold text-white backdrop-blur hover:bg-white hover:text-slate-950 active:scale-95 transition"
              >
                <PhoneCall size={17} className="text-yellow-400" />
                <span>+91 88018 42859</span>
              </a>
            </div>

            {/* 3 Quick Badges */}
            <div className="mt-9 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 sm:p-4 backdrop-blur text-center sm:text-left">
                <Zap className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1.5" />
                <h4 className="text-sm sm:text-base font-bold text-white">Fast Dispatch</h4>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">5–15 Mins Response</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 sm:p-4 backdrop-blur text-center sm:text-left">
                <ShieldCheck className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1.5" />
                <h4 className="text-sm sm:text-base font-bold text-white">100% Verified</h4>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">Highway Chauffeurs</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 sm:p-4 backdrop-blur text-center sm:text-left">
                <Star className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1.5" />
                <h4 className="text-sm sm:text-base font-bold text-white">4.9/5 Rating</h4>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">50,000+ Happy Riders</p>
              </div>
            </div>
          </div>

          {/* Right Floating Transparent Fare Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/20 bg-slate-900/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                    Transparent Tariff
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    Popular Cab Rates
                  </h3>
                </div>
                <div className="rounded-xl bg-blue-600/30 p-2.5 text-blue-300">
                  <Car size={22} />
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  { vehicle: "Prime Sedan (Dzire / Etios)", rate: "₹12/km", note: "AC • 4 Seats • 2 Bags" },
                  { vehicle: "Spacious SUV (Ertiga / XL6)", rate: "₹15/km", note: "Dual AC • 6 Seats • 4 Bags" },
                  { vehicle: "Premium MPV (Innova Crysta)", rate: "₹20/km", note: "Luxury • 7 Seats • 5 Bags" },
                  { vehicle: "Tempo Traveller (12-26 Seater)", rate: "₹26/km", note: "Pushback Seats • Group" },
                  { vehicle: "Lucknow Airport Transfer (CCS)", rate: "From ₹549", note: "Fixed Flat Fare • T1/T2/T3" },
                ].map((item) => (
                  <div
                    key={item.vehicle}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-xs sm:text-sm transition hover:bg-white/10"
                  >
                    <div>
                      <span className="font-bold text-white block">{item.vehicle}</span>
                      <p className="text-xs text-blue-200 mt-0.5">{item.note}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-extrabold text-yellow-300 text-sm sm:text-base">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-blue-100 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Free Cancellation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Pay After Trip
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  No Hidden Fees
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
