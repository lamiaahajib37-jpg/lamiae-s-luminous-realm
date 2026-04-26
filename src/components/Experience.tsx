import { motion } from "framer-motion";
import { Briefcase, Building2, GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./Skills";

const items = [
  {
    icon: Briefcase, kind: "CDI · Lead",
    role: "Responsable Développement Informatique",
    org: "Union IT Services — Casablanca",
    date: "Oct 2024 — Present",
    bullets: [
      "Lead full-stack delivery of internal ERP, educational portal & CRM systems",
      "Built end-to-end ERP: invoicing, quotes, BL/BC, stock, P&L reporting",
      "Educational portal: students, consultants, managers — payments, courses, chat",
      "Mentor & train interns; teach web-development modules",
    ],
  },
  {
    icon: Building2, kind: "Freelance",
    role: "Full-Stack Developer (Freelance)",
    org: "Remote · 2024 — Present",
    date: "Ongoing",
    bullets: [
      "vision360online.com — WordPress site for an optician",
      "faceup.store — Shopify storefront for a cosmetics brand",
      "icam-bat.com — international battery conference site (Ben M'sik & UM6P)",
    ],
  },
  {
    icon: Briefcase, kind: "Internship",
    role: "Full-Stack Developer (PFE)",
    org: "ARCHIPEL — Casablanca",
    date: "Jan — May 2024",
    bullets: [
      "Designed full Laravel + React platform for an antiparasitic agency",
      "Admin & client dashboards, claims management, automated emails",
    ],
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor — Web & Mobile Development",
    org: "University of Montana (USA) · Remote",
    date: "2025 — 2026 (in progress)",
  },
  {
    icon: GraduationCap,
    title: "Technicien Spécialisé · Full-Stack",
    org: "OFPPT — Centre Hassania, Casablanca",
    date: "2022 — 2024",
  },
];

const certs = [
  { icon: Award, title: "Scrum Foundation Professional (SFPC)", org: "CertiProf — Nov 2023" },
  { icon: Award, title: "Laravel 8 Certification", org: "Mind Luster — Nov 2023" },
  { icon: Award, title: "React JS Certification", org: "Simplilearn — Nov 2023" },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Career" title="Professional" highlight="journey." />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2" />
                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="grid h-10 w-10 place-items-center rounded-full text-primary-foreground"
                       style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px var(--neon)" }}>
                    <it.icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-6">
                  <div className="glass hover-lift rounded-3xl p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {it.kind}
                      </span>
                      <span className="text-xs text-muted-foreground">{it.date}</span>
                    </div>
                    <h3 className="text-lg font-bold">{it.role}</h3>
                    <div className="text-sm text-muted-foreground">{it.org}</div>
                    <ul className="mt-3 space-y-1.5 text-sm">
                      {it.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education + Certs side-by-side */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="mb-5 text-2xl font-bold">Education</h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.title} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15">
                    <e.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                    <div className="text-xs text-muted-foreground/80">{e.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="mb-5 text-2xl font-bold">Certifications</h3>
            <div className="space-y-4">
              {certs.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                       style={{ background: "var(--gradient-primary)" }}>
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
