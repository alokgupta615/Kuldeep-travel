"use client";

import { CalendarDays, MapPin, Car, ArrowRight } from "lucide-react";

export default function HeroBooking() {
  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-yellow-400/20 via-blue-500/20 to-yellow-400/20 blur-xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 px-8 py-7 text-white">

          <h2 className="text-3xl font-bold">
            Book Your Ride
          </h2>

          <p className="mt-2 text-blue-100">
            Safe • Comfortable • Fixed Pricing
          </p>

        </div>

        {/* Form */}

        <div className="space-y-6 p-8">

          {/* Pickup */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Pickup Location
            </label>

            <div className="relative">

              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

              <input
                type="text"
                placeholder="Enter pickup location"
                className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Drop */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Drop Location
            </label>

            <div className="relative">

              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

              <input
                type="text"
                placeholder="Enter drop location"
                className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Date */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Journey Date
            </label>

            <div className="relative">

              <CalendarDays className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

              <input
                type="date"
                className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Vehicle */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Select Vehicle
            </label>

            <div className="relative">

              <Car className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

              <select
                className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
              >
                <option>Sedan</option>
                <option>SUV</option>
                <option>Innova Crysta</option>
                <option>Tempo Traveller</option>
              </select>

            </div>

          </div>

          {/* Estimated Fare */}

          <div className="rounded-2xl bg-slate-50 p-5">

            <div className="flex items-center justify-between">

              <span className="text-slate-500">
                Estimated Fare
              </span>

              <span className="text-3xl font-bold text-blue-900">
                ₹2,450
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Final fare may vary depending on route & toll charges.
            </p>

          </div>

          {/* Button */}

          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-4 text-lg font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            Book Taxi

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </div>
  );
}