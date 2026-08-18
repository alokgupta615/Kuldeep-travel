import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Sitemap | Kuldeep Travels",
  description: "Navigate through Kuldeep Travels website easily with our sitemap.",
};

const sitemapLinks = [
  {
    category: "Main Pages",
    links: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about" },
      { name: "Contact Us", url: "/contact" },
      { name: "Blog", url: "/blog" },
      { name: "Book Now", url: "/book-now" },
      { name: "Get Quote", url: "/get-quote" },
    ],
  },
  {
    category: "Services",
    links: [
      { name: "All Services", url: "/services" },
      { name: "Airport Taxi", url: "/services/airport-taxi" },
      { name: "Local Taxi", url: "/services/local-taxi" },
      { name: "Outstation Taxi", url: "/services/outstation-taxi" },
      { name: "One Way Taxi", url: "/services/one-way-taxi" },
      { name: "Corporate Booking", url: "/services/corporate-booking" },
      { name: "Wedding Car Rental", url: "/services/wedding-car-rental" },
      { name: "Senior Citizen Travel", url: "/services/senior-citizen-travel" },
    ],
  },
  {
    category: "Tour Packages",
    links: [
      { name: "All Tour Packages", url: "/tour-packages" },
      { name: "Family Tours", url: "/tour-packages/family-tours" },
      { name: "Pilgrimage Tours", url: "/tour-packages/pilgrimage-tours" },
      { name: "Custom Tour Packages", url: "/tour-packages/custom-tour-packages" },
      { name: "Lucknow to Nepal", url: "/tour-packages/lucknow-to-nepal" },
    ],
  },
  {
    category: "Legal & Policies",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Refund & Cancellation Policy", url: "/cancellation-policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Sitemap
          </h1>
          <p className="text-slate-600 mb-10 text-lg">
            A complete overview of all pages on the Kuldeep Travels website.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-bold text-blue-900 border-b border-blue-100 pb-2">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.url}
                        className="flex items-center text-slate-600 hover:text-yellow-600 transition group"
                      >
                        <ChevronRight size={16} className="text-yellow-400 opacity-0 group-hover:opacity-100 transition -ml-2 mr-1" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
