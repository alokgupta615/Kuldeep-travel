"use client";

import {
  User,
  MapPinned,
  CarFront,
  CreditCard,
  ClipboardCheck,
  Check,
} from "lucide-react";

interface Props {
  currentStep: number;
}

const steps = [
  {
    id: 1,
    title: "Personal",
    icon: User,
  },
  {
    id: 2,
    title: "Journey",
    icon: MapPinned,
  },
  {
    id: 3,
    title: "Vehicle",
    icon: CarFront,
  },
  {
    id: 4,
    title: "Payment",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Review",
    icon: ClipboardCheck,
  },
];

export default function ProgressBar({
  currentStep,
}: Props) {
  return (
    <div className="mb-12">

      <div className="flex items-center justify-between">

        {steps.map((step, index) => {
          const completed = currentStep > step.id;
          const active = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300

                  ${
                    completed
                      ? "border-green-500 bg-green-500 text-white"
                      : active
                      ? "border-yellow-400 bg-yellow-400 text-slate-900 shadow-lg"
                      : "border-slate-300 bg-white text-slate-500"
                  }`}
                >
                  {completed ? (
                    <Check size={24} />
                  ) : (
                    <step.icon size={24} />
                  )}
                </div>

                <p
                  className={`mt-3 text-sm font-semibold

                  ${
                    active
                      ? "text-blue-700"
                      : completed
                      ? "text-green-600"
                      : "text-slate-500"
                  }`}
                >
                  {step.title}
                </p>

              </div>

              {index !== steps.length - 1 && (
                <div className="mx-3 h-1 flex-1 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className={`h-full rounded-full transition-all duration-500

                    ${
                      currentStep > step.id
                        ? "w-full bg-green-500"
                        : "w-0"
                    }`}
                  />

                </div>
              )}
            </div>
          );
        })}

      </div>

    </div>
  );
}