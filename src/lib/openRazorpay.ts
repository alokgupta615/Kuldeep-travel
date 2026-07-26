declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  amount: number;

  customerName: string;

  email: string;

  phone: string;

  onSuccess: (payment: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;

  onFailure?: () => void;
}

export async function openRazorpay({
  amount,
  customerName,
  email,
  phone,
  onSuccess,
  onFailure,
}: RazorpayOptions) {
  try {
    // Create Order
    const orderResponse = await fetch(
      "/api/payment/create-order",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          amount,
        }),
      }
    );

    const order = await orderResponse.json();

    if (!order.success) {
      throw new Error("Unable to create Razorpay Order");
    }

    // Razorpay Options
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      order_id: order.id,

      name: "Kuldeep Travels",

      description: "Taxi Booking Payment",

      image: "/logo.png",

      handler: function (response: any) {
        onSuccess(response);
      },

      prefill: {
        name: customerName,

        email,

        contact: phone,
      },

      notes: {
        company: "Kuldeep Travels",
      },

      theme: {
        color: "#FACC15",
      },

      modal: {
        ondismiss: function () {
          if (onFailure) {
            onFailure();
          }
        },
      },
    };

    const razor = new window.Razorpay(options);

    razor.open();
  } catch (error) {
    console.error(error);

    alert("Unable to open payment gateway.");

    if (onFailure) {
      onFailure();
    }
  }
}