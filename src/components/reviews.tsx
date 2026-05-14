"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

type GoogleReview = {
  author_name: string;
  rating: number;
  relative_time_description?: string;
  text?: string;
  profile_photo_url?: string;
};

type GoogleReviewsPayload = {
  ok: boolean;
  source: "google" | "mock";
  placeName?: string;
  rating?: number;
  userRatingsTotal?: number;
  reviews: GoogleReview[];
  error?: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).filter(Boolean);
  return letters.length ? letters.join("") : "GU";
}

function Stars({ value }: { value: number }) {
  const rounded = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-4 w-4", i < rounded ? "fill-current" : "opacity-25")}
        />
      ))}
    </div>
  );
}

function ratingLabel(value: number) {
  if (value >= 4.8) return "EXCELLENT";
  if (value >= 4.5) return "EXCELLENT";
  if (value >= 4.0) return "VERY GOOD";
  if (value >= 3.5) return "GOOD";
  return "RATED";
}

function GoogleWordmark() {
  return (
    <div className="text-4xl font-semibold leading-none tracking-tight">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const avatar = review.profile_photo_url;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group w-[320px] shrink-0 rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200/70 backdrop-blur shadow-[0_18px_55px_-45px_rgba(15,23,42,0.45)] sm:w-[360px]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200 bg-white">
            {avatar ? (
              // Using <img> avoids Next/Image remote host restrictions for Google avatars.
              // Google review photos are already optimized and small.
              <img
                src={avatar}
                alt={`${review.author_name} profile photo`}
                className="h-full w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-xs font-semibold text-white">
                {initials(review.author_name)}
              </div>
            )}
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">
              {review.author_name}
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {review.relative_time_description ?? "Google review"}
            </div>
          </div>
        </div>
        <Stars value={review.rating} />
      </div>
      {review.text ? (
        <p className="mt-3 line-clamp-5 text-sm leading-6 text-slate-600">
          {review.text}
        </p>
      ) : (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Short and sweet—thank you for trusting us with your pet’s care.
        </p>
      )}
      <div className="mt-4 h-px bg-gradient-to-r from-indigo-200/60 via-violet-200/60 to-fuchsia-200/60" />
      <div className="mt-3 text-xs text-slate-500">
        Verified on Google
      </div>
    </motion.div>
  );
}

export function Reviews() {
  const { data, isLoading } = useSWR<GoogleReviewsPayload>(
    "/api/google-reviews",
    fetcher,
  );

  const payload = data;
  const reviews = payload?.reviews?.length ? payload.reviews : [];
  const items = useMemo(() => (reviews.length ? [...reviews, ...reviews] : []), [reviews]);
  const rating = payload?.rating ?? 0;
  const total = payload?.userRatingsTotal ?? 0;

  return (
    <section id="reviews" className="scroll-mt-28">
      <div className="flex flex-col gap-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-violet-700" />
            Google Reviews
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Trusted by pet parents
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            We bring a calm, clear and caring clinic experience—so you always
            know what’s happening and why.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="inline-flex rounded-3xl bg-white/70 px-6 py-5 ring-1 ring-slate-200/70 backdrop-blur shadow-[0_18px_55px_-45px_rgba(15,23,42,0.35)]">
          {payload?.rating ? (
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl font-semibold tracking-tight text-slate-900">
                {ratingLabel(rating)}
              </div>
              <div className="mt-3 scale-110">
                <Stars value={rating} />
              </div>
              <div className="mt-2 text-sm text-slate-700">
                Based on <span className="font-semibold text-slate-900">{total}</span>{" "}
                reviews
              </div>
              <div className="mt-4">
                <GoogleWordmark />
              </div>
            </div>
          ) : (
            <div className="text-slate-600">
              {isLoading ? "Loading reviews…" : "Add your Google Place ID to show live reviews."}
            </div>
          )}
        </div>
      </div>

      {!reviews.length ? (
        <div className="mt-6 rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200/70 backdrop-blur">
          <div className="text-sm font-semibold text-slate-900">
            Live reviews aren’t connected yet
          </div>
          <p className="mt-2 text-sm text-slate-600">
            When you add a Google Maps API key + Place ID, we’ll automatically
            pull rating and reviews here.
          </p>
          {payload?.error ? (
            <p className="mt-2 text-xs text-slate-500">Debug: {payload.error}</p>
          ) : null}
        </div>
      ) : (
        <div className="mt-6">
          <div
            className="reviews-loop relative rounded-3xl ring-1 ring-slate-200/70 bg-white/40 backdrop-blur"
            style={
              {
                ["--reviews-loop-duration" as never]: `${Math.max(26, reviews.length * 5)}s`,
              } as React.CSSProperties
            }
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-14 rounded-l-3xl bg-gradient-to-r from-white/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 rounded-r-3xl bg-gradient-to-l from-white/90 to-transparent" />

            <div className="reviews-loop__track gap-4 p-3 sm:p-4">
              {items.map((r, idx) => (
                <ReviewCard key={`${r.author_name}-${idx}`} review={r} />
              ))}
            </div>
          </div>

          <div className="mt-2 text-xs text-slate-500">Hover to pause.</div>
        </div>
      )}
    </section>
  );
}

