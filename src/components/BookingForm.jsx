import Image from "next/image";

async function getCars() {
  try {
    const res = await fetch("http://kuldeep-travel.local/graphql", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `
            query GetCars {
              cars {
                nodes {
                  title

                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }

                  carDetails {
                    carPrice
                    seatingCapacity
                    luggage
                  }
                }
              }
            }
          `,
      }),

      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);

    return data?.data?.cars?.nodes || [];
  } catch (error) {
    console.log(error);

    return [];
  }
}

export default async function BookingForm() {
  const cars = await getCars();

  return (
    <section className="w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        {/* Header */}

        <div className="bg-gradient-to-r from-blue-900 to-blue-500 p-6 text-white">
          <h2 className="text-3xl font-bold">Book Your Ride</h2>

          <p className="mt-2 text-blue-100">
            Safe • Comfortable • Fixed Pricing
          </p>
        </div>

        {/* Form */}

        <form className="space-y-4 p-6">
          {/* Pickup */}

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Pickup Location
            </label>

            <input
              type="text"
              placeholder="Enter pickup location"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Drop */}

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Drop Location
            </label>

            <input
              type="text"
              placeholder="Enter drop location"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Journey Date
            </label>

            <input
              type="date"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Vehicle Dropdown */}

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Select Vehicle
            </label>

            <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              {cars.map((car, index) => (
                <option key={index}>
                  {car.title} - ₹{car.carDetails?.carPrice}/km
                </option>
              ))}
            </select>
          </div>

          {/* Cars List */}

          <div className="space-y-4">
            {cars.map((car, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4"
              >
                {/* Car Image */}

                <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={
                      car.featuredImage?.node?.sourceUrl ||
                      "/images/car-placeholder.png"
                    }
                    alt={car.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Car Info */}

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900">
                    {car.title}
                  </h3>

                  <p className="mt-1 text-gray-700 font-medium">
                    ₹{car.carDetails?.carPrice}/km
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {car.carDetails?.seatingCapacity} Seats •{" "}
                    {car.carDetails?.luggage}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Estimate */}

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm text-gray-600">Estimated Starting Fare</p>

            <h3 className="mt-1 text-4xl font-bold text-blue-900">₹1,299</h3>
          </div>

          {/* Buttons */}

          <div className="space-y-3">
            <button
              type="submit"
              className="w-full rounded-2xl bg-yellow-400 py-4 font-bold text-black transition hover:bg-yellow-300"
            >
              Get Quote
            </button>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-2xl bg-green-500 py-4 text-center font-bold text-white transition hover:bg-green-600"
            >
              WhatsApp Booking
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
