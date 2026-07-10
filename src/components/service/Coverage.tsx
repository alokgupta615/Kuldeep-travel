import { MapPin } from "lucide-react";

const locations = [
  "Gomti Nagar",
  "Hazratganj",
  "Alambagh",
  "Indira Nagar",
  "Aliganj",
  "Jankipuram",
  "Mahanagar",
  "Vikas Nagar",
  "Ashiyana",
  "Chowk",
  "Sushant Golf City",
  "Telibagh",
  "Charbagh",
  "PGI",
  "Faizabad Road",
  "Shaheed Path",
];

export default function CoverageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Cab Service Available Across Lucknow
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Wherever you are in Lucknow, Kuldeep Travels is ready to
              provide reliable pickup and drop services. We cover
              residential areas, commercial locations, hotels,
              hospitals, educational institutions and transport hubs.
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              Whether your pickup location is your home, office,
              hotel or airport, our team ensures a smooth,
              comfortable and timely journey.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-4">

            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-3 rounded-xl border p-4 hover:bg-blue-50 transition"
              >
                <MapPin className="text-blue-700" size={20} />

                <span className="font-medium text-gray-800">
                  {location}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}