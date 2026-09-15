import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Activities from "@/components/sections/Activities";
import Projects from "@/components/sections/Projects";
import Articles from "@/components/sections/Articles";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <Activities />
      <Projects />
      <Articles />
    </main>
  );
}
