import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function LocationPage() {
  const q = encodeURIComponent(siteConfig.address.full);
  const iframeSrc = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <div className="space-y-10">
      <header className="rounded-3xl bg-white/70 p-8 ring-1 ring-slate-200/70 backdrop-blur">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70 backdrop-blur">
          <MapPin className="h-3.5 w-3.5 text-indigo-700" />
          One branch • Lahore
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Location
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          {siteConfig.address.full}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            href={siteConfig.address.googleMapsLink}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Open in Google Maps <ExternalLink className="h-4 w-4" />
          </Button>
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Contact / Appointment
          </Button>
        </div>
      </header>

      <section className="overflow-hidden rounded-3xl bg-white/70 ring-1 ring-slate-200/70 backdrop-blur shadow-[0_30px_90px_-70px_rgba(15,23,42,0.55)]">
        <div className="aspect-[16/9] w-full">
          <iframe
            title="Pets Galaxy Animal Hospital Map"
            src={iframeSrc}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

