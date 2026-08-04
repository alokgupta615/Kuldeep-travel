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
  CheckCircle2,
} from "lucide-react";

import type { BookingData } from "@/types/booking";

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

export default function JourneyDetails({ formData, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="space-y-6 md:space-y-10">
      {/* HEADER */}

      <div>
        <span
          className="
inline-flex
rounded-full
bg-blue-100
px-4
py-2
text-xs
font-bold
text-blue-700
sm:text-sm
"
        >
          Step 2 of 5
        </span>

        <h2
          className="
mt-4
text-2xl
font-extrabold
tracking-tight
text-slate-900
sm:text-3xl
md:text-4xl
"
        >
          Plan Your Journey
        </h2>

        <p
          className="
mt-2
text-sm
leading-relaxed
text-slate-600
sm:text-base
"
        >
          Enter pickup and destination details. We will calculate your estimated
          fare.
        </p>
      </div>

      {/* MAIN CARD */}

      <div
        className="
rounded-[24px]
border
border-slate-200
bg-white
p-4
shadow-[0_15px_40px_rgba(0,0,0,0.08)]

text-slate-900

[&_label]:text-slate-900
[&_input]:text-slate-900
[&_input::placeholder]:!text-slate-400

sm:p-6
md:p-10
"
      >
        <h3
          className="
text-xl
font-extrabold
text-slate-900
sm:text-3xl
"
        >
          Pickup & Destination
        </h3>

        <p
          className="
mt-2
text-sm
text-slate-500
"
        >
          Enter your travel locations
        </p>

        {/* LOCATIONS */}

        <div
          className="
mt-8
grid
gap-5
lg:grid-cols-2
"
        >
          {/* PICKUP */}

          <div>
            <label
              className="
    mb-3
    block
    text-sm
    font-bold
    text-slate-900
    opacity-100
    "
            >
              Pickup Location
            </label>

            <div
              className="
    flex
    items-center
    rounded-2xl
    border
    border-slate-300
    bg-white
    px-4
    transition
    focus-within:border-blue-600
    focus-within:ring-4
    focus-within:ring-blue-100
    "
            >
              <MapPin className="h-5 w-5 text-green-600" />

              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                placeholder="Enter pickup location"
                className="
      w-full
      bg-transparent
      px-4
      py-4

      !text-slate-900
      !placeholder:text-slate-500

      text-sm
      font-semibold

      outline-none
      "
              />
            </div>
          </div>

          {/* DROP */}

          {/* DROP */}

          <div>
            <label
              className="
      mb-3
      block
      text-sm
      font-bold
      text-slate-900
      !text-slate-900
      opacity-100
      visible
    "
            >
              Destination
            </label>

            <div
              className="
      flex
      items-center
      rounded-2xl
      border
      border-slate-300
      bg-white
      px-4
      transition
      focus-within:border-blue-600
      focus-within:ring-4
      focus-within:ring-blue-100
    "
            >
              <Navigation
                className="
        h-5
        w-5
        shrink-0
        text-red-600
      "
              />

              <input
                type="text"
                name="drop"
                value={formData.drop || ""}
                onChange={handleChange}
                placeholder="Enter destination"
                className="
        w-full
        bg-transparent
        px-4
        py-4

        text-slate-900
        !text-slate-900

        placeholder:text-slate-400
        !placeholder:text-slate-400

        text-sm
        font-semibold

        outline-none
      "
              />
            </div>
          </div>
        </div>

        {/* DATE TIME */}

        <div
          className="
mt-6
grid
gap-5
lg:grid-cols-2
"
        >
          <div>
            <label
              className="
mb-2
block
text-sm
font-bold
text-slate-900
"
            >
              Travel Date
            </label>

            <div
              className="
flex
items-center
rounded-2xl
border
border-slate-300
bg-white
px-4
"
            >
              <CalendarDays
                className="
text-blue-600
"
              />

              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="
w-full
bg-transparent
px-3
py-4
text-sm
font-semibold
text-slate-900
outline-none
"
              />
            </div>
          </div>

          <div>
            <label
              className="
mb-2
block
text-sm
font-bold
text-slate-900
"
            >
              Pickup Time
            </label>

            <div
              className="
flex
items-center
rounded-2xl
border
border-slate-300
bg-white
px-4
"
            >
              <Clock3
                className="
text-orange-600
"
              />

              <input
                type="time"
                name="travelTime"
                value={formData.travelTime}
                onChange={handleChange}
                className="
w-full
bg-transparent
px-3
py-4
text-sm
font-semibold
text-slate-900
outline-none
"
              />
            </div>
          </div>
        </div>

        {/* ROUTE PREVIEW */}

        <div
          className="
mt-8
rounded-3xl
border
border-slate-200
bg-gradient-to-br
from-slate-50
to-blue-50
p-5
sm:p-8
"
        >
          <h4
            className="
mb-5
text-lg
font-extrabold
text-slate-900
sm:text-xl
"
          >
            Trip Preview
          </h4>

          <div className="flex gap-4">
            {/* Timeline */}

            <div className="flex flex-col items-center">
              <div
                className="
h-4
w-4
rounded-full
bg-green-500
ring-4
ring-green-100
"
              />

              <div
                className="
h-14
border-l-2
border-dashed
border-slate-300
"
              />

              <div
                className="
h-4
w-4
rounded-full
bg-red-500
ring-4
ring-red-100
"
              />
            </div>

            <div
              className="
space-y-7
"
            >
              <div>
                <p
                  className="
text-xs
font-semibold
text-slate-500
"
                >
                  Pickup Location
                </p>

                <p
                  className="
mt-1
break-words
text-sm
font-bold
text-slate-900
sm:text-base
"
                >
                  {formData.pickup || "Not selected"}
                </p>
              </div>

              <div>
                <p
                  className="
text-xs
font-semibold
text-slate-500
"
                >
                  Destination
                </p>

                <p
                  className="
mt-1
break-words
text-sm
font-bold
text-slate-900
sm:text-base
"
                >
                  {formData.drop || "Not selected"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE SELECTOR */}

      <div>
        <h3
          className="
mb-5
flex
items-center
gap-2
text-xl
font-extrabold
text-slate-900
sm:text-2xl
"
        >
          <BriefcaseBusiness className="text-blue-700" />
          Choose Service
        </h3>

        <div
          className="
grid
grid-cols-2
gap-3
sm:grid-cols-2
xl:grid-cols-3
"
        >
          {services.map((service) => {
            const Icon = service.icon;

            const active = formData.serviceType === service.id;

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
                className={`
group
rounded-2xl
border
p-4
text-left
transition-all
duration-300

active:scale-95

sm:rounded-3xl
sm:p-6


${
  active
    ? "border-yellow-400 bg-yellow-50 shadow-lg ring-2 ring-yellow-200"
    : "border-slate-200 bg-white hover:-translate-y-1 hover:shadow-xl"
}

`}
              >
                <div
                  className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
bg-gradient-to-br
from-blue-950
to-blue-700

sm:h-14
sm:w-14
"
                >
                  <Icon
                    className="
h-5
w-5
text-yellow-400
sm:h-6
sm:w-6
"
                  />
                </div>

                <div
                  className="
mt-3
flex
items-center
gap-1
"
                >
                  <h4
                    className="
text-sm
font-extrabold
text-slate-900
sm:text-xl
"
                  >
                    {service.title}
                  </h4>

                  {active && (
                    <CheckCircle2
                      className="
h-4
w-4
text-green-600
"
                    />
                  )}
                </div>

                <p
                  className="
mt-1
text-xs
font-medium
text-slate-500
sm:text-base
"
                >
                  {service.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* BOOKING TIPS */}

      <div
        className="
rounded-3xl
border
border-blue-100
bg-gradient-to-r
from-blue-50
to-yellow-50
p-5

sm:p-8
"
      >
        <h3
          className="
text-xl
font-extrabold
text-slate-900
sm:text-2xl
"
        >
          Booking Tips
        </h3>

        <ul
          className="
mt-4
space-y-3
text-sm
font-medium
leading-relaxed
text-slate-700
sm:text-base
"
        >
          <li>✅ Enter complete pickup address</li>

          <li>✅ Add nearby landmark for easy pickup</li>

          <li>✅ Airport rides should be booked early</li>

          <li>✅ Select correct service for accurate fare</li>
        </ul>
      </div>
    </section>
  );
}
