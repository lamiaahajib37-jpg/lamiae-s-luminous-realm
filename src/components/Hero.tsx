import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Scene3D } from "./Scene3D";
import portrait from "@/assets/lamiae-portrait.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24"
    >
      {/* Animated grid bg (dark mode) */}
      <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-100" />

      {/* 3D scene background */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <Scene3D />
      </div>

      {/* Aurora orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--gradient-primary)", opacity: 0.25 }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cyan-glow), transparent)", opacity: 0.35 }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Available for freelance — Remote / Casablanca</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block">Lamiae</span>
            <span className="gradient-text neon-text block">Hajib.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            Lead IT Developer & Full-Stack Architect. 2+ years crafting ERPs,
            educational portals and e-commerce experiences with{" "}
            <span className="font-semibold text-foreground">Laravel, React & Node.js</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-105"
            >
              Hire me
            </a>
            <div className="flex items-center gap-2 pl-2">
              <a href="https://www.linkedin.com/in/lamyaahajib-7128a3297" target="_blank" rel="noreferrer"
                 className="glass grid h-11 w-11 place-items-center rounded-full transition-transform hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/lamiaahajib" target="_blank" rel="noreferrer"
                 className="glass grid h-11 w-11 place-items-center rounded-full transition-transform hover:scale-110">
                <Github className="h-4 w-4" />
              </a>
              <a href="mailto:lamyaahajib98@gmail.com"
                 className="glass grid h-11 w-11 place-items-center rounded-full transition-transform hover:scale-110">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-3"
          >
            {[
              { v: "2+", l: "Years" },
              { v: "15+", l: "Projects" },
              { v: "6+", l: "Stack" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-3 text-center">
                <div className="gradient-text text-2xl font-bold">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] opacity-60 blur-3xl"
               style={{ background: "var(--gradient-primary)" }} />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-3"
               style={{ boxShadow: "var(--shadow-elevated)" }}>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={portrait}
                alt="Lamiae Hajib portrait"
                className="aspect-[4/5] w-full object-cover"
                style={{ animation: "float 8s ease-in-out infinite" }}
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Open to opportunities</div>
                  <div className="text-xs text-muted-foreground">Casablanca · Remote</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
