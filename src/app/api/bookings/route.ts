import { NextRequest, NextResponse } from "next/server";

import { sendOwnerEmail } from "@/lib/mailer";
import { sendCustomerEmail } from "@/lib/mailer";

import { sendOwnerWhatsapp } from "@/lib/whatsapp";
import { sendCustomerWhatsapp } from "@/lib/whatsapp";

function generateBookingID() {
  return "KT" + Date.now().toString().slice(-8);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const booking = {
      bookingId: generateBookingID(),
      bookingDate: new Date().toLocaleString("en-IN"),

      paymentStatus:
        data.payment === "PAY_AFTER_TRIP"
          ? "Pending"
          : "Paid",

      bookingStatus: "Pending",

      ...data,
    };

    console.log("========== NEW BOOKING ==========");
    console.log(booking);

    // Email Notifications
    // await sendOwnerEmail(booking);
    // await sendCustomerEmail(booking);

    // // WhatsApp Notifications
    // await sendOwnerWhatsapp(booking);
    // await sendCustomerWhatsapp(booking);


    try {
  await sendOwnerEmail(booking);
} catch (e) {
  console.error("Owner email failed:", e);
}

try {
  await sendCustomerEmail(booking);
} catch (e) {
  console.error("Customer email failed:", e);
}

try {
  await sendOwnerWhatsapp(booking);
} catch (e) {
  console.error("Owner WhatsApp failed:", e);
}

try {
  await sendCustomerWhatsapp(booking);
} catch (e) {
  console.error("Customer WhatsApp failed:", e);
}

return NextResponse.json({
  success: true,
  booking,
});

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}