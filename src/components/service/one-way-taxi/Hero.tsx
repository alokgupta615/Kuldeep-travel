import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
            One Way Cab Service
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            One Way Cab Service
            <span className="text-yellow-400"> in Lucknow</span>
          </h1>

          <h2 className="text-2xl mt-6 font-semibold">
            Travel Comfortably. Pay Only for the Journey You Need.
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8">
            Need to travel from Lucknow to another city without planning a
            return on the same day? Kuldeep Travels provides reliable one-way
            taxi services with experienced drivers, comfortable vehicles and
            transparent pricing.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-yellow-500 transition"
            >
              Book Now
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919876543210"
              className="border border-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-blue-900 transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose One Way?
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Pay only for one side of the journey</li>
            <li>✔ Comfortable private cab</li>
            <li>✔ Doorstep pickup & drop</li>
            <li>✔ Transparent pricing</li>
            <li>✔ Professional drivers</li>
            <li>✔ 24×7 booking support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}