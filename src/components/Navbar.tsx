"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  MapPin,
  BookOpen,
  CarTaxiFront,
  MessageCircle,
} from "lucide-react";

/* ================= MENU ================= */

const services = [
  {
    title: "Airport Taxi",
    href: "/services/airport-taxi",
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
    title: "Wedding Car Rental",
    href: "/services/wedding-car-rental",
  },
  {
    title: "Senior Citizen Travel",
    href: "/services/senior-citizen-travel",
  },
];

const tours = [
  {
    title: "Family Tour",
    href: "/tour-packages/family-tours",
  },
  {
    title: "Pilgrimage Tours",
    href: "/tour-packages/pilgrimage-tours",
  },
  {
    title: "Custom Tour",
    href: "/tour-packages/custom-tour-packages",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [serviceOpen, setServiceOpen] = useState(false);

  const [tourOpen, setTourOpen] = useState(false);

  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const [mobileTourOpen, setMobileTourOpen] = useState(false);

  const serviceRef = useRef<HTMLLIElement>(null);

  const tourRef = useRef<HTMLLIElement>(null);

  /* ================= SCROLL ================= */

  /* ================= CLICK OUTSIDE ================= */

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(e.target as Node)
      ) {
        setServiceOpen(false);
      }

      if (tourRef.current && !tourRef.current.contains(e.target as Node)) {
        setTourOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* ================= ESC ================= */

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServiceOpen(false);
        setTourOpen(false);
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* ================= ROUTE CHANGE ================= */

  useEffect(() => {
    setMobileOpen(false);
    setMobileServiceOpen(false);
    setMobileTourOpen(false);
  }, [pathname]);

  /* ================= LOCK SCROLL ================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Header */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070c]/95 backdrop-blur-xl shadow-lg">
        {/* <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8"> */}
        <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* ================= LOGO ================= */}

          {/* ================= LOGO + BRAND ================= */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Kuldeep Travels"
              width={90}
              height={70}
              className="h-[64px] w-auto shrink-0 object-contain sm:h-12"
              priority
            />

            {/* Brand name - hidden on mobile */}
            <div className="hidden sm:block">
              <h2 className="text-xl font-black leading-none xl:text-2xl">
                <span className="text-white">Kuldeep</span>
                <span className="text-yellow-400"> Travels</span>
              </h2>

              <p className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[3px] text-gray-400">
                <MapPin size={10} />
                Lucknow • Since 2012
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV START ================= */}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-7">
              {/* ================= HOME ================= */}

              <li>
                <Link
                  href="/"
                  className={`relative pb-1 text-[15px] font-medium transition-all duration-300 ${
                    pathname === "/"
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Home
                  {pathname === "/" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-yellow-400" />
                  )}
                </Link>
              </li>

              {/* ================= ABOUT ================= */}

              <li>
                <Link
                  href="/about"
                  className={`relative pb-1 text-[16px] font-medium transition-all duration-300 ${
                    pathname.startsWith("/about")
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  About
                  {pathname.startsWith("/about") && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-yellow-400" />
                  )}
                </Link>
              </li>

              {/* ================= SERVICES ================= */}

              {/* ================= SERVICES ================= */}

              <li
                ref={serviceRef}
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <div className="flex items-center gap-1">
                  {/* Clicking text goes to Services page */}
                  <Link
                    href="/services"
                    className={`text-[16px] font-medium transition-all duration-300 ${
                      pathname.startsWith("/services")
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    Services
                  </Link>

                  {/* Arrow only */}
                  <ChevronDown
                    size={16}
                    className={`cursor-pointer transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown appears on hover */}
                <div
                  className={`absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 transition-all duration-300 ${
                    serviceOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-3 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,.18)]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group flex items-center justify-between border-b border-gray-100 px-6 py-4 transition hover:bg-yellow-50"
                      >
                        <span className="font-medium text-gray-700 group-hover:text-yellow-600">
                          {service.title}
                        </span>

                        <ChevronRight
                          size={17}
                          className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-yellow-500"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* ================= TOUR PACKAGES ================= */}

              {/* ================= TOUR PACKAGES ================= */}

              <li
                ref={tourRef}
                className="relative"
                onMouseEnter={() => setTourOpen(true)}
                onMouseLeave={() => setTourOpen(false)}
              >
                <div className="flex items-center gap-1">
                  {/* Clicking text goes to Tour Packages page */}
                  <Link
                    href="/tour-packages"
                    className={`text-[16px] font-medium transition-all duration-300 ${
                      pathname.startsWith("/tour-packages")
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    Tour Packages
                  </Link>

                  {/* Arrow */}
                  <ChevronDown
                    size={16}
                    className={`cursor-pointer transition-transform duration-300 ${
                      tourOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 transition-all duration-300 ${
                    tourOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-3 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,.18)]">
                    {tours.map((tour) => (
                      <Link
                        key={tour.href}
                        href={tour.href}
                        className="group flex items-center justify-between border-b border-gray-100 px-6 py-4 transition hover:bg-yellow-50"
                      >
                        <span className="font-medium text-gray-700 group-hover:text-yellow-600">
                          {tour.title}
                        </span>

                        <ChevronRight
                          size={17}
                          className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-yellow-500"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* ================= BLOG ================= */}

              <li>
                <Link
                  href="/blog"
                  className={`relative pb-1 text-[16px] font-medium transition-all duration-300 ${
                    pathname.startsWith("/blog")
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Blog
                  {pathname.startsWith("/blog") && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-yellow-400" />
                  )}
                </Link>
              </li>

              {/* ================= CONTACT ================= */}

              <li>
                <Link
                  href="/contact"
                  className={`relative pb-1 text-[16px] font-medium transition-all duration-300 ${
                    pathname.startsWith("/contact")
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  Contact
                  {pathname.startsWith("/contact") && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-yellow-400" />
                  )}
                </Link>
              </li>
            </ul>
          </nav>
          {/* ================= RIGHT SECTION ================= */}
          {/* ================= RIGHT SECTION ================= */}

          <div className="hidden lg:flex items-center">
            <Link
              href="/book-now"
              className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-yellow-500/40"
            >
              Book Now
            </Link>
          </div>
          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* ==================================================== */}
      {/* =============== MOBILE DRAWER ====================== */}
      {/* ==================================================== */}

      <div
        className={`fixed right-0 top-0 z-50 h-screen w-[88%] max-w-sm overflow-hidden bg-[#090B10] shadow-[0_0_70px_rgba(0,0,0,.5)] transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}

        {/* <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <Link href="/" className="sm:hidden flex items-center">
              <Image
                src="/logo.png"
                alt="Kuldeep Travels"
                width={88}
                height={88}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <Link href="/" className="hidden sm:flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kuldeep Travels"
                width={60}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <div>
              <h3 className="font-bold text-white">Kuldeep Travels</h3>

              <p className="text-xs text-gray-400">Lucknow • Since 2012</p>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg bg-white/5 p-2 text-white transition hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div> */}

        {/* ================= LOGO ================= */}

        <Link href="/" className="flex items-center">
          {/* Desktop Logo */}
          <div className="hidden sm:flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Kuldeep Travels"
              width={60}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />

            <div>
              <h2 className="text-xl xl:text-2xl font-black leading-none">
                <span className="text-white">Kuldeep</span>
                <span className="text-yellow-400"> Travels</span>
              </h2>

              <p className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[3px] text-gray-400">
                <MapPin size={10} />
                Lucknow • Since 2012
              </p>
            </div>
          </div>
          {/* Mobile Logo */}
          <div className="flex sm:hidden items-center">
            <Image
              src="/logo.png"
              alt="Kuldeep Travels"
              width={190}
              height={75}
              className="h-[68px] w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Scroll Area */}

        <div className="h-[calc(100vh-88px)] overflow-y-auto px-6 py-6">
          {/* Home */}

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center rounded-xl px-4 py-4 transition ${
              pathname === "/"
                ? "bg-yellow-400 text-black"
                : "text-white hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          {/* About */}

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={`mt-2 flex items-center rounded-xl px-4 py-4 transition ${
              pathname.startsWith("/about")
                ? "bg-yellow-400 text-black"
                : "text-white hover:bg-white/5"
            }`}
          >
            About
          </Link>

          {/* ================= SERVICES ================= */}

          <div className="flex items-center justify-between py-3">
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className={`${
                pathname.startsWith("/services")
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              Services
            </Link>

            <button
              type="button"
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className="rounded-md p-1 text-white"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  mobileServiceOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {mobileServiceOpen && (
            <div className="ml-5 mb-3 flex flex-col border-l border-white/10 pl-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => {
                    setMobileServiceOpen(false);
                    setMobileOpen(false);
                  }}
                  className="py-3 text-sm text-gray-300 transition hover:text-yellow-400"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}

          {/* ================= TOUR PACKAGES ================= */}

          <div className="flex items-center justify-between py-3">
            <Link
              href="/tour-packages"
              onClick={() => setMobileOpen(false)}
              className={`${
                pathname.startsWith("/tour-packages")
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              Tour Packages
            </Link>

            <button
              type="button"
              onClick={() => setMobileTourOpen(!mobileTourOpen)}
              className="rounded-md p-1 text-white"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  mobileTourOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {mobileTourOpen && (
            <div className="ml-5 mb-3 flex flex-col border-l border-white/10 pl-4">
              {tours.map((tour) => (
                <Link
                  key={tour.href}
                  href={tour.href}
                  onClick={() => {
                    setMobileTourOpen(false);
                    setMobileOpen(false);
                  }}
                  className="py-3 text-sm text-gray-300 transition hover:text-yellow-400"
                >
                  {tour.title}
                </Link>
              ))}
            </div>
          )}

          {/* ================= BLOG ================= */}

          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className={`mt-2 flex rounded-xl px-4 py-4 transition ${
              pathname.startsWith("/blog")
                ? "bg-yellow-400 text-black"
                : "text-white hover:bg-white/5"
            }`}
          >
            Blog
          </Link>

          {/* ================= CONTACT ================= */}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={`mt-2 flex rounded-xl px-4 py-4 transition ${
              pathname.startsWith("/contact")
                ? "bg-yellow-400 text-black"
                : "text-white hover:bg-white/5"
            }`}
          >
            Contact
          </Link>

          {/* Divider */}

          <div className="my-8 border-t border-white/10" />

          {/* ================= CALL CARD ================= */}

          <a
            href="tel:+919876543210"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-[#121722] px-3 py-2 transition-all duration-300 hover:border-yellow-400 hover:bg-[#1a2130]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/15 transition group-hover:bg-yellow-400/25">
              <Phone size={16} className="text-yellow-400" />
            </div>

            <div className="leading-tight">
              <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                Call Anytime
              </p>

              <p className="text-sm font-semibold text-white">
                +91 98765 43210
              </p>
            </div>
          </a>

          {/* ================= WHATSAPP ================= */}

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-semibold text-white transition hover:bg-green-600"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>

          {/* ================= BOOK NOW ================= */}

          <Link
            href="/book-now"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 py-4 text-center font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/30"
          >
            Book Your Ride
          </Link>
        </div>
      </div>
    </>
  );
}
