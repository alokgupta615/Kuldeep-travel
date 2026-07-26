"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Phone,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Customized Family Packages",
  "Luxury & Budget Vehicles",
  "Hotel Booking Assistance",
  "Professional Drivers",
];

const stats = [
  {
    number: "10K+",
    label: "Happy Families",
  },
  {
    number: "150+",
    label: "Destinations",
  },
  {
    number: "4.9★",
    label: "Google Rating",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">
      {/* ================= GRID BACKGROUND ================= */}

      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ================= GLOW EFFECTS ================= */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[130px]" />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="order-1">
            {/* Breadcrumb */}

            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4 text-yellow-300" />

              <span className="text-sm font-medium text-white/90">Home</span>

              <span className="mx-2 text-white/50">/</span>

              <span className="text-sm font-medium text-white/90">
                Tour Packages
              </span>

              <span className="mx-2 text-white/50">/</span>

              <span className="text-sm font-semibold text-cyan-300">
                Family Tours
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Create
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Unforgettable{" "}
              </span>
              Family Memories Across India
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
              Discover carefully planned family tour packages from Lucknow with
              comfortable vehicles, verified drivers, premium hotels,
              sightseeing, and personalised itineraries for a safe and joyful
              holiday.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <CheckCircle2 className="mr-3 h-5 w-5 text-green-400" />

                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            {/* ================= CTA BUTTONS ================= */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-now"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 text-lg font-bold text-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-400/40"
              >
                Book Family Tour
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="mr-3 h-5 w-5" />
                Contact Expert
              </Link>
            </div>

            {/* ================= TRUST BADGES ================= */}

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <ShieldCheck className="mr-3 h-6 w-6 text-green-400" />

                <span className="text-white">Safe Travel</span>
              </div>

              <div className="flex items-center">
                <Users className="mr-3 h-6 w-6 text-cyan-300" />

                <span className="text-white">Verified Drivers</span>
              </div>

              <div className="flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-yellow-300" />

                <span className="text-white">150+ Destinations</span>
              </div>
            </div>

            {/* ================= STATS ================= */}

            <div className="mt-12 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl"
                >
                  <div className="text-2xl lg:text-3xl- font-black text-white">
                    {stat.number}
                  </div>

                  <div className="mt-2 text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}
          <div className="relative order-2 mt-12 flex justify-center lg:mt-0 lg:order-2">
            {/* Glow */}

            <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />

            {/* Main Image Card */}

            <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur lg:max-w-lg">
              <Image
                src="/images/family-tour/hero.png"
                alt="Family Tour Packages"
                width={700}
                height={900}
                priority
                sizes="(max-width:768px) 95vw, 560px"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105 animate-floating"
              />
            </div>
            {/* ================= FLOATING GOOGLE RATING ================= */}

            <div className="absolute -left-10 top-10 z-20 hidden rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                  <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900">4.9 / 5</p>

                  <p className="text-sm text-slate-600">Google Rating</p>
                </div>
              </div>
            </div>

            {/* ================= HAPPY FAMILIES ================= */}

            <div className="absolute -left-8 bottom-10 z-20 hidden rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900">10,000+</p>

                  <p className="text-sm text-slate-600">Happy Families</p>
                </div>
              </div>
            </div>

            {/* ================= PREMIUM VEHICLES ================= */}

            <div className="absolute -right-10 top-24 z-20 hidden rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <ShieldCheck className="h-6 w-6 text-blue-700" />
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900">
                    Premium Fleet
                  </p>

                  <p className="text-sm text-slate-600">Sedan • SUV • Crysta</p>
                </div>
              </div>
            </div>

            {/* ================= SAFE JOURNEY ================= */}

            <div className="absolute -right-8 bottom-20 z-20 hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 p-5 text-white shadow-2xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/20 p-3">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-bold">Safe & Secure</p>

                  <p className="text-sm text-blue-100">Verified Drivers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TRUST STRIP ================= */}

        <div className="mt-16 rounded-[32px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-500/20 p-4">
                <ShieldCheck className="h-8 w-8 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Trusted Travel Partner
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  Safe, verified drivers and professionally maintained vehicles
                  for every family journey.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-yellow-500/20 p-4">
                <Star className="h-8 w-8 text-yellow-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Highly Rated Service
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  Thousands of satisfied travellers trust Kuldeep Travels for
                  comfortable family holidays.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-green-500/20 p-4">
                <MapPin className="h-8 w-8 text-green-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Explore 150+ Destinations
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  Hill stations, wildlife parks, heritage cities, pilgrimage
                  sites, beaches, and customised holiday packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
