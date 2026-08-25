"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
  CheckCircle,
  ArrowRight,
  Info,
  X,
  Sparkles,
  ShieldCheck,
  Check,
  Fuel,
  Car,
  MessageCircle,
} from "lucide-react";

interface VehicleItem {
  name: string;
  image: string;
  bestFor: string;
  passengers: string;
  luggage: string;
  ac: string;
  description: string;
  tag?: string;
  vehicleClass: string;
  fuelType: string;
  seatingDetails: string;
  luggageDetails: string;
  amenities: string[];
  features: string[];
  idealFor: string[];
}

const vehicles: VehicleItem[] = [
  {
    name: "Prime Sedan (Dzire / Etios)",
    image: "/images/fleet/sedan.png",
    bestFor: "Solo travellers, couples & business trips",
    passengers: "1–4 Passengers",
    luggage: "2–3 Bags",
    ac: "Chilled AC",
    tag: "Economical",
    vehicleClass: "Prime Compact Sedan",
    fuelType: "CNG / Petrol / Diesel",
    description:
      "Perfect for short and medium-distance one-way journeys with excellent comfort, fuel efficiency, and affordability.",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Soft fabric seats with generous rear legroom.",
    luggageDetails:
      "2-3 Large Suitcases (up to 25kg each) + 2 Cabin Handbags in dedicated boot space.",
    amenities: [
      "Chilled Air Conditioning (AC)",
      "USB Fast Mobile Charging Ports",
      "Clean & Sanitized Interiors",
      "Bluetooth / AUX Music System",
      "Commercial GPS Safety Tracking",
    ],
    features: [
      "Business Travel",
      "Family Visits",
      "Airport Transfers",
      "Short & Medium Distance Routes",
    ],
    idealFor: [
      "Airport Pick & Drop",
      "Lucknow to Kanpur / Ayodhya / Sitapur",
      "Budget One-Way Travel",
    ],
  },
  {
    name: "Spacious SUV (Ertiga / Carens)",
    image: "/images/fleet/suv.png",
    bestFor: "Families & Small Groups",
    passengers: "1–6 Passengers",
    luggage: "4–5 Bags",
    ac: "Dual AC Blowers",
    tag: "Most Popular",
    vehicleClass: "Spacious 6-Seater MPV",
    fuelType: "Petrol / Hybrid / CNG",
    description:
      "Extra seating space and luggage capacity make SUVs ideal for family trips, religious tours, and weekend getaways.",
    seatingDetails:
      "6 Passengers + 1 Chauffeur. Flexible 3-row seating with sliding 2nd row.",
    luggageDetails:
      "3-4 Bags in boot + Rooftop luggage carrier available for extra baggage.",
    amenities: [
      "Dual AC with 2nd Row Roof Blowers",
      "Foldable 3rd Row for Extra Boot",
      "USB Charging Sockets in All Rows",
      "Child-Friendly & Senior-Friendly Ingress",
    ],
    features: [
      "Family Trips",
      "Religious Tours",
      "Weekend Getaways",
      "Extra Luggage",
    ],
    idealFor: [
      "Family Pilgrimage (Ayodhya, Varanasi)",
      "One-Way Intercity Drops",
      "Family Vacations",
    ],
  },
  {
    name: "Luxury MPV (Innova Crysta)",
    image: "/images/fleet/innova-crysta.png",
    bestFor: "Premium Family & Corporate Travel",
    passengers: "1–7 Passengers",
    luggage: "5–6 Bags",
    ac: "Multi-Zone Climate AC",
    tag: "Executive Class",
    vehicleClass: "Executive Luxury MPV",
    fuelType: "Refined Turbo Diesel",
    description:
      "Experience premium comfort with spacious interiors, making every long-distance journey smooth and enjoyable.",
    seatingDetails:
      "6-7 Passengers + 1 Chauffeur. Ultra-plush reclining captain chairs with armrests.",
    luggageDetails:
      "5 Large Suitcases + 3 Cabin Trolleys + Rooftop Carrier on request.",
    amenities: [
      "Automatic Climate Control AC",
      "Leatherette Captain Seats with Armrests",
      "Acoustic Silent Insulated Cabin",
      "Advanced 7-Airbag Safety Suite",
    ],
    features: [
      "Corporate Travel",
      "Premium Intercity Rides",
      "Family Vacations",
      "VIP Group Travel",
    ],
    idealFor: [
      "Corporate Delegations",
      "VIP One-Way Highway Trips",
      "Long-Distance Comfort Travel",
    ],
  },
];

