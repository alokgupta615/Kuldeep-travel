import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getRazorpayCredentials } from "@/lib/razorpayConfig";

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

    const { keyId, keySecret } = getRazorpayCredentials();

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