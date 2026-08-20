"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { heroFeatures, heroStats } from "@/data/pilgrimage";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}

      <Image
        src="/images/heroimg/pilgrimagehero.png"
        alt="Pilgrimage Tours Kuldeep Travels"
        fill
        priority
        sizes="100vw"
        className="
    object-cover
    object-[70%_center]
    md:object-[75%_center]
    lg:object-[82%_center]
    xl:object-right
  "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/20" />

      {/* Decorative Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-[120px]" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div
        className="
    relative z-10 mx-auto flex
    min-h-screen
    items-center lg:items-center
    max-w-7xl
    px-6 lg:px-8
    pt-16
    pb-12
    lg:py-24
  "
      >
        <div className="max-w-3xl">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md lg:mt-4">
            <Sparkles className="h-4 w-4 text-yellow-300" />

            <span className="text-sm font-semibold ">
              Trusted Religious Tours from Lucknow
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
            Pilgrimage Tour
            <br />
            Packages
            <span className="block text-yellow-400">Lucknow</span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-9 text-blue-100">
            Visit India's most sacred destinations with comfort, care and
            complete peace of mind. From one-day temple visits to customized
            Char Dham and Jyotirlinga tours, Kuldeep Travels ensures every
            spiritual journey is safe, organized and memorable.
          </p>

          {/* CTA */}

          <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-blue-950 transition hover:scale-105"
            >
              Book Your Journey
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Features */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {heroFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/20">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>

                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Bottom Info */}

          <div className="mt-14 flex flex-wrap gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>4.9 Google Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-400" />
              <span>Verified Drivers</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-yellow-300" />
              <span>Pickup Across Lucknow</span>
            </div>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-lg"
              >
                <h3 className="text-3xl font-black text-yellow-300">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 right-8 hidden h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur lg:flex">
        <svg
          className="h-6 w-6 animate-bounce text-yellow-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m0 0l6-6m-6 6l-6-6"
          />
        </svg>
      </div>
    </section>
  );
}
