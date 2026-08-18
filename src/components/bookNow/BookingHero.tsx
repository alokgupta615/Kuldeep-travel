import Link from "next/link";
import { PhoneCall, ChevronRight } from "lucide-react";

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center lg:bg-center"
        style={{
          backgroundImage: "url('/images/heroimg/airport.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* <div className="container relative mx-auto px-6 py-24 lg:py-36"> */}
      <div className="container relative mx-auto px-5 py-16 sm:py-20 lg:px-6 lg:py-32">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
          <Link href="/" className="transition hover:text-yellow-400">
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-yellow-400">Book Taxi</span>
        </div>

        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            24×7 Taxi Booking Service
          </span>

          {/* <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl"> */}
          <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:mt-6 lg:text-6xl">
            Book Your
            <span className="text-yellow-400"> Trusted Taxi</span>
            <br />
            in Minutes
          </h1>

          {/* <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"> */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Safe, comfortable, and affordable taxi service for Airport
            Transfers, One Way Trips, Round Trips, Outstation Tours, and Local
            Sightseeing. Professional drivers with clean, well-maintained
            vehicles.
          </p>

          {/* <div className="mt-10 flex flex-wrap gap-4"> */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#booking-form"
              className="w-full rounded-xl bg-yellow-400 px-8 py-4 text-center font-bold text-slate-900 transition hover:bg-yellow-300 sm:w-auto"
            >
              Book Now
            </Link>

            <a
              href="tel:+919876543210"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400 sm:w-auto"
            >
              <PhoneCall size={20} />
              Call Now
            </a>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur lg:p-5">
              <h3 className="text-xl font-bold text-yellow-400">24×7</h3>

              <p className="mt-2 text-sm text-slate-300">Customer Support</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur lg:p-5">
              <h3 className="text-xl font-bold text-yellow-400">100%</h3>

              <p className="mt-2 text-sm text-slate-300">
                Safe & Sanitized Vehicles
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur lg:p-5">
              <h3 className="text-xl font-bold text-yellow-400">10+</h3>

              <p className="mt-2 text-sm text-slate-300">
                Years of Trusted Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
