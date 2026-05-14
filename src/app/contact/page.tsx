import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/appointment-form";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  const tel = siteConfig.phones.primary.replaceAll(" ", "");
  const emergencyTel = siteConfig.phones.emergency.replaceAll(" ", "");
  const whatsapp = siteConfig.phones.whatsapp.replaceAll(" ", "");

  return (
    <div className="space-y-10">
      <header className="rounded-3xl bg-white/70 p-8 ring-1 ring-slate-200/70 backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Use the form to open WhatsApp with your details prefilled, or call and open
          directions instantly.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="lg:col-span-3 rounded-3xl bg-white/70 p-7 ring-1 ring-slate-200/70 backdrop-blur">
          <div className="text-sm font-semibold text-slate-900">
            Appointment request
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Submit to open WhatsApp with your details prefilled—tap Send in WhatsApp
            to reach us.
          </p>

          <AppointmentForm />

          <div className="mt-4">
            <Button
              href={siteConfig.address.googleMapsLink}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Open directions
            </Button>
          </div>
        </section>

        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-slate-200/70 backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <MapPin className="h-4 w-4 text-indigo-700" />
              Address
            </div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              {siteConfig.address.full}
            </div>
          </div>

          <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-slate-200/70 backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Phone className="h-4 w-4 text-indigo-700" />
              Phone / WhatsApp
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              <a className="text-slate-700 hover:text-slate-900" href={`tel:${tel}`}>
                {siteConfig.phones.primary}
              </a>
              <a
                className="text-slate-700 hover:text-slate-900"
                href={`https://wa.me/${whatsapp.replaceAll("+", "")}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {siteConfig.phones.whatsapp}
              </a>
              <Button
                href={`tel:${emergencyTel}`}
                variant="secondary"
                className="mt-2 w-full justify-center border border-rose-200/90 bg-gradient-to-r from-rose-50 to-orange-50/90 text-rose-950 ring-rose-200/70 hover:from-rose-100"
              >
                <Phone className="h-4 w-4 text-rose-700" />
                Emergency call
              </Button>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Replace these numbers in <code className="font-mono">src/lib/site.ts</code>.
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}

