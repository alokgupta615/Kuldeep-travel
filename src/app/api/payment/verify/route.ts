import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(
        razorpay_order_id +
          "|" +
          razorpay_payment_id
      )
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 400,
      }
    );
  } catch (err: any) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}