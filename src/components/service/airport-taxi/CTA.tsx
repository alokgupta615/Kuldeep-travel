import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-blue-900 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Book Your Airport Taxi?
        </h2>

        <p className="mt-6 text-xl text-blue-100 leading-8">
          Whether you're travelling to or from Lucknow Airport,
          Kuldeep Travels provides reliable airport transfers with
          experienced drivers, comfortable vehicles and transparent pricing.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition"
          >
            Book Your Cab
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

    </section>
  );
}