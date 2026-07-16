"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Car,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function BookingForm() {
  const [tripType, setTripType] = useState("One Way");

  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white">

          <h2 className="text-3xl font-bold">
            Book Your Ride
          </h2>

          <p className="mt-2 text-blue-100">
            Fast • Safe • Comfortable
          </p>

        </div>

        {/* Body */}

        <div className="space-y-6 p-8">

          {/* Trip Type */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Trip Type
            </label>

            <div className="grid grid-cols-2 gap-3">

              <button
                onClick={() => setTripType("One Way")}
                className={`rounded-xl border p-3 font-medium transition ${
                  tripType === "One Way"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-300 hover:border-blue-500"
                }`}
              >
                One Way
              </button>

              <button
                onClick={() => setTripType("Round Trip")}
                className={`rounded-xl border p-3 font-medium transition ${
                  tripType === "Round Trip"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-300 hover:border-blue-500"
                }`}
              >
                Round Trip
              </button>

            </div>

          </div>

          {/* Pickup */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Pickup Location
            </label>

            <div className="relative">

              <MapPin className="absolute left-4 top-4 h-5 w-5 text-blue-600" />

              <input
                type="text"
                placeholder="Enter Pickup Location"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Destination */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Destination
            </label>

            <div className="relative">

              <MapPin className="absolute left-4 top-4 h-5 w-5 text-blue-600" />

              <input
                type="text"
                placeholder="Enter Destination"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Date */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Journey Date
            </label>

            <div className="relative">

              <Calendar className="absolute left-4 top-4 h-5 w-5 text-blue-600" />

              <input
                type="date"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Vehicle */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Vehicle
            </label>

            <div className="relative">

              <Car className="absolute left-4 top-4 h-5 w-5 text-blue-600" />

              <select className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600">

                <option>Sedan</option>
                <option>SUV</option>
                <option>Innova Crysta</option>
                <option>Tempo Traveller</option>

              </select>

            </div>

          </div>

          {/* Passengers */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Passengers
            </label>

            <div className="relative">

              <Users className="absolute left-4 top-4 h-5 w-5 text-blue-600" />

              <input
                type="number"
                min={1}
                placeholder="No. of Passengers"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Mobile */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Mobile Number
            </label>

            <div className="relative">

              <Phone className="absolute left-4 top-4 h-5 w-5 text-blue-600" />

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

          </div>

          {/* Button */}

          <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 py-4 text-lg font-bold text-slate-900 transition hover:bg-yellow-500">

            Check Availability

            <ArrowRight className="h-5 w-5" />

          </button>

          {/* Contact */}

          <p className="text-center text-sm text-slate-500">
            Need help? Call us anytime for instant booking assistance.
          </p>

        </div>

      </div>

    </div>
  );
}