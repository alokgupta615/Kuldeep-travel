const path = require('path');
const fs = require('fs');
const Razorpay = require('razorpay');

const envPath = path.join(__dirname, '..', '.env.local');
let env = '';
if (fs.existsSync(envPath)) {
  env = fs.readFileSync(envPath, 'utf8');
}

const keyId = process.env.RAZORPAY_KEY_ID || env.match(/RAZORPAY_KEY_ID=([^\r\n]+)/)?.[1]?.trim();
const keySecret = process.env.RAZORPAY_KEY_SECRET || env.match(/RAZORPAY_KEY_SECRET=([^\r\n]+)/)?.[1]?.trim();

if (!keyId || !keySecret) {
  console.error("Missing RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET");
  process.exit(1);
}

const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });

async function createPaymentTest() {
  console.log("==========================================");
  console.log("Generating ₹1.00 Live Test Payment / QR...");
  console.log("Account Key ID:", keyId);
  console.log("==========================================");

  try {
    // Try creating a dynamic Razorpay QR Code
    const qr = await rzp.qrCode.create({
      type: 'upi_qr',
      name: 'Kuldeep Travels Live Verification',
      usage: 'single_use',
      fixed_amount: true,
      payment_amount: 100, // 100 paise = ₹1.00
      description: '₹1 Live Verification Payment for Kuldeep Travels',
      notes: {
        purpose: 'Payment Gateway Verification'
      }
    });

    console.log("\n[SUCCESS] Dynamic QR Code Created!");
    console.log("QR Code ID:", qr.id);
    console.log("Amount: ₹" + (qr.payment_amount / 100));
    console.log("QR Image URL:", qr.image_url);
    console.log("UPI Intent URL:", qr.payload);
  } catch (qrErr) {
    console.log("\n(Dynamic QR Code API note:", qrErr.error?.description || qrErr.message, ")");
    console.log("Creating Instant Payment Link instead...");

    try {
      // Create a standard Razorpay Payment Link for ₹1
      const link = await rzp.paymentLink.create({
        amount: 100, // ₹1.00
        currency: 'INR',
        accept_partial: false,
        description: '₹1 Verification Payment - Kuldeep Travels',
        customer: {
          name: 'Kuldeep Travels Admin',
          contact: '+919936408109',
          email: 'kuldeeptravelslko@gmail.com'
        },
        notify: {
          sms: false,
          email: false
        },
        reminder_enable: false,
        notes: {
          purpose: 'Real Account Verification'
        }
      });

      console.log("\n[SUCCESS] ₹1 Payment Link & QR Created!");
      console.log("Payment Link ID:", link.id);
      console.log("Short URL (Open on phone/browser to pay ₹1 via UPI / QR / Card):");
      console.log(link.short_url);
    } catch (linkErr) {
      console.error("\nFailed to create payment link:", linkErr.error || linkErr.message);
    }
  }
}

createPaymentTest();
