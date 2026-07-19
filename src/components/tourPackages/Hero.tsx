"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Star,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  CalendarDays,
  Users,
  Plane,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const features = [
  "Customized Tour Packages",
  "Family & Group Tours",
  "Pilgrimage Packages",
  "Weekend Getaways",
  "Premium Vehicles",
  "24×7 Travel Support",
];

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Travelers",
  },
  {
    icon: MapPin,
    value: "120+",
    label: "Destinations",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Google Rating",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-52 -left-44 h-[520px] w-[520px] rounded-full bg-yellow-400/20 blur-[130px]" />

        <div className="absolute -bottom-40 right-0 h-[550px] w-[550px] rounded-full bg-cyan-400/20 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_35%)]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(to_right,white_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 pb-16 pt-32 lg:flex-row lg:gap-12 lg:px-8 lg:pb-24 lg:pt-40">

        {/* LEFT */}

        <div className="w-full lg:w-1/2">

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-yellow-300/30 bg-white/10 px-5 py-2 backdrop-blur-xl">

            <Sparkles className="mr-2 h-4 w-4 text-yellow-400" />

            <span className="text-sm font-semibold text-yellow-300">

              Trusted Holiday Packages From Lucknow

            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">

            Explore

            <span className="block text-yellow-400">

              Incredible India

            </span>

            With Premium Holiday Packages

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">

            Discover thoughtfully designed holiday packages from Lucknow
            for families, couples, senior citizens, corporate groups,
            and pilgrims.

            Enjoy comfortable transportation, customized itineraries,
            hotel assistance, sightseeing, and stress-free travel with
            Kuldeep Travels.

          </p>
                    {/* Feature Cards */}

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

            {features.map((item) => (

              <div
                key={item}
                className="group flex items-center rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/20"
              >

                <div className="mr-4 rounded-xl bg-yellow-400/15 p-3">

                  <CheckCircle2 className="h-5 w-5 text-yellow-400" />

                </div>

                <span className="font-semibold text-white">

                  {item}

                </span>

              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/book-now"
              className="group inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-bold text-blue-950 shadow-[0_15px_35px_rgba(250,204,21,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-yellow-300"
            >

              Book Your Holiday

              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
            >

              <Phone className="mr-3 h-5 w-5" />

              Contact Us

            </Link>

          </div>

          {/* Trust Badges */}

          <div className="mt-10 flex flex-wrap gap-5">

            <div className="flex items-center">

              <BadgeCheck className="mr-2 h-5 w-5 text-yellow-400" />

              <span className="text-blue-100">

                Trusted Travel Company

              </span>

            </div>

            <div className="flex items-center">

              <ShieldCheck className="mr-2 h-5 w-5 text-yellow-400" />

              <span className="text-blue-100">

                Safe & Secure Journey

              </span>

            </div>

            <div className="flex items-center">

              <CalendarDays className="mr-2 h-5 w-5 text-yellow-400" />

              <span className="text-blue-100">

                Flexible Tour Plans

              </span>

            </div>

          </div>

          {/* Statistics */}

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="group rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
                >

                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15">

                    <Icon className="h-7 w-7 text-yellow-400" />

                  </div>

                  <h3 className="text-4xl font-black text-white">

                    {item.value}

                  </h3>

                  <p className="mt-2 text-sm text-blue-100">

                    {item.label}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

        {/* RIGHT IMAGE STARTS HERE */}
                <div className="relative w-full lg:w-1/2">

          {/* Glow Behind Image */}

          <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-yellow-400/20 via-transparent to-cyan-400/20 blur-3xl" />

          {/* Decorative Rings */}

          <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full border border-white/10 lg:block" />

          <div className="absolute -right-10 bottom-10 hidden h-56 w-56 rounded-full border border-yellow-400/20 lg:block" />

          {/* Image Card */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/10 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">

            <Image
              src="/images/tour-packages/hero.jpg"
              alt="Lucknow Holiday Packages"
              width={900}
              height={900}
              priority
              className="h-[350px] w-full rounded-[28px] object-cover transition duration-700 hover:scale-105 sm:h-[500px] lg:h-[680px]"
            />

            {/* Gradient Overlay */}

            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />

          </div>

          {/* Google Rating Card */}

          <div className="absolute left-4 top-4 hidden rounded-3xl border border-white/20 bg-white p-5 shadow-2xl lg:block">

            <div className="flex items-center gap-3">

              <div className="flex">

                {[1, 2, 3, 4, 5].map((item) => (

                  <Star
                    key={item}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <span className="font-bold text-gray-900">

                4.9

              </span>

            </div>

            <p className="mt-2 text-sm text-gray-500">

              Rated by 10,000+ Travelers

            </p>

          </div>

          {/* Since 2012 */}

          <div className="absolute right-5 top-20 hidden rounded-3xl border border-white/20 bg-blue-950/90 px-6 py-5 text-white shadow-2xl backdrop-blur-xl lg:block">

            <p className="text-xs uppercase tracking-[0.25em] text-blue-200">

              Trusted Since

            </p>

            <h3 className="mt-2 text-3xl font-black">

              2012

            </h3>

          </div>

          {/* Safe Journey */}

          <div className="absolute bottom-8 left-5 hidden rounded-3xl border border-white/20 bg-white p-5 shadow-2xl lg:block">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-yellow-100 p-4">

                <ShieldCheck className="h-8 w-8 text-yellow-500" />

              </div>

              <div>

                <h3 className="font-bold text-blue-950">

                  Safe Journey

                </h3>

                <p className="text-sm text-gray-500">

                  Professional Drivers

                </p>

              </div>

            </div>

          </div>

          {/* Destinations Card */}

          <div className="absolute bottom-28 right-0 hidden rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl lg:block">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-yellow-400 p-4">

                <Plane className="h-7 w-7 text-blue-950" />

              </div>

              <div>

                <h3 className="text-3xl font-black">

                  120+

                </h3>

                <p className="text-blue-100">

                  Tour Destinations

                </p>

              </div>

            </div>

          </div>

          {/* Mobile Trust Card */}

          <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl lg:hidden">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-black text-white">

                  10K+

                </h3>

                <p className="text-blue-100">

                  Happy Travelers

                </p>

              </div>

              <div>

                <h3 className="text-2xl font-black text-white">

                  4.9★

                </h3>

                <p className="text-blue-100">

                  Google Rating

                </p>

              </div>

            </div>

          </div>

        </div>
              {/* Bottom Booking Strip */}

      <div className="mt-20 w-full">

        <div
          className="
          rounded-[40px]
          border border-white/15
          bg-white/10
          p-6
          sm:p-8
          lg:p-10
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
          "
        >

          <div className="
          flex
          flex-col
          gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          ">


            <div>

              <span
              className="
              inline-flex
              items-center
              rounded-full
              bg-yellow-400/15
              px-4
              py-2
              text-sm
              font-semibold
              text-yellow-300
              "
              >

                <Sparkles className="mr-2 h-4 w-4"/>

                Plan Your Dream Vacation

              </span>


              <h2 className="
              mt-4
              text-3xl
              font-black
              text-white
              "
              >

                Ready For Your Next Holiday?

              </h2>


              <p className="
              mt-3
              max-w-2xl
              text-blue-100
              "
              >

                Family vacations, pilgrimage tours,
                weekend getaways and customized
                holiday packages across India.

              </p>


            </div>



            <div className="flex flex-col gap-4 sm:flex-row">


              <Link
              href="/book-now"
              className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-yellow-400
              px-8
              py-4
              font-bold
              text-blue-950
              hover:bg-yellow-300
              "
              >

                Book Now

                <ArrowRight className="ml-2 h-5 w-5"/>

              </Link>



              <Link
              href="/contact"
              className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              "
              >

                Get Free Quote

              </Link>


            </div>


          </div>

        </div>

      </div>
            </div>

      {/* Trusted By */}

      <div className="mt-20">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          ...

        </div>

      </div>
            {/* Decorative Elements */}


      <div className="pointer-events-none absolute inset-0 overflow-hidden">


        {/* Floating Plane */}

        <div
          className="
          absolute
          left-10
          top-1/3
          hidden
          xl:flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          animate-pulse
          "
        >

          <Plane
            className="
            h-7
            w-7
            rotate-45
            text-yellow-400
            "
          />

        </div>



        {/* Yellow Glow */}

        <div
          className="
          absolute
          right-12
          top-1/4
          hidden
          xl:block
          h-5
          w-5
          rounded-full
          bg-yellow-400
          shadow-[0_0_40px_#facc15]
          "
        />



        {/* Cyan Glow */}

        <div
          className="
          absolute
          bottom-28
          left-20
          hidden
          xl:block
          h-3
          w-3
          rounded-full
          bg-cyan-300
          shadow-[0_0_30px_#22d3ee]
          "
        />


        {/* Circle Decoration */}

        <div
          className="
          absolute
          -right-40
          top-1/2
          hidden
          lg:block
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/5
          "
        />


      </div>





      {/* Scroll Indicator */}


      <div
        className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        flex-col
        items-center
        lg:flex
        "
      >


        <span
          className="
          mb-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-blue-200
          "
        >

          Scroll

        </span>



        <div
          className="
          flex
          h-14
          w-8
          justify-center
          rounded-full
          border-2
          border-white/20
          "
        >

          <div
            className="
            mt-3
            h-3
            w-3
            animate-bounce
            rounded-full
            bg-yellow-400
            "
          />

        </div>


      </div>





      {/* Bottom Fade Gradient */}


            {/* Bottom Fade Gradient */}

      <div
        className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        h-40
        bg-gradient-to-t
        from-white
        via-white/70
        to-transparent
        "
      />


    </section>
  );
}