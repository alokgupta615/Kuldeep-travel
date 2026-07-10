import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
      {/* Background Blur */}
      <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">

          <span className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Let's Get Your Journey Started
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Travel Comfortably with Kuldeep Travels
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're planning a local cab ride, airport transfer,
            outstation trip, family vacation, corporate travel, or group
            transportation, our experienced team is ready to help you.
          </p>

          <p className="mt-4 text-blue-200">
            Contact us today and receive a quick quotation tailored to your
            travel requirements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="tel:09936408109"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              <Phone size={18} />
              Call Now
            </Link>

            <Link
              href="https://wa.me/919936408109"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-900"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Link>

            <Link
              href="/book-taxi"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-900 transition hover:bg-gray-100"
            >
              Book Your Ride
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}