export function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.getElementById("razorpay-script") as HTMLScriptElement | null;
    if (existingScript) {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

export interface PaymentSuccessData {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface OpenRazorpayOptions {
  amount: number;
  customerName: string;
  email?: string;
  phone: string;
  description?: string;
  onSuccess: (payment: PaymentSuccessData) => void;
  onFailure?: (error?: any) => void;
}

export async function openRazorpay({
  amount,
  customerName,
  email,
  phone,
  description = "Taxi Booking - Kuldeep Travels Lucknow",
  onSuccess,
  onFailure,
}: OpenRazorpayOptions) {
  const loaded = await loadRazorpay();

  if (!loaded || !(window as any).Razorpay) {
    throw new Error(
      "Unable to initialize Razorpay checkout. Please check your internet connection or try booking via WhatsApp."
    );
  }

  // Create Order on Server
  const response = await fetch("/api/payment/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  const data = await response.json();

  if (!response.ok || !data.success || !data.order) {
    throw new Error(
      data.message || "Failed to create payment order. Please try again or use Pay After Trip."
    );
  }

  const order = data.order;
  const razorpayKey =
    data.key_id ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY ||
    "rzp_live_TSMNf4d9mKa1bG";

  const options = {
    key: razorpayKey,
    amount: order.amount,
    currency: order.currency || "INR",
    name: "Kuldeep Travels",
    description,
    image: "/logo.png",
    order_id: order.id,
    prefill: {
      name: customerName,
      email: email || "",
      contact: phone || "",
    },
    notes: {
      customerName,
      phone,
    },
    handler: async function (paymentResponse: PaymentSuccessData) {
      try {
        // Verify payment signature on the backend
        const verifyRes = await fetch("/api/payment/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentResponse),
        });

        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
          throw new Error(verifyData.message || "Payment signature verification failed");
        }

        onSuccess(paymentResponse);
      } catch (verifyError: any) {
        console.error("Payment verification error:", verifyError);
        alert(
          "Payment was processed, but signature verification encountered an issue. Please contact support with Payment ID: " +
            paymentResponse.razorpay_payment_id
        );
      }
    },
    modal: {
      ondismiss: () => {
        if (onFailure) onFailure({ reason: "dismissed" });
      },
    },
    theme: {
      color: "#1d4ed8",
    },
  };

  const paymentObject = new (window as any).Razorpay(options);

  paymentObject.on("payment.failed", function (response: any) {
    console.error("Razorpay Payment Failed:", response.error);
    const failureMsg =
      response?.error?.description ||
      response?.error?.reason ||
      "Payment could not be completed.";
    alert(`Payment Failed: ${failureMsg}`);
    if (onFailure) onFailure(response?.error);
  });

  paymentObject.open();
}