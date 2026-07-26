import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const amount = body.amount || 1000;


    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: "INR",
      receipt: `booking_${Date.now()}`,
    });


    return NextResponse.json(
      {
        success: true,
        order,
      },
      {
        status: 200,
      }
    );


  } catch (error) {

    console.log("Razorpay Error:", error);


    return NextResponse.json(
      {
        success: false,
        message: "Unable to create payment order",
      },
      {
        status: 500,
      }
    );

  }
}