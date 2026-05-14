import { NextResponse } from "next/server";

type Review = {
  author_name: string;
  rating: number;
  relative_time_description?: string;
  text?: string;
  profile_photo_url?: string;
};

type GooglePlaceReview = {
  author_name?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  profile_photo_url?: string;
};

type GooglePlaceDetailsResult = {
  name?: string;
  rating?: number;
  user_ratings_total?: number;
  reviews?: GooglePlaceReview[];
};

type GooglePlaceDetailsResponse = {
  status?: string;
  result?: GooglePlaceDetailsResult;
};

const MOCK_REVIEWS: Review[] = [
  {
    author_name: "Ayesha T.",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Super clean clinic, very cooperative staff, and the doctor explained everything clearly. Felt safe bringing my cat here.",
  },
  {
    author_name: "Hassan R.",
    rating: 5,
    relative_time_description: "1 month ago",
    text: "Quick diagnosis and gentle handling. The follow-up message on WhatsApp was a nice touch.",
  },
  {
    author_name: "Zara K.",
    rating: 4,
    relative_time_description: "3 months ago",
    text: "Great care and very professional. Waiting time was reasonable and the environment is calm.",
  },
];

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        ok: true,
        source: "mock",
        reviews: MOCK_REVIEWS,
        error:
          "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID. Add them in .env.local to show live reviews.",
      },
      { status: 200 },
    );
  }

  const fields = [
    "name",
    "rating",
    "user_ratings_total",
    "reviews",
  ].join(",");

  const url =
    "https://maps.googleapis.com/maps/api/place/details/json" +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=${encodeURIComponent(fields)}` +
    `&reviews_sort=newest` +
    `&key=${encodeURIComponent(apiKey)}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 * 60 } });
    const data = (await res.json()) as GooglePlaceDetailsResponse;

    if (!res.ok || data?.status !== "OK") {
      return NextResponse.json(
        {
          ok: false,
          source: "google",
          reviews: MOCK_REVIEWS,
          error: `Google Places error: ${data?.status ?? res.status}`,
        },
        { status: 200 },
      );
    }

    const result = data.result ?? {};
    const reviews: Review[] = Array.isArray(result.reviews)
      ? result.reviews.map((r) => ({
          author_name: r.author_name ?? "Google user",
          rating: Number(r.rating ?? 0),
          relative_time_description: r.relative_time_description,
          text: r.text,
          profile_photo_url: r.profile_photo_url,
        }))
      : [];

    return NextResponse.json(
      {
        ok: true,
        source: "google",
        placeName: result.name,
        rating: result.rating,
        userRatingsTotal: result.user_ratings_total,
        reviews,
      },
      { status: 200 },
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Failed to load Google reviews.";
    return NextResponse.json(
      {
        ok: false,
        source: "google",
        reviews: MOCK_REVIEWS,
        error: message,
      },
      { status: 200 },
    );
  }
}

