"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Ayodhya",
    image: "/images/destinations/ayodhya.jpg",
    description: "Ram Mandir • Hanuman Garhi • Saryu Aarti",
  },
  {
    name: "Varanasi",
    image: "/images/destinations/varanasi.jpg",
    description: "Kashi Vishwanath • Ganga Aarti • Sarnath",
  },
  {
    name: "Nainital",
    image: "/images/destinations/nainital.jpg",
    description: "Naini Lake • Snow View • Mall Road",
  },
  {
    name: "Rishikesh",
    image: "/images/destinations/rishikesh.jpg",
    description: "River Rafting • Ganga Aarti • Lakshman Jhula",
  },
  {
    name: "Manali",
    image: "/images/destinations/manali.jpg",
    description: "Solang Valley • Atal Tunnel • Snow Adventure",
  },
  {
    name: "Jaipur",
    image: "/images/destinations/jaipur.jpg",
    description: "Amber Fort • Hawa Mahal • City Palace",
  },
  {
    name: "Haridwar",
    image: "/images/destinations/haridwar.jpg",
    description: "Har Ki Pauri • Temples • Evening Aarti",
  },
  {
    name: "Jim Corbett",
    image: "/images/destinations/corbett.jpg",
    description: "Safari • Wildlife • Nature Escape",
  },
];

export default function Destinations() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Incredible
            <span className="text-blue-700"> Destinations</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            Whether you're planning a spiritual journey, a mountain holiday, or
            a family vacation, we customise your itinerary for the destinations
            you love.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-72 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-blue-700 backdrop-blur">
                  Custom Tour
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5 text-yellow-400" />

                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <p className="leading-7 text-slate-600">
                  {destination.description}
                </p>

                <Link
                  href="/book-now"
                  className="mt-6 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Plan My Trip
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">Don't See Your Destination?</h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            We create personalised tour packages across Uttar Pradesh,
            Uttarakhand, Himachal Pradesh, Rajasthan, Delhi, Punjab and many
            more destinations throughout North India.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105 hover:bg-yellow-300"
          >
            Talk to Our Travel Expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
