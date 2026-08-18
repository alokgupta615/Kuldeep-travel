"use client";

import { useState } from "react";
import { MessageCircle, PhoneCall, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Kuldeep Travels, I would like to request a customized quote:
• Name: ${formData.name || "Customer"}
• Phone: ${formData.phone || "Not provided"}
• Travel Date: ${formData.date || "Flexible"}
• Journey Details: ${formData.details}`;

    const whatsappUrl = `https://wa.me/918801842859?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10 md:p-12">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-800">
              <Sparkles size={13} className="text-yellow-600" />
              Instant Quote Service
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Get a Customized Travel Quote
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Share your route and vehicle requirements below. Our team will share the best
              fixed price estimate immediately via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-800">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-xs sm:text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-800">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-xs sm:text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-xs font-bold text-slate-800">
                Travel Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-xs sm:text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="details" className="block text-xs font-bold text-slate-800">
                Journey Route, Passenger Count & Preferences <span className="text-red-500">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                value={formData.details}
                onChange={handleChange}
                required
                className="mt-1.5 block w-full rounded-xl border border-slate-300 p-3.5 text-xs sm:text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. Pickup from Lucknow to Ayodhya & Varanasi, 4 days tour for 6 adults and 2 kids in Innova Crysta..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 active:scale-95 transition"
              >
                <MessageCircle size={18} />
                <span>Send Quote Request on WhatsApp</span>
              </button>

              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md hover:bg-yellow-300 active:scale-95 transition shrink-0"
              >
                <span>Book Now</span>
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-600" />
                Zero Hidden Costs
              </span>
              <a
                href="tel:+918801842859"
                className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-blue-700 transition"
              >
                <PhoneCall size={14} className="text-blue-600" />
                <span>Call Admin: +91 88018 42859</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
