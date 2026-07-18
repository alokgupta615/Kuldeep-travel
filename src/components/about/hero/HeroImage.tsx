"use client";

import Image from "next/image";
import { Award, Users } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">

      {/* Decorative Background Circle */}
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
        <Image
          src="/images/about/hero.jpeg"










          alt="Kuldeep Travels Taxi Service"
          width={600}
          height={700}
          priority
          className="h-[520px] w-full max-w-md object-cover transition duration-500 hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
      </div>

      {/* Experience Card */}
      <div className="absolute -left-6 top-10 hidden w-56 rounded-2xl border border-white/10 bg-white/90 p-5 shadow-xl backdrop-blur lg:block">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-yellow-400 p-3">
            <Award className="h-7 w-7 text-slate-900" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              10+
            </h3>

            <p className="text-sm text-slate-600">
              Years of Trusted Service
            </p>
          </div>
        </div>
      </div>

      {/* Happy Travelers Card */}
      <div className="absolute -bottom-6 right-6 hidden w-64 rounded-2xl border border-white/10 bg-white p-5 shadow-xl lg:block">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-600 p-3">
            <Users className="h-7 w-7 text-white" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              15K+
            </h3>

            <p className="text-sm text-slate-600">
              Happy Travelers Served
            </p>
          </div>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[98%] rounded-full bg-yellow-400" />
        </div>

        <p className="mt-2 text-xs text-slate-500">
          98% Customer Satisfaction
        </p>
      </div>

    </div>
  );
}