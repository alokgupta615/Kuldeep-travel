"use client";
import Link from "next/link";

import { Phone, Mail, MapPin, CarFront } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Tour Packages", href: "/tour-packages" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const services = [
  {
    title: "Airport Taxi",
    href: "/services/airport-taxi",
  },
  {
    title: "Local Taxi",
    href: "/services/local-taxi",
  },
  {
    title: "Outstation Taxi",
    href: "/services/outstation-taxi",
  },
  {
    title: "One Way Taxi",
    href: "/services/one-way-taxi",
  },
  {
    title: "Tempo Traveller",
    href: "/services/tempo-traveller",
  },
  {
    title: "Corporate Travel",
    href: "/services/corporate-travel",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <CarFront className="text-black" />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  <span className="text-white">
                    Kuldeep
                  </span>{" "}

                  <span className="text-yellow-400">
                    Travels
                  </span>
                </h3>

                <p className="text-xs uppercase tracking-[3px] text-gray-400">
                  Since 2012
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Reliable taxi services in Lucknow offering
              airport transfers, local cab booking,
              outstation travel, tour packages, tempo
              travellers, and corporate transportation.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (

                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-yellow-400"
                  >
                    {link.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Services
            </h3>

            <ul className="space-y-3">

              {services.map((service) => (

                <li key={service.href}>

                  <Link
                    href={service.href}
                    className="text-gray-400 transition hover:text-yellow-400"
                  >
                    {service.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-gray-400 hover:text-yellow-400"
              >
                <Phone size={20} />

                <span>
                  +91 98765 43210
                </span>
              </a>

              <a
                href="mailto:info@kuldeeptravels.com"
                className="flex items-start gap-3 text-gray-400 hover:text-yellow-400"
              >
                <Mail size={20} />

                <span>
                  info@kuldeeptravels.com
                </span>
              </a>

              <div className="flex gap-3 text-gray-400">

                <MapPin size={20} />

                <span>
                  Lucknow, Uttar Pradesh, India
                </span>

              </div>

            </div>

          </div>

        </div>
                {/* Divider */}

        <div className="my-12 border-t border-white/10"></div>

        {/* Bottom Section */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Connect With Us
            </h3>

            <div className="flex items-center gap-4">

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>

          </div>

          {/* Middle */}

          <div className="text-center">

            <h3 className="mb-3 text-lg font-semibold">
              We Accept
            </h3>

            <div className="flex flex-wrap justify-center gap-3">

              <span className="rounded-lg bg-white/5 px-4 py-2 text-sm">
                UPI
              </span>

              <span className="rounded-lg bg-white/5 px-4 py-2 text-sm">
                Visa
              </span>

              <span className="rounded-lg bg-white/5 px-4 py-2 text-sm">
                Mastercard
              </span>

              <span className="rounded-lg bg-white/5 px-4 py-2 text-sm">
                Cash
              </span>

            </div>

          </div>

          {/* Right */}

          <div className="text-center lg:text-right">

            <h3 className="mb-3 text-lg font-semibold">
              Why Choose Us
            </h3>

            <div className="flex flex-wrap justify-center gap-2 lg:justify-end">

              <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-black">
                Verified Drivers
              </span>

              <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-black">
                Fixed Pricing
              </span>

              <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-black">
                24×7 Support
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Copyright */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Kuldeep Travels. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              href="/privacy-policy"
              className="hover:text-yellow-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-yellow-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/refund-policy"
              className="hover:text-yellow-400 transition"
            >
              Refund Policy
            </Link>

            <Link
              href="/sitemap"
              className="hover:text-yellow-400 transition"
            >
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}