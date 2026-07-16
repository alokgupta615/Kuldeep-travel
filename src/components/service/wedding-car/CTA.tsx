import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  CalendarHeart,
  ArrowRight,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/images/wedding/cta.jpg"
          alt="Wedding Car Rental Lucknow"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-slate-900/80" />

      {/* Gold Glow */}

      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">

            <CalendarHeart size={18} />

            Reserve Your Wedding Car Today

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

            Make Your Grand Entrance

            <span className="block text-yellow-400">

              Truly Unforgettable

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-blue-100">

            The right vehicle adds elegance, comfort and peace of mind to one
            of the most important days of your life. Whether you're planning
            an intimate ceremony or a grand celebration, Kuldeep Travels
            ensures your wedding transportation is smooth, punctual and
            professionally managed.

          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-blue-100">

            Contact our team today to check vehicle availability, discuss your
            wedding plans and receive a personalized quotation for your
            wedding transportation.

          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <Link
              href="tel:+919999999999"
              className="inline-flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-5 text-lg font-bold text-slate-900 transition duration-300 hover:scale-105 hover:bg-yellow-500"
            >
              <PhoneCall size={22} />

              Call Now

            </Link>

            <Link
              href="https://wa.me/919999999999"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-5 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:bg-white hover:text-slate-900"
            >
              <MessageCircle size={22} />

              WhatsApp Us

            </Link>

          </div>

          {/* Trust Badges */}

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">

              <h3 className="text-2xl font-black text-yellow-400">

                Luxury Fleet

              </h3>

              <p className="mt-2 text-blue-100">

                Premium Cars for Every Wedding

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">

              <h3 className="text-2xl font-black text-yellow-400">

                Professional Chauffeurs

              </h3>

              <p className="mt-2 text-blue-100">

                Courteous • Well Dressed • On Time

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">

              <h3 className="text-2xl font-black text-yellow-400">

                Transparent Pricing

              </h3>

              <p className="mt-2 text-blue-100">

                No Hidden Charges

              </p>

            </div>

          </div>

          {/* Bottom CTA */}

          <div className="mt-16">

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-lg font-semibold text-yellow-300 transition hover:text-yellow-400"
            >
              Request Your Personalized Wedding Quote

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}