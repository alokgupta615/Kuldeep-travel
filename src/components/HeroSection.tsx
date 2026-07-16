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

      {/* Premium Background */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300 backdrop-blur">
              <CheckCircle className="h-4 w-4" />
              Trusted Taxi Service Since 2012
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Best Travel
              <br />

              Agency in

              <br />

              <span className="text-yellow-400">
                Lucknow
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
              Book safe, comfortable and affordable taxi services
              for Airport Transfers, Local Cabs, Outstation Trips,
              Corporate Travel and Family Tour Packages.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Verified drivers, transparent pricing, premium fleet
              and 24×7 customer support for every journey.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
              >
                Book Your Ride
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white hover:text-blue-900"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold transition hover:bg-green-500"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>

            </div>

            {/* Rating */}

            <div className="mt-10 flex items-center gap-3">

              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((item)=>(
                  <Star
                    key={item}
                    className="h-5 w-5 fill-current"
                  />
                ))}
              </div>

              <span className="text-slate-300">
                Rated Excellent by Thousands of Travelers
              </span>

            </div>

            {/* Trust Cards */}

            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">

              {trustCards.map((item)=>{

                const Icon=item.icon;

                return(

                  <div
                    key={item.label}
                    className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/15"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-slate-900">
                      <Icon className="h-6 w-6"/>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                      {item.label}
                    </p>

                  </div>

                )

              })}

            </div>

          </div>

          {/* Booking Form */}

          <div className="relative flex justify-center lg:justify-end">

            <div className="w-full max-w-lg rounded-[32px] border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              {/* <BookingForm /> */}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}