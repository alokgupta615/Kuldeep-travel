import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IBooking extends Document {
  bookingId: string;

  customerName: string;
  phone: string;
  email: string;

  pickup: string;
  drop: string;

  travelDate: string;
  travelTime: string;

  passengers: number;

  serviceType: string;

  vehicle: string;

  paymentMethod: string;

  paymentStatus:
    | "PENDING"
    | "PAID"
    | "ADVANCE_PAID"
    | "PAY_AFTER_TRIP";

  bookingStatus:
    | "PENDING"
    | "CONFIRMED"
    | "ASSIGNED"
    | "COMPLETED"
    | "CANCELLED";

  distance: number;

  rate: number;

  baseFare: number;

  toll: number;

  driverAllowance: number;

  gst: number;

  totalFare: number;

  paidAmount: number;

  remainingAmount: number;

  specialNote?: string;

  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    bookingId: {
      type: String,
      unique: true,
      required: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    pickup: {
      type: String,
      required: true,
    },

    drop: {
      type: String,
      required: true,
    },

    travelDate: {
      type: String,
      required: true,
    },

    travelTime: {
      type: String,
      required: true,
    },

    passengers: {
      type: Number,
      default: 1,
    },

    serviceType: {
      type: String,
      required: true,
    },

    vehicle: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: [
        "PENDING",
        "PAID",
        "ADVANCE_PAID",
        "PAY_AFTER_TRIP",
      ],
      default: "PENDING",
    },

    bookingStatus: {
      type: String,
      enum: [
        "PENDING",
        "CONFIRMED",
        "ASSIGNED",
        "COMPLETED",
        "CANCELLED",
      ],
      default: "PENDING",
    },

    distance: Number,

    rate: Number,

    baseFare: Number,

    toll: Number,

    driverAllowance: Number,

    gst: Number,

    totalFare: Number,

    paidAmount: {
      type: Number,
      default: 0,
    },

    remainingAmount: {
      type: Number,
      default: 0,
    },

    specialNote: String,
  },
  {
    timestamps: true,
  }
);

export default models.Booking ||
  model<IBooking>("Booking", BookingSchema);