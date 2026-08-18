import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Ready to Book Your Cab or Tour?
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-900 font-medium">
              Our travel specialists are available 24×7 to help you choose the
              right vehicle.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+919936408109"
              className="bg-slate-950 text-white hover:bg-slate-900 active:scale-95 px-5 sm:px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-xs sm:text-sm shadow-md transition"
            >
              <Phone size={16} className="text-yellow-400" />
              <span>Call Us</span>
            </a>

            <a
              href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-5 sm:px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-xs sm:text-sm shadow-md transition"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="bg-blue-900 hover:bg-blue-950 active:scale-95 text-white px-5 sm:px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-xs sm:text-sm shadow-md transition"
            >
              <Mail size={16} />
              <span>Inquire Online</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}