import { Activity, Baby, Bone, HeartPulse, Microscope, Scissors, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Clinical Examination",
    desc: "Routine checkups, skin/ear issues, appetite changes, fever, allergies—clear guidance and gentle handling.",
    icon: Activity,
  },
  {
    title: "Vaccination",
    desc: "Vaccination plans based on age, breed, and lifestyle—so your pet stays protected year-round.",
    icon: Baby,
  },
  {
    title: "Deworming",
    desc: "Safe, effective parasite control with reminders and guidance for prevention at home.",
    icon: Bone,
  },
  {
    title: "Diagnostics",
    desc: "Lab testing and clinical diagnostics to support accurate treatment decisions.",
    icon: Microscope,
  },
  {
    title: "Surgeries",
    desc: "From routine procedures to complex cases—careful monitoring and a comfort-first approach.",
    icon: Scissors,
  },
  {
    title: "Dentistry",
    desc: "Dental exams and treatments to keep teeth clean, gums healthy, and breath fresh.",
    icon: Smile,
  },
  {
    title: "Emergency Care",
    desc: "Quick triage and compassionate urgent care when your pet needs help fast.",
    icon: HeartPulse,
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header className="rounded-3xl bg-white/70 p-8 ring-1 ring-slate-200/70 backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Services
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          A clear, modern set of services focused on the essentials. (We’ve excluded
          X‑ray and Endoscopy as requested.)
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Request an appointment
          </Button>
          <Button href="/location" variant="secondary" size="lg" className="w-full sm:w-auto">
            Visit our location
          </Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-3xl bg-white/70 p-6 ring-1 ring-slate-200/70 backdrop-blur transition hover:-translate-y-1 hover:bg-white shadow-[0_18px_55px_-48px_rgba(15,23,42,0.45)]"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-[0_18px_55px_-38px_rgba(99,102,241,0.9)]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-base font-semibold text-slate-900">
                {s.title}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{s.desc}</p>
            <div className="mt-5 h-px bg-gradient-to-r from-indigo-200/60 via-violet-200/60 to-fuchsia-200/60" />
            <div className="mt-4 text-xs text-slate-500">
              Smooth, gentle care • Clear plan • Comfort-first
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

