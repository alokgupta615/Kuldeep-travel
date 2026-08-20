"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  MapPin,
  CheckCircle2,
  Car,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Tag,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { packageRates, PackageRate } from "@/data/packageRates";

export default function FeaturedPackageRates() {
  const [selectedVehicle, setSelectedVehicle] = useState<"sedan" | "ertiga" | "innovaCrysta">("sedan");

  const vehicleOptions = [
    { key: "sedan" as const, label: "5 Seater Sedan", desc: "Dzire / Etios" },
    { key: "ertiga" as const, label: "Maruti Ertiga", desc: "6-7 Seater SUV" },
    { key: "innovaCrysta" as const, label: "Innova Crysta", desc: "Premium Captain MPV" },
  ];

  return (
    <section id="packages-pricing" className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
      {/* Decorative Glows */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-400/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-yellow-300 backdrop-blur-md">
            <Sparkles size={14} className="text-yellow-400" />
            Verified Package Rates
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Transparent Tour Packages &{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Discount Pricing
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            Fixed rates with zero surge pricing. Book your dream pilgrimage, hill station or city tour with sanitized AC vehicles and verified chauffeurs.
          </p>

          {/* Vehicle Switcher Filter */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
            {vehicleOptions.map((v) => {
              const active = selectedVehicle === v.key;
              return (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setSelectedVehicle(v.key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    active
                      ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-400/20 scale-[1.02]"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Car size={15} />
                  <span>{v.label}</span>
                  <span className={`hidden sm:inline text-[11px] font-medium opacity-80 ${active ? "text-slate-900" : "text-slate-400"}`}>
                    ({v.desc})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packageRates.map((pkg) => {
            const priceInfo = pkg.prices[selectedVehicle];
            const discountPct = Math.round(
              ((priceInfo.original - priceInfo.discount) / priceInfo.original) * 100
            );

            return (
              <div
                key={pkg.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-yellow-400/50 hover:shadow-yellow-400/10"
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="mb-4 inline-flex self-start items-center gap-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/15 px-3 py-1 text-xs font-bold text-yellow-300">
                    <Tag size={12} />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-300 transition">
                    {pkg.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    {pkg.subtitle}
                  </p>

                  {/* Duration & Distance Chips */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-slate-200">
                      <Clock size={13} className="text-yellow-400" />
                      {pkg.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-slate-200">
                      <MapPin size={13} className="text-yellow-400" />
                      {pkg.distance}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">
                          Special Discounted Price:
                        </span>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-2xl sm:text-3xl font-black text-yellow-400">
                            ₹{priceInfo.discount.toLocaleString("en-IN")}
                          </span>
                          <span className="text-sm font-semibold text-slate-500 line-through">
                            ₹{priceInfo.original.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>

                      <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 text-xs font-black text-emerald-300">
                        {discountPct}% OFF
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] text-slate-400 font-medium">
                      *Vehicle: <span className="text-slate-200 font-semibold">{vehicleOptions.find(v => v.key === selectedVehicle)?.label}</span>. 20% advance booking deposit.
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {pkg.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-7 pt-5 border-t border-white/10 flex flex-col gap-2.5">
                  <Link
                    href={`/book-now?package=${pkg.id}`}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-5 py-3 text-xs sm:text-sm font-black text-slate-950 shadow-md hover:bg-yellow-300 active:scale-95 transition"
                  >
                    <CalendarCheck size={16} />
                    <span>Book This Package Online</span>
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/919936408109?text=${encodeURIComponent(
                        `Hello Kuldeep Travels, I am interested in the "${pkg.name}" package with ${vehicleOptions.find(v => v.key === selectedVehicle)?.label} at ₹${priceInfo.discount}. Please share details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600/90 px-3 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition"
                    >
                      <MessageCircle size={14} />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="tel:+919936408109"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-xs font-bold text-white hover:bg-white/15 transition"
                    >
                      <PhoneCall size={14} className="text-yellow-400" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 20% Advance Payment Notice Card */}
        <div className="mt-12 rounded-2xl border border-blue-500/30 bg-blue-950/40 p-6 backdrop-blur-md sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Transparent 20% Advance Booking Policy
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Confirm your outstation or multi-day tour with just 20% advance deposit. Pay the remaining 80% directly to your driver after comfortable completion of your trip.
              </p>
            </div>
          </div>

          <div className="mt-4 shrink-0 sm:mt-0">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-yellow-400 transition"
            >
              Book with 20% Advance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
