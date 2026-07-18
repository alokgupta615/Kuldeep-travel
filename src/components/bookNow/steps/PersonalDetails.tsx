"use client";

import { Dispatch, SetStateAction } from "react";
import {
  User,
  Phone,
  Mail,
  Users,
  MessageSquare,
} from "lucide-react";

import { BookingData } from "../BookingForm";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

export default function PersonalDetails({
  formData,
  setFormData,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "passengers"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  return (
    <div>

      {/* Heading */}

      <div className="mb-10">

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          STEP 1 OF 5
        </span>

        <h2 className="mt-4 text-3xl font-black text-slate-900">
          Personal Details
        </h2>

        <p className="mt-3 text-slate-600">
          Tell us who is travelling so we can contact you regarding
          your booking.
        </p>

      </div>

      {/* Form */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <User size={18} />
            Full Name *
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <Phone size={18} />
            Mobile Number *
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <Mail size={18} />
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

        {/* Passengers */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <Users size={18} />
            Number of Passengers
          </label>

          <input
            type="number"
            min={1}
            max={30}
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

      </div>

      {/* Special Request */}

      <div className="mt-8">

        <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
          <MessageSquare size={18} />
          Special Request (Optional)
        </label>

        <textarea
          rows={5}
          name="specialRequest"
          placeholder="Example: Need child seat, extra luggage space, elderly passenger assistance..."
          value={formData.specialRequest}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
        />

      </div>

      {/* Information Card */}

      <div className="mt-10 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-yellow-50 p-6">

        <h3 className="text-lg font-bold text-slate-900">
          Why do we ask for these details?
        </h3>

        <ul className="mt-4 space-y-3 text-slate-700">

          <li>✅ Booking confirmation via Phone / Email</li>

          <li>✅ Driver coordination before pickup</li>

          <li>✅ Faster customer support</li>

          <li>✅ Personalized travel assistance</li>

        </ul>

      </div>

    </div>
  );
}