"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  Users,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

const features = [
  "Customized Tour Packages",
  "Family & Group Tours",
  "Pilgrimage Packages",
  "Weekend Getaways",
  "Hotel Assistance",
  "24×7 Travel Support",
];

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Travellers",
  },
  {
    icon: MapPin,
    value: "120+",
    label: "Destinations",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Google Rating",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2 lg:py-28">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300">
              <Sparkles className="mr-2 h-4 w-4" />
              Premium Holiday Packages
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Lucknow
              <span className="block text-yellow-400">Holiday Packages</span>
              <span className="block">for Comfortable Trips</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg lg:mx-0">
              Planning your next vacation? Discover thoughtfully designed
              holiday packages for families, couples, groups and spiritual
              travellers. From transportation to sightseeing and itinerary
              planning, Kuldeep Travels ensures every journey is comfortable,
              memorable and completely hassle-free.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-blue-950 transition hover:scale-105 hover:bg-yellow-300"
              >
                Book Holiday
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <CheckCircle2 className="mr-3 h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Desktop Stats */}
            <div className="mt-10 hidden grid-cols-3 gap-4 lg:grid">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur"
                  >
                    <Icon className="mx-auto h-7 w-7 text-yellow-400" />
                    <div className="mt-3 text-3xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-blue-100">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur">
              <Image
                src="/images/tour-package/tour.png"
                alt="Holiday Packages"
                width={700}
                height={500}
                priority
                // className="h-64 w-full rounded-2xl object-cover sm:h-80 md:h-[450px] lg:h-[600px]"
                className="object-cover"
              />
            </div>

            {/* Mobile Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 lg:hidden">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur"
                  >
                    <Icon className="mx-auto h-6 w-6 text-yellow-400" />
                    <div className="mt-2 text-xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="text-xs text-blue-100">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
