import Title from "../aboutComp/title";
import Statement from "../aboutComp/statement";
import Skills from "../aboutComp/skills";
export default function About() {
  return (
    <div>
      <Title />
      <div id="about">
        <Statement />
        <Skills />
      </div>
    </div>
  );
}
