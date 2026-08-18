"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Link from "next/link";

export default function GetQuoteForm() {
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
    <section className="bg-gray-50 py-20" id="get-quote-form">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Get a Customized Quote
            </h2>
            <p className="mt-4 text-gray-600">
              Provide your details below and we will get back to you with the
              best pricing for your journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Travel Date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900" />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">Journey Details</label>
              <textarea id="details" name="details" rows={4} value={formData.details} onChange={handleChange} required className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none text-gray-900" placeholder="Where do you want to go? Number of passengers?"></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
               <button type="submit" className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800">
                 <Send size={20} />
                 Submit Quote Request
               </button>
               <Link href="/book-now" className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-300">
                 Book Now
               </Link>
            </div>
            
            <div className="text-center mt-4">
                <Link href="/get-quote" className="text-blue-600 hover:underline text-sm font-medium">Or visit our dedicated Get Quote page</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
