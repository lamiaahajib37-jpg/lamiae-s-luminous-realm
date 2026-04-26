import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { SectionHeader } from "./Skills";
import mgmt from "@/assets/project-uits-mgmt.png";
import ucgs from "@/assets/project-ucgs.png";
import portail from "@/assets/project-uits-portail.png";
import admin from "@/assets/project-uits-admin.jpg";
import pro from "@/assets/project-uits-pro.jpg";
import access from "@/assets/project-access-morocco.jpg";
import icamBat from "@/assets/project-icam-bat.jpg";
import vision360 from "@/assets/project-vision360.jpg";
import faceup from "@/assets/project-faceup.jpg";

const projects = [
  {
    title: "UITS Management",
    tag: "Internal ERP",
    desc: "Internal management app — time tracking, tasks, leaves, missions, client follow-up.",
    stack: ["Laravel", "React", "MySQL"],
    url: "https://uits-mgmt.ma",
    img: mgmt, locked: true,
  },
  {
    title: "UCGS — Union Computers",
    tag: "E-commerce",
    desc: "Full e-commerce store for IT hardware & gaming gear.",
    stack: ["WordPress", "WooCommerce"],
    url: "https://ucgs.ma",
    img: ucgs, locked: false,
  },
  {
    title: "UITS Portail Éducatif",
    tag: "EdTech Portal",
    desc: "Student / consultant / manager portal: courses, payments, registration, chat.",
    stack: ["Laravel", "React", "WebSockets"],
    url: "https://uits-portail.ma",
    img: portail, locked: true,
  },
  {
    title: "UITS Administration",
    tag: "Admin ERP",
    desc: "ERP suite — invoicing, quotes, BL/BC, attestations, stock, P&L tracking.",
    stack: ["Laravel", "Vue", "MySQL"],
    url: "https://uits-administration.ma",
    img: admin, locked: true,
  },
  {
    title: "UITS Pro — Vitrine",
    tag: "Corporate site",
    desc: "Showcase site for Union IT Services with services, portfolio & contact.",
    stack: ["WordPress", "Custom Theme"],
    url: "https://uits-pro.com",
    img: pro, locked: false,
  },
  {
    title: "Access Morocco",
    tag: "SaaS · ERP",
    desc: "Modern ERP-style web platform deployed on Vercel.",
    stack: ["React", "Node.js", "Vercel"],
    url: "https://access-morocco.vercel.app",
    img: access, locked: false,
  },
  {
    title: "ICAM-BAT",
    tag: "Conference · EdTech",
    desc: "International Conference on Advanced Materials & Batteries — Ben M'sik · UM6P.",
    stack: ["WordPress", "Custom Theme", "PHP"],
    url: "https://icam-bat.com",
    img: icamBat, locked: false,
  },
  {
    title: "Vision360",
    tag: "Optical Store",
    desc: "Elegant WordPress storefront for an optical brand — frames, lenses & booking.",
    stack: ["WordPress", "WooCommerce", "Elementor"],
    url: "https://vision360online.com",
    img: vision360, locked: false,
  },
  {
    title: "Faceup",
    tag: "Beauty · E-commerce",
    desc: "Premium Shopify storefront for a cosmetics brand — luxury beauty experience.",
    stack: ["Shopify", "Liquid", "JS"],
    url: "https://faceup.store",
    img: faceup, locked: false,
  },
];

const freelance: { title: string; desc: string; url: string }[] = [];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Selected Work" title="Featured" highlight="projects." />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -8 }}
              className="glass group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90" />
                {p.locked && (
                  <div className="glass absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    <Lock className="h-3 w-3" /> Private
                  </div>
                )}
                <div className="glass absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Freelance strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-12 glass rounded-3xl p-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary" style={{ boxShadow: "0 0 12px var(--neon)" }} />
            <h3 className="text-lg font-semibold">Other freelance launches</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {freelance.map((f) => (
              <a key={f.title} href={f.url} target="_blank" rel="noreferrer"
                 className="glass group flex items-center justify-between rounded-2xl p-4 transition-transform hover:-translate-y-1">
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-xs text-muted-foreground">{f.desc}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
