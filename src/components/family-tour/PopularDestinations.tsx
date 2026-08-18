"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Star, MessageCircle } from "lucide-react";

const destinations = [
  {
    name: "Nainital",
    image: "/images/destinations/nainital.png",
    duration: "3N / 4D",
    route: "Lucknow to Nainital",
    description:
      "Serene emerald lakes, Himalayan viewpoints, cable car rides, and Mall Road shopping for the entire family.",
    highlights: ["Naini Lake Boating", "Snow View Point", "Bhimtal & Sattal"],
  },
  {
    name: "Mussoorie",
    image: "/images/destinations/mussoorie.png",
    duration: "3N / 4D",
    route: "Lucknow to Mussoorie",
    description:
      "Queen of Hills with cool mountain breezes, sparkling Kempty waterfalls, and scenic walks along Camel's Back Road.",
    highlights: ["Kempty Falls", "Gun Hill Ropeway", "Mall Road"],
  },
  {
    name: "Jim Corbett National Park",
    image: "/images/destinations/jim corbett.png",
    duration: "2N / 3D",
    route: "Lucknow to Corbett",
    description:
      "Thrilling open-jeep tiger safaris, riverside forest resorts, and relaxing bonfire evenings in nature's lap.",
    highlights: ["Jeep Jungle Safari", "Kosi River Walk", "Luxury Resorts"],
  },
  {
    name: "Ayodhya Dham",
    image: "/images/destinations/ayodhya.png",
    duration: "1N / 2D or 2N / 3D",
    route: "Lucknow to Ayodhya",
    description:
      "Sacred pilgrimage covering Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and evening Saryu Maha Aarti.",
    highlights: ["Ram Janmabhoomi", "Hanuman Garhi", "Saryu Aarti"],
  },
  {
    name: "Varanasi (Kashi)",
    image: "/images/destinations/varanasi.png",
    duration: "2N / 3D or 3N / 4D",
    route: "Lucknow to Varanasi",
    description:
      "Spiritual heart of India with Shri Kashi Vishwanath Corridor, mesmerizing Dashashwamedh Ganga Aarti, and boat rides.",
    highlights: ["Kashi Vishwanath", "Ganga Aarti", "Assi Ghat Boat Ride"],
  },
  {
    name: "Agra & Mathura",
    image: "/images/destinations/agra.png",
    duration: "2N / 3D",
    route: "Lucknow to Agra",
    description:
      "World-famous Taj Mahal and Agra Fort combined with the sacred temples of Vrindavan and Mathura.",
    highlights: ["Taj Mahal", "Agra Fort", "Bankey Bihari Mandir"],
  },
  {
    name: "Jaipur (Pink City)",
    image: "/images/destinations/jaipur.png",
    duration: "3N / 4D or 4N / 5D",
    route: "Lucknow to Jaipur",
    description:
      "Majestic Amber Fort, Hawa Mahal, City Palace, traditional Rajasthani cuisine, and vibrant handicraft bazaars.",
    highlights: ["Amber Fort", "Hawa Mahal", "Chokhi Dhani"],
  },
  {
    name: "Haridwar & Rishikesh",
    image: "/images/destinations/haridwar.png",
    duration: "3N / 4D or 4N / 5D",
    route: "Lucknow to Haridwar",
    description:
      "Holy dip at Har Ki Pauri, river rafting, Ram Jhula, and peaceful Ganga aarti amidst the Shivalik foothills.",
    highlights: ["Har Ki Pauri", "Ram & Laxman Jhula", "Parmarth Niketan"],
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <MapPin size={14} className="text-blue-600" />
            Top Travel Spots
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Popular Family Destinations from Lucknow
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From misty Himalayan valleys and royal heritage cities to sacred
            pilgrimage centers, our private chauffeured tours ensure a hassle-free
            journey.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-10 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
            >
              <div>
                {/* Image & Duration Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    width={500}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900 shadow">
                    <Clock3 size={13} className="text-blue-700" />
                    <span>{destination.duration}</span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-yellow-400" />
                      {destination.route}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                      {destination.name}
                    </h3>

                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold shrink-0">
                      <Star size={13} className="fill-amber-400" />
                      <span>4.9</span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3.5 flex flex-wrap gap-1">
                    {destination.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700"
                      >
                        {item}
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
                  <span>Book Tour</span>
                  <ArrowRight size={13} />
                </Link>

                <a
                  href={`https://wa.me/919936408109?text=${encodeURIComponent(
                    `Hello Kuldeep Travels, please share the family tour package itinerary and rates for ${destination.name} (${destination.duration}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
                  title="Inquire on WhatsApp"
                >
                  <MessageCircle size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
