import { MapPin, Phone, Mail, Clock, MessageCircle, Star } from "lucide-react";

export default function ContactMap() {
  return (
    <section id="map" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
            Find Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Visit Kuldeep Travels
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Visit our office in Lucknow for taxi bookings, holiday packages, and
            customized travel planning with our professional team.
          </p>
        </div>

        {/* Map + Contact */}

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Google Map */}

          {/* Google Map */}

          <div
            className="
  overflow-hidden
  rounded-3xl
  border border-gray-200
  shadow-2xl
  h-[350px]
  md:h-[500px]
"
          >
            <iframe
              title="Kuldeep Travels Lucknow - Google Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.919195050948!2d80.88004937521946!3d26.77884557672729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf90acad92fe1%3A0x148abd8a9b62f832!2sKuldeep%20Travels!5e0!3m2!1sen!2sin!4v1785439255873!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Contact Details */}

          <div className="flex flex-col justify-start pt-2">
            <div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500 fill-yellow-500" size={28} />

                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Google Rated Travel Service
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Trusted by travelers for comfortable and reliable journeys.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-8">
                {/* Address */}

                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-700" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      Office Address
                    </h4>

                    <p className="text-gray-600">Kuldeep Travels</p>

                    <p className="text-gray-600">Lucknow, Uttar Pradesh</p>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Phone className="text-green-700" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Call Us</h4>

                    <a
                      href="tel:09936408109"
                      className="text-blue-700 hover:underline"
                    >
                      09936408109
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}

                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <MessageCircle className="text-green-700" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      WhatsApp Booking
                    </h4>

                    <a
                      href="https://wa.me/919936408109"
                      target="_blank"
                      className="text-green-700 hover:underline"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>

                {/* Email */}

                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <Mail className="text-red-700" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Email</h4>

                    <a
                      href="mailto:kuldeeptravelslko@gmail.com"
                      className="text-blue-700 hover:underline"
                    >
                      kuldeeptravelslko@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timing */}

                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                    <Clock className="text-yellow-700" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      Business Hours
                    </h4>

                    <p className="text-gray-600">Monday - Sunday</p>

                    <p className="text-gray-600">Available Every Day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-10">
              <a
                href="/book-now"
                className="
                inline-flex items-center justify-center
                bg-blue-700 hover:bg-blue-800
                text-white font-semibold
                px-8 py-4 rounded-full
                transition
                "
              >
                Book Your Ride
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
