import { NextRequest, NextResponse } from "next/server";

import {
  sendOwnerEmail,
  sendCustomerEmail,
} from "@/lib/mailer";

import {
  sendOwnerWhatsapp,
  sendCustomerWhatsapp,
} from "@/lib/whatsapp";

// ==============================================
// Generate Booking ID
// ==============================================

function generateBookingID() {
  return `KT${Date.now().toString().slice(-8)}`;
}

// ==============================================
// Booking API
// ==============================================

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    let computedPaymentStatus = "Pending";
    if (data.paymentStatus) {
      computedPaymentStatus = data.paymentStatus;
    } else if (data.payment === "PAY_NOW") {
      computedPaymentStatus = "Paid";
    } else if (data.payment === "ADVANCE") {
      computedPaymentStatus = "Advance Paid (20%)";
    }

    const booking = {
      bookingId: generateBookingID(),

      bookingDate: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }),

      bookingStatus: "Confirmed",

      paymentStatus: computedPaymentStatus,

      ...data,
    };

    console.log("==================================");
    console.log("🚖 NEW BOOKING RECEIVED");
    console.log(booking);
    console.log("==================================");

    // =========================================
    // Email Notifications
    // =========================================

    try {
      await sendOwnerEmail(booking);
      console.log("✅ Owner Email Sent");
    } catch (error) {
      console.error("❌ Owner Email Failed", error);
    }

    try {
      if (booking.email) {
        await sendCustomerEmail(booking);
        console.log("✅ Customer Email Sent");
      }
    } catch (error) {
      console.error("❌ Customer Email Failed", error);
    }

    // =========================================
    // WhatsApp Notifications
    // =========================================

    try {
      await sendOwnerWhatsapp(booking);
      console.log("✅ Owner WhatsApp Sent");
    } catch (error) {
      console.error("❌ Owner WhatsApp Failed", error);
    }

    try {
      if (booking.phone) {
        await sendCustomerWhatsapp(booking);
        console.log("✅ Customer WhatsApp Sent");
      }
    } catch (error) {
      console.error("❌ Customer WhatsApp Failed", error);
    }

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully.",
      booking,
    });

  } catch (error: any) {
    console.error("Booking API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}