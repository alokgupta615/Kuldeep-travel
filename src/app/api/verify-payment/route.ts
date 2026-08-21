import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getRazorpayCredentials } from "@/lib/razorpayConfig";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing payment parameters.",
        },
        { status: 400 }
      );
    }

    const { keySecret } = getRazorpayCredentials();

    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    return NextResponse.json({
      success: isAuthentic,
      message: isAuthentic ? "Payment verified" : "Invalid signature",
    });
  } catch (error: any) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal server error during verification",
      },
      { status: 500 }
    );
  }
}