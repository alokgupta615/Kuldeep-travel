"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
  Info,
  X,
  Sparkles,
  ShieldCheck,
  Check,
  Fuel,
  Car,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import {
  getStoredVehicles,
  DEFAULT_VEHICLES,
  AdminVehicle,
} from "@/data/adminStore";

interface FleetVehicle {
  id?: string;
  name: string;
  image: string;
  passengers: string;
  luggage: string;
  ac: string;
  price: string;
  tag?: string;
  vehicleClass: string;
  fuelType: string;
  bestFor: string;
  seatingDetails: string;
  luggageDetails: string;
  amenities: string[];
  idealFor: string[];
}

function mapAdminVehicleToFleet(v: AdminVehicle): FleetVehicle {
  return {
    id: v.id,
    name: v.name,
    image: v.image,
    passengers: v.seats || "4 Passengers",
    luggage: v.luggage || "2 Bags",
    ac: v.ac || "Chilled AC",
    price: v.price || `Starting ₹${v.ratePerKm || 12}/km`,
    tag: v.tag,
    vehicleClass: v.vehicleClass || "Standard Sedan",
    fuelType: v.fuelType || "Petrol / CNG",
    bestFor: v.bestFor || "City & Outstation Travel",
    seatingDetails: v.seatingDetails || "Spacious seating with pushback comfort",
    luggageDetails: v.luggageDetails || "Spacious boot luggage space",
    amenities: v.amenities || ["Chilled AC", "Clean Interior", "GPS Safety"],
    idealFor: v.idealFor || ["City Sightseeing", "Airport Pick & Drop", "Outstation Trips"],
  };
}

