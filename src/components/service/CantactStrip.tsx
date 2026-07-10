import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="py-16 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Book Your Cab?
            </h2>

            <p className="mt-3 text-gray-700">
              Our team is available 24×7 to help you choose the right vehicle.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">

            <a
              href="tel:+919876543210"
              className="bg-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
            >
              <Phone size={18} />
              Call Us
            </a>

            <a
              href="https://wa.me/919876543210"
              className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
            >
              <Mail size={18} />
              Email Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}