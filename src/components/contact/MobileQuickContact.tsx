"use client";

import { Phone, MessageCircle, Send } from "lucide-react";

export default function MobileQuickContact() {
  return (
    <aside
      aria-label="Quick contact mobile menu"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href="tel:+919936408109"
          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 active:scale-95 text-white font-semibold py-2.5 px-3 rounded-xl text-xs sm:text-sm shadow-md transition-transform"
        >
          <Phone className="w-4 h-4 text-yellow-300 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20would%20like%20to%20inquire%20about%20a%20cab%20/%20tour%20booking."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 active:scale-95 text-white font-semibold py-2.5 px-3 rounded-xl text-xs sm:text-sm shadow-md transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-100 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Get Quote / Form Jump */}
        <a
          href="#contact-form"
          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 active:scale-95 text-slate-900 font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm shadow-md transition-transform"
        >
          <Send className="w-4 h-4 shrink-0" />
          <span>Get Quote</span>
        </a>
      </div>
    </aside>
  );
}
