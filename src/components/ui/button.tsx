"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-[0_12px_36px_-18px_rgba(99,102,241,0.75)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white/70 text-slate-900 ring-1 ring-slate-200/80 backdrop-blur hover:bg-white hover:ring-slate-300",
  ghost:
    "text-slate-900 hover:bg-slate-900/5 ring-1 ring-transparent hover:ring-slate-200/60",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function isCustomSchemeHref(href: string) {
  return /^(mailto|tel|sms):/i.test(href);
}

export function Button({
  className,
  asChild,
  href,
  variant = "primary",
  size = "md",
  disabled,
  children,
  onClick,
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    // Next.js <Link> is for app navigation; mailto/tel/sms must use a real <a>.
    if (isCustomSchemeHref(href)) {
      return (
        <a
          href={href}
          className={classes}
          target={target}
          rel={rel}
          aria-disabled={disabled ? true : undefined}
          onClick={
            disabled
              ? (e) => {
                  e.preventDefault();
                }
              : (onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined)
          }
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-disabled={disabled ? true : undefined}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </Link>
    );
  }

  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={classes} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </Comp>
  );
}

