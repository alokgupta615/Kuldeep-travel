import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IPayment extends Document {
  bookingId: string;

  razorpayOrderId: string;

  razorpayPaymentId: string;

  razorpaySignature: string;

  amount: number;

  currency: string;

  method: string;

  status:
    | "CREATED"
    | "SUCCESS"
    | "FAILED";

  createdAt: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    bookingId: {
      type: String,
      required: true,
    },

    razorpayOrderId: String,

    razorpayPaymentId: String,

    razorpaySignature: String,

    amount: Number,

    currency: {
      type: String,
      default: "INR",
    },

    method: String,

    status: {
      type: String,
      enum: [
        "CREATED",
        "SUCCESS",
        "FAILED",
      ],
      default: "CREATED",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Payment ||
  model<IPayment>("Payment", PaymentSchema);