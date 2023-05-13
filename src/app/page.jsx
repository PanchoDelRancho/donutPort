import Donut from "../components/donut";
import Nav from "../components/nav";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
export default function Home() {
  return (
    <main>
      <div>
        <Donut />
        <Nav />
        <About />
        <Projects />
        <Contact />
        <div style={{ height: "4vh" }}></div>
      </div>
    </main>
  );
}
