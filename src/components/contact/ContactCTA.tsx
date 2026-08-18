"use client";

import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 py-14 md:py-20 text-white">
      {/* Background Ambient Glow */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
            <Sparkles size={13} />
            Let's Get Your Journey Started
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Travel Safely & Comfortably with Kuldeep Travels
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-blue-100/90">
            Book local cabs, airport transfers, outstation journeys, Tempo
            Travellers, or custom family holiday packages with fixed upfront
            pricing.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+919936408109"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:bg-yellow-300 transition active:scale-95"
            >
              <Phone size={17} />
              <span>Call +91 99364 08109</span>
            </a>

            <a
              href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-900 transition active:scale-95"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              <span>WhatsApp Booking</span>
            </a>

            <a
              href="#contact-form"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-900 shadow-md hover:bg-slate-100 transition active:scale-95"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-blue-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-yellow-400" />
              100% Fixed & Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-yellow-400" />
              Verified & Uniformed Drivers
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-yellow-400" />
              24×7 Instant Dispatch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
