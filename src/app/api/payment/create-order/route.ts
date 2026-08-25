import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getRazorpayCredentials } from "@/lib/razorpayConfig";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawAmount = Number(body.amount);
    const amount = !isNaN(rawAmount) && rawAmount > 0 ? rawAmount : 1000;

    if (amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking amount provided.",
        },
        { status: 400 }
      );
    }

    const { keyId, keySecret } = getRazorpayCredentials();

    if (!keyId || !keySecret) {
      console.error(
        "[Razorpay Error] RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET is not configured in live hosting environment variables."
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Razorpay API credentials are not configured on the live server. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your hosting dashboard (e.g. Vercel/Render Environment Settings).",
        },
        { status: 500 }
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
      error?.error?.reason ||
      error?.message ||
      "Unable to create Razorpay payment order. Please verify your Razorpay Live account status.";

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}