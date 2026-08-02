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
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Service Areas
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Airport Taxi Service Across Lucknow
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-8">
            We provide airport pickup and drop services across major
            residential, commercial, and transportation hubs in Lucknow.
          </p>
        </div>

        {/* Areas */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {areas.map((area) => (
            <div
              key={area}
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:shadow-md md:rounded-2xl md:p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 transition group-hover:bg-blue-600">
                <MapPin className="h-4 w-4 text-blue-700 group-hover:text-white" />
              </div>

              <span className="text-sm font-semibold text-gray-800 md:text-base">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
