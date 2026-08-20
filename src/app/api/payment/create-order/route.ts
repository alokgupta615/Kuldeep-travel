import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const amount = Number(body.amount) || 1000;

    if (amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking amount provided.",
        },
        { status: 400 }
      );
    }

    const keyId =
      process.env.RAZORPAY_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY;

    const keySecret =
      process.env.RAZORPAY_KEY_SECRET ||
      process.env.RAZORPAY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Razorpay API Keys are missing. Please configure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your .env.local file.",
        },
        { status: 500 }
      );
    }

    if (keyId.includes("xxxxxxxx") || keySecret.includes("xxxxxxxx")) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Razorpay credentials in .env.local are placeholder values (rzp_test_xxx). Please replace them with your active Razorpay Key ID and Secret from https://dashboard.razorpay.com. Alternatively, you can book using 'Pay After Trip' (0% advance).",
          isPlaceholder: true,
        },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // convert to paise
      currency: "INR",
      receipt: `kt_${Date.now().toString().slice(-8)}`,
    });

    return NextResponse.json(
      {
        success: true,
        order: {
          id: order.id,
          amount: order.amount,
          currency: order.currency,
        },
        key_id: keyId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Razorpay Create Order Error:", error);

    const errorMessage =
      error?.error?.description ||
      error?.message ||
      "Unable to create Razorpay payment order.";

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}