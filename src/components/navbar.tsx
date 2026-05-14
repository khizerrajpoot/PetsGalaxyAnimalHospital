"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, MapPin, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "pet-medications", label: "Medications" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
  { id: "reviews", label: "Reviews" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  function navHref(id: string) {
    return id === "home" ? "/#home" : `/#${id}`;
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-slate-200/70 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.45)]">
          <div className="flex min-w-0 items-center justify-between gap-2 px-4 py-3 sm:px-5">
            <Link
              href="/#home"
              className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3 xl:flex-initial xl:shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.25)] sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-[4.5rem] xl:w-[4.5rem]">
                <Image
                  src={siteConfig.brandLogoSrc}
                  alt={`${siteConfig.shortName} logo`}
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, (max-width: 1280px) 64px, 72px"
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
              <div className="min-w-0 leading-tight">
                <div className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                  {siteConfig.shortName}
                </div>
                <div className="truncate text-xs text-slate-600">Animal Hospital</div>
              </div>
            </Link>

            <nav
              className="hidden min-w-0 items-center gap-0.5 xl:flex xl:gap-1"
              aria-label="Primary"
            >
              {nav.map((item) => {
                const active = pathname === "/" && item.id === "home";
                return (
                  <Link
                    key={item.id}
                    href={navHref(item.id)}
                    onClick={(e) => {
                      if (pathname === "/") {
                        e.preventDefault();
                        scrollTo(item.id);
                      }
                    }}
                    className={cn(
                      "relative rounded-full px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 xl:px-4",
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
                  </Link>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              <a
                className="hidden items-center gap-2 rounded-full bg-white/60 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70 transition hover:bg-white xl:flex"
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
                className="group hidden xl:inline-flex"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                <HeartPulse className="h-4 w-4 opacity-90 transition group-hover:scale-110" />
                Book Visit
              </Button>

              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 text-slate-800 ring-1 ring-slate-200/80 transition hover:bg-white hover:ring-slate-300/80 xl:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              key="nav-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-[2px] xl:hidden"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="nav-panel"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="fixed inset-y-0 right-0 z-[110] flex w-[min(100vw-2rem,20rem)] flex-col bg-white/95 shadow-2xl ring-1 ring-slate-200/80 backdrop-blur-xl xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3">
                <span className="text-sm font-semibold text-slate-900">Menu</span>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.id}
                    href={navHref(item.id)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-violet-50 hover:text-violet-950"
                    onClick={(e) => {
                      if (pathname === "/") {
                        e.preventDefault();
                        scrollTo(item.id);
                      }
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-slate-200/80 p-3">
                <a
                  className="mb-2 flex items-center justify-center gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-medium text-slate-800 ring-1 ring-slate-200/70 transition hover:bg-slate-50"
                  href={siteConfig.address.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <MapPin className="h-4 w-4 text-indigo-700" />
                  Directions
                </a>
                <Button
                  href="/"
                  size="lg"
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    if (pathname === "/") {
                      scrollTo("contact");
                    } else {
                      window.location.href = "/#contact";
                    }
                  }}
                >
                  <HeartPulse className="h-4 w-4" />
                  Book Visit
                </Button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
