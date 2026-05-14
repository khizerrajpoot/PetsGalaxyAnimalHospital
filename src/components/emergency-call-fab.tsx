"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function EmergencyCallFab() {
  const href = `tel:${siteConfig.phones.emergency.replaceAll(" ", "")}`;

  return (
    <a
      href={href}
      className="fixed bottom-5 left-5 z-50 inline-flex h-14 max-w-[calc(100vw-2.5rem)] items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 px-4 text-sm font-semibold text-white shadow-[0_18px_50px_-20px_rgba(225,29,72,0.75)] ring-2 ring-white/50 transition hover:brightness-110 hover:shadow-[0_20px_55px_-18px_rgba(225,29,72,0.85)] active:scale-[0.98] sm:px-5"
      aria-label={`Emergency call ${siteConfig.phones.emergency}`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/30">
        <Phone className="h-5 w-5" aria-hidden />
      </span>
      <span className="hidden pr-1 sm:inline">Emergency call</span>
      <span className="pr-1 sm:hidden">Call</span>
    </a>
  );
}
