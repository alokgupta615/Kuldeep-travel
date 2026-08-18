"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
  MapPin,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  "100% Customized Itineraries",
  "Flexible Travel Dates",
  "Luxury & Budget Vehicles",
  "24×7 Travel Assistance",
];

const stats = [
  {
    number: "500+",
    label: "Custom Tours",
    icon: Users,
  },
  {
    number: "20+",
    label: "Destinations",
    icon: MapPin,
  },
  {
    number: "4.9★",
    label: "Google Rating",
    icon: Star,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white">
      {/* Background Blur */}

      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow-400" />

              <span className="text-sm font-semibold tracking-wide">
                Custom Tour Packages
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
              Travel Should Fit
              <span className="block text-yellow-400">Your Plans,</span>
              <span className="block">Not The Other Way Around</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100">
              Every traveller has a different idea of the perfect holiday. At
              Kuldeep Travels, we create fully customised tour packages designed
              around your destination, schedule, budget and travel style—so
              every journey feels uniquely yours.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400" />

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/book-now"
                className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105 hover:bg-yellow-300"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-5">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur"
                  >
                    <Icon className="mx-auto mb-3 h-7 w-7 text-yellow-400" />

                    <h3 className="text-3xl font-bold">{item.number}</h3>

                    <p className="mt-1 text-sm text-blue-100">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-2xl">
              <Image
                src="/images/tour-package/tour.png"
                alt="Custom Tour Packages"
                width={750}
                height={850}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -left-6 top-10 rounded-2xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-10 w-10 text-green-600" />

                <div>
                  <h4 className="font-bold text-slate-900">Safe & Secure</h4>

                  <p className="text-sm text-slate-500">
                    Trusted by Hundreds of Travellers
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-8 rounded-2xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <Star className="h-10 w-10 fill-yellow-400 text-yellow-400" />

                <div>
                  <h4 className="font-bold text-slate-900">
                    4.9 Google Rating
                  </h4>

                  <p className="text-sm text-slate-500">
                    Excellent Customer Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
