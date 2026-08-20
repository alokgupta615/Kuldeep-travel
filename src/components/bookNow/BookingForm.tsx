"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Plane,
  Car,
  Compass,
  Building2,
  Navigation,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Lock,
  AlertCircle,
} from "lucide-react";

import LocationInputs from "./LocationInputs";
import VehicleSelector from "./VehicleSelector";
import FareCalculator from "./FareCalculator";
import PaymentOptions from "./PaymentOptions";
import BookingSummary from "./BookingSummary";
import SuccessModal from "./SuccessModal";
import LoadingOverlay from "./LoadingOverlay";
import RideCategory from "./RideCategory";
import RideExtras from "./RideExtras";

import { openRazorpay } from "@/lib/openRazorpay";
import { calculateFare } from "@/lib/fareCalculator";
import type { BookingData } from "@/types/booking";

const serviceTypes = [
  { id: "One Way", label: "One Way Drop", icon: Navigation },
  { id: "Round Trip", label: "Round Trip", icon: Compass },
  { id: "Airport Transfer", label: "Airport Taxi", icon: Plane },
  { id: "Local Rental", label: "Local 8Hr/80Km", icon: Building2 },
  { id: "Tour Package", label: "Holiday Tour", icon: Car },
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);

  const [formData, setFormData] = useState<BookingData>({
    customerName: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    serviceType: "One Way",
    vehicle: "Swift Dzire",
    category: "standard",
    extras: [],
    travelDate: "",
    travelTime: "",
    passengers: 1,
    payment: "PAY_AFTER_TRIP",
    specialNote: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "passengers"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const fareResult = calculateFare({
    vehicle: formData.vehicle,
    category: formData.category,
    extras: formData.extras,
    serviceType: formData.serviceType,
  });

  const resetForm = () => {
    setFormData({
      customerName: "",
      phone: "",
      email: "",
      pickup: "",
      drop: "",
      serviceType: "One Way",
      vehicle: "Swift Dzire",
      category: "standard",
      extras: [],
      travelDate: "",
      travelTime: "",
      passengers: 1,
      payment: "PAY_AFTER_TRIP",
      specialNote: "",
    });
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.customerName.trim() || !formData.phone.trim()) {
      alert("Please enter your full name and 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      const totalFare = fareResult.total;

      // Handle Online Payment (100% PAY_NOW or 20% ADVANCE)
      if (formData.payment === "PAY_NOW" || formData.payment === "ADVANCE") {
        const payableAmount =
          formData.payment === "ADVANCE"
            ? fareResult.advanceAmount
            : fareResult.total;

        const description =
          formData.payment === "ADVANCE"
            ? `20% Advance Token (₹${payableAmount}) - Kuldeep Travels`
            : `Full Fare Payment (₹${payableAmount}) - Kuldeep Travels`;

        await openRazorpay({
          amount: payableAmount,
          customerName: formData.customerName,
          email: formData.email,
          phone: formData.phone,
          description,
          onSuccess: async (payment) => {
            try {
              const response = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...formData,
                  amount: totalFare,
                  paidAmount: payableAmount,
                  remainingAmount: totalFare - payableAmount,
                  paymentStatus:
                    formData.payment === "ADVANCE"
                      ? "Advance Paid (20%)"
                      : "Paid",
                  razorpayPaymentId: payment.razorpay_payment_id,
                  razorpayOrderId: payment.razorpay_order_id,
                  razorpaySignature: payment.razorpay_signature,
                }),
              });

              const data = await response.json();
              if (!response.ok) throw new Error(data.message || "Failed to save booking.");

              setSuccessOpen(true);
              resetForm();
            } catch (saveError: any) {
              console.error("Booking save error:", saveError);
              alert(
                "Payment was successful, but booking record could not be updated automatically. Please contact our support team with Payment ID: " +
                  payment.razorpay_payment_id
              );
            } finally {
              setLoading(false);
            }
          },
          onFailure: (err) => {
            setLoading(false);
            if (err?.reason !== "dismissed") {
              setErrorMessage(
                "Online payment could not be processed. You can switch to 'Pay After Trip' (0% advance) or contact us via WhatsApp."
              );
            }
          },
        });
        return;
      }

      // Handle Pay After Trip (0% Advance)
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: totalFare,
          paidAmount: 0,
          remainingAmount: totalFare,
          paymentStatus: "Pending",
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Booking submission failed");

      setSuccessOpen(true);
      resetForm();
    } catch (error: any) {
      console.error("Booking Submission Error:", error);
      const msg = error.message || "Booking submission failed. Please try again or reach us via WhatsApp.";
      setErrorMessage(msg);
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hello Kuldeep Travels, I want to book a taxi:
• Name: ${formData.customerName || "Customer"}
• Service: ${formData.serviceType}
• Vehicle: ${formData.vehicle || "Any Available"}
• Tier: ${formData.category.toUpperCase()}
• Pickup: ${formData.pickup || "Lucknow"}
• Drop: ${formData.drop || "Not decided"}
• Date: ${formData.travelDate || "Immediate"}
• Time: ${formData.travelTime || "Anytime"}
• Passengers: ${formData.passengers}
• Payment Choice: ${formData.payment}
• Estimated Fare: ₹${fareResult.total}
Please confirm vehicle availability.`;
    return `https://wa.me/918801842859?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <section
        id="booking-form"
        className="relative overflow-hidden bg-slate-100/80 py-12 sm:py-16 lg:py-20"
      >
        {/* Decorative Gradients */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/15 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* =====================================
                MAIN BOOKING FORM (8 Cols)
            ===================================== */}
            <div className="lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 md:p-10 shadow-xl"
              >
                {/* Form Progress Header */}
                <div className="border-b border-slate-200 pb-7 mb-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-800">
                        <Sparkles size={14} className="text-yellow-600" />
                        Online Cab Reservation
                      </span>
                      <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
                        Cab Booking Form
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-2.5 border border-slate-200">
                      <Lock size={16} className="text-emerald-600" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800">256-Bit SSL Protected</span>
                    </div>
                  </div>

                  {/* Trip Type Selector Pills */}
                  <div className="mt-7">
                    <label className="mb-3 block text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900">
                      Select Trip Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                      {serviceTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = formData.serviceType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                serviceType: type.id,
                              }))
                            }
                            className={`flex flex-col items-center justify-center rounded-2xl border p-3.5 text-center transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-700/20 font-bold scale-[1.02]"
                                : "border-slate-300 bg-white text-slate-800 font-semibold hover:border-blue-400 hover:bg-blue-50/50"
                            }`}
                          >
                            <Icon size={20} className="mb-1.5" />
                            <span className="text-xs sm:text-sm">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-amber-900 text-sm font-semibold flex items-start gap-3">
                    <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Payment Notification:</p>
                      <p className="mt-1 text-xs sm:text-sm">{errorMessage}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, payment: "PAY_AFTER_TRIP" }));
                          setErrorMessage(null);
                        }}
                        className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-700 transition"
                      >
                        Switch to Pay After Trip (0% Advance)
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-10">
                  {/* ===================================================
                      STEP 1: RIDE ROUTE & SCHEDULE
                  =================================================== */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-extrabold text-white">
                        1
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Ride Route & Schedule
                      </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6">
                      <LocationInputs formData={formData} setFormData={setFormData} />

                      {/* Date, Time & Passengers */}
                      <div className="mt-5 pt-5 border-t border-slate-200 grid gap-4 sm:grid-cols-3">
                        {/* Date */}
                        <div>
                          <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
                            Journey Date <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                              required
                              type="date"
                              name="travelDate"
                              value={formData.travelDate}
                              onChange={handleChange}
                              className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                            />
                          </div>
                        </div>

                        {/* Time */}
                        <div>
                          <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
                            Pickup Time <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                              required
                              type="time"
                              name="travelTime"
                              value={formData.travelTime}
                              onChange={handleChange}
                              className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                            />
                          </div>
                        </div>

                        {/* Passengers */}
                        <div>
                          <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
                            Passengers <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                              required
                              type="number"
                              min={1}
                              max={30}
                              name="passengers"
                              value={formData.passengers}
                              onChange={handleChange}
                              className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===================================================
                      STEP 2: VEHICLE & COMFORT TIER
                  =================================================== */}
                  <div className="border-t border-slate-200 pt-8">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-extrabold text-white">
                        2
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Vehicle & Comfort Tier
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <RideCategory formData={formData} setFormData={setFormData} />
                      <VehicleSelector formData={formData} setFormData={setFormData} />
                      <RideExtras formData={formData} setFormData={setFormData} />
                    </div>
                  </div>

                  {/* ===================================================
                      STEP 3: PASSENGER INFORMATION
                  =================================================== */}
                  <div className="border-t border-slate-200 pt-8">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-extrabold text-white">
                        3
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Passenger Information
                      </h3>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                          <input
                            required
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
                          Mobile Number (Driver SMS) <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
                          Email Address (PDF Invoice)
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                          />
                        </div>
                      </div>

                      {/* Special Note */}
                      <div>
                        <label className="mb-2 block text-sm sm:text-base font-bold text-slate-900">
                          Flight No. or Quick Note
                        </label>
                        <input
                          type="text"
                          name="specialNote"
                          value={formData.specialNote}
                          onChange={handleChange}
                          placeholder="e.g. Flight 6E-204, Child seat, Extra boot"
                          className="h-13 sm:h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ===================================================
                      STEP 4: FARE REVIEW & PAYMENT
                  =================================================== */}
                  <div className="border-t border-slate-200 pt-8">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-extrabold text-white">
                        4
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Fare Estimate & Payment Method
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50/70 to-white p-5 sm:p-7 shadow-sm">
                        <FareCalculator
                          vehicle={formData.vehicle}
                          pickup={formData.pickup}
                          drop={formData.drop}
                          category={formData.category}
                          extras={formData.extras}
                          serviceType={formData.serviceType}
                        />
                      </div>

                      <PaymentOptions formData={formData} setFormData={setFormData} />
                    </div>
                  </div>

                  {/* SUBMIT BUTTONS (Desktop) */}
                  <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 inline-flex h-15 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 font-black text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-98 transition disabled:opacity-50 text-base sm:text-lg cursor-pointer"
                      >
                        {loading ? (
                          "Processing..."
                        ) : (
                          <>
                            <span>
                              {formData.payment === "ADVANCE"
                                ? `Pay ₹${fareResult.advanceAmount.toLocaleString("en-IN")} Advance & Confirm`
                                : formData.payment === "PAY_NOW"
                                ? `Pay ₹${fareResult.total.toLocaleString("en-IN")} & Confirm`
                                : "Confirm & Submit Booking"}
                            </span>
                            <ChevronRight size={20} />
                          </>
                        )}
                      </button>

                      <a
                        href={getWhatsAppBookingUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-15 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 font-bold text-white shadow-md hover:bg-emerald-700 active:scale-98 transition text-base sm:text-lg shrink-0"
                      >
                        <MessageCircle size={20} />
                        <span>Instant WhatsApp</span>
                      </a>
                    </div>

                    <p className="mt-4 text-center text-xs sm:text-sm text-slate-700 font-medium">
                      🔒 Zero cancellation fee • Driver details shared via SMS & WhatsApp • 24×7 Active Helpline
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* ===============================================
                STICKY SIDEBAR (4 Cols)
            ================================================ */}
            <div className="lg:col-span-4 space-y-6">
              <BookingSummary formData={formData} />

              {/* Verified Trust Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Kuldeep Safety Guarantee
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                      100% Verified Chauffeurs
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3.5 text-xs sm:text-sm text-slate-800 font-semibold">
                  {[
                    "Zero hidden charges or toll surprises",
                    "Sanitized air-conditioned vehicles",
                    "Doorstep pickup on scheduled time",
                    "Active 24×7 customer support desk",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 24x7 Immediate Help Desk */}
              <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-6 sm:p-7 text-white shadow-xl">
                <div className="flex items-center gap-2 text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <Sparkles size={14} />
                  <span>24×7 Booking Helpline</span>
                </div>

                <h3 className="mt-2 text-lg sm:text-xl font-extrabold">
                  Prefer Booking Over Phone?
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">
                  Call our live Lucknow dispatch desk for fast vehicle confirmation.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="tel:+918801842859"
                    className="flex h-13 items-center justify-center gap-2 rounded-xl bg-yellow-400 text-sm sm:text-base font-extrabold text-slate-950 transition hover:bg-yellow-300 active:scale-95"
                  >
                    <PhoneCall size={18} />
                    <span>Call +91 88018 42859</span>
                  </a>

                  <a
                    href="https://wa.me/918801842859?text=Hello%20Kuldeep%20Travels,%20I%20need%20help%20with%20booking."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-13 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 text-sm sm:text-base font-bold text-white backdrop-blur hover:bg-white hover:text-slate-950 active:scale-95 transition"
                  >
                    <MessageCircle size={18} className="text-emerald-400" />
                    <span>WhatsApp Tour Expert</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          MOBILE STICKY ACTION BAR (Visible on mobile only)
      ==================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 block border-t border-slate-200 bg-white/95 px-4 py-3.5 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div>
            <span className="text-xs uppercase font-bold text-slate-500 block">
              {formData.payment === "ADVANCE" ? "Advance (20%)" : "Total Fare"}
            </span>
            <span className="text-lg font-black text-slate-900">
              ₹
              {(formData.payment === "ADVANCE"
                ? fareResult.advanceAmount
                : fareResult.total
              ).toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+918801842859"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-800 border border-slate-300"
              title="Call Helpline"
            >
              <Phone size={20} />
            </a>

            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center gap-1.5 rounded-xl bg-emerald-600 px-4 text-xs sm:text-sm font-bold text-white shadow"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            <a
              href="#booking-form"
              className="flex h-12 items-center gap-1 rounded-xl bg-yellow-400 px-4 text-xs sm:text-sm font-extrabold text-slate-950 shadow"
            >
              <span>{formData.payment === "PAY_AFTER_TRIP" ? "Book" : "Pay"}</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />

      {/* LOADING OVERLAY */}
      <LoadingOverlay open={loading} />
    </>
  );
}
