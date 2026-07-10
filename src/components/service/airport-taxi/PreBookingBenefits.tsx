import {
  Clock3,
  IndianRupee,
  ShieldCheck,
  CalendarClock,
  Car,
  CheckCircle2,
} from "lucide-react";

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
    title: "Vehicle of Your Choice",
  },
  {
    icon: CheckCircle2,
    title: "Stress-Free Travel",
  },
];

export default function PreBookingBenefits() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Why Pre-Book Your Airport Cab?
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Booking your airport taxi in advance helps ensure
              timely pickup, better vehicle availability and a
              hassle-free travel experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm"
                  >
                    <Icon className="text-blue-700" size={28} />

                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

          <div className="bg-blue-700 rounded-3xl p-12 text-white">

            <h3 className="text-3xl font-bold">
              Travel With Confidence
            </h3>

            <p className="mt-6 leading-8 text-blue-100">
              We monitor your travel schedule, provide experienced
              drivers and maintain clean vehicles so your airport
              journey remains comfortable from start to finish.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}