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
  Plane,
} from "lucide-react";

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden bg-[#04132D] text-white min-h-[520px] lg:min-h-[580px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/heroimg/airport.png"
        alt="Book Premium Taxi & Tour with Kuldeep Travels"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover object-[75%_center] md:object-center opacity-35"
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04132D]/95 via-[#04132D]/85 to-[#04132D]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04132D] via-transparent to-transparent md:hidden" />

      {/* Decorative Glows */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-xs text-blue-200">
          <Link href="/" className="transition hover:text-yellow-400">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-yellow-300 font-semibold">Online Reservation</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Live Dispatch Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/15 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-yellow-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24×7 Instant Dispatch Desk • Lucknow & Outstation</span>
            </div>

            {/* Main Title */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Book Your Trusted Taxi{" "}
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                in Under 60 Seconds
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-blue-100">
              Reliable airport pickups, local city rentals, one-way drops, and outstation holiday tours.
              Experience sanitized AC vehicles, background-verified highway chauffeurs, and zero surge pricing.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-95 transition"
              >
                <CalendarCheck size={16} />
                <span>Fill Booking Form</span>
              </a>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20a%20taxi%20now."
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
            <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
                <Clock3 className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1" />
                <h4 className="text-xs sm:text-sm font-bold text-white">24×7 Live Desk</h4>
                <p className="text-[10px] sm:text-xs text-blue-200">Instant Confirmation</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
                <ShieldCheck className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1" />
                <h4 className="text-xs sm:text-sm font-bold text-white">100% Verified</h4>
                <p className="text-[10px] sm:text-xs text-blue-200">Highway Chauffeurs</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
                <Star className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1" />
                <h4 className="text-xs sm:text-sm font-bold text-white">12+ Years Trust</h4>
                <p className="text-[10px] sm:text-xs text-blue-200">50,000+ Happy Riders</p>
              </div>
            </div>
          </div>

          {/* Right Floating Transparent Fare Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/20 bg-slate-900/85 p-5 sm:p-7 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                    Transparent Tariff
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    Starting Fleet Rates
                  </h3>
                </div>
                <div className="rounded-xl bg-blue-600/30 p-2 text-blue-300">
                  <Car size={20} />
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
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3 text-xs transition hover:bg-white/10"
                  >
                    <div>
                      <span className="font-semibold text-white block">{item.vehicle}</span>
                      <p className="text-[10px] text-blue-200">{item.note}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-extrabold text-yellow-300 text-xs sm:text-sm">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  Free Cancellation
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  Pay After Trip
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  No Hidden Charges
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
