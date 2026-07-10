import Link from "next/link";
import { Plane, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">

          <span className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            <Plane size={16} />
            Airport Taxi Service
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
            Lucknow Airport
            <span className="block text-yellow-400">
              Cab Service
            </span>
          </h1>

          <h2 className="mt-5 text-2xl text-blue-100 font-medium">
            Reliable Airport Pickups & Drops,
            Available 24×7
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8">
            Whether you're catching an early morning flight or arriving
            late at night, Kuldeep Travels provides dependable airport
            taxi services with professional drivers, well-maintained
            vehicles and transparent pricing.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition"
            >
              Book Now
            </Link>

            <a
              href="tel:+919999999999"
              className="border border-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-blue-900 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}