"use client";

import { useState } from "react";

import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  FileText,
} from "lucide-react";

import LocationInputs from "./LocationInputs";
import VehicleSelector from "./VehicleSelector";
import FareCalculator from "./FareCalculator";
import PaymentOptions from "./PaymentOptions";
import BookingSummary from "./BookingSummary";
import SuccessModal from "./SuccessModal";
import LoadingOverlay from "./LoadingOverlay";

interface BookingFormData {
  customerName: string;
  phone: string;
  email: string;

  pickup: string;
  drop: string;

  serviceType: string;

  vehicle: string;

  travelDate: string;
  travelTime: string;

  passengers: number;

  payment: string;

  specialNote: string;
}

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const [successOpen, setSuccessOpen] =
    useState(false);

  const [formData, setFormData] =
    useState<BookingFormData>({
      customerName: "",
      phone: "",
      email: "",

      pickup: "",
      drop: "",

      serviceType: "One Way",

      vehicle: "",

      travelDate: "",
      travelTime: "",

      passengers: 1,

      payment: "PAY_AFTER_TRIP",

      specialNote: "",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "passengers"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "/api/bookings",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Booking failed"
        );
      }

      setSuccessOpen(true);

      setFormData({
        customerName: "",
        phone: "",
        email: "",

        pickup: "",
        drop: "",

        serviceType: "One Way",

        vehicle: "",

        travelDate: "",
        travelTime: "",

        passengers: 1,

        payment: "PAY_AFTER_TRIP",

        specialNote: "",
      });

    } catch (error) {
      console.error(error);

      alert("Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="booking-form"
        className="bg-slate-50 py-20"
      >
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-3">

            <form
              onSubmit={handleSubmit}
              className="space-y-8 rounded-3xl bg-white p-8 shadow-xl lg:col-span-2"
            >

              <div>

                <h2 className="text-3xl font-bold">
                  Book Your Taxi
                </h2>

                <p className="mt-2 text-slate-500">
                  Complete the form below
                  and we'll contact you
                  shortly.
                </p>

              </div>

              {/* Customer Details */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-medium">
                    Full Name
                  </label>

                  <div className="relative">

                    <User className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                    <input
                      required
                      type="text"
                      name="customerName"
                      value={
                        formData.customerName
                      }
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-yellow-400"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-medium">
                    Mobile Number
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-yellow-400"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-medium">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-yellow-400"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-medium">
                    Service Type
                  </label>

                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full rounded-xl border p-3 outline-none focus:border-yellow-400"
                  >
                    <option>
                      One Way
                    </option>

                    <option>
                      Round Trip
                    </option>

                    <option>
                      Airport Transfer
                    </option>

                    <option>
                      Local Rental
                    </option>

                    <option>
                      Tour Package
                    </option>

                  </select>

                </div>

              </div>
                            {/* Pickup & Drop */}

              <LocationInputs
                formData={formData}
                setFormData={setFormData}
              />

              {/* Vehicle Selection */}

              <VehicleSelector
                formData={formData}
                setFormData={setFormData}
              />

              {/* Fare Calculator */}

              <FareCalculator
                vehicle={formData.vehicle}
                pickup={formData.pickup}
                drop={formData.drop}
              />

              {/* Journey Details */}

              <div>

                <h3 className="mb-6 text-2xl font-bold">
                  Journey Details
                </h3>

                <div className="grid gap-6 md:grid-cols-3">

                  {/* Date */}

                  <div>

                    <label className="mb-2 block font-medium">
                      Journey Date
                    </label>

                    <div className="relative">

                      <Calendar className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                      <input
                        required
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-yellow-400"
                      />

                    </div>

                  </div>

                  {/* Time */}

                  <div>

                    <label className="mb-2 block font-medium">
                      Journey Time
                    </label>

                    <div className="relative">

                      <Clock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                      <input
                        required
                        type="time"
                        name="travelTime"
                        value={formData.travelTime}
                        onChange={handleChange}
                        className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-yellow-400"
                      />

                    </div>

                  </div>

                  {/* Passengers */}

                  <div>

                    <label className="mb-2 block font-medium">
                      Passengers
                    </label>

                    <div className="relative">

                      <Users className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                      <input
                        required
                        min={1}
                        max={20}
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-yellow-400"
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* Payment */}

              <PaymentOptions
                formData={formData}
                setFormData={setFormData}
              />
                            {/* Special Instructions */}

              <div>

                <label className="mb-2 block font-medium">
                  Special Instructions
                </label>

                <div className="relative">

                  <FileText className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                  <textarea
                    rows={5}
                    name="specialNote"
                    value={formData.specialNote}
                    onChange={handleChange}
                    placeholder="Any special requests, luggage details, child seat, etc."
                    className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-yellow-400"
                  />

                </div>

              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-bold text-slate-900 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>

            </form>

            {/* Booking Summary */}

            <BookingSummary
              formData={formData}
            />

          </div>

        </div>

      </section>

      {/* Loading */}

      <LoadingOverlay
        open={loading}
      />

      {/* Success */}

      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />

    </>
  );
}