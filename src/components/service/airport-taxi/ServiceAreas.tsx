import { MapPin } from "lucide-react";

const areas = [
  "Gomti Nagar",
  "Hazratganj",
  "Indira Nagar",
  "Aliganj",
  "Alambagh",
  "Charbagh",
  "Jankipuram",
  "Ashiyana",
  "Mahanagar",
  "Vikas Nagar",
  "PGI",
  "Faizabad Road",
  "Shaheed Path",
  "Sushant Golf City",
  "Telibagh",
  "Chowk",
];

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Airport Taxi Service Across Lucknow
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We provide airport pickup and drop services across major
            residential, commercial and transportation hubs in Lucknow.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 bg-gray-50 rounded-xl border p-5 hover:shadow-md transition"
            >
              <MapPin
                size={22}
                className="text-blue-700 shrink-0"
              />

              <span className="font-semibold text-gray-900">
                {area}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}