import ProjectCard from "../projectComp/projectCard";
import { ProjectsArray } from "../../public/assets/ProjectsArray";
export default function Projects() {
  const { title, description, img, demoLink, codeLink } = ProjectsArray[0];
  return (
    <div id="projects" className="skillSec">
      <div className="skillTitle">Projects</div>
      {ProjectsArray.map((project, index) => {
        return (
          <ProjectCard
            title={project.title}
            img={project.img}
            description={project.description}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
            key={index}
          />
        );
      })}
    </div>
  );
}