export default function VehicleOptions() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVehicle(null);
    };

    if (selectedVehicle) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVehicle]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Vehicle Options
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Find the Right Vehicle
            <span className="block text-blue-700">
              for Your Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every trip is different. Choose from our comfortable sedans,
            spacious SUVs, or premium Innova Crysta depending on your travel
            requirements, passengers, and luggage.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 bg-slate-100 flex items-center justify-center p-6">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-4"
                  />
                  {vehicle.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold text-white shadow backdrop-blur">
                      {vehicle.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {vehicle.name}
                  </h3>

                  <p className="mt-2 font-medium text-blue-700 text-sm">
                    Best For: {vehicle.bestFor}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <div className="inline-flex items-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-800">
                      <Users className="mr-1.5 h-4 w-4 text-blue-700" />
                      {vehicle.passengers}
                    </div>

                    <div className="inline-flex items-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-800">
                      <Briefcase className="mr-1.5 h-4 w-4 text-amber-600" />
                      {vehicle.luggage}
                    </div>

                    <div className="inline-flex items-center rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-800">
                      <Snowflake className="mr-1.5 h-4 w-4 text-cyan-600" />
                      {vehicle.ac}
                    </div>
                  </div>

                  <p className="mt-6 leading-relaxed text-sm text-gray-600">
                    {vehicle.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {vehicle.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-xs sm:text-sm text-gray-700 font-medium"
                      >
                        <CheckCircle className="mr-2.5 h-4 w-4 text-green-600 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-8 pt-0 border-t border-gray-100 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/70 py-2.5 text-xs font-bold text-blue-800 hover:bg-blue-100 transition active:scale-98 cursor-pointer"
                >
                  <Info size={14} className="text-blue-600" />
                  <span>View Details &amp; Specs</span>
                </button>

                <Link
                  href="/book-now"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-xs transition hover:bg-blue-800"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Not Sure Which Vehicle to Choose?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-blue-100">
            Tell us your destination, number of passengers, and luggage details.
            Our team will recommend the most suitable cab for a safe,
            comfortable, and cost-effective one-way journey.
          </p>

          <Link
            href="/book-now"
            className="mt-7 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm sm:text-base font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            <span>Book Your One-Way Cab</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* =========================================================
          VEHICLE DETAILS MODAL
      ========================================================== */}
      {selectedVehicle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 md:p-6 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedVehicle(null)}
        >
          <div
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-5 sm:p-6 text-white">
              <button
                type="button"
                onClick={() => setSelectedVehicle(null)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white hover:text-slate-900 transition"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                {selectedVehicle.tag && (
                  <span className="rounded-full bg-blue-600 px-3 py-0.5 text-xs font-bold text-white shadow">
                    {selectedVehicle.tag}
                  </span>
                )}
                <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-blue-200">
                  {selectedVehicle.vehicleClass}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {selectedVehicle.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-blue-200 font-medium">
                {selectedVehicle.fuelType}
              </p>
            </div>

            {/* Modal Body */}
            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* Vehicle Image & Quick Spec Strip */}
              <div className="grid gap-4 sm:grid-cols-12 items-center">
                <div className="sm:col-span-6 relative h-40 sm:h-48 w-full rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-3 border border-slate-200">
                  <Image
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="sm:col-span-6 grid grid-cols-2 gap-2.5 text-left">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-blue-700 mb-1">
                      <Users size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Capacity</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {selectedVehicle.passengers}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                      <Briefcase size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Luggage</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {selectedVehicle.luggage}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-cyan-600 mb-1">
                      <Snowflake size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Climate</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {selectedVehicle.ac}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
                      <ShieldCheck size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Service</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      Verified Cab
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Suited For */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4">
                <div className="flex items-start gap-2.5">
                  <Sparkles size={18} className="text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                      Best Suited For
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                      {selectedVehicle.bestFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Seating & Luggage Breakdown */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                    <Users size={16} className="text-blue-700" />
                    <span>Seating &amp; Comfort Layout</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedVehicle.seatingDetails}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                    <Briefcase size={16} className="text-amber-600" />
                    <span>Luggage &amp; Boot Space</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedVehicle.luggageDetails}
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Vehicle Amenities &amp; Features
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedVehicle.amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <Check size={15} className="text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Routes */}
              <div>
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Recommended Travel Routes
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedVehicle.idealFor.map((route, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200"
                    >
                      <Car size={13} className="text-blue-600" />
                      {route}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedVehicle(null)}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/919936408109?text=${encodeURIComponent(
                    `Hello Kuldeep Travels, I want to book a one-way taxi with ${selectedVehicle.name}. Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-800 hover:bg-emerald-100 transition"
                >
                  <MessageCircle size={16} className="text-emerald-600" />
                  <span>WhatsApp Quote</span>
                </a>

                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-800 shadow-md transition"
                >
                  <span>Book Now</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}