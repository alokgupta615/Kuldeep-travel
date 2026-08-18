import {
  ClipboardPenLine,
  PhoneCall,
  CarTaxiFront,
  MapPinned,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit Booking Request",
    description:
      "Fill in your journey details, choose your preferred vehicle, and submit your request online.",
    icon: ClipboardPenLine,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Instant Verification",
    description:
      "Our 24×7 dispatch desk confirms your ride and sends estimated fares via SMS, Email, and WhatsApp.",
    icon: PhoneCall,
    color: "bg-emerald-600",
  },
  {
    id: 3,
    title: "Chauffeur Assigned",
    description:
      "A verified driver and sanitized vehicle are assigned. You receive driver phone and live GPS tracking.",
    icon: CarTaxiFront,
    color: "bg-amber-500",
  },
  {
    id: 4,
    title: "Comfortable Journey",
    description:
      "Enjoy a safe, air-conditioned ride across Lucknow or outstation. Pay securely via online or post-trip cash/UPI.",
    icon: MapPinned,
    color: "bg-indigo-600",
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-yellow-800">
            <Sparkles size={14} className="text-yellow-600" />
            Simple & Transparent
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book Your Cab in <span className="text-blue-700">4 Simple Steps</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From online request to doorstep arrival, our automated booking system
            ensures complete transparency with zero hidden delays.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
              >
                {/* Step Number Background */}
                <div className="absolute right-4 top-3 text-5xl font-black text-slate-100 select-none">
                  0{step.id}
                </div>

                {/* Icon */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${step.color} text-white shadow-md`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help Strip */}
        <div className="mt-12 md:mt-16 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-6 sm:p-8 md:p-10 text-center md:text-left text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Need Instant Phone Booking?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-blue-100 max-w-xl">
              Our 24×7 customer assistance desk can confirm your cab immediately over the phone or WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <a
              href="tel:+919936408109"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 transition hover:bg-yellow-300 active:scale-95"
            >
              <PhoneCall size={16} />
              <span>Call +91 99364 08109</span>
            </a>

            <a
              href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20a%20cab%20now."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-900 transition active:scale-95"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}