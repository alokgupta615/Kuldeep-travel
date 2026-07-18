"use client";

import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  open: boolean;
}

export default function LoadingOverlay({
  open,
}: LoadingOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl">

        <div className="flex justify-center">
          <div className="rounded-full bg-yellow-100 p-5">
            <Loader2
              size={48}
              className="animate-spin text-yellow-500"
            />
          </div>
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-slate-900">
          Processing Booking
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Please wait while we save your booking and notify our team.
        </p>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-full animate-pulse rounded-full bg-yellow-400" />
        </div>

        <p className="mt-3 text-center text-sm text-slate-400">
          This usually takes only a few seconds...
        </p>

      </div>
    </div>
  );
}