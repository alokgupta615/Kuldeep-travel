"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
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

interface FleetVehicle {
  name: string;
  image: string;
  seats: string;
  luggage: string;
  ac: string;
  description: string;
  tag?: string;
  vehicleClass: string;
  fuelType: string;
  bestFor: string;
  seatingDetails: string;
  luggageDetails: string;
  amenities: string[];
  idealFor: string[];
}

const fleet: FleetVehicle[] = [
  {
    name: "Prime Sedan (Dzire / Etios)",
    image: "/images/fleet/sedan.png",
    seats: "4 Seats",
    luggage: "2 Bags",
    ac: "Chilled AC",
    description: "Perfect for city rides, airport transfers, and business travel.",
    tag: "Economical",
    vehicleClass: "Prime Compact Sedan",
    fuelType: "CNG / Petrol / Diesel",
    bestFor: "Couples & Small Families (Up to 4 Pax)",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Plush ergonomic seats with ample legroom for city and highway rides.",
    luggageDetails:
      "2-3 Large Suitcases (up to 25kg each) + 2 Cabin Handbags in dedicated boot.",
    amenities: [
      "Chilled Air Conditioning (AC)",
      "USB Fast Mobile Charging",
      "Clean & Sanitized Interiors",
      "Bluetooth / AUX Music System",
      "Commercial GPS Safety Tracking",
    ],
    idealFor: [
      "Airport Pick & Drop (Lucknow CCSI)",
      "City Sightseeing & Daily Travel",
      "Outstation Trips (Kanpur, Ayodhya, Sitapur)",
    ],
  },
  {
    name: "Spacious SUV (Ertiga / XL6)",
    image: "/images/fleet/suv.png",
    seats: "6 Seats",
    luggage: "4 Bags",
    ac: "Dual AC",
    description: "Comfortable choice for families and outstation journeys.",
    tag: "Most Popular",
    vehicleClass: "Spacious 6-Seater MPV",
    fuelType: "Petrol / Hybrid / CNG",
    bestFor: "Medium Families (5-6 Pax) with moderate luggage",
    seatingDetails:
      "6 Passengers + 1 Chauffeur. 3-row flexible seating with reclining 2nd row.",
    luggageDetails:
      "3-4 Bags in boot + Rooftop luggage carrier available for extra baggage.",
    amenities: [
      "Dual AC with 2nd Row Roof Blowers",
      "Foldable 3rd Row for Extra Boot",
      "USB Charging Ports in All Rows",
      "Child-Friendly & Senior-Friendly Ingress",
    ],
    idealFor: [
      "Family Pilgrimage (Ayodhya, Varanasi, Naimisharanya)",
      "Outstation Weekend Getaways",
      "Family Airport Drops",
    ],
  },
  {
    name: "Luxury MPV (Innova Crysta)",
    image: "/images/fleet/innova.png",
    seats: "7 Seats",
    luggage: "5 Bags",
    ac: "Climate AC",
    description: "Premium comfort for corporate travel and long-distance trips.",
    tag: "Executive Class",
    vehicleClass: "Executive Luxury MPV",
    fuelType: "Refined Turbo Diesel",
    bestFor: "VIPs, Corporate Executives & Luxury Family Travel",
    seatingDetails:
      "6-7 Passengers + 1 Chauffeur. Ultra-plush reclining captain chairs with armrests.",
    luggageDetails:
      "5 Large Suitcases + 3 Cabin Trolleys + Rooftop Carrier on request.",
    amenities: [
      "Multi-Zone Automatic Climate AC",
      "Leatherette Captain Seats with Armrests",
      "Acoustic Silent Insulated Cabin",
      "Advanced 7-Airbag Safety Suite",
    ],
    idealFor: [
      "Corporate Delegations & Business Travel",
      "VIP Pilgrimage (Kashi Vishwanath, Ayodhya)",
      "Interstate Tours (Lucknow to Nepal, Delhi)",
    ],
  },
  {
    name: "Tempo Traveller (12–26 Seater)",
    image: "/images/fleet/tempo.png",
    seats: "12–26 Seats",
    luggage: "15+ Bags",
    ac: "Chilled AC",
    description: "Ideal for family tours, pilgrimages, and group travel.",
    tag: "Big Families",
    vehicleClass: "Luxury Force Tempo Traveller",
    fuelType: "Commercial Turbo Diesel",
    bestFor: "Joint Families, Big Groups, Pilgrimage Tours & Wedding Baraat",
    seatingDetails:
      "12 / 17 / 20 / 26 Pushback Maharaja Reclining Seats + 1 Driver + 1 Helper.",
    luggageDetails:
      "Massive dedicated rear luggage boot + Heavy-duty full roof luggage carrier.",
    amenities: [
      "Maharaja 2x1 Pushback Reclining Seats with Armrests",
      "6ft+ Standing Height (Walk & Stand Freely Inside)",
      "Wide Central Walking Aisle",
      "LED TV Screen & High-Output Surround Sound",
    ],
    idealFor: [
      "Group Pilgrimage Tours",
      "Wedding Logistics & Baraat",
      "Corporate Team Outings",
    ],
  },
  {
    name: "Luxury Mini Bus (25–35 Seater)",
    image: "/images/fleet/bus.png",
    seats: "25–35 Seats",
    luggage: "20+ Bags",
    ac: "High Capacity AC",
    description: "Reliable transportation for schools, events, and corporate groups.",
    tag: "Group Events",
    vehicleClass: "Commercial Luxury Bus / Coach",
    fuelType: "Heavy Commercial Diesel",
    bestFor: "Large Groups, Destination Weddings, School/College & Corporate Tours",
    seatingDetails:
      "25 to 35 High-Back Reclining Pushback Seats with Padded Headrests & Footrests.",
    luggageDetails:
      "Massive underbody belly luggage lockers + Rear trunk space.",
    amenities: [
      "High-Capacity Centralized Roof AC",
      "PA System with Microphone for Tour Guides",
      "High-End Audio/Video Entertainment System",
      "Tinted UV-Protection Windows with Full Curtains",
    ],
    idealFor: [
      "Destination Wedding Guest Logistics & Baraat",
      "School & College Educational Excursions",
      "Corporate Annual Meets & Industrial Visits",
    ],
  },
  {
    name: "Luxury Coach (40–50 Seater)",
    image: "/images/fleet/bus.png",
    seats: "40–50 Seats",
    luggage: "Extra Large Storage",
    ac: "High Capacity AC",
    description: "Luxury buses for large events, weddings, and long-distance travel.",
    tag: "Large Group Coach",
    vehicleClass: "Commercial Heavy Coach",
    fuelType: "Heavy Commercial Diesel",
    bestFor: "Mega Groups, Conferences, Multi-Day North India Tour Circuits",
    seatingDetails:
      "40 to 50 Pushback Executive Chairs with High Headrests & Wide Aisle.",
    luggageDetails:
      "Massive Dual Belly Storage Compartments for 50+ suitcases.",
    amenities: [
      "High-Capacity Air Conditioning",
      "PA & Guide Microphone System",
      "Air Suspension for Highway Comfort",
      "Experienced Highway Crew",
    ],
    idealFor: [
      "Major Destination Weddings",
      "Interstate Tourist Circuits",
      "Large Corporate Conventions",
    ],
  },
];

