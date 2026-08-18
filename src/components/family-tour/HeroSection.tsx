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
  MessageCircle,
  Clock,
  Heart,
} from "lucide-react";

const highlights = [
  "Kid & Senior-Citizen Friendly",
  "Spacious AC Fleets & Tempo Travellers",
  "Verified & Courteous Chauffeurs",
  "Customizable Daily Sightseeing",
];

const stats = [
  {
    number: "51K+",
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
  {
    number: "100%",
    label: "Safe & Sanitized",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white pt-28 pb-14 md:pt-36 md:pb-24">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Ambient Glows */}
      <div className="absolute left-0 top-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-amber-400/15 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Breadcrumb & Rating Badge */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur">
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-yellow-300" />
                <Link href="/" className="hover:text-yellow-300 transition">
                  Home
                </Link>
                <span className="mx-1.5 text-white/50">/</span>
                <Link
                  href="/tour-packages"
                  className="hover:text-yellow-300 transition"
                >
                  Tour Packages
                </Link>
                <span className="mx-1.5 text-white/50">/</span>
                <span className="font-semibold text-cyan-300">Family Tours</span>
              </div>

              <div className="inline-flex items-center gap-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 px-3 py-1 text-xs font-bold text-yellow-300">
                <Star size={13} className="fill-yellow-400 text-yellow-400" />
                <span>4.9★ (51,000+ Families)</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              Create{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Unforgettable
              </span>{" "}
              Family Holidays Across India
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-blue-100/90 max-w-xl">
              Carefully planned family holiday packages from Lucknow with
              comfortable AC vehicles, verified chauffeurs, handpicked hotels,
              and flexible sightseeing for pure family joy.
            </p>

            {/* Highlights Grid */}
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 backdrop-blur text-xs sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-white/95 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#packages"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3.5 font-bold text-slate-900 shadow-lg shadow-yellow-500/25 transition-all hover:bg-yellow-300 active:scale-95 text-sm sm:text-base"
              >
                <span>Explore Family Packages</span>
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20am%20planning%20a%20family%20tour%20from%20Lucknow.%20Please%20suggest%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900 active:scale-95 text-sm sm:text-base"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>WhatsApp Tour Planner</span>
              </a>

              <a
                href="tel:+919936408109"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-600/30 px-5 py-3.5 font-semibold text-blue-100 backdrop-blur transition hover:bg-blue-600/50 hover:text-white text-sm"
              >
                <Phone size={15} className="text-yellow-400" />
                <span>+91 99364 08109</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4 text-center backdrop-blur-md"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-yellow-400">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Featured Showcase Card */}
          <div className="relative flex justify-center">
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/destinations/Family Holiday Packages.png"
                  alt="Family Tour Packages from Lucknow"
                  width={600}
                  height={500}
                  priority
                  className="aspect-[4/3] w-full object-cover rounded-2xl transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400 text-slate-950 px-2.5 py-0.5 text-[11px] font-bold">
                    <Heart size={11} className="fill-slate-950" />
                    Special Family Offer
                  </span>
                  <h2 className="mt-1.5 text-base sm:text-lg font-bold">
                    Customized North India Family Tours
                  </h2>
                  <p className="text-xs text-blue-100">
                    Hill stations, temples & wildlife resorts tailored for your family.
                  </p>
                </div>
              </div>

              {/* Floating Feature Badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 p-2.5 border border-white/10">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white">Safe & Sanitized</p>
                    <p className="text-[10px] text-blue-200">Verified Chauffeurs</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white/10 p-2.5 border border-white/10">
                  <Users size={16} className="text-cyan-300 shrink-0" />
                  <div>
                    <p className="font-bold text-white">All Group Sizes</p>
                    <p className="text-[10px] text-blue-200">Sedan to 26-Seater</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
