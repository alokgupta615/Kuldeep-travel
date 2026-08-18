"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Mountain,
  Trees,
  Backpack,
  Sparkles,
  MessageCircle,
  Clock,
  Compass,
} from "lucide-react";

const packages = [
  {
    title: "Weekend Family Getaways",
    image: "/images/destinations/naimish.png",
    icon: CalendarDays,
    duration: "1–3 Days",
    startPrice: "Starting ₹3,499 / person",
    description:
      "Take a refreshing short break with your loved ones to nearby scenic & spiritual destinations around Lucknow. Perfect for long weekends.",
    highlights: ["Naimisharanya", "Chitrakoot", "Ayodhya Day Tour"],
    color: "bg-blue-600",
  },
  {
    title: "Summer Hill Station Holidays",
    image: "/images/destinations/nainital.png",
    icon: Mountain,
    duration: "3N / 4D or 4N / 5D",
    startPrice: "Starting ₹8,999 / person",
    description:
      "Escape the summer heat with customized Himalayan hill station holidays featuring serene lakes, ropeways, and family resorts.",
    highlights: ["Nainital & Bhimtal", "Mussoorie & Kempty", "Ranikhet"],
    color: "bg-indigo-600",
  },
  {
    title: "Spiritual & Pilgrimage Tours",
    image: "/images/destinations/ayodhya.png",
    icon: Compass,
    duration: "2N / 3D to 5N / 6D",
    startPrice: "Starting ₹4,999 / person",
    description:
      "Comfortable sacred pilgrimages for parents, seniors, and children with wheelchair accessibility and doorstep cab pickups.",
    highlights: ["Ayodhya Ram Mandir", "Kashi Vishwanath", "Prayagraj Triveni"],
    color: "bg-amber-600",
  },
  {
    title: "Wildlife & Safari Adventures",
    image: "/images/destinations/jim corbett.png",
    icon: Trees,
    duration: "2N / 3D",
    startPrice: "Starting ₹6,999 / person",
    description:
      "Exciting jungle safaris, riverside resort stays, bonfire evenings, and nature walks tailored for adventure-loving families.",
    highlights: ["Jim Corbett Safari", "Dudhwa Tiger Reserve", "Bonfire Nights"],
    color: "bg-emerald-600",
  },
  {
    title: "Heritage & School Vacation Trips",
    image: "/images/destinations/agra.png",
    icon: Backpack,
    duration: "2N / 3D to 4N / 5D",
    startPrice: "Starting ₹5,499 / person",
    description:
      "Enriching cultural and historical holidays during school vacations with India's iconic monuments, royal palaces, and fun attractions.",
    highlights: ["Agra Taj Mahal", "Jaipur Royal Palaces", "Delhi Heritage"],
    color: "bg-rose-600",
  },
  {
    title: "Customized Family Holidays",
    image: "/images/destinations/Family Holiday Packages.png",
    icon: Sparkles,
    duration: "Flexible Duration",
    startPrice: "Custom Quote",
    description:
      "Already have specific destinations in mind? Our travel planners will design a personalized itinerary with chosen hotels and vehicles.",
    highlights: ["100% Customized Route", "Private AC Vehicle", "Your Budget"],
    color: "bg-purple-600",
  },
];

export default function PackageTypes() {
  return (
    <section id="packages" className="bg-slate-50/80 py-14 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Curated Family Packages
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Family Tour Categories from Lucknow
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Choose from relaxing weekend getaways, scenic hill stations,
            sacred pilgrimages, or design your own bespoke family itinerary.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="mt-10 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <div
                key={pkg.title}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Floating Duration Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900 shadow">
                      <Clock size={13} className="text-blue-700" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-xs font-semibold bg-blue-900/80 backdrop-blur px-2.5 py-1 rounded-lg">
                        {pkg.startPrice}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${pkg.color} text-white shadow-sm`}
                      >
                        <Icon size={16} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                        {pkg.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {pkg.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
                  <Link
                    href="/book-now"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 transition"
                  >
                    <span>Book Package</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`https://wa.me/919936408109?text=${encodeURIComponent(
                      `Hello Kuldeep Travels, I am interested in the ${pkg.title} (${pkg.duration}). Please share customized itinerary & quote.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition"
                    title="Get WhatsApp Quote"
                  >
                    <MessageCircle size={14} className="text-emerald-600" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
