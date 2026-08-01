"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  ShieldCheck,
  BadgeIndianRupee,
  CalendarDays,
} from "lucide-react";

const trustCards = [
  {
    icon: CalendarDays,
    value: "2012",
    label: "Since",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Drivers",
  },
  {
    icon: BadgeIndianRupee,
    value: "Fixed",
    label: "Pricing",
  },
  {
    icon: CheckCircle,
    value: "Pay",
    label: "After Service",
  },
];

export default function HeroSection() {
  return (
    // <section className="relative h-screen min-h-[760px] overflow-hidden text-white">
    <section className="relative overflow-hidden text-white min-h-[780px] md:min-h-[900px] lg:min-h-screen">
      {/* ================= Background ================= */}

      <div className="absolute inset-0">
        {/* Desktop Image */}

        <Image
          src="/images/home/hero-bg.jpeg"
          alt="Kuldeep Travels"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="hidden md:block object-cover object-[82%_center]"
        />

        {/* Mobile Image */}

        <Image
          src="/images/home/hero-mobile.png"
          alt="Kuldeep Travels"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="block md:hidden object-cover object-right-bottom"
        />

        {/* Desktop Overlay */}

        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#04132D]/92 via-[#04132D]/68 to-transparent" />

        {/* Mobile Overlay */}

        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#04132D]/92 via-[#04132D]/72 to-[#04132D]/96" />

        {/* Soft Overlay */}

        <div className="absolute inset-0 bg-black/10" />

        {/* Left Glow */}

        <div className="absolute -left-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

        {/* Right Glow */}

        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-yellow-400/10 blur-[150px]" />
      </div>

      {/* ================= Content ================= */}

      <div className="relative z-10 mx-auto flex min-h-[780px] md:min-h-[900px] lg:min-h-screen w-full max-w-7xl items-center px-5 pt-28 pb-12 md:px-8 md:pt-36 lg:px-10 lg:pt-40">
        {/* <div className="max-w-[560px]"> */}
        <div className="max-w-[650px]">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300 backdrop-blur">
            <CheckCircle className="h-4 w-4" />
            Trusted Taxi Service Since 2012
          </div>

          {/* Heading */}

          <h1 className="mt-5 text-[46px] leading-[0.9] font-black sm:text-6xl lg:text-[76px]">
            Best Travel
            <br />
            Agency in
            <br />
            <span className="text-yellow-400">Lucknow</span>
          </h1>
          {/* Description */}

          <p className="mt-5 max-w-[620px] text-[17px] leading-8 sm:text-lg lg:text-xl lg:leading-9">
            Book safe, comfortable and affordable taxi services for Airport
            Transfers, Local Cabs, Outstation Trips, Corporate Travel and Family
            Tour Packages.
          </p>

          <p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
            Verified drivers, transparent pricing, premium fleet and 24×7
            customer support.
          </p>

          {/* CTA Buttons */}

          {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"> */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {/* Book Now */}

            <Link
              href="/book-now"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 px-8 py-3.5 font-semibold text-slate-900 shadow-[0_20px_50px_rgba(251,191,36,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(251,191,36,.55)]"
            >
              Book Your Ride
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Call */}

            <a
              href="tel:+918808142859"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-8 py-3.5 font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/918808142859"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3.5 font-semibold shadow-[0_15px_45px_rgba(16,185,129,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(16,185,129,.55)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          {/* Google Rating */}

          {/* {/* <div className="mt-7 flex flex-wrap items-center gap-3"> */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <div>
              <p className="font-semibold">Rated Excellent</p>

              <p className="text-sm text-slate-300 sm:text-base">
                Trusted by Thousands of Happy Travellers
              </p>
            </div>
          </div>
          {/* Trust Cards */}

          {/* <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4"> */}
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {trustCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-slate-900 shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-3 text-xl font-bold">{item.value}</h3>

                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              );
            })}
          </div>

          {/* Small Features */}

          <div className="mt-8 flex flex-wrap gap-2">
            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
              🚖 Airport Transfers
            </div>

            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
              🛣️ Outstation Taxi
            </div>

            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
              🏙️ Local Cab
            </div>

            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
              💼 Corporate Travel
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Gradient Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04132D] via-[#04132D]/60 to-transparent" />

      {/* Decorative Glow */}

      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-40 bg-gradient-to-r from-yellow-400 to-transparent lg:block" />

      <div className="pointer-events-none absolute right-0 top-1/3 hidden h-px w-52 bg-gradient-to-l from-blue-400 to-transparent lg:block" />

      <div className="pointer-events-none absolute right-20 top-20 hidden h-40 w-40 rounded-full bg-blue-400/10 blur-[120px] lg:block" />
    </section>
  );
}
