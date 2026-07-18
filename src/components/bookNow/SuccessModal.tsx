"use client";

import Link from "next/link";
import { CheckCircle2, Mail, MessageCircle, Home } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  open,
  onClose,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-center text-white">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">
            <CheckCircle2
              size={48}
              className="text-green-600"
            />
          </div>

          <h2 className="mt-6 text-3xl font-bold">
            Booking Submitted!
          </h2>

          <p className="mt-3 text-green-100">
            Thank you for choosing Kuldeep Travels.
          </p>

        </div>

        {/* Content */}

        <div className="space-y-6 p-8">

          <p className="text-center leading-7 text-slate-600">
            Your booking request has been received successfully.
            Our team will verify your details and confirm your booking
            shortly.
          </p>

          <div className="rounded-2xl bg-slate-50 p-5">

            <h3 className="mb-4 text-lg font-bold">
              What happens next?
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-yellow-100 p-3">
                  <MessageCircle className="text-yellow-600" />
                </div>

                <div>

                  <h4 className="font-semibold">
                    WhatsApp Confirmation
                  </h4>

                  <p className="text-sm text-slate-500">
                    You'll receive booking confirmation and driver details
                    on WhatsApp.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-blue-100 p-3">
                  <Mail className="text-blue-600" />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Email Confirmation
                  </h4>

                  <p className="text-sm text-slate-500">
                    A confirmation email will be sent once the admin
                    approves your booking.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="grid gap-4 sm:grid-cols-2">

            <button
              onClick={onClose}
              className="rounded-xl bg-yellow-400 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Close
            </button>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 font-semibold transition hover:bg-slate-100"
            >
              <Home size={18} />
              Back to Home
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}