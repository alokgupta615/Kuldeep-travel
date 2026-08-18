"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Users,
  ShieldCheck,
  MapPinned,
  Sparkles,
  Phone,
} from "lucide-react";

const highlights = [
  "Doorstep Pickup & Drop Across Lucknow",
  "Dedicated AC Vehicles with Luggage Carriers",
  "Family-Friendly Verified Chauffeurs",
  "Flexible Daily Sightseeing Stops",
  "Pre-Booked Family Hotel Options",
  "24×7 On-Road Trip Support",
];

const features = [
  {
    icon: Users,
    title: "All-Age Group Friendly",
    desc: "Itineraries crafted with comfortable pacing for children, parents, and seniors.",
    color: "bg-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Chauffeurs",
    desc: "Strictly verified, non-smoking, background-checked highway chauffeurs.",
    color: "bg-emerald-600",
  },
  {
    icon: Heart,
    title: "100% Tailored Holidays",
    desc: "Customize travel dates, halts, sightseeing spots, and vehicle choice to your budget.",
    color: "bg-amber-600",
  },
];

export default function Introduction() {
  return (
    <section className="relative bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <Image
                src="/images/destinations/Family Holiday Packages.png"
                alt="Family Tour Packages from Lucknow"
                width={700}
                height={550}
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-xl border border-slate-100">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <MapPinned size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">150+</h4>
                <p className="text-xs text-slate-500 font-medium">
                  Family Holiday Spots
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
              <Sparkles size={14} className="text-blue-600" />
              Trusted Family Travel Partner
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Create Cherished Memories with Private Family Tour Packages from Lucknow
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every family holiday should be relaxing, joyful, and completely
              stress-free. At <strong>Kuldeep Travels</strong>, we design
              private family holiday packages featuring dedicated air-conditioned
              cabs and Tempo Travellers, handpicked stays, and tailored
              sightseeing so you travel on your own schedule.
            </p>

            {/* Highlights Grid */}
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 p-3 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-blue-800 transition active:scale-95"
              >
                <span>Plan Your Family Tour</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="tel:+919936408109"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 transition active:scale-95"
              >
                <Phone size={15} className="text-blue-700" />
                <span>Call +91 99364 08109</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pillar Features */}
        <div className="mt-14 md:mt-20 grid gap-6 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`inline-flex rounded-2xl ${item.color} p-3.5 text-white shadow-md mb-4`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
