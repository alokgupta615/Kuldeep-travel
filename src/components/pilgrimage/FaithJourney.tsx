"use client";

import Image from "next/image";
import { HeartHandshake, Users, ShieldCheck, Sparkles } from "lucide-react";

export default function FaithJourney() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/tour-package/faith.png"
                alt="Journey of Faith"
                width={700}
                height={700}
                className="
                  h-[320px]
                  sm:h-[420px]
                  lg:h-[600px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* Floating Card */}
            <div
              className="
    absolute

    bottom-3
    left-3

    w-[170px]
    rounded-xl

    bg-blue-700/95
    backdrop-blur-md

    p-3

    text-white
    shadow-xl

    sm:w-[190px]
    sm:p-3.5

    md:w-[220px]
    md:p-4

    lg:w-[320px]
    lg:p-6
    lg:-bottom-8
    lg:right-8
    lg:left-auto
  "
            >
              <HeartHandshake className="mb-1 h-5 w-5 text-yellow-300 lg:mb-3 lg:h-10 lg:w-10" />

              <h3 className="text-xs font-bold leading-tight sm:text-sm md:text-base lg:text-xl">
                Travel with Faith
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-blue-100 sm:text-[11px] md:text-xs lg:text-base lg:leading-6">
                Every journey planned with devotion and care.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              Your Journey of Faith Starts Here
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Spiritual Travel Planned Around Your Needs
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Every devotee has a different purpose for travelling. Some seek
              blessings at ancient temples while others wish to fulfil lifelong
              spiritual aspirations. At Kuldeep Travels, we understand that no
              two pilgrimages are the same.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Instead of fixed itineraries, we create personalised travel plans
              based on your destinations, travel dates, group size and comfort
              requirements, ensuring a peaceful and hassle-free pilgrimage.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Users className="h-6 w-6 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                    Family Friendly Tours
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Comfortable travel for families, children and senior
                    citizens with carefully planned itineraries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <ShieldCheck className="h-6 w-6 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                    Safe & Comfortable Journey
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Well-maintained vehicles, verified drivers and reliable
                    travel assistance for every route.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <HeartHandshake className="h-6 w-6 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 lg:text-xl">
                    Personalised Planning
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Every pilgrimage package is customised according to your
                    travel preferences, destinations and schedule.
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
