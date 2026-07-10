"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">

          {/* Breadcrumb */}
          <p className="text-sm text-blue-200 mb-4">
            Home <span className="mx-2">/</span> Contact Us
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Contact{" "}
            <span className="text-yellow-400">
              Kuldeep Travels
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-blue-100 leading-8">
            Have a travel plan in mind? Whether you're booking a local cab,
            airport transfer, outstation taxi, Tempo Traveller, or a customized
            tour package, our team is here to help you every step of the way.
          </p>

          <p className="mt-5 text-blue-200 leading-8">
            Contact us for vehicle availability, fare estimates, or personalized
            travel assistance. We'll recommend the best travel option based on
            your destination, group size, and budget.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="tel:09936408109"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              <Phone size={18} />
              Call Now
            </Link>

            <Link
              href="https://wa.me/919936408109"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-900"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Link>

            <Link
              href="mailto:kuldeeptravelslko@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-900"
            >
              <Mail size={18} />
              Email Us
            </Link>

          </div>

          {/* Quick Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
              <p className="mt-2 text-blue-200">
                Customer Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">100+</h3>
              <p className="mt-2 text-blue-200">
                Travel Routes
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">5000+</h3>
              <p className="mt-2 text-blue-200">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                Safe
              </h3>
              <p className="mt-2 text-blue-200">
                Comfortable Travel
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}