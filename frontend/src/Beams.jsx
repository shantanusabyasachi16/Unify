
"use client";
import React from "react";
import { BackgroundBeams } from "./componentss/UI/Beams";

export function BackgroundBeamsDemo({ children }) {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <BackgroundBeams />
      <div className="absolute inset-0 flex flex-col overflow-auto bg-transparent transition-opacity duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
}
