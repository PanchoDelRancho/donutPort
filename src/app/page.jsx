import Donut from "../components/donut";
import Nav from "../components/nav";
import About from "../components/about";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <main>
      <div>
        <Donut />
        <Nav />
        <About />
        <Projects />
        hello world
      </div>
    </main>
  );
}
