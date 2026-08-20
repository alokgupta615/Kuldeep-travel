"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import { loadRazorpay } from "@/lib/openRazorpay";

interface Props {
  amount: number;
  bookingData: any;
  onSuccess?: (paymentId: string) => void;
}

export default function RazorpayButton({
  amount,
  bookingData,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const loaded = await loadRazorpay();

      if (!loaded || !(window as any).Razorpay) {
        alert("Unable to load Razorpay. Please check your internet connection.");
        setLoading(false);
        return;
      }

      // Create Order
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success || !orderData.order) {
        alert(orderData.message || "Unable to create payment order.");
        setLoading(false);
        return;
      }

      const order = orderData.order;
      const razorpayKey =
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
        process.env.NEXT_PUBLIC_RAZORPAY_KEY ||
        orderData.key_id;

      if (!razorpayKey) {
        alert("Razorpay Key ID is not configured in .env.local.");
        setLoading(false);
        return;
      }

      const options = {
        key: razorpayKey,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "Kuldeep Travels",
        description: "Cab Booking - Kuldeep Travels",
        image: "/logo.png",
        order_id: order.id,

        handler: async function (response: any) {
          try {
            const verify = await fetch("/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            const result = await verify.json();

            if (!result.success) {
              alert("Payment Verification Failed: " + (result.message || "Invalid signature"));
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
                paymentStatus: "Paid",
                paidAmount: amount,
                remainingAmount: 0,
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });

            const booking = await bookingRes.json();

            if (booking.success) {
              onSuccess?.(response.razorpay_payment_id);
              window.location.href =
                "/payment/success?booking=" +
                (booking.booking?.bookingId || "KT-CONFIRMED");
            } else {
              alert("Booking could not be saved.");
            }
          } catch (err: any) {
            console.error("Booking verification error:", err);
            alert("Error verifying payment: " + err.message);
          } finally {
            setLoading(false);
          }
        },

        prefill: {
          name: bookingData?.customerName || "",
          email: bookingData?.email || "",
          contact: bookingData?.phone || "",
        },

        notes: {
          pickup: bookingData?.pickup || "",
          destination: bookingData?.drop || "",
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

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      console.error("Payment error:", error);
      alert(error.message || "Payment encountered an error.");
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      disabled={loading}
      onClick={handlePayment}
      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-900 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50 cursor-pointer"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          Processing...
        </>
      ) : (
        <>
          <CreditCard size={20} />
          Pay ₹{amount.toLocaleString("en-IN")}
        </>
      )}
    </button>
  );
}