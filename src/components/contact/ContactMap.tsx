import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactMap() {
  return (
    <section
      id="map"
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Find Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Visit Kuldeep Travels
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Our office is located in Lucknow, making it convenient for travelers
            to discuss bookings, tour packages, and transportation requirements.
          </p>

        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-lg border">

            <iframe
              title="Kuldeep Travels Location"
              src="https://www.google.com/maps?q=Lucknow,Uttar%20Pradesh&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            />

          </div>

          {/* Office Details */}

          <div className="rounded-3xl bg-gray-50 p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-gray-900">
  Office Information
</h3>

<p className="mt-4 text-gray-600 leading-8">
  We'd love to help you plan your next journey. Feel free to visit us during
  business hours or contact us through phone, WhatsApp, or email.
</p>

            <div className="mt-10 space-y-8">

              <div className="flex gap-4">

                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <MapPin className="text-blue-700" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
  Office Address
</h4>

                  <p className="text-gray-600">
                    Kuldeep Travels
                  </p>

                  <p className="text-gray-600">
                    Lucknow, Uttar Pradesh
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="h-12 w-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Phone className="text-yellow-700" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
  Phone
</h4>

                  <a
                    href="tel:09936408109"
                    className="text-blue-700 hover:underline"
                  >
                    09936408109
                  </a>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Mail className="text-red-700" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
  Email
</h4>

                  <a
                    href="mailto:kuldeeptravelslko@gmail.com"
                    className="text-blue-700 hover:underline"
                  >
                    kuldeeptravelslko@gmail.com
                  </a>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Clock className="text-green-700" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
  Business Hours
</h4>

                  <p className="text-gray-700">
                    Monday – Sunday
                  </p>

                  <p className="text-gray-700">
                    Available Every Day
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}