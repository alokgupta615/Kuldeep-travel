"use client";

import { useState } from "react";
import {
  CalendarDays,
  Car,
  MapPin,
  Phone,
  User,
  MessageSquare,
  Heart,
} from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    vehicle: "",
    weddingDate: "",
    pickup: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // Connect with your booking API / WhatsApp / WordPress
  };

  return (
    <div className="rounded-[32px] border border-white/15 bg-white/95 p-8 shadow-2xl backdrop-blur-xl lg:p-10">

      <div className="mb-8 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">

          <Heart className="text-slate-900" />

        </div>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          Reserve Your Wedding Car
        </h2>

        <p className="mt-2 text-slate-600">
          Tell us about your celebration and we'll recommend the perfect vehicle.
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}

        <div className="relative">

          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700"
            size={18}
          />

          <input
            type="text"
            name="name"
            placeholder="Bride / Groom Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-700"
          />

        </div>

        {/* Phone */}

        <div className="relative">

          <Phone
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700"
            size={18}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-700"
          />

        </div>

        {/* Event */}

        <div className="relative">

          <Heart
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700"
            size={18}
          />

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-700"
          >
            <option value="">Select Event</option>
            <option>Wedding Ceremony</option>
            <option>Reception</option>
            <option>Engagement</option>
            <option>Haldi</option>
            <option>Mehendi</option>
            <option>Sangeet</option>
            <option>Destination Wedding</option>
          </select>

        </div>

        {/* Vehicle */}

        <div className="relative">

          <Car
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700"
            size={18}
          />

          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-700"
          >
            <option value="">Preferred Vehicle</option>
            <option>Luxury Sedan</option>
            <option>Premium SUV</option>
            <option>Innova Crysta</option>
            <option>Tempo Traveller</option>
            <option>Mini Bus</option>
            <option>Luxury Coach</option>
            <option>Need Recommendation</option>
          </select>

        </div>

        {/* Wedding Date */}

        <div className="relative">

          <CalendarDays
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700"
            size={18}
          />

          <input
            type="date"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-700"
          />

        </div>

        {/* Pickup */}

        <div className="relative">

          <MapPin
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700"
            size={18}
          />

          <input
            type="text"
            name="pickup"
            placeholder="Wedding Venue / Pickup Location"
            value={formData.pickup}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-700"
          />

        </div>

        {/* Message */}

        <div className="relative">

          <MessageSquare
            className="absolute left-4 top-5 text-blue-700"
            size={18}
          />

          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Decoration style, number of vehicles, guest transportation or any special requirements..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-700"
          />

        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 py-4 text-lg font-bold text-slate-900 transition hover:scale-[1.02]"
        >
          Reserve Wedding Car
        </button>

      </form>

      {/* Footer */}

      <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-center">

        <p className="text-sm text-slate-600">
          ✓ Instant Quote &nbsp; • &nbsp;
          ✓ Transparent Pricing &nbsp; • &nbsp;
          ✓ Professional Chauffeurs
        </p>

      </div>

    </div>
  );
}