const fleet: FleetVehicle[] = [
  {
    name: "Swift Dzire (CNG/Petrol)",
    image: "/images/fleet/sedan.png",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    ac: "Chilled AC",
    price: "Starting ₹10/km",
    tag: "Economical",
    vehicleClass: "Prime Compact Sedan",
    fuelType: "CNG / Petrol",
    bestFor: "Couples, Solo Travelers & Small Families (Up to 4 Pax)",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Plush ergonomic seats with ample legroom for city and highway rides.",
    luggageDetails:
      "2 Large Suitcases + 2 Handbags in dedicated boot space (378L).",
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
    name: "Toyota Etios",
    image: "/images/fleet/etios.jpg",
    passengers: "4 Passengers",
    luggage: "3 Bags",
    ac: "Chilled AC",
    price: "Starting ₹10/km",
    tag: "Comfortable Sedan",
    vehicleClass: "Spacious Sedan Class",
    fuelType: "Diesel / Petrol",
    bestFor: "Budget-conscious family road trips with luggage",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Extra wide rear seat comfort and flat rear floor.",
    luggageDetails:
      "Extra-large 592L boot space accommodating 3 large suitcases easily.",
    amenities: [
      "Chilled Air Conditioning",
      "Massive 592L Boot Capacity",
      "Clean Sanitized Cabin",
      "Smooth Highway Suspension",
      "USB Charging",
    ],
    idealFor: [
      "Outstation Taxi Trips",
      "Airport Transfers with Heavy Bags",
      "Corporate Travel",
    ],
  },
  {
    name: "Honda Amaze",
    image: "/images/fleet/amaze.jpg",
    passengers: "4 Passengers",
    luggage: "2-3 Bags",
    ac: "Chilled AC",
    price: "Starting ₹10/km",
    tag: "Smooth Ride",
    vehicleClass: "Premium Compact Sedan",
    fuelType: "Petrol / Diesel",
    bestFor: "Smooth highway & local city commuting",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Elegant cabin with premium fabric upholstery.",
    luggageDetails:
      "420L boot storage fitting 2-3 travel suitcases.",
    amenities: [
      "Chilled Automatic AC",
      "Premium Audio System",
      "USB Power Ports",
      "Silent Cabin Insulation",
    ],
    idealFor: [
      "Corporate City Rides",
      "Family Weekend Getaways",
      "Day Tours from Lucknow",
    ],
  },
  {
    name: "Maruti Ertiga (SUV/MUV)",
    image: "/images/fleet/ertiga.png",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Dual AC Blowers",
    price: "Starting ₹15/km",
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
    name: "Kia Carens",
    image: "/images/fleet/carens.jpg",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Multi-Zone AC",
    price: "Starting ₹16/km",
    tag: "Modern MPV",
    vehicleClass: "Premium 6-Seater RV",
    fuelType: "Turbo Petrol / Diesel",
    bestFor: "Modern family road trips desiring executive comfort",
    seatingDetails:
      "6 Passengers + 1 Chauffeur. One-touch electric tumble 2nd row seats.",
    luggageDetails:
      "4 Bags + Rooftop carrier option on demand.",
    amenities: [
      "Individual AC Vents for All 3 Rows",
      "Type-C Fast Charging in All Rows",
      "Silent Premium Cabin",
      "Air Purifier & Ambient Lighting",
    ],
    idealFor: [
      "Long Distance Highway Trips",
      "Executive Family Travel",
      "Ayodhya & Varanasi VIP Tours",
    ],
  },
  {
    name: "Toyota Innova Crysta",
    image: "/images/fleet/innova.png",
    passengers: "7 Passengers",
    luggage: "5 Bags",
    ac: "Climate Control AC",
    price: "Starting ₹18/km",
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
    name: "Tempo Traveller (17 & 26 Seater)",
    image: "/images/fleet/tempo.png",
    passengers: "17 & 26 Seater",
    luggage: "15+ Bags",
    ac: "Luxury AC",
    price: "Starting ₹26/km",
    tag: "Big Families",
    vehicleClass: "Luxury Force Tempo Traveller",
    fuelType: "Commercial Turbo Diesel",
    bestFor: "Joint Families, Pilgrimage Groups & Wedding Baraat (12-26 Pax)",
    seatingDetails:
      "12 / 17 / 20 / 26 Pushback Maharaja Reclining Seats + 1 Driver + 1 Helper.",
    luggageDetails:
      "Massive dedicated rear boot + Heavy-duty full roof luggage carrier.",
    amenities: [
      "Maharaja 2x1 Pushback Reclining Seats",
      "6ft+ Standing Headroom (Walk Freely Inside)",
      "LED TV Screen & High-Output Music System",
      "Individual AC Vents & Reading Lights for Each Row",
    ],
    idealFor: [
      "Group Pilgrimage Tours (Ayodhya, Varanasi, Prayagraj, Gaya)",
      "Wedding Baraat & Guest Transport",
      "Corporate Team Outings",
    ],
  },
  {
    name: "Force Urbania",
    image: "/images/fleet/urbania.png",
    passengers: "17 Seater",
    luggage: "12+ Bags",
    ac: "Individual AC",
    price: "Starting ₹30/km",
    tag: "Ultra Luxury",
    vehicleClass: "Next-Gen European Luxury Van",
    fuelType: "Euro-6 Clean Diesel",
    bestFor: "International Tourists, VIP Delegations & Luxury Groups",
    seatingDetails:
      "13 to 17 Ergonomic Ultra-Luxury Reclining Seats with Armrests.",
    luggageDetails:
      "Deep integrated rear luggage hold + Airplane-style overhead racks.",
    amenities: [
      "Aircraft-Style Individual Air Vents & Reading Lights",
      "Panoramic Extra-Large View Windows",
      "Air Suspension for Zero Highway Jerks",
      "Individual USB Fast Charging Port at Every Seat",
    ],
    idealFor: [
      "Foreign Tourist Delegations",
      "Heritage Circuits & Golden Triangle Road Trips",
      "High-Profile Corporate Retreats",
    ],
  },
  {
    name: "Luxury Bus / Coach",
    image: "/images/fleet/bus.png",
    passengers: "35 & 50 Seater",
    luggage: "Large Storage",
    ac: "Luxury High-Power AC",
    price: "Custom Quote",
    tag: "Group Events",
    vehicleClass: "Commercial Luxury Coach",
    fuelType: "Heavy Commercial Diesel",
    bestFor: "Large Groups, Destination Weddings & Corporate Tours",
    seatingDetails:
      "35 to 50 High-Back Reclining Pushback Seats with Padded Headrests.",
    luggageDetails:
      "Massive underbody belly luggage lockers + Rear trunk space.",
    amenities: [
      "High-Capacity Centralized Roof AC",
      "PA System with Mic for Tour Guides",
      "High-End Audio/Video Entertainment",
      "Tinted UV-Protection Windows with Curtains",
    ],
    idealFor: [
      "Destination Wedding Guest Transport & Baraat",
      "School & College Educational Excursions",
      "Multi-Day North India Tourist Circuits",
    ],
  },
];

