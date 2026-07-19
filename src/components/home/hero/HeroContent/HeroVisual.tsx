"use client";

import Image from "next/image";
import { Star, Users, ShieldCheck, MapPin } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[380px] w-[380px] rounded-full bg-yellow-400/20 blur-3xl" />

      {/* Image Card */}
      <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
        <Image
          src="/images/about/hero.jpeg"
          alt="Kuldeep Travels"
          width={650}
          height={1050}
          priority
          className="w-full object-cover"
        />
      </div>

      {/* Rating */}
      <div className="absolute -left-6 top-6 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-white">4.9 Rating</span>
        </div>
        <p className="mt-1 text-sm text-slate-300">
          2,500+ Reviews
        </p>
      </div>

      {/* Customers */}
      <div className="absolute -right-6 top-16 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-yellow-400" />
          <span className="font-semibold text-white">50K+</span>
        </div>
        <p className="mt-1 text-sm text-slate-300">
          Happy Customers
        </p>
      </div>

      {/* Drivers */}
      <div className="absolute -left-6 bottom-12 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-green-400" />
          <span className="font-semibold text-white">
            Verified Drivers
          </span>
        </div>
      </div>

      {/* GPS */}
      <div className="absolute -right-6 bottom-4 z-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-red-400" />
          <span className="font-semibold text-white">
            Live GPS
          </span>
        </div>
      </div>
    </div>
  );
}