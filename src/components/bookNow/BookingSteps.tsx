import {
  ClipboardPenLine,
  PhoneCall,
  CarTaxiFront,
  MapPinned,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit Booking Request",
    description:
      "Fill in your journey details, choose your vehicle, and submit your booking request.",
    icon: ClipboardPenLine,
    color: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Booking Confirmation",
    description:
      "Our team verifies your request and confirms the booking via WhatsApp and Email.",
    icon: PhoneCall,
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Driver Assigned",
    description:
      "A professional driver and vehicle are assigned. You'll receive the driver's details before pickup.",
    icon: CarTaxiFront,
    color: "bg-green-600",
  },
  {
    id: 4,
    title: "Enjoy Your Journey",
    description:
      "Relax and travel safely with Kuldeep Travels. Pay according to your selected payment option.",
    icon: MapPinned,
    color: "bg-red-500",
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Book Your Taxi in
            <span className="text-yellow-500"> 4 Simple Steps</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            We've made taxi booking simple, secure, and hassle-free.
            From booking to your destination, we take care of everything.
          </p>

        </div>

        {/* Steps */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Step Number */}

                <div className="absolute right-5 top-5 text-6xl font-black text-slate-100">
                  {step.id}
                </div>

                {/* Icon */}

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-8 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-slate-900 px-8 py-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Need Help With Your Booking?
          </h3>

          <p className="mt-4 text-slate-300">
            Our support team is available 24×7 to help you choose the right
            vehicle and complete your booking.
          </p>

          <a
            href="tel:+919876543210"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}