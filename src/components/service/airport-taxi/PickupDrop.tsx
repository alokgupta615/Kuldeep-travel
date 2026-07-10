import {
  PlaneTakeoff,
  PlaneLanding,
} from "lucide-react";

export default function PickupDrop() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Airport Pickup & Drop Service
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Airport transfers planned around your schedule,
            helping you travel comfortably without unnecessary
            delays.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <PlaneLanding
                className="text-blue-700"
                size={30}
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Airport Pickup Service
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Your driver reaches the airport on time and coordinates
              with you whenever possible using your flight details.
              Assistance with luggage and comfortable transportation
              to your destination is included.
            </p>

          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <PlaneTakeoff
                className="text-blue-700"
                size={30}
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Airport Drop Service
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Book your airport drop in advance and let our experienced
              drivers ensure timely arrival before your flight. We plan
              every journey according to traffic conditions and your
              departure schedule.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}