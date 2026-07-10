import Link from "next/link";
import Image from "next/image";

export default function TourPackagesPage() {
  return (
    <section className="bg-black text-white pt-36 pb-20 px-6 min-h-screen">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            Tour Packages
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Explore Our Premium
            <br />
            Travel Packages

          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">

            Discover religious destinations, family vacations,
            weekend getaways, and customized travel experiences
            with Kuldeep Travels.

          </p>

        </div>

        {/* TOUR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* RELIGIOUS TOUR */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400 hover:-translate-y-2 transition duration-500">

            <div className="relative h-[320px] overflow-hidden">

              <Image
                src="/religious-tour.jpg"
                alt="Religious Tours"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4">
                Religious Tours
              </h2>

              <p className="text-gray-400 leading-8">

                Visit Ayodhya, Varanasi, Prayagraj, Mathura,
                Vrindavan, and other spiritual destinations
                with comfortable and safe travel services.

              </p>

              <Link href="/tour-packages/religious-tours">

                <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 transition text-black px-7 py-3 rounded-full font-bold">

                  Explore Religious Tours

                </button>

              </Link>

            </div>

          </div>

          {/* FAMILY TOUR */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400 hover:-translate-y-2 transition duration-500">

            <div className="relative h-[320px] overflow-hidden">

              <Image
                src="/family-tour.jpg"
                alt="Family Tours"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4">
                Family Tours
              </h2>

              <p className="text-gray-400 leading-8">

                Enjoy memorable family vacations with premium
                vehicles, professional drivers, and customized
                travel planning for all age groups.

              </p>

              <Link href="/tour-packages/family-tours">

                <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 transition text-black px-7 py-3 rounded-full font-bold">

                  Explore Family Tours

                </button>

              </Link>

            </div>

          </div>

          {/* WEEKEND GETAWAYS */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400 hover:-translate-y-2 transition duration-500">

            <div className="relative h-[320px] overflow-hidden">

              <Image
                src="/weekend-tour.jpg"
                alt="Weekend Getaways"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4">
                Weekend Getaways
              </h2>

              <p className="text-gray-400 leading-8">

                Take short relaxing trips to nearby destinations
                with affordable weekend travel packages and
                comfortable ride options.

              </p>

              <Link href="/tour-packages/weekend-getaways">

                <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 transition text-black px-7 py-3 rounded-full font-bold">

                  Explore Weekend Trips

                </button>

              </Link>

            </div>

          </div>

          {/* CUSTOM TOUR */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400 hover:-translate-y-2 transition duration-500">

            <div className="relative h-[320px] overflow-hidden">

              <Image
                src="/custom-tour.jpg"
                alt="Custom Tour Packages"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4">
                Custom Tour Packages
              </h2>

              <p className="text-gray-400 leading-8">

                Create personalized tour plans according to
                your budget, destination, travel duration,
                and comfort preferences.

              </p>

              <Link href="/tour-packages/custom-tour-packages">

                <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 transition text-black px-7 py-3 rounded-full font-bold">

                  Customize Your Tour

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}