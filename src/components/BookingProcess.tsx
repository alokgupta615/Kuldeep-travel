import Link from "next/link";
import {
  PhoneCall,
  MapPinned,
  FileText,
  BadgeCheck,
  CarFront,
  CreditCard,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description:
      "Call us, send a WhatsApp message, or fill out our online booking form.",
  },
  {
    icon: MapPinned,
    title: "Share Trip Details",
    description:
      "Tell us your pickup location, destination, travel date, and vehicle preference.",
  },
  {
    icon: FileText,
    title: "Get Fixed Quote",
    description:
      "Receive a transparent fare with no hidden charges or surge pricing.",
  },
  {
    icon: BadgeCheck,
    title: "Confirm Booking",
    description:
      "Approve the quote and we'll instantly reserve your vehicle.",
  },
  {
    icon: CarFront,
    title: "Driver Assigned",
    description:
      "You'll receive your driver's details before pickup for complete peace of mind.",
  },
  {
    icon: CreditCard,
    title: "Enjoy & Pay Later",
    description:
      "Travel comfortably and pay after the service is completed.",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
            Booking Process
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Book Your Taxi in Just 6 Easy Steps
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Booking with Kuldeep Travels is quick, transparent, and hassle-free.
            From requesting a quote to reaching your destination, we make every
            step simple.
          </p>

        </div>

        {/* Steps */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100 group"
              >

                {/* Step Number */}

                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-700 transition mt-4">

                  <Icon
                    size={30}
                    className="text-blue-700 group-hover:text-white"
                  />

                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-10 lg:p-14 text-white">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <h3 className="text-3xl font-bold">
                Ready to Start Your Journey?
              </h3>

              <p className="mt-4 text-blue-100 text-lg max-w-2xl">
                Book your taxi today with fixed pricing, verified drivers,
                comfortable vehicles, and 24×7 customer support.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="/booking"
                className="bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-amber-300 transition"
              >
                Book Now
              </Link>

              <a
                href="tel:+919999999999"
                className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Call Now
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}