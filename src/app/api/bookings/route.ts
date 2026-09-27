import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import BookingModel from "@/models/Booking";
import {
  sendOwnerEmail,
  sendCustomerEmail,
} from "@/lib/mailer";

import {
  sendOwnerWhatsapp,
  sendCustomerWhatsapp,
} from "@/lib/whatsapp";

// Global in-memory fallback store for serverless executions where DB is connecting or offline
declare global {
  // eslint-disable-next-line no-var
  var serverBookingsStore: any[] | undefined;
}

if (!global.serverBookingsStore) {
  global.serverBookingsStore = [];
}

// Generate Booking ID
function generateBookingID() {
  return `KT${Date.now().toString().slice(-8)}`;
}

// ==============================================
// GET: Fetch all bookings (Admin & Frontend sync)
// ==============================================
export async function GET() {
  try {
    const db = await connectDB();
    if (db) {
      const dbBookings = await BookingModel.find({}).sort({ createdAt: -1 }).lean();
      return NextResponse.json({
        success: true,
        source: "database",
        bookings: dbBookings,
      });
    }

    return NextResponse.json({
      success: true,
      source: "memory",
      bookings: global.serverBookingsStore || [],
    });
  } catch (error: any) {
    console.error("GET /api/bookings error:", error);
    return NextResponse.json({
      success: true,
      source: "fallback",
      bookings: global.serverBookingsStore || [],
    });
  }
}

// ==============================================
// POST: Create a new booking
// ==============================================
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    let computedPaymentStatus = "PENDING";
    if (data.paymentStatus) {
      computedPaymentStatus = data.paymentStatus;
    } else if (data.payment === "PAY_NOW") {
      computedPaymentStatus = "PAID";
    } else if (data.payment === "ADVANCE") {
      computedPaymentStatus = "ADVANCE_PAID";
    }

    const bookingId = data.bookingId || generateBookingID();
    const totalFare = Number(data.totalFare || data.amount || 0);
    const paidAmount = Number(data.paidAmount || 0);
    const remainingAmount = Math.max(0, totalFare - paidAmount);

    const newBookingObject = {
      bookingId,
      customerName: data.customerName || "Customer",
      phone: data.phone || "",
      email: data.email || "",
      pickup: data.pickup || "",
      drop: data.drop || "",
      travelDate: data.travelDate || new Date().toISOString().split("T")[0],
      travelTime: data.travelTime || "08:00 AM",
      passengers: Number(data.passengers) || 1,
      serviceType: data.serviceType || "One Way",
      vehicle: data.vehicle || "Swift Dzire",
      paymentMethod: data.paymentMethod || data.payment || "Cash on Arrival",
      paymentStatus: computedPaymentStatus,
      bookingStatus: data.bookingStatus || "CONFIRMED",
      distance: Number(data.distance) || 0,
      rate: Number(data.rate) || 12,
      baseFare: Number(data.baseFare) || totalFare,
      totalFare,
      paidAmount,
      remainingAmount,
      specialNote: data.specialNote || "",
      driverName: data.driverName || "",
      driverPhone: data.driverPhone || "",
      vehicleNumber: data.vehicleNumber || "",
      createdAt: new Date(),
    };

    // 1. Try to save to MongoDB
    try {
      const db = await connectDB();
      if (db) {
        await BookingModel.create(newBookingObject);
      }
    } catch (dbErr) {
      console.warn("Could not save to MongoDB, saving to server memory store:", dbErr);
    }

    // 2. Add to server-side memory store
    if (!global.serverBookingsStore) global.serverBookingsStore = [];
    global.serverBookingsStore = [newBookingObject, ...global.serverBookingsStore];

    console.log("==================================");
    console.log("🚖 NEW BOOKING RECEIVED & SAVED");
    console.log(newBookingObject);
    console.log("==================================");

    // 3. Email Notifications
    try {
      await sendOwnerEmail(newBookingObject);
      console.log("✅ Owner Email Sent");
    } catch (error) {
      console.error("❌ Owner Email Failed", error);
    }

    try {
      if (newBookingObject.email) {
        await sendCustomerEmail(newBookingObject);
        console.log("✅ Customer Email Sent");
      }
    } catch (error) {
      console.error("❌ Customer Email Failed", error);
    }

    // 4. WhatsApp Notifications
    try {
      await sendOwnerWhatsapp(newBookingObject);
      console.log("✅ Owner WhatsApp Sent");
    } catch (error) {
      console.error("❌ Owner WhatsApp Failed", error);
    }

    try {
      if (newBookingObject.phone) {
        await sendCustomerWhatsapp(newBookingObject);
        console.log("✅ Customer WhatsApp Sent");
      }
    } catch (error) {
      console.error("❌ Customer WhatsApp Failed", error);
    }

    return NextResponse.json({
      success: true,
      message: "Booking submitted and saved successfully.",
      booking: newBookingObject,
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

// ==============================================
// PUT: Update a booking (status, driver, payment)
// ==============================================
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();
    const { bookingId, ...updates } = data;

    if (!bookingId) {
      return NextResponse.json({ success: false, message: "bookingId is required" }, { status: 400 });
    }

    // Update in MongoDB
    try {
      const db = await connectDB();
      if (db) {
        await BookingModel.findOneAndUpdate({ bookingId }, { $set: updates });
      }
    } catch (dbErr) {
      console.warn("MongoDB update error:", dbErr);
    }

    // Update in memory store
    if (global.serverBookingsStore) {
      const idx = global.serverBookingsStore.findIndex((b) => b.bookingId === bookingId || b.id === bookingId);
      if (idx !== -1) {
        global.serverBookingsStore[idx] = { ...global.serverBookingsStore[idx], ...updates };
      }
    }

    return NextResponse.json({ success: true, message: "Booking updated successfully." });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// ==============================================
// DELETE: Remove a booking
// ==============================================
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const bookingId = searchParams.get("bookingId") || searchParams.get("id");

    if (!bookingId) {
      return NextResponse.json({ success: false, message: "bookingId is required" }, { status: 400 });
    }

    // Delete in MongoDB
    try {
      const db = await connectDB();
      if (db) {
        await BookingModel.findOneAndDelete({ bookingId });
      }
    } catch (dbErr) {
      console.warn("MongoDB delete error:", dbErr);
    }

    // Delete in memory store
    if (global.serverBookingsStore) {
      global.serverBookingsStore = global.serverBookingsStore.filter(
        (b) => b.bookingId !== bookingId && b.id !== bookingId
      );
    }

    return NextResponse.json({ success: true, message: "Booking deleted successfully." });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}