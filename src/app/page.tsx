import Image from "next/image";
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Microscope,
  Phone,
  Pill,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Reviews } from "@/components/reviews";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { AppointmentForm } from "@/components/appointment-form";

const services = [
  {
    title: "Clinical Examination",
    desc: "Routine checkups, skin/ear issues, appetite changes, fever, allergies—clear guidance and gentle handling.",
    icon: Activity,
    tint: "bg-[#EDE7FF]",
    imageSrc: "/professional-veterinarian-check-dog-breed-yorkshire-terrier-using-otoscope-pet-hospital.jpg",
  },
  {
    title: "Vaccination",
    desc: "Vaccination plans based on age, breed, and lifestyle—so your pet stays protected year-round.",
    icon: Baby,
    tint: "bg-[#E8F1FF]",
    imageSrc: "/cute-cat-medical-examination-veterinary-clinic-measuring-blood-pressure.jpg",
  },
  {
    title: "Deworming",
    desc: "Safe, effective parasite control with reminders and guidance for prevention at home.",
    icon: Bone,
    tint: "bg-[#E9F8F1]",
    imageSrc: "/close-portrait-beautiful-stripped-cat-relaxing-zebra-blanket.jpg",
  },
  {
    title: "Diagnostics",
    desc: "Lab testing and clinical diagnostics to support accurate treatment decisions.",
    icon: Microscope,
    tint: "bg-[#FFF1DF]",
    imageSrc: "/dignostic.jpg",
  },
  {
    title: "Surgeries",
    desc: "From routine procedures to complex cases—careful monitoring and a comfort-first approach.",
    icon: Scissors,
    tint: "bg-[#F4E9FF]",
    imageSrc: "/pet-surgery-dog-cat-spruce-grove.jpg",
  },
  {
    title: "Dentistry",
    desc: "Dental exams and treatments to keep teeth clean, gums healthy, and breath fresh.",
    icon: Smile,
    tint: "bg-[#FFE9F2]",
    imageSrc: "/NODE50Feat-620x620-PetDentalHealth.jpg",
  },
] as const;

const petMedicationShowcase = [
  {
    id: "catsect2" as const,
    imageSrc: "/catsec2.webp",
    imageAlt: "Cat receiving gentle care and medication guidance at the clinic",
    title: "Feline parasite prevention",
    description:
      "Spot-ons, wormers, and flea control matched to your cat’s weight and age—we walk you through timing, storage, and what to watch for at home.",
  },
  {
    id: "catsect3" as const,
    imageSrc: "/catsec3.webp",
    imageAlt: "Cat wellness visit focused on prescriptions and follow-up care",
    title: "Prescriptions & refills for cats",
    description:
      "Chronic medications and post-visit plans with clear dosing labels and reminders, so treatment stays steady without guesswork.",
  },
  {
    id: "dogsec" as const,
    imageSrc: "/dogsec1.webp",
    imageAlt: "Dog with veterinarian discussing medications and prevention",
    title: "Dog medications & prevention",
    description:
      "Heartworm prevention, antibiotics when prescribed, and pain-support plans sized for your dog’s breed and weight—with practical tips for tablets and liquids.",
  },
] as const;

