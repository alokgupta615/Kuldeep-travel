"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
} from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "100+",
    label: "Travel Routes",
  },
  {
    value: "5000+",
    label: "Happy Customers",
  },
  {
    value: "100%",
    label: "Safe Travel",
  },
];

export default function ContactHero() {
  return (
    <SectionWrapper
      background="hero"
      className="pt-36 pb-24 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}

        <div className="mb-6 flex items-center text-sm text-blue-200">
          <Link
            href="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </Link>

          <ChevronRight className="mx-2 h-4 w-4" />

          <span>Contact Us</span>
        </div>

        {/* Content */}

        <div className="max-w-3xl">

          <SectionHeading
            badge="Contact Kuldeep Travels"
            badgeColor="white"
            title="Have a Travel Plan in Mind?"
            description="Whether you're booking a local cab, airport transfer, outstation taxi, Tempo Traveller, or a customized tour package, our travel experts are here to help."
            center={false}
            light
          />

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Contact us for vehicle availability, fare estimates,
            or personalized travel assistance. We'll recommend
            the best travel option based on your destination,
            group size, and budget.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="tel:+919936408109"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Link>

            <Link
              href="https://wa.me/919936408109"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-blue-900"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Link>

            <Link
              href="mailto:kuldeeptravelslko@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-blue-900"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <h3 className="text-3xl font-bold text-yellow-400">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}