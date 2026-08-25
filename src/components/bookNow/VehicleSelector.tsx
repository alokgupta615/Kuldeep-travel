"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Briefcase,
  Snowflake,
  CheckCircle2,
  Info,
  X,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Check,
  Fuel,
  Car,
  ChevronRight,
} from "lucide-react";

interface Props {
  formData: {
    vehicle: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export interface VehicleDetail {
  id: string;
  name: string;
  categoryName: string;
  image: string;
  seats: string;
  luggage: string;
  ac: string;
  price: string;
  tag: string;
  tagColor: string;
  vehicleClass: string;
  fuelType: string;
  bestFor: string;
  seatingDetails: string;
  luggageDetails: string;
  amenities: string[];
  idealFor: string[];
  highlights: string[];
}

const vehicles: VehicleDetail[] = [
  {
    id: "Swift Dzire",
    name: "Swift Dzire (CNG/Petrol)",
    categoryName: "Sedan Class",
    image: "/images/fleet/sedan.png",
    seats: "4 Seats",
    luggage: "2 Bags",
    ac: "Chilled AC",
    price: "₹12/km",
    tag: "Economical",
    tagColor: "bg-emerald-700",
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
    highlights: [
      "Most economical outstation taxi rate",
      "Smooth suspension for comfortable long drives",
      "Dedicated spacious boot space",
    ],
  },
  {
    id: "Toyota Etios",
    name: "Toyota Etios",
    categoryName: "Sedan Class",
    image: "/images/fleet/etios.jpg",
    seats: "4 Seats",
    luggage: "3 Bags",
    ac: "Chilled AC",
    price: "₹12/km",
    tag: "Comfortable Sedan",
    tagColor: "bg-teal-700",
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
    highlights: [
      "Largest boot space in sedan segment (592L)",
      "Extra legroom and flat rear floor",
      "High reliability on highways",
    ],
  },
  {
    id: "Honda Amaze",
    name: "Honda Amaze",
    categoryName: "Sedan Class",
    image: "/images/fleet/amaze.jpg",
    seats: "4 Seats",
    luggage: "2-3 Bags",
    ac: "Chilled AC",
    price: "₹12/km",
    tag: "Smooth Ride",
    tagColor: "bg-sky-700",
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
    highlights: [
      "Premium smooth Japanese engineering ride",
      "Quiet and well-insulated cabin",
      "Generous 420L luggage boot",
    ],
  },
  {
    id: "Ertiga",
    name: "Maruti Ertiga (SUV/MUV)",
    categoryName: "Family MUV",
    image: "/images/fleet/ertiga.png",
    seats: "6 Seats",
    luggage: "3-4 Bags",
    ac: "Dual AC Blowers",
    price: "₹15/km",
    tag: "Most Popular",
    tagColor: "bg-blue-700",
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
    highlights: [
      "Top choice for 5-6 member families",
      "Roof AC blowers ensure quick cabin cooling",
      "Versatile seating and luggage flexibility",
    ],
  },
  {
    id: "Kia Carens",
    name: "Kia Carens",
    categoryName: "Modern MPV",
    image: "/images/fleet/carens.jpg",
    seats: "6 Seats",
    luggage: "4 Bags",
    ac: "Multi-Zone AC",
    price: "₹16/km",
    tag: "Modern MPV",
    tagColor: "bg-indigo-700",
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
    highlights: [
      "Next-generation luxury cabin with ambient lighting",
      "Ultra-quiet highway cruising experience",
      "Dedicated air vents for every passenger row",
    ],
  },
  {
    id: "Innova",
    name: "Toyota Innova (Classic MPV)",
    categoryName: "Comfort MPV",
    image: "/images/fleet/innova.png",
    seats: "7 Seats",
    luggage: "4-5 Bags",
    ac: "Chilled AC",
    price: "₹18/km",
    tag: "Comfortable",
    tagColor: "bg-violet-700",
    vehicleClass: "Heavy-Duty Highway MPV",
    fuelType: "Powerful Diesel",
    bestFor: "Long Highway Road Trips & Joint Families (Up to 7 Pax)",
    seatingDetails:
      "7 Passengers + 1 Chauffeur. Generous shoulder room and cushioned bench/bucket seats across all 3 rows.",
    luggageDetails:
      "4-5 Suitcases in boot area + Heavy-Duty Rooftop Carrier included for excess family luggage.",
    amenities: [
      "High-Powered Triple-Zone Air Conditioning",
      "Heavy-Duty Suspension for Maximum Ride Comfort",
      "Silent Acoustic Cabin Insulation",
      "Reclining Seats in All 3 Rows",
      "Wide Door Openings for Comfortable Ingress",
      "Rugged Reliability on Rough Highway Sections",
    ],
    idealFor: [
      "Long Distance Outstation Trips (Delhi, Varanasi, Prayagraj)",
      "Hill Station Tours (Nainital, Mussoorie, Nepal)",
      "Family Vacations & Wedding Transport",
      "Multi-Day Round Trips",
    ],
    highlights: [
      "Legendary Toyota reliability and comfort",
      "High road stability for senior citizens",
      "Sturdy heavy-duty luggage carrier",
    ],
  },
  {
    id: "Innova Crysta",
    name: "Toyota Innova Crysta",
    categoryName: "Executive Class",
    image: "/images/fleet/innova-crysta.png",
    seats: "6-7 Seats",
    luggage: "5 Bags",
    ac: "Climate Control AC",
    price: "₹20/km",
    tag: "Executive Class",
    tagColor: "bg-slate-900",
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
    highlights: [
      "First-class airline style captain chairs",
      "Top-tier highway safety & ultra-smooth ride",
      "Unrivaled executive comfort for long hours",
    ],
  },
  {
    id: "Tempo Traveller",
    name: "Tempo Traveller (17 & 26 Seater)",
    categoryName: "Group Van",
    image: "/images/fleet/tempo.png",
    seats: "17 & 26 Seats",
    luggage: "15+ Bags",
    ac: "Luxury AC",
    price: "₹26/km",
    tag: "Big Families",
    tagColor: "bg-amber-700",
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
    highlights: [
      "Entire family travels together without splitting cars",
      "Pushback Maharaja chairs for maximum sleeping comfort",
      "Huge luggage holding capacity",
    ],
  },
  {
    id: "Force Urbania",
    name: "Force Urbania",
    categoryName: "Ultra Luxury Van",
    image: "/images/fleet/urbania.png",
    seats: "13-17 Seats",
    luggage: "12+ Bags",
    ac: "Individual AC",
    price: "₹30/km",
    tag: "Ultra Luxury",
    tagColor: "bg-purple-900",
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
    highlights: [
      "World-class European luxury van experience",
      "Ultra-panoramic glass windows for scenic routes",
      "Whisper-quiet air suspension for seamless comfort",
    ],
  },
  {
    id: "Mini Bus",
    name: "Luxury Bus / Coach",
    categoryName: "Luxury Coach",
    image: "/images/fleet/bus.png",
    seats: "35 & 50 Seats",
    luggage: "Large Storage",
    ac: "Luxury High-Power AC",
    price: "Custom Quote",
    tag: "Group Events",
    tagColor: "bg-teal-800",
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
    highlights: [
      "Lowest cost per passenger for large groups",
      "PA audio system for guide announcements",
      "Huge underbody luggage storage lockers",
    ],
  },
];

export default function VehicleSelector({ formData, setFormData }: Props) {
  const [detailsModalVehicle, setDetailsModalVehicle] =
    useState<VehicleDetail | null>(null);

  // Close modal with ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailsModalVehicle(null);
    };

    if (detailsModalVehicle) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [detailsModalVehicle]);

