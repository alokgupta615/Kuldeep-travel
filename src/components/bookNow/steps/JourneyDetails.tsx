"use client";

import { Dispatch, SetStateAction } from "react";
import {
  MapPin,
  Navigation,
  CalendarDays,
  Clock3,
  BriefcaseBusiness,
  Plane,
  Car,
  Route,
  CarTaxiFront,
  HeartHandshake,
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
    desc: "Pickup & Drop",
    icon: Plane,
  },
  {
    id: "local",
    title: "Local Taxi",
    desc: "Within City",
    icon: Car,
  },
  {
    id: "outstation",
    title: "Outstation",
    desc: "Intercity Travel",
    icon: Route,
  },
  {
    id: "oneway",
    title: "One Way",
    desc: "Single Trip",
    icon: CarTaxiFront,
  },
  {
    id: "wedding",
    title: "Wedding Car",
    desc: "Luxury Ride",
    icon: HeartHandshake,
  },
  {
    id: "tempo",
    title: "Tempo Traveller",
    desc: "Group Travel",
    icon: CarTaxiFront,
  },
];

export default function JourneyDetails({
  formData,
  setFormData,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="space-y-10">

      {/* Heading */}

      <div>

        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          Step 2 of 5
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Journey Route
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Enter your pickup location and destination. We'll calculate your
          estimated fare instantly.
        </p>

      </div>

      {/* Card */}

      <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

        <h3 className="text-3xl font-bold text-slate-900">
          Pickup & Destination
        </h3>

        <p className="mt-2 text-slate-500">
          Enter your journey locations.
        </p>

        {/* Pickup Drop */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-3 block font-semibold text-slate-700">
              Pickup Location
            </label>

            <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5">

              <MapPin className="text-green-600" />

              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                placeholder="Enter pickup location"
                className="w-full bg-transparent px-4 py-4 text-slate-900 placeholder:text-slate-400 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-3 block font-semibold text-slate-700">
              Destination
            </label>

            <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5">

              <Navigation className="text-red-600" />

              <input
                type="text"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                placeholder="Enter destination"
                className="w-full bg-transparent px-4 py-4 text-slate-900 placeholder:text-slate-400 outline-none"
              />

            </div>

          </div>

        </div>

        {/* Date Time */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <div>

            <label className="mb-3 block font-semibold text-slate-700">
              Travel Date
            </label>

            <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5">

              <CalendarDays className="text-blue-600" />

              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-4 text-slate-900 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-3 block font-semibold text-slate-700">
              Pickup Time
            </label>

            <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5">

              <Clock3 className="text-orange-600" />

              <input
                type="time"
                name="travelTime"
                value={formData.travelTime}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-4 text-slate-900 outline-none"
              />

            </div>

          </div>

        </div>

        {/* Route Preview */}

        <div className="mt-10 rounded-3xl bg-slate-50 p-8">

          <h4 className="mb-6 text-xl font-bold text-slate-900">
            Trip Preview
          </h4>

          <div className="flex items-start gap-4">

            <div className="flex flex-col items-center">

              <div className="h-4 w-4 rounded-full bg-green-500"></div>

              <div className="h-12 border-l-2 border-dashed border-slate-300"></div>

              <div className="h-4 w-4 rounded-full bg-red-500"></div>

            </div>

            <div className="space-y-8">

              <div>
                <p className="text-sm text-slate-500">
                  Pickup Location
                </p>

                <p className="font-semibold text-slate-900">
                  {formData.pickup || "Not selected"}
                </p>

              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Destination
                </p>

                <p className="font-semibold text-slate-900">
                  {formData.drop || "Not selected"}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Service */}

      <div>

        <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">

          <BriefcaseBusiness />

          Choose Service

        </h3>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceType: service.id,
                  }))
                }
                className={`rounded-3xl border p-6 text-left transition hover:-translate-y-2 hover:shadow-xl ${
                  formData.serviceType === service.id
                    ? "border-yellow-400 bg-yellow-50 ring-2 ring-yellow-300"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900">

                  <Icon className="text-yellow-400" />

                </div>

                <h4 className="mt-5 text-xl font-bold text-slate-900">
                  {service.title}
                </h4>

                <p className="mt-2 text-slate-600">
                  {service.desc}
                </p>

              </button>
            );
          })}

        </div>

      </div>

      {/* Tips */}

      <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-yellow-50 p-8">

        <h3 className="text-2xl font-bold text-slate-900">
          Booking Tips
        </h3>

        <ul className="mt-5 space-y-3 text-slate-700">

          <li>✅ Enter the complete pickup address.</li>

          <li>✅ Mention nearby landmarks.</li>

          <li>✅ Book airport rides at least 2 hours in advance.</li>

          <li>✅ Choose the correct service type for accurate pricing.</li>

        </ul>

      </div>

    </section>
  );
}