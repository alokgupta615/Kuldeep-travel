/**
 * Centralized Razorpay configuration with production credentials
 */

const DEFAULT_KEY_ID = "rzp_live_TSMNf4d9mKa1bG";
const DEFAULT_KEY_SECRET = "Sv9S5p2gHXbVrwFAW2CYJWIS";

export function getRazorpayCredentials() {
  let keyId =
    process.env.RAZORPAY_KEY_ID ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY;

  let keySecret =
    process.env.RAZORPAY_KEY_SECRET ||
    process.env.RAZORPAY_SECRET;

  if (!keyId || keyId.includes("xxxxxxxx") || keyId.trim().length === 0) {
    keyId = DEFAULT_KEY_ID;
  }

  if (!keySecret || keySecret.includes("xxxxxxxx") || keySecret.trim().length === 0) {
    keySecret = DEFAULT_KEY_SECRET;
  }

  return { keyId: keyId.trim(), keySecret: keySecret.trim() };
}
