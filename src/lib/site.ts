export const siteConfig = {
  name: "Pets Galaxy Animal Hospital",
  shortName: "Pets Galaxy",
  description:
    "Modern veterinary care with a calm, caring experience for you and your pet.",
  address: {
    line1: "Service Road, Walton Rd, near Gourmet bakery",
    line2: "Defence Mor, Lahore, 05444, Pakistan",
    full:
      "Service Road, Walton Rd, near Gourmet bakery, Defence Mor Lahore, 05444, Pakistan",
    googleMapsLink: "https://maps.app.goo.gl/ZpA4okV5vFuAbrFw9",
    lat: 31.4765,
    lng: 74.3526,
  },
  hoursNote:
    "Hours can be updated anytime (we’ll show the latest from Google once the Place ID is set).",
  phones: {
    primary: "0370 4138491",
    whatsapp: "0370 4138491",
    /** Emergency / urgent line — shown on Emergency call; dial same as clinic or set a dedicated number */
    emergency: "0370 4138491",
  },
  /** Main logo in `public/` (Pet's Galaxy & Animal Hospital) */
  brandLogoSrc: "/ChatGPT%20Image%20May%207,%202026,%2005_20_37%20PM.png",
  /** Lead veterinarian portrait for marketing / toasts */
  drAbdullahPortraitSrc:
    "/ChatGPT%20Image%20May%2014,%202026,%2008_38_26%20PM.png",
  socials: {
    facebook: "",
    instagram: "",
  },
} as const;

