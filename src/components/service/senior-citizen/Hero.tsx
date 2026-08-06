"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  HeartHandshake,
  Clock3,
  CalendarDays,
  Users,
} from "lucide-react";

const highlights = [
  "Safe & Comfortable Travel",
  "Professional Drivers",
  "Clean Vehicles",
  "Doorstep Pickup & Drop",
];

const stats = [
  {
    icon: CalendarDays,
    value: "Since 2012",
    label: "Trusted Travel Service",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Families",
  },
  {
    icon: Clock3,
    value: "24×7",
    label: "Booking Support",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="
  absolute inset-0
  bg-cover
  bg-no-repeat
  bg-[70%_center]
  sm:bg-[65%_center]
  md:bg-[60%_center]
  lg:bg-[65%_center]
  xl:bg-[60%_center]
  xl:bg-[60%_center]
 "
        style={{
          backgroundImage: "url('/images/heroimg/seniorhero.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-950/90 to-blue-900/85 md:bg-gradient-to-r md:from-blue-950/95 md:via-blue-950/85 md:to-blue-900/70" />

      {/* Decorative Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-14 pb-14 sm:px-6 sm:pt-16 md:pt-20 md:pb-20 lg:px-8 lg:pt-24 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            <HeartHandshake className="mr-2 h-4 w-4 text-yellow-400" />
            Dedicated Senior Citizen Travel
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Senior Citizen Cab
            <span className="mt-2 block text-yellow-400">
              Service in Lucknow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg font-medium text-blue-100 sm:text-xl">
            Safe, Comfortable & Reliable Travel for Every Journey
          </p>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Whether it's a hospital visit, airport transfer, temple trip, family
            function, or everyday travel, Kuldeep Travels provides dependable
            cab services specially designed for senior citizens. Our courteous
            drivers, clean vehicles, and punctual service ensure every journey
            is safe, comfortable, and stress-free.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="group flex items-center rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/15"
              >
                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                  <ShieldCheck className="h-5 w-5 text-yellow-400" />
                </div>

                <span className="text-sm font-semibold text-white sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 text-base font-bold text-blue-950 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300 sm:w-auto"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="tel:+919999999999"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-900 sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>
          </div>

          {/* Small Trust Section */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-blue-100">
            <div className="flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />
              Trusted by Families
            </div>

            <div className="flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-yellow-400" />
              Verified Drivers
            </div>

            <div className="flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />
              24×7 Assistance
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3"></div>

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/15"
            >
              <div className="flex items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-blue-950" />
                </div>

                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-blue-100">{item.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
