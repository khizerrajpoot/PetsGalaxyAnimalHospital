"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <motion.div
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),transparent_60%)] blur-2xl"
        animate={{ y: [0, 14, 0], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-48 -left-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.38),transparent_60%)] blur-2xl"
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-220px] right-[-220px] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-2xl"
        animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(99,102,241,0.12),transparent_55%),radial-gradient(700px_circle_at_85%_35%,rgba(168,85,247,0.10),transparent_55%),radial-gradient(800px_circle_at_50%_90%,rgba(59,130,246,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55),rgba(255,255,255,0.86),rgba(255,255,255,0.92))]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(15,23,42,0.7)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}

