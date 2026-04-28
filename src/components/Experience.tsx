import { motion } from "framer-motion";
import { Briefcase, Building2, GraduationCap, Award, Code2 } from "lucide-react";
import { SectionHeader } from "./Skills";

const items = [
  {
    icon: Briefcase, kind: "CDI · Lead",
    role: "Responsable Développement Informatique",
    org: "Union IT Services — Casablanca",
    date: "Oct 2024 — Présent",
    bullets: [
      "Planification, développement et supervision de projets web et mobiles",
      "Application de gestion interne : pointeuse, tâches, objectifs, congés, réunions, ordres de mission, suivi clients",
      "ERP complet : facturation, devis, BL/BC, attestations, reçus, gestion de stock, suivi P&L",
      "Portail éducatif (consultants, étudiants, managers) : cours, paiements, inscriptions, chat",
      "Sites e-commerce & vitrine : ucgs.ma et uits-pro.com (WordPress)",
      "ERP CRM pour une agence de voyage",
      "Encadrement des stagiaires & enseignement des modules de développement web",
    ],
  },
  {
    icon: Building2, kind: "Freelance",
    role: "Développeuse Full-Stack Freelance",
    org: "Remote",
    date: "2024 — Présent",
    bullets: [
      "vision360online.com — site WordPress pour un opticien",
      "faceup.store — boutique Shopify pour une marque cosmétique",
      "icam-bat.com — site de conférence internationale sur les batteries (Faculté Ben M'sik & UM6P)",
    ],
  },
  {
    icon: Briefcase, kind: "Stage",
    role: "Stagiaire Développeuse Full-Stack",
    org: "webexAG — Casablanca",
    date: "Septembre 2025 (1 mois)",
    bullets: [
      "Développement du site kidscar.ma (WordPress)",
      "Développement de fonctionnalités back-end avec Laravel",
    ],
  },
  {
    icon: Briefcase, kind: "Stage PFE",
    role: "Stagiaire Développeuse Full-Stack (PFE)",
    org: "ARCHIPEL — Casablanca",
    date: "Mars 2024 — Mai 2024",
    bullets: [
      "Site web pour une agence antiparasitaire : dashboards admin & client, gestion des réclamations, envoi automatique de mails",
      "Stack : Laravel, React, SQL",
    ],
  },
  {
    icon: Briefcase, kind: "Stage",
    role: "Stagiaire Développeuse Full-Stack",
    org: "ARCHIPEL — Casablanca",
    date: "Janvier 2024 — Mars 2024",
    bullets: [
      "Conception et développement d'un site web complet avec Laravel",
      "Design UI avec Figma, gestion de base de données SQL",
    ],
  },
];

const projects = [
  {
    icon: Code2,
    title: "Application de Gestion de Tâches",
    org: "Projet Personnel · Remote",
    date: "Depuis Juin 2024",
    desc: "Création, organisation et suivi des tâches avec priorisation, statut et catégorisation par projet",
  },
  {
    icon: Code2,
    title: "Site de Commande en Ligne – Restaurant",
    org: "Projet Personnel · Remote",
    date: "Sept – Oct 2023",
    desc: "Site de livraison à domicile : React (front-end), Laravel (back-end), déploiement sur Netlify",
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "Licence — Développement Web & Mobile",
    org: "University of Montana (USA) · Remote",
    date: "2025 — 2026 (En cours)",
  },
  {
    icon: GraduationCap,
    title: "Technicien Spécialisé — Full-Stack",
    org: "OFPPT — Centre Hassania, Casablanca",
    date: "2022 — 2024",
  },
  {
    icon: GraduationCap,
    title: "Baccalauréat — Sciences Physiques",
    org: "Lycée Ibn Rochd, Casablanca",
    date: "2021 — 2022",
  },
];

const certs = [
  { icon: Award, title: "Scrum Foundation Professional (SFPC)", org: "CertiProf — Nov 2023" },
  { icon: Award, title: "Formation Laravel 8", org: "Mind Luster — Nov 2023" },
  { icon: Award, title: "Formation React JS", org: "Simplilearn — Nov 2023" },
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
                key={it.role + it.date}
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

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass mt-20 rounded-3xl p-7"
        >
          <h3 className="mb-5 text-2xl font-bold">Projets Personnels</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.org}</div>
                  <div className="text-xs text-muted-foreground/80">{p.date}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education + Certs side-by-side */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="mb-5 text-2xl font-bold">Formation</h3>
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