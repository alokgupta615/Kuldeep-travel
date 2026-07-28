import Razorpay from "razorpay";

let razorpay: Razorpay | null = null;

export function getRazorpay() {
  if (razorpay) {
    return razorpay;
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("Razorpay keys are missing.");
  }

  razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });

  return razorpay;
}