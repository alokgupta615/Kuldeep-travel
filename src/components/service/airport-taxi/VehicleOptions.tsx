import {
  Users,
  Briefcase,
  CarFront,
} from "lucide-react";

const vehicles = [
  {
    name: "Sedan",
    passengers: "Up to 4 Passengers",
    luggage: "2 Large Bags",
    use: "Ideal for Solo & Business Travel",
  },
  {
    name: "SUV",
    passengers: "Up to 6 Passengers",
    luggage: "4 Large Bags",
    use: "Perfect for Families",
  },
  {
    name: "Innova Crysta",
    passengers: "Up to 7 Passengers",
    luggage: "5 Large Bags",
    use: "Best for Group Travel",
  },
];

export default function VehicleOptions() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Choose the Right Vehicle
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Select a vehicle according to the number of passengers,
            luggage requirements and your travel preferences.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {vehicles.map((vehicle, index) => (

            <div
              key={index}
              className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >

              <div className="bg-blue-700 text-white p-10 flex justify-center">

                <CarFront size={70} />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  {vehicle.name}
                </h3>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3">
                    <Users className="text-blue-700" size={20} />
                    <span className="text-gray-700">
                      {vehicle.passengers}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="text-blue-700" size={20} />
                    <span className="text-gray-700">
                      {vehicle.luggage}
                    </span>
                  </div>

                </div>

                <p className="mt-6 text-gray-600 leading-7">
                  {vehicle.use}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}