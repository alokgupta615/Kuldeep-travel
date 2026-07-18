"use client";

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";

import { useRef, useState } from "react";

const libraries: ("places")[] = ["places"];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 28.6139,
  lng: 77.2090,
};

interface Props {
  formData: any;
  setFormData: any;
  onDistanceChange?: (
    distance: number,
    duration: string
  ) => void;
}

export default function GoogleMapComponent({
  formData,
  setFormData,
  onDistanceChange,
}: Props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const pickupRef =
    useRef<google.maps.places.Autocomplete | null>(
      null
    );

  const dropRef =
    useRef<google.maps.places.Autocomplete | null>(
      null
    );

  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(
      null
    );

  const [distance, setDistance] =
    useState("");

  const [duration, setDuration] =
    useState("");

  if (!isLoaded) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-3xl bg-slate-100">
        Loading Google Maps...
      </div>
    );
  }

  const calculateRoute = async () => {
    if (!formData.pickup || !formData.drop) return;

    const service =
      new google.maps.DirectionsService();

    const result = await service.route({
      origin: formData.pickup,
      destination: formData.drop,
      travelMode:
        google.maps.TravelMode.DRIVING,
    });

    setDirections(result);

    const leg = result.routes[0].legs[0];

    setDistance(leg.distance?.text || "");

    setDuration(leg.duration?.text || "");

    onDistanceChange?.(
      Number(
        leg.distance?.text.replace(" km", "")
      ),
      leg.duration?.text || ""
    );
  };
    return (
    <div className="space-y-6">

      {/* Address Inputs */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Pickup */}

        <div>

          <label className="mb-2 block font-medium">
            Pickup Location
          </label>

          <Autocomplete
            onLoad={(autocomplete) =>
              (pickupRef.current = autocomplete)
            }
            onPlaceChanged={() => {
              const place = pickupRef.current?.getPlace();

              if (place?.formatted_address) {
                setFormData((prev: any) => ({
                  ...prev,
                  pickup: place.formatted_address!,
                }));
              }
            }}
          >
            <input
              type="text"
              value={formData.pickup}
              onChange={(e) =>
                setFormData((prev: any) => ({
                  ...prev,
                  pickup: e.target.value,
                }))
              }
              placeholder="Enter Pickup Location"
              className="w-full rounded-xl border p-3 outline-none focus:border-yellow-400"
            />
          </Autocomplete>

        </div>

        {/* Drop */}

        <div>

          <label className="mb-2 block font-medium">
            Drop Location
          </label>

          <Autocomplete
            onLoad={(autocomplete) =>
              (dropRef.current = autocomplete)
            }
            onPlaceChanged={() => {
              const place = dropRef.current?.getPlace();

              if (place?.formatted_address) {
                setFormData((prev: any) => ({
                  ...prev,
                  drop: place.formatted_address!,
                }));
              }
            }}
          >
            <input
              type="text"
              value={formData.drop}
              onChange={(e) =>
                setFormData((prev: any) => ({
                  ...prev,
                  drop: e.target.value,
                }))
              }
              placeholder="Enter Destination"
              className="w-full rounded-xl border p-3 outline-none focus:border-yellow-400"
            />
          </Autocomplete>

        </div>

      </div>

      {/* Calculate Button */}

      <button
        type="button"
        onClick={calculateRoute}
        className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold transition hover:bg-yellow-300"
      >
        Calculate Route
      </button>

      {/* Distance Cards */}

      {distance && (
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-yellow-50 p-6 border border-yellow-200">

            <h4 className="text-lg font-semibold">
              Distance
            </h4>

            <p className="mt-2 text-3xl font-bold text-yellow-600">
              {distance}
            </p>

          </div>

          <div className="rounded-2xl bg-blue-50 p-6 border border-blue-200">

            <h4 className="text-lg font-semibold">
              Estimated Time
            </h4>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {duration}
            </p>

          </div>

        </div>
      )}

      {/* Google Map */}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
      >

        {directions ? (
          <DirectionsRenderer
            directions={directions}
          />
        ) : (
          <>
            <Marker position={center} />
          </>
        )}

      </GoogleMap>

    </div>
  );
}