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
} from "lucide-react";

export default function ContactForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace this with your API / Email service
    console.log(formData);

    alert("Your inquiry has been submitted!");

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Content */}

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Contact Form
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Send Us Your Travel Requirements
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Planning a local ride, airport transfer, outstation journey,
              family vacation, corporate travel, or a customized tour package?
              Fill out the form and our team will contact you with vehicle
              availability and a personalized quotation.
            </p>

            <div className="mt-10 space-y-6">

              {[
                "Local Cab Service in Lucknow",
                "Airport Pickup & Drop",
                "Outstation Taxi Booking",
                "One Way & Round Trip",
                "Tempo Traveller Booking",
                "Luxury Bus Rental",
                "Corporate Travel",
                "Family Tour Packages",
                "Pilgrimage Tour Packages",
                "Customized Tour Packages",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}

            </div>

          </div>

          {/* Form */}

          <div className="bg-gray-50 rounded-3xl shadow-lg p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <InputField
                  icon={<User size={18} />}
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <InputField
                  icon={<Phone size={18} />}
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                  placeholder="Passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                />

                <div className="relative">

                  <Briefcase
                    className="absolute left-4 top-4 text-gray-400"
                    size={18}
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                  >
                    <option value="">
                      Select Service
                    </option>

                    <option>Local Cab</option>

                    <option>Airport Transfer</option>

                    <option>Outstation Taxi</option>

                    <option>Tempo Traveller</option>

                    <option>Luxury Bus</option>

                    <option>Tour Package</option>

                    <option>Corporate Travel</option>

                  </select>

                </div>

              </div>

              <div className="relative">

                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us about your travel requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600 resize-none"
                />

              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-800"
              >
                <Send size={18} />
                Send Inquiry
              </button>

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
  onChange,
}: InputProps) {
  return (
    <div className="relative">

      <div className="absolute left-4 top-4 text-gray-400">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600"
      />

    </div>
  );
}