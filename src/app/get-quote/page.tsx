"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:kuldeeptravelslko@gmail.com?subject=Get Quote Request&body=Name: ${formData.name}%0D%0ADate: ${formData.date}%0D%0ADetails: ${formData.details}`;
    window.location.href = mailto;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Get a Customized Quote
            </h1>
            <p className="mt-4 text-gray-600">
              Provide your details below and we will get back to you with the
              best pricing for your journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Travel Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700"
              >
                Journey Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                value={formData.details}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
                placeholder="Where do you want to go? Number of passengers? Vehicle type preference?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              <Send size={20} />
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
