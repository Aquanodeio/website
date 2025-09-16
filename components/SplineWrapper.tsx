"use client";

import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

interface SplineWrapperProps {
  scene: string;
}

export default function SplineWrapper({ scene }: SplineWrapperProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse flex items-center justify-center">
          <span className="text-white/70">Loading 3D Scene...</span>
        </div>
      }
    >
      <Spline
        scene={scene}
        onLoad={() => console.log("Spline loaded successfully")}
        onError={(error) => {
          console.warn("Spline failed to load:", error);
          // The error is handled gracefully by the fallback
        }}
      />
    </Suspense>
  );
}
