// import Image from "next/image";
import Link from "next/link";
import BookingForm from "./BookingForm";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white">

      {/* Background Blur */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            {/* Badge */}

            <span className="mb-5 inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-wide text-black sm:text-sm">
              Trusted Since 2012
            </span>

            {/* Heading */}

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

              Best Travel Agency in{" "}

              <span className="text-yellow-300">
                Lucknow
              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">

              Book safe, comfortable and affordable taxi
              services for Airport Transfers, Local
              Cabs, Outstation Trips, Corporate Travel
              and Family Tour Packages with verified
              drivers and transparent pricing.

            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              <Link
                href="/booking"
                className="rounded-xl bg-yellow-400 px-7 py-4 text-center font-bold text-black transition hover:bg-yellow-300"
              >
                Book Now
              </Link>

              <a
                href="tel:+919999999999"
                className="rounded-xl border-2 border-white px-7 py-4 text-center font-semibold transition hover:bg-white hover:text-blue-700"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-7 py-4 text-center font-semibold transition hover:bg-green-600"
              >
                WhatsApp
              </a>

            </div>

            {/* Trust Badges */}

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md">

                <h3 className="text-lg font-bold">
                  2012
                </h3>

                <p className="mt-1 text-sm text-blue-100">
                  Since
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md">

                <h3 className="text-lg font-bold">
                  100%
                </h3>

                <p className="mt-1 text-sm text-blue-100">
                  Verified Drivers
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md">

                <h3 className="text-lg font-bold">
                  Fixed
                </h3>

                <p className="mt-1 text-sm text-blue-100">
                  Pricing
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md">

                <h3 className="text-lg font-bold">
                  Pay
                </h3>

                <p className="mt-1 text-sm text-blue-100">
                  After Service
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT BOOKING FORM */}

<div className="relative flex justify-center lg:justify-end">

  <BookingForm/>

</div>

        </div>

      </div>

    </section>
  );
}