export default function Home() {
  const q = encodeURIComponent(siteConfig.address.full);
  const iframeSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const tel = siteConfig.phones.primary.replaceAll(" ", "");

  return (
    <div className="space-y-20">
      <section id="home" className="relative overflow-hidden scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200/70 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-violet-700" />
              Calm clinic experience • Modern care
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Aesthetic care for pets,
              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                built around trust.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              {siteConfig.name} is designed to feel calm and premium—while staying
              fast, transparent and focused on your pet’s health.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#contact" size="lg" className="w-full sm:w-auto">
                <Calendar className="h-4 w-4" />
                Request an appointment
              </Button>
              <Button
                href="/#services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                View services <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Shield, title: "Hygienic", text: "Clean, organized, calm." },
                { icon: CheckCircle2, title: "Clear", text: "Explain-first care plans." },
                { icon: MapPin, title: "Easy to reach", text: "Walton Rd, Defence Mor." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200/70 backdrop-blur"
                >
                  <f.icon className="h-5 w-5 text-indigo-700" />
                  <div className="mt-3 text-sm font-semibold text-slate-900">
                    {f.title}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">
                    {f.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50/90 via-violet-50/80 to-fuchsia-50/70 p-[3px] shadow-[0_28px_90px_-48px_rgba(91,33,182,0.45),0_18px_50px_-35px_rgba(99,102,241,0.35)] ring-1 ring-violet-200/80">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.4rem] bg-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                <Image
                  src="/clinic1.webp"
                  alt={`${siteConfig.name} — clinic interior`}
                  fill
                  className="object-cover transition duration-500 ease-out hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/25 via-transparent to-violet-500/10"
                  aria-hidden
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-7 -left-7 h-32 w-32 rounded-3xl bg-gradient-to-br from-indigo-600/25 via-violet-600/25 to-fuchsia-600/25 blur-xl" />
            <div className="pointer-events-none absolute -right-7 -top-7 h-28 w-28 rounded-3xl bg-gradient-to-br from-violet-500/25 via-fuchsia-500/20 to-indigo-500/20 blur-xl" />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-white/70 p-8 ring-1 ring-slate-200/70 backdrop-blur shadow-[0_30px_90px_-70px_rgba(15,23,42,0.55)]">
            <div className="text-sm font-semibold text-slate-900">About {siteConfig.shortName}</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Professional care, calm experience
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We focus on modern veterinary essentials—clear diagnosis, gentle handling, and a plan you
              can trust. Our goal is to make every visit feel simple, respectful, and premium.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Qualified care", text: "Explain-first treatment plans." },
                { title: "Hygienic clinic", text: "Clean, calm, organized space." },
                { title: "Pet comfort", text: "Gentle handling and monitoring." },
                { title: "Fast support", text: "WhatsApp follow-ups when needed." },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200/70">
                  <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">{f.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/#services" variant="secondary" className="w-full sm:w-auto">
                View services <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/#contact" className="w-full sm:w-auto">
                Request an appointment <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50/90 via-fuchsia-50/70 to-indigo-50/80 p-[3px] shadow-[0_28px_90px_-48px_rgba(109,40,217,0.4),0_18px_50px_-35px_rgba(168,85,247,0.3)] ring-1 ring-violet-200/80 backdrop-blur">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.4rem] bg-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              <Image
                src="/clinic2.webp"
                alt={`${siteConfig.shortName} — clinic and care environment`}
                fill
                className="object-cover transition duration-500 ease-out hover:scale-[1.02]"
                sizes="(min-width: 1024px) 42vw, 90vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-900/15 via-transparent to-indigo-500/15"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      <section id="our-doctor" className="scroll-mt-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50/95 via-violet-50/85 to-fuchsia-50/75 p-[3px] shadow-[0_28px_90px_-48px_rgba(91,33,182,0.42),0_18px_50px_-35px_rgba(99,102,241,0.32)] ring-1 ring-violet-200/85">
              <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-[1.4rem] bg-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:aspect-[4/5] lg:mx-0 lg:max-w-none">
                <Image
                  src={siteConfig.drAbdullahPortraitSrc}
                  alt="Dr. Abdullah Akbar — Veterinary Doctor and Chief Executive Officer"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority={false}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/35 via-transparent to-violet-400/10"
                  aria-hidden
                />
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-3xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 blur-2xl lg:block" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-violet-800 ring-1 ring-violet-200/80 backdrop-blur">
              <Stethoscope className="h-3.5 w-3.5 text-violet-700" />
              Leading veterinarian · Chief Executive Officer
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Aesthetic care for pets,
              <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                built around trust.
              </span>
            </h2>
            <p className="mt-2 text-lg font-bold tracking-tight text-slate-900">
              Dr. Abdullah Akbar
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Dr. Abdullah Akbar leads {siteConfig.name} with a strong veterinary degree and extensive hands-on
              experience across small-animal medicine, surgery, and preventive care. He has worked with a large and
              diverse clientele—supporting busy families with clear explanations, gentle handling, and treatment plans
              that balance safety, comfort, and results.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              His practical, client-first approach means you always know the “why” behind a diagnosis or medication,
              so you can make confident decisions for your pet.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/#contact" size="lg" className="w-full sm:w-auto">
                Book with Dr. Akbar <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/#services" variant="secondary" size="lg" className="w-full sm:w-auto">
                View services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Services</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Professional services for pets
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Clear essentials—focused on what most pet parents need, with comfort-first care.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="/#contact" variant="secondary">
              Make an appointment <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-3xl ${s.tint} ring-1 ring-slate-200/70 transition hover:-translate-y-1 shadow-[0_18px_55px_-48px_rgba(15,23,42,0.35)]`}
            >
              <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(60%_60%_at_20%_20%,black,transparent)] bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.9),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.9),transparent_55%)]" />

              <div className="relative grid min-h-[220px] grid-cols-[1.05fr_0.95fr] gap-3 p-6">
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/85 ring-1 ring-white/60 shadow-sm">
                    <s.icon className="h-5 w-5 text-indigo-700" />
                  </div>
                  <div className="mt-4 text-xl font-semibold leading-tight tracking-tight text-slate-900">
                    {s.title}
                  </div>
                  <div className="mt-2 h-1 w-12 rounded-full bg-indigo-600/70" />
                  <p className="mt-4 text-sm leading-6 text-slate-700/90">
                    {s.desc}
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-white/30 backdrop-blur-[1px]" />
                  <div className="relative h-[190px] w-full overflow-hidden rounded-2xl sm:h-[200px]">
                    <Image
                      src={s.imageSrc}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 768px) 40vw, 80vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pet-medications" className="scroll-mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50/90 via-violet-50/70 to-fuchsia-50/60 p-7 ring-1 ring-violet-200/70 shadow-[0_24px_80px_-50px_rgba(91,33,182,0.28)] sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-violet-400/25 to-fuchsia-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-400/20 to-transparent blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-violet-800 ring-1 ring-violet-200/80 backdrop-blur">
              <Pill className="h-3.5 w-3.5 text-violet-700" />
              Pharmacy & take-home care
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Pet medications
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              We dispense and explain medications with the same calm, premium experience as the rest of your visit—
              clear instructions for cats and dogs, safe handling, and follow-up when you need it.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {petMedicationShowcase.map((item) => {
                const frame =
                  item.id === "dogsec"
                    ? "from-indigo-100/95 via-sky-50/80 to-violet-100/90 shadow-[0_22px_70px_-40px_rgba(37,99,235,0.35),0_14px_40px_-28px_rgba(109,40,217,0.25)] ring-indigo-200/90"
                    : item.id === "catsect2"
                      ? "from-fuchsia-50/95 via-violet-50/90 to-indigo-50/85 shadow-[0_22px_70px_-40px_rgba(147,51,234,0.32),0_14px_40px_-28px_rgba(192,38,211,0.2)] ring-fuchsia-200/80"
                      : "from-violet-50/95 via-indigo-50/88 to-fuchsia-50/85 shadow-[0_22px_70px_-40px_rgba(109,40,217,0.3),0_14px_40px_-28px_rgba(99,102,241,0.22)] ring-violet-200/85";

                return (
                  <article
                    key={item.id}
                    id={item.id}
                    className={`${item.id} group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br p-[3px] ring-1 transition duration-300 hover:-translate-y-0.5 ${frame}`}
                  >
                    <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-sm">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          fill
                          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 45vw, 90vw"
                        />
                        <div
                          className={
                            item.id === "dogsec"
                              ? "pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-indigo-900/5 to-transparent"
                              : "pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-950/25 via-fuchsia-900/5 to-transparent"
                          }
                          aria-hidden
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
                        <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 opacity-80" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-5 text-slate-500">
                Always use medications exactly as directed. If you notice vomiting, lethargy, or a rash after a new
                product, pause and contact us or WhatsApp for guidance.
              </p>
              <Button href="/#contact" variant="secondary" className="w-full shrink-0 sm:w-auto">
                Ask about medications <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-white/70 p-7 ring-1 ring-slate-200/70 backdrop-blur">
            <div className="text-sm font-semibold text-slate-900">Location</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{siteConfig.address.full}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.address.googleMapsLink} variant="secondary" className="w-full sm:w-auto">
                Open in Google Maps <ExternalLink className="h-4 w-4" />
              </Button>
              <Button href="/#contact" className="w-full sm:w-auto">
                Contact / Appointment <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white/70 ring-1 ring-slate-200/70 backdrop-blur shadow-[0_30px_90px_-70px_rgba(15,23,42,0.55)]">
            <div className="aspect-[16/9] w-full">
              <iframe
                title="Pets Galaxy Animal Hospital Map"
                src={iframeSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl bg-white/70 p-7 ring-1 ring-slate-200/70 backdrop-blur">
            <div className="text-sm font-semibold text-slate-900">Appointment request</div>
            <p className="mt-2 text-sm text-slate-600">
              Submit to open WhatsApp with your details prefilled—tap Send in WhatsApp to reach us.
              You can also call anytime.
            </p>
            <div className="mt-5">
              <AppointmentForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-slate-200/70 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Phone className="h-4 w-4 text-indigo-700" />
                Call
              </div>
              <a className="mt-2 block text-sm text-slate-700 hover:text-slate-900" href={`tel:${tel}`}>
                {siteConfig.phones.primary}
              </a>
              <Button
                href={`tel:${siteConfig.phones.emergency.replaceAll(" ", "")}`}
                variant="secondary"
                className="mt-4 w-full border border-rose-200/90 bg-gradient-to-r from-rose-50 to-orange-50/90 text-rose-950 shadow-sm ring-rose-200/70 hover:from-rose-100"
              >
                <Phone className="h-4 w-4 text-rose-700" />
                Emergency call
              </Button>
            </div>

            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-slate-200/70 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <MapPin className="h-4 w-4 text-indigo-700" />
                Address
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{siteConfig.address.full}</div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </div>
  );
}
