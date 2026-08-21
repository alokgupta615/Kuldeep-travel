import Razorpay from "razorpay";
import { getRazorpayCredentials } from "./razorpayConfig";

let razorpay: Razorpay | null = null;

export function getRazorpay() {
  if (razorpay) {
    return razorpay;
  }

  const { keyId, keySecret } = getRazorpayCredentials();

  razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });

  return razorpay;
}