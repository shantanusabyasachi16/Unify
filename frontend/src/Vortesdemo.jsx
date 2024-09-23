import React from "react";
import { Vortex } from "./componentss/UI/Vortes";

export function VortexDemo({ children }) {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <Vortex>
        <div className="absolute inset-0 flex flex-col overflow-auto bg-transparent transition-opacity duration-300 ease-in-out">
          {children}
        </div>
      </Vortex>
    </div>
  );
}
