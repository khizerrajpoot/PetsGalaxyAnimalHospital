import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type AppointmentPayload = {
  name: string;
  phone: string;
  message: string;
};

function toWaMeNumber(raw: string) {
  const digits = raw.replaceAll(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits.slice(1);
  if (digits.startsWith("92")) return digits;
  if (digits.startsWith("0")) return `92${digits.slice(1)}`;
  return digits;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, phone, message } = (body ?? {}) as Partial<AppointmentPayload>;

  if (!isNonEmptyString(name) || !isNonEmptyString(phone) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { ok: false, error: "Please fill name, phone, and message." },
      { status: 400 },
    );
  }

  const clinicWa = toWaMeNumber(siteConfig.phones.whatsapp);
  const whatsappMessageBody = [
    "Appointment request",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    "",
    "Pet & reason:",
    message,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${clinicWa}?text=${encodeURIComponent(whatsappMessageBody)}`;

  return NextResponse.json({ ok: true, whatsappUrl }, { status: 200 });
}
