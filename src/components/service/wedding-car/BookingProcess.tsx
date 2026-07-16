import Link from "next/link";
import {
  CalendarDays,
  FileText,
  BadgeCheck,
  Flower2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    step: "01",
    title: "Share Your Wedding Details",
    description:
      "Tell us your wedding date, venue, pickup location, preferred vehicle and transportation requirements.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Receive Recommendations",
    description:
      "We'll suggest the most suitable vehicles and provide a transparent quotation based on your event.",
  },
  {
    icon: BadgeCheck,
    step: "03",
    title: "Confirm Your Booking",
    description:
      "Reserve your preferred vehicle by confirming the quotation and booking details well before your wedding day.",
  },
  {
    icon: Flower2,
    step: "04",
    title: "Finalize Decoration",
    description:
      "Choose your decoration style, confirm pickup timings and coordinate any special requirements.",
  },
  {
    icon: HeartHandshake,
    step: "05",
    title: "Celebrate Stress-Free",
    description:
      "Our chauffeurs arrive on time while our team manages the transportation so you can enjoy every celebration.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFFCF7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Wedding Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Booking Your Wedding Car
            <span className="block text-blue-700">
              Is Simple & Hassle-Free
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We've designed a straightforward booking process so you can
            reserve your wedding transportation with complete confidence.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-12 h-1 rounded-full bg-yellow-200" />

          <div className="grid grid-cols-5 gap-8">
            {steps.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="relative text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 shadow-xl ring-8 ring-white">
                    <Icon className="text-yellow-400" size={34} />
                  </div>

                  <div className="mt-5 inline-flex rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-slate-900">
                    Step {item.step}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}

        <div className="mt-16 space-y-6 lg:hidden">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="rounded-3xl bg-white p-6 shadow-lg"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-yellow-400">
                    <Icon size={28} />
                  </div>

                  <div>
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                      Step {item.step}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-12 shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900">
                Reserve Early
              </span>

              <h3 className="mt-6 text-4xl font-black text-white">
                Wedding Season Dates
                <span className="block text-yellow-400">
                  Fill Up Quickly
                </span>
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                We recommend booking your wedding vehicle several weeks in
                advance to secure your preferred car, decoration style and
                chauffeur availability.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5 lg:justify-end">
              <Link
                href="/contact"
                className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-500"
              >
                Reserve Wedding Car
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              >
                View Fleet

                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}