"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Star } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-slate-200/70 bg-white/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 2xl:max-w-[90rem]">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 sm:h-[4.5rem] sm:w-[4.5rem]">
                <Image
                  src={siteConfig.brandLogoSrc}
                  alt={`${siteConfig.shortName} logo`}
                  fill
                  sizes="(max-width: 640px) 64px, 72px"
                  className="object-contain p-0.5 sm:p-1"
                />
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {siteConfig.name}
              </div>
            </div>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              A clean, calming clinic experience—built around compassionate care,
              clear communication, and modern diagnostics.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70 transition hover:bg-white"
                href={siteConfig.address.googleMapsLink}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="h-4 w-4 text-indigo-700" />
                Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70 transition hover:bg-white"
                href="#reviews"
              >
                <Star className="h-4 w-4 text-violet-700" />
                Reviews
              </a>
            </div>
          </div>

          <div className="grid gap-2 text-sm">
            <div className="font-semibold text-slate-900">Quick links</div>
            <Link
              className="text-slate-600 hover:text-slate-900"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("services");
              }}
            >
              Services
            </Link>
            <Link
              className="text-slate-600 hover:text-slate-900"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("location");
              }}
            >
              Location
            </Link>
            <Link
              className="text-slate-600 hover:text-slate-900"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Contact
            </Link>
          </div>

          <div className="grid gap-2 text-sm">
            <div className="font-semibold text-slate-900">Contact</div>
            <div className="text-slate-600">{siteConfig.address.full}</div>
            <a
              className="mt-1 inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
              href={`tel:${siteConfig.phones.primary.replaceAll(" ", "")}`}
            >
              <Phone className="h-4 w-4 text-indigo-700" />
              {siteConfig.phones.primary}
            </a>
            <div className="mt-2 text-xs text-slate-500">
              {siteConfig.hoursNote}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/70 pt-6 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