export default function FleetSection() {
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);

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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Vehicles for Every Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you&apos;re travelling alone or with a large group, we have
            well-maintained vehicles designed for comfort, safety, and
            reliability.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {fleet.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={260}
                    className="max-h-48 w-auto object-contain transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-4 py-2 text-base sm:text-lg font-bold text-slate-900 backdrop-blur shadow">
                    {vehicle.name}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex flex-wrap gap-2.5">
                    <span className="flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1.5 text-xs font-medium text-blue-700">
                      <Users className="h-4 w-4" />
                      {vehicle.seats}
                    </span>

                    <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-3.5 py-1.5 text-xs font-medium text-yellow-800">
                      <Briefcase className="h-4 w-4" />
                      {vehicle.luggage}
                    </span>

                    <span className="flex items-center gap-2 rounded-full bg-green-100 px-3.5 py-1.5 text-xs font-medium text-green-700">
                      <Snowflake className="h-4 w-4" />
                      {vehicle.ac}
                    </span>
                  </div>

                  <p className="mt-5 leading-relaxed text-sm text-slate-600">
                    {vehicle.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-7 pt-0 border-t border-slate-100 mt-2 flex flex-col gap-2.5">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-blue-800"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
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
                      {selectedVehicle.seats}
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
                      <span className="text-xs font-bold text-slate-500 uppercase">Comfort</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      Verified
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
                    <span>Luggage &amp; Storage</span>
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
                    `Hello Kuldeep Travels, I want to inquire about ${selectedVehicle.name}. Please share details.`
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
