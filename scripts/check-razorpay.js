const fs = require('fs');
const path = require('path');
const Razorpay = require('razorpay');

const envPath = path.join(__dirname, '..', '.env.local');
let env = '';
if (fs.existsSync(envPath)) {
  env = fs.readFileSync(envPath, 'utf8');
}

const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || env.match(/RAZORPAY_KEY_ID=([^\r\n]+)/)?.[1]?.trim();
const keySecret = process.env.RAZORPAY_KEY_SECRET || env.match(/RAZORPAY_KEY_SECRET=([^\r\n]+)/)?.[1]?.trim();

if (!keyId || !keySecret) {
  console.log('Error: RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET is not set in environment or .env.local');
  process.exit(1);
}

const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });

async function checkAccount() {
  console.log('==========================================');
  console.log('   RAZORPAY ACCOUNT DIAGNOSTICS & STATUS  ');
  console.log('==========================================');
  console.log('Key ID:', keyId);
  console.log('Environment Mode:', keyId.startsWith('rzp_live_') ? 'LIVE (Production)' : 'TEST (Sandbox)');
  console.log('Secret Key Status:', keySecret ? `Configured (${keySecret.length} chars)` : 'Missing');

  try {
    const orders = await rzp.orders.all({ count: 5 });
    console.log('\n[1] Orders API Check: SUCCESS');
    console.log('Total recent orders fetched:', orders.items ? orders.items.length : 0);
    if (orders.items && orders.items.length > 0) {
      orders.items.forEach((o, i) => {
        console.log(`  ${i+1}. Order ID: ${o.id} | Amount: Rs ${o.amount / 100} | Status: ${o.status} | Created: ${new Date(o.created_at * 1000).toLocaleString()}`);
      });
    } else {
      console.log('  No previous orders found.');
    }
  } catch (err) {
    console.log('\n[1] Orders API Check: FAILED', err.error || err.message);
  }

  try {
    const payments = await rzp.payments.all({ count: 5 });
    console.log('\n[2] Payments & Transactions Check: SUCCESS');
    console.log('Total recent payments:', payments.items ? payments.items.length : 0);
    if (payments.items && payments.items.length > 0) {
      payments.items.forEach((p, i) => {
        console.log(`  ${i+1}. Payment ID: ${p.id} | Rs ${p.amount / 100} | Method: ${p.method} | Status: ${p.status} | Contact: ${p.contact || 'N/A'}`);
      });
    } else {
      console.log('  No payment transactions found yet.');
    }
  } catch (err) {
    console.log('\n[2] Payments Check: FAILED', err.error || err.message);
  }

  console.log('\n==========================================');
}

checkAccount();
