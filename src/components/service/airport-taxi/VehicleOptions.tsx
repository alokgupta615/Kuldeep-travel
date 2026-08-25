"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Info,
  X,
  Check,
  Fuel,
  Car,
} from "lucide-react";

interface VehicleItem {
  name: string;
  image: string;
  capacity: string;
  luggage: string;
  ac: string;
  price: string;
  bestFor: string;
  features: string[];
  tag: string;
  vehicleClass: string;
  fuelType: string;
  seatingDetails: string;
  luggageDetails: string;
  amenities: string[];
  idealFor: string[];
}

const vehicles: VehicleItem[] = [
  {
    name: "Prime Sedan (Dzire / Etios)",
    image: "/images/fleet/sedan.png",
    capacity: "4 Passengers",
    luggage: "2-3 Large Suitcases",
    ac: "Chilled AC",
    price: "Starting ₹549 fixed",
    bestFor: "Solo Flyers, Business Execs & Couples",
    features: ["Chilled AC", "Comfortable Legroom", "Smooth Highway Drive"],
    tag: "Economical & Quick",
    vehicleClass: "Prime Compact Sedan",
    fuelType: "CNG / Petrol / Diesel",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Soft fabric seats with generous rear legroom.",
    luggageDetails:
      "2-3 Large Suitcases (up to 25kg each) + 2 Cabin Handbags in dedicated boot space.",
    amenities: [
      "Chilled Air Conditioning (AC)",
      "USB Fast Mobile Charging Ports",
      "Clean & Sanitized Interiors",
      "Flight Delay Flight Tracking",
      "Commercial GPS Safety Tracking",
    ],
    idealFor: [
      "Lucknow Airport Pickup & Drop (CCSI Airport)",
      "Corporate Executive Airport Transfers",
      "Immediate City One-Way Transit",
    ],
  },
  {
    name: "Spacious SUV (Ertiga / XL6)",
    image: "/images/fleet/ertiga.png",
    capacity: "6 Passengers",
    luggage: "3-4 Large Bags",
    ac: "Dual AC Blowers",
    price: "Starting ₹799 fixed",
    bestFor: "Families & Extra Holiday Luggage",
    features: ["Generous Boot Space", "Dual AC", "Child-Friendly Cabin"],
    tag: "Most Popular",
    vehicleClass: "Spacious 6-Seater MPV",
    fuelType: "Petrol / Hybrid / CNG",
    seatingDetails:
      "6 Passengers + 1 Chauffeur. Flexible 3-row seating with sliding 2nd row.",
    luggageDetails:
      "3-4 Bags in boot + Rooftop luggage carrier available for heavy airport luggage.",
    amenities: [
      "Dual AC with 2nd Row Roof Blowers",
      "Foldable 3rd Row for Expanded Luggage Room",
      "USB Charging Sockets in All Rows",
      "Child-Friendly & Senior-Friendly Ingress",
    ],
    idealFor: [
      "Family Airport Transfers with Luggage",
      "Ayodhya / Varanasi Direct Airport Shuttles",
      "Group Airport Pickups",
    ],
  },
  {
    name: "Premium MPV (Innova Crysta)",
    image: "/images/fleet/innova.png",
    capacity: "6-7 Passengers",
    luggage: "5 Large Suitcases",
    ac: "Dual Climate AC",
    price: "Starting ₹1,199 fixed",
    bestFor: "VIP Clients, Corporate Guests & Heavy Baggage",
    features: ["Plush Captain Chairs", "Luxury Suspension", "Whisper Quiet Ride"],
    tag: "Executive Comfort",
    vehicleClass: "Executive Luxury MPV",
    fuelType: "Refined Turbo Diesel",
    seatingDetails:
      "6-7 Passengers + 1 Chauffeur. Ultra-plush reclining captain chairs with armrests.",
    luggageDetails:
      "5 Large Suitcases + 3 Cabin Trolleys + Rooftop Carrier on request.",
    amenities: [
      "Multi-Zone Automatic Climate AC",
      "Leatherette Captain Seats with Armrests",
      "Acoustic Silent Insulated Cabin",
      "Punctual Flight Pickup with Name Placard",
    ],
    idealFor: [
      "VIP & Corporate Guest Airport Pickup",
      "Luxury Outstation Transfers from Airport",
      "Foreign Tourist Arrivals",
    ],
  },
  {
    name: "Tempo Traveller (12–26 Seater)",
    image: "/images/fleet/tempo.png",
    capacity: "12 to 26 Passengers",
    luggage: "15+ Heavy Bags",
    ac: "Chilled AC",
    price: "Starting ₹2,499 fixed",
    bestFor: "Delegations, Wedding Groups & Tour Flights",
    features: ["Maharaja Pushback Seats", "Separate Luggage Section", "High Roof"],
    tag: "Large Group Transfer",
    vehicleClass: "Luxury Force Tempo Traveller",
    fuelType: "Commercial Turbo Diesel",
    seatingDetails:
      "12 / 17 / 20 / 26 Pushback Maharaja Reclining Seats + 1 Driver + 1 Helper.",
    luggageDetails:
      "Massive dedicated rear luggage boot + Heavy-duty full roof luggage carrier.",
    amenities: [
      "Maharaja 2x1 Pushback Reclining Seats with Armrests",
      "6ft+ Standing Height (Walk & Stand Freely Inside)",
      "Wide Central Walking Aisle",
      "Dedicated Rear Luggage Hold for Flight Baggage",
    ],
    idealFor: [
      "Group Airport Pickup for Weddings & Events",
      "Corporate Delegation Flight Transfers",
      "Pilgrimage Tour Groups Landing at Airport",
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
    <section className="bg-slate-50/70 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Airport Fleet Selection
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose the Right Airport Cab for Your Luggage &amp; Group
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            All vehicles are sanitized, air-conditioned, and chauffeured by verified
            highway professionals with ample luggage storage.
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
                {/* Vehicle Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={260}
                    className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 rounded-full bg-blue-900/80 backdrop-blur px-2.5 py-0.5 text-[11px] font-bold text-white shadow">
                    {vehicle.tag}
                  </div>

                  <div className="absolute bottom-2.5 right-3 rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-extrabold text-blue-800 shadow-sm">
                    {vehicle.price}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 min-h-[2.5rem] flex items-center">
                    {vehicle.name}
                  </h3>

                  <div className="mt-3.5 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users size={15} className="text-blue-700 shrink-0" />
                      <span className="font-semibold text-slate-800">{vehicle.capacity}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase size={15} className="text-amber-600 shrink-0" />
                      <span>{vehicle.luggage}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{vehicle.bestFor}</span>
                    </div>
                  </div>

                  {/* Features */}
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
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/70 py-2 text-xs font-bold text-blue-800 hover:bg-blue-100 transition active:scale-98 cursor-pointer"
                >
                  <Info size={14} className="text-blue-600" />
                  <span>View Details &amp; Specs</span>
                </button>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <Link
                    href="/book-now"
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-blue-700 py-2 text-xs font-bold text-white hover:bg-blue-800 transition shadow-xs"
                  >
                    <span>Select Cab</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={`https://wa.me/919936408109?text=${encodeURIComponent(
                      `Hello Kuldeep Travels, I want to book an Airport Taxi with ${vehicle.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition shrink-0"
                    title="Ask Quote on WhatsApp"
                  >
                    <MessageCircle size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
                <span className="rounded-full bg-blue-600 px-3 py-0.5 text-xs font-bold text-white shadow">
                  {selectedVehicle.tag}
                </span>
                <span className="rounded-full bg-yellow-400 px-3 py-0.5 text-xs sm:text-sm font-black text-slate-950">
                  {selectedVehicle.price}
                </span>
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
                      {selectedVehicle.capacity}
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
                      <span className="text-xs font-bold text-slate-500 uppercase">Punctuality</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      100% On-Time
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
                    <span>Luggage &amp; Flight Bags</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedVehicle.luggageDetails}
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Airport Service Amenities &amp; Features
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
                  Popular Airport Transit Routes
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
                    `Hello Kuldeep Travels, I want to book an Airport Taxi with ${selectedVehicle.name} (${selectedVehicle.price}). Please confirm availability.`
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
                  <span>Book Airport Cab</span>
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