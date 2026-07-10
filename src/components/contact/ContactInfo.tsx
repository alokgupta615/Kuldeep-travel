import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Have questions or want to book a cab? Speak directly with our travel experts for quick assistance.",
    value: "099364 08109",
    href: "tel:09936408109",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description:
      "Send us your travel details on WhatsApp and receive vehicle availability with a customized quotation.",
    value: "099364 08109",
    href: "https://wa.me/919936408109",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Mail,
    title: "Email Us",
    description:
      "For corporate travel, customized tour planning, or detailed travel inquiries.",
    value: "kuldeeptravelslko@gmail.com",
    href: "mailto:kuldeeptravelslko@gmail.com",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: MapPin,
    title: "Office Location",
    description:
      "Visit our office to discuss your travel plans in person.",
    value: "Lucknow, Uttar Pradesh",
    href: "#map",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description:
      "Available every day to assist with your travel requirements.",
    value: "Monday – Sunday",
    extra: "Advance booking recommended during weekends & festivals.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Contact Information
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            We're Always Ready to Help
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Reach out to Kuldeep Travels for taxi bookings, tour packages,
            airport transfers, corporate travel, and customized transportation
            solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl ${card.bg}`}
                >
                  <Icon className={`h-8 w-8 ${card.color}`} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {card.description}
                </p>

                {card.href ? (
                  <Link
                    href={card.href}
                    className="mt-6 inline-block font-semibold text-blue-700 hover:text-yellow-500"
                  >
                    {card.value}
                  </Link>
                ) : (
                  <p className="mt-6 font-semibold text-blue-700">
                    {card.value}
                  </p>
                )}

                {card.extra && (
                  <p className="mt-3 text-sm text-gray-500">
                    {card.extra}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}