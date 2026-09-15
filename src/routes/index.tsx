import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Activities from "@/components/sections/Activities";
import Projects from "@/components/sections/Projects";
import Articles from "@/components/sections/Articles";
import Contact from "@/components/sections/Contact";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Activities />
      <Projects />
      <Articles />
      <Contact />
    </main>
  );
}
