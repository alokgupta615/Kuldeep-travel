// "use client";

// import {
//   Users,
//   Briefcase,
//   Snowflake,
//   CarTaxiFront,
//   CheckCircle2,
// } from "lucide-react";

// interface Props {
//   formData: {
//     vehicle: string;
//   };
//   setFormData: React.Dispatch<React.SetStateAction<any>>;
// }

// const vehicles = [
//   {
//     id: "Swift Dzire",
//     seats: 4,
//     luggage: 2,
//     ac: true,
//     price: "₹12/km",
//   },
//   {
//     id: "Ertiga",
//     seats: 6,
//     luggage: 3,
//     ac: true,
//     price: "₹15/km",
//   },
//   {
//     id: "Innova",
//     seats: 7,
//     luggage: 4,
//     ac: true,
//     price: "₹18/km",
//   },
//   {
//     id: "Innova Crysta",
//     seats: 7,
//     luggage: 4,
//     ac: true,
//     price: "₹20/km",
//   },
//   {
//     id: "Tempo Traveller",
//     seats: 12,
//     luggage: 8,
//     ac: true,
//     price: "₹28/km",
//   },
//   {
//     id: "Mini Bus",
//     seats: 20,
//     luggage: 12,
//     ac: true,
//     price: "Contact Us",
//   },
// ];

// export default function VehicleSelector({
//   formData,
//   setFormData,
// }: Props) {
//   return (
//     <section className="space-y-8">

//       {/* Heading */}

//       <div>

//         <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
//           Choose Your Vehicle
//         </span>

//         <h3 className="mt-5 text-3xl font-bold text-slate-900">
//           Select Your Preferred Vehicle
//         </h3>

//         <p className="mt-3 max-w-2xl text-slate-600">
//           Choose from our comfortable and well-maintained fleet. Every
//           vehicle comes with experienced drivers, clean interiors, air
//           conditioning, and transparent pricing.
//         </p>

//       </div>

//       {/* Vehicles */}

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

//         {vehicles.map((vehicle) => {
//           const selected = formData.vehicle === vehicle.id;

//           return (
//             <div
//               key={vehicle.id}
//               onClick={() =>
//                 setFormData((prev: any) => ({
//                   ...prev,
//                   vehicle: vehicle.id,
//                 }))
//               }
//               className={`group cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
//                 selected
//                   ? "border-yellow-400 ring-2 ring-yellow-400 shadow-xl"
//                   : "border-slate-200 hover:border-blue-300"
//               }`}
//             >
//               {/* Top */}

//               <div className="bg-gradient-to-r from-blue-950 to-blue-800 p-6">

//                 <div className="flex items-center justify-between">

//                   <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 shadow-lg">

//                     <CarTaxiFront
//                       className="text-slate-900"
//                       size={32}
//                     />

//                   </div>

//                   <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-900 shadow">
//                     {vehicle.price}
//                   </span>

//                 </div>

//                 <h4 className="mt-6 text-2xl font-bold text-white">
//                   {vehicle.id}
//                 </h4>

//                 <p className="mt-2 text-sm text-blue-100">
//                   Comfortable, clean and professionally maintained.
//                 </p>

//               </div>

//               {/* Features */}

//               <div className="space-y-6 p-6">

//                 <div className="grid grid-cols-3 gap-3">

//                   <div className="rounded-2xl bg-slate-50 p-4 text-center">

//                     <Users
//                       className="mx-auto mb-2 text-blue-600"
//                       size={22}
//                     />

//                     <p className="text-lg font-bold">
//                       {vehicle.seats}
//                     </p>

//                     <span className="text-xs text-slate-500">
//                       Seats
//                     </span>

//                   </div>

//                   <div className="rounded-2xl bg-slate-50 p-4 text-center">

//                     <Briefcase
//                       className="mx-auto mb-2 text-orange-500"
//                       size={22}
//                     />

//                     <p className="text-lg font-bold">
//                       {vehicle.luggage}
//                     </p>

//                     <span className="text-xs text-slate-500">
//                       Bags
//                     </span>

//                   </div>

//                   <div className="rounded-2xl bg-slate-50 p-4 text-center">

//                     <Snowflake
//                       className="mx-auto mb-2 text-cyan-600"
//                       size={22}
//                     />

//                     <p className="text-lg font-bold">
//                       {vehicle.ac ? "AC" : "No"}
//                     </p>

//                     <span className="text-xs text-slate-500">
//                       Comfort
//                     </span>

//                   </div>

//                 </div>

//                 {/* Button */}

