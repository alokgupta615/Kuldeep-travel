import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Star,
  Headphones,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Speak directly with our travel experts for instant bookings, fare details, and personalized travel assistance.",
    value: "099364 08109",
    href: "tel:09936408109",
    color: "text-blue-700",
    bg: "bg-blue-100",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description:
      "Share your journey details on WhatsApp and receive an instant quotation with vehicle availability.",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919936408109",
    color: "text-green-700",
    bg: "bg-green-100",
  },
  {
    icon: Mail,
    title: "Email Support",
    description:
      "Ideal for corporate travel, group bookings, customized tours, and partnership inquiries.",
    value: "kuldeeptravelslko@gmail.com",
    href: "mailto:kuldeeptravelslko@gmail.com",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: MapPin,
    title: "Office Location",
    description:
      "Meet our travel consultants to plan your business trips, holidays, and family vacations.",
    value: "Lucknow, Uttar Pradesh",
    href: "#map",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description:
      "Our booking team is available every day to assist you with your travel requirements.",
    value: "Monday – Sunday",
    extra: "Advance booking is recommended during weekends and festive seasons.",
    color: "text-purple-700",
    bg: "bg-purple-100",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">

      {/* Decorative Background */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Contact Kuldeep Travels
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">

            Let's Connect &
            <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              Plan Your Perfect Journey
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you need a local taxi, airport transfer, outstation cab,
            Tempo Traveller, luxury bus, or a customized holiday package,
            our dedicated travel specialists are always ready to help.
          </p>

        </div>

        {/* Trust Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <ShieldCheck className="text-blue-700" size={42} />

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Trusted Service
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Professional chauffeurs, transparent pricing, and well-maintained
              vehicles for every journey.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <Headphones className="text-blue-700" size={42} />

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              24×7 Support
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Our booking specialists are available every day to assist you
              before, during, and after your trip.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <Star
              className="fill-yellow-400 text-yellow-400"
              size={42}
            />

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Premium Experience
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Experience comfortable rides with clean vehicles, courteous
              drivers, and reliable customer service.
            </p>

          </div>

        </div>

        {/* Contact Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {contactCards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(37,99,235,0.15)]"
              >

                {/* Gold Line */}

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" />

                {/* Icon */}

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${card.bg} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >

                  <Icon className={`h-10 w-10 ${card.color}`} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {card.description}
                </p>
                                {card.href ? (
                  <Link
                    href={card.href}
                    target={
                      card.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {card.value}

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                ) : (
                  <p className="mt-8 text-lg font-semibold text-blue-700">
                    {card.value}
                  </p>
                )}

                {card.extra && (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm leading-6 text-slate-600">
                      {card.extra}
                    </p>
                  </div>
                )}

              </div>

            );

          })}

        </div>

        {/* Premium CTA Banner */}

        <div className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-10 text-white shadow-[0_25px_70px_rgba(30,64,175,0.35)]">

          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                Available 24×7
              </span>

              <h3 className="mt-6 text-4xl font-bold leading-tight">
                Ready to Book Your Next Journey?
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                Whether you're planning an airport transfer, an outstation trip,
                a wedding, a family vacation, or a corporate journey, our team
                is here to provide a comfortable, safe, and hassle-free travel
                experience.
              </p>

            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-4xl font-extrabold">
                  10K+
                </h4>

                <p className="mt-2 text-sm text-blue-100">
                  Happy Travellers
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-4xl font-extrabold">
                  24×7
                </h4>

                <p className="mt-2 text-sm text-blue-100">
                  Customer Support
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-4xl font-extrabold">
                  100%
                </h4>

                <p className="mt-2 text-sm text-blue-100">
                  Safe Journey
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-4xl font-extrabold">
                  4.9★
                </h4>

                <p className="mt-2 text-sm text-blue-100">
                  Customer Rating
                </p>

              </div>

            </div>

          </div>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="tel:09936408109"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-yellow-300 hover:shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>

            <Link
              href="https://wa.me/919936408109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}