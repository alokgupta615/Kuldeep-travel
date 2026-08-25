/**
 * Centralized Razorpay configuration loaded securely from environment variables.
 * In production (e.g. Render / Vercel), set:
 *   - RAZORPAY_KEY_ID (or NEXT_PUBLIC_RAZORPAY_KEY_ID)
 *   - RAZORPAY_KEY_SECRET (or RAZORPAY_SECRET)
 */

export function getRazorpayCredentials() {
  const keyId =
    process.env.RAZORPAY_KEY_ID ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY ||
    process.env.RAZORPAY_KEY ||
    "rzp_live_TSMNf4d9mKa1bG";

  const keySecret =
    process.env.RAZORPAY_KEY_SECRET ||
    process.env.RAZORPAY_SECRET ||
    process.env.RAZORPAY_API_SECRET ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET ||
    "Sv9S5p2gHXbVrwFAW2CYJWIS";

  const cleanKeyId = keyId.trim().replace(/^["']|["']$/g, "");
  const cleanKeySecret = keySecret.trim().replace(/^["']|["']$/g, "");

  return {
    keyId: cleanKeyId,
    keySecret: cleanKeySecret,
  };
}

