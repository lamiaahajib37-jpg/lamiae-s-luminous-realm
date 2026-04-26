import { motion } from "framer-motion";
import {
  Atom, Container, Database, Layers, Server, Cloud,
  Code2, GitBranch, Palette,
} from "lucide-react";

const skills = [
  { name: "Laravel", desc: "PHP framework — ERP & APIs", icon: Layers, accent: "from-rose-500 to-orange-500", size: "lg" },
  { name: "ReactJS", desc: "Modern reactive UIs", icon: Atom, accent: "from-cyan-500 to-blue-500", size: "md" },
  { name: "Node.js", desc: "Express · REST APIs", icon: Server, accent: "from-emerald-500 to-teal-500", size: "md" },
  { name: "PHP", desc: "Backend mastery", icon: Code2, accent: "from-indigo-500 to-violet-500", size: "sm" },
  { name: "Docker", desc: "Containerized deploys", icon: Container, accent: "from-sky-500 to-blue-600", size: "sm" },
  { name: "AWS", desc: "Cloud infrastructure", icon: Cloud, accent: "from-amber-500 to-orange-600", size: "md" },
  { name: "MySQL · MongoDB", desc: "SQL + NoSQL", icon: Database, accent: "from-blue-500 to-indigo-600", size: "sm" },
  { name: "Git · GitHub", desc: "Version control", icon: GitBranch, accent: "from-zinc-500 to-zinc-700", size: "sm" },
  { name: "Figma · UI/UX", desc: "Pixel-perfect design", icon: Palette, accent: "from-fuchsia-500 to-pink-500", size: "sm" },
];

const sizeMap: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-1 md:row-span-1",
  sm: "md:col-span-1 md:row-span-1",
};

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Tech Stack" title="The tools I" highlight="craft with." />

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className={`glass group relative overflow-hidden rounded-3xl p-5 hover-lift ${sizeMap[s.size]}`}
            >
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-50`} />
              <div className="relative flex h-full flex-col justify-between">
                <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} shadow-lg`}>
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, highlight,
}: { eyebrow: string; title: string; highlight: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="glass mx-auto mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {title} <span className="gradient-text neon-text">{highlight}</span>
      </h2>
    </motion.div>
  );
}
