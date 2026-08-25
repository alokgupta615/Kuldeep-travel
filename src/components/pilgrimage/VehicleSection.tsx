"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  ShieldCheck,
  Snowflake,
  ArrowRight,
  Info,
  X,
  Sparkles,
  Check,
  Fuel,
  Car,
  MessageCircle,
} from "lucide-react";

interface VehicleItem {
  title: string;
  name: string;
  image: string;
  capacity: string;
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
  features: string[];
  idealFor: string[];
}

const vehicles: VehicleItem[] = [
  {
    title: "Sedan Cars",
    name: "Prime Sedan (Dzire / Etios)",
    image: "/images/fleet/sedan.png",
    capacity: "2-4 Passengers",
    luggage: "2-3 Large Bags",
    ac: "Chilled AC",
    tag: "Economical Pilgrimage",
    vehicleClass: "Prime Compact Sedan",
    fuelType: "CNG / Petrol / Diesel",
    bestFor: "Couples & Small Families for Ayodhya, Naimisharanya & Varanasi",
    description:
      "Comfortable and economical option for couples and small families travelling to nearby pilgrimage destinations.",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Plush seating with smooth highway ride for sacred journeys.",
    luggageDetails:
      "2-3 Large Suitcases + Pooja samagri & prasad storage in dedicated 378L boot.",
    amenities: [
      "Chilled Air Conditioning",
      "USB Fast Mobile Charging",
      "Sanitized, Pure & Clean Interior",
      "Devotional Music & Bluetooth Support",
      "Commercial GPS Safety Tracking",
    ],
    features: [
      "AC Comfortable Ride",
      "Best for Short Trips",
      "Affordable Pricing",
    ],
    idealFor: [
      "Lucknow to Ayodhya Ram Mandir Day Trip",
      "Naimisharanya Chakra Teerth Yatra",
      "Varanasi Kashi Vishwanath Darshan",
    ],
  },
  {
    title: "SUV Cars",
    name: "Spacious SUV (Ertiga / XL6)",
    image: "/images/fleet/suv.png",
    capacity: "4-6 Passengers",
    luggage: "4-5 Bags",
    ac: "Dual AC Blowers",
    tag: "Most Popular Yatra",
    vehicleClass: "Spacious 6-Seater MPV",
    fuelType: "Petrol / Hybrid / CNG",
    bestFor: "Medium Families travelling with elders and children",
    description:
      "Spacious vehicles with extra luggage space, perfect for families seeking additional comfort during long journeys.",
    seatingDetails:
      "6 Passengers + 1 Chauffeur. Upright posture and easy ingress for elderly pilgrims.",
    luggageDetails:
      "4-5 Suitcases in rear boot + Rooftop carrier for extended religious tours.",
    amenities: [
      "Dual AC with Individual Roof Blowers",
      "Upright Seating (Zero Knee Fatigue)",
      "High Ground Clearance for Temple Approaches",
      "USB Charging Sockets in All Rows",
    ],
    features: [
      "Extra Leg Space",
      "More Luggage Capacity",
      "Comfortable Long Travel",
    ],
    idealFor: [
      "Ayodhya - Prayagraj - Varanasi Circuit",
      "Chitrakoot Dham Pilgrimage",
      "Gaya - Kashi Pind Daan Yatra",
    ],
  },
  {
    title: "Innova Crysta",
    name: "Luxury MPV (Innova Crysta)",
    image: "/images/fleet/innova.png",
    capacity: "6-7 Passengers",
    luggage: "5-6 Bags",
    ac: "Multi-Zone Climate AC",
    tag: "VIP Pilgrimage",
    vehicleClass: "Executive Luxury MPV",
    fuelType: "Refined Turbo Diesel",
    bestFor: "VIP Darshan, Senior Citizens & Multi-Day Temple Circuits",
    description:
      "A preferred choice for long-distance pilgrimage tours with families and groups who need premium comfort.",
    seatingDetails:
      "6-7 Passengers + 1 Chauffeur. Ultra-cushioned reclining captain chairs with armrests.",
    luggageDetails:
      "5 Large Suitcases + Cabin Bags + Rooftop Carrier on request.",
    amenities: [
      "Automatic Multi-Zone Climate Control AC",
      "Reclining Captain Chairs with Armrests",
      "Silent Insulated Cabin for Peaceful Chanting",
      "Smooth Highway Dampening for Elders",
    ],
    features: [
      "Premium Interior",
      "Ideal for Multi-Day Tours",
      "Smooth Highway Travel",
    ],
    idealFor: [
      "VIP Ayodhya Ram Mandir & Kashi Corridor Tour",
      "Chardham & Nepal Muktinath Pilgrimage",
      "North India 7-Day Jyotirlinga Tour",
    ],
  },
  {
    title: "Tempo Traveller",
    name: "Tempo Traveller (12–26 Seater)",
    image: "/images/fleet/tempo.png",
    capacity: "9-26 Passengers",
    luggage: "15+ Large Bags",
    ac: "Chilled AC",
    tag: "Group Yatra",
    vehicleClass: "Luxury Force Tempo Traveller",
    fuelType: "Commercial Turbo Diesel",
    bestFor: "Joint Families, Temple Bhakt Mandali & Group Pilgrimages",
    description:
      "Perfect for group pilgrimages, religious tours, and family gatherings with comfortable seating.",
    seatingDetails:
      "12 to 26 Pushback Maharaja Chairs with armrests. 6ft+ standing height to stand and walk inside.",
    luggageDetails:
      "Massive rear luggage hold + Full heavy-duty roof carrier for large group baggage.",
    amenities: [
      "Maharaja 2x1 Pushback Reclining Seats",
      "6ft+ Standing Height (Walk & Stand Inside)",
      "High-Output Sound System for Bhajans",
      "Individual AC Vents at Every Row",
    ],
    features: ["Large Group Travel", "Push Back Seats", "Tour Friendly"],
    idealFor: [
      "Bhakti Yatra Groups (Ayodhya - Varanasi - Prayagraj - Gaya)",
      "Senior Citizen Temple Group Tours",
      "Kumbh Mela & Magh Mela Shuttles",
    ],
  },
];

export default function VehicleSection() {
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
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-black text-gray-900 md:text-5xl">
            Comfortable Vehicles For Every Pilgrimage
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            Choose the right vehicle according to your group size, travel
            distance, and comfort requirements.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-200"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100 flex items-center justify-center p-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  />
                  {vehicle.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold text-white shadow backdrop-blur">
                      {vehicle.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 min-h-[2.5rem] flex items-center">
                    {vehicle.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-blue-700 text-xs sm:text-sm font-semibold">
                    <Users size={16} />
                    <span>{vehicle.capacity}</span>
                  </div>

                  <p className="mt-3 leading-relaxed text-xs sm:text-sm text-gray-600">
                    {vehicle.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {vehicle.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-700 font-medium"
                      >
                        <ShieldCheck size={16} className="text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 flex flex-col gap-2.5">
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-blue-800"
                >
                  <span>Book Pilgrimage Cab</span>
                  <ArrowRight size={14} />
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
                      <span className="text-xs font-bold text-slate-500 uppercase">Service</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      Verified Yatra Chauffeur
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
                    <span>Luggage &amp; Pooja Storage</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedVehicle.luggageDetails}
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Pilgrimage Tour Inclusions &amp; Amenities
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
                  Popular Pilgrimage Circuits
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
                    `Hello Kuldeep Travels, I am planning a pilgrimage tour with ${selectedVehicle.name}. Please share packages.`
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
