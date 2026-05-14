"use client";

import * as React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

function showAppointmentSentToDrToast() {
  toast.custom(
    () => (
      <div className="flex w-full max-w-[22rem] items-start gap-3 rounded-2xl border border-violet-200/90 bg-white p-3.5 shadow-[0_22px_70px_-32px_rgba(91,33,182,0.5)] ring-1 ring-violet-100/90">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-violet-100 ring-2 ring-violet-300/80 shadow-[0_8px_24px_-12px_rgba(109,40,217,0.55)]">
          <Image
            src={siteConfig.drAbdullahPortraitSrc}
            alt="Dr. Abdullah Akbar"
            width={56}
            height={56}
            className="h-14 w-14 object-cover object-top"
          />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-sm font-semibold text-violet-950">Appointment request sent</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            Your request is being shared with{" "}
            <span className="font-semibold text-slate-900">Dr. Abdullah Akbar</span>. Tap{" "}
            <span className="font-medium text-violet-800">Send</span> in WhatsApp to complete it.
          </p>
        </div>
      </div>
    ),
    { duration: 7500 },
  );
}

export function AppointmentForm() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "error"; error: string; whatsappUrl?: string }
  >({ state: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });
      const data = (await res.json()) as {
        ok: boolean;
        error?: string;
        whatsappUrl?: string;
      };

      if (data.ok && data.whatsappUrl) {
        setName("");
        setPhone("");
        setMessage("");
        showAppointmentSentToDrToast();
        window.open(data.whatsappUrl, "_blank", "noreferrer");
        setStatus({ state: "idle" });
        return;
      }

      setStatus({
        state: "error",
        error: data.error ?? "Something went wrong.",
        whatsappUrl: data.whatsappUrl,
      });
      if (data.whatsappUrl) window.open(data.whatsappUrl, "_blank", "noreferrer");
    } catch (err: unknown) {
      setStatus({
        state: "error",
        error: err instanceof Error ? err.message : "Failed to submit request.",
      });
    }
  }

  return (
    <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-slate-700">Your name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Aiman"
            className="h-11 rounded-2xl bg-white/80 px-4 text-slate-900 ring-1 ring-slate-200/70 outline-none transition focus:ring-2 focus:ring-violet-500/60"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-slate-700">Phone</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g., 03xx xxxxxxx"
            className="h-11 rounded-2xl bg-white/80 px-4 text-slate-900 ring-1 ring-slate-200/70 outline-none transition focus:ring-2 focus:ring-violet-500/60"
          />
        </label>
      </div>

      <label className="grid gap-1 text-sm">
        <span className="text-slate-700">Pet & reason</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cat / Dog • symptoms • preferred date & time"
          className="min-h-[120px] rounded-2xl bg-white/80 p-4 text-slate-900 ring-1 ring-slate-200/70 outline-none transition focus:ring-2 focus:ring-violet-500/60"
        />
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status.state === "submitting"}
        >
          {status.state === "submitting" ? "Opening…" : "Send request"}
        </Button>
      </div>

      {status.state === "error" ? (
        <div className="text-sm text-rose-700">
          {status.error}{" "}
          {status.whatsappUrl ? (
            <a className="underline" href={status.whatsappUrl} target="_blank" rel="noreferrer">
              Open WhatsApp
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
