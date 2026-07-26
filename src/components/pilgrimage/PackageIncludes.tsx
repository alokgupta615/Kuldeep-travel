"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { packageIncludes } from "@/data/pilgrimage";

export default function PackageIncludes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Left */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
            <Sparkles className="h-4 w-4" />
            What's Included
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Everything You Need For A Comfortable Pilgrimage
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every package is thoughtfully planned to make your pilgrimage
            peaceful, comfortable and completely hassle-free.
          </p>

          <div className="mt-10 grid gap-5">
            {packageIncludes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-600 hover:bg-blue-50"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="relative">
          <Image
            src="/images/pilgrimage/includes.jpg"
            alt="Pilgrimage Package"
            width={700}
            height={750}
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute bottom-8 left-8 rounded-2xl bg-blue-700 p-6 text-white shadow-xl">
            <ShieldCheck className="mb-3 h-10 w-10 text-yellow-300" />

            <h3 className="text-xl font-bold">100% Personalized Tours</h3>

            <p className="mt-2 text-blue-100">
              Designed around your destinations, family size and travel dates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
