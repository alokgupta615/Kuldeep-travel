import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="py-14 md:py-20 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Need Immediate Booking Assistance?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Our booking experts are available 24×7 to assist you.
          </p>
        </div>

        <div className="mt-8 md:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="tel:+919936408109"
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 text-center flex flex-col items-center justify-center group"
          >
            <div className="h-14 w-14 rounded-2xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Phone size={28} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold">Call Us (24×7)</h3>

            <p className="mt-2 text-sm sm:text-base font-semibold text-yellow-300">
              +91 99364 08109
            </p>
          </a>

          <a
            href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20need%20help%20with%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 text-center flex flex-col items-center justify-center group"
          >
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <MessageCircle size={28} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold">WhatsApp Booking</h3>

            <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-300">
              Chat with us instantly
            </p>
          </a>

          <a
            href="mailto:kuldeeptravelslko@gmail.com"
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 text-center flex flex-col items-center justify-center group sm:col-span-2 md:col-span-1"
          >
            <div className="h-14 w-14 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Mail size={28} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold">Official Email</h3>

            <p className="mt-2 text-xs sm:text-sm font-semibold text-rose-300 truncate max-w-full">
              kuldeeptravelslko@gmail.com
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}