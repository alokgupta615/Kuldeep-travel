import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
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
          message: "Missing required payment verification parameters.",
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

    if (isAuthentic) {
      return NextResponse.json({
        success: true,
        message: "Payment verified successfully.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Payment signature verification failed.",
      },
      {
        status: 400,
      }
    );
  } catch (err: any) {
    console.error("Payment verify error:", err);

    return NextResponse.json(
      {
        success: false,
        message: err.message || "Payment verification encountered an internal error.",
      },
      {
        status: 500,
      }
    );
  }
}