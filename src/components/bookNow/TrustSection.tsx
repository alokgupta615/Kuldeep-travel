import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Headphones,
  Star,
  CarTaxiFront,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "12+ Years Experience",
    description:
      "Trusted by over 50,000+ satisfied passengers across Uttar Pradesh & North India.",
    icon: Star,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Verified Drivers",
    description:
      "Background-verified, courteous, and polite highway chauffeurs.",
    icon: BadgeCheck,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Doorstep Pickup",
    description:
      "Punctual arrival at your home, office, hotel, or Lucknow Airport terminal.",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Sanitized AC Cabs",
    description:
      "Regularly maintained, spotless vehicles with chilled air conditioning.",
    icon: CarTaxiFront,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Fixed Transparent Rates",
    description:
      "No surge pricing, hidden taxes, or surprise kilometer markups.",
    icon: ShieldCheck,
    color: "bg-red-100 text-red-700",
  },
  {
    title: "24×7 Active Helpline",
    description:
      "Live support team available before, during, and after your trip.",
    icon: Headphones,
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-slate-50/70 py-14 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Reliability & Trust
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Travelers Choose Kuldeep Travels
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We are committed to providing punctual, safe, and transparent taxi
            and tour services across Lucknow and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
              >
                <div
                  className={`mb-5 inline-flex rounded-2xl p-3.5 ${feature.color}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}