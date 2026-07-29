"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

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
    title: "Weekend Gateway",
    href: "/tour-packages/weekend-gateways",
  },
  {
    title: "Custom Tour",
    href: "/tour-packages/custom-tour-packages",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [desktopServiceOpen, setDesktopServiceOpen] = useState(false);
  const [desktopTourOpen, setDesktopTourOpen] = useState(false);

  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileTourOpen, setMobileTourOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const serviceRef = useRef<HTMLLIElement>(null);
  const tourRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target as Node)
      ) {
        setDesktopServiceOpen(false);
      }

      if (tourRef.current && !tourRef.current.contains(event.target as Node)) {
        setDesktopTourOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServiceOpen(false);
    setMobileTourOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 lg:px-6">
      <div className="mx-auto max-w-[1700px]">
        <div
          className={`rounded-2xl border border-yellow-500/10 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "bg-[#0B0B0F]/95 shadow-2xl" : "bg-[#0B0B0F]/80"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4">
            {/* Logo */}

            <Link href="/" className="flex shrink-0 items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kuldeep Travels Logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-contain"
              />

              <div>
                <p className="text-2xl font-extrabold leading-none lg:text-3xl">
                  <span className="text-white">Kuldeep</span>{" "}
                  <span className="text-yellow-400">Travels</span>
                </p>

                <span className="mt-1 block text-[10px] uppercase tracking-[3px] text-gray-400">
                  Lucknow • Since 2012
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden flex-1 items-center justify-center xl:flex">
              <ul className="flex items-center gap-7">
                <li>
                  <Link
                    href="/"
                    className={`transition ${
                      pathname === "/"
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className={`transition ${
                      pathname.startsWith("/about")
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    About
                  </Link>
                </li>
                {/* ================= SERVICES ================= */}

                <li
                  ref={serviceRef}
                  className="relative"
                  onMouseEnter={() => setDesktopServiceOpen(true)}
                  onMouseLeave={() => setDesktopServiceOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href="/services"
                      className={`transition ${
                        pathname.startsWith("/services")
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      Services
                    </Link>

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        desktopServiceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {desktopServiceOpen && (
                    <div className="absolute left-0 top-full z-50">
                      <div className="mt-2 w-72 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-2xl">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setDesktopServiceOpen(false)}
                            className="block px-6 py-3 text-gray-700 transition hover:bg-yellow-50 hover:text-yellow-600"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {/* ================= TOUR PACKAGES ================= */}

                <li
                  ref={tourRef}
                  className="relative"
                  onMouseEnter={() => setDesktopTourOpen(true)}
                  onMouseLeave={() => setDesktopTourOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href="/tour-packages"
                      className={`transition ${
                        pathname.startsWith("/tour-packages")
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      Tour Packages
                    </Link>

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        desktopTourOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {desktopTourOpen && (
                    <div className="absolute left-0 top-full z-50">
                      <div className="mt-2 w-72 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-2xl">
                        {tours.map((tour) => (
                          <Link
                            key={tour.href}
                            href={tour.href}
                            onClick={() => setDesktopTourOpen(false)}
                            className="block px-6 py-3 text-gray-700 transition hover:bg-yellow-50 hover:text-yellow-600"
                          >
                            {tour.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {/* ================= BLOG ================= */}

                <li>
                  <Link
                    href="/blog"
                    className={`transition ${
                      pathname.startsWith("/blog")
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    Blog
                  </Link>
                </li>

                {/* ================= CONTACT ================= */}

                <li>
                  <Link
                    href="/contact"
                    className={`transition ${
                      pathname.startsWith("/contact")
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ================= RIGHT SIDE ================= */}

            <div className="hidden items-center gap-5 xl:flex">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 whitespace-nowrap text-white transition hover:text-yellow-400"
              >
                <Phone size={18} className="text-yellow-400" />
                <span>+91 98765 43210</span>
              </a>

              <Link
                href="/book-now"
                className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
              >
                Book Now
              </Link>
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white xl:hidden"
            >
              {mobileOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}

          <div
            className={`xl:hidden transition-all duration-300 ${
              mobileOpen ? "max-h-[calc(100vh-96px)]" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="max-h-[calc(100vh-96px)] overflow-y-auto">
              <div className="border-t border-white/10 px-6 py-6">
                <nav className="flex flex-col">
                  {/* Home */}

                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 ${
                      pathname === "/" ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    Home
                  </Link>

                  {/* About */}

                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 ${
                      pathname.startsWith("/about")
                        ? "text-yellow-400"
                        : "text-white"
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
                    className={`py-3 ${
                      pathname.startsWith("/blog")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Blog
                  </Link>

                  {/* ================= CONTACT ================= */}

                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 ${
                      pathname.startsWith("/contact")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Contact
                  </Link>

                  {/* Divider */}

                  <div className="my-6 border-t border-white/10"></div>

                  {/* Phone */}

                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 rounded-xl bg-white/5 p-4 text-white transition hover:bg-white/10"
                  >
                    <Phone size={20} className="text-yellow-400" />

                    <div>
                      <p className="text-sm text-gray-400">Call Now</p>
                      <p className="font-semibold">+91 98765 43210</p>
                    </div>
                  </a>

                  {/* WhatsApp */}

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 rounded-xl bg-green-500 py-4 text-center font-semibold text-white transition hover:bg-green-600"
                  >
                    WhatsApp Us
                  </a>

                  {/* Book Now */}

                  <Link
                    href="/book-now"
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 rounded-xl bg-yellow-400 py-4 text-center font-bold text-black transition hover:bg-yellow-300"
                  >
                    Book Now
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
