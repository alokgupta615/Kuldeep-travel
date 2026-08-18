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
  BadgeCheck,
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
import type { BookingData } from "@/types/booking";

const serviceTypes = [
  { id: "One Way", label: "One Way Drop", icon: Navigation },
  { id: "Round Trip", label: "Round Trip", icon: Compass },
  { id: "Airport Transfer", label: "Airport Taxi", icon: Plane },
  { id: "Local Rental", label: "Local 8Hr / 80Km", icon: Building2 },
  { id: "Tour Package", label: "Holiday Tour", icon: Car },
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
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

  const calculateAmount = () => {
    let base = 999;
    if (formData.vehicle === "Swift Dzire" || formData.vehicle === "Sedan") base = 1499;
    else if (formData.vehicle === "Ertiga" || formData.vehicle === "SUV") base = 2199;
    else if (formData.vehicle === "Innova" || formData.vehicle === "Innova Crysta") base = 3299;
    else if (formData.vehicle === "Tempo Traveller") base = 4999;
    else if (formData.vehicle === "Mini Bus") base = 7999;

    if (formData.category === "business") base += 600;
    if (formData.category === "standard") base += 200;

    return base;
  };

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName || !formData.phone) {
      alert("Please enter your name and 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      const totalFare = calculateAmount();

      if (formData.payment === "PAY_NOW") {
        await openRazorpay({
          amount: totalFare,
          customerName: formData.customerName,
          email: formData.email,
          phone: formData.phone,
          onSuccess: async (payment: any) => {
            const response = await fetch("/api/bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...formData,
                amount: totalFare,
                paymentStatus: "SUCCESS",
                razorpayPaymentId: payment.razorpay_payment_id,
                razorpayOrderId: payment.razorpay_order_id,
                razorpaySignature: payment.razorpay_signature,
              }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            setSuccessOpen(true);
            resetForm();
          },
          onFailure: () => {
            alert("Payment Failed or Cancelled. You can select 'Pay After Trip' to book without advance payment.");
          },
        });
        return;
      }

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: totalFare,
          paymentStatus: "PENDING",
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Booking submission failed");

      setSuccessOpen(true);
      resetForm();
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Booking submission failed. Please try again or reach us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const estimatedFare = calculateAmount();

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
Please confirm availability and instant quote.`;
    return `https://wa.me/919936408109?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <section
        id="booking-form"
        className="relative overflow-hidden bg-slate-100/80 py-10 sm:py-16 lg:py-20"
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
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-800">
                        <Sparkles size={13} className="text-yellow-600" />
                        Online Reservation
                      </span>
                      <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                        Cab Booking Wizard
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3.5 py-2 border border-slate-200">
                      <Lock size={15} className="text-emerald-600" />
                      <span className="text-xs font-bold text-slate-800">256-Bit Secure</span>
                    </div>
                  </div>

                  {/* Trip Type Selector Pills */}
                  <div className="mt-6">
                    <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-slate-800">
                      Select Service Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
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
                            className={`flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all duration-200 ${
                              isSelected
                                ? "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-700/20 font-bold"
                                : "border-slate-300 bg-white text-slate-800 font-semibold hover:border-blue-400 hover:bg-blue-50/50"
                            }`}
                          >
                            <Icon size={18} className="mb-1" />
                            <span className="text-xs">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="space-y-9">
                  {/* ===================================================
                      STEP 1: RIDE ROUTE & SCHEDULE
                  =================================================== */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        1
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Ride Route & Schedule
                      </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                      <LocationInputs formData={formData} setFormData={setFormData} />

                      {/* Date, Time & Passengers */}
                      <div className="mt-4 pt-4 border-t border-slate-200 grid gap-4 sm:grid-cols-3">
                        {/* Date */}
                        <div>
                          <label className="mb-1.5 block text-xs font-bold text-slate-900">
                            Journey Date <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                              required
                              type="date"
                              name="travelDate"
                              value={formData.travelDate}
                              onChange={handleChange}
                              className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-xs sm:text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                            />
                          </div>
                        </div>

                        {/* Time */}
                        <div>
                          <label className="mb-1.5 block text-xs font-bold text-slate-900">
                            Pickup Time <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                              required
                              type="time"
                              name="travelTime"
                              value={formData.travelTime}
                              onChange={handleChange}
                              className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-xs sm:text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                            />
                          </div>
                        </div>

                        {/* Passengers */}
                        <div>
                          <label className="mb-1.5 block text-xs font-bold text-slate-900">
                            Passengers <span className="text-red-600">*</span>
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                              required
                              type="number"
                              min={1}
                              max={30}
                              name="passengers"
                              value={formData.passengers}
                              onChange={handleChange}
                              className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-xs sm:text-sm font-medium text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===================================================
                      STEP 2: VEHICLE & COMFORT TIER
                  =================================================== */}
                  <div className="border-t border-slate-200 pt-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        2
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
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
                  <div className="border-t border-slate-200 pt-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        3
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Passenger Information
                      </h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-900">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          <input
                            required
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-900">
                          Mobile Number (For Driver SMS) <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-900">
                          Email Address (For PDF Invoice)
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                          />
                        </div>
                      </div>

                      {/* Special Note */}
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-900">
                          Flight No. or Quick Note
                        </label>
                        <input
                          type="text"
                          name="specialNote"
                          value={formData.specialNote}
                          onChange={handleChange}
                          placeholder="e.g. Flight 6E-204, Child seat, Extra luggage"
                          className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ===================================================
                      STEP 4: FARE REVIEW & PAYMENT
                  =================================================== */}
                  <div className="border-t border-slate-200 pt-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        4
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Fare Estimate & Payment Method
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50/70 to-white p-4 sm:p-6 shadow-sm">
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
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-8 font-extrabold text-slate-950 shadow-lg hover:bg-yellow-300 active:scale-98 transition disabled:opacity-50 text-sm sm:text-base cursor-pointer"
                      >
                        {loading ? (
                          "Submitting..."
                        ) : (
                          <>
                            <span>Confirm & Submit Booking</span>
                            <ChevronRight size={18} />
                          </>
                        )}
                      </button>

                      <a
                        href={getWhatsAppBookingUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 font-bold text-white shadow-md hover:bg-emerald-700 active:scale-98 transition text-sm sm:text-base shrink-0"
                      >
                        <MessageCircle size={18} />
                        <span>Instant WhatsApp</span>
                      </a>
                    </div>

                    <p className="mt-4 text-center text-xs text-slate-600">
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
              <BookingSummary formData={formData} fare={estimatedFare} />

              {/* Verified Trust Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Kuldeep Safety Guarantee
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      100% Verified Chauffeurs
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-xs text-slate-800 font-medium">
                  {[
                    "Zero hidden charges or toll surprises",
                    "Sanitized air-conditioned vehicles",
                    "Doorstep pickup on scheduled time",
                    "Active 24×7 customer support desk",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 24x7 Immediate Help Desk */}
              <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-6 text-white shadow-xl">
                <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={13} />
                  <span>24×7 Booking Helpline</span>
                </div>

                <h3 className="mt-2 text-lg sm:text-xl font-bold">
                  Prefer Booking Over Phone?
                </h3>

                <p className="mt-2 text-xs text-blue-100 leading-relaxed">
                  Call our live Lucknow dispatch desk for fast vehicle confirmation.
                </p>

                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href="tel:+919936408109"
                    className="flex h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 text-xs sm:text-sm font-bold text-slate-950 transition hover:bg-yellow-300 active:scale-95"
                  >
                    <PhoneCall size={16} />
                    <span>Call +91 99364 08109</span>
                  </a>

                  <a
                    href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20need%20help%20with%20booking."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-950 active:scale-95 transition"
                  >
                    <MessageCircle size={16} className="text-emerald-400" />
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
      <div className="fixed bottom-0 left-0 right-0 z-40 block border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              Estimated Fare
            </span>
            <span className="text-base font-black text-slate-900">
              ₹{estimatedFare.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919936408109"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 border border-slate-300"
              title="Call Helpline"
            >
              <Phone size={18} />
            </a>

            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 text-xs font-bold text-white shadow"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            <a
              href="#booking-form"
              className="flex h-11 items-center gap-1 rounded-xl bg-yellow-400 px-4 text-xs font-bold text-slate-950 shadow"
            >
              <span>Book</span>
              <ChevronRight size={14} />
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
