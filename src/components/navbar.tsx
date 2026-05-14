"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HeartPulse, MapPin, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
  { id: "reviews", label: "Reviews" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const emergencyTel = `tel:${siteConfig.phones.emergency.replaceAll(" ", "")}`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-4 2xl:max-w-[90rem]">
        <div className="rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-slate-200/70 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.45)]">
          <div className="flex items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-5">
            <Link
              href="/#home"
              className="group flex shrink-0 items-center gap-2.5 sm:gap-3.5"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.25)] sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20">
                <Image
                  src={siteConfig.brandLogoSrc}
                  alt={`${siteConfig.shortName} logo`}
                  fill
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, 80px"
                  className="object-contain p-0.5 sm:p-1"
                  priority
                />
                <motion.span
                  aria-hidden
                  className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-white/80 text-indigo-700 ring-1 ring-white/60"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </motion.span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight text-slate-900 whitespace-nowrap sm:text-base">
                  {siteConfig.shortName}
                  <span className="font-medium text-slate-600"> Animal Hospital</span>
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => {
                const active = pathname === "/" && item.id === "home";
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900",
                      active && "text-slate-900",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 ring-1 ring-slate-200/80"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <Button
                href={emergencyTel}
                variant="secondary"
                size="sm"
                className="border border-rose-200/90 bg-gradient-to-r from-rose-50 to-orange-50/90 text-rose-950 shadow-[0_10px_28px_-16px_rgba(225,29,72,0.45)] ring-rose-200/80 hover:from-rose-100 hover:to-orange-50"
                aria-label={`Emergency call ${siteConfig.phones.emergency}`}
              >
                <Phone className="h-4 w-4 text-rose-700" />
                <span className="md:hidden">Emergency</span>
                <span className="hidden md:inline">Emergency call</span>
              </Button>
              <a
                className="hidden items-center gap-2 rounded-full bg-white/60 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70 transition hover:bg-white md:flex"
                href={siteConfig.address.googleMapsLink}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="h-4 w-4 text-indigo-700" />
                Directions
              </a>
              <Button
                href="/"
                size="sm"
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                <HeartPulse className="h-4 w-4 opacity-90 transition group-hover:scale-110" />
                Book Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

