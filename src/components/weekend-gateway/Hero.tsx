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
  CalendarDays,
} from "lucide-react";

const highlights = [
  "Customized Weekend Packages",
  "Comfortable AC Vehicles",
  "Flexible Travel Itineraries",
  "Professional Drivers",
];

const stats = [
  {
    number: "100+",
    label: "Weekend Tours",
  },
  {
    number: "20+",
    label: "Top Destinations",
  },
  {
    number: "4.9★",
    label: "Google Rating",
  },
];

export default function Hero() {
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

      {/* ================= GLOW ================= */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <div>
            {/* Breadcrumb */}

            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4 text-yellow-300" />

              <span className="text-sm text-white/90">Home</span>

              <span className="mx-2 text-white/50">/</span>

              <span className="text-sm text-white/90">Tour Packages</span>

              <span className="mx-2 text-white/50">/</span>

              <span className="text-sm font-semibold text-cyan-300">
                Weekend Getaways
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Discover Amazing
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Weekend Getaways
              </span>
              <span className="block">from Lucknow</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
              Escape the routine with carefully planned weekend getaway packages
              from Lucknow. Explore hill stations, spiritual destinations,
              wildlife adventures and heritage cities with comfortable travel,
              verified drivers and personalised itineraries from Kuldeep
              Travels.
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

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-now"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 text-lg font-bold text-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-400/40"
              >
                Book Weekend Tour
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

            {/* Trust Badges */}

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

                <span className="text-white">20+ Destinations</span>
              </div>
            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl"
                >
                  <div className="text-2xl font-black text-white lg:text-3xl">
                    {stat.number}
                  </div>

                  <div className="mt-2 text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative mt-10 flex justify-center lg:mt-0">
            {/* Glow */}

            <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />

            {/* Main Image */}

            <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur lg:max-w-lg text-slate-900">
              <Image
                src="/images/destinations/hero.png"
                alt="Weekend Getaway from Lucknow"
                width={700}
                height={900}
                priority
                sizes="(max-width:768px) 95vw, 560px"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105 animate-floating"
              />
            </div>

            {/* ================= GOOGLE RATING ================= */}

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

            {/* ================= HAPPY TRAVELLERS ================= */}

            <div className="absolute -left-8 bottom-10 z-20 hidden rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900">51,000+</p>

                  <p className="text-sm text-slate-600">Happy Travellers</p>
                </div>
              </div>
            </div>

            {/* ================= WEEKEND TOURS ================= */}

            <div className="absolute -right-10 top-24 z-20 hidden rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-700" />
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900">
                    Weekend Tours
                  </p>

                  <p className="text-sm text-slate-600">
                    Hills • Wildlife • Spiritual
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 2-3 DAY TRIPS ================= */}

            <div className="absolute -right-8 bottom-20 z-20 hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 p-5 text-white shadow-2xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/20 p-3">
                  <CalendarDays className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-bold">2–3 Day Trips</p>

                  <p className="text-sm text-blue-100">
                    Perfect Weekend Escape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TRUST STRIP ================= */}

        <div className="mt-16 rounded-[32px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* ================= CARD 1 ================= */}

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-500/20 p-4">
                <ShieldCheck className="h-8 w-8 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Comfortable Travel
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  Travel in clean, well-maintained vehicles with experienced,
                  verified drivers for a safe and relaxing weekend getaway.
                </p>
              </div>
            </div>

            {/* ================= CARD 2 ================= */}

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-yellow-500/20 p-4">
                <Star className="h-8 w-8 text-yellow-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Customised Weekend Packages
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  Every itinerary is planned around your interests, travel
                  duration and budget for a memorable short holiday.
                </p>
              </div>
            </div>

            {/* ================= CARD 3 ================= */}

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-green-500/20 p-4">
                <MapPin className="h-8 w-8 text-green-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Explore 20+ Destinations
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  Visit Ayodhya, Varanasi, Prayagraj, Agra, Nainital, Mussoorie,
                  Haridwar, Rishikesh, Dudhwa National Park and many more
                  exciting weekend destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
