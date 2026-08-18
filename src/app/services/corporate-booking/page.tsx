"use client";
import Link from "next/link";
import { Briefcase, Building, ShieldCheck, Users } from "lucide-react";

export default function CorporateBookingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Corporate Travel Solutions</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Reliable, professional, and comfortable transportation services for your business needs.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us For Corporate Travel?</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Kuldeep Travels provides top-notch corporate car rental services in Lucknow. We understand that business travel requires punctuality, comfort, and professionalism. Whether it's airport transfers for executives, daily employee commuting, or transportation for corporate events, we have the right fleet for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Briefcase className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Executive Rides</h3>
                    <p className="text-gray-600 text-sm mt-1">Premium sedans and SUVs for VIP guests and executives.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Users className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Group Commute</h3>
                    <p className="text-gray-600 text-sm mt-1">Buses and Tempo Travellers for team outings or employee transport.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Building className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Monthly Billing</h3>
                    <p className="text-gray-600 text-sm mt-1">Transparent and hassle-free monthly billing for corporate accounts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Safety First</h3>
                    <p className="text-gray-600 text-sm mt-1">Background-verified drivers and well-maintained sanitized vehicles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner With Us</h3>
              <p className="text-gray-600 mb-8">Get a customized corporate travel plan tailored to your company's requirements.</p>
              
              <div className="flex flex-col gap-4">
                <Link 
                  href="/book-now" 
                  className="w-full text-center bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition"
                >
                  Book Now
                </Link>
                <Link 
                  href="/get-quote" 
                  className="w-full text-center bg-yellow-400 text-gray-900 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
