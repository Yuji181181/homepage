import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Activities from "@/components/sections/Activities";
import Projects from "@/components/sections/Projects";
import Articles from "@/components/sections/Articles";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Activities />
        <Projects />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
