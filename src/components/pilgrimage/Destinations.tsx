"use client";
import Link from "next/link";

import Image from "next/image";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { destinations } from "@/data/pilgrimage";

export default function Destinations() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            <MapPin size={16} />
            Sacred Destinations
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Explore India's Most Sacred Places
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Discover carefully planned pilgrimage tours to famous temples and
            spiritual destinations across North India with comfortable travel.
          </p>
        </div>

        {/* Destination Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} pilgrimage tour`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <p className="leading-7 text-gray-600">{item.description}</p>

                {/* Places */}

                <div className="mt-6 space-y-3">
                  {item.places.map((place) => (
                    <div
                      key={place}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-green-500"
                      />

                      <span className="font-medium">{place}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}

                <Link
                  href="/book-now"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 transition hover:text-yellow-600"
                >
                  Explore Tour
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
