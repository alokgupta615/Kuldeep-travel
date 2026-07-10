const routes = [
  "Lucknow → Ayodhya",
  "Lucknow → Varanasi",
  "Lucknow → Prayagraj",
  "Lucknow → Kanpur",
  "Lucknow → Gorakhpur",
  "Lucknow → Agra",
  "Lucknow → Delhi",
  "Lucknow → Bareilly",
];

export default function PopularRoutes() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Popular One Way Routes
          </h2>

          <p className="text-gray-600 mt-4">
            Comfortable intercity travel from Lucknow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {routes.map((route) => (
            <div
              key={route}
              className="border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {route}
              </h3>

              <button className="mt-6 bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500">
                Book Now
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}