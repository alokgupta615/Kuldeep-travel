"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Phone,
  ShieldCheck,
  Clock3,
  PlaneLanding,
  PlaneTakeoff,
  MessageCircle,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/heroimg/airport.png"
        alt="Lucknow Airport Taxi & Cab Service"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover object-[75%_center] md:object-center"
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04132D]/95 via-[#04132D]/85 to-[#04132D]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04132D] via-transparent to-transparent md:hidden" />

      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            {/* Live Dispatch Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/15 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-yellow-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Chaudhary Charan Singh Airport (LKO) • 24×7 Available</span>
            </div>

            {/* Heading */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Lucknow Airport Taxi & Cab Service{" "}
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                On-Time & Fixed Pricing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-blue-100/90">
              Reliable 24×7 airport transfers for Terminal 1, Terminal 2, and Terminal 3.
              Enjoy flight tracking, verified highway chauffeurs, sanitized AC vehicles,
              and zero surge pricing.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-95 transition"
              >
                <PlaneTakeoff size={16} />
                <span>Book Airport Taxi</span>
              </Link>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20need%20an%20Airport%20Taxi%20in%20Lucknow."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-95 transition"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href="tel:+919936408109"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-950 active:scale-95 transition"
              >
                <Phone size={15} className="text-yellow-400" />
                <span>+91 99364 08109</span>
              </a>
            </div>

            {/* 3 Quick Badges */}
            <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
                <Clock3 className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1.5" />
                <h4 className="text-xs sm:text-sm font-bold text-white">24×7 Pickup</h4>
                <p className="text-[10px] sm:text-xs text-blue-200">Day & Night Shifts</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
                <PlaneLanding className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1.5" />
                <h4 className="text-xs sm:text-sm font-bold text-white">Flight Tracking</h4>
                <p className="text-[10px] sm:text-xs text-blue-200">No Wait Fee on Delay</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4 backdrop-blur text-center sm:text-left">
                <ShieldCheck className="mx-auto sm:mx-0 h-5 w-5 text-yellow-400 mb-1.5" />
                <h4 className="text-xs sm:text-sm font-bold text-white">Fixed Pricing</h4>
                <p className="text-[10px] sm:text-xs text-blue-200">No Hidden Charges</p>
              </div>
            </div>
          </div>

          {/* Right Floating Quick Quote Estimator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/20 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                    Quick Transfer Guide
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    Popular Airport Routes
                  </h3>
                </div>
                <div className="rounded-xl bg-blue-600/30 p-2 text-blue-300">
                  <Plane size={22} />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { route: "Airport ⇄ Gomti Nagar / Hazratganj", time: "25–35 Mins", price: "From ₹699" },
                  { route: "Airport ⇄ Charbagh / Alambagh", time: "15–20 Mins", price: "From ₹549" },
                  { route: "Airport ⇄ Indira Nagar / Aliganj", time: "30–40 Mins", price: "From ₹749" },
                  { route: "Airport ⇄ Ayodhya Dham (Outstation)", time: "2.5 Hours", price: "From ₹2,499" },
                  { route: "Airport ⇄ Kanpur City", time: "1.5 Hours", price: "From ₹1,899" },
                ].map((item) => (
                  <div
                    key={item.route}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-xs sm:text-sm transition hover:bg-white/10"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-yellow-400 shrink-0" />
                      <span className="font-medium text-white">{item.route}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-yellow-300">{item.price}</span>
                      <p className="text-[10px] text-blue-200">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-blue-100">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  Free Meet & Greet
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  Luggage Assistance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
