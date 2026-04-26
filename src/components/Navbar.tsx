import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-2 sm:gap-6 sm:px-6">
        <a href="#hero" className="flex items-center gap-2 px-2">
          <span className="grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px var(--neon)" }}>
            LH
          </span>
          <span className="hidden font-semibold tracking-tight sm:inline">Lamiae</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
