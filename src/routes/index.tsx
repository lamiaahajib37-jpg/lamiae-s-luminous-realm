import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lamiae Hajib — Lead IT Developer & Full-Stack Architect" },
      {
        name: "description",
        content:
          "Portfolio of Lamiae Hajib — Lead IT Developer & Full-Stack Architect specialised in Laravel, React, Node.js, ERP & SaaS systems. Available for freelance.",
      },
      { property: "og:title", content: "Lamiae Hajib — Full-Stack Architect" },
      { property: "og:description", content: "Lead IT Developer with 2+ years building ERPs, portals & e-commerce." },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
