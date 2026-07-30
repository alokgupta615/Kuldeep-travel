"use client";

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

import BookingForm from "./BookingForm";
import HeroBackground from "@/components/about/hero/HeroBackground";

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
    <section className="relative overflow-hidden text-white">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium text-yellow-300 backdrop-blur">
              <CheckCircle className="h-4 w-4" />
              Trusted Taxi Service Since 2012
            </div>

            {/* Heading */}

            <h1 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-7xl">
              Best Travel
              <br />
              Agency in
              <br />
              <span className="text-yellow-400">Lucknow</span>
            </h1>

            {/* Description */}

            <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg lg:text-xl lg:leading-9">
              Book safe, comfortable and affordable taxi services for Airport
              Transfers, Local Cabs, Outstation Trips, Corporate Travel and
              Family Tour Packages.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base lg:text-lg">
              Verified drivers, transparent pricing, premium fleet and 24×7
              customer support.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/book-now"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Book Your Ride
                <ArrowRight className="h-4 w-4 lg:h-6 lg:w-6" />
              </Link>

              <a
                href="tel:+918808142859"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white hover:text-blue-900"
              >
                <Phone className="h-4 w-4 lg:h-6 lg:w-6" />
                Call Now
              </a>

              <a
                href="https://wa.me/918808142859"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-500"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            {/* Rating */}

            <div className="mt-8 flex items-center gap-3">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current sm:h-5 sm:w-5"
                  />
                ))}
              </div>

              <span className="text-sm text-slate-300 sm:text-base">
                Rated Excellent by Thousands of Travelers
              </span>
            </div>

            {/* Trust Cards */}

            <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-5">
              {trustCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/10 p-2.5 backdrop-blur transition hover:bg-white/15 lg:rounded-2xl lg:p-5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-900 lg:h-12 lg:w-12">
                      <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                    </div>

                    <h3 className="mt-3 text-lg font-bold lg:mt-5 lg:text-2xl">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-xs text-slate-300 lg:mt-2 lg:text-sm">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl">
              {/* Uncomment when ready */}

              {/* <BookingForm /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
