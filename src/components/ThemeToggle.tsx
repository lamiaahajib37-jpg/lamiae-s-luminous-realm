import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle day / night mode"
      className="glass relative h-12 w-24 rounded-full p-1 transition-all hover:scale-105 active:scale-95"
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          left: isDark ? 4 : "calc(100% - 44px)",
          background: "var(--gradient-primary)",
          boxShadow: "0 0 25px var(--neon)",
        }}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-primary-foreground" />
          ) : (
            <Sun className="h-5 w-5 text-primary-foreground" />
          )}
        </motion.div>
      </motion.div>
      <div className="flex h-full items-center justify-between px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        <span className={isDark ? "opacity-0" : "opacity-100"}>Day</span>
        <span className={isDark ? "opacity-100" : "opacity-0"}>Night</span>
      </div>
    </button>
  );
}
