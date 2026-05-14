"use client";

import { siteConfig } from "@/lib/site";

function toWaMeNumber(raw: string) {
  // Convert local PK formats like "0370 4138491" or "+92 370 4138491" to "923704138491"
  const digits = raw.replaceAll(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits.slice(1);
  if (digits.startsWith("92")) return digits;
  if (digits.startsWith("0")) return `92${digits.slice(1)}`;
  return digits;
}

export function WhatsAppFab() {
  const number = toWaMeNumber(siteConfig.phones.whatsapp);
  const message =
    "Hi! I’d like to make an appointment and discuss my pet. Please guide me on the available timings.";
  const href = `https://wa.me/${encodeURIComponent(number)}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_18px_55px_-25px_rgba(0,0,0,0.55)] ring-1 ring-white/40 transition hover:scale-[1.04] active:scale-[0.98]"
    >
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        aria-hidden="true"
        className="fill-white"
      >
        <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.14-.42-2.17-1.33-.8-.72-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.11 2.83.14.18 1.91 2.92 4.62 4.09.65.28 1.15.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.82-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z" />
        <path d="M26.67 5.33C23.87 2.53 20.14 1 16.18 1 7.98 1 1.33 7.65 1.33 15.85c0 2.61.68 5.15 1.97 7.39L1.21 31l7.91-2.07c2.17 1.18 4.62 1.81 7.06 1.81h.01c8.2 0 14.85-6.65 14.85-14.85 0-3.96-1.54-7.69-4.37-10.56zm-10.49 22.9h-.01c-2.21 0-4.38-.6-6.27-1.74l-.45-.27-4.7 1.23 1.25-4.58-.29-.47c-1.22-1.94-1.86-4.18-1.86-6.51C3.85 8.95 9.28 3.52 16.18 3.52c3.34 0 6.48 1.3 8.84 3.66 2.36 2.36 3.66 5.5 3.65 8.85 0 6.9-5.59 12.2-12.49 12.2z" />
      </svg>
    </a>
  );
}

