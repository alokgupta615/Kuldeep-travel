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
    "";

  const keySecret =
    process.env.RAZORPAY_KEY_SECRET ||
    process.env.RAZORPAY_SECRET ||
    "";

  if (!keyId.trim() || !keySecret.trim()) {
    console.warn(
      "[Razorpay Config Warning] Razorpay credentials are not fully configured in environment variables. " +
        "Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your Render Environment settings."
    );
  }

  return {
    keyId: keyId.trim(),
    keySecret: keySecret.trim(),
  };
}

