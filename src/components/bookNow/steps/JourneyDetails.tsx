"use client";

import { Dispatch, SetStateAction } from "react";
import {
  MapPin,
  Navigation,
  CalendarDays,
  Clock3,
  BriefcaseBusiness,
} from "lucide-react";

import { BookingData } from "../BookingForm";

interface Props {
  formData: BookingData;
  setFormData: Dispatch<SetStateAction<BookingData>>;
}

const services = [
  {
    id: "airport",
    title: "Airport Transfer",
    description: "Pickup & Drop",
  },
  {
    id: "local",
    title: "Local Taxi",
    description: "Within City",
  },
  {
    id: "outstation",
    title: "Outstation",
    description: "Intercity Travel",
  },
  {
    id: "oneway",
    title: "One Way",
    description: "Single Trip",
  },
  {
    id: "wedding",
    title: "Wedding Car",
    description: "Luxury Ride",
  },
  {
    id: "tempo",
    title: "Tempo Traveller",
    description: "Group Travel",
  },
];

export default function JourneyDetails({
  formData,
  setFormData,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>

      {/* Heading */}

      <div className="mb-10">

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          STEP 2 OF 5
        </span>

        <h2 className="mt-4 text-3xl font-black text-slate-900">
          Journey Details
        </h2>

        <p className="mt-3 text-slate-600">
          Tell us where you're travelling and choose the service you need.
        </p>

      </div>

      {/* Pickup & Drop */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Pickup */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <MapPin size={18} />
            Pickup Location *
          </label>

          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="Enter pickup location"
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

        {/* Drop */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <Navigation size={18} />
            Drop Location *
          </label>

          <input
            type="text"
            name="drop"
            value={formData.drop}
            onChange={handleChange}
            placeholder="Enter destination"
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

      </div>

      {/* Date & Time */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <CalendarDays size={18} />
            Travel Date *
          </label>

          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

        <div>

          <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
            <Clock3 size={18} />
            Pickup Time *
          </label>

          <input
            type="time"
            name="travelTime"
            value={formData.travelTime}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />

        </div>

      </div>

      {/* Service Type */}

      <div className="mt-10">

        <label className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-800">
          <BriefcaseBusiness size={22} />
          Select Service
        </label>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  serviceType: service.id,
                }))
              }
              className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                formData.serviceType === service.id
                  ? "border-yellow-400 bg-yellow-50 ring-2 ring-yellow-300"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="text-lg font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </button>
          ))}

        </div>

      </div>

      {/* Tips */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-50 to-yellow-50 p-6 border border-blue-100">

        <h3 className="text-lg font-bold text-slate-900">
          Booking Tips
        </h3>

        <ul className="mt-4 space-y-3 text-slate-700">

          <li>✅ Enter the complete pickup address for quicker driver assignment.</li>

          <li>✅ Book airport rides at least 2 hours before departure.</li>

          <li>✅ Mention landmarks if your pickup location is difficult to find.</li>

          <li>✅ Choose the correct service type for accurate pricing.</li>

        </ul>

      </div>

    </div>
  );
}