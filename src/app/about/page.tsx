import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-black text-white pt-36 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="relative h-[500px] rounded-[30px] overflow-hidden">

              <Image
                src="/about.jpg"
                alt="Kuldeep Travels"
                fill
                className="object-cover"
              />

            </div>

            {/* EXPERIENCE CARD */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-8 py-6 rounded-3xl shadow-2xl">

              <h2 className="text-4xl font-extrabold">
                10+
              </h2>

              <p className="font-semibold mt-1">
                Years Experience
              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
              About Us
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">

              Trusted Taxi & Tour Services In Lucknow

            </h1>

            <p className="text-gray-400 mt-8 leading-8 text-lg">

              Kuldeep Travels is a trusted taxi and tour service
              provider based in Lucknow, offering reliable,
              comfortable, and affordable travel solutions since 2011.

            </p>

            <p className="text-gray-400 mt-5 leading-8 text-lg">

              We specialize in airport taxi services, one-way taxi
              booking, outstation travel, local sightseeing, and
              customized tour packages with professional drivers
              and premium vehicles.

            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-[#111111] border border-white/10 rounded-2xl p-5">

                <h3 className="text-xl font-bold mb-2">
                  Professional Drivers
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  Experienced and verified drivers for safe travel.
                </p>

              </div>

              <div className="bg-[#111111] border border-white/10 rounded-2xl p-5">

                <h3 className="text-xl font-bold mb-2">
                  Affordable Pricing
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  Transparent pricing with no hidden charges.
                </p>

              </div>

              <div className="bg-[#111111] border border-white/10 rounded-2xl p-5">

                <h3 className="text-xl font-bold mb-2">
                  24/7 Support
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  Dedicated customer support anytime you need.
                </p>

              </div>

              <div className="bg-[#111111] border border-white/10 rounded-2xl p-5">

                <h3 className="text-xl font-bold mb-2">
                  Comfortable Rides
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  Clean and well-maintained premium vehicles.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-28">

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-8 text-lg">

              To provide safe, affordable, and premium travel services
              with customer satisfaction as our highest priority.

            </p>

          </div>

          <div className="bg-[#111111] border border-white/10 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-8 text-lg">

              To become the most trusted taxi and travel service
              provider in Uttar Pradesh through exceptional service
              and modern travel experiences.

            </p>

          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-28">

          <div className="text-center mb-16">

            <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold">
              Why Choose Kuldeep Travels
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Experienced Drivers",
              "Affordable Pricing",
              "24/7 Customer Support",
              "Airport Taxi Service",
              "Clean Vehicles",
              "Safe Family Travel",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition"
              >

                <h3 className="text-2xl font-bold mb-4">
                  {item}
                </h3>

                <p className="text-gray-400 leading-7">

                  Reliable and professional travel services designed
                  for comfort, safety, and customer satisfaction.

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}