"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { packageIncludes } from "@/data/pilgrimage";

export default function PackageIncludes() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image First on Mobile */}
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src="/images/pilgrimage/includes.png"
                alt="Pilgrimage Package"
                width={700}
                height={850}
                className="h-[260px] sm:h-[400px] lg:h-[650px] w-full object-cover"
              />
            </div>

            {/* Desktop Floating Card */}
            <div className="absolute bottom-6 left-6 hidden max-w-sm rounded-2xl bg-blue-700/95 p-6 text-white shadow-2xl backdrop-blur lg:block">
              <ShieldCheck className="mb-3 h-10 w-10 text-yellow-300" />

              <h3 className="text-xl font-bold">100% Personalized Tours</h3>

              <p className="mt-2 text-blue-100">
                Designed around your destinations, family size and travel dates.
              </p>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="mt-5 rounded-2xl bg-blue-700 p-5 text-white shadow-xl lg:hidden">
            <ShieldCheck className="mb-3 h-8 w-8 text-yellow-300" />

            <h3 className="text-xl font-bold">100% Personalized Tours</h3>

            <p className="mt-2 text-blue-100">
              Designed around your destinations, family size and travel dates.
            </p>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              What's Included
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Everything You Need For A Comfortable Pilgrimage
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Every package is thoughtfully planned to make your pilgrimage
              peaceful, comfortable and completely hassle-free.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {packageIncludes.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>

                  <span className="text-sm font-medium leading-6 text-gray-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
