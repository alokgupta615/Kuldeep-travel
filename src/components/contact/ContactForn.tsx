"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  MessageSquare,
  Send,
  ShieldCheck,
  Clock3,
  Star,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    travelDate: "",
    passengers: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(formData);

    setLoading(false);
    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      pickup: "",
      destination: "",
      travelDate: "",
      passengers: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">

      {/* Decorative Background */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
              Contact Kuldeep Travels
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Let's Plan Your
              <span className="block text-blue-700">
                Perfect Journey
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you need a local taxi, airport transfer, outstation cab,
              Tempo Traveller, luxury bus, or a customized holiday package,
              our travel experts are ready to assist you with the best vehicle
              and transparent pricing.
            </p>

            {/* Rating */}

            <div className="mt-8 flex items-center gap-3">

              <div className="flex">

                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <span className="font-semibold text-slate-800">
                Trusted by Thousands of Happy Travellers
              </span>

            </div>

            {/* Features */}

            <div className="mt-10 space-y-5">

              {[
                "Professional & Verified Drivers",
                "24×7 Customer Support",
                "Transparent Fixed Pricing",
                "Sanitized & Well Maintained Vehicles",
                "Instant Booking Confirmation",
                "Safe & Comfortable Journey",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <CheckCircle2 size={20} />
                  </div>

                  <p className="text-slate-700 font-medium">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

                <ShieldCheck className="mx-auto text-blue-700" />

                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  100%
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Safe Travel
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

                <Clock3 className="mx-auto text-blue-700" />

                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  24×7
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Support
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

                <Users className="mx-auto text-blue-700" />

                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  10K+
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Happy Riders
                </p>

              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)] lg:p-10">

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" />

            <div className="mb-8">

              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                Quick Booking
              </span>

              <h3 className="mt-5 text-3xl font-bold text-slate-900">
                Request a Free Quote
              </h3>

              <p className="mt-3 text-slate-600">
                Complete the form below and our travel expert will contact you
                within 15 minutes.
              </p>

            </div>

            {success && (

              <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">

                ✅ Thank you! Your inquiry has been submitted successfully.
                Our team will contact you shortly.

              </div>

            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid gap-5 md:grid-cols-2">

                <InputField
                  icon={<User size={18} />}
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <InputField
                  icon={<Phone size={18} />}
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <InputField
                  icon={<Mail size={18} />}
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <InputField
                  icon={<Calendar size={18} />}
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
                                <InputField
                  icon={<MapPin size={18} />}
                  placeholder="Pickup Location"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                />

                <InputField
                  icon={<MapPin size={18} />}
                  placeholder="Destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                />

                <InputField
                  icon={<Users size={18} />}
                  placeholder="Number of Passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                />

                <div className="relative">

                  <div className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Briefcase size={18} />
                  </div>

                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-16 pr-4 text-slate-700 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">Select Service</option>
                    <option>Airport Pickup & Drop</option>
                    <option>Local Taxi</option>
                    <option>One Way Taxi</option>
                    <option>Round Trip Taxi</option>
                    <option>Outstation Taxi</option>
                    <option>Tempo Traveller</option>
                    <option>Luxury Bus Rental</option>
                    <option>Senior Citizen Travel</option>
                    <option>Corporate Travel</option>
                    <option>Wedding Car Rental</option>
                    <option>Religious Tour Package</option>
                    <option>Family Tour Package</option>
                    <option>Weekend Getaway</option>
                    <option>Custom Tour Package</option>
                  </select>

                </div>

              </div>

              {/* Message */}

              <div className="relative">

                <div className="absolute left-4 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <MessageSquare size={18} />
                </div>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us about your travel requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-16 pr-4 text-slate-700 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>

              {/* Trust Note */}

              <div className="rounded-2xl bg-blue-50 p-5">

                <div className="flex items-start gap-3">

                  <ShieldCheck
                    className="mt-1 text-blue-700"
                    size={22}
                  />

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      Why Book with Kuldeep Travels?
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      ✔ Transparent Pricing &nbsp; • &nbsp;
                      ✔ No Hidden Charges &nbsp; • &nbsp;
                      ✔ Verified Drivers &nbsp; • &nbsp;
                      ✔ Clean Vehicles &nbsp; • &nbsp;
                      ✔ 24×7 Customer Support
                    </p>

                  </div>

                </div>

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />

                {loading ? "Sending..." : "Get Free Quote"}

              </button>

              {/* WhatsApp */}

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-green-200 bg-green-50 py-4 font-semibold text-green-700 transition hover:bg-green-100"
              >
                <MessageCircle size={22} />

                Book Instantly on WhatsApp

              </a>

            </form>

          </div>

        </div>

      </div>

    </section>

  );
}

type InputProps = {
  icon: React.ReactNode;
  placeholder?: string;
  type?: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function InputField({
  icon,
  placeholder,
  type = "text",
  name,
  value,
  required,
  onChange,
}: InputProps) {
  return (
    <div className="relative">

      <div className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-blue-100 text-blue-700">
        {icon}
      </div>

      <input
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-16 pr-4 text-slate-700 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
      />

    </div>
  );
}