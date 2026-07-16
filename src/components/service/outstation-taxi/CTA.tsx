import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Star,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600" />

      {/* Decorative Blur */}

      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl">

          <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-900">

                Book Your Outstation Cab Today

              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-6xl">

                Your Next Journey

                <span className="block text-yellow-400">

                  Starts Here

                </span>

              </h2>

              <p className="mt-8 text-lg leading-8 text-blue-100">

                Whether you're planning a family vacation, business
                trip, pilgrimage, weekend getaway or airport transfer,
                Kuldeep Travels provides safe, reliable and affordable
                outstation cab services from Lucknow.

              </p>

              {/* Trust */}

              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-white/10 p-5 text-center">

                  <ShieldCheck className="mx-auto text-yellow-400" />

                  <p className="mt-3 text-sm text-blue-100">

                    Verified Drivers

                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-5 text-center">

                  <Clock3 className="mx-auto text-yellow-400" />

                  <p className="mt-3 text-sm text-blue-100">

                    24×7 Booking

                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-5 text-center">

                  <Star className="mx-auto text-yellow-400" />

                  <p className="mt-3 text-sm text-blue-100">

                    Premium Service

                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white p-8 shadow-2xl lg:p-10">

              <h3 className="text-3xl font-bold text-slate-900">

                Need Assistance?

              </h3>

              <p className="mt-4 leading-8 text-slate-600">

                Speak with our travel experts and get the best vehicle
                recommendation, instant fare estimate and confirmed
                booking within minutes.

              </p>

              {/* Buttons */}

              <div className="mt-10 space-y-5">

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-lg font-bold text-slate-900 transition hover:bg-yellow-500"
                >

                  Book Online

                  <ArrowRight size={20} />

                </Link>

                <a
                  href="tel:+919876543210"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-800"
                >

                  <Phone size={20} />

                  Call Now

                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-green-600 bg-green-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-600"
                >

                  <MessageCircle size={20} />

                  WhatsApp Booking

                </a>

              </div>

              {/* Features */}

              <div className="mt-10 rounded-2xl bg-slate-50 p-6">

                <div className="space-y-4">

                  {[
                    "Instant Booking Confirmation",
                    "No Hidden Charges",
                    "Professional Chauffeurs",
                    "Clean & Sanitized Vehicles",
                    "Transparent Pricing",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

                      <span className="text-slate-700">

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}