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

// ==============================================
// Owner Email
// ==============================================

export async function sendOwnerEmail(booking: any) {
  await transporter.sendMail({
    from: `"Kuldeep Travels" <${process.env.EMAIL_USER}>`,

    to: process.env.OWNER_EMAIL,

    subject: `🚖 New Booking Received - ${booking.bookingId}`,

    html: `
      <div style="font-family:Arial,sans-serif;padding:20px">

        <h2 style="color:#1e40af">
          New Taxi Booking
        </h2>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse">

          <tr>
            <td><b>Booking ID</b></td>
            <td>${booking.bookingId}</td>
          </tr>

          <tr>
            <td><b>Booking Date</b></td>
            <td>${booking.bookingDate}</td>
          </tr>

          <tr>
            <td><b>Name</b></td>
            <td>${booking.customerName}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${booking.phone}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${booking.email}</td>
          </tr>

          <tr>
            <td><b>Pickup</b></td>
            <td>${booking.pickup}</td>
          </tr>

          <tr>
            <td><b>Drop</b></td>
            <td>${booking.drop}</td>
          </tr>

          <tr>
            <td><b>Service</b></td>
            <td>${booking.serviceType}</td>
          </tr>

          <tr>
            <td><b>Vehicle</b></td>
            <td>${booking.vehicle}</td>
          </tr>

          <tr>
            <td><b>Travel Date</b></td>
            <td>${booking.travelDate}</td>
          </tr>

          <tr>
            <td><b>Travel Time</b></td>
            <td>${booking.travelTime}</td>
          </tr>

          <tr>
            <td><b>Passengers</b></td>
            <td>${booking.passengers}</td>
          </tr>

          <tr>
            <td><b>Payment</b></td>
            <td>${booking.payment}</td>
          </tr>

          <tr>
            <td><b>Payment Status</b></td>
            <td>${booking.paymentStatus}</td>
          </tr>

          <tr>
            <td><b>Booking Status</b></td>
            <td>${booking.bookingStatus}</td>
          </tr>

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
  await transporter.sendMail({
    from: `"Kuldeep Travels" <${process.env.EMAIL_USER}>`,

    to: booking.email,

    subject: `Booking Confirmation - ${booking.bookingId}`,

    html: `
      <div style="font-family:Arial,sans-serif;padding:20px">

        <h2 style="color:#1e40af">
          Thank You For Booking 🚖
        </h2>

        <p>
          Dear <b>${booking.customerName}</b>,
        </p>

        <p>
          We have received your booking request successfully.
        </p>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse">

          <tr>
            <td><b>Booking ID</b></td>
            <td>${booking.bookingId}</td>
          </tr>

          <tr>
            <td><b>Pickup</b></td>
            <td>${booking.pickup}</td>
          </tr>

          <tr>
            <td><b>Drop</b></td>
            <td>${booking.drop}</td>
          </tr>

          <tr>
            <td><b>Vehicle</b></td>
            <td>${booking.vehicle}</td>
          </tr>

          <tr>
            <td><b>Travel Date</b></td>
            <td>${booking.travelDate}</td>
          </tr>

          <tr>
            <td><b>Travel Time</b></td>
            <td>${booking.travelTime}</td>
          </tr>

          <tr>
            <td><b>Passengers</b></td>
            <td>${booking.passengers}</td>
          </tr>

          <tr>
            <td><b>Payment Mode</b></td>
            <td>${booking.payment}</td>
          </tr>

          <tr>
            <td><b>Payment Status</b></td>
            <td>${booking.paymentStatus}</td>
          </tr>

          <tr>
            <td><b>Estimated Fare</b></td>
            <td>₹${booking.amount || booking.totalFare}</td>
          </tr>

        </table>

        <br>

        <p>
          Our team will contact you shortly to confirm your booking.
        </p>

        <p>
          Thank you for choosing
          <b>Kuldeep Travels Lucknow.</b>
        </p>

      </div>
    `,
  });
}