//                 {selected ? (
//                   <div className="flex items-center justify-center gap-2 rounded-2xl bg-green-50 py-4 text-green-700">

//                     <CheckCircle2 size={20} />

//                     <span className="font-semibold">
//                       Selected Vehicle
//                     </span>

//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();

//                       setFormData((prev: any) => ({
//                         ...prev,
//                         vehicle: vehicle.id,
//                       }));
//                     }}
//                     className="w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-900"
//                   >
//                     Select Vehicle
//                   </button>
//                 )}

//               </div>
//             </div>
//           );
//         })}

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Users, Briefcase, Snowflake, CheckCircle2 } from "lucide-react";

interface Props {
  formData: {
    vehicle: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const vehicles = [
  {
    id: "Swift Dzire",
    image: "/images/fleet/dzire.png",
    seats: 4,
    luggage: 2,
    ac: true,
    price: "₹12/km",
  },
  {
    id: "Ertiga",
    image: "/images/fleet/ertiga.png",
    seats: 6,
    luggage: 3,
    ac: true,
    price: "₹15/km",
  },
  {
    id: "Innova",
    image: "/images/fleet/innova.png",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹18/km",
  },
  {
    id: "Innova Crysta",
    image: "/images/fleet/innova.png",
    seats: 7,
    luggage: 4,
    ac: true,
    price: "₹20/km",
  },
  {
    id: "Tempo Traveller",
    image: "/images/fleet/tempo.png",
    seats: 12,
    luggage: 8,
    ac: true,
    price: "₹28/km",
  },
  {
    id: "Mini Bus",
    image: "/images/fleet/bus.png",
    seats: 20,
    luggage: 12,
    ac: true,
    price: "Contact Us",
  },
];

export default function VehicleSelector({ formData, setFormData }: Props) {
  return (
    <section className="space-y-8">
      {/* Heading */}

      <div className="text-center lg:text-left">
        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-700 sm:text-sm">
          🚖 Choose Your Vehicle
        </span>

        <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
          Select Your Preferred Vehicle
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base lg:mx-0">
          Choose from our premium fleet of clean, comfortable and professionally
          maintained vehicles. Every booking includes experienced drivers, air
          conditioning and transparent pricing.
        </p>
      </div>

      {/* Vehicles Grid */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((vehicle) => {
          const selected = formData.vehicle === vehicle.id;

          return (
            <div
              key={vehicle.id}
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  vehicle: vehicle.id,
                }))
              }
              className={`group cursor-pointer overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-3xl ${
                selected
                  ? "border-yellow-400 ring-2 ring-yellow-400 shadow-xl"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {/* Header */}

              {/* Header */}

              <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-5">
                {/* Price */}

                <div className="flex justify-end">
                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                    {vehicle.price}
                  </span>
                </div>

                {/* Vehicle Image */}

                <div className="mt-3 flex justify-center">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.id}
                    width={220}
                    height={120}
                    className="h-24 w-auto object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Vehicle Name */}

                <h4 className="mt-4 text-center text-xl font-bold text-white">
                  {vehicle.id}
                </h4>

                <p className="mt-2 text-center text-sm leading-6 text-white">
                  Premium • AC • Professional Driver
                </p>
              </div>

              {/* Features */}

              <div className="space-y-5 p-4 sm:p-5">
                <div className="grid grid-cols-3 gap-3">
                  {/* Seats */}

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Users size={18} className="mx-auto mb-2 text-blue-600" />

                    <p className="text-lg font-bold text-slate-900">
                      {vehicle.seats}
                    </p>

                    <span className="text-xs font-medium text-slate-600">
                      Seats
                    </span>
                  </div>

                  {/* Bags */}

                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                    <Briefcase
                      size={18}
                      className="mx-auto mb-2 text-orange-500"
                    />

                    <p className="text-base font-bold">{vehicle.luggage}</p>

                    <span className="text-[11px] text-slate-500">Bags</span>
                  </div>

                  {/* AC */}

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Snowflake
                      size={18}
                      className="mx-auto mb-2 text-cyan-600"
                    />

                    <p className="text-base font-bold">
                      {vehicle.ac ? "AC" : "No"}
                    </p>

                    <span className="text-[11px] text-slate-500">Comfort</span>
                  </div>
                </div>

                {/* Selected Button */}

                {selected ? (
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50 py-3 text-sm font-semibold text-green-700">
                    <CheckCircle2 size={18} />

                    <span>Selected Vehicle</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();

                      setFormData((prev: any) => ({
                        ...prev,
                        vehicle: vehicle.id,
                      }));
                    }}
                    className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-900"
                  >
                    Select Vehicle
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
