import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-14 md:py-20 px-4 sm:px-6">
      {/* Background Ambient Lights */}
      <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
          <Sparkles size={13} />
          24×7 Instant Cab Dispatch
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Book Your Taxi or Tour in Lucknow Instantly
        </h2>

        {/* Sub text */}
        <p className="mt-3 text-sm sm:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
          Call now or message on WhatsApp for instant airport transfers, local
          city rides, outstation cabs, and Tempo Travellers with fixed
          transparent pricing.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Call */}
          <a
            href="tel:+919936408109"
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:bg-yellow-300 active:scale-95 transition text-sm sm:text-base"
            aria-label="Call Kuldeep Travels for taxi booking"
          >
            <Phone size={17} />
            <span>Call +91 99364 08109</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20a%20cab."
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-emerald-700 active:scale-95 transition text-sm sm:text-base shadow-md"
            aria-label="WhatsApp taxi booking"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Booking</span>
          </a>

          {/* Contact Page Link */}
          <Link
            href="/contact"
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 active:scale-95 transition text-sm sm:text-base shadow-md"
            aria-label="Get taxi quote in Lucknow"
          >
            <span>Get Free Quote</span>
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Trust line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-200">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-yellow-400" />
            Fixed Pricing Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-yellow-400" />
            24×7 Doorstep Service
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-yellow-400" />
            Verified Lucknow Chauffeurs
          </span>
        </div>
      </div>
    </section>
  );
}
