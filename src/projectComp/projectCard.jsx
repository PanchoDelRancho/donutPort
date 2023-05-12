import Image from "next/image";
export default function ProjectCard({
  title,
  img,
  description,
  demoLink,
  codeLink,
}) {
  return (
    <div className="infoContainer projectContainer">
      <div>
        <Image
          className="webImage"
          src={img}
          alt="image"
          width={370}
          height={208}
        />
      </div>
      <div className="projectInfo">
        <div className="projectTitle">{title}</div>
        <div className="projectDes">{description}</div>
        <a href={demoLink} className="demo button">
          Demo
        </a>
        <a href={codeLink} className="code button">
          Code
        </a>
      </div>
    </div>
  );
}