  const selectVehicle = (vehicleId: string) => {
    setFormData((prev: any) => ({
      ...prev,
      vehicle: vehicleId,
    }));
  };

  return (
    <div className="space-y-4">
      {/* Subheader */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm sm:text-base font-bold text-slate-900">
            Choose Your Vehicle:
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Tap card to select, or click &quot;View Details&quot; for complete specs &amp; amenities.
          </p>
        </div>
        <span className="text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 flex items-center gap-1.5">
          <Snowflake size={14} className="text-blue-600" />
          Chilled AC Included in All Vehicles
        </span>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => {
          const isSelected = formData.vehicle === vehicle.id;

          return (
            <div
              key={vehicle.id}
              onClick={() => selectVehicle(vehicle.id)}
              className={`group relative flex flex-col justify-between cursor-pointer overflow-hidden rounded-2xl border bg-white p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                isSelected
                  ? "border-blue-600 bg-blue-50/20 ring-2 ring-blue-600 shadow-md"
                  : "border-slate-200 hover:border-blue-300 shadow-xs"
              }`}
            >
              <div>
                {/* Top Badge & Rate */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-white shadow-xs ${
                      vehicle.tagColor || "bg-slate-900"
                    }`}
                  >
                    {vehicle.tag}
                  </span>

                  <span className="rounded-full bg-yellow-400 px-2.5 py-0.5 text-xs sm:text-sm font-black text-slate-950 shadow-xs">
                    {vehicle.price}
                  </span>
                </div>

                {/* Vehicle Image */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center p-2">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Vehicle Name (No truncate/cutoff, clean height) */}
                <h4 className="mt-3 text-sm sm:text-base font-bold text-slate-900 leading-snug min-h-[2.75rem] flex items-center">
                  {vehicle.name}
                </h4>

                {/* Specs Grid - Formatted with clear badges so nothing clips or overflows */}
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
                  <div className="min-w-0 rounded-lg bg-slate-100/90 py-2 px-1 flex flex-col items-center justify-center">
                    <Users size={15} className="text-blue-700 mb-1 shrink-0" />
                    <span className="font-bold text-slate-800 text-[11px] sm:text-xs truncate max-w-full block">
                      {vehicle.seats}
                    </span>
                  </div>

                  <div className="min-w-0 rounded-lg bg-slate-100/90 py-2 px-1 flex flex-col items-center justify-center">
                    <Briefcase size={15} className="text-amber-600 mb-1 shrink-0" />
                    <span className="font-bold text-slate-800 text-[11px] sm:text-xs truncate max-w-full block">
                      {vehicle.luggage}
                    </span>
                  </div>

                  <div className="min-w-0 rounded-lg bg-slate-100/90 py-2 px-1 flex flex-col items-center justify-center">
                    <Snowflake size={15} className="text-cyan-600 mb-1 shrink-0" />
                    <span className="font-bold text-slate-800 text-[11px] sm:text-xs truncate max-w-full block">
                      {vehicle.ac}
                    </span>
                  </div>
                </div>

                {/* Quick Best For Note */}
                <p className="mt-2.5 text-[11px] text-slate-600 font-medium line-clamp-1">
                  ✨ {vehicle.bestFor}
                </p>
              </div>

              {/* Action Buttons: View Details & Select */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col gap-2">
                {/* View Details Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDetailsModalVehicle(vehicle);
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/70 py-2 text-xs font-bold text-blue-800 hover:bg-blue-100 hover:border-blue-300 transition active:scale-98 cursor-pointer"
                >
                  <Info size={14} className="text-blue-600" />
                  <span>View Full Details &amp; Specs</span>
                </button>

                {/* Select Vehicle Status Button */}
                {isSelected ? (
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-blue-700 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm">
                    <CheckCircle2 size={16} />
                    <span>Selected Vehicle</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectVehicle(vehicle.id);
                    }}
                    className="w-full rounded-xl bg-slate-100 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                  >
                    Select Vehicle
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================
          VEHICLE DETAILS MODAL (Pop-up on View Details)
      ========================================================== */}
      {detailsModalVehicle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 md:p-6 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setDetailsModalVehicle(null)}
        >
          <div
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-5 sm:p-6 text-white">
              <button
                type="button"
                onClick={() => setDetailsModalVehicle(null)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white hover:text-slate-900 transition"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-bold text-white shadow ${detailsModalVehicle.tagColor}`}
                >
                  {detailsModalVehicle.tag}
                </span>

                <span className="rounded-full bg-yellow-400 px-3 py-0.5 text-xs sm:text-sm font-black text-slate-950">
                  {detailsModalVehicle.price}
                </span>

                <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-blue-200">
                  {detailsModalVehicle.categoryName}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {detailsModalVehicle.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-blue-200 font-medium">
                {detailsModalVehicle.vehicleClass} • {detailsModalVehicle.fuelType}
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* Vehicle Image & Quick Spec Strip */}
              <div className="grid gap-4 sm:grid-cols-12 items-center">
                <div className="sm:col-span-6 relative h-40 sm:h-48 w-full rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-3 border border-slate-200">
                  <Image
                    src={detailsModalVehicle.image}
                    alt={detailsModalVehicle.name}
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
                      {detailsModalVehicle.seats}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                      <Briefcase size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Luggage</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {detailsModalVehicle.luggage}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-cyan-600 mb-1">
                      <Snowflake size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Climate</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {detailsModalVehicle.ac}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
                      <Fuel size={16} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Rate Type</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      {detailsModalVehicle.price} Base
                    </p>
                  </div>
                </div>
              </div>

              {/* Best For Banner */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4">
                <div className="flex items-start gap-2.5">
                  <Sparkles size={18} className="text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                      Best Suited For
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                      {detailsModalVehicle.bestFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Seating & Luggage Detailed Breakdown */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                    <Users size={16} className="text-blue-700" />
                    <span>Seating &amp; Comfort Layout</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {detailsModalVehicle.seatingDetails}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                    <Briefcase size={16} className="text-amber-600" />
                    <span>Luggage &amp; Boot Space</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {detailsModalVehicle.luggageDetails}
                  </p>
                </div>
              </div>

              {/* Included Amenities */}
              <div>
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Vehicle Amenities &amp; Inclusions
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {detailsModalVehicle.amenities.map((item, idx) => (
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

              {/* Ideal Travel Routes */}
              <div>
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Popular Route Suitability
                </h5>
                <div className="flex flex-wrap gap-2">
                  {detailsModalVehicle.idealFor.map((route, idx) => (
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

              {/* Safety & Quality Assurance */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-2">
                  <ShieldCheck size={18} className="text-emerald-700" />
                  <span>Kuldeep Travels Service Promise</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600" /> AC operates continuously
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600" /> 100% Verified Commercial Chauffeur
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600" /> Clean sanitized interior guaranteed
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600" /> Zero cancellation charge policy
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/919936408109?text=${encodeURIComponent(
                    `Hello Kuldeep Travels, I am interested in ${detailsModalVehicle.name} (${detailsModalVehicle.price}). Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-800 hover:bg-emerald-100 transition"
                >
                  <MessageCircle size={16} className="text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setDetailsModalVehicle(null)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  Close
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  selectVehicle(detailsModalVehicle.id);
                  setDetailsModalVehicle(null);
                }}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs sm:text-sm font-bold shadow-md transition cursor-pointer ${
                  formData.vehicle === detailsModalVehicle.id
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-blue-700 text-white hover:bg-blue-800 active:scale-98"
                }`}
              >
                {formData.vehicle === detailsModalVehicle.id ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>Selected Vehicle</span>
                  </>
                ) : (
                  <>
                    <span>Select {detailsModalVehicle.id}</span>
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
