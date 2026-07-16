import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">

      {/* Background Overlay */}

      <div className="absolute inset-0">
        <Image
          src="/images/wedding/hero.jpg"
          alt="Luxury Wedding Car Rental Lucknow"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>

      {/* Gold Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">

              <Sparkles size={16} />

              Premium Wedding Transportation

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

              Wedding Car Rental

              <span className="block text-yellow-400">

                Lucknow

              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200">

              Make your grand entrance unforgettable with premium wedding
              transportation from Kuldeep Travels. From elegant bridal
              arrivals and royal groom entries to guest transportation,
              luxury vehicles and destination weddings, we ensure every
              journey reflects the importance of your special day.

            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">

                <Award className="text-yellow-400" />

                <span className="font-medium text-white">

                  Luxury Wedding Fleet

                </span>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">

                <Heart className="text-yellow-400" />

                <span className="font-medium text-white">

                  Perfect For Every Ceremony

                </span>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-500"
              >
                Book Your Wedding Car

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              >
                Get Free Quote
              </Link>

            </div>

            {/* Trust */}

            <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-300">

              <span>✓ Luxury Vehicles</span>

              <span>✓ Professional Chauffeurs</span>

              <span>✓ Transparent Pricing</span>

              <span>✓ On-Time Arrival</span>

            </div>

          </div>

          {/* RIGHT */}

          <BookingForm />

        </div>

      </div>

    </section>
  );
}