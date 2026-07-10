import Image from "next/image";

async function getTours() {

  const res = await fetch(
    "http://kuldeep-travel.local/graphql",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `
          {
            tourPackages {
              nodes {
                title

                featuredImage {
                  node {
                    sourceUrl
                  }
                }

                tourFields {
                  price
                  duration
                  location
                }
              }
            }
          }
        `,
      }),

      cache: "no-store",
    }
  );

  const data = await res.json();

  return data.data.tourPackages.nodes;
}

export default async function ReligiousToursPage() {

  const tours = await getTours();

  return (
    <section className="bg-black text-white min-h-screen pt-36 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            Religious Tours
          </p>

          <h1 className="text-5xl font-extrabold">
            Spiritual Journeys Across India
          </h1>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {tours.map((tour: any, index: number) => (

            <div
              key={index}
              className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400 transition"
            >

              <div className="relative h-[280px]">

                <Image
                  src={tour.featuredImage?.node?.sourceUrl}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <p className="text-yellow-400 mb-2">
                  {tour.tourFields.location}
                </p>

                <h2 className="text-3xl font-bold mb-3">
                  {tour.title}
                </h2>

                <p className="text-gray-400 mb-4">
                  {tour.tourFields.duration}
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-3xl font-extrabold text-yellow-400">
                    {tour.tourFields.price}
                  </span>

                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold">
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}