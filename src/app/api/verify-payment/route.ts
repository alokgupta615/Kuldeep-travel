import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await req.json();

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_SECRET!
      )
      .update(body)
      .digest("hex");

    const isAuthentic =
      expectedSignature === razorpay_signature;

    return NextResponse.json({
      success: isAuthentic,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}