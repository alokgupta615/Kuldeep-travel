import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Need Help?
          </h2>

          <p className="mt-4 text-slate-300">
            Our booking experts are available 24×7.
          </p>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <a
            href="tel:+919876543210"
            className="rounded-3xl bg-white/10 p-8 hover:bg-white/20 transition"
          >
            <Phone className="text-yellow-400" size={36} />

            <h3 className="mt-5 text-xl font-bold">
              Call Us
            </h3>

            <p className="mt-2">
              +91 98765 43210
            </p>
          </a>

          <a
            href="mailto:info@kuldeeptravels.com"
            className="rounded-3xl bg-white/10 p-8 hover:bg-white/20 transition"
          >
            <Mail className="text-yellow-400" size={36} />

            <h3 className="mt-5 text-xl font-bold">
              Email
            </h3>

            <p className="mt-2">
              info@kuldeeptravels.com
            </p>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="rounded-3xl bg-white/10 p-8 hover:bg-white/20 transition"
          >
            <MessageCircle
              className="text-green-400"
              size={36}
            />

            <h3 className="mt-5 text-xl font-bold">
              WhatsApp
            </h3>

            <p className="mt-2">
              Chat with us instantly
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}