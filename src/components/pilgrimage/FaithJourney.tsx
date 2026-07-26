"use client";

import Image from "next/image";
import { HeartHandshake, Users, ShieldCheck, Sparkles } from "lucide-react";

export default function FaithJourney() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/pilgrimage/faith.jpg"
                alt="Journey of Faith"
                width={700}
                height={700}
                className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-8 right-8 rounded-2xl bg-blue-700 p-6 text-white shadow-xl">
              <HeartHandshake className="mb-3 h-10 w-10 text-yellow-300" />

              <p className="font-bold text-lg">Travel with Faith</p>

              <p className="text-blue-100 text-sm">
                Every journey planned with devotion and care.
              </p>
            </div>
          </div>

          {/* Content */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              Your Journey of Faith Starts Here
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900">
              Spiritual Travel Planned Around Your Needs
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every devotee has a different purpose for travelling. Some seek
              blessings at ancient temples while others wish to fulfil lifelong
              spiritual aspirations. At Kuldeep Travels, we understand that no
              two pilgrimages are the same.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Instead of fixed itineraries, we create personalised travel plans
              based on your destinations, travel dates, group size and comfort
              requirements, ensuring a peaceful and hassle-free pilgrimage.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4">
                <Users className="mt-1 h-7 w-7 text-blue-700" />

                <div>
                  <h3 className="font-bold text-xl">Family Friendly Tours</h3>

                  <p className="text-gray-600">
                    Comfortable travel for families, children and senior
                    citizens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-7 w-7 text-blue-700" />

                <div>
                  <h3 className="font-bold text-xl">
                    Safe & Comfortable Journey
                  </h3>

                  <p className="text-gray-600">
                    Well-maintained vehicles and experienced drivers for every
                    route.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <HeartHandshake className="mt-1 h-7 w-7 text-blue-700" />

                <div>
                  <h3 className="font-bold text-xl">Personalised Planning</h3>

                  <p className="text-gray-600">
                    Every pilgrimage package is customised according to your
                    travel preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
