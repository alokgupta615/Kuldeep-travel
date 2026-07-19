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
  ShieldCheck,
  Star,
  BadgeCheck,
  Sparkles,
  ChevronRight,
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

  const [successOpen, setSuccessOpen] = useState(false);

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
          data.message ||
            "Booking failed"
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
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-yellow-50 py-24"
      >
        {/* Background Glow */}

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-3">

            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-[36px] border border-white/60 bg-white/80 shadow-[0_25px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:col-span-2"
            >
                            {/* =============================================== */}
              {/* Premium Header */}
              {/* =============================================== */}

              <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-10 py-14 text-white">

                {/* Decorative Glow */}
                <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-yellow-400/20 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-blue-400/20 blur-3xl" />

                <div className="relative z-10">

                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">

                    <Sparkles className="h-4 w-4" />

                    Premium Taxi Booking

                  </div>

                  <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight lg:text-5xl">

                    Reserve Your Ride
                    <span className="text-yellow-400">
                      {" "}In Less Than 2 Minutes
                    </span>

                  </h1>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">

                    Enjoy comfortable, safe and reliable taxi
                    services with professional drivers,
                    transparent pricing and instant booking
                    confirmation via Phone & WhatsApp.

                  </p>

                  <div className="mt-10 grid gap-5 md:grid-cols-3">

                    {/* Rating */}

                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                      <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />

                      <h3 className="mt-4 text-3xl font-bold">

                        4.9★

                      </h3>

                      <p className="mt-2 text-sm text-slate-300">

                        Customer Rating

                      </p>

                    </div>

                    {/* Trips */}

                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                      <BadgeCheck className="h-8 w-8 text-green-400" />

                      <h3 className="mt-4 text-3xl font-bold">

                        10K+

                      </h3>

                      <p className="mt-2 text-sm text-slate-300">

                        Happy Trips Completed

                      </p>

                    </div>

                    {/* Support */}

                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                      <ShieldCheck className="h-8 w-8 text-yellow-400" />

                      <h3 className="mt-4 text-3xl font-bold">

                        24×7

                      </h3>

                      <p className="mt-2 text-sm text-slate-300">

                        Premium Customer Support

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* =============================================== */}
              {/* Customer Information */}
              {/* =============================================== */}

              <div className="space-y-12 p-10">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">

                    Step 1

                  </div>

                  <h2 className="mt-5 text-3xl font-bold text-slate-900">

                    Customer Information

                  </h2>

                  <p className="mt-3 text-lg leading-7 text-slate-600">

                    Please provide your contact details so our
                    booking team can reach you for ride
                    confirmation and updates.

                  </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2">

                  {/* Full Name */}

                  <div>

                    <label className="mb-3 block font-semibold text-slate-800">

                      Full Name

                    </label>

                    <div className="relative">

                      <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        required
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                      />

                    </div>

                  </div>

                  {/* Mobile */}

                  <div>

                    <label className="mb-3 block font-semibold text-slate-800">

                      Mobile Number

                    </label>

                    <div className="relative">

                      <Phone className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                      />

                    </div>

                  </div>

                  {/* Email */}

                  <div>

                    <label className="mb-3 block font-semibold text-slate-800">

                      Email Address

                    </label>

                    <div className="relative">

                      <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                      />

                    </div>

                  </div>

                  {/* Service */}

                  <div>

                    <label className="mb-3 block font-semibold text-slate-800">

                      Service Type

                    </label>

                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 text-slate-900 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                    >
                      <option>One Way</option>
                      <option>Round Trip</option>
                      <option>Airport Transfer</option>
                      <option>Local Rental</option>
                      <option>Tour Package</option>
                    </select>

                  </div>

                </div>

                {/* Next section starts in Part 2 */}
                                {/* =============================================== */}
                {/* Pickup & Drop */}
                {/* =============================================== */}

                <div className="border-t border-slate-200 pt-12">

                  <div className="mb-8">

                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                      Step 2

                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-slate-900">

                      Journey Route

                    </h2>

                    <p className="mt-3 text-lg leading-7 text-slate-600">

                      Enter your pickup location and destination.
                      We'll calculate your estimated fare instantly.

                    </p>

                  </div>

                  <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">

                    <LocationInputs
                      formData={formData}
                      setFormData={setFormData}
                    />

                  </div>

                </div>

                {/* =============================================== */}
                {/* Vehicle Selection */}
                {/* =============================================== */}

                <div className="border-t border-slate-200 pt-12">

                  <div className="mb-8">

                    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                      Step 3

                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-slate-900">

                      Select Your Vehicle

                    </h2>

                    <p className="mt-3 text-lg leading-7 text-slate-600">

                      Choose the vehicle that perfectly matches
                      your comfort, luggage and passenger
                      requirements.

                    </p>

                  </div>

                  <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">

                    {/* VehicleSelector will be redesigned */}
                    <VehicleSelector
                      formData={formData}
                      setFormData={setFormData}
                    />

                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-3">

                    <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6">

                      <h4 className="text-lg font-bold text-slate-900">

                        Economy

                      </h4>

                      <p className="mt-2 text-slate-600">

                        Swift Dzire, Etios or Similar

                      </p>

                      <div className="mt-4 space-y-2 text-sm text-slate-500">

                        <p>• 4 Passengers</p>
                        <p>• Air Conditioned</p>
                        <p>• 2 Luggage Bags</p>

                      </div>

                    </div>

                    <div className="rounded-3xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-white p-6 shadow-lg">

                      <div className="inline-flex rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">

                        MOST POPULAR

                      </div>

                      <h4 className="mt-4 text-lg font-bold text-slate-900">

                        Sedan

                      </h4>

                      <p className="mt-2 text-slate-600">

                        Honda City, Ciaz or Similar

                      </p>

                      <div className="mt-4 space-y-2 text-sm text-slate-500">

                        <p>• 4 Passengers</p>
                        <p>• Premium Comfort</p>
                        <p>• Spacious Boot</p>

                      </div>

                    </div>

                    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">

                      <h4 className="text-lg font-bold text-slate-900">

                        SUV

                      </h4>

                      <p className="mt-2 text-slate-600">

                        Ertiga, Innova or Similar

                      </p>

                      <div className="mt-4 space-y-2 text-sm text-slate-500">

                        <p>• 6–7 Passengers</p>
                        <p>• Extra Luggage</p>
                        <p>• Best for Family Trips</p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* =============================================== */}
                {/* Fare Calculator */}
                {/* =============================================== */}

                <div className="border-t border-slate-200 pt-12">

                  <div className="mb-8">

                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">

                      Step 4

                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-slate-900">

                      Estimated Fare

                    </h2>

                    <p className="mt-3 text-lg leading-7 text-slate-600">

                      See an approximate fare before
                      confirming your booking.

                    </p>

                  </div>

                  <div className="rounded-[30px] border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-8 shadow-lg">

                    <FareCalculator
                      vehicle={formData.vehicle}
                      pickup={formData.pickup}
                      drop={formData.drop}
                    />

                  </div>

                </div>

                {/* Journey Details start in Part 3 */}

                                {/* =============================================== */}
                {/* Journey Details */}
                {/* =============================================== */}

                <div className="border-t border-slate-200 pt-12">

                  <div className="mb-8">

                    <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">

                      Step 5

                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-slate-900">

                      Journey Schedule

                    </h2>

                    <p className="mt-3 text-lg leading-7 text-slate-600">

                      Select your preferred travel date,
                      pickup time and passenger count.

                    </p>

                  </div>

                  <div className="grid gap-8 lg:grid-cols-3">

                    {/* Travel Date */}

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                      <label className="mb-3 block font-semibold text-slate-800">

                        Journey Date

                      </label>

                      <div className="relative">

                        <Calendar className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                        <input
                          required
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 transition duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                        />

                      </div>

                    </div>

                    {/* Travel Time */}

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                      <label className="mb-3 block font-semibold text-slate-800">

                        Pickup Time

                      </label>

                      <div className="relative">

                        <Clock className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                        <input
                          required
                          type="time"
                          name="travelTime"
                          value={formData.travelTime}
                          onChange={handleChange}
                          className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 transition duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                        />

                      </div>

                    </div>

                    {/* Passengers */}

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                      <label className="mb-3 block font-semibold text-slate-800">

                        Passengers

                      </label>

                      <div className="relative">

                        <Users className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                        <input
                          required
                          min={1}
                          max={20}
                          type="number"
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 transition duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                        />

                      </div>

                    </div>

                  </div>

                </div>

                {/* =============================================== */}
                {/* Payment */}
                {/* =============================================== */}

                <div className="border-t border-slate-200 pt-12">

                  <div className="mb-8">

                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

                      Step 6

                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-slate-900">

                      Payment Method

                    </h2>

                    <p className="mt-3 text-lg leading-7 text-slate-600">

                      Choose how you would like
                      to pay for your booking.

                    </p>

                  </div>

                  <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">

                    <PaymentOptions
                      formData={formData}
                      setFormData={setFormData}
                    />

                  </div>

                  {/* Premium Payment Features */}

                  <div className="mt-8 grid gap-6 md:grid-cols-3">

                    <div className="rounded-3xl border border-green-200 bg-green-50 p-6">

                      <ShieldCheck className="h-8 w-8 text-green-600" />

                      <h4 className="mt-4 text-lg font-bold text-slate-900">

                        Secure Payment

                      </h4>

                      <p className="mt-2 text-sm text-slate-600">

                        100% safe and encrypted payment.

                      </p>

                    </div>

                    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">

                      <BadgeCheck className="h-8 w-8 text-blue-600" />

                      <h4 className="mt-4 text-lg font-bold text-slate-900">

                        Flexible Options

                      </h4>

                      <p className="mt-2 text-sm text-slate-600">

                        Pay now or pay after your trip.

                      </p>

                    </div>

                    <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6">

                      <Star className="h-8 w-8 text-yellow-500" />

                      <h4 className="mt-4 text-lg font-bold text-slate-900">

                        No Hidden Charges

                      </h4>

                      <p className="mt-2 text-sm text-slate-600">

                        Transparent pricing with zero surprises.

                      </p>

                    </div>

                  </div>

                </div>

                {/* Special Instructions starts in Part 4 */}
                                {/* =============================================== */}
                {/* Special Instructions */}
                {/* =============================================== */}

                <div className="border-t border-slate-200 pt-12">

                  <div className="mb-8">

                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">

                      Step 7

                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-slate-900">

                      Additional Requirements

                    </h2>

                    <p className="mt-3 text-lg leading-7 text-slate-600">

                      Let us know if you have any special travel
                      requirements so we can prepare everything
                      before your journey.

                    </p>

                  </div>

                  <div className="relative">

                    <FileText className="absolute left-5 top-5 h-5 w-5 text-slate-400" />

                    <textarea
                      rows={6}
                      name="specialNote"
                      value={formData.specialNote}
                      onChange={handleChange}
                      placeholder="Example: Need child seat, wheelchair assistance, extra luggage space, multiple stops..."
                      className="w-full rounded-3xl border border-slate-300 bg-white py-5 pl-14 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
                    />

                  </div>

                </div>

                {/* =============================================== */}
                {/* Why Choose Kuldeep Travels */}
                {/* =============================================== */}

                <div className="mt-14 overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-10 text-white">

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                      <span className="rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300">

                        Premium Experience

                      </span>

                      <h2 className="mt-5 text-4xl font-bold">

                        Why Choose Kuldeep Travels?

                      </h2>

                      <p className="mt-4 max-w-2xl text-slate-300">

                        Thousands of customers trust us for
                        safe, comfortable and reliable taxi
                        services across Lucknow and nearby cities.

                      </p>

                    </div>

                  </div>

                  <div className="mt-12 grid gap-8 md:grid-cols-2">

                    {/* Card */}

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">

                      <ShieldCheck className="h-10 w-10 text-yellow-400" />

                      <h3 className="mt-5 text-xl font-bold">

                        Verified Drivers

                      </h3>

                      <p className="mt-3 leading-7 text-slate-300">

                        Every driver is professionally trained,
                        background verified and experienced.

                      </p>

                    </div>

                    {/* Card */}

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">

                      <BadgeCheck className="h-10 w-10 text-green-400" />

                      <h3 className="mt-5 text-xl font-bold">

                        Transparent Pricing

                      </h3>

                      <p className="mt-3 leading-7 text-slate-300">

                        No hidden charges.
                        What you see is exactly what you pay.

                      </p>

                    </div>

                    {/* Card */}

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">

                      <Phone className="h-10 w-10 text-blue-400" />

                      <h3 className="mt-5 text-xl font-bold">

                        Instant Confirmation

                      </h3>

                      <p className="mt-3 leading-7 text-slate-300">

                        Booking confirmation through
                        Phone, WhatsApp and Email.

                      </p>

                    </div>

                    {/* Card */}

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">

                      <Star className="h-10 w-10 text-yellow-400" />

                      <h3 className="mt-5 text-xl font-bold">

                        Premium Support

                      </h3>

                      <p className="mt-3 leading-7 text-slate-300">

                        Our travel experts are available
                        24×7 to help you anytime.

                      </p>

                    </div>

                  </div>

                </div>

                {/* =============================================== */}
                {/* Submit Button */}
                {/* =============================================== */}

                <div className="mt-14">

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex h-16 w-full items-center justify-center rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-xl font-bold text-slate-900 shadow-[0_20px_40px_rgba(234,179,8,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(234,179,8,.45)] disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {loading ? (
                      "Booking Your Ride..."
                    ) : (
                      <>
                        Confirm Booking

                        <ChevronRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />

                      </>
                    )}

                  </button>

                  <p className="mt-5 text-center text-sm text-slate-500">

                    By confirming your booking you agree to our
                    Terms & Conditions and Privacy Policy.

                  </p>

                </div>

              </div>

            </form>

            {/* Right Side starts in Part 5 */}
                        {/* =============================================== */}
            {/* Booking Summary Sidebar */}
            {/* =============================================== */}

            <div className="lg:sticky lg:top-24 lg:self-start">

              <div className="space-y-6">

                {/* Premium Card */}

                <div className="overflow-hidden rounded-[32px] border border-white/50 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,.12)] backdrop-blur-xl">

                  {/* Header */}

                  <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 p-8 text-white">

                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300">

                      Booking Summary

                    </div>

                    <h2 className="mt-5 text-3xl font-bold">

                      Review Your Booking

                    </h2>

                    <p className="mt-3 text-slate-300">

                      Double-check your journey details before
                      confirming your booking.

                    </p>

                  </div>

                  {/* Existing Component */}

                  <div className="p-6">

                    <BookingSummary
                      formData={formData}
                    />

                  </div>

                </div>

                {/* Trust Card */}

                <div className="rounded-[30px] bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 p-8 text-slate-900 shadow-xl">

                  <h3 className="text-2xl font-bold">

                    Need Help?

                  </h3>

                  <p className="mt-3 leading-7">

                    Our booking specialists are available
                    24×7 to help you choose the right vehicle
                    and complete your reservation.

                  </p>

                  <div className="mt-6 space-y-4">

                    <div className="flex items-center gap-3 rounded-2xl bg-white/40 p-4">

                      <Phone className="h-6 w-6" />

                      <div>

                        <p className="text-sm">

                          Call Us

                        </p>

                        <h4 className="font-bold">

                          +91 XXXXX XXXXX

                        </h4>

                      </div>

                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/40 p-4">

                      <Mail className="h-6 w-6" />

                      <div>

                        <p className="text-sm">

                          Email

                        </p>

                        <h4 className="font-bold">

                          info@kuldeeptravels.com

                        </h4>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Premium Features */}

                <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">

                  <h3 className="text-xl font-bold text-slate-900">

                    Every Booking Includes

                  </h3>

                  <div className="mt-6 space-y-5">

                    <div className="flex items-center gap-4">

                      <BadgeCheck className="h-6 w-6 text-green-600" />

                      <span className="text-slate-700">

                        Instant Booking Confirmation

                      </span>

                    </div>

                    <div className="flex items-center gap-4">

                      <BadgeCheck className="h-6 w-6 text-green-600" />

                      <span className="text-slate-700">

                        Professional Driver

                      </span>

                    </div>

                    <div className="flex items-center gap-4">

                      <BadgeCheck className="h-6 w-6 text-green-600" />

                      <span className="text-slate-700">

                        Sanitized & Comfortable Vehicle

                      </span>

                    </div>

                    <div className="flex items-center gap-4">

                      <BadgeCheck className="h-6 w-6 text-green-600" />

                      <span className="text-slate-700">

                        Transparent Pricing

                      </span>

                    </div>

                    <div className="flex items-center gap-4">

                      <BadgeCheck className="h-6 w-6 text-green-600" />

                      <span className="text-slate-700">

                        24×7 Customer Support

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =============================================== */}
      {/* Loading */}
      {/* =============================================== */}

      <LoadingOverlay
        open={loading}
      />

      {/* =============================================== */}
      {/* Success Modal */}
      {/* =============================================== */}

      <SuccessModal
        open={successOpen}
        onClose={() =>
          setSuccessOpen(false)
        }
      />

    </>

  );

}