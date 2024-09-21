"use client";
import React from "react";
import { Button } from "./componentss/UI/Moving";

export function MovingBorderDemo({children}) {
  return (
    (<div>
      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-black dark:text-white border-900 dark:border-slate-800">
        {children}
      </Button>
    </div>)
  );
}
