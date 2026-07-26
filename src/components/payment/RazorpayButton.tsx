"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";

interface Props {
  amount: number;
  bookingData: any;
  onSuccess?: (paymentId: string) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayButton({
  amount,
  bookingData,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const loadScript = () => {
    return new Promise<boolean>((resolve) => {
      if (document.getElementById("razorpay-script")) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    const loaded = await loadScript();

    if (!loaded) {
      alert("Unable to load Razorpay.");
      setLoading(false);
      return;
    }

    // Create Order
    const orderRes = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    });

    const orderData = await orderRes.json();

    if (!orderData.success) {
      alert("Unable to create payment.");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,

      amount: orderData.order.amount,

      currency: orderData.order.currency,

      name: "Kuldeep Travels",

      description: "Cab Booking",

      image: "/logo.png",

      order_id: orderData.order.id,

      handler: async function (response: any) {
        const verify = await fetch("/api/verify-payment", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(response),
        });

        const result = await verify.json();

        if (!result.success) {
          alert("Payment Verification Failed");
          setLoading(false);
          return;
        }

        // Save Booking
        const bookingRes = await fetch("/api/bookings", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...bookingData,

            paymentStatus: "PAID",

            paidAmount: amount,

            remainingAmount: 0,

            razorpayOrderId: response.razorpay_order_id,

            razorpayPaymentId: response.razorpay_payment_id,
          }),
        });

        const booking = await bookingRes.json();

        if (booking.success) {
          onSuccess?.(response.razorpay_payment_id);

          window.location.href =
            "/payment/success?booking=" +
            booking.booking.bookingId;
        } else {
          alert("Booking could not be saved.");
        }

        setLoading(false);
      },

      prefill: {
        name: bookingData.customerName,

        email: bookingData.email,

        contact: bookingData.phone,
      },

      notes: {
        pickup: bookingData.pickup,

        destination: bookingData.drop,
      },

      theme: {
        color: "#1e40af",
      },

      modal: {
        ondismiss() {
          setLoading(false);
        },
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
  };

  return (
    <button
      type="button"
      disabled={loading}
      onClick={handlePayment}
      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-900 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          Processing...
        </>
      ) : (
        <>
          <CreditCard size={20} />
          Pay ₹{amount}
        </>
      )}
    </button>
  );
}