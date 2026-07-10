import React from "react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading (SEO important) */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Book Your Taxi in Lucknow Instantly
        </h2>

        {/* Sub text */}
        <p className="mt-4 text-blue-100">
          Call now or WhatsApp us for airport, outstation, and local cab booking with fixed pricing.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          {/* Call */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            aria-label="Call Kuldeep Travels for taxi booking"
          >
            📞 Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition"
            aria-label="WhatsApp taxi booking"
          >
            💬 WhatsApp Booking
          </a>

          {/* Quote */}
          <a
            href="/book-taxi"
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
            aria-label="Get taxi quote in Lucknow"
          >
            🧾 Get Quote
          </a>

        </div>

        {/* Trust line */}
        <p className="mt-6 text-blue-100 text-sm">
          ✔ Fixed Pricing • ✔ 24/7 Service • ✔ Verified Drivers in Lucknow
        </p>

      </div>
    </section>
  );
}