import { SiJavascript, SiMongodb } from "react-icons/si";
import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="skillSec">
      <div className="skillTitle">Skills</div>
      <div className="skillIconContainer">
        <BsFiletypeHtml className="skillIcon" />
        <FaNodeJs className="skillIcon" />
        <BsFiletypeCss className="skillIcon" />
        <SiMongodb className="skillIcon" />
        <FaReact className="skillIcon" />
        <TbBrandNextjs className="skillIcon" />
      </div>
    </div>
  );
}
