"use client";

import { useState } from "react";

import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  FileText,
  ShieldCheck,
  Star,
  BadgeCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import LocationInputs from "./LocationInputs";
import VehicleSelector from "./VehicleSelector";
import FareCalculator from "./FareCalculator";
import PaymentOptions from "./PaymentOptions";
import BookingSummary from "./BookingSummary";
import SuccessModal from "./SuccessModal";
import LoadingOverlay from "./LoadingOverlay";

import { openRazorpay } from "@/lib/openRazorpay";


interface BookingFormData {

  customerName: string;

  phone: string;

  email: string;


  pickup: string;

  drop: string;


  serviceType: string;


  vehicle: string;


  travelDate: string;

  travelTime: string;


  passengers: number;


  payment: string;


  specialNote: string;

}



export default function BookingForm() {


  const [loading,setLoading] = useState(false);


  const [successOpen,setSuccessOpen] =
    useState(false);



  const [formData,setFormData] =
    useState<BookingFormData>({

      customerName:"",

      phone:"",

      email:"",


      pickup:"",

      drop:"",


      serviceType:"One Way",


      vehicle:"",


      travelDate:"",

      travelTime:"",


      passengers:1,


      payment:"PAY_AFTER_TRIP",


      specialNote:"",

    });



  // ==============================
  // Input Handler
  // ==============================


  const handleChange = (
    e:
    React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  )=>{


    setFormData(prev=>({

      ...prev,


      [e.target.name]:

      e.target.name==="passengers"

      ? Number(e.target.value)

      : e.target.value,


    }));

  };





  // ==============================
  // Fare Calculation
  // ==============================


  const calculateAmount = ()=>{


    if(formData.vehicle==="Sedan")
      return 1800;



    if(formData.vehicle==="SUV")
      return 3200;



    if(formData.vehicle==="Innova")
      return 4500;



    return 999;


  };





  // ==============================
  // Reset Form
  // ==============================


  const resetForm = ()=>{


    setFormData({

      customerName:"",

      phone:"",

      email:"",


      pickup:"",

      drop:"",


      serviceType:"One Way",


      vehicle:"",


      travelDate:"",

      travelTime:"",


      passengers:1,


      payment:"PAY_AFTER_TRIP",


      specialNote:"",

    });


  };





  // ==============================
  // Submit Booking
  // ==============================


  const handleSubmit = async(
    e:React.FormEvent
  )=>{


    e.preventDefault();



    try{


      setLoading(true);



      const totalFare =
        calculateAmount();




      // ==========================
      // PAY NOW
      // ==========================


      if(formData.payment==="PAY_NOW"){



        await openRazorpay({

          amount:totalFare,


          customerName:
          formData.customerName,


          email:
          formData.email,


          phone:
          formData.phone,



          onSuccess:async(payment:any)=>{


            const response =
            await fetch(
              "/api/bookings",
              {


              method:"POST",


              headers:{


                "Content-Type":
                "application/json",


              },


              body:JSON.stringify({


                ...formData,


                amount:totalFare,


                paymentStatus:
                "SUCCESS",


                razorpayPaymentId:
                payment.razorpay_payment_id,


                razorpayOrderId:
                payment.razorpay_order_id,


                razorpaySignature:
                payment.razorpay_signature,


              }),


              });



            const data =
            await response.json();



            if(!response.ok){

              throw new Error(
                data.message
              );

            }



            setSuccessOpen(true);


            resetForm();


          },



          onFailure:()=>{


            alert(
              "Payment Failed"
            );


          },


        });



        return;

      }






      // ==========================
      // PAY AFTER TRIP / ADVANCE
      // ==========================



      const response =
      await fetch(
        "/api/bookings",
        {


        method:"POST",


        headers:{


          "Content-Type":
          "application/json",


        },


        body:JSON.stringify({


          ...formData,


          amount:totalFare,


          paymentStatus:

          formData.payment==="ADVANCE"

          ?

          "PENDING_ADVANCE"

          :

          "PAY_AFTER_TRIP",



        }),


        });



      const data =
      await response.json();



      if(!response.ok){

        throw new Error(
          data.message
        );

      }



      setSuccessOpen(true);


      resetForm();



    }

    catch(error){


      console.error(error);


      alert(
        "Booking Failed"
      );


    }

    finally{


      setLoading(false);


    }



  };



return (
  <>
<section
id="booking-form"
className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-yellow-50 py-24"
>


{/* Background Glow */}

<div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />

<div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />



<div className="container mx-auto max-w-7xl px-6">


<div className="grid gap-10 lg:grid-cols-3">



{/* =====================================
      MAIN BOOKING FORM
===================================== */}


<form
onSubmit={handleSubmit}
className="overflow-hidden rounded-[36px] border border-white/60 bg-white/80 shadow-[0_25px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:col-span-2"
>




{/* HERO HEADER */}


<div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-10 py-14 text-white">


<div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />


<div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />



<div className="relative z-10">



<div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">


<Sparkles className="h-4 w-4"/>


Premium Taxi Booking


</div>




<h1 className="mt-6 text-5xl font-extrabold leading-tight">


Book Your Ride


<span className="block text-yellow-400">

In Just 2 Minutes

</span>


</h1>




<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">


Safe, comfortable and affordable taxi booking with instant confirmation,
verified drivers and secure online payment.


</p>




<div className="mt-10 grid gap-6 md:grid-cols-3">



<div className="rounded-3xl border border-white/10 bg-white/10 p-6">


<Star className="h-8 w-8 fill-yellow-400 text-yellow-400"/>


<h3 className="mt-4 text-3xl font-bold">

4.9★

</h3>


<p className="mt-2 text-slate-300">

Customer Rating

</p>


</div>




<div className="rounded-3xl border border-white/10 bg-white/10 p-6">


<BadgeCheck className="h-8 w-8 text-green-400"/>


<h3 className="mt-4 text-3xl font-bold">

10K+

</h3>


<p className="mt-2 text-slate-300">

Happy Customers

</p>


</div>





<div className="rounded-3xl border border-white/10 bg-white/10 p-6">


<ShieldCheck className="h-8 w-8 text-yellow-400"/>


<h3 className="mt-4 text-3xl font-bold">

24×7

</h3>


<p className="mt-2 text-slate-300">

Customer Support

</p>


</div>



</div>


</div>


</div>





{/* FORM BODY */}


<div className="space-y-12 p-10">





{/* =============================
CUSTOMER INFORMATION
============================= */}


<div>


<div className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">

STEP 1

</div>



<h2 className="mt-5 text-3xl font-bold text-slate-900">

Customer Information

</h2>



<p className="mt-3 text-slate-600">

Please enter your contact information.

</p>


</div>





<div className="grid gap-8 md:grid-cols-2">



{/* NAME */}


<div>


<label className="mb-3 block font-semibold text-slate-800">

Full Name

</label>



<div className="relative">


<User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>


<input

required

type="text"

name="customerName"

value={formData.customerName}

onChange={handleChange}

placeholder="Your Name"

className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

/>


</div>


</div>





{/* PHONE */}


<div>


<label className="mb-3 block font-semibold text-slate-800">

Mobile Number

</label>



<div className="relative">


<Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>



<input

required

type="tel"

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="+91 9876543210"

className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

/>


</div>


</div>





{/* EMAIL */}


<div>


<label className="mb-3 block font-semibold text-slate-800">

Email

</label>



<div className="relative">


<Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="example@gmail.com"

className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

/>


</div>


</div>






{/* SERVICE */}


<div>


<label className="mb-3 block font-semibold text-slate-800">

Service

</label>


<select

name="serviceType"

value={formData.serviceType}

onChange={handleChange}

className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

>


<option>One Way</option>

<option>Round Trip</option>

<option>Airport Transfer</option>

<option>Local Rental</option>

<option>Tour Package</option>


</select>


</div>


</div>

{/* ===============================================
      JOURNEY ROUTE
================================================ */}


<div className="border-t border-slate-200 pt-12">


<div className="mb-8">


<div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

STEP 2

</div>



<h2 className="mt-5 text-3xl font-bold text-slate-900">

Journey Route

</h2>



<p className="mt-3 text-lg text-slate-600">

Enter your pickup and destination details.

</p>


</div>




<div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">


<LocationInputs

formData={formData}

setFormData={setFormData}

/>


</div>


</div>






{/* ===============================================
      VEHICLE SELECTION
================================================ */}



<div className="border-t border-slate-200 pt-12">



<div className="mb-8">


<div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

STEP 3

</div>




<h2 className="mt-5 text-3xl font-bold text-slate-900">

Select Your Vehicle

</h2>



<p className="mt-3 text-lg text-slate-600">

Choose the vehicle that best fits your travel needs.

</p>


</div>





<div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">


<VehicleSelector

formData={formData}

setFormData={setFormData}

/>


</div>






{/* VEHICLE CATEGORY CARDS */}



<div className="mt-8 grid gap-6 md:grid-cols-3">





{/* Economy */}


<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">


<h3 className="text-xl font-bold text-slate-900">

Economy

</h3>



<p className="mt-3 text-slate-600">

Swift Dzire, Etios or Similar

</p>




<ul className="mt-5 space-y-2 text-sm text-slate-500">


<li>✓ 4 Passengers</li>

<li>✓ AC Vehicle</li>

<li>✓ 2 Bags</li>


</ul>


</div>





{/* Sedan */}


<div className="rounded-3xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-white p-6 shadow-lg">


<span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">

MOST POPULAR

</span>




<h3 className="mt-4 text-xl font-bold text-slate-900">

Sedan

</h3>



<p className="mt-3 text-slate-600">

Honda City, Ciaz, Verna

</p>




<ul className="mt-5 space-y-2 text-sm text-slate-500">


<li>✓ Premium Comfort</li>

<li>✓ 4 Passengers</li>

<li>✓ Large Boot Space</li>


</ul>



</div>







{/* SUV */}


<div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm">


<h3 className="text-xl font-bold text-slate-900">

SUV

</h3>




<p className="mt-3 text-slate-600">

Ertiga, Innova, Crysta

</p>




<ul className="mt-5 space-y-2 text-sm text-slate-500">


<li>✓ 6–7 Passengers</li>

<li>✓ Extra Luggage</li>

<li>✓ Family Trips</li>


</ul>


</div>



</div>


</div>








{/* ===============================================
      FARE CALCULATOR
================================================ */}



<div className="border-t border-slate-200 pt-12">



<div className="mb-8">


<div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">

STEP 4

</div>




<h2 className="mt-5 text-3xl font-bold text-slate-900">

Estimated Fare

</h2>




<p className="mt-3 text-lg text-slate-600">

Calculate your estimated taxi fare instantly.

</p>


</div>




<div className="rounded-[30px] border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-8 shadow-lg">


<FareCalculator

vehicle={formData.vehicle}

pickup={formData.pickup}

drop={formData.drop}

/>


</div>


</div>







{/* ===============================================
      JOURNEY SCHEDULE
================================================ */}



<div className="border-t border-slate-200 pt-12">



<div className="mb-8">


<div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">

STEP 5

</div>




<h2 className="mt-5 text-3xl font-bold text-slate-900">

Journey Schedule

</h2>



<p className="mt-3 text-lg text-slate-600">

Select your travel date, pickup time and passenger count.

</p>


</div>





<div className="grid gap-8 md:grid-cols-3">



{/* DATE */}


<div>


<label className="mb-3 block font-semibold text-slate-800">

Journey Date

</label>




<div className="relative">


<Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>




<input

required

type="date"

name="travelDate"

value={formData.travelDate}

onChange={handleChange}

className="h-16 w-full rounded-2xl border border-slate-300 pl-14 pr-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

/>


</div>


</div>





{/* TIME */}


<div>


<label className="mb-3 block font-semibold text-slate-800">

Pickup Time

</label>




<div className="relative">


<Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>



<input

required

type="time"

name="travelTime"

value={formData.travelTime}

onChange={handleChange}

className="h-16 w-full rounded-2xl border border-slate-300 pl-14 pr-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

/>


</div>


</div>





{/* PASSENGERS */}


<div>


<label className="mb-3 block font-semibold text-slate-800">

Passengers

</label>




<div className="relative">


<Users className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>



<input

required

type="number"

min={1}

max={20}

name="passengers"

value={formData.passengers}

onChange={handleChange}

className="h-16 w-full rounded-2xl border border-slate-300 pl-14 pr-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

/>


</div>


</div>



</div>


</div>

{/* ===============================================
      PAYMENT METHOD
================================================ */}


<div className="border-t border-slate-200 pt-12">


<div className="mb-8">


<div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

STEP 6

</div>



<h2 className="mt-5 text-3xl font-bold text-slate-900">

Payment Method

</h2>



<p className="mt-3 text-lg text-slate-600">

Choose how you want to pay.

</p>


</div>




<PaymentOptions

formData={formData}

setFormData={setFormData}

/>


</div>








{/* ===============================================
      ADDITIONAL REQUIREMENTS
================================================ */}



<div className="border-t border-slate-200 pt-12">


<div className="mb-8">


<div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">

STEP 7

</div>




<h2 className="mt-5 text-3xl font-bold text-slate-900">

Additional Requirements

</h2>




<p className="mt-3 text-lg text-slate-600">

Tell us anything important about your trip.

</p>


</div>





<div className="relative">


<FileText className="absolute left-5 top-5 text-slate-400"/>



<textarea

rows={6}

name="specialNote"

value={formData.specialNote}

onChange={handleChange}

placeholder="Child seat, wheelchair, multiple stops..."

className="w-full rounded-3xl border border-slate-300 py-5 pl-14 pr-5 text-slate-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"

/>


</div>


</div>








{/* ===============================================
      SUBMIT BUTTON
================================================ */}



<div className="border-t border-slate-200 pt-12">


<button

type="submit"

disabled={loading}

className="group flex h-16 w-full items-center justify-center rounded-3xl bg-gradient-to-r from-yellow-400 to-amber-500 text-xl font-bold text-slate-900 transition hover:scale-[1.02] disabled:opacity-50"

>


{
loading

?

"Processing..."

:

<>

Confirm Booking


<ChevronRight

className="ml-3 h-6 w-6 transition group-hover:translate-x-2"

/>


</>

}



</button>





<p className="mt-5 text-center text-sm text-slate-500">

By booking you agree to our Terms & Conditions.

</p>



</div>





</div>


</form>







{/* ===============================================
      RIGHT SIDEBAR
================================================ */}



<div className="space-y-8">





<BookingSummary

formData={formData}

fare={calculateAmount()}

/>







{/* TRUST CARD */}



<div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">


<div className="flex items-center gap-3">


<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100">


<ShieldCheck

className="h-7 w-7 text-yellow-600"

/>


</div>




<div>


<h3 className="text-xl font-bold text-slate-900">

Safe & Secure Booking

</h3>


<p className="text-sm text-slate-500">

Your information is protected

</p>


</div>



</div>







<div className="mt-8 space-y-5">


<div className="flex gap-4">


<BadgeCheck className="mt-1 h-5 w-5 text-green-500"/>


<p className="text-sm text-slate-600">

Verified professional drivers

</p>


</div>




<div className="flex gap-4">


<BadgeCheck className="mt-1 h-5 w-5 text-green-500"/>


<p className="text-sm text-slate-600">

Clean & sanitized vehicles

</p>


</div>





<div className="flex gap-4">


<BadgeCheck className="mt-1 h-5 w-5 text-green-500"/>


<p className="text-sm text-slate-600">

Transparent pricing

</p>


</div>





<div className="flex gap-4">


<BadgeCheck className="mt-1 h-5 w-5 text-green-500"/>


<p className="text-sm text-slate-600">

24×7 customer support

</p>


</div>



</div>



</div>







{/* HELP CARD */}



<div className="rounded-[32px] bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 p-8 text-white">


<h3 className="text-2xl font-bold">

Need Help?

</h3>




<p className="mt-3 text-slate-300">

Our travel experts are available anytime.

</p>




<a

href="tel:+919876543210"

className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-yellow-400 font-bold text-slate-900 transition hover:bg-yellow-300"

>

Call Now

</a>


</div>




</div>


</div>


</div>


</section>






{/* SUCCESS MODAL */}



<SuccessModal

open={successOpen}

onClose={()=>setSuccessOpen(false)}

/>







{/* LOADING */}



{
loading && <LoadingOverlay />
}



</>

);


}