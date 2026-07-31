const TOKEN = process.env.WHATSAPP_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!;
const OWNER_PHONE = process.env.OWNER_PHONE!;

async function sendMessage(phone: string, message: string) {
  const response = await fetch(
    `https://graph.facebook.com/v23.0/${PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: {
          body: message,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
}

export async function sendOwnerWhatsapp(booking: any) {
  const message = `🚖 NEW BOOKING

Booking ID: ${booking.bookingId}

Customer: ${booking.customerName}

Phone: ${booking.phone}

Pickup: ${booking.pickup}

Drop: ${booking.drop}

Date: ${booking.travelDate}

Time: ${booking.travelTime}

Vehicle: ${booking.vehicle}

Payment: ${booking.payment}

Fare: ₹${booking.amount || booking.totalFare}`;

  await sendMessage(OWNER_PHONE, message);
}

export async function sendCustomerWhatsapp(booking: any) {
  if (!booking.phone) return;

  const phone = booking.phone.replace(/\D/g, "");

  const message = `Hello ${booking.customerName},

Thank you for choosing Kuldeep Travels.

Your booking has been received successfully.

Booking ID: ${booking.bookingId}

Pickup: ${booking.pickup}

Drop: ${booking.drop}

Travel Date: ${booking.travelDate}

Travel Time: ${booking.travelTime}

Vehicle: ${booking.vehicle}

Payment: ${booking.payment}

Our team will contact you shortly to confirm your booking.

Thank you.`;

  await sendMessage(phone, message);
}