"use client";

import {
  ShieldCheck,
  Car,
  BadgeCheck,
  Wallet,
  RefreshCcw,
  Headphones,
  Sparkles,
} from "lucide-react";

import { whyChooseUs } from "@/data/pilgrimage";

const icons = [ShieldCheck, Car, BadgeCheck, Wallet, RefreshCcw, Headphones];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Why Choose Us
          </span>

          <h2 className="mt-5 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-5xl">
            Why Thousands of Pilgrims Trust Kuldeep Travels
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Every journey is planned with safety, comfort and devotion in mind.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:gap-6 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl sm:p-6 lg:rounded-3xl lg:p-8"
              >
                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>

                {/* Title */}

                <h3 className="mt-4 text-lg font-bold text-slate-900 sm:text-xl lg:mt-6 lg:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7 lg:mt-3 lg:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
