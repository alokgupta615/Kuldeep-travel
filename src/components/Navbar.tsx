"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  CarFront,
} from "lucide-react";

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
    title: "Round Trip Taxi",
    href: "/services/round-trip-taxi",
  },
  {
    title: "Tempo Traveller",
    href: "/services/tempo-traveller",
  },
  {
    title: "Corporate Travel",
    href: "/services/corporate-travel",
  },
  {
    title: "Senior Citizen Travel",
    href: "/services/senior-citizen-travel",
  },
];

const tours = [
  {
    title: "Ayodhya",
    href: "/tour-packages/ayodhya",
  },
  {
    title: "Varanasi",
    href: "/tour-packages/varanasi",
  },
  {
    title: "Prayagraj",
    href: "/tour-packages/prayagraj",
  },
  {
    title: "Agra",
    href: "/tour-packages/agra",
  },
  {
    title: "Delhi",
    href: "/tour-packages/delhi",
  },
  {
    title: "Mathura",
    href: "/tour-packages/mathura",
  },
  {
    title: "Vrindavan",
    href: "/tour-packages/vrindavan",
  },
  {
    title: "Naimisharanya",
    href: "/tour-packages/naimisharanya",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [serviceOpen, setServiceOpen] = useState(false);

  const [tourOpen, setTourOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const serviceRef = useRef<HTMLDivElement>(null);

  const tourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target as Node)
      ) {
        setServiceOpen(false);
      }

      if (
        tourRef.current &&
        !tourRef.current.contains(event.target as Node)
      ) {
        setTourOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);
    return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 lg:px-6">
      <div className="mx-auto max-w-[1700px]">

        <div
          className={`rounded-2xl border border-yellow-500/10 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "bg-[#0B0B0F]/95 shadow-2xl"
              : "bg-[#0B0B0F]/80"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4">

            {/* Logo */}

            <Link
              href="/"
              className="flex shrink-0 items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <CarFront
                  size={28}
                  className="text-black"
                />
              </div>

              <div>

                <p className="text-2xl font-extrabold leading-none lg:text-3xl">
                  <span className="text-white">
                    Kuldeep
                  </span>{" "}

                  <span className="text-yellow-400">
                    Travels
                  </span>
                </p>

                <span className="mt-1 block text-[10px] uppercase tracking-[3px] text-gray-400">
                  Lucknow • Since 2012
                </span>

              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden xl:flex flex-1 items-center justify-center">

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
                      pathname === "/about"
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    About
                  </Link>
                </li>

                {/* Services */}

                {/* <li
                  ref={serviceRef}
                  className="relative"
                >

                  <button
                    onClick={() =>
                      setServiceOpen(!serviceOpen)
                    }
                    className="flex items-center gap-1 text-white hover:text-yellow-400 transition"
                  >
                    Services

                    <ChevronDown
                      size={16}
                      className={`transition ${
                        serviceOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {serviceOpen && (

                    <div className="absolute left-0 top-12 w-72 rounded-2xl bg-white shadow-2xl py-3">

                      {services.map((service) => (

                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                        >
                          {service.title}
                        </Link>

                      ))}

                    </div>

                  )}

                </li> */}

                <li
  ref={serviceRef}
  className="relative group"
  onMouseEnter={() => setServiceOpen(true)}
  onMouseLeave={() => setServiceOpen(false)}
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
        serviceOpen ? "rotate-180" : ""
      }`}
    />
  </div>

  {serviceOpen && (
    <div className="absolute left-0 top-full pt-2 z-50">
      <div className="w-72 rounded-2xl bg-white py-3 shadow-2xl border border-gray-100">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="block px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  )}
</li>

               
                {/* Tour Packages */}

                {/* <li
                  ref={tourRef}
                  className="relative"
                >

                  <button
                    onClick={() =>
                      setTourOpen(!tourOpen)
                    }
                    className="flex items-center gap-1 text-white hover:text-yellow-400 transition"
                  >
                    Tour Packages

                    <ChevronDown
                      size={16}
                      className={`transition ${
                        tourOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />

                  </button>

                  {tourOpen && (

                    <div className="absolute left-0 top-12 w-72 rounded-2xl bg-white shadow-2xl py-3">

                      {tours.map((tour) => (

                        <Link
                          key={tour.href}
                          href={tour.href}
                          className="block px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                        >
                          {tour.title}
                        </Link>

                      ))}

                    </div>

                  )}

                </li> */}

                <li
  ref={tourRef}
  className="relative group"
  onMouseEnter={() => setTourOpen(true)}
  onMouseLeave={() => setTourOpen(false)}
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
        tourOpen ? "rotate-180" : ""
      }`}
    />
  </div>

  {tourOpen && (
    <div className="absolute left-0 top-full pt-2 z-50">
      <div className="w-72 rounded-2xl border border-gray-100 bg-white py-3 shadow-2xl">
        {tours.map((tour) => (
          <Link
            key={tour.href}
            href={tour.href}
            className="block px-6 py-3 text-gray-700 transition hover:bg-yellow-50 hover:text-yellow-600"
          >
            {tour.title}
          </Link>
        ))}
      </div>
    </div>
  )}
</li>

                <li>

                  <Link
                    href="/blog"
                    className={`transition ${
                      pathname === "/blog"
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    Blog
                  </Link>

                </li>

                <li>

                  <Link
                    href="/contact"
                    className={`transition ${
                      pathname === "/contact"
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    Contact
                  </Link>

                </li>

              </ul>

            </nav>

            {/* Right Side */}

            <div className="hidden xl:flex items-center gap-5">

              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 whitespace-nowrap text-white hover:text-yellow-400 transition"
              >
                <Phone
                  size={18}
                  className="text-yellow-400"
                />

                <span>
                  +91 98765 43210
                </span>

              </a>

              <Link
                href="/booking"
                className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
              >
                Book Now
              </Link>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="xl:hidden text-white"
            >
              {mobileOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>

          </div>
                    {/* ================= MOBILE MENU ================= */}

          <div
            className={`xl:hidden overflow-hidden transition-all duration-500 ${
              mobileOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="border-t border-white/10 px-6 py-6">

              <nav className="flex flex-col">

                {/* Home */}

                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 ${
                    pathname === "/"
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  Home
                </Link>

                {/* About */}

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 ${
                    pathname === "/about"
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  About
                </Link>

                {/* Services */}

                <button
                  onClick={() =>
                    setServiceOpen(!serviceOpen)
                  }
                  className="flex items-center justify-between py-3 text-white"
                >
                  <span>Services</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      serviceOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {serviceOpen && (

                  <div className="ml-4 mb-3 flex flex-col rounded-xl bg-white/5">

                    {services.map((service) => (

                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        className="py-3 text-sm text-gray-300 hover:text-yellow-400"
                      >
                        {service.title}
                      </Link>

                    ))}

                  </div>

                )}

                {/* Tour Packages */}

                <button
                  onClick={() =>
                    setTourOpen(!tourOpen)
                  }
                  className="flex items-center justify-between py-3 text-white"
                >
                  <span>Tour Packages</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      tourOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {tourOpen && (

                  <div className="ml-4 mb-3 flex flex-col rounded-xl bg-white/5">

                    {tours.map((tour) => (

                      <Link
                        key={tour.href}
                        href={tour.href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        className="py-3 text-sm text-gray-300 hover:text-yellow-400"
                      >
                        {tour.title}
                      </Link>

                    ))}

                  </div>

                )}

                {/* Blog */}

                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 ${
                    pathname === "/blog"
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  Blog
                </Link>

                {/* Contact */}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 ${
                    pathname === "/contact"
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
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-4 text-white hover:bg-white/10 transition"
                >
                  <Phone
                    size={20}
                    className="text-yellow-400"
                  />

                  <div>

                    <p className="text-sm text-gray-400">
                      Call Now
                    </p>

                    <p className="font-semibold">
                      +91 98765 43210
                    </p>

                  </div>

                </a>

                {/* WhatsApp */}

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-xl bg-green-500 py-4 text-center font-semibold text-white hover:bg-green-600 transition"
                >
                  WhatsApp Us
                </a>

                {/* Book Button */}

                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 rounded-xl bg-yellow-400 py-4 text-center font-bold text-black hover:bg-yellow-300 transition"
                >
                  Book Now
                </Link>

              </nav>

            </div>
          </div>

        </div>

      </div>

    </header>
  );
}