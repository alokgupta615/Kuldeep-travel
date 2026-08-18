"use client";

import {
  Car,
  Plane,
  Map,
  Route,
  Bus,
  Building2,
  Heart,
  Mountain,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Local City Cab",
    tag: "Hourly & Point-to-Point",
    description: "Affordable 4hr/40km and 8hr/80km local taxi packages across Lucknow.",
    color: "bg-blue-600 text-white",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    tag: "Amausi Airport (LKO)",
    description: "Punctual airport pickup and drop with flight tracking and doorstep assistance.",
    color: "bg-indigo-600 text-white",
  },
  {
    icon: Route,
    title: "Outstation Cabs",
    tag: "Intercity Travel",
    description: "Reliable one-way and round trips to Ayodhya, Varanasi, Gorakhpur, Delhi, etc.",
    color: "bg-emerald-600 text-white",
  },
  {
    icon: Map,
    title: "One-Way Drop Taxi",
    tag: "Save up to 40%",
    description: "Pay only for one-way distance without paying return toll or empty charges.",
    color: "bg-cyan-600 text-white",
  },
  {
    icon: Bus,
    title: "Tempo Traveller",
    tag: "12 to 26 Seaters",
    description: "Luxury Maharaja seats with pushback, AC, and music system for group trips.",
    color: "bg-amber-600 text-white",
  },
  {
    icon: Building2,
    title: "Luxury Tourist Bus",
    tag: "35 to 55 Seaters",
    description: "Premium AC coaches for marriage baraat, corporate events, and school tours.",
    color: "bg-purple-600 text-white",
  },
  {
    icon: Mountain,
    title: "Pilgrimage Tours",
    tag: "Spiritual Yatra",
    description: "Dedicated packages for Ayodhya Ram Mandir, Kashi Vishwanath, and Naimisharanya.",
    color: "bg-orange-600 text-white",
  },
  {
    icon: Heart,
    title: "Custom Tour Packages",
    tag: "Personalized Itineraries",
    description: "Nepal tours, Uttarakhand hill stations, and customized holiday packages.",
    color: "bg-rose-600 text-white",
  },
];

export default function TravelServices() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Sparkles size={14} className="text-blue-600" />
            Our Fleets & Offerings
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Travel Services We Specialize In
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From solo executive airport transfers to 50+ passenger tour buses,
            Kuldeep Travels offers transparent fixed rates and modern vehicles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} shadow-md transition-transform group-hover:scale-105`}
                    >
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={13} />
                  </a>

                  <a
                    href={`https://wa.me/919936408109?text=${encodeURIComponent(
                      `Hello Kuldeep Travels, I am interested in ${item.title}. Please share rates.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ask on WhatsApp"
                    className="p-1.5 rounded-lg text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition"
                  >
                    <MessageCircle size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}