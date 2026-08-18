"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Star,
  Navigation,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function ContactMap() {
  const serviceZones = [
    "Amausi Airport (LKO)",
    "Charbagh Railway Station",
    "Gomti Nagar & Extension",
    "Hazratganj & Central Lucknow",
    "Alambagh & Transport Nagar",
    "Indira Nagar & Munshipulia",
    "Jankipuram & Engineering College",
    "Ashiyana & Telibagh",
  ];

  return (
    <section id="map" className="relative overflow-hidden bg-slate-50/80 py-14 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <MapPin size={14} className="text-blue-600" />
            Headquarters & Coverage
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Kuldeep Travels Office in Lucknow
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Drop by for in-person tour planning, corporate transport contracts,
            or get picked up anywhere across Lucknow within 20-30 minutes.
          </p>
        </div>

        {/* Map + Location Details Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left: Google Map Frame (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg h-[320px] sm:h-[400px] lg:h-full min-h-[320px]">
              <iframe
                title="Kuldeep Travels Lucknow Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.919195050948!2d80.88004937521946!3d26.77884557672729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf90acad92fe1%3A0x148abd8a9b62f832!2sKuldeep%20Travels!5e0!3m2!1sen!2sin!4v1785439255873!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Floating Directions Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto">
                <a
                  href="https://maps.google.com/?q=Kuldeep+Travels+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900/90 backdrop-blur-md px-4 py-2.5 text-xs font-bold text-white shadow-xl hover:bg-blue-700 transition active:scale-95"
                >
                  <Navigation size={14} className="text-yellow-400" />
                  <span>Get Driving Directions</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Office Info & Service Hub (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
            <div>
              {/* Rating header */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Kuldeep Travels
                  </h3>
                  <p className="text-xs text-slate-500">
                    Trusted Cab & Tour Operator Since 2012
                  </p>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  <span>4.9★ Google</span>
                </div>
              </div>

              {/* Quick Details */}
              <div className="mt-5 space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Office Address</h4>
                    <p className="text-slate-600 mt-0.5">
                      Kuldeep Travels, Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Phone size={17} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Phone Hotline</h4>
                    <a
                      href="tel:+919936408109"
                      className="text-blue-700 hover:underline font-semibold block mt-0.5"
                    >
                      +91 99364 08109
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <MessageCircle size={17} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">WhatsApp Desk</h4>
                    <a
                      href="https://wa.me/919936408109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-semibold block mt-0.5"
                    >
                      +91 99364 08109 (Instant Chat)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                    <Mail size={17} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email</h4>
                    <a
                      href="mailto:kuldeeptravelslko@gmail.com"
                      className="text-slate-700 hover:underline font-medium block mt-0.5 truncate max-w-[240px]"
                    >
                      kuldeeptravelslko@gmail.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Clock size={17} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Operational Hours</h4>
                    <p className="text-slate-600 mt-0.5">
                      Open 24 Hours • 7 Days a Week • All Holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* Coverage Areas Tag Cloud */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Pickup & Coverage Zones
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {serviceZones.map((zone) => (
                    <span
                      key={zone}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <a
                href="tel:+919936408109"
                className="flex-1 text-center rounded-xl bg-blue-700 py-2.5 px-4 text-xs sm:text-sm font-bold text-white shadow hover:bg-blue-800 transition active:scale-95"
              >
                Call Dispatch
              </a>

              <a
                href="#contact-form"
                className="flex-1 text-center rounded-xl border border-slate-300 bg-white py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition active:scale-95"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
