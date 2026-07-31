import nodemailer from "nodemailer";

// ==============================================
// Gmail Transporter
// ==============================================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error) => {
  if (error) {
    console.error("❌ Gmail Transport Error:", error);
  } else {
    console.log("✅ Gmail Transport Ready");
  }
});

// ==============================================
// Owner Email
// ==============================================

export async function sendOwnerEmail(booking: any) {
  await transporter.sendMail({
    from: `"Kuldeep Travels" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    replyTo: process.env.OWNER_EMAIL,

    subject: `🚖 New Booking - ${booking.bookingId}`,

    html: `
    <div style="font-family:Arial,sans-serif;padding:30px;background:#f8fafc">

      <h2 style="color:#1d4ed8">
        🚖 New Taxi Booking Received
      </h2>

      <table
        cellpadding="10"
        cellspacing="0"
        border="1"
        style="border-collapse:collapse;width:100%;background:#fff"
      >

        <tr><td><b>Booking ID</b></td><td>${booking.bookingId}</td></tr>

        <tr><td><b>Booking Date</b></td><td>${booking.bookingDate}</td></tr>

        <tr><td><b>Name</b></td><td>${booking.customerName}</td></tr>

        <tr><td><b>Phone</b></td><td>${booking.phone}</td></tr>

        <tr><td><b>Email</b></td><td>${booking.email || "-"}</td></tr>

        <tr><td><b>Pickup</b></td><td>${booking.pickup}</td></tr>

        <tr><td><b>Drop</b></td><td>${booking.drop}</td></tr>

        <tr><td><b>Service</b></td><td>${booking.serviceType}</td></tr>

        <tr><td><b>Vehicle</b></td><td>${booking.vehicle}</td></tr>

        <tr><td><b>Travel Date</b></td><td>${booking.travelDate}</td></tr>

        <tr><td><b>Travel Time</b></td><td>${booking.travelTime}</td></tr>

        <tr><td><b>Passengers</b></td><td>${booking.passengers}</td></tr>

        <tr><td><b>Payment Mode</b></td><td>${booking.payment}</td></tr>

        <tr>
          <td><b>Payment Status</b></td>
          <td style="color:${
            booking.paymentStatus === "Paid" ? "green" : "orange"
          }">
            ${booking.paymentStatus}
          </td>
        </tr>

        <tr><td><b>Booking Status</b></td><td>${booking.bookingStatus}</td></tr>

        <tr>
          <td><b>Estimated Fare</b></td>
          <td>₹${booking.amount || booking.totalFare}</td>
        </tr>

        <tr>
          <td><b>Special Note</b></td>
          <td>${booking.specialNote || "-"}</td>
        </tr>

      </table>

    </div>
    `,
  });
}

// ==============================================
// Customer Email
// ==============================================

export async function sendCustomerEmail(booking: any) {
  if (!booking.email) return;

  await transporter.sendMail({
    from: `"Kuldeep Travels" <${process.env.EMAIL_USER}>`,
    to: booking.email,
    replyTo: process.env.OWNER_EMAIL,

    subject: `✅ Booking Confirmation - ${booking.bookingId}`,

    html: `
    <div
      style="
      max-width:700px;
      margin:auto;
      font-family:Arial,sans-serif;
      background:#ffffff;
      border:1px solid #e5e7eb;
      border-radius:10px;
      overflow:hidden;
      "
    >

      <div
        style="
        background:#1d4ed8;
        color:#fff;
        padding:25px;
        text-align:center;
        "
      >
        <h1>🚖 Kuldeep Travels</h1>
        <p>Booking Confirmation</p>
      </div>

      <div style="padding:30px">

        <h2>Hello ${booking.customerName},</h2>

        <p>
          Thank you for choosing <b>Kuldeep Travels</b>.
          Your booking request has been received successfully.
        </p>

        <div
          style="
          background:#ecfeff;
          border-left:5px solid #0891b2;
          padding:15px;
          margin:20px 0;
          "
        >
          <strong>Booking Status:</strong>
          ${booking.bookingStatus}
        </div>

        <table
          cellpadding="10"
          cellspacing="0"
          border="1"
          style="border-collapse:collapse;width:100%"
        >

          <tr><td><b>Booking ID</b></td><td>${booking.bookingId}</td></tr>

          <tr><td><b>Pickup</b></td><td>${booking.pickup}</td></tr>

          <tr><td><b>Drop</b></td><td>${booking.drop}</td></tr>

          <tr><td><b>Vehicle</b></td><td>${booking.vehicle}</td></tr>

          <tr><td><b>Date</b></td><td>${booking.travelDate}</td></tr>

          <tr><td><b>Time</b></td><td>${booking.travelTime}</td></tr>

          <tr><td><b>Passengers</b></td><td>${booking.passengers}</td></tr>

          <tr><td><b>Payment</b></td><td>${booking.payment}</td></tr>

          <tr>
            <td><b>Payment Status</b></td>
            <td style="color:${
              booking.paymentStatus === "Paid"
                ? "green"
                : "orange"
            }">
              ${booking.paymentStatus}
            </td>
          </tr>

          <tr>
            <td><b>Estimated Fare</b></td>
            <td>₹${booking.amount || booking.totalFare}</td>
          </tr>

        </table>

        <p style="margin-top:25px">
          Our team will contact you shortly to confirm your booking and
          share your driver details before pickup.
        </p>

        <hr>

        <p>
          📞 +91 XXXXXXXXXX<br>
          📧 support@kuldeeptravels.in<br>
          🌐 https://kuldeeptravels.in
        </p>

        <p>
          Thank you for choosing <b>Kuldeep Travels.</b>
        </p>

      </div>

    </div>
    `,
  });
}