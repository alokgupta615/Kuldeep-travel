import {
  Car,
  MapPinned,
  Plane,
  Bus,
  CalendarDays,
  Clock3,
  Users,
  Hotel,
  Wallet,
  Briefcase,
  Luggage,
  CheckCircle,
} from "lucide-react";

const bookingInfo = [
  {
    title: "Booking a Cab",
    icon: Car,
    color: "bg-blue-100 text-blue-700",
    description:
      "Share these details so we can check vehicle availability and provide the best quotation.",
    items: [
      "Pickup Location",
      "Destination",
      "Travel Date",
      "Pickup Time",
      "One Way or Round Trip",
      "Number of Passengers",
      "Preferred Vehicle (Optional)",
    ],
  },
  {
    title: "Planning a Tour",
    icon: Plane,
    color: "bg-green-100 text-green-700",
    description:
      "Help us prepare a personalized itinerary and accurate travel quotation.",
    items: [
      "Destination(s)",
      "Number of Travelers",
      "Travel Dates",
      "Trip Duration",
      "Preferred Vehicle",
      "Hotel Requirement (Optional)",
      "Approximate Budget",
      "Special Requests",
    ],
  },
  {
    title: "Tempo Traveller / Bus",
    icon: Bus,
    color: "bg-yellow-100 text-yellow-700",
    description:
      "These details help us recommend the ideal vehicle for your group.",
    items: [
      "Total Number of Passengers",
      "Pickup Location",
      "Destination",
      "Travel Days",
      "Event Type",
      "Expected Luggage",
    ],
  },
];

export default function BeforeContact() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Before You Contact Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Help Us Serve You Better
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Providing a few travel details allows our team to prepare an
            accurate quotation, recommend the most suitable vehicle, and
            respond more quickly.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {bookingInfo.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-3xl bg-white shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition duration-300"
              >
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${section.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {section.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        className="text-green-600 mt-1 flex-shrink-0"
                        size={18}
                      />

                      <span className="text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-3xl bg-blue-900 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Looking for a Quick Fare Estimate?
          </h3>

          <p className="mt-5 max-w-3xl mx-auto text-blue-100 leading-8">
            The fastest way to receive a quotation is to call us or send your
            travel details on WhatsApp. Our travel experts will review your
            requirements and respond as quickly as possible.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="tel:09936408109"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black hover:bg-yellow-300 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919936408109"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              💬 WhatsApp Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}