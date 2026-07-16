import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

const destinations = [
  {
    name: "Ayodhya",
    image: "/images/destinations/ayodhya.jpg",
    description:
      "A sacred city attracting millions of pilgrims every year.",
    tags: ["Religious", "Family", "Weekend"],
  },
  {
    name: "Varanasi",
    image: "/images/destinations/varanasi.jpg",
    description:
      "Experience spirituality, culture and the famous ghats.",
    tags: ["Pilgrimage", "Tourism", "Culture"],
  },
  {
    name: "Prayagraj",
    image: "/images/destinations/prayagraj.jpg",
    description:
      "Ideal for business visits, family trips and religious events.",
    tags: ["Business", "Religious", "Family"],
  },
  {
    name: "Kanpur",
    image: "/images/destinations/kanpur.jpg",
    description:
      "Perfect for business meetings, shopping and education.",
    tags: ["Business", "Students", "Daily Travel"],
  },
  {
    name: "Naimisharanya",
    image: "/images/destinations/naimish.jpg",
    description:
      "One of Uttar Pradesh's most sacred pilgrimage destinations.",
    tags: ["Religious", "Family"],
  },
  {
    name: "Chitrakoot",
    image: "/images/destinations/chitrakoot.jpg",
    description:
      "Known for spirituality and breathtaking natural beauty.",
    tags: ["Pilgrimage", "Sightseeing"],
  },
  {
    name: "Agra",
    image: "/images/destinations/agra.jpg",
    description:
      "Visit the Taj Mahal and enjoy a memorable road trip.",
    tags: ["Weekend", "Tourism", "Family"],
  },
  {
    name: "Delhi",
    image: "/images/destinations/delhi.jpg",
    description:
      "Business travel, airport transfers and leisure trips.",
    tags: ["Business", "Airport", "Personal"],
  },
  {
    name: "Jaipur",
    image: "/images/destinations/jaipur.jpg",
    description:
      "Discover forts, palaces and Rajasthan's rich culture.",
    tags: ["Vacation", "Family", "Couples"],
  },
  {
    name: "Nainital",
    image: "/images/destinations/nainital.jpg",
    description:
      "Escape into the hills for a peaceful holiday.",
    tags: ["Hill Station", "Family", "Honeymoon"],
  },
  {
    name: "Mussoorie",
    image: "/images/destinations/mussoorie.jpg",
    description:
      "One of India's most loved hill stations.",
    tags: ["Holiday", "Nature", "Couples"],
  },
  {
    name: "Jim Corbett",
    image: "/images/destinations/corbett.jpg",
    description:
      "Perfect destination for wildlife lovers and weekend trips.",
    tags: ["Wildlife", "Group", "Weekend"],
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Popular Destinations

          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">

            Where Will Your Next

            <span className="block text-blue-700">

              Journey Take You?

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Travel comfortably from Lucknow to popular destinations
            across Uttar Pradesh and North India.

          </p>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {destinations.map((place) => (

            <div
              key={place.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <h3 className="text-3xl font-bold text-white">

                    {place.name}

                  </h3>

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <p className="leading-7 text-slate-600">

                  {place.description}

                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {place.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-500"
                >

                  Book Now

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-10 text-center text-white">

          <MapPinned className="mx-auto h-12 w-12 text-yellow-400" />

          <h3 className="mt-6 text-3xl font-bold">

            Don't See Your Destination?

          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">

            We provide outstation cab services to hundreds of cities
            across Uttar Pradesh, Uttarakhand, Rajasthan, Delhi NCR
            and neighbouring states. Contact us and we'll plan your
            perfect journey.

          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-500"
          >

            Plan My Trip

          </Link>

        </div>

      </div>

    </section>
  );
}