export default function Fleet() {
  const [vehiclesList, setVehiclesList] = useState<FleetVehicle[]>(() => {
    return DEFAULT_VEHICLES.filter((v) => v.isActive !== false).map(mapAdminVehicleToFleet);
  });
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);

  useEffect(() => {
    const refreshList = () => {
      const stored = getStoredVehicles();
      const active = stored.filter((v) => v.isActive !== false).map(mapAdminVehicleToFleet);
      if (active.length > 0) {
        setVehiclesList(active);
      }
    };

    refreshList();
    window.addEventListener("kt_admin_vehicles_updated", refreshList);
    return () => {
      window.removeEventListener("kt_admin_vehicles_updated", refreshList);
    };
  }, []);

  // Close modal on ESC key
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
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 md:text-sm">
            Our Fleet
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:mt-4 md:text-5xl">
            Comfortable Vehicles For Every Journey
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-8">
            From economical sedans to luxury buses, choose the perfect vehicle
            for airport transfers, local travel, outstation trips, weddings,
            corporate events and family vacations.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {vehiclesList.map((vehicle, index) => (

            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:rounded-3xl"
            >
              <div>
                <div className="relative h-52 overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-50 via-white to-gray-50 sm:h-56 md:h-60 flex items-center justify-center p-3">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 transition-transform duration-300 hover:scale-105"
                  />
                  {vehicle.tag && (
                    <span className="absolute top-3 left-3 rounded-full bg-slate-900/85 backdrop-blur px-3 py-1 text-xs font-bold text-white shadow">
                      {vehicle.tag}
                    </span>
                  )}
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-bold text-gray-900 md:text-xl min-h-[2.5rem] flex items-center">
                    {vehicle.name}
                  </h3>

                  <p className="mt-1 text-sm font-black text-blue-700 md:text-base">
                    {vehicle.price}
                  </p>

                  <div className="mt-4 space-y-2.5 text-xs text-gray-700 md:text-sm">
                    <div className="flex items-center gap-2.5">
                      <Users className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{vehicle.passengers}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Briefcase className="h-4 w-4 text-amber-600 shrink-0" />
                      <span>{vehicle.luggage}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Snowflake className="h-4 w-4 text-cyan-600 shrink-0" />
                      <span>{vehicle.ac}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 md:p-6 pt-0 border-t border-gray-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/70 py-2.5 text-xs font-bold text-blue-800 hover:bg-blue-100 hover:border-blue-300 transition active:scale-98 cursor-pointer"
                >
                  <Info size={14} className="text-blue-600" />
                  <span>View Details &amp; Specs</span>
                </button>

                <Link
                  href="/book-now"
                  className="block w-full rounded-xl bg-blue-700 py-3 text-center text-xs font-bold text-white transition hover:bg-blue-800 md:text-sm shadow-xs"
                >
                  Book This Vehicle
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-center text-white md:mt-20 md:rounded-3xl md:p-12">
          <h3 className="text-2xl font-bold md:text-3xl">
            Need Help Choosing the Right Vehicle?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 md:mt-5 md:text-lg md:leading-8">
            Our travel experts are available 24×7 to recommend the best vehicle
            based on your destination, number of passengers, and luggage.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-8 md:gap-4">
            <a
              href="tel:+919936408109"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-100 md:px-8 md:py-4"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919936408109"
              className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300 md:px-8 md:py-4"
            >
              WhatsApp Us
            </a>
          </div>
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
                      <Fuel size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Rate Type</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {selectedVehicle.price}
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
                    `Hello Kuldeep Travels, I want to book ${selectedVehicle.name} (${selectedVehicle.price}). Please share details.`
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
                  <span>Book This Cab</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
