import {
  Clock3,
  IndianRupee,
  ShieldCheck,
  CalendarClock,
  Car,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Clock3,
    title: "Guaranteed Availability",
  },
  {
    icon: CalendarClock,
    title: "On-Time Pickup",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
  },
  {
    icon: ShieldCheck,
    title: "Professional Drivers",
  },
  {
    icon: Car,
    title: "Choose Your Vehicle",
  },
  {
    icon: CheckCircle2,
    title: "Stress-Free Travel",
  },
];

export default function PreBookingBenefits() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Pre-Booking Benefits
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Why Pre-Book Your Airport Cab?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Booking your airport taxi in advance ensures timely pickup,
              preferred vehicle availability, transparent pricing, and a
              completely hassle-free travel experience.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-700" />
                    </div>

                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 p-8 text-white shadow-2xl md:p-12">
            <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              Airport Taxi Service
            </div>

            <h3 className="mt-6 text-3xl font-bold md:text-4xl">
              Travel With Confidence
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              Our experienced drivers monitor your flight schedule, arrive on
              time, assist with luggage, and ensure a smooth journey from the
              airport to your destination.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                Flight tracking included
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                Clean & sanitized vehicles
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                No hidden charges
              </li>
            </ul>

            <Link
              href="/book-now"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-300"
            >
              Book Airport Taxi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
