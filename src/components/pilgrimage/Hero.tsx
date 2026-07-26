"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  MapPin,
  Star,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

import { heroFeatures, heroStats } from "@/data/pilgrimage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/pilgrimage/hero.jpg"
          alt="Pilgrimage Tour Packages Lucknow"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-blue-700/70" />
      </div>

      {/* Decorative */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}

          <div>
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow-300" />

              <span className="text-sm font-medium">
                Trusted Religious Tours from Lucknow
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
              Pilgrimage Tour Packages
              <span className="block text-yellow-300">Lucknow</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">
              Visit India's most sacred destinations with comfort, care, and
              complete peace of mind. From one-day temple visits to customized
              Char Dham and Jyotirlinga tours, Kuldeep Travels ensures every
              spiritual journey is safe, organized, and memorable.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {heroFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400" />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:scale-105"
              >
                Book Your Journey
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>

            {/* Bottom */}

            <div className="mt-12 flex flex-wrap items-center gap-8">
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
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
              <Image
                src="/images/pilgrimage/hero.jpg"
                alt="Pilgrimage Tour"
                width={700}
                height={700}
                className="h-[600px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-12 w-12 text-yellow-300" />

                <div>
                  <p className="text-xl font-bold">Journey with Faith</p>

                  <p className="text-sm text-blue-100">
                    We handle the travel while you focus on your prayers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">
          {heroStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur"
            >
              <h3 className="text-4xl font-black text-yellow-300">
                {item.number}
              </h3>

              <p className="mt-2 text-blue-100">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
