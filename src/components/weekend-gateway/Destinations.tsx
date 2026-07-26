"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { destinations } from "@/data/weekend-getaway";

export default function Destinations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900">
            Top Weekend Getaways
            <span className="block text-blue-700">from Lucknow</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Discover hand-picked destinations perfect for short holidays, family
            vacations and romantic weekend escapes.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((place) => (
            <article
              key={place.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-2xl transition duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={700}
                  height={500}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute top-5 left-5 rounded-full bg-blue-700 text-white px-4 py-2 text-sm font-semibold">
                  {place.duration}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {place.name}
                </h3>

                <div className="mt-4 flex items-center gap-5 text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-700" />

                    {place.distance}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-blue-700" />

                    {place.duration}
                  </div>
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                  {place.description}
                </p>

                <Link
                  href="/book-now"
                  className="mt-8 inline-flex items-center font-semibold text-blue-700 hover:text-blue-900"
                >
                  Explore Tour
                  <ArrowRight className="ml-2 w-5 h-5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
