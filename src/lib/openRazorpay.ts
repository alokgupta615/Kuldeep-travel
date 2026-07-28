import Razorpay from "razorpay";

export function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
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
}

interface OpenRazorpayOptions {
  amount: number;
  customerName: string;
  email: string;
  phone: string;
  onSuccess: (payment: any) => void;
  onFailure: () => void;
}

export async function openRazorpay({
  amount,
  customerName,
  email,
  phone,
  onSuccess,
  onFailure,
}: OpenRazorpayOptions) {
  const loaded = await loadRazorpay();

  if (!loaded) {
    throw new Error("Unable to load Razorpay.");
  }

  const response = await fetch("/api/payment/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  const order = await response.json();

  if (!response.ok) {
    throw new Error(order.message || "Unable to create order.");
  }

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Kuldeep Travels",
    description: "Taxi Booking",
    order_id: order.id,
    prefill: {
      name: customerName,
      email,
      contact: phone,
    },
    handler: onSuccess,
    modal: {
      ondismiss: onFailure,
    },
    theme: {
      color: "#2563eb",
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
}