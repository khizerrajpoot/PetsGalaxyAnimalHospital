"use client";

import { Toaster } from "sonner";

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      closeButton
      duration={6500}
      offset={{ top: "5.5rem" }}
      toastOptions={{
        classNames: {
          closeButton:
            "bg-violet-50 text-violet-800 border border-violet-200/80 hover:bg-violet-100",
        },
      }}
    />
  );
}
