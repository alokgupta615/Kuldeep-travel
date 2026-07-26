import { NextRequest, NextResponse } from "next/server";
import razorpay from "@/lib/razorpay";

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Amount",
        },
        { status: 400 }
      );
    }

    const options = {
      amount: amount * 100, // INR → Paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      payment_capture: true,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create order",
      },
      { status: 500 }
    );
  }
}