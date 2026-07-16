import Link from "next/link";
import {
  MapPin,
  Navigation,
  CarFront,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const locations = [
  "Gomti Nagar",
  "Hazratganj",
  "Aliganj",
  "Indira Nagar",
  "Alambagh",
  "Jankipuram",
  "Charbagh",
  "Mahanagar",
  "Ashiyana",
  "Rajajipuram",
  "Sushant Golf City",
  "Vrindavan Yojana",
  "Faizabad Road",
  "Sitapur Road",
  "Kanpur Road",
];

const destinations = [
  "Ayodhya",
  "Kanpur",
  "Prayagraj",
  "Varanasi",
  "Agra",
  "Noida",
  "Greater Noida",
  "Delhi",
];

export default function ServiceAreas() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Service Areas
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">

            Wedding Car Rental Across

            <span className="block text-blue-700">

              Lucknow & Beyond

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Whether your wedding is taking place in the heart of Lucknow,
            at a luxury resort, banquet hall or destination venue,
            Kuldeep Travels provides elegant transportation wherever you
            need it.

          </p>

        </div>

        {/* Main Section */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-[32px] bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-10 shadow-2xl">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400">

                <MapPin className="text-slate-900" size={30} />

              </div>

              <div>

                <h3 className="text-3xl font-black text-white">

                  Lucknow Coverage

                </h3>

                <p className="text-blue-100">

                  Pickup & Drop Anywhere

                </p>

              </div>

            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {locations.map((location) => (

                <div
                  key={location}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                >

                  <CheckCircle2
                    className="text-yellow-400"
                    size={18}
                  />

                  <span className="font-medium text-white">

                    {location}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[32px] border border-yellow-200 bg-[#FFFCF7] p-10">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700">

                <Navigation
                  className="text-yellow-400"
                  size={30}
                />

              </div>

              <div>

                <h3 className="text-3xl font-black text-slate-900">

                  Destination Weddings

                </h3>

                <p className="text-slate-600">

                  Across Uttar Pradesh

                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-600">

              Planning your wedding outside Lucknow?

              Our transportation services extend to destination
              weddings across Uttar Pradesh and nearby cities,
              ensuring seamless travel for couples, families
              and guests.

            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {destinations.map((city) => (

                <div
                  key={city}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center font-semibold text-slate-700 shadow-sm transition hover:border-yellow-300 hover:shadow-lg"
                >

                  {city}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-yellow-50 to-white p-12 shadow-xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">

                Need Transportation?

              </span>

              <h3 className="mt-6 text-4xl font-black text-slate-900">

                Don't See Your Location?

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Our team regularly arranges transportation beyond the
                listed areas. Contact us to discuss your venue and we'll
                create a customized transportation plan for your wedding.

              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-5 lg:justify-end">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >

                <CarFront size={20} />

                Check Availability

              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-500"
              >

                Get Free Quote

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}