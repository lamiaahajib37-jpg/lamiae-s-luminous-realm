import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Skills";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Contact" title="Let's build" highlight="something great." />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
                 style={{ background: "var(--gradient-primary)" }} />
            <div className="relative">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Available for freelance & full-time opportunities. Let's chat.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Mail, label: "lamyaahajib98@gmail.com", href: "mailto:lamyaahajib98@gmail.com" },
                  { icon: Phone, label: "+212 612 882 560", href: "tel:+212612882560" },
                  { icon: MapPin, label: "Sidi Maarouf, Casablanca", href: "#" },
                ].map((c) => (
                  <a key={c.label} href={c.href}
                     className="glass flex items-center gap-3 rounded-2xl p-3.5 transition-transform hover:-translate-y-0.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                         style={{ background: "var(--gradient-primary)" }}>
                      <c.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium">{c.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a href="https://www.linkedin.com/in/lamyaahajib-7128a3297" target="_blank" rel="noreferrer"
                   className="glass grid h-12 w-12 place-items-center rounded-2xl transition-transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com/lamiaahajib" target="_blank" rel="noreferrer"
                   className="glass grid h-12 w-12 place-items-center rounded-2xl transition-transform hover:scale-110">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); }}
            className="glass-strong rounded-3xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="Project, opportunity…" required />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                rows={5} required placeholder="Tell me about your project…"
                className="glass w-full resize-none rounded-2xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--ring)]"
              />
            </div>
            <button
              type="submit"
              className="shine mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              {sent ? "Message sent ✓" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Lamiae Hajib — Crafted with passion.</div>
          
        </footer>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name} type={type} placeholder={placeholder} required={required}
        className="glass w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--ring)]"
      />
    </div>
  );
}
