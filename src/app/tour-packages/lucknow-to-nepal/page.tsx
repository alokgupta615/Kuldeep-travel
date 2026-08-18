"use client";
import Link from "next/link";
import { MapPin, Calendar, Clock, Navigation } from "lucide-react";

export default function LucknowToNepalPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lucknow to Nepal Tour Package</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the majestic Himalayas, beautiful temples, and rich culture with our specialized Nepal tour from Lucknow.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our customized Lucknow to Nepal tour packages cover top destinations including Kathmandu, Pokhara, Chitwan, and Lumbini. Enjoy hassle-free border crossing, comfortable transportation, and local sightseeing with experienced drivers.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-50">
                  <Clock className="text-blue-700" />
                  <span className="font-semibold">Duration</span>
                  <span className="text-sm text-gray-600">5-7 Days</span>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-50">
                  <Navigation className="text-blue-700" />
                  <span className="font-semibold">Start Point</span>
                  <span className="text-sm text-gray-600">Lucknow</span>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-50">
                  <MapPin className="text-blue-700" />
                  <span className="font-semibold">Destinations</span>
                  <span className="text-sm text-gray-600">Kathmandu, Pokhara</span>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-50">
                  <Calendar className="text-blue-700" />
                  <span className="font-semibold">Availability</span>
                  <span className="text-sm text-gray-600">Year Round</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Trip</h3>
              <p className="text-gray-600 mb-8">Contact us for customized itineraries and pricing for your Nepal tour.</p>
              
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
