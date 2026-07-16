import { Info, Route, Clock3 } from "lucide-react";

const routes = [
  {
    route: "Lucknow → Ayodhya",
    distance: "135 km",
    time: "2.5 – 3 Hours",
  },
  {
    route: "Lucknow → Kanpur",
    distance: "95 km",
    time: "Around 2 Hours",
  },
  {
    route: "Lucknow → Prayagraj",
    distance: "200 km",
    time: "4 – 5 Hours",
  },
  {
    route: "Lucknow → Varanasi",
    distance: "320 km",
    time: "6 – 7 Hours",
  },
  {
    route: "Lucknow → Gorakhpur",
    distance: "270 km",
    time: "5 – 6 Hours",
  },
  {
    route: "Lucknow → Agra",
    distance: "335 km",
    time: "5 – 6 Hours",
  },
  {
    route: "Lucknow → Delhi",
    distance: "550 km",
    time: "8 – 9 Hours",
  },
  {
    route: "Lucknow → Bareilly",
    distance: "250 km",
    time: "4 – 5 Hours",
  },
];

export default function DistanceTable() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Route className="mr-2 h-4 w-4" />
            Popular Travel Distances
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Plan Your Journey
            <span className="block text-blue-700">
              Better
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The table below provides approximate travel distances and estimated
            journey times for some of the most frequently booked one-way routes
            from Lucknow.
          </p>

        </div>

        {/* Table */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 shadow-lg">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white">

                <tr>

                  <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wide">
                    Route
                  </th>

                  <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wide">
                    Approx. Distance
                  </th>

                  <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wide">
                    Estimated Travel Time
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">

                {routes.map((item, index) => (

                  <tr
                    key={item.route}
                    className={`transition hover:bg-blue-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >

                    <td className="px-8 py-6 font-semibold text-gray-900">
                      {item.route}
                    </td>

                    <td className="px-8 py-6">

                      <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700">
                        <Route className="mr-2 h-4 w-4" />
                        {item.distance}
                      </div>

                    </td>

                    <td className="px-8 py-6">

                      <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-800">
                        <Clock3 className="mr-2 h-4 w-4" />
                        {item.time}
                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Note */}

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-full bg-blue-600 p-3">

              <Info className="h-5 w-5 text-white" />

            </div>

            <div>

              <h3 className="text-lg font-semibold text-gray-900">
                Important Note
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Travel time is approximate and may vary depending on traffic,
                weather conditions, road work, route diversions, and the number
                of stops during your journey.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Travel with Confidence, Wherever You're Going
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're travelling to a nearby city or planning a long
            intercity journey, Kuldeep Travels provides comfortable vehicles,
            experienced drivers, transparent pricing, and dependable service
            from pickup to destination.
          </p>

        </div>

      </div>
    </section>
  );
}