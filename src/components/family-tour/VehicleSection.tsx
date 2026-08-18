"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, ShieldCheck, Star, MessageCircle, Sparkles } from "lucide-react";

const vehicles = [
  {
    name: "Prime Sedan (Dzire / Etios)",
    image: "/images/fleet/sedan.png",
    capacity: "4 Passengers",
    luggage: "2-3 Large Bags",
    bestFor: "Couples & Small Families (3-4 Pax)",
    features: ["Chilled AC", "Comfortable Seats", "Smooth Suspension", "USB Charging"],
    tag: "Economical & Cozy",
  },
  {
    name: "Spacious SUV (Ertiga / XL6)",
    image: "/images/fleet/ertiga.png",
    capacity: "6 Passengers",
    luggage: "3-4 Bags + Carrier",
    bestFor: "Medium Families (5-6 Pax)",
    features: ["Generous Legroom", "Dual AC Blowers", "Roof Luggage Carrier", "Child-Friendly"],
    tag: "Most Popular",
  },
  {
    name: "Luxury MPV (Innova Crysta)",
    image: "/images/fleet/innova.png",
    capacity: "6-7 Passengers",
    luggage: "4-5 Bags + Carrier",
    bestFor: "Ultimate Comfort & Long Hill Roads",
    features: ["Reclining Captain Seats", "Supreme Highway Safety", "Silent Cabin", "Premium Ride"],
    tag: "Top Rated Comfort",
  },
  {
    name: "Tempo Traveller (12–26 Seater)",
    image: "/images/fleet/tempo.png",
    capacity: "12 to 26 Passengers",
    luggage: "Dedicated Extra-Large Boot",
    bestFor: "Joint Families & Group Reunions",
    features: ["Maharaja Pushback Chairs", "High Roof & Wide Aisle", "LED TV & Music System", "Separate Driver Cabin"],
    tag: "Best for Big Families",
  },
];

export default function VehicleSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-14 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Family Fleet
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comfortable Vehicles for Every Family Size
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every family journey deserves clean, air-conditioned, and spacious
            transportation. Choose the right vehicle for your group size and luggage.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="mt-10 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={280}
                    className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3.5 left-3.5 rounded-full bg-blue-900/80 backdrop-blur px-2.5 py-0.5 text-[11px] font-bold text-white shadow">
                    {vehicle.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {vehicle.name}
                  </h3>

                  <div className="mt-3.5 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users size={15} className="text-blue-700 shrink-0" />
                      <span className="font-semibold text-slate-800">{vehicle.capacity}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase size={15} className="text-blue-700 shrink-0" />
                      <span>{vehicle.luggage}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{vehicle.bestFor}</span>
                    </div>
                  </div>

                  {/* Feature chips */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {vehicle.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
                >
                  <span>Select Vehicle</span>
                  <ArrowRight size={13} />
                </Link>

                <a
                  href={`https://wa.me/919936408109?text=${encodeURIComponent(
                    `Hello Kuldeep Travels, please share family tour package rates with ${vehicle.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
                  title="Ask Quote on WhatsApp"
                >
                  <MessageCircle size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Strip */}
        <div className="mt-10 md:mt-14 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-6 sm:p-8 md:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-300">
                <Star size={12} className="fill-yellow-300" />
                Fleet Recommendation
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold">
                Unsure which vehicle fits your family luggage & route?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-blue-100 max-w-xl">
                Tell us your passenger count and destination. We will advise the
                most cost-effective and comfortable fleet option.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <a
                href="tel:+919936408109"
                className="inline-flex items-center gap-1.5 rounded-xl bg-yellow-400 px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 hover:bg-yellow-300 transition active:scale-95"
              >
                <span>Call +91 99364 08109</span>
              </a>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20please%20help%20me%20choose%20the%20right%20vehicle%20for%20my%20family%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-900 transition active:scale-95"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>WhatsApp Fleet Expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
