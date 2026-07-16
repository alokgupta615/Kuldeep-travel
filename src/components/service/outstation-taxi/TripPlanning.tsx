import {
  CalendarDays,
  MapPinned,
  Users,
  Briefcase,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: MapPinned,
    title: "Choose Your Destination",
    description:
      "Tell us where you want to travel and whether you need a one-way or round-trip journey.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Select Date & Time",
    description:
      "Choose your preferred pickup date and departure time according to your schedule.",
  },
  {
    number: "03",
    icon: Users,
    title: "Choose Vehicle",
    description:
      "Select a Sedan, SUV, Innova Crysta or Tempo Traveller based on your group size.",
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Confirm Booking",
    description:
      "Our team confirms your booking, assigns a driver and shares all travel details.",
  },
];

const checklist = [
  "Carry a valid government ID.",
  "Keep your mobile phone fully charged.",
  "Inform us about extra luggage in advance.",
  "Share pickup landmark for easy identification.",
  "Carry medicines and essentials for long journeys.",
  "Save driver contact details before departure.",
];

export default function TripPlanning() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Trip Planning Guide
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Plan Your Journey
            <span className="block text-blue-700">
              In Just 4 Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Booking an outstation cab with Kuldeep Travels is quick,
            transparent and completely hassle-free.
          </p>
        </div>

        {/* Steps */}

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
              >
                <span className="absolute right-6 top-6 text-6xl font-black text-slate-100">
                  {step.number}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>

                <ArrowRight className="mt-8 text-yellow-500" />
              </div>
            );
          })}
        </div>

        {/* Travel Checklist */}

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">
              Travel Checklist
            </h3>

            <p className="mt-4 text-blue-100">
              A little preparation makes every road trip smoother and
              more enjoyable.
            </p>

            <div className="mt-10 space-y-5">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="mt-1 text-yellow-400" />

                  <span className="leading-7">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <h3 className="text-3xl font-bold text-slate-900">
              Need Help Planning?
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Not sure which vehicle to choose or how to plan your
              route? Our travel experts are available 24×7 to help
              you select the perfect cab for your journey.
            </p>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-600 p-4 text-white">
                  <PhoneCall />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Call Our Travel Expert
                  </p>

                  <h4 className="text-2xl font-bold text-slate-900">
                    +91 XXXXX XXXXX
                  </h4>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-500"
            >
              Plan My Trip
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}