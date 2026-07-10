const needs = [
  "Business Travel",
  "Family Visits",
  "Religious Trips",
  "Student Travel",
  "Medical Travel",
  "Tourism & Leisure",
];

export default function TravelNeeds() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">
            One Service for Every Journey
          </h2>

          <p className="text-gray-600 mt-5">
            Designed around different travel needs.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {needs.map((item) => (
            <div
              key={item}
              className="bg-white border rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {item}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Comfortable one-way cab service with experienced drivers,
                transparent pricing and well-maintained vehicles.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}