import Link from "next/link";
import {
  PhoneCall,
  CarFront,
  MapPin,
  Plane,
  ArrowRight,
} from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white">

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 text-black px-4 py-2 text-sm font-semibold mb-6">
              <CarFront size={18} />
              Reliable Taxi Service Since 2012
            </span>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Cab Service in Lucknow
              <br />
              for Local, Airport &
              <span className="text-yellow-400">
                {" "}
                Outstation Travel
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-200 leading-8">
              Professional taxi service with comfortable vehicles,
              experienced drivers, transparent pricing and
              24×7 booking support.

              Whether you're travelling within Lucknow,
              heading to the airport or planning an
              outstation journey, Kuldeep Travels ensures
              every ride is safe, punctual and comfortable.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-7 py-4 font-semibold text-black hover:bg-yellow-300 transition"
              >
                Book Your Cab
                <ArrowRight size={20} />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-lg border border-white px-7 py-4 hover:bg-white hover:text-blue-900 transition"
              >
                <PhoneCall size={20} />
                Call Now
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Our Services
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <MapPin className="text-blue-700" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Local Cab Service
                  </h4>

                  <p className="text-gray-600">
                    Daily city travel, shopping,
                    office & family visits.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-green-100 p-4 rounded-xl">
                  <Plane className="text-green-700" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Airport Taxi
                  </h4>

                  <p className="text-gray-600">
                    Timely airport pickup &
                    drop with professional drivers.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-orange-100 p-4 rounded-xl">
                  <CarFront className="text-orange-700" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Outstation Trips
                  </h4>

                  <p className="text-gray-600">
                    One-way & round-trip
                    taxi services across North India.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 rounded-xl bg-blue-50 p-6">

              <h4 className="text-xl font-bold text-blue-900">
                Need Help Choosing a Cab?
              </h4>

              <p className="text-gray-600 mt-2">
                Speak directly with our booking team
                and get the right vehicle for your trip.
              </p>

              <a
                href="tel:+919876543210"
                className="inline-flex mt-5 items-center gap-2 text-blue-700 font-semibold"
              >
                <PhoneCall size={18} />
                Call Our Experts
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}