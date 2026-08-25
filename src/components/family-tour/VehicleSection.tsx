"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Briefcase,
  ShieldCheck,
  Star,
  MessageCircle,
  Sparkles,
  Info,
  X,
  Check,
  Car,
  Fuel,
  Snowflake,
} from "lucide-react";

interface VehicleItem {
  name: string;
  image: string;
  capacity: string;
  luggage: string;
  ac: string;
  bestFor: string;
  features: string[];
  tag: string;
  tagColor: string;
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
    luggage: "2-3 Large Bags",
    ac: "Chilled AC",
    bestFor: "Couples & Small Families (3-4 Pax)",
    features: ["Chilled AC", "Comfortable Seats", "Smooth Suspension", "USB Charging"],
    tag: "Economical & Cozy",
    tagColor: "bg-emerald-800",
    vehicleClass: "Prime Compact Sedan",
    fuelType: "CNG / Petrol / Diesel",
    seatingDetails:
      "4 Passengers + 1 Driver. Soft cushioned seating with ample legroom for couples or small families with kids.",
    luggageDetails:
      "2-3 Large Suitcases (up to 25kg each) + 2 Cabin Handbags fit easily inside the dedicated 378L boot.",
    amenities: [
      "Chilled Air Conditioning (AC)",
      "USB Fast Mobile Charging Ports",
      "Clean & Sanitized Interiors",
      "Bluetooth / AUX Music System",
      "Comfortable Cushioning & Legroom",
      "Commercial GPS Safety Tracking",
    ],
    idealFor: [
      "Airport Pick & Drop (Lucknow CCSI)",
      "City Sightseeing & Daily Travel",
      "Outstation Trips (Kanpur, Ayodhya, Sitapur)",
      "Pocket-Friendly Couple Vacations",
    ],
  },
  {
    name: "Spacious SUV (Ertiga / XL6)",
    image: "/images/fleet/ertiga.png",
    capacity: "6 Passengers",
    luggage: "3-4 Bags + Carrier",
    ac: "Dual AC Blowers",
    bestFor: "Medium Families (5-6 Pax)",
    features: ["Generous Legroom", "Dual AC Blowers", "Roof Luggage Carrier", "Child-Friendly"],
    tag: "Most Popular",
    tagColor: "bg-blue-800",
    vehicleClass: "Spacious 6-Seater MPV",
    fuelType: "Petrol / Hybrid / CNG",
    seatingDetails:
      "6 Passengers + 1 Driver. Flexible 3-row layout with reclining 2nd row and smooth entry for kids & elders.",
    luggageDetails:
      "3-4 Bags in the rear boot + Heavy-Duty Rooftop Carrier available for extended family holiday luggage.",
    amenities: [
      "Dual AC with Dedicated 2nd Row Roof Blowers",
      "Foldable 3rd Row for Expanded Boot Space",
      "Fast USB Charging Sockets in All Rows",
      "Bottle Holders & Storage Pockets on All Doors",
      "Child-Friendly & Senior-Friendly Ingress",
      "High Ground Clearance for Indian Roads",
    ],
    idealFor: [
      "Family Pilgrimages (Ayodhya, Varanasi, Naimisharanya)",
      "Outstation Weekend Getaways",
      "Medium Family Group Airport Transfers",
      "Intercity Road Trips with Kids & Seniors",
    ],
  },
  {
    name: "Luxury MPV (Innova Crysta)",
    image: "/images/fleet/innova.png",
    capacity: "6-7 Passengers",
    luggage: "4-5 Bags + Carrier",
    ac: "Dual Climate Control",
    bestFor: "Ultimate Comfort & Long Hill Roads",
    features: ["Reclining Captain Seats", "Supreme Highway Safety", "Silent Cabin", "Premium Ride"],
    tag: "Top Rated Comfort",
    tagColor: "bg-slate-900",
    vehicleClass: "Executive Luxury MPV",
    fuelType: "Refined Turbo Diesel",
    seatingDetails:
      "6-7 Passengers + 1 Driver. Ultra-plush reclining captain chairs with armrests and unmatched road dampening.",
    luggageDetails:
      "4-5 Large Suitcases + 3 Cabin Bags. Roof carrier provided on demand for multi-day tours.",
    amenities: [
      "Automatic Multi-Zone Climate Control AC",
      "Leatherette Reclining Captain Seats with Armrests",
      "Whisper-Quiet Insulated Acoustic Cabin",
      "Fast USB Charging Ports at Every Seat",
      "Ambient Interior Cabin Illumination",
      "Advanced Airbags & ABS Highway Safety Suite",
    ],
    idealFor: [
      "Corporate Delegations & VIP Executive Travel",
      "Luxury Pilgrimage Tours (VIP Ayodhya & Kashi Darshan)",
      "Long-Distance Interstate Trips (Lucknow to Nepal, Delhi)",
      "Destination Weddings & Premium Family Vacations",
    ],
  },
  {
    name: "Tempo Traveller (12–26 Seater)",
    image: "/images/fleet/tempo.png",
    capacity: "12 to 26 Passengers",
    luggage: "Dedicated Extra-Large Boot",
    ac: "Individual AC Vents",
    bestFor: "Joint Families & Group Reunions",
    features: ["Maharaja Pushback Chairs", "High Roof & Wide Aisle", "LED TV & Music System", "Separate Driver Cabin"],
    tag: "Best for Big Families",
    tagColor: "bg-amber-800",
    vehicleClass: "Luxury Force Tempo Traveller",
    fuelType: "Commercial Turbo Diesel",
    seatingDetails:
      "12 to 26 Pushback Maharaja Chairs with armrests + 1 Driver + 1 Helper. 6ft+ standing headroom with wide central aisle.",
    luggageDetails:
      "Massive rear luggage compartment + Full heavy-duty roof carrier for 15-25 large suitcases.",
    amenities: [
      "Maharaja 2x1 Pushback Reclining Seats with Armrests",
      "6ft+ Standing Height (Walk & Stand Freely Inside)",
      "Wide Central Walking Aisle",
      "LED TV Screen & High-Output Surround Sound System",
      "Individual AC Vents & Reading Lights at Every Row",
      "Privacy Window Curtains & Ambient Lighting",
    ],
    idealFor: [
      "Group Pilgrimage (Ayodhya, Varanasi, Prayagraj, Gaya, Chitrakoot)",
      "Wedding Baraat & Family Guest Transport",
      "Corporate Team Outings & College Excursions",
      "Joint Family Holiday Circuits",
    ],
  },
];

export default function VehicleSection() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleItem | null>(null);

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
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/70 py-2 text-xs font-bold text-blue-800 hover:bg-blue-100 hover:border-blue-300 transition active:scale-98 cursor-pointer"
                >
                  <Info size={14} className="text-blue-600" />
                  <span>View Details &amp; Specs</span>
                </button>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <Link
                    href="/book-now"
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-blue-700 py-2 text-xs font-bold text-white hover:bg-blue-800 transition shadow-xs"
                  >
                    <span>Book Vehicle</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={`https://wa.me/919936408109?text=${encodeURIComponent(
                      `Hello Kuldeep Travels, please share family tour package rates with ${vehicle.name}.`
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
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-bold text-white shadow ${selectedVehicle.tagColor}`}
                >
                  {selectedVehicle.tag}
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
                      <span className="text-xs font-bold text-slate-500 uppercase">Comfort</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      Top Rated
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
                    <span>Seating &amp; Cabin Layout</span>
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
                  Recommended Travel Circuits
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
                    `Hello Kuldeep Travels, I am interested in ${selectedVehicle.name}. Please share family tour rates and availability.`
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
