import {
  CalendarCheck,
  BadgeCheck,
  CarFront,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Share Your Travel Details",
    description:
      "Provide your pickup location, airport terminal, flight timing and travel requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Booking Confirmation",
    description:
      "Our team confirms your booking, shares the driver details and estimated fare before your journey.",
  },
  {
    icon: CarFront,
    title: "Enjoy a Comfortable Ride",
    description:
      "Your driver arrives on time and ensures a smooth journey to or from Lucknow Airport.",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Airport Cab Booking Made Simple
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Booking your airport taxi is quick and hassle-free.
            Just share your travel details and we'll handle the rest.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 border rounded-3xl p-8 text-center hover:shadow-xl transition"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon size={30} className="text-blue-700" />
                </div>

                <div className="mt-6 text-yellow-500 font-bold">
                  Step {index + 1}
                </div>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}