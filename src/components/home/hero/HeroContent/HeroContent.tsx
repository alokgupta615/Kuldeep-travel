"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

import HeroVisual from "./HeroVisual";

export default function HeroContent() {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left */}
      <div>
        {/* Put your existing badge, heading, description and buttons here */}

        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300">
          <CheckCircle className="h-4 w-4" />
          Trusted Since 2012
        </div>

        <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">
          Best Travel
          <br />
          Agency in
          <br />
          <span className="text-yellow-400">
            Lucknow
          </span>
        </h1>

        <p className="mt-8 text-xl text-slate-200">
          Book safe, comfortable and affordable taxi services.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/book-online"
            className="rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900"
          >
            Book Your Ride
          </Link>

          <Link
            href="tel:+919876543210"
            className="rounded-xl border border-white/20 px-7 py-4 text-white"
          >
            <Phone className="mr-2 inline h-5 w-5" />
            Call Now
          </Link>

          <Link
            href="https://wa.me/919876543210"
            className="rounded-xl bg-green-600 px-7 py-4 text-white"
          >
            <MessageCircle className="mr-2 inline h-5 w-5" />
            WhatsApp
          </Link>
        </div>
      </div>
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  BadgeIndianRupee,
  Clock3,
} from "lucide-react";

import HeroVisual from "./HeroVisual";

export default function HeroContent() {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left Side */}
      <div className="max-w-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">
          <CheckCircle className="h-4 w-4" />
          Trusted Since 2012
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
          Best Travel
          <br />
          Agency in
          <br />
          <span className="text-yellow-400">
            Lucknow
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl leading-9 text-slate-200">
          Book safe, comfortable and affordable taxi services
          for Airport Transfers, Local Cabs, Outstation Trips,
          Corporate Travel and Family Tour Packages.
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-300">
          Verified drivers, transparent pricing, well-maintained
          vehicles and 24×7 customer support for every journey.
        </p>

        {/* Trust Points */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <ShieldCheck className="h-6 w-6 text-green-400" />
            <span className="text-sm font-medium text-white">
              Verified Drivers
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <BadgeIndianRupee className="h-6 w-6 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              Fixed Pricing
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <Clock3 className="h-6 w-6 text-cyan-400" />
            <span className="text-sm font-medium text-white">
              24×7 Support
            </span>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/book-online"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
          >
            Book Your Ride
            <ArrowRight size={20} />
          </Link>

          <Link
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-blue-900"
          >
            <Phone size={18} />
            Call Now
          </Link>

          <Link
            href="https://wa.me/919876543210"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            <MessageCircle size={18} />
            WhatsApp
          </Link>

        </div>

      </div>

      {/* Right Side */}
      <HeroVisual />

    </div>
  );
}
      {/* Right */}
      <HeroVisual />

    </div>
  );
}